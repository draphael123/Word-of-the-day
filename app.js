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
        const count = Math.min(60, Math.floor(window.innerWidth / 20));
        for (let i = 0; i < count; i++) this.particles.push(this.createParticle());
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
        window.addEventListener('mousemove', (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; });
    }
    
    animate() {
        if (document.body.classList.contains('reduce-motion')) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((p, i) => {
            p.x += p.speedX; p.y += p.speedY; p.pulse += 0.02;
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size + Math.sin(p.pulse) * 0.5, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.alpha;
            this.ctx.fill();
        });
        this.ctx.globalAlpha = 1;
        requestAnimationFrame(() => this.animate());
    }
    
    burst(x, y) {
        for (let i = 0; i < 10; i++) {
            const p = this.createParticle(x, y);
            p.speedX = (Math.random() - 0.5) * 4;
            p.speedY = (Math.random() - 0.5) * 4;
            this.particles.push(p);
            setTimeout(() => { const idx = this.particles.indexOf(p); if (idx > -1) this.particles.splice(idx, 1); }, 2000);
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// STORAGE
// ═══════════════════════════════════════════════════════════════

const Storage = {
    get(key, def = null) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch { return def; } },
    set(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} }
};

// ═══════════════════════════════════════════════════════════════
// THEME MANAGER
// ═══════════════════════════════════════════════════════════════

const ThemeManager = {
    init() {
        const saved = Storage.get('theme', 'dark');
        document.documentElement.setAttribute('data-theme', saved);
        this.updateIcon(saved);
    },
    toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        Storage.set('theme', next);
        this.updateIcon(next);
    },
    updateIcon(theme) {
        const icon = document.querySelector('.theme-icon');
        if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
};

// ═══════════════════════════════════════════════════════════════
// STREAK SYSTEM
// ═══════════════════════════════════════════════════════════════

const StreakManager = {
    getStreak() { return Storage.get('streak', { count: 0, lastVisit: null, totalDays: 0 }); },
    updateStreak() {
        const data = this.getStreak();
        const today = new Date().toDateString();
        if (data.lastVisit === today) return data.count;
        
        const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
        if (data.lastVisit === yesterday.toDateString()) data.count++;
        else if (data.lastVisit !== today) data.count = 1;
        
        data.lastVisit = today;
        data.totalDays = (data.totalDays || 0) + 1;
        Storage.set('streak', data);
        BadgeManager.checkStreakBadges(data.count);
        return data.count;
    },
    display() {
        const count = this.updateStreak();
        document.getElementById('streakCount').textContent = count;
    }
};

// ═══════════════════════════════════════════════════════════════
// FAVORITES SYSTEM
// ═══════════════════════════════════════════════════════════════

const FavoritesManager = {
    get() { return Storage.get('favorites', []); },
    isFavorite(word) { return this.get().includes(word); },
    toggle(word) {
        const favs = this.get();
        const idx = favs.indexOf(word);
        if (idx > -1) favs.splice(idx, 1); else favs.push(word);
        Storage.set('favorites', favs);
        this.updateButton(word);
        BadgeManager.checkFavoriteBadges(favs.length);
        return idx === -1;
    },
    updateButton(word) {
        const btn = document.getElementById('favoriteBtn');
        btn.classList.toggle('active', this.isFavorite(word));
    },
    render() {
        const favs = this.get();
        const container = document.getElementById('favoritesList');
        if (favs.length === 0) { container.innerHTML = '<div class="favorites-empty">No favorites yet! Click ♡ on words you love.</div>'; return; }
        container.innerHTML = favs.map(word => {
            const w = wordsDatabase.find(x => x.word === word);
            return w ? `<div class="favorite-item" data-word="${word}"><div><span class="favorite-word">${word}</span><span class="favorite-pos">${w.partOfSpeech}</span></div><button class="btn-remove-favorite" data-word="${word}">✕</button></div>` : '';
        }).join('');
        container.querySelectorAll('.favorite-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('btn-remove-favorite')) { this.toggle(e.target.dataset.word); this.render(); }
                else { const idx = wordsDatabase.findIndex(w => w.word === item.dataset.word); if (idx > -1) { currentDayIndex = idx; displayWord(wordsDatabase[idx], idx, true); closePanels(); } }
            });
        });
    }
};

// ═══════════════════════════════════════════════════════════════
// SPACED REPETITION SYSTEM
// ═══════════════════════════════════════════════════════════════

const SRSManager = {
    getData() { return Storage.get('srs', {}); },
    rate(word, rating) {
        const data = this.getData();
        if (!data[word]) data[word] = { interval: 1, ease: 2.5, reviews: 0 };
        const card = data[word];
        card.reviews++;
        
        if (rating === 1) { card.interval = 1; card.ease = Math.max(1.3, card.ease - 0.2); }
        else if (rating === 2) { card.interval = Math.max(1, card.interval * 1.2); card.ease = Math.max(1.3, card.ease - 0.15); }
        else if (rating === 3) { card.interval = card.interval * card.ease; }
        else if (rating === 4) { card.interval = card.interval * card.ease * 1.3; card.ease += 0.15; }
        
        card.nextReview = Date.now() + card.interval * 24 * 60 * 60 * 1000;
        card.lastReview = Date.now();
        data[word] = card;
        Storage.set('srs', data);
        showNotification(['😕 Review soon', '🤔 Keep practicing', '😊 Good job!', '🎯 Excellent!'][rating - 1]);
    },
    getMastery() {
        const data = this.getData();
        let newCount = 0, learning = 0, mastered = 0;
        wordsDatabase.forEach(w => {
            const card = data[w.word];
            if (!card || card.reviews === 0) newCount++;
            else if (card.interval < 7) learning++;
            else mastered++;
        });
        return { new: newCount, learning, mastered };
    }
};

// ═══════════════════════════════════════════════════════════════
// BADGES SYSTEM
// ═══════════════════════════════════════════════════════════════

const BADGES = [
    { id: 'streak7', icon: '🔥', name: 'Week Warrior', desc: '7 day streak', check: (s) => s.streak >= 7 },
    { id: 'streak30', icon: '🔥', name: 'Monthly Master', desc: '30 day streak', check: (s) => s.streak >= 30 },
    { id: 'streak100', icon: '💯', name: 'Century Club', desc: '100 day streak', check: (s) => s.streak >= 100 },
    { id: 'fav10', icon: '❤️', name: 'Word Lover', desc: '10 favorites', check: (s) => s.favorites >= 10 },
    { id: 'fav50', icon: '💕', name: 'Word Enthusiast', desc: '50 favorites', check: (s) => s.favorites >= 50 },
    { id: 'quiz10', icon: '🧠', name: 'Quiz Starter', desc: '10 quiz questions', check: (s) => s.quizTotal >= 10 },
    { id: 'quiz90', icon: '🎓', name: 'Quiz Master', desc: '90% accuracy (20+ questions)', check: (s) => s.quizTotal >= 20 && (s.quizCorrect / s.quizTotal) >= 0.9 },
    { id: 'learn25', icon: '📚', name: 'Vocabulary Builder', desc: '25 words learned', check: (s) => s.learned >= 25 },
    { id: 'learn100', icon: '📖', name: 'Word Scholar', desc: '100 words learned', check: (s) => s.learned >= 100 },
    { id: 'first', icon: '🌟', name: 'First Steps', desc: 'View your first word', check: () => true }
];

const BadgeManager = {
    getUnlocked() { return Storage.get('badges', ['first']); },
    unlock(id) {
        const unlocked = this.getUnlocked();
        if (!unlocked.includes(id)) {
            unlocked.push(id);
            Storage.set('badges', unlocked);
            const badge = BADGES.find(b => b.id === id);
            if (badge) this.showToast(badge);
        }
    },
    showToast(badge) {
        const toast = document.getElementById('badgeToast');
        document.getElementById('badgeToastIcon').textContent = badge.icon;
        document.getElementById('badgeToastName').textContent = badge.name;
        toast.style.display = 'flex';
        toast.classList.add('show');
        setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.style.display = 'none', 500); }, 3000);
    },
    checkStreakBadges(streak) {
        if (streak >= 7) this.unlock('streak7');
        if (streak >= 30) this.unlock('streak30');
        if (streak >= 100) this.unlock('streak100');
    },
    checkFavoriteBadges(count) {
        if (count >= 10) this.unlock('fav10');
        if (count >= 50) this.unlock('fav50');
    },
    checkQuizBadges() {
        const stats = Storage.get('quizStats', { correct: 0, total: 0 });
        if (stats.total >= 10) this.unlock('quiz10');
        if (stats.total >= 20 && (stats.correct / stats.total) >= 0.9) this.unlock('quiz90');
    },
    render() {
        const unlocked = this.getUnlocked();
        const container = document.getElementById('badgesGrid');
        container.innerHTML = BADGES.map(b => `
            <div class="badge-card ${unlocked.includes(b.id) ? 'unlocked' : 'locked'}">
                <span class="badge-icon">${b.icon}</span>
                <span class="badge-name">${b.name}</span>
                <span class="badge-desc">${b.desc}</span>
            </div>
        `).join('');
    }
};

// ═══════════════════════════════════════════════════════════════
// STATS DASHBOARD
// ═══════════════════════════════════════════════════════════════

const StatsManager = {
    render() {
        const streak = StreakManager.getStreak();
        const favs = FavoritesManager.get();
        const badges = BadgeManager.getUnlocked();
        const quiz = Storage.get('quizStats', { correct: 0, total: 0 });
        const mastery = SRSManager.getMastery();
        const total = wordsDatabase.length;
        
        document.getElementById('statWordsLearned').textContent = mastery.learning + mastery.mastered;
        document.getElementById('statCurrentStreak').textContent = streak.count;
        document.getElementById('statQuizAccuracy').textContent = quiz.total > 0 ? Math.round((quiz.correct / quiz.total) * 100) + '%' : '0%';
        document.getElementById('statFavorites').textContent = favs.length;
        document.getElementById('statBadges').textContent = badges.length;
        document.getElementById('statTotalDays').textContent = streak.totalDays || 0;
        
        document.getElementById('masteryNew').style.width = (mastery.new / total * 100) + '%';
        document.getElementById('masteryLearning').style.width = (mastery.learning / total * 100) + '%';
        document.getElementById('masteryMastered').style.width = (mastery.mastered / total * 100) + '%';
        document.getElementById('masteryNewCount').textContent = mastery.new;
        document.getElementById('masteryLearningCount').textContent = mastery.learning;
        document.getElementById('masteryMasteredCount').textContent = mastery.mastered;
    }
};

// ═══════════════════════════════════════════════════════════════
// QUIZ SYSTEM
// ═══════════════════════════════════════════════════════════════

const QuizManager = {
    current: null, score: 0, total: 0,
    start() {
        this.score = 0; this.total = 0; this.updateScore(); this.next();
        document.getElementById('wordCard').style.display = 'none';
        document.getElementById('quizCard').style.display = 'block';
        document.querySelector('.actions').style.display = 'none';
    },
    end() {
        document.getElementById('quizCard').style.display = 'none';
        document.getElementById('wordCard').style.display = 'block';
        document.querySelector('.actions').style.display = 'flex';
    },
    next() {
        this.current = wordsDatabase[Math.floor(Math.random() * wordsDatabase.length)];
        const wrong = wordsDatabase.filter(w => w.word !== this.current.word).sort(() => Math.random() - 0.5).slice(0, 3);
        const options = [...wrong, this.current].sort(() => Math.random() - 0.5);
        
        document.getElementById('quizDefinition').textContent = this.current.definition;
        document.getElementById('quizFeedback').textContent = '';
        document.getElementById('quizFeedback').className = 'quiz-feedback';
        document.getElementById('nextQuizBtn').style.display = 'none';
        
        const container = document.getElementById('quizOptions');
        container.innerHTML = options.map(o => `<button class="quiz-option" data-word="${o.word}">${o.word}</button>`).join('');
        container.querySelectorAll('.quiz-option').forEach(btn => btn.addEventListener('click', () => this.check(btn.dataset.word)));
    },
    check(selected) {
        this.total++;
        const correct = selected === this.current.word;
        if (correct) this.score++;
        
        document.getElementById('quizFeedback').textContent = correct ? '🎉 Correct!' : `❌ It was "${this.current.word}"`;
        document.getElementById('quizFeedback').className = 'quiz-feedback ' + (correct ? 'correct' : 'incorrect');
        
        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.word === this.current.word) btn.classList.add('correct');
            else if (btn.dataset.word === selected && !correct) btn.classList.add('incorrect');
        });
        
        this.updateScore();
        document.getElementById('nextQuizBtn').style.display = 'flex';
        
        const stats = Storage.get('quizStats', { correct: 0, total: 0 });
        stats.total++; if (correct) stats.correct++;
        Storage.set('quizStats', stats);
        BadgeManager.checkQuizBadges();
    },
    updateScore() {
        document.getElementById('quizScore').textContent = this.score;
        document.getElementById('quizTotal').textContent = this.total;
    }
};

// ═══════════════════════════════════════════════════════════════
// FLASHCARD SYSTEM
// ═══════════════════════════════════════════════════════════════

const FlashcardManager = {
    cards: [], current: 0, known: 0,
    start() {
        this.cards = [...wordsDatabase].sort(() => Math.random() - 0.5).slice(0, 10);
        this.current = 0; this.known = 0;
        this.show();
        document.getElementById('wordCard').style.display = 'none';
        document.getElementById('flashcardCard').style.display = 'block';
        document.querySelector('.actions').style.display = 'none';
    },
    end() {
        document.getElementById('flashcardCard').style.display = 'none';
        document.getElementById('wordCard').style.display = 'block';
        document.querySelector('.actions').style.display = 'flex';
        showNotification(`You knew ${this.known}/${this.cards.length} words!`);
    },
    show() {
        if (this.current >= this.cards.length) { this.end(); return; }
        const card = this.cards[this.current];
        document.getElementById('flashcardWord').textContent = card.word;
        document.getElementById('flashcardDefinition').textContent = card.definition;
        document.getElementById('flashcardExample').textContent = `"${card.example}"`;
        document.getElementById('flashcardCurrent').textContent = this.current + 1;
        document.getElementById('flashcardTotal').textContent = this.cards.length;
        document.getElementById('flashcard').classList.remove('flipped');
    },
    flip() { document.getElementById('flashcard').classList.toggle('flipped'); },
    answer(knew) {
        if (knew) this.known++;
        SRSManager.rate(this.cards[this.current].word, knew ? 3 : 1);
        this.current++;
        this.show();
    }
};

// ═══════════════════════════════════════════════════════════════
// DAILY CHALLENGE
// ═══════════════════════════════════════════════════════════════

const ChallengeManager = {
    word: null, type: null,
    start() {
        this.word = wordsDatabase[Math.floor(Math.random() * wordsDatabase.length)];
        this.type = Math.random() > 0.5 ? 'fillblank' : 'scramble';
        
        document.getElementById('wordCard').style.display = 'none';
        document.getElementById('challengeCard').style.display = 'block';
        document.querySelector('.actions').style.display = 'none';
        
        if (this.type === 'fillblank') this.showFillBlank();
        else this.showScramble();
    },
    end() {
        document.getElementById('challengeCard').style.display = 'none';
        document.getElementById('wordCard').style.display = 'block';
        document.querySelector('.actions').style.display = 'flex';
    },
    showFillBlank() {
        document.getElementById('challengeType').textContent = '📝 FILL IN THE BLANK';
        const sentence = this.word.example.replace(new RegExp(this.word.word, 'gi'), '_____');
        document.getElementById('challengeContent').innerHTML = `
            <p class="challenge-prompt">${sentence}</p>
            <input type="text" class="challenge-input" id="challengeInput" placeholder="Type the word...">
            <button class="btn-main" id="submitChallengeBtn">Check Answer</button>
            <div class="quiz-feedback" id="challengeFeedback"></div>
        `;
        document.getElementById('submitChallengeBtn').addEventListener('click', () => this.checkFillBlank());
        document.getElementById('challengeInput').addEventListener('keypress', (e) => { if (e.key === 'Enter') this.checkFillBlank(); });
    },
    checkFillBlank() {
        const input = document.getElementById('challengeInput').value.trim().toLowerCase();
        const correct = input === this.word.word.toLowerCase();
        document.getElementById('challengeFeedback').textContent = correct ? '🎉 Correct!' : `❌ The answer was "${this.word.word}"`;
        document.getElementById('challengeFeedback').className = 'quiz-feedback ' + (correct ? 'correct' : 'incorrect');
        document.getElementById('submitChallengeBtn').textContent = 'Next Challenge';
        document.getElementById('submitChallengeBtn').onclick = () => this.start();
    },
    showScramble() {
        document.getElementById('challengeType').textContent = '🔀 UNSCRAMBLE';
        const scrambled = this.word.word.split('').sort(() => Math.random() - 0.5).join('').toUpperCase();
        document.getElementById('challengeContent').innerHTML = `
            <p class="challenge-prompt">Definition: ${this.word.definition}</p>
            <div class="challenge-letters" id="scrambledLetters">${scrambled.split('').map(l => `<button class="challenge-letter">${l}</button>`).join('')}</div>
            <input type="text" class="challenge-input" id="challengeInput" placeholder="Build the word..." readonly>
            <div style="display:flex;gap:1rem;justify-content:center;">
                <button class="btn-nav" id="clearChallengeBtn">Clear</button>
                <button class="btn-main" id="submitChallengeBtn">Check</button>
            </div>
            <div class="quiz-feedback" id="challengeFeedback"></div>
        `;
        document.querySelectorAll('.challenge-letter').forEach(btn => {
            btn.addEventListener('click', () => {
                if (!btn.classList.contains('used')) {
                    document.getElementById('challengeInput').value += btn.textContent;
                    btn.classList.add('used');
                }
            });
        });
        document.getElementById('clearChallengeBtn').addEventListener('click', () => {
            document.getElementById('challengeInput').value = '';
            document.querySelectorAll('.challenge-letter').forEach(b => b.classList.remove('used'));
        });
        document.getElementById('submitChallengeBtn').addEventListener('click', () => this.checkScramble());
    },
    checkScramble() {
        const input = document.getElementById('challengeInput').value.trim().toLowerCase();
        const correct = input === this.word.word.toLowerCase();
        document.getElementById('challengeFeedback').textContent = correct ? '🎉 Correct!' : `❌ The answer was "${this.word.word}"`;
        document.getElementById('challengeFeedback').className = 'quiz-feedback ' + (correct ? 'correct' : 'incorrect');
        document.getElementById('submitChallengeBtn').textContent = 'Next';
        document.getElementById('submitChallengeBtn').onclick = () => this.start();
    }
};

// ═══════════════════════════════════════════════════════════════
// WORD LISTS
// ═══════════════════════════════════════════════════════════════

const ListsManager = {
    get() { return Storage.get('wordLists', []); },
    create(name, desc) {
        const lists = this.get();
        lists.push({ id: Date.now(), name, desc, words: [] });
        Storage.set('wordLists', lists);
        this.render();
    },
    delete(id) {
        const lists = this.get().filter(l => l.id !== id);
        Storage.set('wordLists', lists);
        this.render();
    },
    addWord(listId, word) {
        const lists = this.get();
        const list = lists.find(l => l.id === listId);
        if (list && !list.words.includes(word)) {
            list.words.push(word);
            Storage.set('wordLists', lists);
            showNotification(`Added to "${list.name}"`);
        }
    },
    render() {
        const lists = this.get();
        const container = document.getElementById('listsContainer');
        if (lists.length === 0) {
            container.innerHTML = '<p style="color:var(--gray);text-align:center;">No lists yet. Create one!</p>';
            return;
        }
        container.innerHTML = lists.map(l => `
            <div class="list-card" data-id="${l.id}">
                <div class="list-info">
                    <span class="list-name">${l.name}</span>
                    <span class="list-count">${l.words.length} words</span>
                </div>
                <div class="list-actions">
                    <button class="btn-list-action delete-list" data-id="${l.id}">🗑️</button>
                </div>
            </div>
        `).join('');
        container.querySelectorAll('.delete-list').forEach(btn => {
            btn.addEventListener('click', (e) => { e.stopPropagation(); this.delete(parseInt(btn.dataset.id)); });
        });
    }
};

// ═══════════════════════════════════════════════════════════════
// FILTER SYSTEM
// ═══════════════════════════════════════════════════════════════

let currentPosFilter = 'all';
let currentDiffFilter = 'all';

const FilterManager = {
    apply() {
        let filtered = [...wordsDatabase];
        if (currentPosFilter !== 'all') filtered = filtered.filter(w => w.partOfSpeech.toLowerCase() === currentPosFilter);
        if (currentDiffFilter !== 'all') filtered = filtered.filter(w => (w.difficulty || 'intermediate').toLowerCase() === currentDiffFilter);
        document.getElementById('filterStats').textContent = `Showing ${filtered.length} words`;
        if (filtered.length > 0) {
            currentDayIndex = wordsDatabase.indexOf(filtered[0]);
            displayWord(filtered[0], currentDayIndex, true);
        }
    }
};

// ═══════════════════════════════════════════════════════════════
// SPEECH
// ═══════════════════════════════════════════════════════════════

function speakWord(word) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word.word);
    u.rate = 0.8;
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith('en'));
    if (voice) u.voice = voice;
    const btn = document.getElementById('speakBtn');
    u.onstart = () => btn.classList.add('speaking');
    u.onend = () => btn.classList.remove('speaking');
    window.speechSynthesis.speak(u);
}

if ('speechSynthesis' in window) window.speechSynthesis.getVoices();

// ═══════════════════════════════════════════════════════════════
// SHARE & NOTIFICATIONS
// ═══════════════════════════════════════════════════════════════

function shareWord(word) {
    const text = `⚡ WORD: ${word.word}\n\n${word.definition}\n\n"${word.example}"`;
    if (navigator.share) navigator.share({ title: word.word, text }).catch(() => fallbackShare(text));
    else fallbackShare(text);
}

function fallbackShare(text) {
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => showNotification('Copied! 📋'));
    else prompt('Copy:', text);
}

function showNotification(msg) {
    let n = document.getElementById('notification');
    if (!n) {
        n = document.createElement('div');
        n.id = 'notification';
        n.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(100px);background:linear-gradient(135deg,#ff6b35,#ff006e);color:#fff;padding:1rem 2rem;font-family:Anybody,sans-serif;font-weight:700;border-radius:12px;z-index:10000;opacity:0;transition:all .4s ease;';
        document.body.appendChild(n);
    }
    n.textContent = msg;
    requestAnimationFrame(() => { n.style.transform = 'translateX(-50%) translateY(0)'; n.style.opacity = '1'; });
    setTimeout(() => { n.style.transform = 'translateX(-50%) translateY(100px)'; n.style.opacity = '0'; }, 2500);
}

// ═══════════════════════════════════════════════════════════════
// WORD DISPLAY
// ═══════════════════════════════════════════════════════════════

function getDayIndex() {
    const diff = new Date() - new Date('2024-01-01');
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getWord(idx) {
    const len = wordsDatabase.length;
    return wordsDatabase[((idx % len) + len) % len];
}

function displayWord(word, idx, animate = false) {
    const card = document.getElementById('wordCard');
    if (animate && !document.body.classList.contains('reduce-motion')) {
        card.classList.add('transitioning');
        setTimeout(() => { updateContent(word, idx); setTimeout(() => card.classList.remove('transitioning'), 250); }, 250);
    } else updateContent(word, idx);
}

function updateContent(word, idx) {
    document.getElementById('wordNumber').textContent = wordsDatabase.indexOf(word) + 1;
    document.getElementById('word').textContent = word.word;
    document.getElementById('pronunciation').textContent = word.pronunciation;
    document.getElementById('definition').textContent = word.definition;
    document.getElementById('example').textContent = `"${word.example}"`;
    document.getElementById('etymology').textContent = word.etymology;
    document.getElementById('partOfSpeech').textContent = word.partOfSpeech;
    
    const diff = word.difficulty || 'intermediate';
    const diffTag = document.getElementById('difficultyTag');
    diffTag.textContent = diff.charAt(0).toUpperCase() + diff.slice(1);
    diffTag.className = 'difficulty-tag ' + diff;
    
    const related = word.related || [];
    document.getElementById('relatedWords').innerHTML = related.length > 0 
        ? related.map(r => `<span class="related-word" data-word="${r}">${r}</span>`).join('') 
        : '<span style="color:var(--gray)">No related words</span>';
    
    document.querySelectorAll('.related-word').forEach(el => {
        el.addEventListener('click', () => {
            const w = wordsDatabase.find(x => x.word.toLowerCase() === el.dataset.word.toLowerCase());
            if (w) { currentDayIndex = wordsDatabase.indexOf(w); displayWord(w, currentDayIndex, true); }
        });
    });
    
    FavoritesManager.updateButton(word.word);
}

function formatDate(d) {
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase();
}

// ═══════════════════════════════════════════════════════════════
// PANELS
// ═══════════════════════════════════════════════════════════════

function closePanels() {
    ['favoritesPanel', 'filterPanel', 'statsPanel', 'badgesPanel', 'listsPanel'].forEach(id => document.getElementById(id).style.display = 'none');
    document.getElementById('wordCard').style.display = 'block';
}

function closeModals() {
    ['helpModal', 'createListModal'].forEach(id => document.getElementById(id).style.display = 'none');
}

// ═══════════════════════════════════════════════════════════════
// REDUCED MOTION
// ═══════════════════════════════════════════════════════════════

function initReducedMotion() {
    const toggle = document.getElementById('reduceMotionToggle');
    const saved = Storage.get('reduceMotion', false);
    toggle.checked = saved;
    if (saved) document.body.classList.add('reduce-motion');
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

function init() {
    ThemeManager.init();
    initReducedMotion();
    StreakManager.display();
    
    const canvas = document.getElementById('particleCanvas');
    if (canvas && !Storage.get('reduceMotion')) particles = new ParticleSystem(canvas);
    
    displayWord(getWord(currentDayIndex), currentDayIndex);
    document.getElementById('dateDisplay').textContent = formatDate(currentDate);
    
    // Navigation
    document.getElementById('prevWordBtn').addEventListener('click', (e) => {
        if (particles) particles.burst(e.clientX, e.clientY);
        currentDayIndex--; currentDate.setDate(currentDate.getDate() - 1);
        displayWord(getWord(currentDayIndex), currentDayIndex, true);
        document.getElementById('dateDisplay').textContent = formatDate(currentDate);
    });
    document.getElementById('nextWordBtn').addEventListener('click', (e) => {
        if (particles) particles.burst(e.clientX, e.clientY);
        currentDayIndex++; currentDate.setDate(currentDate.getDate() + 1);
        displayWord(getWord(currentDayIndex), currentDayIndex, true);
        document.getElementById('dateDisplay').textContent = formatDate(currentDate);
    });
    document.getElementById('randomBtn').addEventListener('click', (e) => {
        if (particles) particles.burst(e.clientX, e.clientY);
        currentDayIndex = Math.floor(Math.random() * wordsDatabase.length);
        displayWord(wordsDatabase[currentDayIndex], currentDayIndex, true);
    });
    
    // Actions
    document.getElementById('shareBtn').addEventListener('click', (e) => { if (particles) particles.burst(e.clientX, e.clientY); shareWord(getWord(currentDayIndex)); });
    document.getElementById('speakBtn').addEventListener('click', (e) => { if (particles) particles.burst(e.clientX, e.clientY); speakWord(getWord(currentDayIndex)); });
    document.getElementById('favoriteBtn').addEventListener('click', (e) => {
        if (particles) particles.burst(e.clientX, e.clientY);
        const added = FavoritesManager.toggle(getWord(currentDayIndex).word);
        showNotification(added ? 'Added to favorites ❤️' : 'Removed');
    });
    
    // SRS buttons
    document.querySelectorAll('.srs-btn').forEach(btn => {
        btn.addEventListener('click', () => SRSManager.rate(getWord(currentDayIndex).word, parseInt(btn.dataset.rating)));
    });
    
    // Top bar
    document.getElementById('themeBtn').addEventListener('click', () => ThemeManager.toggle());
    document.getElementById('statsBtn').addEventListener('click', () => { closePanels(); StatsManager.render(); document.getElementById('statsPanel').style.display = 'block'; document.getElementById('wordCard').style.display = 'none'; });
    document.getElementById('badgesBtn').addEventListener('click', () => { closePanels(); BadgeManager.render(); document.getElementById('badgesPanel').style.display = 'block'; document.getElementById('wordCard').style.display = 'none'; });
    document.getElementById('listsBtn').addEventListener('click', () => { closePanels(); ListsManager.render(); document.getElementById('listsPanel').style.display = 'block'; document.getElementById('wordCard').style.display = 'none'; });
    document.getElementById('filterBtn').addEventListener('click', () => { closePanels(); document.getElementById('filterPanel').style.display = 'block'; document.getElementById('wordCard').style.display = 'none'; });
    document.getElementById('favoritesBtn').addEventListener('click', () => { closePanels(); FavoritesManager.render(); document.getElementById('favoritesPanel').style.display = 'block'; document.getElementById('wordCard').style.display = 'none'; });
    document.getElementById('helpBtn').addEventListener('click', () => document.getElementById('helpModal').style.display = 'flex');
    
    // Quiz, Flashcard, Challenge
    document.getElementById('quizBtn').addEventListener('click', () => { closePanels(); QuizManager.start(); });
    document.getElementById('flashcardBtn').addEventListener('click', () => { closePanels(); FlashcardManager.start(); });
    document.getElementById('challengeBtn').addEventListener('click', () => { closePanels(); ChallengeManager.start(); });
    
    // Close buttons
    document.getElementById('closeStatsBtn').addEventListener('click', closePanels);
    document.getElementById('closeBadgesBtn').addEventListener('click', closePanels);
    document.getElementById('closeListsBtn').addEventListener('click', closePanels);
    document.getElementById('closeFilterBtn').addEventListener('click', closePanels);
    document.getElementById('closeFavoritesBtn').addEventListener('click', closePanels);
    document.getElementById('closeQuizBtn').addEventListener('click', () => QuizManager.end());
    document.getElementById('closeFlashcardBtn').addEventListener('click', () => FlashcardManager.end());
    document.getElementById('closeChallengeBtn').addEventListener('click', () => ChallengeManager.end());
    document.getElementById('closeHelpBtn').addEventListener('click', closeModals);
    document.getElementById('nextQuizBtn').addEventListener('click', () => QuizManager.next());
    
    // Flashcard
    document.getElementById('flashcard').addEventListener('click', () => FlashcardManager.flip());
    document.getElementById('flashcardKnow').addEventListener('click', () => FlashcardManager.answer(true));
    document.getElementById('flashcardDontKnow').addEventListener('click', () => FlashcardManager.answer(false));
    
    // Filters
    document.querySelectorAll('#posFilters .filter-chip').forEach(c => c.addEventListener('click', () => {
        document.querySelectorAll('#posFilters .filter-chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        currentPosFilter = c.dataset.filter;
        FilterManager.apply();
    }));
    document.querySelectorAll('#diffFilters .filter-chip').forEach(c => c.addEventListener('click', () => {
        document.querySelectorAll('#diffFilters .filter-chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        currentDiffFilter = c.dataset.diff;
        FilterManager.apply();
    }));
    
    // Lists
    document.getElementById('createListBtn').addEventListener('click', () => document.getElementById('createListModal').style.display = 'flex');
    document.getElementById('closeCreateListBtn').addEventListener('click', closeModals);
    document.getElementById('saveListBtn').addEventListener('click', () => {
        const name = document.getElementById('newListName').value.trim();
        if (name) { ListsManager.create(name, document.getElementById('newListDesc').value.trim()); closeModals(); document.getElementById('newListName').value = ''; document.getElementById('newListDesc').value = ''; }
    });
    
    // Modal backdrop close
    ['helpModal', 'createListModal'].forEach(id => {
        document.getElementById(id).addEventListener('click', (e) => { if (e.target.id === id) closeModals(); });
    });
    
    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        switch(e.key) {
            case 'ArrowLeft': document.getElementById('prevWordBtn').click(); break;
            case 'ArrowRight': document.getElementById('nextWordBtn').click(); break;
            case 'r': case 'R': document.getElementById('randomBtn').click(); break;
            case 's': case 'S': speakWord(getWord(currentDayIndex)); break;
            case 'f': case 'F': document.getElementById('favoriteBtn').click(); break;
            case 'q': case 'Q': QuizManager.start(); break;
            case 'c': case 'C': ChallengeManager.start(); break;
            case 't': case 'T': ThemeManager.toggle(); break;
            case '?': document.getElementById('helpModal').style.display = document.getElementById('helpModal').style.display === 'none' ? 'flex' : 'none'; break;
            case 'Escape': closeModals(); closePanels(); QuizManager.end(); FlashcardManager.end(); ChallengeManager.end(); break;
        }
    });
}

document.addEventListener('DOMContentLoaded', init);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
