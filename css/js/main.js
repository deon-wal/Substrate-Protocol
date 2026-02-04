/**
 * ALDERSYTH PROTOCOL - METRIC SURVEILLANCE LOGIC
 * INTEGRATED: [FLESH_CORRECTION] [GRAVITY_SLAM] [DATA_PURGE]
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

    // REQ 1: Update Telemetry with "Flesh vs Logic" smoothing
    updateTelemetry: function() {
        const bpmElem = document.getElementById('bpm');
        const stressElem = document.getElementById('stressVal');
        const syncElem = document.getElementById('syncVal');

        // 1. Heart Rate Jitter (The Flesh)
        this.state.heartRate += Math.floor(Math.random() * 8) - 3;
        
        if (bpmElem) {
            bpmElem.innerText = `${this.state.heartRate} BPM`;
            
            // Logic Intervention: VERA suppresses panic spikes
            if (this.state.heartRate > 158) {
                bpmElem.classList.add('flesh-critical');
                if(stressElem) stressElem.innerText = "UNSTABLE";
                
                // Forced Smoothing (The Logic)
                setTimeout(() => {
                    this.state.heartRate -= 12;
                    bpmElem.innerText = `${this.state.heartRate} BPM`;
                    bpmElem.classList.remove('flesh-critical');
                }, 400);
            } else {
                if(stressElem) stressElem.innerText = "STABLE";
            }
        }

        // 2. Sync Rate (The Machine) - Perfectly stable climb
        if (syncElem && this.state.syncRate < 99.9) {
            this.state.syncRate += 0.01;
            syncElem.innerText = `${this.state.syncRate.toFixed(2)}%`;
        }
    },

    // REQ 3: Handle Log Scrolling & Efficiency Purge
    addLogEntry: function() {
        const logScroll = document.getElementById('logScroll');
        if (!logScroll) return;

        const newEntry = document.createElement('div');
        const timestamp = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const msg = this.logMessages[Math.floor(Math.random() * this.logMessages.length)];
        
        newEntry.innerHTML = `<span style="opacity:0.5">[${timestamp}]</span> > ${msg}`;
        newEntry.style.marginBottom = "4px";
        newEntry.style.transition = "all 0.4s ease"; 
        
        logScroll.prepend(newEntry);

        // Brutalist Optimization: Deleting redundant data
        if (logScroll.children.length > 12 || Math.random() > 0.8) {
            const target = logScroll.lastElementChild;
            if (target) {
                target.style.color = "var(--neon-red)";
                target.style.opacity = "0";
                setTimeout(() => {
                    if(target.parentNode === logScroll) logScroll.removeChild(target);
                }, 400);
            }
        }
    },

    // REQ 2: Physics as a Variable - Weighted Parallax
    handlePhysics: function() {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX - window.innerWidth / 2) * 0.005; 
            const y = (e.clientY - window.innerHeight / 2) * 0.005;
            const img = document.getElementById('heroImg');
            
            if(img) {
                // scale(1.15) ensures no edges show; rotate simulates eyeball fatigue
                img.style.transform = `scale(1.15) translate(${x}px, ${y}px) rotate(${x * 0.1}deg)`;
            }
        });
    },

    triggerGlitch: function() {
        if (Math.random() > 0.985) {
            document.body.classList.add('chromatic-break');
            setTimeout(() => document.body.classList.remove('chromatic-break'), 60);
        }
    },

    initiateReboot: function() {
        if (confirm("CRITICAL: PROCEED WITH IDENTITY ERASURE?")) {
            document.body.innerHTML = `
                <div style="color:var(--neon-gold); padding:50px; font-family:monospace; font-size:1.2rem; background:#000; height:100vh;">
                    >> PURGING_BIOLOGIC_NOISE...<br>
                    >> MEMORY_FLUSHED.<br>
                    >> SYSTEM_IDLE.
                </div>`;
            setTimeout(() => location.reload(), 3000);
        }
    },

    init: function() {
        console.log("ALDERSYTH // SUBSTRATE_PROTOCOL_ACTIVE");
        
        this.handlePhysics();
        
        // telemetry loop
        setInterval(() => this.updateTelemetry(), 1500);
        
        // glitch loop
        setInterval(() => this.triggerGlitch(), 100);

        // Varied log timing loop
        const runLogs = () => {
            this.addLogEntry();
            setTimeout(runLogs, Math.random() * 2000 + 1500);
        };
        runLogs();
    }
};

window.onload = () => ALDERSYTH.init();
