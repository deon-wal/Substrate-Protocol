/**
 * ALDERSYTH PROTOCOL - METRIC SURVEILLANCE LOGIC
 * Vibe: Brutalist / Cold Machine / Hard Surrealism
 */

// --- TELEMETRY JITTER ---
// Simulates real-time structural analysis by fluctuating data values
function updateTelemetry() {
    const grav = document.getElementById('gravVal');
    const stress = document.querySelector('.sidebar-left .stat:first-child .val');
    
    if (grav) {
        // Gravity fluctuates slightly around 0.84G
        const newGrav = (0.84 + (Math.random() * 0.04 - 0.02)).toFixed(2);
        grav.innerText = newGrav + "G";
    }

    if (stress && Math.random() > 0.8) {
        // Randomly flip between CRITICAL and OPTIMIZED
        stress.style.color = Math.random() > 0.5 ? "var(--neon-red)" : "var(--neon-gold)";
        stress.innerText = Math.random() > 0.5 ? "STABLE" : "CRITICAL";
    }
}

// --- SYSTEM GLITCH EFFECT ---
// Randomly applies a brief visual distortion to the body
function triggerGlitch() {
    if (Math.random() > 0.98) {
        document.body.style.filter = "invert(1) contrast(200%)";
        setTimeout(() => {
            document.body.style.filter = "none";
        }, 40);
    }
}

// --- TABLE ROW SCANNER ---
// Highlights a random row in the Megastructure Analysis table
function scanTable() {
    const rows = document.querySelectorAll('#anomaliesTable tbody tr');
    rows.forEach(row => row.style.backgroundColor = "transparent");
    
    const randomRow = rows[Math.floor(Math.random() * rows.length)];
    if (randomRow) {
        randomRow.style.backgroundColor = "rgba(255, 176, 0, 0.1)";
    }
}

// --- CORE FUNCTIONS ---
function initiateReboot() {
    const confirmPowerDown = confirm("CRITICAL: PROCEED WITH IDENTITY ERASURE?");
    if (confirmPowerDown) {
        document.body.innerHTML = "<div style='color:white; font-family:monospace; padding:20px;'>>> BIOLOGIC_NOISE_PURGED...<br>>> SYSTEM_IDLE.</div>";
        setTimeout(() => window.location.reload(), 3000);
    }
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// --- INITIALIZATION ---
setInterval(updateTelemetry, 1200);
setInterval(triggerGlitch, 100);
setInterval(scanTable, 3000);

console.log("ALDERSYTH // SUBSTRATE_PROTOCOL_ACTIVE");
