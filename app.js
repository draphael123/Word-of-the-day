// ═══════════════════════════════════════════════════════════════
// WORD. — Daily Vocabulary Drops
// Full Featured Version
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
        if (document.body.classList.contains('reduce-motion')) {
            return;
        }
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.pulse += 0.02;
            
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
            
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;
            
            const pulseSize = p.size + Math.sin(p.pulse) * 0.5;
            const pulseAlpha = p.alpha + Math.sin(p.pulse) * 0.1;
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = pulseAlpha;
            this.ctx.fill();
            
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
            
            setTimeout(() => {
                const idx = this.particles.indexOf(particle);
                if (idx > -1) this.particles.splice(idx, 1);
            }, 2000);
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// STORAGE MANAGER
// ═══════════════════════════════════════════════════════════════

const Storage = {
    get(key, defaultValue = null) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : defaultValue;
        } catch {
            return defaultValue;
        }
    },
    
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Storage error:', e);
        }
    }
};

// ═══════════════════════════════════════════════════════════════
// STREAK SYSTEM
// ═══════════════════════════════════════════════════════════════

const StreakManager = {
    getStreak() {
        const data = Storage.get('streak', { count: 0, lastVisit: null });
        return data;
    },
    
    updateStreak() {
        const data = this.getStreak();
        const today = new Date().toDateString();
        const lastVisit = data.lastVisit;
        
        if (lastVisit === today) {
            // Already visited today
            return data.count;
        }
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastVisit === yesterday.toDateString()) {
            // Consecutive day
            data.count++;
        } else if (lastVisit !== today) {
            // Streak broken
            data.count = 1;
        }
        
        data.lastVisit = today;
        Storage.set('streak', data);
        return data.count;
    },
    
    displayStreak() {
        const count = this.updateStreak();
        document.getElementById('streakCount').textContent = count;
        
        // Add animation if streak increased
        const streakDisplay = document.getElementById('streakDisplay');
        streakDisplay.style.animation = 'none';
        streakDisplay.offsetHeight; // Trigger reflow
        streakDisplay.style.animation = 'badgePop 0.5s ease';
    }
};

// ═══════════════════════════════════════════════════════════════
// FAVORITES SYSTEM
// ═══════════════════════════════════════════════════════════════

const FavoritesManager = {
    getFavorites() {
        return Storage.get('favorites', []);
    },
    
    isFavorite(word) {
        return this.getFavorites().includes(word);
    },
    
    toggle(word) {
        const favorites = this.getFavorites();
        const index = favorites.indexOf(word);
        
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(word);
        }
        
        Storage.set('favorites', favorites);
        this.updateButton(word);
        return index === -1; // Return true if added
    },
    
    updateButton(word) {
        const btn = document.getElementById('favoriteBtn');
        if (this.isFavorite(word)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    },
    
    renderList() {
        const favorites = this.getFavorites();
        const container = document.getElementById('favoritesList');
        
        if (favorites.length === 0) {
            container.innerHTML = '<div class="favorites-empty">No favorites yet!<br>Click the ♡ on words you love.</div>';
            return;
        }
        
        container.innerHTML = favorites.map(word => {
            const wordData = wordsDatabase.find(w => w.word === word);
            if (!wordData) return '';
            return `
                <div class="favorite-item" data-word="${word}">
                    <div>
                        <span class="favorite-word">${word}</span>
                        <span class="favorite-pos">${wordData.partOfSpeech}</span>
                    </div>
                    <button class="btn-remove-favorite" data-word="${word}">✕</button>
                </div>
            `;
        }).join('');
        
        // Add click handlers
        container.querySelectorAll('.favorite-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('btn-remove-favorite')) {
                    const word = e.target.dataset.word;
                    this.toggle(word);
                    this.renderList();
                } else {
                    const word = item.dataset.word;
                    const index = wordsDatabase.findIndex(w => w.word === word);
                    if (index > -1) {
                        currentDayIndex = index;
                        displayWord(wordsDatabase[index], index, true);
                        this.updateButton(word);
                        closePanels();
                    }
                }
            });
        });
    }
};

// ═══════════════════════════════════════════════════════════════
// FILTER SYSTEM
// ═══════════════════════════════════════════════════════════════

let currentFilter = 'all';
let filteredWords = [...wordsDatabase];

const FilterManager = {
    setFilter(filter) {
        currentFilter = filter;
        
        // Update UI
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.classList.toggle('active', chip.dataset.filter === filter);
        });
        
        // Filter words
        if (filter === 'all') {
            filteredWords = [...wordsDatabase];
        } else {
            filteredWords = wordsDatabase.filter(w => 
                w.partOfSpeech.toLowerCase() === filter.toLowerCase()
            );
        }
        
        // Update stats
        document.getElementById('filterStats').textContent = 
            `Showing ${filteredWords.length} ${filter === 'all' ? '' : filter + ' '}words`;
        
        // Navigate to first word in filtered list
        if (filteredWords.length > 0) {
            const firstWord = filteredWords[0];
            const index = wordsDatabase.indexOf(firstWord);
            currentDayIndex = index;
            displayWord(firstWord, index, true);
        }
    }
};

// ═══════════════════════════════════════════════════════════════
// QUIZ SYSTEM
// ═══════════════════════════════════════════════════════════════

const QuizManager = {
    currentWord: null,
    score: 0,
    total: 0,
    
    start() {
        this.score = 0;
        this.total = 0;
        this.updateScore();
        this.nextQuestion();
        
        document.getElementById('wordCard').style.display = 'none';
        document.getElementById('quizCard').style.display = 'block';
        document.querySelector('.actions').style.display = 'none';
    },
    
    end() {
        document.getElementById('quizCard').style.display = 'none';
        document.getElementById('wordCard').style.display = 'block';
        document.querySelector('.actions').style.display = 'flex';
    },
    
    nextQuestion() {
        // Get random word
        const randomIndex = Math.floor(Math.random() * wordsDatabase.length);
        this.currentWord = wordsDatabase[randomIndex];
        
        // Get 3 wrong options
        const wrongOptions = wordsDatabase
            .filter(w => w.word !== this.currentWord.word)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        
        // Combine and shuffle
        const options = [...wrongOptions, this.currentWord]
            .sort(() => Math.random() - 0.5);
        
        // Update UI
        document.getElementById('quizDefinition').textContent = this.currentWord.definition;
        document.getElementById('quizFeedback').textContent = '';
        document.getElementById('quizFeedback').className = 'quiz-feedback';
        document.getElementById('nextQuizBtn').style.display = 'none';
        
        const optionsContainer = document.getElementById('quizOptions');
        optionsContainer.innerHTML = options.map(opt => `
            <button class="quiz-option" data-word="${opt.word}">
                ${opt.word}
            </button>
        `).join('');
        
        // Add click handlers
        optionsContainer.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => this.checkAnswer(btn.dataset.word));
        });
    },
    
    checkAnswer(selectedWord) {
        this.total++;
        const isCorrect = selectedWord === this.currentWord.word;
        
        if (isCorrect) {
            this.score++;
            document.getElementById('quizFeedback').textContent = '🎉 Correct!';
            document.getElementById('quizFeedback').className = 'quiz-feedback correct';
        } else {
            document.getElementById('quizFeedback').textContent = `❌ It was "${this.currentWord.word}"`;
            document.getElementById('quizFeedback').className = 'quiz-feedback incorrect';
        }
        
        // Highlight correct/incorrect
        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.word === this.currentWord.word) {
                btn.classList.add('correct');
            } else if (btn.dataset.word === selectedWord && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        this.updateScore();
        document.getElementById('nextQuizBtn').style.display = 'flex';
    },
    
    updateScore() {
        document.getElementById('quizScore').textContent = this.score;
        document.getElementById('quizTotal').textContent = this.total;
    }
};

// ═══════════════════════════════════════════════════════════════
// SPEECH SYNTHESIS
// ═══════════════════════════════════════════════════════════════

function speakWord(wordData) {
    if (!('speechSynthesis' in window)) {
        showNotification('Speech not supported 😕');
        return;
    }
    
    window.speechSynthesis.cancel();
    
    const speakBtn = document.getElementById('speakBtn');
    const utterance = new SpeechSynthesisUtterance(wordData.word);
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => 
        voice.lang.startsWith('en') && voice.name.includes('Google')
    ) || voices.find(voice => 
        voice.lang.startsWith('en-US')
    ) || voices.find(voice => 
        voice.lang.startsWith('en')
    );
    
    if (englishVoice) {
        utterance.voice = englishVoice;
    }
    
    utterance.onstart = () => speakBtn.classList.add('speaking');
    utterance.onend = () => speakBtn.classList.remove('speaking');
    utterance.onerror = () => {
        speakBtn.classList.remove('speaking');
        showNotification('Could not pronounce word 😕');
    };
    
    window.speechSynthesis.speak(utterance);
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
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

🔮 Origin: ${wordData.etymology}`;
    
    if (navigator.share) {
        navigator.share({
            title: `Word Drop: ${wordData.word}`,
            text: shareText
        }).catch(() => fallbackShare(shareText));
    } else {
        fallbackShare(shareText);
    }
}

function fallbackShare(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard! 📋');
        }).catch(() => prompt('Copy this:', text));
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
    
    if (animate && !document.body.classList.contains('reduce-motion')) {
        card.classList.add('transitioning');
        setTimeout(() => {
            updateWordContent(wordData, dayIndex);
            setTimeout(() => card.classList.remove('transitioning'), 250);
        }, 250);
    } else {
        updateWordContent(wordData, dayIndex);
    }
}

function updateWordContent(wordData, dayIndex) {
    const displayNumber = wordsDatabase.indexOf(wordData) + 1;
    
    document.getElementById('wordNumber').textContent = displayNumber;
    document.getElementById('word').textContent = wordData.word;
    document.getElementById('pronunciation').textContent = wordData.pronunciation;
    document.getElementById('definition').textContent = wordData.definition;
    document.getElementById('example').textContent = `"${wordData.example}"`;
    document.getElementById('etymology').textContent = wordData.etymology;
    document.getElementById('partOfSpeech').textContent = wordData.partOfSpeech;
    
    FavoritesManager.updateButton(wordData.word);
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

function goToRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordsDatabase.length);
    currentDayIndex = randomIndex;
    displayWord(wordsDatabase[randomIndex], randomIndex, true);
}

// ═══════════════════════════════════════════════════════════════
// PANEL MANAGEMENT
// ═══════════════════════════════════════════════════════════════

function closePanels() {
    document.getElementById('favoritesPanel').style.display = 'none';
    document.getElementById('filterPanel').style.display = 'none';
    document.getElementById('wordCard').style.display = 'block';
}

function closeModal() {
    document.getElementById('helpModal').style.display = 'none';
}

// ═══════════════════════════════════════════════════════════════
// REDUCED MOTION
// ═══════════════════════════════════════════════════════════════

function initReducedMotion() {
    const toggle = document.getElementById('reduceMotionToggle');
    const isReduced = Storage.get('reduceMotion', false);
    
    toggle.checked = isReduced;
    if (isReduced) {
        document.body.classList.add('reduce-motion');
    }
    
    toggle.addEventListener('change', () => {
        document.body.classList.toggle('reduce-motion', toggle.checked);
        Storage.set('reduceMotion', toggle.checked);
    });
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
    if (canvas && !Storage.get('reduceMotion', false)) {
        particles = new ParticleSystem(canvas);
    }
    
    // Initialize streak
    StreakManager.displayStreak();
    
    // Initialize reduced motion
    initReducedMotion();
    
    // Display today's word
    const todayWord = getWordForDay(currentDayIndex);
    displayWord(todayWord, currentDayIndex);
    updateDateDisplay(currentDate);
    
    // Navigation buttons
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
    
    // Random button
    document.getElementById('randomBtn').addEventListener('click', (e) => {
        if (particles) particles.burst(e.clientX, e.clientY);
        goToRandomWord();
    });
    
    // Share button
    document.getElementById('shareBtn').addEventListener('click', (e) => {
        if (particles) particles.burst(e.clientX, e.clientY);
        const currentWord = getWordForDay(currentDayIndex);
        shareWord(currentWord);
    });
    
    // Speak button
    document.getElementById('speakBtn').addEventListener('click', (e) => {
        if (particles) particles.burst(e.clientX, e.clientY);
        const currentWord = getWordForDay(currentDayIndex);
        speakWord(currentWord);
    });
    
    // Favorite button
    document.getElementById('favoriteBtn').addEventListener('click', (e) => {
        if (particles) particles.burst(e.clientX, e.clientY);
        const currentWord = getWordForDay(currentDayIndex);
        const added = FavoritesManager.toggle(currentWord.word);
        showNotification(added ? 'Added to favorites ❤️' : 'Removed from favorites');
    });
    
    // Top bar buttons
    document.getElementById('favoritesBtn').addEventListener('click', () => {
        closePanels();
        FavoritesManager.renderList();
        document.getElementById('favoritesPanel').style.display = 'block';
        document.getElementById('wordCard').style.display = 'none';
    });
    
    document.getElementById('filterBtn').addEventListener('click', () => {
        closePanels();
        document.getElementById('filterPanel').style.display = 'block';
        document.getElementById('wordCard').style.display = 'none';
    });
    
    document.getElementById('quizBtn').addEventListener('click', () => {
        closePanels();
        QuizManager.start();
    });
    
    document.getElementById('helpBtn').addEventListener('click', () => {
        document.getElementById('helpModal').style.display = 'flex';
    });
    
    // Close buttons
    document.getElementById('closeFavoritesBtn').addEventListener('click', closePanels);
    document.getElementById('closeFilterBtn').addEventListener('click', closePanels);
    document.getElementById('closeQuizBtn').addEventListener('click', () => QuizManager.end());
    document.getElementById('closeHelpBtn').addEventListener('click', closeModal);
    document.getElementById('nextQuizBtn').addEventListener('click', () => QuizManager.nextQuestion());
    
    // Close modal on background click
    document.getElementById('helpModal').addEventListener('click', (e) => {
        if (e.target.id === 'helpModal') closeModal();
    });
    
    // Filter chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            FilterManager.setFilter(chip.dataset.filter);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Don't trigger if typing in an input
        if (e.target.tagName === 'INPUT') return;
        
        const quizActive = document.getElementById('quizCard').style.display !== 'none';
        
        switch(e.key) {
            case 'ArrowLeft':
                if (!quizActive) document.getElementById('prevWordBtn').click();
                break;
            case 'ArrowRight':
                if (!quizActive) document.getElementById('nextWordBtn').click();
                break;
            case 'r':
            case 'R':
                if (!quizActive) goToRandomWord();
                break;
            case 's':
            case 'S':
                if (!quizActive) speakWord(getWordForDay(currentDayIndex));
                break;
            case 'f':
            case 'F':
                if (!quizActive) document.getElementById('favoriteBtn').click();
                break;
            case 'q':
            case 'Q':
                if (quizActive) {
                    QuizManager.end();
                } else {
                    QuizManager.start();
                }
                break;
            case '?':
                document.getElementById('helpModal').style.display = 
                    document.getElementById('helpModal').style.display === 'none' ? 'flex' : 'none';
                break;
            case 'Escape':
                closeModal();
                closePanels();
                if (quizActive) QuizManager.end();
                break;
        }
    });
    
    // Click on word hero to burst particles
    document.getElementById('wordCard').addEventListener('click', (e) => {
        if (particles && e.target.closest('.word-hero')) {
            particles.burst(e.clientX, e.clientY);
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeApp);

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // Service worker registration failed
        });
    });
}
