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

    // --- TELEMETRY JITTER ---
    updateTelemetry: function() {
        const bpmElem = document.getElementById('bpm');
        const weightElem = document.getElementById('sphereWeight');
        const gravityBar = document.querySelector('.bar-inner.gold');

        // 1. Fluctuating Heart Rate (Neural Tether)
        this.state.heartRate += Math.floor(Math.random() * 5) - 2;
        if (bpmElem) {
            bpmElem.innerText = `${this.state.heartRate} BPM`;
            // Visual feedback for high stress
            bpmElem.style.textShadow = this.state.heartRate > 155 ? "0 0 10px var(--neon-red)" : "none";
        }

        // 2. Lead Sphere Weight Decay (Simulating Buoyancy)
        this.state.sphereWeight = (3.00 + (Math.random() * 0.10 - 0.05)).toFixed(2);
        if (weightElem) weightElem.innerText = `${this.state.sphereWeight}KG`;

        // 3. Dynamic Progress Bar (Structural Load)
        if (gravityBar) {
            const loadWidth = 80 + (Math.random() * 10);
            gravityBar.style.width = `${loadWidth}%`;
        }
    },

    // --- ENHANCED GLITCH ENGINE ---
    // Targets specific headers and frames for more "digital decay"
    triggerGlitch: function() {
        const chance = Math.random();
        
        // Minor Flicker (Frequent)
        if (chance > 0.95) {
            const target = document.querySelector('.hero-frame');
            if (target) {
                target.style.opacity = "0.4";
                setTimeout(() => target.style.opacity = "0.6", 50);
            }
        }

        // Critical Reality Shift (Rare)
        if (chance > 0.99) {
            document.body.classList.add('reality-shift');
            console.warn("ALDERSYTH: LOGIC_COLLAPSE_IMMINENT");
            setTimeout(() => document.body.classList.remove('reality-shift'), 150);
        }
    },

    // --- TABLE DATA SCANNER ---
    scanTable: function() {
        const rows = document.querySelectorAll('table tr:not(:first-child)');
        rows.forEach(row => row.style.borderLeft = "none");
        
        const randomRow = rows[Math.floor(Math.random() * rows.length)];
        if (randomRow) {
            randomRow.style.borderLeft = "3px solid var(--neon-cyan)";
            randomRow.style.transition = "border 0.2s ease";
        }
    },

    // --- CORE COMMANDS ---
    initiateReboot: function() {
        const confirmPowerDown = confirm("CRITICAL: PROCEED WITH IDENTITY ERASURE?");
        if (confirmPowerDown) {
            // "Typewriter" deletion effect
            const main = document.body;
            main.style.pointerEvents = "none";
            main.innerHTML = `<div id="terminal-out" style="color:var(--neon-cyan); padding:50px; font-size:1.2rem;"></div>`;
            
            let i = 0;
            const msg = ">> BIOLOGIC_NOISE_PURGED... \n>> MEMORY_FLUSHED... \n>> SYSTEM_IDLE.";
            const speed = 50;

            function typeWriter() {
                if (i < msg.length) {
                    document.getElementById("terminal-out").innerHTML += msg.charAt(i) === '\n' ? '<br>' : msg.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    setTimeout(() => window.location.reload(), 2000);
                }
            }
            typeWriter();
        }
    },

    // --- BOOT SEQUENCE ---
    init: function() {
        console.log("ALDERSYTH // SUBSTRATE_PROTOCOL_ACTIVE");
        
        // Set intervals
        setInterval(() => this.updateTelemetry(), 1500);
        setInterval(() => this.triggerGlitch(), 100);
        setInterval(() => this.scanTable(), 4000);

        // Add a click listener for the alert banner to "dismiss" logic errors
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
