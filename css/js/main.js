function initiateReboot() {
  document.body.style.filter = "brightness(5) invert(1)";
  setTimeout(() => {
    alert("SYSTEM_REBOOT: PURGING RESIDUAL DATA...");
    window.location.href = "index.html";
  }, 500);
}

// Telemetry Simulation
setInterval(() => {
  const grav = document.getElementById('gravVal');
  if (grav) {
    const val = (0.84 + (Math.random() * 0.02 - 0.01)).toFixed(2);
    grav.innerText = val + "G";
  }
}, 2000);

// Log V Special Behavior
if (window.location.pathname.includes("substrate.html")) {
  setTimeout(() => {
    const status = document.getElementById('statusText');
    if (status) {
        status.innerText = "SYSTEM_ABSOLUTE";
        status.style.color = "#00ff00";
    }
  }, 2000);
}
