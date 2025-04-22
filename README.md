# todolist
# 📝 Modular Todo List App

A sleek, modular Todo List application built with **JavaScript**, **HTML**, and **CSS**. The app supports **multiple projects**, **drag-and-drop reordering**, **priority styling**, **completed task archiving**, and uses **Webpack** for modular bundling.

---

## 🚀 Features

- ✅ **Create and Manage Projects**
- 🗂️ **Add Todo Items** per project with:
  - Title, description
  - Due date
  - Priority (high, medium, low)
- 🔃 **Drag-and-drop** to reorder todos
- 🌈 **Priority-based styling**
- 🖋️ **Edit & Delete Projects**
- 📦 **Completed Task Archive**
  - Mark todos as completed
  - View archived/completed todos
  - Permanently delete from archive
- 💾 **LocalStorage Persistence**
- 📦 **Modular architecture** using Webpack

---

## 📁 Project Structure

todo-app/
├── dist/
│   └── index.html
├── src/
│   ├── index.js
│   ├── app/
│   │   ├── project.js
│   │   ├── todo.js
│   │   ├── projectManager.js
│   │   └── todoManager.js
│   ├── ui/
│   │   ├── domController.js
│   │   └── eventHandlers.js
│   ├── storage/
│   │   └── localStorage.js
│   ├── styles/
│   │   └── style.css
│   └── utils/
│       └── helpers.js
├── webpack.config.js
├── package.json
└── README.md

---

## 🛠️ Setup

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   
Install dependencies:

bash
Copy
Edit
npm install
Start development server:

bash
Copy
Edit
npm start
Build for production:

bash
Copy
Edit
npm run build

📄 License
This project is open source and available under the MIT License.

🙌 Acknowledgements
Built with ❤️ using plain JavaScript and modular design patterns.
