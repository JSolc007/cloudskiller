import { Chapter } from "./types";

export const terraformChapters: Chapter[] = [
  // === State Management ===
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
      {
        id: "tf-state-2",
        title: "State Locking Table",
        description: "Create a DynamoDB table for state locking.",
        type: "fill-blank",
        codeTemplate: `resource "aws_dynamodb_table" "tf_locks" {
  name         = "tf-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "{{BLANK_1}}"

  attribute {
    name = "LockID"
    type = "{{BLANK_2}}"
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "LockID", hint: "Terraform uses this as the lock key" },
          { id: "BLANK_2", answer: "S", hint: "String type" },
        ],
      },
    ],
  },

  // === Variables & Outputs ===
  {
    id: "tf-variables",
    title: "Variables & Outputs",
    description: "Define input variables, locals, and outputs for reusable configs.",
    icon: "📋",
    category: "terraform",
    tasks: [
      {
        id: "tf-var-1",
        title: "Input Variables",
        description: "Declare typed input variables with defaults.",
        type: "fill-blank",
        codeTemplate: `variable "environment" {
  description = "Deployment environment"
  type        = {{BLANK_1}}
  default     = "{{BLANK_2}}"

  validation {
    condition     = contains(["dev", "staging", "production"], var.environment)
    error_message = "{{BLANK_3}}"
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "string", hint: "Terraform type for text values" },
          { id: "BLANK_2", answer: "dev", hint: "Default environment" },
          { id: "BLANK_3", answer: "Must be dev, staging, or production.", hint: "Validation error message" },
        ],
      },
      {
        id: "tf-var-2",
        title: "Complex Variables",
        description: "Use object and list types for structured config.",
        type: "fill-blank",
        codeTemplate: `variable "vpc_config" {
  type = {{BLANK_1}}({
    cidr_block = string
    subnets    = list(string)
    enable_dns = bool
  })

  default = {
    cidr_block = "10.0.0.0/16"
    subnets    = ["10.0.1.0/24", "10.0.2.0/24"]
    enable_dns = {{BLANK_2}}
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "object", hint: "Terraform type for structured data" },
          { id: "BLANK_2", answer: "true", hint: "Enable DNS support" },
        ],
      },
      {
        id: "tf-var-3",
        title: "Outputs",
        description: "Export values for use by other modules.",
        type: "fill-blank",
        codeTemplate: `output "vpc_id" {
  description = "The ID of the VPC"
  value       = aws_vpc.main.{{BLANK_1}}
}

output "db_endpoint" {
  description = "Database connection endpoint"
  value       = aws_db_instance.main.{{BLANK_2}}
  sensitive   = {{BLANK_3}}
}`,
        blanks: [
          { id: "BLANK_1", answer: "id", hint: "VPC identifier" },
          { id: "BLANK_2", answer: "endpoint", hint: "RDS endpoint attribute" },
          { id: "BLANK_3", answer: "true", hint: "Hide sensitive values in output" },
        ],
      },
      {
        id: "tf-var-4",
        title: "Local Values",
        description: "Use locals for computed or repeated values.",
        type: "fill-blank",
        codeTemplate: `locals {
  common_tags = {
    Project     = var.project_name
    Environment = var.{{BLANK_1}}
    ManagedBy   = "{{BLANK_2}}"
  }

  name_prefix = "\${var.project_name}-\${var.environment}"
}

resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr
  tags       = {{BLANK_3}}.common_tags
}`,
        blanks: [
          { id: "BLANK_1", answer: "environment", hint: "Variable reference" },
          { id: "BLANK_2", answer: "terraform", hint: "Tool managing these resources" },
          { id: "BLANK_3", answer: "local", hint: "Reference to locals block" },
        ],
      },
    ],
  },

  // === Modules ===
  {
    id: "tf-modules",
    title: "Modules",
    description: "Build and consume reusable Terraform modules.",
    icon: "🧩",
    category: "terraform",
    tasks: [
      {
        id: "tf-mod-1",
        title: "Module Source",
        description: "Call a module from the Terraform registry.",
        type: "fill-blank",
        codeTemplate: `module "vpc" {
  source  = "{{BLANK_1}}/vpc/aws"
  version = "{{BLANK_2}}"

  name       = "my-vpc"
  cidr       = "10.0.0.0/16"
  azs        = ["us-east-1a", "us-east-1b"]
  public_subnets  = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnets = ["10.0.3.0/24", "10.0.4.0/24"]

  enable_nat_gateway = {{BLANK_3}}
}`,
        blanks: [
          { id: "BLANK_1", answer: "terraform-aws-modules", hint: "Official AWS module namespace" },
          { id: "BLANK_2", answer: "5.1.0", hint: "Specific module version" },
          { id: "BLANK_3", answer: "true", hint: "Enable NAT for private subnets" },
        ],
      },
      {
        id: "tf-mod-2",
        title: "Local Module",
        description: "Reference a local module and pass variables.",
        type: "fill-blank",
        codeTemplate: `module "database" {
  source = "{{BLANK_1}}"

  db_name     = "appdb"
  db_password = var.db_password
  vpc_id      = module.vpc.{{BLANK_2}}
  subnet_ids  = module.vpc.private_subnets
}`,
        blanks: [
          { id: "BLANK_1", answer: "./modules/database", hint: "Relative path to local module" },
          { id: "BLANK_2", answer: "vpc_id", hint: "Output from the VPC module" },
        ],
      },
    ],
  },

  // === Provisioners & Data Sources ===
  {
    id: "tf-data-sources",
    title: "Data Sources",
    description: "Query existing infrastructure with data sources.",
    icon: "🔍",
    category: "terraform",
    tasks: [
      {
        id: "tf-data-1",
        title: "AMI Data Source",
        description: "Look up the latest Amazon Linux 2 AMI.",
        type: "fill-blank",
        codeTemplate: `data "aws_ami" "amazon_linux" {
  most_recent = {{BLANK_1}}
  owners      = ["{{BLANK_2}}"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }
}

resource "aws_instance" "web" {
  ami = data.aws_ami.amazon_linux.{{BLANK_3}}
}`,
        blanks: [
          { id: "BLANK_1", answer: "true", hint: "Get the most recent matching AMI" },
          { id: "BLANK_2", answer: "amazon", hint: "AMI owner for Amazon images" },
          { id: "BLANK_3", answer: "id", hint: "Use the found AMI's ID" },
        ],
      },
      {
        id: "tf-data-2",
        title: "Availability Zones",
        description: "Dynamically get available AZs in a region.",
        type: "fill-blank",
        codeTemplate: `data "{{BLANK_1}}" "available" {
  state = "available"
}

resource "aws_subnet" "public" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(var.vpc_cidr, 8, count.{{BLANK_2}})
  availability_zone = data.aws_availability_zones.available.names[count.index]
}`,
        blanks: [
          { id: "BLANK_1", answer: "aws_availability_zones", hint: "Data source for AZs" },
          { id: "BLANK_2", answer: "index", hint: "Iterator variable in count" },
        ],
      },
    ],
  },

  // === Lifecycle & Meta-Arguments ===
  {
    id: "tf-lifecycle",
    title: "Lifecycle & Meta-Args",
    description: "Control resource behavior with lifecycle rules and meta-arguments.",
    icon: "🔄",
    category: "terraform",
    tasks: [
      {
        id: "tf-life-1",
        title: "Lifecycle Rules",
        description: "Prevent accidental destruction of critical resources.",
        type: "fill-blank",
        codeTemplate: `resource "aws_db_instance" "main" {
  engine         = "postgres"
  instance_class = "db.t3.micro"

  lifecycle {
    {{BLANK_1}} = true
    ignore_changes = [
      {{BLANK_2}}
    ]
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "prevent_destroy", hint: "Stop terraform destroy on this resource" },
          { id: "BLANK_2", answer: "tags", hint: "Ignore changes to this attribute" },
        ],
      },
      {
        id: "tf-life-2",
        title: "for_each Loop",
        description: "Create multiple subnets using for_each.",
        type: "fill-blank",
        codeTemplate: `variable "subnets" {
  default = {
    "public-a"  = "10.0.1.0/24"
    "public-b"  = "10.0.2.0/24"
  }
}

resource "aws_subnet" "public" {
  for_each   = var.{{BLANK_1}}
  vpc_id     = aws_vpc.main.id
  cidr_block = each.{{BLANK_2}}

  tags = {
    Name = each.{{BLANK_3}}
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "subnets", hint: "Variable to iterate over" },
          { id: "BLANK_2", answer: "value", hint: "The map value (CIDR block)" },
          { id: "BLANK_3", answer: "key", hint: "The map key (subnet name)" },
        ],
      },
      {
        id: "tf-life-3",
        title: "Depends On",
        description: "Explicit dependency between resources.",
        type: "fill-blank",
        codeTemplate: `resource "aws_instance" "app" {
  ami           = var.ami_id
  instance_type = "t3.micro"

  {{BLANK_1}} = [
    aws_db_instance.{{BLANK_2}}
  ]
}`,
        blanks: [
          { id: "BLANK_1", answer: "depends_on", hint: "Meta-argument for explicit deps" },
          { id: "BLANK_2", answer: "main", hint: "Resource to depend on" },
        ],
      },
    ],
  },

  // === Workspaces & Providers ===
  {
    id: "tf-providers",
    title: "Providers & Workspaces",
    description: "Configure providers, required versions, and workspaces.",
    icon: "🏗️",
    category: "terraform",
    tasks: [
      {
        id: "tf-prov-1",
        title: "Required Providers",
        description: "Pin provider versions in required_providers.",
        type: "fill-blank",
        codeTemplate: `terraform {
  required_version = "{{BLANK_1}}"

  required_providers {
    aws = {
      source  = "{{BLANK_2}}"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "{{BLANK_3}}"
}`,
        blanks: [
          { id: "BLANK_1", answer: ">= 1.5.0", hint: "Minimum Terraform version" },
          { id: "BLANK_2", answer: "hashicorp/aws", hint: "Provider source in registry" },
          { id: "BLANK_3", answer: "us-east-1", hint: "AWS region" },
        ],
      },
      {
        id: "tf-prov-2",
        title: "Multiple Providers",
        description: "Use aliased providers for multi-region deployment.",
        type: "fill-blank",
        codeTemplate: `provider "aws" {
  region = "us-east-1"
}

provider "aws" {
  alias  = "{{BLANK_1}}"
  region = "eu-west-1"
}

resource "aws_s3_bucket" "eu_backup" {
  provider = aws.{{BLANK_1}}
  bucket   = "backup-eu"
}`,
        blanks: [
          { id: "BLANK_1", answer: "europe", hint: "Alias name for the EU provider" },
        ],
      },
    ],
  },

  // === Import & State Commands ===
  {
    id: "tf-commands",
    title: "CLI Commands",
    description: "Master essential Terraform CLI commands.",
    icon: "⌨️",
    category: "terraform",
    tasks: [
      {
        id: "tf-cmd-1",
        title: "Init & Plan",
        description: "Initialize and plan a Terraform configuration.",
        type: "fill-blank",
        codeTemplate: `# Initialize Terraform (download providers)
terraform {{BLANK_1}}

# Preview changes without applying
terraform {{BLANK_2}} -out=tfplan

# Apply the saved plan
terraform {{BLANK_3}} tfplan`,
        blanks: [
          { id: "BLANK_1", answer: "init", hint: "First command in any Terraform project" },
          { id: "BLANK_2", answer: "plan", hint: "Preview infrastructure changes" },
          { id: "BLANK_3", answer: "apply", hint: "Execute the changes" },
        ],
      },
      {
        id: "tf-cmd-2",
        title: "State Management",
        description: "Manage resources in Terraform state.",
        type: "fill-blank",
        codeTemplate: `# List all resources in state
terraform state {{BLANK_1}}

# Move a resource to a new address
terraform state {{BLANK_2}} aws_instance.old aws_instance.new

# Import an existing resource
terraform {{BLANK_3}} aws_instance.web i-1234567890abcdef0`,
        blanks: [
          { id: "BLANK_1", answer: "list", hint: "Show all tracked resources" },
          { id: "BLANK_2", answer: "mv", hint: "Rename a resource in state" },
          { id: "BLANK_3", answer: "import", hint: "Bring existing infra into state" },
        ],
      },
    ],
  },
];
