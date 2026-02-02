// ---------- Anomalies ----------
const anomaliesData = [
  { time: "2026.01.30_20:34", sector: "Spire-09", type: "Vector Crisis", deviation: "12.4%", status: "CRITICAL" },
  { time: "2026.01.30_19:15", sector: "Market-02", type: "Thermal Spike", deviation: "8.2%", status: "STABLE" },
  { time: "2026.01.30_18:45", sector: "Res-Ring-4", type: "Acoustic Void", deviation: "22.1%", status: "UNSTABLE" },
  { time: "2026.01.30_17:22", sector: "Observatory", type: "Grav. Shear", deviation: "4.5%", status: "STABLE" },
];

const anomalyContainer = document.querySelector(".anomaly-cards");
anomaliesData.forEach(a => {
  const div = document.createElement("div");
  div.className = `anomaly-card anomaly-${a.status.toLowerCase()}`;
  div.innerHTML = `<h4>${a.type}</h4><p>${a.sector}</p><p>${a.time}</p><p>${a.deviation}</p><p>Status: ${a.status}</p>`;
  anomalyContainer.appendChild(div);
});

// ---------- Story Logs ----------
const logs = [
  { title:"Log I: Spire District", excerpt:"Structural marvels pulse...", content:"Full story I content...", image:"images/phantom-lead-sphere.jpg" },
  { title:"Log II: Market District", excerpt:"The vibration starts in my molars...", content:"Full story II content...", image:"images/frozen-citizens-market.jpg" },
  { title:"Log III: Residential Rings", excerpt:"Gravity pulses...", content:"Full story III content...", image:"images/hud-overlays-residential.jpg" },
];

const logsContainer = document.getElementById("logsContainer");
logs.forEach(log => {
  const div = document.createElement("div");
  div.className="logCard";
  div.innerHTML=`<img src="${log.image}" alt="${log.title}" style="width:100%; margin-bottom:0.5rem;"><h3>${log.title}</h3><p>${log.excerpt}</p>`;
  div.addEventListener("click",()=>openModal(log));
  logsContainer.appendChild(div);
});

// ---------- Modal ----------
const modal = document.getElementById("logModal");
const modalTitle = document.getElementById("modalTitle");
const modalExcerpt = document.getElementById("modalExcerpt");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".closeBtn");

function openModal(log){
  modalTitle.textContent=log.title;
  modalExcerpt.textContent=log.excerpt;
  modalContent.textContent=log.content;
  modalImage.src=log.image;
  modal.style.display="flex";
}
closeBtn.onclick=()=>modal.style.display="none";
window.onclick=e=>{if(e.target==modal) modal.style.display="none";};

// ---------- Scroll ----------
document.querySelectorAll("#scrollAnomaliesBtn,#scrollAnomaliesBtn2").forEach(btn=>{
  btn.addEventListener("click",()=>document.getElementById("anomalies").scrollIntoView({behavior:"smooth"}));
});
document.querySelectorAll("#scrollStoryBtn,#scrollStoryBtn2").forEach(btn=>{
  btn.addEventListener("click",()=>document.getElementById("storyLogs").scrollIntoView({behavior:"smooth"}));
});
