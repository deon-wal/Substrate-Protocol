function initiateReboot() {
  // Visual glitch effect
  document.body.style.transition = "all 0.1s ease";
  document.body.style.filter = "brightness(5) invert(1)";
  
  setTimeout(() => {
    alert("SYSTEM_REBOOT: PURGING RESIDUAL DATA...");
    // Redirect to home
    window.location.href = "index.html";
  }, 500);
}

// Telemetry Simulation
setInterval(() => {
  const grav = document.getElementById('gravVal');
  if (grav) {
    // Generates a fluctuating gravity value around 0.84G
    const val = (0.84 + (Math.random() * 0.02 - 0.01)).toFixed(2);
    grav.innerText = val + "G";
  }
}, 2000);

// Log V Special Behavior
// Triggers specifically for the Substrate page
if (window.location.pathname.includes("substrate.html")) {
  setTimeout(() => {
    const status = document.getElementById('statusText');
    if (status) {
        status.innerText = "SYSTEM_ABSOLUTE";
        status.style.color = "#00ff00"; // Neon Green update
    }
  }, 2000);
}

// Function for the STORY_ARCHIVE button scroll
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
