import { motion } from "framer-motion";
import { Chapter } from "@/data/types";
import { ProgressBar } from "./ProgressBar";

interface ChapterCardProps {
  chapter: Chapter;
  progress: number;
  isActive: boolean;
  onClick: () => void;
}

const categoryColors: Record<string, string> = {
  aws: "bg-primary/10 text-primary",
  terraform: "bg-accent/10 text-accent",
  gitlab: "bg-success/10 text-success",
};

const categoryLabels: Record<string, string> = {
  aws: "AWS SAA",
  terraform: "Terraform",
  gitlab: "GitLab CI/CD",
};

export function ChapterCard({ chapter, progress, isActive, onClick }: ChapterCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg transition-iq ${
        isActive ? "shadow-elevated bg-card" : "hover:bg-card/60"
      }`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{chapter.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-sm text-foreground truncate">{chapter.title}</h3>
            <span className={`text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${categoryColors[chapter.category]}`}>
              {categoryLabels[chapter.category] || chapter.category}
            </span>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2">{chapter.description}</p>
          <div className="mt-2 flex items-center gap-2">
            <ProgressBar value={progress} className="flex-1 rounded-full" />
            <span className="text-[10px] font-mono text-muted-foreground">{progress}%</span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
