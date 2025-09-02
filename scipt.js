// Project list — update titles/links as you like.
// Local PDFs: either keep these filenames in the same folder as index.html
// or rename and update the href accordingly.
const projects = [
  {
    title: "Mission Brain KSA",
    href: "https://www.instagram.com/missionbrainksa?igsh=cjZmYmQ1MDM0aWlv",
    badge: "Instagram"
  },
  {
    title: "December Fall 24 Yearbook",
    href: "https://www.canva.com/design/DAGXk6CIJog/ieGvCqNnruBFhSE6bkg7wA/edit?utm_content=DAGXk6CIJog&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    badge: "Canva"
  },
  // PBL Cases
  {
    title: "PBL Case 1",
    href: "https://www.canva.com/design/DAGWRoXegDY/D9lbfHAgXzzCWtFry-VRHw/edit?utm_content=DAGWRoXegDY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    badge: "Canva"
  },
  {
    title: "PBL Case 2",
    href: encodeURI("./1.pdf"),
    badge: "PDF"
  },
  {
    title: "PBL Case 3",
    href: encodeURI("./4.pdf"),
    badge: "PDF"
  },
  {
    title: "PBL Case 4",
    href: "https://www.canva.com/design/DAGx2M432Mg/Sonbdon8yuMRxar4_8oalw/edit",
    badge: "Canva"
  },
  // PAL Cases
  {
    title: "PAL 1",
    href: "https://drive.google.com/file/d/1r2vG1D0UF0JDmqXQORkIyShZS6wYYu54/view",
    badge: "Google Drive"
  },
  {
    title: "PAL 2",
    href: encodeURI("./2.pdf"),
    badge: "PDF"
  },
  // Other Projects
  {
    title: "Micro Note",
    href: encodeURI("./3.pdf"),
    badge: "PDF"
  }
];

// Flowing gradients for all projects
const gradients = [
  "linear-gradient(45deg, #f97316, #ea580c, #f59e0b, #f97316)", // Orange flow for Mission Brain KSA
  "linear-gradient(45deg, #3b82f6, #1d4ed8, #2563eb, #3b82f6)", // Blue flow for December Yearbook
  "linear-gradient(45deg, #8b5cf6, #ec4899, #a855f7, #8b5cf6)", // Purple flow
  "linear-gradient(45deg, #8b5cf6, #ec4899, #a855f7, #8b5cf6)", // Purple flow
  "linear-gradient(45deg, #8b5cf6, #ec4899, #a855f7, #8b5cf6)", // Purple flow
  "linear-gradient(45deg, #8b5cf6, #ec4899, #a855f7, #8b5cf6)", // Purple flow
  "linear-gradient(45deg, #ef4444, #dc2626, #f87171, #ef4444)", // Red flow for PAL 1
  "linear-gradient(45deg, #ef4444, #dc2626, #f87171, #ef4444)", // Red flow for PAL 2
  "linear-gradient(45deg, #22c55e, #16a34a, #4ade80, #22c55e)"  // Green flow for Micro Note
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
