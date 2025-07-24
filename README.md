# 🎓 Canvas LMS UI Clone - Sunheri Internship Assignment

This is a **responsive front-end UI clone** inspired by **Canvas LMS**, created as part of the application process for the **Sunheri Front-End Internship**.

## 📌 Objective

Recreate the layout and functionality of the Canvas LMS UI using **React.js** and **Tailwind CSS**. The focus was on structure, responsiveness, and clean user interface design with mock data.

---

## 🗂 Pages Overview

### 📄 1. Dashboard (Home Page `/`)

#### ✅ Sidebar Navigation
- Items: `Dashboard`, `Courses`, `Calendar`, `Inbox`, `Help`
- **Desktop**: Full label view  
- **Tablet**: Icons only  
- **Mobile**: Hamburger toggle with dropdown

#### ✅ Header
- `Welcome, Anuj` (mock user)
- Displays **current date** using JavaScript

#### ✅ Course Grid
- Displays **6 course cards** with:
  - Course title
  - Instructor name
  - Progress bar
  - “Go to Course” button
- **Responsive Layout**:
  - **Desktop**: 3 columns
  - **Tablet**: 2 columns
  - **Mobile**: 1 column

#### ✅ To-Do List
- 3–5 tasks with:
  - Title
  - Due date
  - Checkbox for marking completion

#### 🟢 Bonus
- Optional **calendar widget** or **notification banner** included for extra functionality

---

### 📘 2. Course Detail Page (`/courses/:id`)

#### ✅ Breadcrumb
- `Dashboard > Course > Module`

#### ✅ Sections (as Tabs or Vertical Nav)
- `Overview` — shows course summary
- `Assignments` — mock list of assignments
- `Grades` — mock table with grading details

#### ✅ Mock Data
- All course-related data is static and pulled from local JSON

---

## 🧰 Tech Stack

| Tech         | Purpose                      |
|--------------|------------------------------|
| React.js     | Front-end framework          |
| Tailwind CSS | Styling and responsiveness   |
| React Router | Routing between pages        |
| Mock JSON    | Simulated backend data       |
| Vercel       | Deployment                   |

---

## 📱 Responsiveness

- **Mobile First** design
- Adaptive layout for `desktop`, `tablet`, and `mobile`
- Custom screen width (`769px`) for responsive breakpoints
- Used inline conditionals where needed for screen width

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/ANUJNEGI15072005/canvas-ui-clone.git
cd canvas-ui-clone
npm install
npm run dev
