import { Chapter } from "./types";

export const awsChapters: Chapter[] = [
  // ─── Landing Zone & Account Strategy ───
  {
    id: "aws-landing-zone",
    title: "Landing Zone",
    description: "AWS Organizations, Control Tower & multi-account strategy.",
    icon: "🏗️",
    category: "aws",
    tasks: [
      {
        id: "lz-1", title: "AWS Organizations", description: "Which service manages multiple AWS accounts centrally?", type: "select-option",
        codeTemplate: `The service for multi-account management is {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "AWS Organizations", options: ["AWS Organizations", "IAM", "CloudFormation", "Config"] }],
      },
      {
        id: "lz-2", title: "SCPs", description: "What does SCP stand for?", type: "select-option",
        codeTemplate: `SCP = {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "Service Control Policy", options: ["Service Control Policy", "Security Config Protocol", "System Control Parameter", "Service Config Policy"] }],
      },
      {
        id: "lz-3", title: "Control Tower", description: "Which service automates landing zone setup?", type: "select-option",
        codeTemplate: `To set up a multi-account landing zone, use {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "AWS Control Tower", options: ["AWS Control Tower", "CloudFormation", "Service Catalog", "AWS Config"] }],
      },
      {
        id: "lz-4", title: "Guardrails", description: "Control Tower guardrails are implemented using?", type: "select-option",
        codeTemplate: `Preventive guardrails use {{BLANK_1}}, detective guardrails use AWS Config.`,
        blanks: [{ id: "BLANK_1", answer: "SCPs", options: ["SCPs", "IAM Policies", "NACLs", "WAF Rules"] }],
      },
      {
        id: "lz-5", title: "OU Structure", description: "Fill in the common OU names.", type: "fill-blank",
        codeTemplate: `Organizational Units:
  - {{BLANK_1}}    # shared logging & audit
  - Production
  - {{BLANK_2}}    # non-prod workloads
  - Sandbox`,
        blanks: [
          { id: "BLANK_1", answer: "Security", hint: "OU for security/audit accounts" },
          { id: "BLANK_2", answer: "Development", hint: "OU for dev/staging" },
        ],
      },
    ],
  },

  // ─── VPC & Networking ───
  {
    id: "aws-networking",
    title: "VPC & Networking",
    description: "VPC design, subnets, routing, peering, Transit Gateway.",
    icon: "🌐",
    category: "aws",
    tasks: [
      {
        id: "net-1", title: "VPC CIDR", description: "What CIDR gives you 65,536 IPs?", type: "select-option",
        codeTemplate: `VPC CIDR: {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "10.0.0.0/16", options: ["10.0.0.0/16", "10.0.0.0/24", "10.0.0.0/8", "10.0.0.0/20"] }],
      },
      {
        id: "net-2", title: "Public vs Private", description: "What makes a subnet public?", type: "select-option",
        codeTemplate: `A subnet is public when it has a route to an {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "Internet Gateway", options: ["Internet Gateway", "NAT Gateway", "VPN Gateway", "Transit Gateway"] }],
      },
      {
        id: "net-3", title: "NAT Gateway", description: "NAT Gateway allows private subnets to…", type: "select-option",
        codeTemplate: `NAT Gateway enables {{BLANK_1}} internet access for private subnets.`,
        blanks: [{ id: "BLANK_1", answer: "outbound", options: ["outbound", "inbound", "bidirectional", "none"] }],
      },
      {
        id: "net-4", title: "Security Group vs NACL", description: "Security Groups are…", type: "select-option",
        codeTemplate: `Security Groups are {{BLANK_1}}, NACLs are stateless.`,
        blanks: [{ id: "BLANK_1", answer: "stateful", options: ["stateful", "stateless", "regional", "global"] }],
      },
      {
        id: "net-5", title: "Transit Gateway", description: "Which service connects multiple VPCs in a hub-spoke model?", type: "select-option",
        codeTemplate: `For hub-and-spoke multi-VPC connectivity, use {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "Transit Gateway", options: ["Transit Gateway", "VPC Peering", "Direct Connect", "Site-to-Site VPN"] }],
      },
      {
        id: "net-6", title: "VPC Peering", description: "VPC Peering is NOT…", type: "select-option",
        codeTemplate: `VPC Peering does NOT support {{BLANK_1}} routing.`,
        blanks: [{ id: "BLANK_1", answer: "transitive", options: ["transitive", "encrypted", "cross-region", "cross-account"] }],
      },
      {
        id: "net-7", title: "Route Table", description: "Fill in the default route.", type: "fill-blank",
        codeTemplate: `route {
  cidr_block = "{{BLANK_1}}"
  gateway_id = aws_internet_gateway.main.id
}`,
        blanks: [{ id: "BLANK_1", answer: "0.0.0.0/0", hint: "Default route CIDR" }],
      },
      {
        id: "net-8", title: "VPC Endpoints", description: "A Gateway endpoint supports which two services?", type: "select-option",
        codeTemplate: `Gateway VPC Endpoints support {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "S3 and DynamoDB", options: ["S3 and DynamoDB", "S3 and SQS", "EC2 and RDS", "Lambda and SNS"] }],
      },
      {
        id: "net-9", title: "Flow Logs", description: "Where can VPC Flow Logs be published?", type: "select-option",
        codeTemplate: `VPC Flow Logs can go to CloudWatch Logs or {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "S3", options: ["S3", "DynamoDB", "EFS", "Glacier"] }],
      },
    ],
  },

  // ─── EC2 & Compute ───
  {
    id: "aws-ec2",
    title: "EC2 & Compute",
    description: "Instance types, AMIs, placement groups, pricing.",
    icon: "🖥️",
    category: "aws",
    tasks: [
      {
        id: "ec2-1", title: "Instance Families", description: "Which family is general purpose?", type: "select-option",
        codeTemplate: `General purpose instances: {{BLANK_1}} family.`,
        blanks: [{ id: "BLANK_1", answer: "t3/m5", options: ["t3/m5", "c5", "r5", "p3"] }],
      },
      {
        id: "ec2-2", title: "Spot Instances", description: "Spot instances can save up to…", type: "select-option",
        codeTemplate: `Spot instances offer up to {{BLANK_1}}% discount vs On-Demand.`,
        blanks: [{ id: "BLANK_1", answer: "90", options: ["90", "50", "30", "75"] }],
      },
      {
        id: "ec2-3", title: "Placement Groups", description: "Which placement group is for low latency?", type: "select-option",
        codeTemplate: `For lowest network latency, use a {{BLANK_1}} placement group.`,
        blanks: [{ id: "BLANK_1", answer: "cluster", options: ["cluster", "spread", "partition", "dedicated"] }],
      },
      {
        id: "ec2-4", title: "User Data", description: "EC2 User Data runs at…", type: "select-option",
        codeTemplate: `EC2 User Data scripts run at {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "first boot", options: ["first boot", "every boot", "shutdown", "manually"] }],
      },
      {
        id: "ec2-5", title: "Instance Metadata", description: "What URL is instance metadata?", type: "fill-blank",
        codeTemplate: `curl http://{{BLANK_1}}/latest/meta-data/`,
        blanks: [{ id: "BLANK_1", answer: "169.254.169.254", hint: "Link-local metadata IP" }],
      },
      {
        id: "ec2-6", title: "AMI Scope", description: "AMIs are scoped to a…", type: "select-option",
        codeTemplate: `AMIs are {{BLANK_1}} scoped.`,
        blanks: [{ id: "BLANK_1", answer: "region", options: ["region", "AZ", "global", "account"] }],
      },
      {
        id: "ec2-7", title: "Reserved Instances", description: "Max RI term length?", type: "select-option",
        codeTemplate: `Reserved Instances can be purchased for up to {{BLANK_1}} years.`,
        blanks: [{ id: "BLANK_1", answer: "3", options: ["3", "1", "5", "2"] }],
      },
    ],
  },

  // ─── ECS & Containers ───
  {
    id: "aws-ecs",
    title: "ECS & Containers",
    description: "ECS tasks, services, Fargate, ECR.",
    icon: "🐳",
    category: "aws",
    tasks: [
      {
        id: "ecs-1", title: "ECS Launch Types", description: "Which launch type is serverless?", type: "select-option",
        codeTemplate: `The serverless ECS launch type is {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "Fargate", options: ["Fargate", "EC2", "Lambda", "EKS"] }],
      },
      {
        id: "ecs-2", title: "Task Definition", description: "A Task Definition is like a…", type: "select-option",
        codeTemplate: `A Task Definition is a {{BLANK_1}} for containers.`,
        blanks: [{ id: "BLANK_1", answer: "blueprint", options: ["blueprint", "runtime", "cluster", "service"] }],
      },
      {
        id: "ecs-3", title: "ECR", description: "Where do you store Docker images in AWS?", type: "select-option",
        codeTemplate: `AWS container image registry: {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "ECR", options: ["ECR", "ECS", "S3", "CodeArtifact"] }],
      },
      {
        id: "ecs-4", title: "Service vs Task", description: "An ECS Service maintains…", type: "select-option",
        codeTemplate: `An ECS Service maintains a {{BLANK_1}} of running tasks.`,
        blanks: [{ id: "BLANK_1", answer: "desired count", options: ["desired count", "single instance", "maximum limit", "minimum threshold"] }],
      },
      {
        id: "ecs-5", title: "Task Role", description: "Which role do containers use to call AWS APIs?", type: "select-option",
        codeTemplate: `Containers use the {{BLANK_1}} to access AWS services.`,
        blanks: [{ id: "BLANK_1", answer: "Task Role", options: ["Task Role", "Execution Role", "Service Role", "Instance Profile"] }],
      },
      {
        id: "ecs-6", title: "Execution Role", description: "The Execution Role is used to…", type: "select-option",
        codeTemplate: `The ECS Execution Role is used to {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "pull images and write logs", options: ["pull images and write logs", "call application APIs", "manage load balancers", "scale services"] }],
      },
    ],
  },

  // ─── S3 Deep Dive ───
  {
    id: "aws-s3",
    title: "S3 Deep Dive",
    description: "Storage classes, lifecycle, encryption, replication.",
    icon: "🪣",
    category: "aws",
    tasks: [
      {
        id: "s3-1", title: "Storage Classes", description: "Cheapest storage for rarely accessed archives?", type: "select-option",
        codeTemplate: `For long-term archival with hours retrieval: {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "S3 Glacier Deep Archive", options: ["S3 Glacier Deep Archive", "S3 Standard-IA", "S3 One Zone-IA", "S3 Intelligent-Tiering"] }],
      },
      {
        id: "s3-2", title: "Versioning", description: "Versioning can be…", type: "select-option",
        codeTemplate: `Once enabled, versioning can be {{BLANK_1}} but not disabled.`,
        blanks: [{ id: "BLANK_1", answer: "suspended", options: ["suspended", "disabled", "deleted", "paused"] }],
      },
      {
        id: "s3-3", title: "Encryption", description: "Default S3 encryption since Jan 2023?", type: "select-option",
        codeTemplate: `S3 now encrypts all objects by default with {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "SSE-S3", options: ["SSE-S3", "SSE-KMS", "SSE-C", "None"] }],
      },
      {
        id: "s3-4", title: "Cross-Region Replication", description: "CRR requires…", type: "select-option",
        codeTemplate: `Cross-Region Replication requires {{BLANK_1}} enabled on both buckets.`,
        blanks: [{ id: "BLANK_1", answer: "versioning", options: ["versioning", "encryption", "logging", "lifecycle"] }],
      },
      {
        id: "s3-5", title: "Pre-signed URLs", description: "Pre-signed URLs grant…", type: "select-option",
        codeTemplate: `Pre-signed URLs grant {{BLANK_1}} access to private objects.`,
        blanks: [{ id: "BLANK_1", answer: "temporary", options: ["temporary", "permanent", "public", "encrypted"] }],
      },
      {
        id: "s3-6", title: "Transfer Acceleration", description: "S3 Transfer Acceleration uses…", type: "select-option",
        codeTemplate: `Transfer Acceleration uses {{BLANK_1}} edge locations.`,
        blanks: [{ id: "BLANK_1", answer: "CloudFront", options: ["CloudFront", "Global Accelerator", "Route 53", "Direct Connect"] }],
      },
      {
        id: "s3-7", title: "Object Lock", description: "Object Lock enforces…", type: "select-option",
        codeTemplate: `S3 Object Lock enforces {{BLANK_1}} (Write Once Read Many).`,
        blanks: [{ id: "BLANK_1", answer: "WORM", options: ["WORM", "FIFO", "LIFO", "ACID"] }],
      },
    ],
  },

  // ─── EFS & Storage ───
  {
    id: "aws-efs",
    title: "EFS & Storage",
    description: "EFS, EBS, FSx — shared and block storage.",
    icon: "📁",
    category: "aws",
    tasks: [
      {
        id: "efs-1", title: "EFS Protocol", description: "EFS uses which protocol?", type: "select-option",
        codeTemplate: `EFS uses the {{BLANK_1}} protocol.`,
        blanks: [{ id: "BLANK_1", answer: "NFS", options: ["NFS", "SMB", "iSCSI", "FTP"] }],
      },
      {
        id: "efs-2", title: "EFS vs EBS", description: "EFS can be mounted by…", type: "select-option",
        codeTemplate: `EFS can be mounted by {{BLANK_1}} EC2 instances simultaneously.`,
        blanks: [{ id: "BLANK_1", answer: "multiple", options: ["multiple", "one", "two", "three"] }],
      },
      {
        id: "efs-3", title: "EBS Types", description: "Which EBS type is best for databases?", type: "select-option",
        codeTemplate: `For high-performance databases, use {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "io2 Block Express", options: ["io2 Block Express", "gp3", "st1", "sc1"] }],
      },
      {
        id: "efs-4", title: "EBS Multi-Attach", description: "Multi-Attach is available on which EBS type?", type: "select-option",
        codeTemplate: `EBS Multi-Attach works with {{BLANK_1}} volumes.`,
        blanks: [{ id: "BLANK_1", answer: "io1/io2", options: ["io1/io2", "gp2/gp3", "st1", "sc1"] }],
      },
      {
        id: "efs-5", title: "FSx", description: "FSx for Windows uses which protocol?", type: "select-option",
        codeTemplate: `FSx for Windows File Server uses {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "SMB", options: ["SMB", "NFS", "iSCSI", "CIFS"] }],
      },
    ],
  },

  // ─── RDS & Databases ───
  {
    id: "aws-rds",
    title: "RDS & Databases",
    description: "RDS, Aurora, DynamoDB, ElastiCache.",
    icon: "🐘",
    category: "aws",
    tasks: [
      {
        id: "rds-1", title: "Aurora", description: "Aurora storage auto-scales up to…", type: "select-option",
        codeTemplate: `Aurora storage grows automatically up to {{BLANK_1}} TB.`,
        blanks: [{ id: "BLANK_1", answer: "128", options: ["128", "64", "256", "32"] }],
      },
      {
        id: "rds-2", title: "Read Replicas", description: "RDS supports up to how many read replicas?", type: "select-option",
        codeTemplate: `RDS supports up to {{BLANK_1}} read replicas.`,
        blanks: [{ id: "BLANK_1", answer: "5", options: ["5", "3", "10", "15"] }],
      },
      {
        id: "rds-3", title: "Multi-AZ", description: "Multi-AZ provides…", type: "select-option",
        codeTemplate: `Multi-AZ deployment provides {{BLANK_1}}, NOT read scaling.`,
        blanks: [{ id: "BLANK_1", answer: "high availability", options: ["high availability", "read performance", "cost savings", "cross-region access"] }],
      },
      {
        id: "rds-4", title: "Aurora Serverless", description: "Aurora Serverless scales in…", type: "select-option",
        codeTemplate: `Aurora Serverless scales in {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "ACUs (Aurora Capacity Units)", options: ["ACUs (Aurora Capacity Units)", "vCPUs", "Memory GB", "IOPS"] }],
      },
      {
        id: "rds-5", title: "DynamoDB", description: "DynamoDB is a…", type: "select-option",
        codeTemplate: `DynamoDB is a {{BLANK_1}} database.`,
        blanks: [{ id: "BLANK_1", answer: "key-value and document", options: ["key-value and document", "relational", "graph", "time-series"] }],
      },
      {
        id: "rds-6", title: "DAX", description: "DynamoDB Accelerator (DAX) provides…", type: "select-option",
        codeTemplate: `DAX provides {{BLANK_1}} caching for DynamoDB.`,
        blanks: [{ id: "BLANK_1", answer: "in-memory", options: ["in-memory", "disk-based", "distributed", "edge"] }],
      },
      {
        id: "rds-7", title: "ElastiCache", description: "Which ElastiCache engine supports replication?", type: "select-option",
        codeTemplate: `For replication and persistence, use ElastiCache for {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "Redis", options: ["Redis", "Memcached", "Both", "Neither"] }],
      },
    ],
  },

  // ─── IAM & Security ───
  {
    id: "aws-iam",
    title: "IAM & Security",
    description: "IAM policies, roles, federation, KMS, Secrets Manager.",
    icon: "🔐",
    category: "aws",
    tasks: [
      {
        id: "iam-1", title: "Policy Evaluation", description: "Explicit Deny always…", type: "select-option",
        codeTemplate: `In IAM, an explicit Deny always {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "wins over Allow", options: ["wins over Allow", "is ignored", "requires MFA", "logs an event"] }],
      },
      {
        id: "iam-2", title: "AssumeRole", description: "To switch roles, you call…", type: "fill-blank",
        codeTemplate: `aws sts {{BLANK_1}} --role-arn arn:aws:iam::123:role/Admin`,
        blanks: [{ id: "BLANK_1", answer: "assume-role", hint: "STS API to assume a role" }],
      },
      {
        id: "iam-3", title: "Instance Profile", description: "EC2 gets IAM credentials via…", type: "select-option",
        codeTemplate: `EC2 instances receive IAM credentials through an {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "Instance Profile", options: ["Instance Profile", "Access Key", "User Data", "Security Group"] }],
      },
      {
        id: "iam-4", title: "KMS", description: "KMS manages…", type: "select-option",
        codeTemplate: `AWS KMS manages {{BLANK_1}} for encryption.`,
        blanks: [{ id: "BLANK_1", answer: "encryption keys", options: ["encryption keys", "SSL certificates", "SSH keys", "API keys"] }],
      },
      {
        id: "iam-5", title: "Secrets Manager", description: "Secrets Manager can auto-rotate secrets for…", type: "select-option",
        codeTemplate: `Secrets Manager natively auto-rotates credentials for {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "RDS", options: ["RDS", "S3", "EC2", "Lambda"] }],
      },
      {
        id: "iam-6", title: "Permission Boundary", description: "Permission boundaries limit…", type: "select-option",
        codeTemplate: `Permission boundaries set the {{BLANK_1}} permissions an entity can have.`,
        blanks: [{ id: "BLANK_1", answer: "maximum", options: ["maximum", "minimum", "default", "temporary"] }],
      },
    ],
  },

  // ─── High Availability ───
  {
    id: "aws-ha",
    title: "High Availability",
    description: "ALB, ASG, Route 53, CloudFront, Global Accelerator.",
    icon: "⚡",
    category: "aws",
    tasks: [
      {
        id: "ha-1", title: "ALB vs NLB", description: "ALB operates at which layer?", type: "select-option",
        codeTemplate: `Application Load Balancer operates at Layer {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "7", options: ["7", "4", "3", "5"] }],
      },
      {
        id: "ha-2", title: "ASG Policies", description: "Target tracking policy adjusts capacity to maintain…", type: "select-option",
        codeTemplate: `Target tracking keeps a metric at a {{BLANK_1}} value.`,
        blanks: [{ id: "BLANK_1", answer: "target", options: ["target", "maximum", "minimum", "average"] }],
      },
      {
        id: "ha-3", title: "Route 53 Failover", description: "Failover routing needs…", type: "select-option",
        codeTemplate: `Route 53 failover routing requires {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "health checks", options: ["health checks", "weighted records", "CNAME records", "alias records"] }],
      },
      {
        id: "ha-4", title: "Route 53 Policies", description: "Which policy routes to the nearest region?", type: "select-option",
        codeTemplate: `For lowest latency, use {{BLANK_1}} routing policy.`,
        blanks: [{ id: "BLANK_1", answer: "Latency-based", options: ["Latency-based", "Geolocation", "Weighted", "Simple"] }],
      },
      {
        id: "ha-5", title: "CloudFront", description: "CloudFront caches content at…", type: "select-option",
        codeTemplate: `CloudFront caches content at {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "edge locations", options: ["edge locations", "AZs", "regions", "VPCs"] }],
      },
      {
        id: "ha-6", title: "Global Accelerator", description: "Global Accelerator uses…", type: "select-option",
        codeTemplate: `Global Accelerator routes traffic over the AWS {{BLANK_1}} network.`,
        blanks: [{ id: "BLANK_1", answer: "global", options: ["global", "regional", "local", "edge"] }],
      },
    ],
  },

  // ─── Monitoring & Operations ───
  {
    id: "aws-operations",
    title: "Monitoring & Ops",
    description: "CloudWatch, CloudTrail, Config, Systems Manager.",
    icon: "📊",
    category: "aws",
    tasks: [
      {
        id: "ops-1", title: "CloudWatch vs CloudTrail", description: "CloudTrail records…", type: "select-option",
        codeTemplate: `CloudTrail records {{BLANK_1}} activity.`,
        blanks: [{ id: "BLANK_1", answer: "API", options: ["API", "metric", "log", "network"] }],
      },
      {
        id: "ops-2", title: "CloudWatch Alarms", description: "Alarms can trigger…", type: "select-option",
        codeTemplate: `CloudWatch Alarms can trigger {{BLANK_1}} actions.`,
        blanks: [{ id: "BLANK_1", answer: "Auto Scaling", options: ["Auto Scaling", "Lambda only", "EC2 only", "S3 only"] }],
      },
      {
        id: "ops-3", title: "AWS Config", description: "AWS Config evaluates…", type: "select-option",
        codeTemplate: `AWS Config evaluates resource {{BLANK_1}} against rules.`,
        blanks: [{ id: "BLANK_1", answer: "compliance", options: ["compliance", "performance", "cost", "security"] }],
      },
      {
        id: "ops-4", title: "Systems Manager", description: "SSM Session Manager replaces…", type: "select-option",
        codeTemplate: `SSM Session Manager provides shell access without {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "SSH keys", options: ["SSH keys", "IAM roles", "VPN", "security groups"] }],
      },
      {
        id: "ops-5", title: "EventBridge", description: "EventBridge is the evolution of…", type: "select-option",
        codeTemplate: `EventBridge is the successor to {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "CloudWatch Events", options: ["CloudWatch Events", "SNS", "SQS", "Step Functions"] }],
      },
      {
        id: "ops-6", title: "Trusted Advisor", description: "Trusted Advisor checks for…", type: "select-option",
        codeTemplate: `Trusted Advisor checks cost, performance, security, fault tolerance, and {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "service limits", options: ["service limits", "compliance", "logging", "encryption"] }],
      },
    ],
  },

  // ─── Serverless ───
  {
    id: "aws-serverless",
    title: "Serverless",
    description: "Lambda, API Gateway, Step Functions, SQS, SNS.",
    icon: "λ",
    category: "aws",
    tasks: [
      {
        id: "sls-1", title: "Lambda Timeout", description: "Max Lambda timeout?", type: "select-option",
        codeTemplate: `Lambda functions can run for up to {{BLANK_1}} minutes.`,
        blanks: [{ id: "BLANK_1", answer: "15", options: ["15", "5", "30", "60"] }],
      },
      {
        id: "sls-2", title: "Lambda Memory", description: "Lambda memory range?", type: "select-option",
        codeTemplate: `Lambda memory ranges from 128 MB to {{BLANK_1}} MB.`,
        blanks: [{ id: "BLANK_1", answer: "10240", options: ["10240", "3008", "4096", "8192"] }],
      },
      {
        id: "sls-3", title: "API Gateway Types", description: "For WebSocket APIs, use…", type: "select-option",
        codeTemplate: `API Gateway {{BLANK_1}} supports WebSocket connections.`,
        blanks: [{ id: "BLANK_1", answer: "V2 (HTTP API)", options: ["V2 (HTTP API)", "V1 (REST API)", "Both", "Neither"] }],
      },
      {
        id: "sls-4", title: "SQS Types", description: "FIFO queues guarantee…", type: "select-option",
        codeTemplate: `SQS FIFO queues guarantee {{BLANK_1}} processing.`,
        blanks: [{ id: "BLANK_1", answer: "exactly-once, ordered", options: ["exactly-once, ordered", "at-least-once", "at-most-once", "best-effort"] }],
      },
      {
        id: "sls-5", title: "Step Functions", description: "Step Functions orchestrate…", type: "select-option",
        codeTemplate: `Step Functions orchestrate {{BLANK_1}} as visual workflows.`,
        blanks: [{ id: "BLANK_1", answer: "distributed applications", options: ["distributed applications", "EC2 instances", "databases", "networks"] }],
      },
      {
        id: "sls-6", title: "Dead Letter Queue", description: "A DLQ catches messages that…", type: "select-option",
        codeTemplate: `A Dead Letter Queue receives messages that {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "failed processing", options: ["failed processing", "are too large", "expire", "are duplicated"] }],
      },
    ],
  },

  // ─── Cost Optimization ───
  {
    id: "aws-cost",
    title: "Cost Optimization",
    description: "Pricing models, Cost Explorer, budgets, Savings Plans.",
    icon: "💰",
    category: "aws",
    tasks: [
      {
        id: "cost-1", title: "Savings Plans", description: "Compute Savings Plans apply to…", type: "select-option",
        codeTemplate: `Compute Savings Plans cover EC2, Fargate, and {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "Lambda", options: ["Lambda", "S3", "RDS", "DynamoDB"] }],
      },
      {
        id: "cost-2", title: "S3 Intelligent Tiering", description: "Intelligent Tiering automatically moves data between…", type: "select-option",
        codeTemplate: `Intelligent Tiering moves data between {{BLANK_1}} access tiers.`,
        blanks: [{ id: "BLANK_1", answer: "frequent and infrequent", options: ["frequent and infrequent", "hot and cold", "fast and slow", "primary and secondary"] }],
      },
      {
        id: "cost-3", title: "Cost Allocation Tags", description: "Cost allocation tags help…", type: "select-option",
        codeTemplate: `Cost allocation tags help {{BLANK_1}} AWS spending.`,
        blanks: [{ id: "BLANK_1", answer: "categorize and track", options: ["categorize and track", "reduce", "encrypt", "optimize"] }],
      },
    ],
  },
];
