
# My Portfolio

React দিয়ে বানানো personal portfolio website।

## 📁 Folder Structure


my-portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css         ← Global styles
    ├── data.js            ← ✏️  info section
    ├── assets/
    │   └── profile.jpg    ← তোমার ছবি
    └── components/
        ├── Navbar.jsx / Navbar.css
        ├── Hero.jsx / Hero.css
        ├── About.jsx / About.css
        ├── Resume.jsx / Resume.css
        ├── Testimonial.jsx / Testimonial.css
        └── Contact.jsx / Contact.css


## 🚀 Run 

bash
npm install
npm run dev


তারপর browser এ যাও: http://localhost:5173

## ✏️ Customize করার নিয়ম

1. `src/data.js` খোলো
2. তোমার নাম, bio, skills, projects, links দাও
3. `src/assets/profile.jpg` তে তোমার ছবি replace করো

## 📱 Sections

- **Home** — Hero with typing animation
- **AboutMe** — Bio + highlights + photo
- **Resume** — Education, Work, Skills, Projects, Interests (tabbed)
- **Testimonial** — Client reviews
- **ContactMe** — Contact form

