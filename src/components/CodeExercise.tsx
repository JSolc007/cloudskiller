import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Task } from "@/data/types";
import { Check, X, ArrowRight, Terminal, HelpCircle } from "lucide-react";

interface CodeExerciseProps {
  task: Task;
  onComplete: () => void;
  onError: () => void;
}

export function CodeExercise({ task, onComplete, onError }: CodeExerciseProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [focusedBlank, setFocusedBlank] = useState<string | null>(null);
  const [validationState, setValidationState] = useState<"idle" | "validating" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [helpUsed, setHelpUsed] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<string, string[]>>({});
  const [revealedAnswer, setRevealedAnswer] = useState<Record<string, { hint: string; answer: string } | null>>({});
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    setAnswers({});
    setFocusedBlank(null);
    setValidationState("idle");
    setErrors({});
    setHelpUsed(false);
    setEliminatedOptions({});
    setRevealedAnswer({});
  }, [task.id]);

  const handleSubmit = useCallback(() => {
    setValidationState("validating");

    setTimeout(() => {
      const newErrors: Record<string, boolean> = {};
      let allCorrect = true;

      for (const blank of task.blanks) {
        const userAnswer = (answers[blank.id] || "").trim().toLowerCase();
        const correctAnswer = blank.answer.toLowerCase();
        if (userAnswer !== correctAnswer) {
          newErrors[blank.id] = true;
          allCorrect = false;
        }
      }

      if (allCorrect) {
        setValidationState("success");
        setTimeout(onComplete, 800);
      } else {
        setErrors(newErrors);
        setValidationState("error");
        onError();
        setTimeout(() => setValidationState("idle"), 1500);
      }
    }, 400);
  }, [answers, task.blanks, onComplete, onError]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        handleSubmit();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleSubmit]);

  const handleOptionSelect = (blankId: string, option: string) => {
    if (validationState === "validating" || validationState === "success") return;
    setAnswers((prev) => ({ ...prev, [blankId]: option }));
    setErrors((prev) => ({ ...prev, [blankId]: false }));
  };

  const handleFiftyFifty = () => {
    if (helpUsed) return;
    setHelpUsed(true);

    const newEliminated: Record<string, string[]> = {};
    for (const blank of task.blanks) {
      if (!blank.options) continue;
      const wrongOptions = blank.options.filter((o) => o !== blank.answer);
      // Shuffle and pick 2 to eliminate
      const shuffled = [...wrongOptions].sort(() => Math.random() - 0.5);
      newEliminated[blank.id] = shuffled.slice(0, 2);
    }
    setEliminatedOptions(newEliminated);
    // Clear any current selection that was eliminated
    setAnswers((prev) => {
      const next = { ...prev };
      for (const [blankId, eliminated] of Object.entries(newEliminated)) {
        if (next[blankId] && eliminated.includes(next[blankId])) {
          delete next[blankId];
        }
      }
      return next;
    });
  };

  const handleRevealAnswer = () => {
    if (helpUsed) return;
    setHelpUsed(true);

    const revealed: Record<string, { hint: string; answer: string }> = {};
    for (const blank of task.blanks) {
      revealed[blank.id] = {
        hint: blank.hint || "",
        answer: blank.answer,
      };
    }
    setRevealedAnswer(revealed);
  };

  const renderCode = () => {
    const parts = task.codeTemplate.split(/({{BLANK_\d+}})/g);

    return parts.map((part, i) => {
      const blankMatch = part.match(/{{(BLANK_\d+)}}/);
      if (blankMatch) {
        const blankId = blankMatch[1];
        const blank = task.blanks.find((b) => b.id === blankId);
        const isError = errors[blankId];
        const isSuccess = validationState === "success";

        if (task.type === "select-option" && blank?.options) {
          const selected = answers[blankId];
          const displayValue = isSuccess ? blank.answer : selected || "______";
          return (
            <span
              key={i}
              className={`inline-block font-mono text-sm px-2 py-0.5 rounded border-b-2 cursor-pointer transition-iq
                ${isSuccess ? "border-success text-success bg-success/10" : ""}
                ${isError && !isSuccess ? "border-destructive text-destructive bg-destructive/10 animate-shake" : ""}
                ${!isError && !isSuccess && selected ? "border-primary text-primary bg-primary/10" : ""}
                ${!isError && !isSuccess && !selected ? "border-muted-foreground/30 text-muted-foreground" : ""}
              `}
            >
              {displayValue}
            </span>
          );
        }

        const isFocused = focusedBlank === blankId;
        return (
          <span key={i} className="relative inline-block">
            <input
              ref={(el) => { inputRefs.current[blankId] = el; }}
              type="text"
              value={isSuccess ? blank?.answer ?? "" : answers[blankId] || ""}
              onChange={(e) => {
                setAnswers((prev) => ({ ...prev, [blankId]: e.target.value }));
                setErrors((prev) => ({ ...prev, [blankId]: false }));
              }}
              onFocus={() => setFocusedBlank(blankId)}
              onBlur={() => setFocusedBlank(null)}
              placeholder={blank?.hint || "..."}
              disabled={validationState === "validating" || validationState === "success"}
              className={`inline-block font-mono text-sm bg-transparent border-b-2 px-1 py-0.5 
                focus:outline-none transition-iq min-w-[80px]
                ${isSuccess ? "border-success text-success" : ""}
                ${isError && !isSuccess ? "border-destructive text-destructive animate-shake" : ""}
                ${!isError && !isSuccess ? "border-primary text-primary" : ""}
                ${isFocused && !isError && !isSuccess ? "bg-primary/10" : ""}
                placeholder:text-muted-foreground/40
              `}
              style={{ width: `${Math.max(80, (answers[blankId]?.length || blank?.hint?.length || 8) * 8.5)}px` }}
            />
          </span>
        );
      }
      return <span key={i} className={`${focusedBlank ? "opacity-50" : "opacity-100"} transition-iq`}>{part}</span>;
    });
  };

  const renderOptions = () => {
    if (task.type !== "select-option") return null;

    return (
      <div className="mt-4 space-y-3 w-full">
        {task.blanks.map((blank) => {
          if (!blank.options) return null;
          const eliminated = eliminatedOptions[blank.id] || [];
          return (
            <div key={blank.id} className="grid grid-cols-2 gap-2 w-full">
              {blank.options.map((option) => {
                const isEliminated = eliminated.includes(option);
                if (isEliminated) {
                  return (
                    <button
                      key={option}
                      disabled
                      className="w-full px-3 py-3 rounded-lg text-sm font-medium border border-border/30 bg-secondary/20 text-muted-foreground/30 line-through cursor-not-allowed"
                    >
                      {option}
                    </button>
                  );
                }
                const isSelected = answers[blank.id] === option;
                const isError = errors[blank.id] && isSelected;
                const isCorrect = validationState === "success" && option === blank.answer;
                return (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect(blank.id, option)}
                    disabled={validationState === "validating" || validationState === "success"}
                    className={`w-full px-3 py-3 rounded-lg text-sm font-medium transition-iq border
                      ${isCorrect ? "bg-success/15 border-success text-success" : ""}
                      ${isError ? "bg-destructive/15 border-destructive text-destructive animate-shake" : ""}
                      ${isSelected && !isError && !isCorrect ? "bg-primary/15 border-primary text-primary" : ""}
                      ${!isSelected && !isCorrect ? "bg-secondary/50 border-border text-foreground hover:bg-secondary hover:border-primary/30" : ""}
                      disabled:opacity-60 disabled:cursor-not-allowed
                    `}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  const renderRevealedAnswers = () => {
    if (task.type !== "fill-blank" || Object.keys(revealedAnswer).length === 0) return null;

    return (
      <div className="mt-3 space-y-2">
        {task.blanks.map((blank) => {
          const revealed = revealedAnswer[blank.id];
          if (!revealed) return null;
          return (
            <div key={blank.id} className="px-3 py-2 rounded-lg bg-accent/10 border border-accent/30 text-sm">
              {revealed.hint && (
                <p className="text-muted-foreground">
                  <span className="font-medium text-accent">Hint:</span> {revealed.hint}
                </p>
              )}
              <p className="text-foreground mt-1">
                <span className="font-medium text-accent">Answer:</span>{" "}
                <code className="font-mono bg-accent/10 px-1.5 py-0.5 rounded">{revealed.answer}</code>
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  // Auto-submit for select-option when all blanks filled
  useEffect(() => {
    if (task.type === "select-option" && validationState === "idle") {
      const allFilled = task.blanks.every((b) => answers[b.id]);
      if (allFilled) {
        const timer = setTimeout(handleSubmit, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [answers, task.type, task.blanks, validationState, handleSubmit]);

  return (
    <div className="flex flex-col h-full">
      {/* Task instruction */}
      <div className="mb-4 flex items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold text-foreground">{task.title}</h2>
          <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
        </div>

        {/* Help button */}
        {!helpUsed && validationState !== "success" && (
          <button
            onClick={task.type === "select-option" ? handleFiftyFifty : handleRevealAnswer}
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 transition-iq"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            {task.type === "select-option" ? "50:50" : "Hint"}
          </button>
        )}
        {helpUsed && validationState !== "success" && (
          <span className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-muted/40 bg-muted/30 text-muted-foreground">
            <HelpCircle className="w-3.5 h-3.5" />
            Used
          </span>
        )}
      </div>

      {/* Code block */}
      <div className="code-block overflow-auto whitespace-pre font-mono text-sm leading-relaxed shadow-elevated">
        {renderCode()}
      </div>

      {/* Options for select-option */}
      {renderOptions()}

      {/* Revealed answers for fill-blank */}
      {renderRevealedAnswers()}

      {/* Bottom bar */}
      <div className="mt-auto pt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {task.type === "fill-blank" && (
            <>
              <kbd className="px-1.5 py-0.5 bg-secondary rounded-sm font-mono text-[10px]">⌘ Enter</kbd>
              <span>to validate</span>
            </>
          )}
        </div>

        <AnimatePresence mode="wait">
          {validationState === "validating" ? (
            <motion.div
              key="validating"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Terminal className="w-4 h-4 animate-pulse" />
              <span className="font-mono text-xs">Checking...</span>
            </motion.div>
          ) : validationState === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-success text-sm font-medium"
            >
              <Check className="w-4 h-4" />
              <span>Correct!</span>
            </motion.div>
          ) : validationState === "error" ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-destructive text-sm font-medium"
            >
              <X className="w-4 h-4" />
              <span>Try again!</span>
            </motion.div>
          ) : task.type === "fill-blank" ? (
            <motion.button
              key="submit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleSubmit}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-sm text-sm font-medium hover:bg-primary/90 transition-iq"
            >
              <span>Check</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
