# 📝 To-Do List Task Manager

A sleek, drag-and-drop-enabled task manager built with vanilla JavaScript, HTML, and CSS. Features local storage persistence, sound effects, and smooth animations.

![To-Do List Preview](https://img.shields.io/badge/Status-Active-success) ![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

### ✅ Core Functionality
- **Add Tasks** - Quick input with Enter key or button click
- **Edit Tasks** - Inline editing with visual feedback
- **Delete Tasks** - Smooth exit animations with sound
- **Mark Complete** - Checkbox toggle with strike-through styling
- **Task Counter** - Real-time pending/completed task tracking

### 🎯 Advanced Features
- **Drag & Drop Reordering** - Intuitive task rearrangement
- **Local Storage** - Tasks persist between browser sessions
- **Sound Effects** - Audio feedback for actions (add, complete, edit, delete)
- **Keyboard Shortcuts** - Enter to add/submit, Esc to cancel
- **Responsive Design** - Works on desktop and mobile devices

### 🎨 UI/UX Highlights
- **Smooth Animations** - Enter/exit transitions and edit effects
- **Visual Feedback** - Drag states and hover effects
- **Auto-scroll** - New tasks appear at top with smooth scrolling
- **Clean Interface** - Minimalist design focused on usability

## 🚀 Quick Start

### Prerequisites
- Modern web browser with JavaScript enabled
- Local server (for local development)
 
## 🎮 How to Use

### Adding Tasks
1. Type your task in the input field
2. Press `Enter` or click the "Add" button
3. Task appears at the top of the list with an animation

### Managing Tasks
- **Complete**: Click the checkbox
- **Edit**: Click the pencil icon (✏️), edit text, press Enter or click →
- **Delete**: Click the trash icon (🗑️)
- **Reorder**: Drag and drop tasks to desired position

### Keyboard Shortcuts
- `Enter` - Add new task / Save edit
- `Esc` - Cancel editing (when in edit mode)

## 🏗️ Project Structure

```
todo-task-manager/
│
├── index.html          # Main HTML file
├── style.css           # All styles
├── script.js           # Core JavaScript logic
├── sounds/             # Sound effects directory
│   ├── add.mp3
│   ├── check.mp3
│   ├── delete.mp3
│   ├── edit.mp3
│   └── uncheck.mp3
│
├── README.md           # This file
└── assets/             # Optional: images/icons
```

## 🔧 Technical Implementation

### Data Structure
Tasks are stored as objects:
```JavaScript
{
  id: Date.now(),      // Unique timestamp ID
  text: 'Task name',   // Task content
  completed: false     // Completion status
}
```

### Key Functions
- `addTask()` - Creates new tasks
- `renderTasks()` - Updates UI from data
- `saveTasks()` - Persists to localStorage
- `enableDrag()` - Implements drag-and-drop
- `syncOrderFromDOM()` - Syncs visual order to data

### Storage
- Uses `localStorage` with key `'tasks.'`
- Automatic saving on every change
- JSON serialization for complex data
 
### Changing Sounds
Replace audio files in `sounds/` directory:
- `add.mp3` - When adding new task
- `check.mp3` - When marking complete
- `uncheck.mp3` - When unmarking task
- `edit.mp3` - When saving edit
- `delete.mp3` - When deleting task
 
## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Font Awesome](https://fontawesome.com/)
- Sound effects from [freesound.org](https://freesound.org/)
- Built with vanilla JavaScript for learning purposes

## 🧠 ScreenShot and Recordings

<img width="1896" height="906" alt="Screenshot 2025-12-21 235051" src="https://github.com/user-attachments/assets/ff85fe9d-9a54-452c-a22d-3eb1a4690b37" />

<video controls src="Screen Recording 2025-12-18 182020.mp4" title="Title"></video>

## 👤 Author
**Deepa K** - Frontend Developer

[![GitHub](https://img.shields.io/badge/GitHub-Deepa--Codes-181717?logo=github)](https://github.com/Deepa-Codes)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Deepa_K-0077B5?logo=linkedin)](https://www.linkedin.com/in/deepa-k-a56a74115/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Deepa_K-FF6B6B?logo=netlify)](https://deepa-k.netlify.app/)

⭐ **Star this repo if you find it helpful!** ⭐

**Happy Task Managing!** 📋✨
