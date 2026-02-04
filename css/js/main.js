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

    // 1. Move messages inside the object for better organization
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

    // 2. Turn standalone functions into Object Methods
    addLogEntry: function() {
        const logScroll = document.getElementById('logScroll');
        if (!logScroll) return; // Safety check

        const newEntry = document.createElement('div');
        const timestamp = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        const msg = this.logMessages[Math.floor(Math.random() * this.logMessages.length)];
        
        newEntry.innerHTML = `<span style="opacity:0.5">[${timestamp}]</span> > ${msg}`;
        newEntry.style.marginBottom = "4px";
        
        logScroll.prepend(newEntry);

        if (logScroll.children.length > 15) {
            logScroll.removeChild(logScroll.lastChild);
        }
    },

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

    triggerGlitch: function() {
        const chance = Math.random();
        if (chance > 0.95) {
            const target = document.querySelector('.hero-frame');
            if (target) {
                target.style.opacity = "0.4";
                setTimeout(() => target.style.opacity = "0.6", 50);
            }
        }
        if (chance > 0.99) {
            document.body.classList.add('reality-shift');
            console.warn("ALDERSYTH: LOGIC_COLLAPSE_IMMINENT");
            setTimeout(() => document.body.classList.remove('reality-shift'), 150);
        }
    },

    scanTable: function() {
        const rows = document.querySelectorAll('table tr:not(:first-child)');
        rows.forEach(row => row.style.borderLeft = "none");
        
        const randomRow = rows[Math.floor(Math.random() * rows.length)];
        if (randomRow) {
            randomRow.style.borderLeft = "3px solid var(--neon-cyan)";
            randomRow.style.transition = "border 0.2s ease";
        }
    },

    initiateReboot: function() {
        if (confirm("CRITICAL: PROCEED WITH IDENTITY ERASURE?")) {
            const main = document.body;
            main.style.pointerEvents = "none";
            main.innerHTML = `<div id="terminal-out" style="color:var(--neon-cyan); padding:50px; font-size:1.2rem;"></div>`;
            
            let i = 0;
            const msg = ">> BIOLOGIC_NOISE_PURGED... \n>> MEMORY_FLUSHED... \n>> SYSTEM_IDLE.";
            const speed = 50;

            const typeWriter = () => {
                if (i < msg.length) {
                    document.getElementById("terminal-out").innerHTML += msg.charAt(i) === '\n' ? '<br>' : msg.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    setTimeout(() => window.location.reload(), 2000);
                }
            };
            typeWriter();
        }
    },

    init: function() {
        console.log("ALDERSYTH // SUBSTRATE_PROTOCOL_ACTIVE");
        
        // Start the Log Loop
        const logLoop = () => {
            let rand = Math.round(Math.random() * 4000) + 3000;
            setTimeout(() => {
                this.addLogEntry();
                logLoop();
            }, rand);
        };
        logLoop();

        setInterval(() => this.updateTelemetry(), 1500);
        setInterval(() => this.triggerGlitch(), 100);
        setInterval(() => this.scanTable(), 4000);

        const banner = document.querySelector('.alert-banner');
        if (banner) {
            banner.addEventListener('click', () => {
                banner.innerText = ">> ERR_OVERRIDE_ACTIVE // SYSTEM_STABLE";
                banner.style.backgroundColor = "var(--neon-gold)";
            });
        }
    }
};

// Start Protocol
window.onload = () => ALDERSYTH.init();
