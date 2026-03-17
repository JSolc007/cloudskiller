export interface Task {
  id: string;
  title: string;
  description: string;
  type: "fill-blank" | "select-snippet";
  codeTemplate: string;
  blanks: { id: string; answer: string; hint?: string }[];
  options?: string[][];
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "aws" | "terraform" | "devops";
  tasks: Task[];
}
