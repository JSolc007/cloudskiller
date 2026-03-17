import { Chapter } from "./types";

export const devopsChapters: Chapter[] = [
  // === GitLab CI/CD Basics ===
  {
    id: "gitlab-pipeline-basics",
    title: "Pipeline Basics",
    description: "Create your first .gitlab-ci.yml and understand pipeline stages.",
    icon: "🦊",
    category: "devops",
    tasks: [
      {
        id: "gl-1",
        title: "Basic Pipeline",
        description: "Define stages and a simple job in .gitlab-ci.yml.",
        type: "fill-blank",
        codeTemplate: `{{BLANK_1}}:
  - build
  - test
  - deploy

build_job:
  stage: {{BLANK_2}}
  script:
    - echo "Building the project"
    - {{BLANK_3}} install
    - npm run build`,
        blanks: [
          { id: "BLANK_1", answer: "stages", hint: "Top-level key defining pipeline stages" },
          { id: "BLANK_2", answer: "build", hint: "Which stage this job belongs to" },
          { id: "BLANK_3", answer: "npm", hint: "Node.js package manager" },
        ],
      },
      {
        id: "gl-2",
        title: "Test Job",
        description: "Add a test job with coverage reporting.",
        type: "fill-blank",
        codeTemplate: `test_job:
  stage: {{BLANK_1}}
  script:
    - npm install
    - npm run test -- --coverage
  {{BLANK_2}}:
    reports:
      junit: test-results.xml
    paths:
      - {{BLANK_3}}/`,
        blanks: [
          { id: "BLANK_1", answer: "test", hint: "Testing stage" },
          { id: "BLANK_2", answer: "artifacts", hint: "Key to preserve job outputs" },
          { id: "BLANK_3", answer: "coverage", hint: "Coverage directory to keep" },
        ],
      },
      {
        id: "gl-3",
        title: "Deploy Job",
        description: "Deploy only on the main branch.",
        type: "fill-blank",
        codeTemplate: `deploy_production:
  stage: deploy
  script:
    - echo "Deploying to production"
    - ./deploy.sh
  {{BLANK_1}}:
    - if: $CI_COMMIT_BRANCH == "{{BLANK_2}}"
  {{BLANK_3}}: production`,
        blanks: [
          { id: "BLANK_1", answer: "rules", hint: "Conditional execution keyword" },
          { id: "BLANK_2", answer: "main", hint: "Primary branch name" },
          { id: "BLANK_3", answer: "environment", hint: "Deployment target keyword" },
        ],
      },
    ],
  },

  // === Variables & Secrets ===
  {
    id: "gitlab-variables",
    title: "Variables & Secrets",
    description: "Use CI/CD variables for configuration and secret management.",
    icon: "🔑",
    category: "devops",
    tasks: [
      {
        id: "gl-var-1",
        title: "Define Variables",
        description: "Set pipeline-level and job-level variables.",
        type: "fill-blank",
        codeTemplate: `{{BLANK_1}}:
  APP_NAME: "my-app"
  NODE_ENV: "production"

build_job:
  stage: build
  variables:
    BUILD_MODE: "{{BLANK_2}}"
  script:
    - echo "Building ${{BLANK_3}}"
    - npm run build`,
        blanks: [
          { id: "BLANK_1", answer: "variables", hint: "Top-level key for pipeline variables" },
          { id: "BLANK_2", answer: "release", hint: "Build mode for production" },
          { id: "BLANK_3", answer: "APP_NAME", hint: "Reference the variable" },
        ],
      },
      {
        id: "gl-var-2",
        title: "Masked Variables",
        description: "Use masked and protected variables for secrets.",
        type: "fill-blank",
        codeTemplate: `deploy_job:
  stage: deploy
  script:
    - docker login -u $CI_REGISTRY_USER -p ${{BLANK_1}} $CI_REGISTRY
    - docker push $CI_REGISTRY_IMAGE:${{BLANK_2}}
  rules:
    - if: $CI_COMMIT_{{BLANK_3}}`,
        blanks: [
          { id: "BLANK_1", answer: "CI_REGISTRY_PASSWORD", hint: "Predefined GitLab registry password var" },
          { id: "BLANK_2", answer: "CI_COMMIT_SHA", hint: "Predefined var for commit hash" },
          { id: "BLANK_3", answer: "TAG", hint: "Predefined var for git tags" },
        ],
      },
    ],
  },

  // === Caching & Artifacts ===
  {
    id: "gitlab-caching",
    title: "Caching & Artifacts",
    description: "Speed up pipelines with caching and pass data between jobs.",
    icon: "💾",
    category: "devops",
    tasks: [
      {
        id: "gl-cache-1",
        title: "Cache Dependencies",
        description: "Cache node_modules between pipeline runs.",
        type: "fill-blank",
        codeTemplate: `build_job:
  stage: build
  {{BLANK_1}}:
    key:
      files:
        - package-lock.json
    {{BLANK_2}}:
      - node_modules/
    policy: {{BLANK_3}}
  script:
    - npm ci
    - npm run build`,
        blanks: [
          { id: "BLANK_1", answer: "cache", hint: "Keyword to reuse files between runs" },
          { id: "BLANK_2", answer: "paths", hint: "Directories to cache" },
          { id: "BLANK_3", answer: "pull-push", hint: "Cache policy: read and write" },
        ],
      },
      {
        id: "gl-cache-2",
        title: "Pass Artifacts",
        description: "Share build output between stages.",
        type: "fill-blank",
        codeTemplate: `build_job:
  stage: build
  script:
    - npm run build
  {{BLANK_1}}:
    paths:
      - dist/
    expire_in: {{BLANK_2}}

deploy_job:
  stage: deploy
  {{BLANK_3}}:
    - job: build_job
      artifacts: true
  script:
    - deploy ./dist`,
        blanks: [
          { id: "BLANK_1", answer: "artifacts", hint: "Keyword to save job output" },
          { id: "BLANK_2", answer: "1 hour", hint: "How long to keep artifacts" },
          { id: "BLANK_3", answer: "needs", hint: "Keyword for job dependencies" },
        ],
      },
    ],
  },

  // === Docker in CI ===
  {
    id: "gitlab-docker",
    title: "Docker in GitLab CI",
    description: "Build and push Docker images in your pipeline.",
    icon: "🐳",
    category: "devops",
    tasks: [
      {
        id: "gl-docker-1",
        title: "Docker Build & Push",
        description: "Build a Docker image and push to GitLab Container Registry.",
        type: "fill-blank",
        codeTemplate: `build_image:
  stage: build
  image: {{BLANK_1}}
  services:
    - docker:dind
  variables:
    DOCKER_TLS_CERTDIR: "/certs"
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build -t $CI_REGISTRY_IMAGE:{{BLANK_2}} .
    - docker {{BLANK_3}} $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA`,
        blanks: [
          { id: "BLANK_1", answer: "docker:latest", hint: "Image with Docker CLI" },
          { id: "BLANK_2", answer: "$CI_COMMIT_SHA", hint: "Tag with commit hash" },
          { id: "BLANK_3", answer: "push", hint: "Upload image to registry" },
        ],
      },
      {
        id: "gl-docker-2",
        title: "Multi-Stage Image",
        description: "Use Kaniko for rootless Docker builds.",
        type: "fill-blank",
        codeTemplate: `build_image:
  stage: build
  image:
    name: gcr.io/kaniko-project/executor:v1.9.0-debug
    entrypoint: [""]
  script:
    - /kaniko/executor
      --context "\${CI_PROJECT_DIR}"
      --dockerfile "\${CI_PROJECT_DIR}/{{BLANK_1}}"
      --destination "$CI_REGISTRY_IMAGE:$CI_COMMIT_SHA"
      --{{BLANK_2}}
      --{{BLANK_3}}=redo`,
        blanks: [
          { id: "BLANK_1", answer: "Dockerfile", hint: "Default Dockerfile path" },
          { id: "BLANK_2", answer: "cache=true", hint: "Enable layer caching" },
          { id: "BLANK_3", answer: "snapshot-mode", hint: "How Kaniko captures filesystem" },
        ],
      },
    ],
  },

  // === Rules & Conditions ===
  {
    id: "gitlab-rules",
    title: "Rules & Conditions",
    description: "Control when jobs run with rules, only/except, and workflow.",
    icon: "🚦",
    category: "devops",
    tasks: [
      {
        id: "gl-rules-1",
        title: "Rules Syntax",
        description: "Use rules for conditional job execution.",
        type: "fill-blank",
        codeTemplate: `deploy_staging:
  stage: deploy
  script:
    - deploy-to-staging.sh
  rules:
    - if: $CI_COMMIT_BRANCH == "develop"
      {{BLANK_1}}: on_success
    - if: $CI_{{BLANK_2}} =~ /^v.*/
      when: manual
    - {{BLANK_3}}: never`,
        blanks: [
          { id: "BLANK_1", answer: "when", hint: "Keyword to control execution timing" },
          { id: "BLANK_2", answer: "COMMIT_TAG", hint: "Predefined var for git tags" },
          { id: "BLANK_3", answer: "when", hint: "Default fallback condition" },
        ],
      },
      {
        id: "gl-rules-2",
        title: "Workflow Rules",
        description: "Control when entire pipelines are created.",
        type: "fill-blank",
        codeTemplate: `{{BLANK_1}}:
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
    - if: $CI_COMMIT_BRANCH == "develop"
    - if: $CI_{{BLANK_2}}
    - if: $CI_PIPELINE_SOURCE == "{{BLANK_3}}"`,
        blanks: [
          { id: "BLANK_1", answer: "workflow", hint: "Top-level key for pipeline-level rules" },
          { id: "BLANK_2", answer: "MERGE_REQUEST_IID", hint: "Predefined var for merge requests" },
          { id: "BLANK_3", answer: "merge_request_event", hint: "Pipeline source for MR pipelines" },
        ],
      },
      {
        id: "gl-rules-3",
        title: "Changes Filter",
        description: "Run jobs only when specific files change.",
        type: "fill-blank",
        codeTemplate: `frontend_test:
  stage: test
  script:
    - cd frontend && npm test
  rules:
    - {{BLANK_1}}:
        paths:
          - "frontend/**/*"
          - "{{BLANK_2}}"
        compare_to: "{{BLANK_3}}"`,
        blanks: [
          { id: "BLANK_1", answer: "changes", hint: "Keyword to detect file changes" },
          { id: "BLANK_2", answer: "package.json", hint: "Root dependency file" },
          { id: "BLANK_3", answer: "main", hint: "Branch to compare against" },
        ],
      },
    ],
  },

  // === Templates & Includes ===
  {
    id: "gitlab-templates",
    title: "Templates & Includes",
    description: "DRY up your pipelines with extends, anchors, and includes.",
    icon: "📄",
    category: "devops",
    tasks: [
      {
        id: "gl-tmpl-1",
        title: "Job Templates",
        description: "Use hidden jobs and extends for reusable configs.",
        type: "fill-blank",
        codeTemplate: `.{{BLANK_1}}:
  image: node:18-alpine
  cache:
    paths:
      - node_modules/
  before_script:
    - npm ci

test_unit:
  {{BLANK_2}}: .node_base
  stage: test
  script:
    - npm run test:unit

test_e2e:
  extends: .{{BLANK_3}}
  stage: test
  script:
    - npm run test:e2e`,
        blanks: [
          { id: "BLANK_1", answer: "node_base", hint: "Hidden job name (starts with dot)" },
          { id: "BLANK_2", answer: "extends", hint: "Keyword to inherit from another job" },
          { id: "BLANK_3", answer: "node_base", hint: "Reference the template job" },
        ],
      },
      {
        id: "gl-tmpl-2",
        title: "Include Templates",
        description: "Include external CI templates.",
        type: "fill-blank",
        codeTemplate: `{{BLANK_1}}:
  - template: Security/SAST.gitlab-ci.yml
  - {{BLANK_2}}: 'https://example.com/ci/deploy.yml'
  - project: 'my-group/ci-templates'
    ref: main
    file: '/templates/{{BLANK_3}}.yml'`,
        blanks: [
          { id: "BLANK_1", answer: "include", hint: "Top-level key for external configs" },
          { id: "BLANK_2", answer: "remote", hint: "Include from a URL" },
          { id: "BLANK_3", answer: "docker-build", hint: "Template file name" },
        ],
      },
    ],
  },

  // === Environments & Review Apps ===
  {
    id: "gitlab-environments",
    title: "Environments & Review Apps",
    description: "Manage deployment environments and dynamic review apps.",
    icon: "🌍",
    category: "devops",
    tasks: [
      {
        id: "gl-env-1",
        title: "Environment Deployment",
        description: "Deploy to named environments with URLs.",
        type: "fill-blank",
        codeTemplate: `deploy_staging:
  stage: deploy
  script:
    - deploy-to-server.sh staging
  {{BLANK_1}}:
    name: {{BLANK_2}}
    url: https://staging.example.com
  rules:
    - if: $CI_COMMIT_BRANCH == "{{BLANK_3}}"`,
        blanks: [
          { id: "BLANK_1", answer: "environment", hint: "Keyword for deployment targets" },
          { id: "BLANK_2", answer: "staging", hint: "Environment name" },
          { id: "BLANK_3", answer: "develop", hint: "Branch triggering staging deploy" },
        ],
      },
      {
        id: "gl-env-2",
        title: "Review Apps",
        description: "Create dynamic environments for merge requests.",
        type: "fill-blank",
        codeTemplate: `deploy_review:
  stage: deploy
  script:
    - deploy-review-app.sh
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    url: https://$CI_COMMIT_REF_SLUG.review.example.com
    on_stop: {{BLANK_1}}
  rules:
    - if: $CI_{{BLANK_2}}

stop_review:
  stage: deploy
  script:
    - teardown-review-app.sh
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    action: {{BLANK_3}}
  when: manual`,
        blanks: [
          { id: "BLANK_1", answer: "stop_review", hint: "Job to run when environment stops" },
          { id: "BLANK_2", answer: "MERGE_REQUEST_IID", hint: "Predefined MR variable" },
          { id: "BLANK_3", answer: "stop", hint: "Action to tear down environment" },
        ],
      },
    ],
  },

  // === Security Scanning ===
  {
    id: "gitlab-security",
    title: "Security Scanning",
    description: "Integrate SAST, DAST, and dependency scanning.",
    icon: "🛡️",
    category: "devops",
    tasks: [
      {
        id: "gl-sec-1",
        title: "SAST Scanning",
        description: "Enable Static Application Security Testing.",
        type: "fill-blank",
        codeTemplate: `include:
  - template: {{BLANK_1}}/SAST.gitlab-ci.yml

variables:
  SAST_EXCLUDED_PATHS: "spec,test,tests"

sast:
  stage: {{BLANK_2}}
  {{BLANK_3}}:
    reports:
      sast: gl-sast-report.json`,
        blanks: [
          { id: "BLANK_1", answer: "Security", hint: "GitLab template category for security" },
          { id: "BLANK_2", answer: "test", hint: "Stage for security scans" },
          { id: "BLANK_3", answer: "artifacts", hint: "Key to save scan results" },
        ],
      },
      {
        id: "gl-sec-2",
        title: "Dependency Scanning",
        description: "Scan dependencies for known vulnerabilities.",
        type: "fill-blank",
        codeTemplate: `include:
  - template: Security/{{BLANK_1}}.gitlab-ci.yml

dependency_scanning:
  stage: test
  variables:
    DS_DEFAULT_ANALYZERS: "{{BLANK_2}}"
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
      {{BLANK_3}}: on_success`,
        blanks: [
          { id: "BLANK_1", answer: "Dependency-Scanning", hint: "GitLab template for dep scanning" },
          { id: "BLANK_2", answer: "gemnasium", hint: "Default GitLab dependency analyzer" },
          { id: "BLANK_3", answer: "when", hint: "Execution condition keyword" },
        ],
      },
    ],
  },

  // === Multi-Project Pipelines ===
  {
    id: "gitlab-multi-project",
    title: "Multi-Project Pipelines",
    description: "Trigger pipelines across GitLab projects.",
    icon: "🔗",
    category: "devops",
    tasks: [
      {
        id: "gl-multi-1",
        title: "Trigger Child Pipeline",
        description: "Trigger a downstream project pipeline.",
        type: "fill-blank",
        codeTemplate: `trigger_deploy:
  stage: deploy
  {{BLANK_1}}:
    project: "my-group/deploy-project"
    branch: "{{BLANK_2}}"
    strategy: {{BLANK_3}}`,
        blanks: [
          { id: "BLANK_1", answer: "trigger", hint: "Keyword to start another pipeline" },
          { id: "BLANK_2", answer: "main", hint: "Branch to trigger on" },
          { id: "BLANK_3", answer: "depend", hint: "Wait for downstream pipeline result" },
        ],
      },
      {
        id: "gl-multi-2",
        title: "Parent-Child Pipeline",
        description: "Generate dynamic child pipelines.",
        type: "fill-blank",
        codeTemplate: `generate_config:
  stage: build
  script:
    - python generate-pipeline.py > child-pipeline.yml
  artifacts:
    paths:
      - child-pipeline.yml

run_child:
  stage: deploy
  trigger:
    {{BLANK_1}}: child-pipeline.yml
    {{BLANK_2}}: depend
  {{BLANK_3}}:
    - job: generate_config
      artifacts: true`,
        blanks: [
          { id: "BLANK_1", answer: "include", hint: "Key for the child pipeline config file" },
          { id: "BLANK_2", answer: "strategy", hint: "Wait for child pipeline" },
          { id: "BLANK_3", answer: "needs", hint: "Job dependency keyword" },
        ],
      },
    ],
  },
];
