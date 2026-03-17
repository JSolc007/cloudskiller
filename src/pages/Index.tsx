import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chapters } from "@/data/chapters";
import { useProgress } from "@/hooks/useProgress";
import { ChapterCard } from "@/components/ChapterCard";
import { TaskNode } from "@/components/TaskNode";
import { CodeExercise } from "@/components/CodeExercise";
import { ProgressBar } from "@/components/ProgressBar";
import { ChevronLeft, BookOpen, Code2, Cloud, GitBranch } from "lucide-react";

const Index = () => {
  const { markCompleted, incrementAttempt, isTaskCompleted, getChapterProgress } = useProgress();
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);

  const selectedChapter = useMemo(
    () => chapters.find((c) => c.id === selectedChapterId),
    [selectedChapterId]
  );
  const selectedTask = useMemo(
    () => selectedChapter?.tasks.find((t) => t.id === selectedTaskId),
    [selectedChapter, selectedTaskId]
  );

  const filteredChapters = useMemo(
    () => (filterCategory ? chapters.filter((c) => c.category === filterCategory) : chapters),
    [filterCategory]
  );

  const totalProgress = useMemo(() => {
    const totalTasks = chapters.reduce((acc, c) => acc + c.tasks.length, 0);
    const completedTasks = chapters.reduce(
      (acc, c) => acc + c.tasks.filter((t) => isTaskCompleted(c.id, t.id)).length,
      0
    );
    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  }, [isTaskCompleted]);

  const handleTaskComplete = () => {
    if (selectedChapter && selectedTask) {
      markCompleted(selectedChapter.id, selectedTask.id);

      // Auto-advance to next task
      const currentIndex = selectedChapter.tasks.findIndex((t) => t.id === selectedTask.id);
      const nextTask = selectedChapter.tasks[currentIndex + 1];
      if (nextTask) {
        setTimeout(() => setSelectedTaskId(nextTask.id), 1500);
      } else {
        setTimeout(() => {
          setSelectedTaskId(null);
        }, 1500);
      }
    }
  };

  const handleTaskError = () => {
    if (selectedChapter && selectedTask) {
      incrementAttempt(selectedChapter.id, selectedTask.id);
    }
  };

  // Find first incomplete task in chapter
  const getFirstIncomplete = (chapterId: string) => {
    const chapter = chapters.find((c) => c.id === chapterId);
    if (!chapter) return null;
    return chapter.tasks.find((t) => !isTaskCompleted(chapterId, t.id))?.id ?? chapter.tasks[0]?.id;
  };

  // Exercise mode
  if (selectedTask && selectedChapter) {
    const taskIndex = selectedChapter.tasks.findIndex((t) => t.id === selectedTask.id);
    const chapterTaskProgress = Math.round(
      ((selectedChapter.tasks.filter((t) => isTaskCompleted(selectedChapter.id, t.id)).length) /
        selectedChapter.tasks.length) *
        100
    );

    return (
      <div className="h-screen flex flex-col bg-background">
        {/* Top bar */}
        <ProgressBar value={chapterTaskProgress} />
        <div className="flex items-center gap-3 px-6 py-3 border-b border-border">
          <button
            onClick={() => setSelectedTaskId(null)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-iq"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          <span className="text-sm text-muted-foreground">
            {selectedChapter.icon} {selectedChapter.title}
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            {taskIndex + 1}/{selectedChapter.tasks.length}
          </span>
        </div>

        {/* Exercise area */}
        <div className="flex-1 flex items-center justify-center p-6">
          <motion.div
            key={selectedTask.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            className="w-full max-w-3xl h-full max-h-[600px] flex flex-col"
          >
            <CodeExercise task={selectedTask} onComplete={handleTaskComplete} onError={handleTaskError} />
          </motion.div>
        </div>
      </div>
    );
  }

  // Chapter detail (task list)
  if (selectedChapter) {
    return (
      <div className="h-screen flex flex-col bg-background">
        <ProgressBar value={getChapterProgress(selectedChapter.id, selectedChapter.tasks.length)} />
        <div className="flex items-center gap-3 px-6 py-3 border-b border-border">
          <button
            onClick={() => setSelectedChapterId(null)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-iq"
          >
            <ChevronLeft className="w-4 h-4" />
            All chapters
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="max-w-2xl mx-auto px-6 py-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{selectedChapter.icon}</span>
              <div>
                <h1 className="text-xl font-semibold text-foreground">{selectedChapter.title}</h1>
                <p className="text-sm text-muted-foreground">{selectedChapter.description}</p>
              </div>
            </div>

            <div className="mt-8 space-y-1">
              {selectedChapter.tasks.map((task, index) => {
                const completed = isTaskCompleted(selectedChapter.id, task.id);
                const firstIncomplete = getFirstIncomplete(selectedChapter.id);
                return (
                  <div key={task.id}>
                    {index > 0 && (
                      <div className="ml-4 w-px h-4 bg-border" />
                    )}
                    <TaskNode
                      task={task}
                      index={index}
                      isCompleted={completed}
                      isCurrent={task.id === firstIncomplete}
                      onClick={() => setSelectedTaskId(task.id)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="h-screen flex flex-col bg-background">
      <ProgressBar value={totalProgress} />

      {/* Header */}
      <header className="px-6 py-4 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cloud className="w-5 h-5 text-primary" />
            <h1 className="text-lg font-semibold text-foreground">InfraQuest</h1>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Code2 className="w-3.5 h-3.5" />
            <span className="font-mono">{totalProgress}% complete</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Welcome message */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Provision your skills.</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Master cloud infrastructure through hands-on syntax exercises.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-2 mb-6">
            {[
              { key: null, label: "All", icon: BookOpen },
              { key: "aws", label: "AWS SAA", icon: Cloud },
              { key: "terraform", label: "Terraform", icon: Code2 },
              { key: "gitlab", label: "GitLab CI/CD", icon: GitBranch },
            ].map((cat) => (
              <button
                key={cat.label}
                onClick={() => setFilterCategory(cat.key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-iq ${
                  filterCategory === cat.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                <cat.icon className="w-3 h-3" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Chapter grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filterCategory || "all"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-2"
            >
              {filteredChapters.map((chapter) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  progress={getChapterProgress(chapter.id, chapter.tasks.length)}
                  isActive={false}
                  onClick={() => {
                    setSelectedChapterId(chapter.id);
                  }}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats hint */}
          <div className="mt-8 p-4 bg-card rounded-lg shadow-card">
            <p className="text-xs text-muted-foreground font-mono">
              💡 84% of Terraform users forget the <code className="text-primary">lifecycle</code> block. Practice makes permanent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
