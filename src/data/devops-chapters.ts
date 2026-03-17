import { Chapter } from "./types";

export const devopsChapters: Chapter[] = [
  // ─── Pipeline Fundamentals ───
  {
    id: "gl-fundamentals",
    title: "Pipeline Fundamentals",
    description: ".gitlab-ci.yml basics — stages, jobs, scripts.",
    icon: "🦊",
    category: "gitlab",
    tasks: [
      {
        id: "glf-1", title: "Config File", description: "GitLab CI config file name?", type: "fill-blank",
        codeTemplate: `# Pipeline config must be named:
{{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: ".gitlab-ci.yml", hint: "Hidden YAML file in repo root" }],
      },
      {
        id: "glf-2", title: "Stages", description: "Define pipeline stages.", type: "fill-blank",
        codeTemplate: `{{BLANK_1}}:
  - build
  - test
  - deploy`,
        blanks: [{ id: "BLANK_1", answer: "stages", hint: "Top-level key for stage order" }],
      },
      {
        id: "glf-3", title: "Job Structure", description: "Assign a job to a stage.", type: "fill-blank",
        codeTemplate: `build_app:
  {{BLANK_1}}: build
  script:
    - npm run build`,
        blanks: [{ id: "BLANK_1", answer: "stage", hint: "Which stage this job runs in" }],
      },
      {
        id: "glf-4", title: "Script", description: "The key for commands to run?", type: "fill-blank",
        codeTemplate: `test_job:
  stage: test
  {{BLANK_1}}:
    - npm test`,
        blanks: [{ id: "BLANK_1", answer: "script", hint: "Commands to execute" }],
      },
      {
        id: "glf-5", title: "Default Stage", description: "If no stage is specified, jobs run in…", type: "select-option",
        codeTemplate: `Jobs without a stage keyword default to {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "test", options: ["test", "build", "deploy", "default"] }],
      },
      {
        id: "glf-6", title: "before_script", description: "Commands that run before every job?", type: "fill-blank",
        codeTemplate: `{{BLANK_1}}:
  - apt-get update
  - npm ci`,
        blanks: [{ id: "BLANK_1", answer: "before_script", hint: "Pre-job hook keyword" }],
      },
    ],
  },

  // ─── Variables ───
  {
    id: "gl-variables",
    title: "Variables",
    description: "CI/CD variables, predefined vars, masking, protection.",
    icon: "🔑",
    category: "gitlab",
    tasks: [
      {
        id: "glv-1", title: "Define Variables", description: "Top-level variable definition.", type: "fill-blank",
        codeTemplate: `{{BLANK_1}}:
  NODE_ENV: "production"
  APP_NAME: "my-app"`,
        blanks: [{ id: "BLANK_1", answer: "variables", hint: "Key for pipeline variables" }],
      },
      {
        id: "glv-2", title: "Use Variable", description: "How to reference a variable in script?", type: "fill-blank",
        codeTemplate: `script:
  - echo "Deploying {{BLANK_1}}APP_NAME"`,
        blanks: [{ id: "BLANK_1", answer: "$", hint: "Variable prefix in shell" }],
      },
      {
        id: "glv-3", title: "Commit SHA", description: "Predefined var for commit hash?", type: "fill-blank",
        codeTemplate: `docker tag app:latest app:\${{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "CI_COMMIT_SHA", hint: "Full commit hash variable" }],
      },
      {
        id: "glv-4", title: "Branch Name", description: "Predefined var for current branch?", type: "fill-blank",
        codeTemplate: `if: ${{BLANK_1}} == "main"`,
        blanks: [{ id: "BLANK_1", answer: "CI_COMMIT_BRANCH", hint: "Branch name variable" }],
      },
      {
        id: "glv-5", title: "Protected Variables", description: "Protected variables are only available on…", type: "select-option",
        codeTemplate: `Protected variables are exposed only to {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "protected branches/tags", options: ["protected branches/tags", "all branches", "main only", "merge requests"] }],
      },
      {
        id: "glv-6", title: "Masked Variables", description: "Masked variables are…", type: "select-option",
        codeTemplate: `Masked variables are {{BLANK_1}} in job logs.`,
        blanks: [{ id: "BLANK_1", answer: "hidden", options: ["hidden", "encrypted", "deleted", "compressed"] }],
      },
    ],
  },

  // ─── Rules & Conditions ───
  {
    id: "gl-rules",
    title: "Rules & Conditions",
    description: "Control when jobs run with rules, only/except, workflow.",
    icon: "🚦",
    category: "gitlab",
    tasks: [
      {
        id: "glr-1", title: "Rules Keyword", description: "Modern way to control job execution?", type: "fill-blank",
        codeTemplate: `deploy_job:
  {{BLANK_1}}:
    - if: $CI_COMMIT_BRANCH == "main"`,
        blanks: [{ id: "BLANK_1", answer: "rules", hint: "Conditional execution keyword" }],
      },
      {
        id: "glr-2", title: "Manual Job", description: "Make a job require manual click?", type: "fill-blank",
        codeTemplate: `rules:
  - if: $CI_COMMIT_TAG
    {{BLANK_1}}: manual`,
        blanks: [{ id: "BLANK_1", answer: "when", hint: "Timing keyword" }],
      },
      {
        id: "glr-3", title: "Never Run", description: "Skip a job completely?", type: "fill-blank",
        codeTemplate: `rules:
  - when: {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "never", hint: "Value to skip job" }],
      },
      {
        id: "glr-4", title: "Changes Filter", description: "Run only when files change?", type: "fill-blank",
        codeTemplate: `rules:
  - {{BLANK_1}}:
      paths:
        - "src/**/*"`,
        blanks: [{ id: "BLANK_1", answer: "changes", hint: "Keyword to detect file changes" }],
      },
      {
        id: "glr-5", title: "Workflow Rules", description: "Control when entire pipelines are created?", type: "fill-blank",
        codeTemplate: `{{BLANK_1}}:
  rules:
    - if: $CI_COMMIT_BRANCH`,
        blanks: [{ id: "BLANK_1", answer: "workflow", hint: "Pipeline-level rules keyword" }],
      },
      {
        id: "glr-6", title: "only/except", description: "Legacy keywords replaced by rules?", type: "select-option",
        codeTemplate: `The keywords {{BLANK_1}} are legacy and replaced by rules.`,
        blanks: [{ id: "BLANK_1", answer: "only/except", options: ["only/except", "when/unless", "if/else", "allow/deny"] }],
      },
    ],
  },

  // ─── Artifacts & Cache ───
  {
    id: "gl-artifacts",
    title: "Artifacts & Cache",
    description: "Pass data between jobs and speed up pipelines.",
    icon: "💾",
    category: "gitlab",
    tasks: [
      {
        id: "gla-1", title: "Artifacts", description: "Save job output for other stages.", type: "fill-blank",
        codeTemplate: `build_job:
  script: npm run build
  {{BLANK_1}}:
    paths:
      - dist/`,
        blanks: [{ id: "BLANK_1", answer: "artifacts", hint: "Save files keyword" }],
      },
      {
        id: "gla-2", title: "Expire Artifacts", description: "How long to keep artifacts?", type: "fill-blank",
        codeTemplate: `artifacts:
  paths: [dist/]
  {{BLANK_1}}: 1 week`,
        blanks: [{ id: "BLANK_1", answer: "expire_in", hint: "Expiration keyword" }],
      },
      {
        id: "gla-3", title: "Cache", description: "Reuse files between pipeline runs.", type: "fill-blank",
        codeTemplate: `{{BLANK_1}}:
  paths:
    - node_modules/
  key: $CI_COMMIT_REF_SLUG`,
        blanks: [{ id: "BLANK_1", answer: "cache", hint: "Reuse between runs keyword" }],
      },
      {
        id: "gla-4", title: "Cache vs Artifacts", description: "Artifacts pass data between…", type: "select-option",
        codeTemplate: `Artifacts pass data between {{BLANK_1}}, cache speeds up {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "jobs; repeated runs", options: ["jobs; repeated runs", "pipelines; stages", "branches; tags", "repos; forks"] }],
      },
      {
        id: "gla-5", title: "JUnit Reports", description: "Publish test results as…", type: "fill-blank",
        codeTemplate: `artifacts:
  reports:
    {{BLANK_1}}: test-results.xml`,
        blanks: [{ id: "BLANK_1", answer: "junit", hint: "Test report format" }],
      },
      {
        id: "gla-6", title: "Needs", description: "Download artifacts from a specific job?", type: "fill-blank",
        codeTemplate: `deploy_job:
  {{BLANK_1}}:
    - job: build_job
      artifacts: true`,
        blanks: [{ id: "BLANK_1", answer: "needs", hint: "Job dependency keyword" }],
      },
    ],
  },

  // ─── Docker & Images ───
  {
    id: "gl-docker",
    title: "Docker & Images",
    description: "Job images, services, DinD, Container Registry.",
    icon: "🐳",
    category: "gitlab",
    tasks: [
      {
        id: "gld-1", title: "Job Image", description: "Specify a Docker image for a job.", type: "fill-blank",
        codeTemplate: `test_job:
  {{BLANK_1}}: node:18-alpine
  script:
    - npm test`,
        blanks: [{ id: "BLANK_1", answer: "image", hint: "Docker image keyword" }],
      },
      {
        id: "gld-2", title: "Services", description: "Add a database service to a job.", type: "fill-blank",
        codeTemplate: `test_job:
  image: node:18
  {{BLANK_1}}:
    - postgres:15
  script:
    - npm test`,
        blanks: [{ id: "BLANK_1", answer: "services", hint: "Sidecar containers keyword" }],
      },
      {
        id: "gld-3", title: "DinD", description: "Docker-in-Docker service name?", type: "fill-blank",
        codeTemplate: `services:
  - {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "docker:dind", hint: "Docker-in-Docker image" }],
      },
      {
        id: "gld-4", title: "Registry Login", description: "Predefined var for registry password?", type: "fill-blank",
        codeTemplate: `docker login -u $CI_REGISTRY_USER -p ${{BLANK_1}} $CI_REGISTRY`,
        blanks: [{ id: "BLANK_1", answer: "CI_REGISTRY_PASSWORD", hint: "Registry auth variable" }],
      },
      {
        id: "gld-5", title: "Push Image", description: "Tag and push to GitLab Container Registry.", type: "fill-blank",
        codeTemplate: `docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
docker {{BLANK_1}} $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA`,
        blanks: [{ id: "BLANK_1", answer: "push", hint: "Upload image command" }],
      },
    ],
  },

  // ─── Environments & Deployments ───
  {
    id: "gl-environments",
    title: "Environments",
    description: "Deploy to environments, review apps, manual gates.",
    icon: "🌍",
    category: "gitlab",
    tasks: [
      {
        id: "gle-1", title: "Environment", description: "Declare a deployment environment.", type: "fill-blank",
        codeTemplate: `deploy_prod:
  script: ./deploy.sh
  {{BLANK_1}}:
    name: production
    url: https://app.example.com`,
        blanks: [{ id: "BLANK_1", answer: "environment", hint: "Deployment target keyword" }],
      },
      {
        id: "gle-2", title: "Review Apps", description: "Dynamic environment for merge requests.", type: "fill-blank",
        codeTemplate: `deploy_review:
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    {{BLANK_1}}: stop_review`,
        blanks: [{ id: "BLANK_1", answer: "on_stop", hint: "Job to run when env is stopped" }],
      },
      {
        id: "gle-3", title: "Stop Environment", description: "Action to tear down a review app.", type: "fill-blank",
        codeTemplate: `stop_review:
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    action: {{BLANK_1}}
  when: manual`,
        blanks: [{ id: "BLANK_1", answer: "stop", hint: "Action to remove environment" }],
      },
      {
        id: "gle-4", title: "Manual Deploy", description: "Require manual approval for production.", type: "fill-blank",
        codeTemplate: `deploy_prod:
  stage: deploy
  when: {{BLANK_1}}
  environment: production`,
        blanks: [{ id: "BLANK_1", answer: "manual", hint: "Requires button click" }],
      },
      {
        id: "gle-5", title: "Protected Environments", description: "Protected environments restrict deploys to…", type: "select-option",
        codeTemplate: `Protected environments only allow deploys by {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "authorized users", options: ["authorized users", "anyone", "bots only", "admins only"] }],
      },
    ],
  },

  // ─── Templates & Reuse ───
  {
    id: "gl-templates",
    title: "Templates & Reuse",
    description: "extends, include, anchors, hidden jobs.",
    icon: "📄",
    category: "gitlab",
    tasks: [
      {
        id: "glt-1", title: "Hidden Job", description: "A hidden job starts with…", type: "fill-blank",
        codeTemplate: `{{BLANK_1}}node_template:
  image: node:18
  before_script:
    - npm ci`,
        blanks: [{ id: "BLANK_1", answer: ".", hint: "Prefix that makes a job hidden" }],
      },
      {
        id: "glt-2", title: "Extends", description: "Inherit from a template job.", type: "fill-blank",
        codeTemplate: `test_job:
  {{BLANK_1}}: .node_template
  script:
    - npm test`,
        blanks: [{ id: "BLANK_1", answer: "extends", hint: "Inheritance keyword" }],
      },
      {
        id: "glt-3", title: "Include Local", description: "Include another YAML from the repo.", type: "fill-blank",
        codeTemplate: `{{BLANK_1}}:
  - local: '/ci/build.yml'`,
        blanks: [{ id: "BLANK_1", answer: "include", hint: "Import external configs" }],
      },
      {
        id: "glt-4", title: "Include Template", description: "Include a GitLab-provided template.", type: "fill-blank",
        codeTemplate: `include:
  - {{BLANK_1}}: Security/SAST.gitlab-ci.yml`,
        blanks: [{ id: "BLANK_1", answer: "template", hint: "GitLab built-in template keyword" }],
      },
      {
        id: "glt-5", title: "Include Remote", description: "Include config from a URL.", type: "fill-blank",
        codeTemplate: `include:
  - {{BLANK_1}}: 'https://example.com/ci.yml'`,
        blanks: [{ id: "BLANK_1", answer: "remote", hint: "URL-based include" }],
      },
      {
        id: "glt-6", title: "Include Project", description: "Include from another GitLab project.", type: "fill-blank",
        codeTemplate: `include:
  - {{BLANK_1}}: 'my-group/ci-templates'
    file: '/templates/deploy.yml'`,
        blanks: [{ id: "BLANK_1", answer: "project", hint: "Cross-project include" }],
      },
    ],
  },

  // ─── Security & Compliance ───
  {
    id: "gl-security",
    title: "Security Scanning",
    description: "SAST, DAST, dependency scanning, container scanning.",
    icon: "🛡️",
    category: "gitlab",
    tasks: [
      {
        id: "gls-1", title: "SAST", description: "What does SAST stand for?", type: "select-option",
        codeTemplate: `SAST = {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "Static Application Security Testing", options: ["Static Application Security Testing", "Secure App Scanning Tool", "System Access Security Test", "Source Analysis Security Tool"] }],
      },
      {
        id: "gls-2", title: "DAST", description: "DAST tests a…", type: "select-option",
        codeTemplate: `DAST tests the application in a {{BLANK_1}} state.`,
        blanks: [{ id: "BLANK_1", answer: "running", options: ["running", "compiled", "source code", "containerized"] }],
      },
      {
        id: "gls-3", title: "Enable SAST", description: "Enable SAST with a template.", type: "fill-blank",
        codeTemplate: `include:
  - template: {{BLANK_1}}/SAST.gitlab-ci.yml`,
        blanks: [{ id: "BLANK_1", answer: "Security", hint: "GitLab template category" }],
      },
      {
        id: "gls-4", title: "Container Scanning", description: "Scan Docker images for vulnerabilities?", type: "fill-blank",
        codeTemplate: `include:
  - template: Security/{{BLANK_1}}.gitlab-ci.yml`,
        blanks: [{ id: "BLANK_1", answer: "Container-Scanning", hint: "Template name for image scanning" }],
      },
      {
        id: "gls-5", title: "Dependency Scanning", description: "Scan project dependencies.", type: "fill-blank",
        codeTemplate: `include:
  - template: Security/{{BLANK_1}}.gitlab-ci.yml`,
        blanks: [{ id: "BLANK_1", answer: "Dependency-Scanning", hint: "Template for dep scanning" }],
      },
    ],
  },

  // ─── Runners ───
  {
    id: "gl-runners",
    title: "Runners",
    description: "Shared, group, project runners and tags.",
    icon: "🏃",
    category: "gitlab",
    tasks: [
      {
        id: "glrun-1", title: "Runner Types", description: "Runner available to all projects?", type: "select-option",
        codeTemplate: `A runner available to all projects is a {{BLANK_1}} runner.`,
        blanks: [{ id: "BLANK_1", answer: "shared", options: ["shared", "group", "project", "global"] }],
      },
      {
        id: "glrun-2", title: "Tags", description: "Assign a job to specific runners.", type: "fill-blank",
        codeTemplate: `build_job:
  {{BLANK_1}}:
    - docker
    - linux`,
        blanks: [{ id: "BLANK_1", answer: "tags", hint: "Runner selector keyword" }],
      },
      {
        id: "glrun-3", title: "Executors", description: "Most common runner executor?", type: "select-option",
        codeTemplate: `The most common executor is {{BLANK_1}}.`,
        blanks: [{ id: "BLANK_1", answer: "Docker", options: ["Docker", "Shell", "SSH", "VirtualBox"] }],
      },
      {
        id: "glrun-4", title: "Register Runner", description: "Command to register a new runner?", type: "fill-blank",
        codeTemplate: `gitlab-runner {{BLANK_1}}`,
        blanks: [{ id: "BLANK_1", answer: "register", hint: "Registration subcommand" }],
      },
    ],
  },

  // ─── Advanced Pipelines ───
  {
    id: "gl-advanced",
    title: "Advanced Pipelines",
    description: "Multi-project, child pipelines, DAG, parallel.",
    icon: "🔗",
    category: "gitlab",
    tasks: [
      {
        id: "gladv-1", title: "Trigger Downstream", description: "Trigger another project's pipeline.", type: "fill-blank",
        codeTemplate: `deploy_downstream:
  {{BLANK_1}}:
    project: my-group/deploy
    branch: main`,
        blanks: [{ id: "BLANK_1", answer: "trigger", hint: "Cross-project trigger keyword" }],
      },
      {
        id: "gladv-2", title: "Child Pipeline", description: "Generate and trigger a child pipeline.", type: "fill-blank",
        codeTemplate: `trigger_child:
  trigger:
    {{BLANK_1}}: generated-pipeline.yml
    strategy: depend`,
        blanks: [{ id: "BLANK_1", answer: "include", hint: "Key for child config file" }],
      },
      {
        id: "gladv-3", title: "DAG", description: "needs keyword creates a…", type: "select-option",
        codeTemplate: `The "needs" keyword creates a {{BLANK_1}} (Directed Acyclic Graph).`,
        blanks: [{ id: "BLANK_1", answer: "DAG", options: ["DAG", "queue", "matrix", "tree"] }],
      },
      {
        id: "gladv-4", title: "Parallel", description: "Run a job in parallel instances.", type: "fill-blank",
        codeTemplate: `test_job:
  {{BLANK_1}}: 4
  script:
    - npm test -- --shard=$CI_NODE_INDEX/$CI_NODE_TOTAL`,
        blanks: [{ id: "BLANK_1", answer: "parallel", hint: "Keyword for parallel job instances" }],
      },
      {
        id: "gladv-5", title: "Matrix", description: "Matrix builds create jobs for each combination.", type: "fill-blank",
        codeTemplate: `test_job:
  parallel:
    {{BLANK_1}}:
      - NODE_VERSION: ["16", "18", "20"]`,
        blanks: [{ id: "BLANK_1", answer: "matrix", hint: "Keyword for variable combinations" }],
      },
      {
        id: "gladv-6", title: "Resource Group", description: "Prevent concurrent deploys?", type: "fill-blank",
        codeTemplate: `deploy_prod:
  {{BLANK_1}}: production
  script: ./deploy.sh`,
        blanks: [{ id: "BLANK_1", answer: "resource_group", hint: "Mutual exclusion keyword" }],
      },
    ],
  },
];
