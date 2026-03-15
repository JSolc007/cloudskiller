import { Check } from "lucide-react";
import { Task } from "@/data/chapters";

interface TaskNodeProps {
  task: Task;
  index: number;
  isCompleted: boolean;
  isCurrent: boolean;
  onClick: () => void;
}

export function TaskNode({ task, index, isCompleted, isCurrent, onClick }: TaskNodeProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Vertical line connector */}
      <div className="flex flex-col items-center">
        <button
          onClick={onClick}
          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-semibold transition-iq ${
            isCompleted
              ? "bg-primary text-primary-foreground"
              : isCurrent
              ? "bg-primary/20 text-primary border-2 border-primary animate-pulse-node"
              : "bg-secondary text-muted-foreground"
          }`}
        >
          {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
        </button>
      </div>
      <button onClick={onClick} className="text-left flex-1 group">
        <p className={`text-sm font-medium transition-iq ${
          isCompleted ? "text-muted-foreground" : isCurrent ? "text-foreground" : "text-muted-foreground"
        } group-hover:text-foreground`}>
          {task.title}
        </p>
        <p className="text-xs text-muted-foreground">{task.description}</p>
      </button>
    </div>
  );
}
