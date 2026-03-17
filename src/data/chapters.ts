export type { Task, Chapter } from "./types";
import { awsChapters } from "./aws-chapters";
import { terraformChapters } from "./terraform-chapters";
import { devopsChapters } from "./devops-chapters";

export const chapters = [...awsChapters, ...terraformChapters, ...devopsChapters];
