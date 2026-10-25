// ============================================================
// ALL personal details live here. Edit this file only.
// Both the website and the AI chatbot read from it.
// Anything in [SQUARE BRACKETS] is a placeholder: replace it.
// ============================================================
const PORTFOLIO = {
  name: "Vedant Dubey",
  role: "Aspiring Developer",
  tagline: "I build small, useful programs and learn something new with every project.",
  about:
    "I'm a first-year B.Tech student in Computer Science and Engineering (CSE Core) at JECRC University, Jaipur. I enjoy learning programming by building small projects, from Python programs to interactive web apps, and I use AI tools like Cursor to write, debug and improve my code. I'm looking to keep growing my skills and build more real-world projects.",
  location: "Jaipur, Rajasthan, India",
  education: {
    degree: "B.Tech in Computer Science and Engineering - CSE Core (1st Year)",
    school: "JECRC University, Jaipur",
    years: "2025 - 2029"
  },
  skills: ["Python", "HTML", "CSS", "JavaScript", "Git & GitHub", "Cursor AI", "Vercel"],
  contact: {
    email: "vedantdubey111777@gmail.com",
    github: "https://github.com/VedantDubey12",
    githubLabel: "github.com/VedantDubey12"
  },
  projects: [
    {
      title: "Python Programs Collection",
      description:
        "A set of core Python programs: factorial (loop and recursive), Fibonacci series, and structure-to-dictionary conversion, with an updated README documenting each program.",
      tags: ["Python", "Git", "README"],
      github: "https://github.com/VedantDubey12/Python-Programs-Collection"
    },
    {
      title: "Messy Python Code Improvement",
      description:
        "A deliberately messy Python script cleaned up with AI assistance: clearer names, better structure, comments and simpler logic, with the same behaviour.",
      tags: ["Python", "AI Assistance", "Refactoring"],
      github: "https://github.com/VedantDubey12/Messy-Python-Code-improvement"
    },
    {
      title: "Bug Fixing Using Cursor AI",
      description:
        "An incorrect, buggy program that was diagnosed and corrected using Cursor AI, with notes on what was wrong and how it was fixed.",
      tags: ["Python", "Cursor AI", "Debugging"],
      github: "https://github.com/VedantDubey12/Bug-fixing-using-Cursor-Ai"
    },
    {
      title: "Interactive Quiz Application",
      description:
        "A browser-based quiz app (Lecture 10) that asks questions one at a time, checks answers and shows the final score.",
      tags: ["HTML", "CSS", "JavaScript", "Quiz"],
      github: "https://github.com/VedantDubey12/Interactive-Quiz-Application-"
    },
    {
      title: "Book Reading List Application",
      description:
        "A reading list app (Lecture 11) for adding books and tracking what to read. The README includes the deployed link.",
      tags: ["HTML", "CSS", "JavaScript", "Book", "Vercel"],
      github: "https://github.com/VedantDubey12/Book-Reading-List-Application-",
      live: ""
    }
  ],
  // Extra notes only the chatbot sees (optional)
  projectNotes: [
    "Python Programs Collection: factorial using a loop and recursion, Fibonacci series, converting pairs, two lists and an object into dictionaries.",
    "Messy Python Code Improvement: a student marks script (average, best mark, grade) rewritten with clear names, sum()/max(), f-strings, docstrings and a main guard; output stays identical.",
    "Bug Fixing Using Cursor AI: fixed three bugs (max of negative numbers, average divided by length+1, uppercase vowels missed) and added assert checks.",
    "Interactive Quiz Application: 7 multiple-choice questions on web development, Python and Git, with progress counter, live score, green/red feedback and a Try again button.",
    "Book Reading List Application: add books with title and author, mark read/unread, remove, filter All/To Read/Read, live summary, saved in the browser with localStorage."
  ].join("\n")
};

if (typeof module !== "undefined") module.exports = PORTFOLIO;
