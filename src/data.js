// ─── PORTFOLIO DATA ───────────────────────────────────────────────────────────


const DATA = {
  // ── Personal Info ──────────────────────────────────────────────────────────
  name: "MD AHSANUL HUSSAIN",          
  nickname: "AHSANUL",     
  title: "Undergraduate Student", 
  typingTexts: [            
    
  
    "CSE Student",
  ],
  bio: "🎓 Final Year Student.Eager to learn Data Science and Machine Learning. Exploring Python, Pandas, and basic data analysis projects. Motivated to grow skills and contribute to real-world problems. Open to internships and learning opportunities.",
  email: "mahs212003@gmail.com",
  github: "https://github.com/MDAHSANULHUSSAIN",    
  linkedin: "https://www.linkedin.com/in/md-ahsanul-hussain-49656b2a4/", 
  facebook: "https://facebook.com/Ahsanul Hussain", 

  // ── Highlights (About section) ─────────────────────────────────────────────
  highlights: [
    "Data Analysis & Visualization",
    "Machine Learning & Predictive Modeling",
    "Data Cleaning & Preprocessing",
    "REST API Integration",
    "Exploratory Data Analysis (EDA)",
    "Team Collaboration & Agile Workflow",
  ],

  // ── Education (Resume section) ─────────────────────────────────────────────
  education: [
    {
      institution: "Metropolitan University Bangladesh",
      degree: "B.Sc. in Computer Science & Engineering",
      year: "2023 - Present",
    },
    {
      institution: "Sylhet Commerce College", 
      degree: "HSC - Science",
      year: "2019 - 2020",
    },
    {
      institution: "J.K & H.K High School & College",  // 
      degree: "SSC - Science",
      year: "2014 - 2018",
    },
  ],

  // ── Work History (Resume section) ──────────────────────────────────────────
  workHistory: [
    {
      company: "Company Name",     
      role: "Frontend Developer Intern",
      year: "2024",
    },
    {
      company: "Freelance",
      role: "Web Developer",
      year: "2023 - Present",
    },
  ],

  // ── Skills (Resume section) ────────────────────────────────────────────────
 skills: [
    { name: "Python", level: 90 },
    { name: "Pandas & NumPy", level: 85 },
    { name: "Matplotlib & Seaborn", level: 80 },
    { name: "Scikit-learn", level: 75 },
    { name: "SQL & Databases", level: 70 },
    { name: "Git & GitHub", level: 80 },
  ],


  // ── Projects (Resume section) ──────────────────────────────────────────────
  projects: [
    {
      title: "Project One",       
      description: "Student Performance Prediction",
      tags: ["Python", "ML", "Pandas"],
      link: "https://github.com/MDAHSANULHUSSAIN/ML-PROJECT",
      year: "2025",
    },
    {
      title: "Project Two",
      description: "Description of your second project goes here.",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "#",
      year: "2023",
    },
    {
      title: "Project Three",
      description: "Description of your third project goes here.",
      tags: ["React", "Firebase"],
      link: "#",
      year: "2023",
    },
  ],

  // ── Achievements (Resume section) ──────────────────────────────────────────
  achievements: [
    {
      title: "Certificate of Completion – Data Science & Machine Learning with Python",  
      issuer: "Ostad",                                       
      year: "2025",
      image: "public/Md Ahsanul Hussain-Data Science 49-C38088_page-0001.jpg",   // ✏️ certificate image path , e.g. "/certs/python.jpg"
      link: "#",     // ✏️ certificate link
    },
    {
      title: "Participation Certificate – Intra Metropolitan University Programming Contest(IMUPC)", 
      issuer: "Metropolitan University cse society",                                    
      year: "2025",
      image: "public/Certificate1.jpeg",
      link: "#",
    },
    {
      title: "Participation Certificate – ICPC Asia Regional site online preliminary contest",  // ✏️ certificate 
      issuer: "ICPC",                                        // ✏️ issuer
      year: "2023",
      image: "public/Screenshot 2026-02-21 135456.png",
      link: "#",
    }
  ],

  // ── Co-Curricular Activities ────────────────────────────────────────────────
  coCurricular: [
    {
      title: "The Flood Response Mission",
      organization: "Metropolitan University Disaster Response Unit",
      year: "2024",
      description: "",
      image: null,        // ✏️ activity photo path, e.g. "/activities/club.jpg"
      certificate: "/public/C1.jpeg",
    },
    {
      title: "Unimart Sylhet Half Marathon",
      organization: "Sylhet Runners Community",
      year: "2023",
      description: "",
      image: null,
      certificate: "/public/C4.png",
    },
    {
      title: "Sylhet 10k Trail Run",
      organization: "Sylhet Runners Community",
      year: "2024",
      description: "",
      image: null,
      certificate: "/public/C3.png",
    },
    {
      title: " Sylhet Half Marathon",
      organization: "Sylhet Runners Community",
      year: "2025",
      description: "",
      image: null,
      certificate: "/public/C3.png",
    },
  ],

  // ── Blog Posts ──────────────────────────────────────────────────────────────
  blogs: [
    {
      title: "Getting Started with Python for Data Science",   // ✏️ blog title
      date: "January 15, 2025",
      category: "Data Science",
      summary: "A beginner-friendly guide to Python libraries like Pandas and NumPy...",  // ✏️ short summary
      content: `Write your full blog content here. You can use multiple paragraphs.

This is the second paragraph of your blog post. Add as much content as you want!`,  // ✏️ full blog content
      tags: ["Python", "Data Science", "Beginner"],
    },
    {
      title: "My Journey into Machine Learning",
      date: "February 2, 2025",
      category: "Machine Learning",
      summary: "How I started learning ML from scratch and the resources I used...",
      content: `Write your second blog post content here.

Share your experiences, what you learned, and tips for others.`,
      tags: ["Machine Learning", "Journey", "Tips"],
    },
  ],

  // ── Interests (Resume section) ─────────────────────────────────────────────
  interests: [
    "Football",
    "Traveling",
    "Problem Solving",
    "Photography",
    "Reading",
  ],

  // ── Testimonials ───────────────────────────────────────────────────────────
  testimonials: [
    {
      text: "Excellent work! Delivered exactly what I needed with clean code and on time.",
      name: "Client Name",
      role: "CEO, Company",
      rating: 5,
    },
    {
      text: "Very professional and talented developer. Will definitely work again.",
      name: "Another Client",
      role: "Project Manager",
      rating: 5,
    },
    {
      text: "Great communication and delivered high quality work. Highly recommended!",
      name: "Third Client",
      role: "Entrepreneur",
      rating: 4,
    },
  ],
};

export default DATA;
