import { useState, useCallback } from "react";

interface TaskProgress {
  completed: boolean;
  helped: boolean;
  attempts: number;
}

interface ProgressState {
  [chapterId: string]: {
    [taskId: string]: TaskProgress;
  };
}

const STORAGE_KEY = "infraquest-progress";

function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(state: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(loadProgress);

  const markCompleted = useCallback((chapterId: string, taskId: string) => {
    setProgress((prev) => {
      const next = {
        ...prev,
        [chapterId]: {
          ...prev[chapterId],
          [taskId]: {
            completed: true,
            attempts: (prev[chapterId]?.[taskId]?.attempts ?? 0) + 1,
          },
        },
      };
      saveProgress(next);
      return next;
    });
  }, []);

  const incrementAttempt = useCallback((chapterId: string, taskId: string) => {
    setProgress((prev) => {
      const next = {
        ...prev,
        [chapterId]: {
          ...prev[chapterId],
          [taskId]: {
            completed: prev[chapterId]?.[taskId]?.completed ?? false,
            attempts: (prev[chapterId]?.[taskId]?.attempts ?? 0) + 1,
          },
        },
      };
      saveProgress(next);
      return next;
    });
  }, []);

  const isTaskCompleted = useCallback(
    (chapterId: string, taskId: string) => {
      return progress[chapterId]?.[taskId]?.completed ?? false;
    },
    [progress]
  );

  const getChapterProgress = useCallback(
    (chapterId: string, totalTasks: number) => {
      if (!progress[chapterId]) return 0;
      const completed = Object.values(progress[chapterId]).filter((t) => t.completed).length;
      return Math.round((completed / totalTasks) * 100);
    },
    [progress]
  );

  return { progress, markCompleted, incrementAttempt, isTaskCompleted, getChapterProgress };
}
