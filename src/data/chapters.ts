export interface Task {
  id: string;
  title: string;
  description: string;
  type: "fill-blank" | "select-snippet";
  codeTemplate: string; // use {{BLANK}} for blanks
  blanks: { id: string; answer: string; hint?: string }[];
  options?: string[][]; // for select-snippet type
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "aws" | "terraform" | "devops";
  tasks: Task[];
}

export const chapters: Chapter[] = [
  {
    id: "vpc-basics",
    title: "VPC Basics",
    description: "Learn how to provision your first Virtual Private Cloud on AWS.",
    icon: "🌐",
    category: "aws",
    tasks: [
      {
        id: "vpc-1",
        title: "Create a VPC",
        description: "Declare a VPC resource with a CIDR block.",
        type: "fill-blank",
        codeTemplate: `resource "aws_vpc" "main" {
  cidr_block = "{{BLANK_1}}"

  tags = {
    Name = "{{BLANK_2}}"
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "10.0.0.0/16", hint: "A common private CIDR range" },
          { id: "BLANK_2", answer: "main-vpc", hint: "Name tag for the VPC" },
        ],
      },
      {
        id: "vpc-2",
        title: "Create a Subnet",
        description: "Add a public subnet to your VPC.",
        type: "fill-blank",
        codeTemplate: `resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.{{BLANK_1}}
  cidr_block = "{{BLANK_2}}"

  map_public_ip_on_launch = {{BLANK_3}}
}`,
        blanks: [
          { id: "BLANK_1", answer: "id", hint: "Reference the VPC's identifier" },
          { id: "BLANK_2", answer: "10.0.1.0/24", hint: "A /24 subnet within the VPC" },
          { id: "BLANK_3", answer: "true", hint: "Boolean to auto-assign public IPs" },
        ],
      },
      {
        id: "vpc-3",
        title: "Internet Gateway",
        description: "Attach an Internet Gateway to allow outbound traffic.",
        type: "fill-blank",
        codeTemplate: `resource "{{BLANK_1}}" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "main-igw"
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "aws_internet_gateway", hint: "AWS resource type for internet gateways" },
        ],
      },
    ],
  },
  {
    id: "s3-storage",
    title: "S3 Storage",
    description: "Master S3 bucket creation, policies, and versioning.",
    icon: "🪣",
    category: "aws",
    tasks: [
      {
        id: "s3-1",
        title: "Create an S3 Bucket",
        description: "Declare a public S3 bucket with versioning.",
        type: "fill-blank",
        codeTemplate: `resource "aws_s3_bucket" "data" {
  bucket = "{{BLANK_1}}"

  tags = {
    Environment = "{{BLANK_2}}"
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "my-app-data-bucket", hint: "Globally unique bucket name" },
          { id: "BLANK_2", answer: "production", hint: "Environment tag value" },
        ],
      },
      {
        id: "s3-2",
        title: "Enable Versioning",
        description: "Turn on versioning for your S3 bucket.",
        type: "fill-blank",
        codeTemplate: `resource "aws_s3_bucket_versioning" "data" {
  bucket = aws_s3_bucket.data.{{BLANK_1}}

  versioning_configuration {
    status = "{{BLANK_2}}"
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "id", hint: "Reference the bucket" },
          { id: "BLANK_2", answer: "Enabled", hint: "Versioning status value" },
        ],
      },
    ],
  },
  {
    id: "iam-roles",
    title: "IAM & Roles",
    description: "Configure identity, access management and assume role policies.",
    icon: "🔐",
    category: "aws",
    tasks: [
      {
        id: "iam-1",
        title: "Create an IAM Role",
        description: "Define an IAM role with an assume role policy.",
        type: "fill-blank",
        codeTemplate: `resource "aws_iam_role" "lambda_exec" {
  name = "{{BLANK_1}}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action    = "{{BLANK_2}}"
      Effect    = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
    }]
  })
}`,
        blanks: [
          { id: "BLANK_1", answer: "lambda-exec-role", hint: "Name for the IAM role" },
          { id: "BLANK_2", answer: "sts:AssumeRole", hint: "The STS action for assuming roles" },
        ],
      },
    ],
  },
  {
    id: "tf-state",
    title: "Terraform State",
    description: "Configure remote state storage and locking with S3 and DynamoDB.",
    icon: "📦",
    category: "terraform",
    tasks: [
      {
        id: "tf-state-1",
        title: "Backend Configuration",
        description: "Set up S3 backend for Terraform state.",
        type: "fill-blank",
        codeTemplate: `terraform {
  backend "{{BLANK_1}}" {
    bucket         = "tf-state-bucket"
    key            = "{{BLANK_2}}"
    region         = "us-east-1"
    dynamodb_table = "tf-locks"
    encrypt        = {{BLANK_3}}
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "s3", hint: "AWS storage service for state" },
          { id: "BLANK_2", answer: "terraform.tfstate", hint: "Default state file name" },
          { id: "BLANK_3", answer: "true", hint: "Should state be encrypted?" },
        ],
      },
    ],
  },
  {
    id: "docker-basics",
    title: "Docker Basics",
    description: "Learn Dockerfile syntax and container configuration.",
    icon: "🐳",
    category: "devops",
    tasks: [
      {
        id: "docker-1",
        title: "Write a Dockerfile",
        description: "Create a multi-stage Dockerfile for a Node.js app.",
        type: "fill-blank",
        codeTemplate: `FROM {{BLANK_1}} AS builder
WORKDIR /app
COPY package*.json ./
RUN {{BLANK_2}}
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
{{BLANK_3}} 3000
CMD ["node", "dist/index.js"]`,
        blanks: [
          { id: "BLANK_1", answer: "node:18-alpine", hint: "Lightweight Node.js base image" },
          { id: "BLANK_2", answer: "npm install", hint: "Install dependencies command" },
          { id: "BLANK_3", answer: "EXPOSE", hint: "Dockerfile instruction to expose a port" },
        ],
      },
    ],
  },
  {
    id: "ci-cd",
    title: "CI/CD Pipelines",
    description: "Build GitHub Actions workflows for automated deployments.",
    icon: "⚡",
    category: "devops",
    tasks: [
      {
        id: "cicd-1",
        title: "GitHub Actions Workflow",
        description: "Create a basic CI workflow that runs tests on push.",
        type: "fill-blank",
        codeTemplate: `name: CI
on:
  {{BLANK_1}}:
    branches: [main]

jobs:
  test:
    runs-on: {{BLANK_2}}
    steps:
      - uses: actions/{{BLANK_3}}@v4
      - run: npm install
      - run: npm test`,
        blanks: [
          { id: "BLANK_1", answer: "push", hint: "Git event that triggers the workflow" },
          { id: "BLANK_2", answer: "ubuntu-latest", hint: "Common GitHub Actions runner" },
          { id: "BLANK_3", answer: "checkout", hint: "Action to clone the repository" },
        ],
      },
    ],
  },
];
