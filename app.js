// ═══════════════════════════════════════════════════════════════
// WORD. — Daily Vocabulary Drops
// Bold, Dynamic, Exciting
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// PARTICLE SYSTEM
// ═══════════════════════════════════════════════════════════════

class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null };
        this.colors = ['#ff6b35', '#00f5d4', '#ff006e', '#ffffff'];
        
        this.resize();
        this.init();
        this.bindEvents();
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    init() {
        const particleCount = Math.min(80, Math.floor(window.innerWidth / 15));
        for (let i = 0; i < particleCount; i++) {
            this.particles.push(this.createParticle());
        }
    }
    
    createParticle(x, y) {
        return {
            x: x ?? Math.random() * this.canvas.width,
            y: y ?? Math.random() * this.canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            alpha: Math.random() * 0.5 + 0.2,
            pulse: Math.random() * Math.PI * 2
        };
    }
    
    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((p, i) => {
            // Update position
            p.x += p.speedX;
            p.y += p.speedY;
            p.pulse += 0.02;
            
            // Mouse interaction
            if (this.mouse.x && this.mouse.y) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    p.x -= dx * force * 0.02;
                    p.y -= dy * force * 0.02;
                }
            }
            
            // Wrap around screen
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;
            
            // Draw particle with pulsing effect
            const pulseSize = p.size + Math.sin(p.pulse) * 0.5;
            const pulseAlpha = p.alpha + Math.sin(p.pulse) * 0.1;
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = pulseAlpha;
            this.ctx.fill();
            
            // Draw connections
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = p.color;
                    this.ctx.globalAlpha = (100 - dist) / 100 * 0.15;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            });
        });
        
        this.ctx.globalAlpha = 1;
        requestAnimationFrame(() => this.animate());
    }
    
    burst(x, y) {
        for (let i = 0; i < 15; i++) {
            const particle = this.createParticle(x, y);
            particle.speedX = (Math.random() - 0.5) * 4;
            particle.speedY = (Math.random() - 0.5) * 4;
            particle.size = Math.random() * 3 + 1;
            this.particles.push(particle);
            
            // Remove after animation
            setTimeout(() => {
                const idx = this.particles.indexOf(particle);
                if (idx > -1) this.particles.splice(idx, 1);
            }, 2000);
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// WORD FUNCTIONS
// ═══════════════════════════════════════════════════════════════

function getDayIndex() {
    const today = new Date();
    const startDate = new Date('2024-01-01');
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function getWordForDay(dayIndex) {
    const len = wordsDatabase.length;
    const normalizedIndex = ((dayIndex % len) + len) % len;
    return wordsDatabase[normalizedIndex];
}

function displayWord(wordData, dayIndex, animate = false) {
    const card = document.getElementById('wordCard');
    
    if (animate) {
        card.classList.add('transitioning');
        setTimeout(() => {
            updateWordContent(wordData, dayIndex);
            setTimeout(() => {
                card.classList.remove('transitioning');
            }, 250);
        }, 250);
    } else {
        updateWordContent(wordData, dayIndex);
    }
}

function updateWordContent(wordData, dayIndex) {
    const displayNumber = ((dayIndex % wordsDatabase.length) + wordsDatabase.length) % wordsDatabase.length + 1;
    
    document.getElementById('wordNumber').textContent = displayNumber;
    document.getElementById('word').textContent = wordData.word;
    document.getElementById('pronunciation').textContent = wordData.pronunciation;
    document.getElementById('definition').textContent = wordData.definition;
    document.getElementById('example').textContent = `"${wordData.example}"`;
    document.getElementById('etymology').textContent = wordData.etymology;
    document.getElementById('partOfSpeech').textContent = wordData.partOfSpeech;
}

function formatDate(date) {
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options).toUpperCase();
}

function updateDateDisplay(date) {
    document.getElementById('dateDisplay').textContent = formatDate(date);
}

// ═══════════════════════════════════════════════════════════════
// SHARE FUNCTIONALITY
// ═══════════════════════════════════════════════════════════════

function shareWord(wordData) {
    const shareText = `⚡ WORD DROP ⚡

${wordData.word.toUpperCase()}
[${wordData.partOfSpeech}]

${wordData.definition}

"${wordData.example}"

🔮 Origin: ${wordData.etymology}

Level up your vocab → word.daily`;
    
    if (navigator.share) {
        navigator.share({
            title: `Word Drop: ${wordData.word}`,
            text: shareText
        }).catch(err => {
            console.log('Error sharing:', err);
            fallbackShare(shareText);
        });
    } else {
        fallbackShare(shareText);
    }
}

function fallbackShare(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied! Now go share it 🔥');
        }).catch(err => {
            console.log('Error copying:', err);
            prompt('Copy this:', text);
        });
    } else {
        prompt('Copy this:', text);
    }
}

function showNotification(message) {
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: linear-gradient(135deg, #ff6b35, #ff006e);
            color: white;
            padding: 1rem 2rem;
            font-family: 'Anybody', sans-serif;
            font-weight: 700;
            font-size: 0.9rem;
            letter-spacing: 0.05em;
            border-radius: 12px;
            z-index: 10000;
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 10px 40px rgba(255, 107, 53, 0.4);
        `;
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(-50%) translateY(0)';
        notification.style.opacity = '1';
    });
    
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(100px)';
        notification.style.opacity = '0';
    }, 2500);
}

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════

let currentDayIndex = getDayIndex();
let currentDate = new Date();
let particles = null;

function initializeApp() {
    // Initialize particle system
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        particles = new ParticleSystem(canvas);
    }
    
    // Display today's word
    const todayWord = getWordForDay(currentDayIndex);
    displayWord(todayWord, currentDayIndex);
    updateDateDisplay(currentDate);
    
    // Navigation with burst effect
    document.getElementById('prevWordBtn').addEventListener('click', (e) => {
        if (particles) particles.burst(e.clientX, e.clientY);
        currentDayIndex--;
        currentDate.setDate(currentDate.getDate() - 1);
        const word = getWordForDay(currentDayIndex);
        displayWord(word, currentDayIndex, true);
        updateDateDisplay(currentDate);
    });
    
    document.getElementById('nextWordBtn').addEventListener('click', (e) => {
        if (particles) particles.burst(e.clientX, e.clientY);
        currentDayIndex++;
        currentDate.setDate(currentDate.getDate() + 1);
        const word = getWordForDay(currentDayIndex);
        displayWord(word, currentDayIndex, true);
        updateDateDisplay(currentDate);
    });
    
    // Share with burst effect
    document.getElementById('shareBtn').addEventListener('click', (e) => {
        if (particles) particles.burst(e.clientX, e.clientY);
        const currentWord = getWordForDay(currentDayIndex);
        shareWord(currentWord);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            document.getElementById('prevWordBtn').click();
        } else if (e.key === 'ArrowRight') {
            document.getElementById('nextWordBtn').click();
        }
    });
    
    // Add burst effect on card click
    document.getElementById('wordCard').addEventListener('click', (e) => {
        if (particles && e.target.closest('.word-hero')) {
            particles.burst(e.clientX, e.clientY);
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeApp);
