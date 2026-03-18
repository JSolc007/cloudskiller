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

  const markCompleted = useCallback((chapterId: string, taskId: string, helped: boolean = false) => {
    setProgress((prev) => {
      const next = {
        ...prev,
        [chapterId]: {
          ...prev[chapterId],
          [taskId]: {
            completed: true,
            helped,
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
            helped: prev[chapterId]?.[taskId]?.helped ?? false,
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
      const score = Object.values(progress[chapterId]).reduce((acc, t) => {
        if (!t.completed) return acc;
        return acc + (t.helped ? 0.5 : 1);
      }, 0);
      return Math.round((score / totalTasks) * 100);
    },
    [progress]
  );

  const isTaskHelped = useCallback(
    (chapterId: string, taskId: string) => {
      return progress[chapterId]?.[taskId]?.helped ?? false;
    },
    [progress]
  );

  return { progress, markCompleted, incrementAttempt, isTaskCompleted, isTaskHelped, getChapterProgress };

}
