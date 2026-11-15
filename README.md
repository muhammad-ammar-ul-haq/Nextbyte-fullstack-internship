# Nextbyte-fullstack-internship
# Task Manager Web Application

A full-stack web application that helps students and professionals create, organize, and track their daily tasks.

> **Status:** 🚧 In development (planning phase)

## 1. Project Overview

Task Manager is a web-based application where users can create tasks, set priorities and due dates, update or delete them, and track their progress from a simple dashboard.

## 2. Problem Statement

Students and professionals often struggle to manage their daily activities. Important tasks get forgotten, deadlines are missed, and it becomes hard to see what is pending and what is already done, especially when tasks are scattered across notes, chats, and sticky papers.

## 3. Proposed Solution

A single, organized platform where users can manage all their tasks in one place with priority levels, due dates, and status tracking.

## 4. Planned Features

- Create, view, update, and delete tasks
- Mark tasks as Pending or Completed
- Set priority (High, Medium, Low)
- Assign due dates
- Dashboard to monitor progress
- Filter and search tasks
- User authentication (planned, if time permits)

## 5. Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + TypeScript |
| Backend | c# + .Net core |
| Database | MySQL |
| Version Control | Git & GitHub |

## 6. Main Application Screens

1. Dashboard
2. Add Task
3. Edit Task
4. Task List / Management View
5. Login / Register (if implemented)

## 7. Database Design

**Table: `tasks`**

| Column | Type | Description |
|---|---|---|
| id | INT (PK, AUTO_INCREMENT) | Unique task identifier |
| title | VARCHAR(150) | Task title |
| description | TEXT | Task details |
| due_date | DATE | Task deadline |
| priority | ENUM('low','medium','high') | Task priority |
| status | ENUM('pending','completed') | Task status |
| created_at | TIMESTAMP | Creation time |

## 8. Planned API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /api/tasks | Retrieve all tasks |
| POST | /api/tasks | Create a new task |
| PUT | /api/tasks/:id | Update an existing task |
| DELETE | /api/tasks/:id | Delete a task |

Detailed request/response documentation will be added once the API is implemented.


## 9. Development Progress

- [x] Project selected and repository created
- [x] User problem documented
- [X] Main screens sketched
- [ ] Database entities finalized
- [ ] API flow diagram prepared
- [ ] Frontend development
- [ ] Backend API
- [ ] Database integration
- [ ] Frontend–backend integration
- [ ] Authentication and testing
- [ ] Deployment
- [ ] Final documentation and demo


