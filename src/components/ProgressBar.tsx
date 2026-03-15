import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
}

export function ProgressBar({ value, className = "" }: ProgressBarProps) {
  return (
    <div className={`h-1 w-full bg-secondary overflow-hidden ${className}`}>
      <motion.div
        className="h-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
      />
    </div>
  );
}
