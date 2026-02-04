/**
 * ALDERSYTH PROTOCOL - METRIC SURVEILLANCE LOGIC
 * Vibe: Brutalist / Cold Machine / Hard Surrealism
 */

const ALDERSYTH = {
    state: {
        heartRate: 148,
        sphereWeight: 3.00,
        syncActive: true
    },

    // 1. Move log database into the object properties
    logMessages: [
        "NEURAL_SYNC_DRIFT: 0.04ms",
        "GRAVITY_FLUX_DETECTED: SECTOR_01",
        "RESI_UNIT_402: GEOMETRIC_LEAK",
        "SIGNAL_DECAY_STABILIZED",
        "BIOLOGIC_NOISE_PURGED",
        "REM_CYCLE_HARVEST: ACTIVE",
        "STRANGER_SIGNATURE_FOUND",
        "SPIRE_INTEGRITY: 88.2%",
        "UPDATING_ANOMALY_DATABASE..."
    ],

    // 2. Add log entry method
    addLogEntry: function() {
        const logScroll = document.getElementById('logScroll');
        if (!logScroll) return;

        const newEntry = document.createElement('div');
        const timestamp = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        const msg = this.logMessages[Math.floor(Math.random() * this.logMessages.length)];
        
        newEntry.innerHTML = `<span style="opacity:0.5">[${timestamp}]</span> > ${msg}`;
        newEntry.style.marginBottom = "4px";
        
        logScroll.prepend(newEntry);

        // Limit the feed to the last 12 entries
        if (logScroll.children.length > 12) {
            logScroll.removeChild(logScroll.lastChild);
        }
    },

    // 3. Telemetry Jitter
    updateTelemetry: function() {
        const bpmElem = document.getElementById('bpm');
        const weightElem = document.getElementById('sphereWeight');
        const gravityBar = document.querySelector('.bar-inner.gold');

        this.state.heartRate += Math.floor(Math.random() * 5) - 2;
        if (bpmElem) {
            bpmElem.innerText = `${this.state.heartRate} BPM`;
            bpmElem.style.textShadow = this.state.heartRate > 155 ? "0 0 10px var(--neon-red)" : "none";
        }

        this.state.sphereWeight = (3.00 + (Math.random() * 0.10 - 0.05)).toFixed(2);
        if (weightElem) weightElem.innerText = `${this.state.sphereWeight}KG`;

        if (gravityBar) {
            const loadWidth = 80 + (Math.random() * 10);
            gravityBar.style.width = `${loadWidth}%`;
        }
    },

    // 4. Glitch Engine
    triggerGlitch: function() {
        const chance = Math.random();
        if (chance > 0.96) {
            const target = document.querySelector('.visual-core');
            if (target) {
                target.style.opacity = "0.5";
                setTimeout(() => target.style.opacity = "1", 60);
            }
        }
    },

    // 5. Reboot Command
    initiateReboot: function() {
        if (confirm("CRITICAL: PROCEED WITH IDENTITY ERASURE?")) {
            document.body.innerHTML = `<div style="color:var(--neon-gold); padding:50px; font-size:1.2rem;">>> PURGING_BIOLOGIC_NOISE...<br>>> SUCCESS.</div>`;
            setTimeout(() => location.reload(), 3000);
        }
    },

    // 6. Initialization
    init: function() {
        console.log("ALDERSYTH // SUBSTRATE_PROTOCOL_ACTIVE");
        
        // Internal loop for logs
        const runLogs = () => {
            this.addLogEntry();
            setTimeout(runLogs, Math.random() * 3000 + 2000);
        };
        runLogs();

        setInterval(() => this.updateTelemetry(), 1500);
        setInterval(() => this.triggerGlitch(), 100);
    }
};

// Start Protocol
window.onload = () => ALDERSYTH.init();
