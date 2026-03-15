import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Task } from "@/data/chapters";
import { Check, X, ArrowRight, Terminal } from "lucide-react";

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
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Reset state when task changes
  useEffect(() => {
    setAnswers({});
    setFocusedBlank(null);
    setValidationState("idle");
    setErrors({});
  }, [task.id]);

  const handleSubmit = useCallback(() => {
    setValidationState("validating");

    // Simulate terraform plan
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
        setTimeout(onComplete, 1200);
      } else {
        setErrors(newErrors);
        setValidationState("error");
        onError();
        setTimeout(() => setValidationState("idle"), 2000);
      }
    }, 800);
  }, [answers, task.blanks, onComplete, onError]);

  // Cmd+Enter to submit
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

  const renderCode = () => {
    const parts = task.codeTemplate.split(/({{BLANK_\d+}})/g);

    return parts.map((part, i) => {
      const blankMatch = part.match(/{{(BLANK_\d+)}}/);
      if (blankMatch) {
        const blankId = blankMatch[1];
        const blank = task.blanks.find((b) => b.id === blankId);
        const isError = errors[blankId];
        const isSuccess = validationState === "success";
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

  return (
    <div className="flex flex-col h-full">
      {/* Task instruction */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground">{task.title}</h2>
        <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
      </div>

      {/* Code block */}
      <div className="code-block flex-1 overflow-auto whitespace-pre font-mono text-sm leading-relaxed shadow-elevated">
        {renderCode()}
      </div>

      {/* Bottom bar */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <kbd className="px-1.5 py-0.5 bg-secondary rounded-sm font-mono text-[10px]">⌘ Enter</kbd>
          <span>to validate</span>
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
              <span className="font-mono text-xs">Running terraform plan...</span>
            </motion.div>
          ) : validationState === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-success text-sm font-medium"
            >
              <Check className="w-4 h-4" />
              <span>Plan succeeded! No changes needed.</span>
            </motion.div>
          ) : validationState === "error" ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-destructive text-sm font-medium"
            >
              <X className="w-4 h-4" />
              <span>Plan failed. Check highlighted fields.</span>
            </motion.div>
          ) : (
            <motion.button
              key="submit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleSubmit}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-sm text-sm font-medium hover:bg-primary/90 transition-iq"
            >
              <span>Validate</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
