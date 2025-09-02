// Project list — update titles/links as you like.
// Local PDFs: either keep these filenames in the same folder as index.html
// or rename and update the href accordingly.
const projects = [
  {
    title: "December Fall 24 Yearbook",
    href: "https://www.canva.com/design/DAGXk6CIJog/ieGvCqNnruBFhSE6bkg7wA/edit?utm_content=DAGXk6CIJog&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    badge: "Canva"
  },
  {
    title: "PBL Case 1",
    href: "https://www.canva.com/design/DAGWRoXegDY/D9lbfHAgXzzCWtFry-VRHw/edit?utm_content=DAGWRoXegDY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    badge: "Canva"
  },
  {
    title: "PAL 1",
    href: "https://drive.google.com/file/d/1r2vG1D0UF0JDmqXQORkIyShZS6wYYu54/view",
    badge: "Google Drive"
  },
  // Local PDFs (make sure the files exist next to index.html)
  {
    title: "PBL Case 2",
    href: encodeURI("./1.pdf"),
    badge: "PDF"
  },
  {
    title: "PAL 2",
    href: encodeURI("./2.pdf"),
    badge: "PDF"
  },
  {
    title: "Micro Note",
    href: encodeURI("./3.pdf"),
    badge: "PDF"
  },
  {
    title: "PBL case 3",
    href: encodeURI("./4.pdf"),
    badge: "PDF"
  }
];

// A few nice gradients for color boxes
const gradients = [
  "linear-gradient(135deg, #8b5cf6, #ec4899)",
  "linear-gradient(135deg, #06b6d4, #8b5cf6)",
  "linear-gradient(135deg, #22c55e, #0ea5e9)",
  "linear-gradient(135deg, #f59e0b, #ef4444)",
  "linear-gradient(135deg, #a21caf, #4338ca)",
  "linear-gradient(135deg, #ef4444, #f97316)",
  "linear-gradient(135deg, #14b8a6, #06b6d4)"
];

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";

  projects.forEach((p, i) => {
    const a = document.createElement("a");
    a.href = p.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "card";
    a.style.background = gradients[i % gradients.length];

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = p.title;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = p.badge || "Project";

    a.appendChild(title);
    a.appendChild(badge);
    grid.appendChild(a);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
