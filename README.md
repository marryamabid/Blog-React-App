# # BlogPost App

A full-featured blogpost application built with **React, Redux, Appwrite**, and **Tailwind CSS**. Users can create, edit, and publish blog posts with a rich text editor and upload featured images.

## Features

✅ **User Authentication** (Sign Up, Login, Logout)
✅ **Create & Edit Blog Posts**
✅ **Auto-generated Slug for SEO**
✅ **Rich Text Editor (TinyMCE)**
✅ **Upload Featured Images**
✅ **Post Status (Active/Draft)**
✅ **Responsive UI with Tailwind CSS**

## Tech Stack

- **React.js** – Frontend framework
- **Redux Toolkit** – State management
- **React Hook Form** – Form handling
- **Appwrite** – Backend as a Service (Auth, Database, Storage)
- **TinyMCE** – Rich Text Editor
- **Tailwind CSS** – UI Styling
  
  Live Demo
🔗 [Blog Post App](https://blogpost-app-chi.vercel.app/)



## Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/blog-post-app.git
   cd blog-post-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up Appwrite**
   - Create a new project in **Appwrite**.
   - Configure authentication and database.
   - Add storage for image uploads.
   - Copy API credentials and update `.env` file.

4. **Run the development server**
   ```sh
   npm run dev
   ```

## Folder Structure

```
📂 blog-post-app
├── 📂 src
│   ├── 📂 components   # Reusable UI components
│   ├── 📂 pages        # App pages (Signup, Login, Dashboard)
│   ├── 📂 store        # Redux slices
│   ├── 📂 appwrite     # Appwrite service functions
│   ├── 📂 conf         # Appwrite service variable import
│   ├── index.css      # for import @tailwindcss
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
├── .env               # Appwrite API keys (not included in repo)
├── package.json       # Dependencies and scripts
├── README.md          # Documentation (this file)
```

## Usage

- **Sign Up / Login** to create an account.
- **Create a new post** by entering a **Title, Content, and Featured Image**.
- **Slug is auto-generated** based on the title.
- **Save as Draft or Publish**.
- View and manage all posts from the **allposts**.

## Contributing

Want to contribute? Feel free to fork the repo and submit a pull request. 😊

## License

MIT License © 2025 Marryam Abid


