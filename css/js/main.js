/**
 * ALDERSYTH PROTOCOL - METRIC SURVEILLANCE LOGIC
 */

const ALDERSYTH = {
    state: {
        heartRate: 148,
        syncRate: 92.41,
        active: true
    },

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

    // Update Telemetry & Sync
    updateTelemetry: function() {
        const bpmElem = document.getElementById('bpm');
        const syncElem = document.getElementById('syncVal');

        // 1. Heart Rate Jitter
        this.state.heartRate += Math.floor(Math.random() * 5) - 2;
        if (bpmElem) {
            bpmElem.innerText = `${this.state.heartRate} BPM`;
            // Visual alert if heart rate spikes
            bpmElem.style.color = this.state.heartRate > 155 ? "var(--neon-red)" : "var(--neon-gold)";
        }

        // 2. Sync Rate slow climb
        if (syncElem && this.state.syncRate < 99.9) {
            this.state.syncRate += 0.01;
            syncElem.innerText = `${this.state.syncRate.toFixed(2)}%`;
        }
    },

    // Handle Log Scrolling
    addLogEntry: function() {
        const logScroll = document.getElementById('logScroll');
        if (!logScroll) return;

        const newEntry = document.createElement('div');
        const timestamp = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const msg = this.logMessages[Math.floor(Math.random() * this.logMessages.length)];
        
        newEntry.innerHTML = `<span style="opacity:0.5">[${timestamp}]</span> > ${msg}`;
        newEntry.style.marginBottom = "4px";
        
        logScroll.prepend(newEntry);

        // Prevent memory bloat / keep feed clean
        if (logScroll.children.length > 15) {
            logScroll.removeChild(logScroll.lastChild);
        }
    },

    // Visual Glitch Trigger
    triggerGlitch: function() {
        if (Math.random() > 0.98) {
            document.body.classList.add('chromatic-break');
            setTimeout(() => document.body.classList.remove('chromatic-break'), 60);
        }
    },

    initiateReboot: function() {
        if (confirm("CRITICAL: PROCEED WITH IDENTITY ERASURE?")) {
            document.body.innerHTML = `
                <div style="color:var(--neon-gold); padding:50px; font-family:monospace; font-size:1.2rem;">
                    >> PURGING_BIOLOGIC_NOISE...<br>
                    >> MEMORY_FLUSHED.<br>
                    >> SYSTEM_IDLE.
                </div>`;
            setTimeout(() => location.reload(), 3000);
        }
    },

    init: function() {
        console.log("ALDERSYTH // SUBSTRATE_PROTOCOL_ACTIVE");
        
        // Start independent loops
        setInterval(() => this.updateTelemetry(), 1500);
        setInterval(() => this.triggerGlitch(), 100);

        // Recursive log loop for varied timing
        const runLogs = () => {
            this.addLogEntry();
            setTimeout(runLogs, Math.random() * 3000 + 2000);
        };
        runLogs();
    }
};

window.onload = () => ALDERSYTH.init();
