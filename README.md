# 🎨 Design Sandbox

Welcome to the Design Sandbox — a safe space to get hands-on with Git, GitHub, and AI-native ways of working. You don't need to be a developer to use this. Follow the steps below and you'll be up and running in no time.

---

## 📌 What Is This?

This repo is a shared learning environment for designers who want to:

- Understand how Git and GitHub work
- Get comfortable cloning repos and pulling down files
- Start building AI-native habits into their design workflow

Think of it as a playground — nothing here is precious, and making mistakes is encouraged.

---

## 🚀 Getting Started

### Step 1 — Install Git

If you haven't already, download and install Git:
👉 https://git-scm.com/downloads

Not sure if you have it? Open a terminal and run:

```bash
git --version
```

If you see a version number, you're good to go.

### Step 2 — Clone This Repo

Cloning means downloading a copy of this repo to your local machine, with a live connection back to GitHub.

```bash
git clone https://github.com/YOUR-ORG/design-sandbox.git
```

Then navigate into the folder:

```bash
cd design-sandbox
```

> 💡 **Prefer a visual interface?** Download [GitHub Desktop](https://desktop.github.com/) — it lets you clone, pull, and push without touching the terminal.

### Step 3 — Pull Down the Latest Changes

Whenever someone updates the repo, you can grab those changes with:

```bash
git pull
```

Make a habit of doing this at the start of every session.

---

## 📁 Folder Structure

```
design-sandbox/
├── _shared/       # Shared templates, assets, and resources for the whole team
├── team/          # Personal sandbox folders — one per team member
└── README.md      # You are here
```

---

## 🛠️ Recommended Software

You don't need all of this — but this is the stack that works well for AI-native design work. Install what makes sense for where you are right now.

---

### Terminals & Editors

**[Ghostty](https://ghostty.org/)**
A fast, modern terminal that's become a favourite for designers dipping into the command line. It's clean, GPU-accelerated, and doesn't feel intimidating. If you've never used a terminal before, start here.

**[Cursor](https://www.cursor.com/)**
An AI-first code editor built on VS Code. If you're doing anything with files, configs, or code alongside your design work, Cursor is excellent — it understands context across your whole project and can explain, edit, and generate right inside the editor.

**[Supacode](https://supacode.sh/)**
A more advanced setup — and worth knowing about when you're ready to level up. Supacode is a native macOS app (built on the same engine as Ghostty) that acts as a command centre for running 50+ AI coding agents in parallel. Each agent gets its own isolated Git worktree, so they can't step on each other's work. You can run Claude Code, Codex, or any other CLI agent inside it, review CI checks, and open pull requests — all without leaving the terminal. Overkill for day one, but a glimpse of where AI-native workflows are heading.

> ⚠️ **macOS only** — Supacode currently requires macOS 26 Tahoe. Check your OS version before trying to install.

---

### Design Tools

**[Figma](https://www.figma.com/)**
The team's primary design tool. If you're not already using it collaboratively via shared files and libraries, this sandbox is a good excuse to start.

**[Figma Make](https://www.figma.com/make/)**
Figma's AI-powered generative design feature. Describe what you want — a component, a layout, a prototype — and it builds a first draft. Great for rapid exploration and a good starting point for AI experiments.

**[Pencil](https://pencil.evolus.vn/)**
A lightweight open-source prototyping tool. Useful for quick wireframes and low-fidelity sketches without the overhead of a full Figma file.

---

### Claude Code

**[Claude Code](https://docs.anthropic.com/en/docs/claude-code)**
An agentic AI assistant that runs directly in your terminal. Rather than just answering questions, Claude Code can read your files, write and edit code, run commands, and work through multi-step tasks autonomously — all from the command line. It works brilliantly inside Ghostty or Supercode.

#### Using Claude Code in your sandbox folder

The key habit to build is navigating into your own experiments folder *before* you start Claude Code, so it has the right context for what you're working on.

```bash
# Step 1 — navigate to your personal experiments folder
cd design-sandbox/team/your-name/experiments

# Step 2 — launch Claude Code
claude
```

From there you can ask it to create an experiment brief, draft a prompt log entry, summarise what's in your folder, or help you build and document anything you're exploring. It reads the files around it, so the more context you give it (a brief, a prompt log, a README), the better its output.

> 💡 **Tip:** Try asking it something like *"Read my experiment brief and suggest three prompts I could use to test this in Figma Make"* — it'll use the files in your folder as context automatically.

---

## 🤖 Going AI Native

Being AI-native isn't just about using AI tools — it's about working in a way that lets AI assist you at every step. Here are some habits to build:

- **Write clear commit messages** — describe *what* you changed and *why*. AI tools can read your Git history and help you summarise work, generate changelogs, or spot patterns.
- **Use plain language in file names and folder structures** — makes it easier for AI to understand and navigate your project.
- **Document your decisions** — drop a short note in a file when you make a design choice. Future you (and future AI) will thank you.
- **Experiment with AI in your tools** — many design tools (Figma, Adobe, etc.) now have AI features built in. Try them. Break them. See what sticks.

---

## 🛠️ Useful Git Commands Cheat Sheet

| What you want to do | Command |
|---|---|
| Clone a repo | `git clone <url>` |
| Get the latest changes | `git pull` |
| See what's changed locally | `git status` |
| Stage your changes | `git add .` |
| Save a snapshot (commit) | `git commit -m "your message"` |
| Push changes to GitHub | `git push` |

---

## 🙋 Need Help?

If you get stuck, check out these resources:

- [GitHub's own beginner guide](https://docs.github.com/en/get-started)
- [Oh Shit, Git!](https://ohshitgit.com/) — plain English fixes for common Git disasters
- Ask in the team Slack / channel — someone will have seen it before

---

*Maintained by the Design Team. Open a GitHub Issue if something is wrong or missing.*
