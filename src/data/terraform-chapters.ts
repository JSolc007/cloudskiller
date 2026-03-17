import { Chapter } from "./types";

export const terraformChapters: Chapter[] = [
  // ─── IaC Concepts ───
  {
    id: "tf-iac",
    title: "IaC Concepts",
    description: "Infrastructure as Code fundamentals and Terraform benefits.",
    icon: "📜",
    category: "terraform",
    tasks: [
      {
        id: "iac-1", title: "What is IaC?", description: "IaC manages infrastructure through…", type: "select-option",
        codeTemplate: `IaC manages infrastructure using {{BLANK_1}} instead of manual processes.`,
        blanks: [{ id: "BLANK_1", answer: "code/configuration files", options: ["code/configuration files", "GUI consoles", "CLI commands", "spreadsheets"] }],
      },
      {
        id: "iac-2", title: "Declarative vs Imperative", description: "Terraform is…", type: "select-option",
        codeTemplate: `Terraform uses a {{BLANK_1}} approach to infrastructure.`,
        blanks: [{ id: "BLANK_1", answer: "declarative", options: ["declarative", "imperative", "procedural", "functional"] }],
      },
      {
        id: "iac-3", title: "Idempotent", description: "Terraform is idempotent — applying twice…", type: "select-option",
        codeTemplate: `Applying the same config twice results in {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "no changes", options: ["no changes", "duplicate resources", "an error", "a rollback"] }],
      },
      {
        id: "iac-4", title: "HCL", description: "Terraform's config language is called…", type: "fill-blank",
        codeTemplate: `Terraform uses {{BLANK_1}} (HashiCorp Configuration Language).`,
        blanks: [{ id: "BLANK_1", answer: "HCL", hint: "3-letter abbreviation" }],
      },
    ],
  },

  // ─── CLI Workflow ───
  {
    id: "tf-cli",
    title: "CLI Workflow",
    description: "init, plan, apply, destroy — the core workflow.",
    icon: "⌨️",
    category: "terraform",
    tasks: [
      {
        id: "cli-1", title: "First Command", description: "Which command downloads providers?", type: "fill-blank",
        codeTemplate: `terraform {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "init", hint: "Initialize a working directory" }],
      },
      {
        id: "cli-2", title: "Preview Changes", description: "Which command shows what will change?", type: "fill-blank",
        codeTemplate: `terraform {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "plan", hint: "Preview without applying" }],
      },
      {
        id: "cli-3", title: "Apply Changes", description: "Which command creates/updates resources?", type: "fill-blank",
        codeTemplate: `terraform {{BLANK_1}} -auto-approve`,
        blanks: [{ id: "BLANK_1", answer: "apply", hint: "Execute the plan" }],
      },
      {
        id: "cli-4", title: "Destroy", description: "Which command tears down all resources?", type: "fill-blank",
        codeTemplate: `terraform {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "destroy", hint: "Remove all managed resources" }],
      },
      {
        id: "cli-5", title: "Format Code", description: "Which command auto-formats .tf files?", type: "fill-blank",
        codeTemplate: `terraform {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "fmt", hint: "Format command" }],
      },
      {
        id: "cli-6", title: "Validate", description: "Which command checks syntax?", type: "fill-blank",
        codeTemplate: `terraform {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "validate", hint: "Check config validity" }],
      },
    ],
  },

  // ─── Providers ───
  {
    id: "tf-providers",
    title: "Providers",
    description: "Configure and manage Terraform providers.",
    icon: "🔌",
    category: "terraform",
    tasks: [
      {
        id: "prov-1", title: "Provider Source", description: "AWS provider source in the registry?", type: "fill-blank",
        codeTemplate: `required_providers {
  aws = {
    source = "{{BLANK_1}}"
  }
}`,
        blanks: [{ id: "BLANK_1", answer: "hashicorp/aws", hint: "namespace/provider" }],
      },
      {
        id: "prov-2", title: "Version Constraint", description: "~> 5.0 means…", type: "select-option",
        codeTemplate: `version "~> 5.0" allows {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: ">= 5.0, < 6.0", options: [">= 5.0, < 6.0", "exactly 5.0", "> 5.0", "any version"] }],
      },
      {
        id: "prov-3", title: "Provider Alias", description: "Multiple providers need an…", type: "fill-blank",
        codeTemplate: `provider "aws" {
  {{BLANK_1}} = "eu"
  region = "eu-west-1"
}`,
        blanks: [{ id: "BLANK_1", answer: "alias", hint: "Keyword for alternate provider config" }],
      },
      {
        id: "prov-4", title: "Lock File", description: "Provider versions are locked in…", type: "fill-blank",
        codeTemplate: `Provider hashes are stored in {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: ".terraform.lock.hcl", hint: "Hidden lock file name" }],
      },
    ],
  },

  // ─── Resources & Data Sources ───
  {
    id: "tf-resources",
    title: "Resources & Data",
    description: "Resource blocks, data sources, and references.",
    icon: "🧱",
    category: "terraform",
    tasks: [
      {
        id: "res-1", title: "Resource Syntax", description: "Fill in the resource block.", type: "fill-blank",
        codeTemplate: `{{BLANK_1}} "aws_instance" "web" {
  ami           = "ami-12345"
  instance_type = "t3.micro"
}`,
        blanks: [{ id: "BLANK_1", answer: "resource", hint: "Block type for creating infra" }],
      },
      {
        id: "res-2", title: "Data Source", description: "Fill in the data source block.", type: "fill-blank",
        codeTemplate: `{{BLANK_1}} "aws_ami" "latest" {
  most_recent = true
  owners      = ["amazon"]
}`,
        blanks: [{ id: "BLANK_1", answer: "data", hint: "Block type for querying existing infra" }],
      },
      {
        id: "res-3", title: "Resource Reference", description: "How to reference the VPC id?", type: "fill-blank",
        codeTemplate: `subnet_id = {{BLANK_1}}.main.id`,
        blanks: [{ id: "BLANK_1", answer: "aws_vpc", hint: "resource_type.resource_name.attribute" }],
      },
      {
        id: "res-4", title: "Data Reference", description: "How to reference a data source?", type: "fill-blank",
        codeTemplate: `ami = {{BLANK_1}}.aws_ami.latest.id`,
        blanks: [{ id: "BLANK_1", answer: "data", hint: "Prefix for data source references" }],
      },
      {
        id: "res-5", title: "Depends On", description: "Explicit dependency keyword?", type: "fill-blank",
        codeTemplate: `{{BLANK_1}} = [aws_db_instance.main]`,
        blanks: [{ id: "BLANK_1", answer: "depends_on", hint: "Meta-argument for explicit deps" }],
      },
    ],
  },

  // ─── Variables & Outputs ───
  {
    id: "tf-variables",
    title: "Variables & Outputs",
    description: "Input variables, locals, outputs, and tfvars.",
    icon: "📋",
    category: "terraform",
    tasks: [
      {
        id: "var-1", title: "Variable Block", description: "Declare a variable.", type: "fill-blank",
        codeTemplate: `{{BLANK_1}} "region" {
  type    = string
  default = "us-east-1"
}`,
        blanks: [{ id: "BLANK_1", answer: "variable", hint: "Block type for inputs" }],
      },
      {
        id: "var-2", title: "Reference Variable", description: "How to use a variable?", type: "fill-blank",
        codeTemplate: `region = {{BLANK_1}}.region`,
        blanks: [{ id: "BLANK_1", answer: "var", hint: "Prefix for variable references" }],
      },
      {
        id: "var-3", title: "Variable Types", description: "Which type is for key-value pairs?", type: "select-option",
        codeTemplate: `type = {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "map(string)", options: ["map(string)", "list(string)", "object", "set(string)"] }],
      },
      {
        id: "var-4", title: "Locals", description: "How to reference a local value?", type: "fill-blank",
        codeTemplate: `tags = {{BLANK_1}}.common_tags`,
        blanks: [{ id: "BLANK_1", answer: "local", hint: "Prefix for local values" }],
      },
      {
        id: "var-5", title: "Output", description: "Define an output value.", type: "fill-blank",
        codeTemplate: `{{BLANK_1}} "vpc_id" {
  value = aws_vpc.main.id
}`,
        blanks: [{ id: "BLANK_1", answer: "output", hint: "Block type for exports" }],
      },
      {
        id: "var-6", title: "Sensitive Output", description: "Hide output from CLI display?", type: "fill-blank",
        codeTemplate: `output "password" {
  value     = var.db_password
  {{BLANK_1}} = true
}`,
        blanks: [{ id: "BLANK_1", answer: "sensitive", hint: "Flag to mask output" }],
      },
      {
        id: "var-7", title: "tfvars", description: "Variable values file extension?", type: "fill-blank",
        codeTemplate: `# File: production.{{BLANK_1}}
region = "eu-west-1"`,
        blanks: [{ id: "BLANK_1", answer: "tfvars", hint: "Variable values file extension" }],
      },
      {
        id: "var-8", title: "Env Var Override", description: "Environment variable prefix for Terraform?", type: "fill-blank",
        codeTemplate: `export {{BLANK_1}}_region="eu-west-1"`,
        blanks: [{ id: "BLANK_1", answer: "TF_VAR", hint: "Prefix for env var overrides" }],
      },
    ],
  },

  // ─── State Management ───
  {
    id: "tf-state",
    title: "State Management",
    description: "Local/remote state, locking, import, and state commands.",
    icon: "📦",
    category: "terraform",
    tasks: [
      {
        id: "st-1", title: "State Purpose", description: "State maps config to…", type: "select-option",
        codeTemplate: `Terraform state maps configuration to {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "real-world resources", options: ["real-world resources", "provider APIs", "local files", "git repos"] }],
      },
      {
        id: "st-2", title: "Default State File", description: "Default state file name?", type: "fill-blank",
        codeTemplate: `Default state is stored in {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "terraform.tfstate", hint: "terraform.____" }],
      },
      {
        id: "st-3", title: "Remote Backend", description: "Configure S3 backend.", type: "fill-blank",
        codeTemplate: `backend "{{BLANK_1}}" {
  bucket = "my-state"
  key    = "prod/terraform.tfstate"
}`,
        blanks: [{ id: "BLANK_1", answer: "s3", hint: "AWS storage service" }],
      },
      {
        id: "st-4", title: "State Locking", description: "S3 backend uses which service for locking?", type: "select-option",
        codeTemplate: `S3 backend uses {{BLANK_1}} for state locking.`,
        blanks: [{ id: "BLANK_1", answer: "DynamoDB", options: ["DynamoDB", "S3 locks", "Redis", "CloudWatch"] }],
      },
      {
        id: "st-5", title: "State List", description: "Command to list resources in state?", type: "fill-blank",
        codeTemplate: `terraform state {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "list", hint: "List all tracked resources" }],
      },
      {
        id: "st-6", title: "Import", description: "Command to import existing infra?", type: "fill-blank",
        codeTemplate: `terraform {{BLANK_1}} aws_instance.web i-1234567890`,
        blanks: [{ id: "BLANK_1", answer: "import", hint: "Bring existing resources into state" }],
      },
      {
        id: "st-7", title: "State Move", description: "Rename a resource in state?", type: "fill-blank",
        codeTemplate: `terraform state {{BLANK_1}} aws_instance.old aws_instance.new`,
        blanks: [{ id: "BLANK_1", answer: "mv", hint: "Move/rename command" }],
      },
    ],
  },

  // ─── Modules ───
  {
    id: "tf-modules",
    title: "Modules",
    description: "Create, use, and publish reusable modules.",
    icon: "🧩",
    category: "terraform",
    tasks: [
      {
        id: "mod-1", title: "Module Block", description: "Call a module.", type: "fill-blank",
        codeTemplate: `{{BLANK_1}} "vpc" {
  source = "./modules/vpc"
  cidr   = "10.0.0.0/16"
}`,
        blanks: [{ id: "BLANK_1", answer: "module", hint: "Block type for calling modules" }],
      },
      {
        id: "mod-2", title: "Registry Module", description: "Registry source format?", type: "fill-blank",
        codeTemplate: `source = "{{BLANK_1}}/vpc/aws"`,
        blanks: [{ id: "BLANK_1", answer: "terraform-aws-modules", hint: "Official module namespace" }],
      },
      {
        id: "mod-3", title: "Module Output", description: "Reference a module's output?", type: "fill-blank",
        codeTemplate: `vpc_id = {{BLANK_1}}.vpc.vpc_id`,
        blanks: [{ id: "BLANK_1", answer: "module", hint: "Prefix for module outputs" }],
      },
      {
        id: "mod-4", title: "Child Module", description: "A called module is called a…", type: "select-option",
        codeTemplate: `A module called by another is a {{BLANK_1}} module.`,
        blanks: [{ id: "BLANK_1", answer: "child", options: ["child", "parent", "root", "nested"] }],
      },
      {
        id: "mod-5", title: "Root Module", description: "The top-level config is the…", type: "select-option",
        codeTemplate: `The working directory config is the {{BLANK_1}} module.`,
        blanks: [{ id: "BLANK_1", answer: "root", options: ["root", "main", "parent", "base"] }],
      },
    ],
  },

  // ─── Expressions & Functions ───
  {
    id: "tf-expressions",
    title: "Expressions & Functions",
    description: "for_each, count, built-in functions, conditionals.",
    icon: "🔧",
    category: "terraform",
    tasks: [
      {
        id: "exp-1", title: "Count", description: "Create 3 instances with count.", type: "fill-blank",
        codeTemplate: `resource "aws_instance" "web" {
  {{BLANK_1}} = 3
  ami           = var.ami
  instance_type = "t3.micro"
}`,
        blanks: [{ id: "BLANK_1", answer: "count", hint: "Meta-argument for multiple resources" }],
      },
      {
        id: "exp-2", title: "for_each", description: "Iterate over a map.", type: "fill-blank",
        codeTemplate: `resource "aws_subnet" "this" {
  {{BLANK_1}} = var.subnets
  cidr_block = each.value
}`,
        blanks: [{ id: "BLANK_1", answer: "for_each", hint: "Meta-argument for map iteration" }],
      },
      {
        id: "exp-3", title: "each.key", description: "In for_each, the map key is…", type: "fill-blank",
        codeTemplate: `tags = { Name = {{BLANK_1}}.key }`,
        blanks: [{ id: "BLANK_1", answer: "each", hint: "Iterator object in for_each" }],
      },
      {
        id: "exp-4", title: "Conditional", description: "Terraform ternary syntax?", type: "fill-blank",
        codeTemplate: `instance_type = var.env == "prod" {{BLANK_1}} "m5.large" : "t3.micro"`,
        blanks: [{ id: "BLANK_1", answer: "?", hint: "Ternary operator" }],
      },
      {
        id: "exp-5", title: "join function", description: "Join list elements into a string?", type: "fill-blank",
        codeTemplate: `value = {{BLANK_1}}(",", var.subnets)`,
        blanks: [{ id: "BLANK_1", answer: "join", hint: "String join function" }],
      },
      {
        id: "exp-6", title: "lookup function", description: "Get value from a map with default?", type: "fill-blank",
        codeTemplate: `ami = {{BLANK_1}}(var.amis, var.region, "ami-default")`,
        blanks: [{ id: "BLANK_1", answer: "lookup", hint: "Map lookup function" }],
      },
    ],
  },

  // ─── Lifecycle & Provisioners ───
  {
    id: "tf-lifecycle",
    title: "Lifecycle Rules",
    description: "prevent_destroy, create_before_destroy, ignore_changes.",
    icon: "🔄",
    category: "terraform",
    tasks: [
      {
        id: "lf-1", title: "Prevent Destroy", description: "Block accidental deletion.", type: "fill-blank",
        codeTemplate: `lifecycle {
  {{BLANK_1}} = true
}`,
        blanks: [{ id: "BLANK_1", answer: "prevent_destroy", hint: "Stop terraform destroy" }],
      },
      {
        id: "lf-2", title: "Create Before Destroy", description: "Zero-downtime replacement.", type: "fill-blank",
        codeTemplate: `lifecycle {
  {{BLANK_1}} = true
}`,
        blanks: [{ id: "BLANK_1", answer: "create_before_destroy", hint: "New resource before old is deleted" }],
      },
      {
        id: "lf-3", title: "Ignore Changes", description: "Ignore tag changes.", type: "fill-blank",
        codeTemplate: `lifecycle {
  {{BLANK_1}} = [tags]
}`,
        blanks: [{ id: "BLANK_1", answer: "ignore_changes", hint: "Skip drift for specific attributes" }],
      },
      {
        id: "lf-4", title: "Provisioners", description: "Provisioners are a…", type: "select-option",
        codeTemplate: `HashiCorp considers provisioners a {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "last resort", options: ["last resort", "best practice", "requirement", "default"] }],
      },
    ],
  },

  // ─── Workspaces & Backends ───
  {
    id: "tf-workspaces",
    title: "Workspaces",
    description: "Manage multiple environments with workspaces.",
    icon: "🏢",
    category: "terraform",
    tasks: [
      {
        id: "ws-1", title: "Default Workspace", description: "Default workspace name?", type: "fill-blank",
        codeTemplate: `The default workspace is called "{{BLANK_1}}".`,
        blanks: [{ id: "BLANK_1", answer: "default", hint: "Name of the initial workspace" }],
      },
      {
        id: "ws-2", title: "New Workspace", description: "Create a workspace.", type: "fill-blank",
        codeTemplate: `terraform workspace {{BLANK_1}} staging`,
        blanks: [{ id: "BLANK_1", answer: "new", hint: "Subcommand to create workspace" }],
      },
      {
        id: "ws-3", title: "Current Workspace", description: "Reference current workspace in config?", type: "fill-blank",
        codeTemplate: `tags = { Env = terraform.{{BLANK_1}} }`,
        blanks: [{ id: "BLANK_1", answer: "workspace", hint: "Built-in reference to current workspace" }],
      },
      {
        id: "ws-4", title: "Select Workspace", description: "Switch to an existing workspace.", type: "fill-blank",
        codeTemplate: `terraform workspace {{BLANK_1}} production`,
        blanks: [{ id: "BLANK_1", answer: "select", hint: "Switch command" }],
      },
    ],
  },

  // ─── Terraform Cloud ───
  {
    id: "tf-cloud",
    title: "Terraform Cloud",
    description: "Remote execution, Sentinel, VCS integration.",
    icon: "☁️",
    category: "terraform",
    tasks: [
      {
        id: "tfc-1", title: "Execution Modes", description: "Default Terraform Cloud execution mode?", type: "select-option",
        codeTemplate: `The default execution mode is {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "remote", options: ["remote", "local", "agent", "hybrid"] }],
      },
      {
        id: "tfc-2", title: "Sentinel", description: "Sentinel is a…", type: "select-option",
        codeTemplate: `Sentinel is a {{BLANK_1}} framework for Terraform.`,
        blanks: [{ id: "BLANK_1", answer: "policy-as-code", options: ["policy-as-code", "testing", "monitoring", "deployment"] }],
      },
      {
        id: "tfc-3", title: "Backend Config", description: "Configure Terraform Cloud backend.", type: "fill-blank",
        codeTemplate: `terraform {
  cloud {
    organization = "my-org"
    workspaces {
      {{BLANK_1}} = "prod"
    }
  }
}`,
        blanks: [{ id: "BLANK_1", answer: "name", hint: "Workspace identifier key" }],
      },
    ],
  },
];
