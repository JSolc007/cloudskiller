import { Chapter } from "./types";

export const awsChapters: Chapter[] = [
  // === VPC & Networking ===
  {
    id: "vpc-basics",
    title: "VPC Basics",
    description: "Provision your first Virtual Private Cloud on AWS.",
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
      {
        id: "vpc-4",
        title: "NAT Gateway",
        description: "Create a NAT Gateway for private subnet internet access.",
        type: "fill-blank",
        codeTemplate: `resource "aws_eip" "nat" {
  domain = "{{BLANK_1}}"
}

resource "aws_nat_gateway" "main" {
  allocation_id = aws_eip.nat.{{BLANK_2}}
  subnet_id     = aws_subnet.{{BLANK_3}}.id
}`,
        blanks: [
          { id: "BLANK_1", answer: "vpc", hint: "EIP domain for VPC usage" },
          { id: "BLANK_2", answer: "id", hint: "Reference the EIP" },
          { id: "BLANK_3", answer: "public", hint: "NAT GW must be in a public subnet" },
        ],
      },
      {
        id: "vpc-5",
        title: "Route Table",
        description: "Create a route table with a default route to the IGW.",
        type: "fill-blank",
        codeTemplate: `resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "{{BLANK_1}}"
    gateway_id = aws_internet_gateway.igw.{{BLANK_2}}
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "0.0.0.0/0", hint: "Default route CIDR" },
          { id: "BLANK_2", answer: "id", hint: "Reference the gateway" },
        ],
      },
    ],
  },

  // === S3 Storage ===
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
        description: "Declare an S3 bucket with tags.",
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
      {
        id: "s3-3",
        title: "Server-Side Encryption",
        description: "Enable default encryption on your bucket.",
        type: "fill-blank",
        codeTemplate: `resource "aws_s3_bucket_server_side_encryption_configuration" "data" {
  bucket = aws_s3_bucket.data.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "{{BLANK_1}}"
    }
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "aws:kms", hint: "KMS-based encryption algorithm" },
        ],
      },
      {
        id: "s3-4",
        title: "Bucket Policy",
        description: "Allow CloudFront to read from S3 via OAC.",
        type: "fill-blank",
        codeTemplate: `resource "aws_s3_bucket_policy" "cdn" {
  bucket = aws_s3_bucket.data.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "{{BLANK_1}}"
      Principal = { Service = "cloudfront.amazonaws.com" }
      Action    = "s3:{{BLANK_2}}"
      Resource  = "\${aws_s3_bucket.data.arn}/*"
    }]
  })
}`,
        blanks: [
          { id: "BLANK_1", answer: "Allow", hint: "IAM effect to grant access" },
          { id: "BLANK_2", answer: "GetObject", hint: "S3 action to read objects" },
        ],
      },
      {
        id: "s3-5",
        title: "Lifecycle Rules",
        description: "Move old objects to Glacier after 90 days.",
        type: "fill-blank",
        codeTemplate: `resource "aws_s3_bucket_lifecycle_configuration" "data" {
  bucket = aws_s3_bucket.data.id

  rule {
    id     = "archive"
    status = "Enabled"

    transition {
      days          = {{BLANK_1}}
      storage_class = "{{BLANK_2}}"
    }
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "90", hint: "Days before transition" },
          { id: "BLANK_2", answer: "GLACIER", hint: "Cold storage class" },
        ],
      },
    ],
  },

  // === IAM & Roles ===
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
      {
        id: "iam-2",
        title: "IAM Policy Document",
        description: "Create a policy allowing DynamoDB access.",
        type: "fill-blank",
        codeTemplate: `resource "aws_iam_policy" "dynamodb_access" {
  name = "dynamodb-access"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect   = "Allow"
      Action   = [
        "dynamodb:{{BLANK_1}}",
        "dynamodb:{{BLANK_2}}",
        "dynamodb:Scan"
      ]
      Resource = "{{BLANK_3}}"
    }]
  })
}`,
        blanks: [
          { id: "BLANK_1", answer: "GetItem", hint: "Read a single item" },
          { id: "BLANK_2", answer: "PutItem", hint: "Write a single item" },
          { id: "BLANK_3", answer: "*", hint: "Resource ARN (all for simplicity)" },
        ],
      },
      {
        id: "iam-3",
        title: "Attach Policy to Role",
        description: "Attach a managed policy to an IAM role.",
        type: "fill-blank",
        codeTemplate: `resource "aws_iam_role_policy_attachment" "lambda_dynamodb" {
  role       = aws_iam_role.lambda_exec.{{BLANK_1}}
  policy_arn = aws_iam_policy.dynamodb_access.{{BLANK_2}}
}`,
        blanks: [
          { id: "BLANK_1", answer: "name", hint: "Reference the role's name" },
          { id: "BLANK_2", answer: "arn", hint: "Reference the policy's ARN" },
        ],
      },
    ],
  },

  // === EC2 Instances ===
  {
    id: "ec2-instances",
    title: "EC2 Instances",
    description: "Launch and configure EC2 instances with security groups.",
    icon: "🖥️",
    category: "aws",
    tasks: [
      {
        id: "ec2-1",
        title: "Launch an Instance",
        description: "Create an EC2 instance with a specific AMI.",
        type: "fill-blank",
        codeTemplate: `resource "aws_instance" "web" {
  ami           = "{{BLANK_1}}"
  instance_type = "{{BLANK_2}}"
  subnet_id     = aws_subnet.public.id

  tags = {
    Name = "web-server"
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "ami-0c55b159cbfafe1f0", hint: "Amazon Linux 2 AMI ID" },
          { id: "BLANK_2", answer: "t3.micro", hint: "Small, burstable instance type" },
        ],
      },
      {
        id: "ec2-2",
        title: "Security Group",
        description: "Create a security group allowing HTTP and SSH.",
        type: "fill-blank",
        codeTemplate: `resource "aws_security_group" "web" {
  vpc_id = aws_vpc.main.id

  ingress {
    from_port   = {{BLANK_1}}
    to_port     = {{BLANK_1}}
    protocol    = "{{BLANK_2}}"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = {{BLANK_3}}
    to_port     = {{BLANK_3}}
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "80", hint: "HTTP port" },
          { id: "BLANK_2", answer: "tcp", hint: "Transport protocol" },
          { id: "BLANK_3", answer: "22", hint: "SSH port" },
        ],
      },
      {
        id: "ec2-3",
        title: "Key Pair",
        description: "Create a key pair for SSH access.",
        type: "fill-blank",
        codeTemplate: `resource "aws_key_pair" "deployer" {
  key_name   = "{{BLANK_1}}"
  public_key = {{BLANK_2}}("~/.ssh/id_rsa.pub")
}`,
        blanks: [
          { id: "BLANK_1", answer: "deployer-key", hint: "Name for the key pair" },
          { id: "BLANK_2", answer: "file", hint: "Terraform function to read a file" },
        ],
      },
      {
        id: "ec2-4",
        title: "User Data Script",
        description: "Bootstrap an EC2 instance with a startup script.",
        type: "fill-blank",
        codeTemplate: `resource "aws_instance" "web" {
  ami           = var.ami_id
  instance_type = "t3.micro"

  user_data = <<-{{BLANK_1}}
    #!/bin/bash
    yum update -y
    yum install -y {{BLANK_2}}
    systemctl start httpd
    systemctl enable httpd
  {{BLANK_1}}
}`,
        blanks: [
          { id: "BLANK_1", answer: "EOF", hint: "Heredoc delimiter" },
          { id: "BLANK_2", answer: "httpd", hint: "Apache web server package" },
        ],
      },
    ],
  },

  // === Lambda Functions ===
  {
    id: "lambda-functions",
    title: "Lambda Functions",
    description: "Deploy serverless functions with triggers and permissions.",
    icon: "⚡",
    category: "aws",
    tasks: [
      {
        id: "lambda-1",
        title: "Create a Lambda Function",
        description: "Define a Lambda function from a ZIP archive.",
        type: "fill-blank",
        codeTemplate: `resource "aws_lambda_function" "api" {
  filename      = "lambda.zip"
  function_name = "{{BLANK_1}}"
  role          = aws_iam_role.lambda_exec.{{BLANK_2}}
  handler       = "{{BLANK_3}}"
  runtime       = "nodejs18.x"
}`,
        blanks: [
          { id: "BLANK_1", answer: "api-handler", hint: "Name for the function" },
          { id: "BLANK_2", answer: "arn", hint: "Reference the role's ARN" },
          { id: "BLANK_3", answer: "index.handler", hint: "file.exportedFunction format" },
        ],
      },
      {
        id: "lambda-2",
        title: "API Gateway Trigger",
        description: "Allow API Gateway to invoke your Lambda.",
        type: "fill-blank",
        codeTemplate: `resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:{{BLANK_1}}"
  function_name = aws_lambda_function.api.function_name
  principal     = "{{BLANK_2}}"
}`,
        blanks: [
          { id: "BLANK_1", answer: "InvokeFunction", hint: "Lambda action to allow invocation" },
          { id: "BLANK_2", answer: "apigateway.amazonaws.com", hint: "API Gateway service principal" },
        ],
      },
      {
        id: "lambda-3",
        title: "Environment Variables",
        description: "Pass configuration to your Lambda via env vars.",
        type: "fill-blank",
        codeTemplate: `resource "aws_lambda_function" "api" {
  function_name = "api-handler"
  runtime       = "nodejs18.x"
  handler       = "index.handler"
  role          = aws_iam_role.lambda_exec.arn

  environment {
    {{BLANK_1}} = {
      TABLE_NAME = aws_dynamodb_table.main.{{BLANK_2}}
      STAGE      = "{{BLANK_3}}"
    }
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "variables", hint: "Key for env var map in Lambda" },
          { id: "BLANK_2", answer: "name", hint: "Reference the DynamoDB table name" },
          { id: "BLANK_3", answer: "production", hint: "Deployment stage" },
        ],
      },
    ],
  },

  // === DynamoDB ===
  {
    id: "dynamodb",
    title: "DynamoDB",
    description: "Create DynamoDB tables with keys and indexes.",
    icon: "🗄️",
    category: "aws",
    tasks: [
      {
        id: "dynamo-1",
        title: "Create a Table",
        description: "Define a DynamoDB table with a hash key.",
        type: "fill-blank",
        codeTemplate: `resource "aws_dynamodb_table" "users" {
  name         = "users"
  billing_mode = "{{BLANK_1}}"
  hash_key     = "{{BLANK_2}}"

  attribute {
    name = "userId"
    type = "{{BLANK_3}}"
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "PAY_PER_REQUEST", hint: "On-demand billing mode" },
          { id: "BLANK_2", answer: "userId", hint: "Primary key attribute" },
          { id: "BLANK_3", answer: "S", hint: "String type in DynamoDB" },
        ],
      },
      {
        id: "dynamo-2",
        title: "Global Secondary Index",
        description: "Add a GSI for querying by email.",
        type: "fill-blank",
        codeTemplate: `resource "aws_dynamodb_table" "users" {
  name     = "users"
  hash_key = "userId"

  attribute {
    name = "email"
    type = "S"
  }

  global_secondary_index {
    name            = "{{BLANK_1}}"
    hash_key        = "email"
    projection_type = "{{BLANK_2}}"
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "email-index", hint: "Name for the GSI" },
          { id: "BLANK_2", answer: "ALL", hint: "Project all attributes" },
        ],
      },
    ],
  },

  // === CloudFront ===
  {
    id: "cloudfront",
    title: "CloudFront CDN",
    description: "Set up CloudFront distributions for content delivery.",
    icon: "🚀",
    category: "aws",
    tasks: [
      {
        id: "cf-1",
        title: "CloudFront Distribution",
        description: "Create a CloudFront distribution for an S3 origin.",
        type: "fill-blank",
        codeTemplate: `resource "aws_cloudfront_distribution" "cdn" {
  enabled             = true
  default_root_object = "{{BLANK_1}}"

  origin {
    domain_name = aws_s3_bucket.web.{{BLANK_2}}
    origin_id   = "s3-origin"
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "s3-origin"
    viewer_protocol_policy = "{{BLANK_3}}"
  }

  restrictions {
    geo_restriction { restriction_type = "none" }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "index.html", hint: "Default page to serve" },
          { id: "BLANK_2", answer: "bucket_regional_domain_name", hint: "S3 regional endpoint" },
          { id: "BLANK_3", answer: "redirect-to-https", hint: "Force HTTPS" },
        ],
      },
    ],
  },

  // === RDS ===
  {
    id: "rds-databases",
    title: "RDS Databases",
    description: "Provision managed relational databases on AWS.",
    icon: "🐘",
    category: "aws",
    tasks: [
      {
        id: "rds-1",
        title: "Create RDS Instance",
        description: "Launch a PostgreSQL RDS instance.",
        type: "fill-blank",
        codeTemplate: `resource "aws_db_instance" "main" {
  allocated_storage    = 20
  engine               = "{{BLANK_1}}"
  engine_version       = "15.4"
  instance_class       = "{{BLANK_2}}"
  db_name              = "appdb"
  username             = "admin"
  password             = var.db_password
  skip_final_snapshot  = {{BLANK_3}}
}`,
        blanks: [
          { id: "BLANK_1", answer: "postgres", hint: "PostgreSQL engine name" },
          { id: "BLANK_2", answer: "db.t3.micro", hint: "Small RDS instance class" },
          { id: "BLANK_3", answer: "true", hint: "Skip snapshot on delete (dev)" },
        ],
      },
      {
        id: "rds-2",
        title: "DB Subnet Group",
        description: "Create a subnet group for multi-AZ RDS.",
        type: "fill-blank",
        codeTemplate: `resource "aws_db_subnet_group" "main" {
  name       = "main-db-subnet"
  subnet_ids = [
    aws_subnet.private_a.{{BLANK_1}},
    aws_subnet.private_b.{{BLANK_1}}
  ]

  tags = {
    Name = "{{BLANK_2}}"
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "id", hint: "Reference subnet IDs" },
          { id: "BLANK_2", answer: "main-db-subnet", hint: "Name tag for the subnet group" },
        ],
      },
    ],
  },

  // === ELB / ALB ===
  {
    id: "load-balancers",
    title: "Load Balancers",
    description: "Configure Application Load Balancers with target groups.",
    icon: "⚖️",
    category: "aws",
    tasks: [
      {
        id: "alb-1",
        title: "Application Load Balancer",
        description: "Create an ALB with subnets.",
        type: "fill-blank",
        codeTemplate: `resource "aws_lb" "main" {
  name               = "main-alb"
  internal           = {{BLANK_1}}
  load_balancer_type = "{{BLANK_2}}"
  security_groups    = [aws_security_group.alb.id]
  subnets            = [aws_subnet.public_a.id, aws_subnet.public_b.id]
}`,
        blanks: [
          { id: "BLANK_1", answer: "false", hint: "Internet-facing ALB" },
          { id: "BLANK_2", answer: "application", hint: "Layer 7 load balancer type" },
        ],
      },
      {
        id: "alb-2",
        title: "Target Group",
        description: "Create a target group with health checks.",
        type: "fill-blank",
        codeTemplate: `resource "aws_lb_target_group" "app" {
  name     = "app-tg"
  port     = {{BLANK_1}}
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id

  health_check {
    path                = "{{BLANK_2}}"
    healthy_threshold   = 3
    unhealthy_threshold = 3
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "80", hint: "HTTP port" },
          { id: "BLANK_2", answer: "/health", hint: "Health check endpoint path" },
        ],
      },
      {
        id: "alb-3",
        title: "Listener Rule",
        description: "Create an HTTPS listener on the ALB.",
        type: "fill-blank",
        codeTemplate: `resource "aws_lb_listener" "https" {
  load_balancer_arn = aws_lb.main.{{BLANK_1}}
  port              = {{BLANK_2}}
  protocol          = "HTTPS"
  certificate_arn   = var.cert_arn

  default_action {
    type             = "{{BLANK_3}}"
    target_group_arn = aws_lb_target_group.app.arn
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "arn", hint: "Reference the ALB" },
          { id: "BLANK_2", answer: "443", hint: "HTTPS port" },
          { id: "BLANK_3", answer: "forward", hint: "Action to route to target group" },
        ],
      },
    ],
  },

  // === SNS & SQS ===
  {
    id: "sns-sqs",
    title: "SNS & SQS",
    description: "Build event-driven architectures with messaging services.",
    icon: "📨",
    category: "aws",
    tasks: [
      {
        id: "sqs-1",
        title: "Create SQS Queue",
        description: "Define a standard SQS queue.",
        type: "fill-blank",
        codeTemplate: `resource "aws_sqs_queue" "orders" {
  name                       = "{{BLANK_1}}"
  visibility_timeout_seconds = {{BLANK_2}}
  message_retention_seconds  = 86400

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.orders_dlq.arn
    maxReceiveCount     = {{BLANK_3}}
  })
}`,
        blanks: [
          { id: "BLANK_1", answer: "orders-queue", hint: "Queue name" },
          { id: "BLANK_2", answer: "30", hint: "Seconds before message reappears" },
          { id: "BLANK_3", answer: "5", hint: "Max retries before DLQ" },
        ],
      },
      {
        id: "sns-1",
        title: "Create SNS Topic",
        description: "Create an SNS topic and subscribe an SQS queue.",
        type: "fill-blank",
        codeTemplate: `resource "aws_sns_topic" "notifications" {
  name = "{{BLANK_1}}"
}

resource "aws_sns_topic_subscription" "sqs" {
  topic_arn = aws_sns_topic.notifications.{{BLANK_2}}
  protocol  = "{{BLANK_3}}"
  endpoint  = aws_sqs_queue.orders.arn
}`,
        blanks: [
          { id: "BLANK_1", answer: "order-notifications", hint: "Topic name" },
          { id: "BLANK_2", answer: "arn", hint: "Reference the topic" },
          { id: "BLANK_3", answer: "sqs", hint: "Protocol for SQS subscription" },
        ],
      },
    ],
  },

  // === Auto Scaling ===
  {
    id: "auto-scaling",
    title: "Auto Scaling",
    description: "Configure auto scaling groups and launch templates.",
    icon: "📈",
    category: "aws",
    tasks: [
      {
        id: "asg-1",
        title: "Launch Template",
        description: "Create a launch template for ASG instances.",
        type: "fill-blank",
        codeTemplate: `resource "aws_launch_template" "app" {
  name_prefix   = "app-"
  image_id      = var.ami_id
  instance_type = "{{BLANK_1}}"

  network_interfaces {
    associate_public_ip_address = true
    security_groups             = [aws_security_group.app.{{BLANK_2}}]
  }
}`,
        blanks: [
          { id: "BLANK_1", answer: "t3.small", hint: "Instance type" },
          { id: "BLANK_2", answer: "id", hint: "Reference the SG" },
        ],
      },
      {
        id: "asg-2",
        title: "Auto Scaling Group",
        description: "Create an ASG with min/max capacity.",
        type: "fill-blank",
        codeTemplate: `resource "aws_autoscaling_group" "app" {
  desired_capacity = 2
  max_size         = {{BLANK_1}}
  min_size         = {{BLANK_2}}

  launch_template {
    id      = aws_launch_template.app.id
    version = "{{BLANK_3}}"
  }

  vpc_zone_identifier = [aws_subnet.private_a.id, aws_subnet.private_b.id]
}`,
        blanks: [
          { id: "BLANK_1", answer: "4", hint: "Maximum instances" },
          { id: "BLANK_2", answer: "1", hint: "Minimum instances" },
          { id: "BLANK_3", answer: "$Latest", hint: "Use latest template version" },
        ],
      },
    ],
  },
];
