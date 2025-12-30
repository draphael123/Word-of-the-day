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
// MOTIVATIONAL QUOTES
// ═══════════════════════════════════════════════════════════════

const MOTIVATIONAL_QUOTES = [
    { text: "The limits of my language are the limits of my world.", author: "Ludwig Wittgenstein" },
    { text: "Words are, of course, the most powerful drug used by mankind.", author: "Rudyard Kipling" },
    { text: "Language is the road map of a culture. It tells you where its people come from and where they are going.", author: "Rita Mae Brown" },
    { text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", author: "Dr. Seuss" },
    { text: "Words have no power to impress the mind without the exquisite horror of their reality.", author: "Edgar Allan Poe" },
    { text: "A word after a word after a word is power.", author: "Margaret Atwood" },
    { text: "The difference between the right word and the almost right word is the difference between lightning and a lightning bug.", author: "Mark Twain" },
    { text: "One language sets you in a corridor for life. Two languages open every door along the way.", author: "Frank Smith" },
    { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
    { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
    { text: "Every word you learn is a new tool in your arsenal.", author: "Unknown" },
    { text: "Knowledge of words is knowledge of the world.", author: "Unknown" },
    { text: "Expand your vocabulary, expand your mind.", author: "Unknown" },
    { text: "One new word a day keeps ignorance away.", author: "Unknown" },
    { text: "Words are the currency of communication.", author: "Unknown" }
];

const QuoteManager = {
    currentIndex: 0,
    init() {
        const saved = Storage.get('quoteIndex', 0);
        this.currentIndex = saved;
        this.display();
        // Rotate quote every 30 seconds
        setInterval(() => {
            this.rotate();
        }, 30000);
    },
    rotate() {
        this.currentIndex = (this.currentIndex + 1) % MOTIVATIONAL_QUOTES.length;
        Storage.set('quoteIndex', this.currentIndex);
        this.display();
    },
    display() {
        const quote = MOTIVATIONAL_QUOTES[this.currentIndex];
        const container = document.getElementById('motivationalQuote');
        if (container) {
            container.querySelector('.quote-text').textContent = `"${quote.text}"`;
            container.querySelector('.quote-author').textContent = `— ${quote.author}`;
        }
    }
};

// ═══════════════════════════════════════════════════════════════
// MUSIC MANAGER
// ═══════════════════════════════════════════════════════════════

const MUSIC_TRACKS = [
    {
        name: "Peaceful Study",
        icon: "🎹",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        name: "Ocean Waves",
        icon: "🌊",
        url: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"
    },
    {
        name: "Nature Sounds",
        icon: "🍃",
        url: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav"
    },
    {
        name: "Classical Focus",
        icon: "🎻",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    }
];

const MusicManager = {
    audio: null,
    currentTrack: 0,
    isPlaying: false,
    volume: 0.5,
    
    init() {
        this.audio = document.getElementById('backgroundMusic');
        if (!this.audio) return;
        
        const saved = Storage.get('music', { track: 0, volume: 50, playing: false });
        this.currentTrack = saved.track || 0;
        this.volume = saved.volume / 100 || 0.5;
        this.audio.volume = this.volume;
        
        if (saved.playing) {
            this.loadTrack(this.currentTrack);
            setTimeout(() => this.play(), 500);
        }
        
        this.updateUI();
    },
    
    loadTrack(index) {
        if (!this.audio || index < 0 || index >= MUSIC_TRACKS.length) return;
        this.currentTrack = index;
        const track = MUSIC_TRACKS[index];
        this.audio.src = track.url;
        this.audio.load();
        Storage.set('music', { track: index, volume: this.volume * 100, playing: this.isPlaying });
        this.updateUI();
    },
    
    play() {
        if (!this.audio) return;
        this.audio.play().then(() => {
            this.isPlaying = true;
            this.updateUI();
            Storage.set('music', { track: this.currentTrack, volume: this.volume * 100, playing: true });
        }).catch(err => {
            console.log('Music play failed:', err);
            showNotification('Music requires user interaction first');
        });
    },
    
    pause() {
        if (!this.audio) return;
        this.audio.pause();
        this.isPlaying = false;
        this.updateUI();
        Storage.set('music', { track: this.currentTrack, volume: this.volume * 100, playing: false });
    },
    
    toggle() {
        if (this.isPlaying) this.pause();
        else this.play();
    },
    
    setVolume(value) {
        this.volume = value / 100;
        if (this.audio) this.audio.volume = this.volume;
        document.getElementById('volumeValue').textContent = value + '%';
        Storage.set('music', { track: this.currentTrack, volume: value, playing: this.isPlaying });
    },
    
    updateUI() {
        const icon = document.getElementById('playPauseIcon');
        const text = document.getElementById('playPauseText');
        const title = document.getElementById('musicTitle');
        const musicBtn = document.getElementById('musicBtn');
        
        if (icon) icon.textContent = this.isPlaying ? '⏸' : '▶';
        if (text) text.textContent = this.isPlaying ? 'Pause' : 'Play';
        if (title && MUSIC_TRACKS[this.currentTrack]) title.textContent = MUSIC_TRACKS[this.currentTrack].name;
        if (musicBtn) {
            const musicIcon = musicBtn.querySelector('.music-icon');
            if (musicIcon) musicIcon.style.opacity = this.isPlaying ? '1' : '0.6';
        }
        
        document.querySelectorAll('.music-track-btn').forEach((btn, idx) => {
            btn.classList.toggle('active', idx === this.currentTrack);
        });
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
    ['favoritesPanel', 'filterPanel', 'statsPanel', 'badgesPanel', 'listsPanel', 'musicPanel', 'calendarPanel', 'journalPanel', 'exportPanel', 'gamesPanel', 'learningPathPanel', 'leaderboardPanel', 'submissionsPanel', 'discussionsPanel', 'themesPanel', 'reportsPanel', 'languagePanel', 'illustrationPanel'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
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
    QuoteManager.init();
    MusicManager.init();
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
    document.getElementById('musicBtn').addEventListener('click', () => {
        closePanels();
        document.getElementById('musicPanel').style.display = 'block';
        document.getElementById('wordCard').style.display = 'none';
    });
    document.getElementById('themeBtn').addEventListener('click', () => ThemeManager.toggle());
    document.getElementById('statsBtn').addEventListener('click', () => { closePanels(); StatsManager.render(); document.getElementById('statsPanel').style.display = 'block'; document.getElementById('wordCard').style.display = 'none'; });
    document.getElementById('badgesBtn').addEventListener('click', () => { closePanels(); BadgeManager.render(); document.getElementById('badgesPanel').style.display = 'block'; document.getElementById('wordCard').style.display = 'none'; });
    document.getElementById('listsBtn').addEventListener('click', () => { closePanels(); ListsManager.render(); document.getElementById('listsPanel').style.display = 'block'; document.getElementById('wordCard').style.display = 'none'; });
    document.getElementById('filterBtn').addEventListener('click', () => { closePanels(); document.getElementById('filterPanel').style.display = 'block'; document.getElementById('wordCard').style.display = 'none'; });
    document.getElementById('favoritesBtn').addEventListener('click', () => { closePanels(); FavoritesManager.render(); document.getElementById('favoritesPanel').style.display = 'block'; document.getElementById('wordCard').style.display = 'none'; });
    document.getElementById('helpBtn').addEventListener('click', () => document.getElementById('helpModal').style.display = 'flex');
    document.getElementById('calendarBtn')?.addEventListener('click', () => {
        closePanels();
        CalendarManager.render();
        const panel = document.getElementById('calendarPanel');
        if (panel) {
            panel.style.display = 'block';
            document.getElementById('wordCard').style.display = 'none';
        }
    });
    document.getElementById('journalBtn')?.addEventListener('click', () => {
        closePanels();
        JournalManager.render(getWord(currentDayIndex).word);
        const panel = document.getElementById('journalPanel');
        if (panel) {
            panel.style.display = 'block';
            document.getElementById('wordCard').style.display = 'none';
        }
    });
    document.getElementById('exportBtn')?.addEventListener('click', () => {
        closePanels();
        const panel = document.getElementById('exportPanel');
        if (panel) {
            panel.style.display = 'block';
            document.getElementById('wordCard').style.display = 'none';
        }
    });
    
    // Quiz, Flashcard, Challenge
    document.getElementById('quizBtn').addEventListener('click', () => { closePanels(); QuizManager.start(); });
    document.getElementById('flashcardBtn').addEventListener('click', () => { closePanels(); FlashcardManager.start(); });
    document.getElementById('challengeBtn').addEventListener('click', () => { closePanels(); ChallengeManager.start(); });
    
    // Close buttons
    document.getElementById('closeStatsBtn').addEventListener('click', closePanels);
    document.getElementById('closeBadgesBtn').addEventListener('click', closePanels);
    document.getElementById('closeMusicBtn').addEventListener('click', closePanels);
    document.getElementById('closeListsBtn').addEventListener('click', closePanels);
    document.getElementById('closeFilterBtn').addEventListener('click', closePanels);
    document.getElementById('closeFavoritesBtn').addEventListener('click', closePanels);
    document.getElementById('closeCalendarBtn')?.addEventListener('click', closePanels);
    document.getElementById('closeJournalBtn')?.addEventListener('click', closePanels);
    document.getElementById('closeExportBtn')?.addEventListener('click', closePanels);
    document.getElementById('closeGamesBtn')?.addEventListener('click', closePanels);
    document.getElementById('closeLearningPathBtn')?.addEventListener('click', closePanels);
    document.getElementById('closeLeaderboardBtn')?.addEventListener('click', closePanels);
    document.getElementById('closeSubmissionsBtn')?.addEventListener('click', closePanels);
    document.getElementById('closeDiscussionsBtn')?.addEventListener('click', closePanels);
    document.getElementById('closeThemesBtn')?.addEventListener('click', closePanels);
    document.getElementById('closeReportsBtn')?.addEventListener('click', closePanels);
    document.getElementById('closeLanguageBtn')?.addEventListener('click', closePanels);
    document.getElementById('closeIllustrationBtn')?.addEventListener('click', closePanels);
    
    // Music controls
    document.getElementById('playPauseBtn').addEventListener('click', () => MusicManager.toggle());
    document.getElementById('volumeSlider').addEventListener('input', (e) => MusicManager.setVolume(e.target.value));
    document.querySelectorAll('.music-track-btn').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            MusicManager.loadTrack(idx);
            if (MusicManager.isPlaying) {
                MusicManager.pause();
                setTimeout(() => MusicManager.play(), 100);
            }
        });
    });
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

// ═══════════════════════════════════════════════════════════════
// ALL NEW FEATURES IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════

// Calendar/History Manager
const CalendarManager = {
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    render() {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        document.getElementById('calendarMonth').textContent = `${monthNames[this.currentMonth]} ${this.currentYear}`;
        const grid = document.getElementById('calendarGrid');
        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        const visited = Storage.get('visitedDays', {});
        
        grid.innerHTML = '';
        for (let i = 0; i < firstDay; i++) grid.innerHTML += '<div class="calendar-day empty"></div>';
        for (let day = 1; day <= daysInMonth; day++) {
            const dateKey = `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const visitedClass = visited[dateKey] ? 'visited' : '';
            const word = this.getWordForDate(new Date(this.currentYear, this.currentMonth, day));
            grid.innerHTML += `<div class="calendar-day ${visitedClass}" data-date="${dateKey}" data-word="${word}">${day}</div>`;
        }
        
        grid.querySelectorAll('.calendar-day:not(.empty)').forEach(day => {
            day.addEventListener('click', () => {
                const word = day.dataset.word;
                if (word) {
                    const idx = wordsDatabase.findIndex(w => w.word === word);
                    if (idx > -1) {
                        currentDayIndex = idx;
                        displayWord(wordsDatabase[idx], idx, true);
                        closePanels();
                    }
                }
            });
        });
    },
    getWordForDate(date) {
        const start = new Date('2024-01-01');
        const diff = Math.floor((date - start) / (1000 * 60 * 60 * 24));
        return getWord(diff).word;
    }
};

// Journal Manager
const JournalManager = {
    getEntries() { return Storage.get('journal', {}); },
    saveEntry(word, text) {
        const entries = this.getEntries();
        if (!entries[word]) entries[word] = [];
        entries[word].push({ text, date: new Date().toISOString() });
        Storage.set('journal', entries);
    },
    render(word) {
        const entries = this.getEntries()[word] || [];
        const container = document.getElementById('journalEntries');
        if (entries.length === 0) {
            container.innerHTML = '<p style="color:var(--gray);text-align:center;">No entries yet</p>';
            return;
        }
        container.innerHTML = entries.map(e => `
            <div class="journal-entry">
                <p class="journal-text">${e.text}</p>
                <span class="journal-date">${new Date(e.date).toLocaleDateString()}</span>
            </div>
        `).join('');
    }
};

// Export Manager
const ExportManager = {
    exportPDF() {
        const favs = FavoritesManager.get();
        const content = favs.map(w => {
            const word = wordsDatabase.find(x => x.word === w);
            return word ? `${word.word}\n${word.definition}\n${word.example}\n\n` : '';
        }).join('');
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'word-favorites.txt';
        a.click();
        showNotification('Exported to text file!');
    },
    exportAnki() {
        const favs = FavoritesManager.get();
        const csv = favs.map(w => {
            const word = wordsDatabase.find(x => x.word === w);
            return word ? `"${word.word}","${word.definition}","${word.example}"` : '';
        }).filter(x => x).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'words-anki.csv';
        a.click();
        showNotification('Exported to Anki format!');
    },
    exportCSV() {
        const stats = Storage.get('quizStats', {});
        const csv = `Metric,Value\nWords Learned,${StatsManager.getWordsLearned()}\nStreak,${StreakManager.getStreak().count}\nQuiz Accuracy,${stats.total > 0 ? (stats.correct / stats.total * 100).toFixed(1) : 0}%`;
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'word-stats.csv';
        a.click();
        showNotification('Exported stats to CSV!');
    },
    exportJSON() {
        const data = {
            favorites: FavoritesManager.get(),
            streak: StreakManager.getStreak(),
            quizStats: Storage.get('quizStats', {}),
            badges: BadgeManager.getUnlocked(),
            journal: JournalManager.getEntries()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'word-data.json';
        a.click();
        showNotification('Exported to JSON!');
    }
};

// Pronunciation Practice
const PronunciationPractice = {
    mediaRecorder: null,
    audioChunks: [],
    start() {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            this.mediaRecorder = new MediaRecorder(stream);
            this.audioChunks = [];
            this.mediaRecorder.ondataavailable = e => this.audioChunks.push(e.data);
            this.mediaRecorder.onstop = () => this.compare();
            this.mediaRecorder.start();
            showNotification('Recording... Click again to stop');
        }).catch(() => showNotification('Microphone access denied'));
    },
    stop() {
        if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
            this.mediaRecorder.stop();
        }
    },
    compare() {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
        showNotification('Recording saved! (Comparison feature requires backend)');
    }
};

// Word Frequency Data
const FrequencyManager = {
    getFrequency(word) {
        // Simplified frequency - in real app, use API
        const common = ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'it'];
        if (common.includes(word.toLowerCase())) return 'very common';
        const length = word.length;
        if (length < 5) return 'common';
        if (length < 8) return 'moderate';
        return 'uncommon';
    }
};

// Social Share Image Generator
const ShareImageGenerator = {
    generate(wordData) {
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 630;
        const ctx = canvas.getContext('2d');
        
        // Background
        ctx.fillStyle = '#050505';
        ctx.fillRect(0, 0, 1200, 630);
        
        // Word
        ctx.fillStyle = '#ff6b35';
        ctx.font = 'bold 80px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(wordData.word.toUpperCase(), 600, 200);
        
        // Definition
        ctx.fillStyle = '#ffffff';
        ctx.font = '30px Arial';
        const words = wordData.definition.split(' ');
        let line = '';
        let y = 300;
        words.forEach(word => {
            const testLine = line + word + ' ';
            if (ctx.measureText(testLine).width > 1000) {
                ctx.fillText(line, 600, y);
                line = word + ' ';
                y += 40;
            } else line = testLine;
        });
        ctx.fillText(line, 600, y);
        
        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${wordData.word}-share.png`;
            a.click();
            showNotification('Image downloaded!');
        });
    }
};

// Swipe Gestures
const SwipeManager = {
    init() {
        let startX = 0, startY = 0;
        const card = document.getElementById('wordCard');
        if (!card) return;
        
        card.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        card.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) document.getElementById('nextWordBtn').click();
                else document.getElementById('prevWordBtn').click();
            } else if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
                if (diffY > 0) document.getElementById('randomBtn').click();
                else document.getElementById('favoriteBtn').click();
            }
        });
    }
};

// Additional Games
const GamesManager = {
    wordAssociation() {
        const word = getWord(currentDayIndex);
        const related = wordsDatabase.filter(w => 
            w.word !== word.word && 
            (w.definition.includes(word.word) || word.definition.includes(w.word))
        ).slice(0, 4);
        showNotification(`Find words related to "${word.word}"!`);
    },
    synonymMatch() {
        QuizManager.start();
    },
    wordLadder() {
        showNotification('Word Ladder game coming soon!');
    }
};

// Learning Path
const LearningPathManager = {
    render() {
        const mastery = SRSManager.getMastery();
        const container = document.getElementById('learningPathContent');
        container.innerHTML = `
            <div class="path-stats">
                <div class="path-milestone">
                    <span class="milestone-icon">🎯</span>
                    <span class="milestone-text">Next: Learn 10 more words</span>
                </div>
                <div class="path-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(mastery.learning + mastery.mastered) / wordsDatabase.length * 100}%"></div>
                    </div>
                </div>
            </div>
        `;
    }
};

// Leaderboard (local only - would need backend for real leaderboard)
const LeaderboardManager = {
    render() {
        const stats = Storage.get('leaderboard', []);
        const container = document.getElementById('leaderboardContent');
        if (stats.length === 0) {
            container.innerHTML = '<p style="color:var(--gray);text-align:center;">No leaderboard data yet</p>';
            return;
        }
        container.innerHTML = stats.sort((a, b) => b.streak - a.streak).map((s, i) => `
            <div class="leaderboard-entry">
                <span class="rank">#${i + 1}</span>
                <span class="name">${s.name || 'Anonymous'}</span>
                <span class="score">🔥 ${s.streak} days</span>
            </div>
        `).join('');
    }
};

// User Submissions
const SubmissionsManager = {
    submit() {
        const word = document.getElementById('submitWord').value.trim();
        const pronunciation = document.getElementById('submitPronunciation').value.trim();
        const definition = document.getElementById('submitDefinition').value.trim();
        const example = document.getElementById('submitExample').value.trim();
        
        if (!word || !definition) {
            showNotification('Please fill in word and definition');
            return;
        }
        
        const submissions = Storage.get('submissions', []);
        submissions.push({ word, pronunciation, definition, example, date: new Date().toISOString() });
        Storage.set('submissions', submissions);
        
        document.getElementById('submitWord').value = '';
        document.getElementById('submitPronunciation').value = '';
        document.getElementById('submitDefinition').value = '';
        document.getElementById('submitExample').value = '';
        
        showNotification('Word submitted! (Requires admin approval)');
    }
};

// Discussions
const DiscussionsManager = {
    getDiscussions(word) { return Storage.get(`discussions-${word}`, []); },
    post(word, text) {
        const discussions = this.getDiscussions(word);
        discussions.push({ text, author: 'You', date: new Date().toISOString() });
        Storage.set(`discussions-${word}`, discussions);
        this.render(word);
    },
    render(word) {
        const discussions = this.getDiscussions(word);
        const container = document.getElementById('discussionsList');
        if (discussions.length === 0) {
            container.innerHTML = '<p style="color:var(--gray);text-align:center;">No discussions yet</p>';
            return;
        }
        container.innerHTML = discussions.map(d => `
            <div class="discussion-item">
                <p class="discussion-text">${d.text}</p>
                <span class="discussion-author">${d.author} • ${new Date(d.date).toLocaleDateString()}</span>
            </div>
        `).join('');
    }
};

// Enhanced Theme Manager
const EnhancedThemeManager = {
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        Storage.set('theme', theme);
        ThemeManager.updateIcon(theme === 'dark' ? 'dark' : 'light');
    }
};

// Reports Manager
const ReportsManager = {
    getSettings() { return Storage.get('reportSettings', { weekly: false, monthly: false, email: '' }); },
    saveSettings() {
        const settings = {
            weekly: document.getElementById('weeklyReportToggle').checked,
            monthly: document.getElementById('monthlyReportToggle').checked,
            email: document.getElementById('reportEmail').value
        };
        Storage.set('reportSettings', settings);
        showNotification('Report settings saved! (Backend required for actual emails)');
    },
    generateWeeklyReport() {
        const stats = Storage.get('quizStats', {});
        const streak = StreakManager.getStreak();
        const favs = FavoritesManager.get();
        return `Weekly Report:\n\nWords Learned: ${favs.length}\nStreak: ${streak.count} days\nQuiz Accuracy: ${stats.total > 0 ? (stats.correct / stats.total * 100).toFixed(1) : 0}%`;
    },
    generateMonthlyReport() {
        const stats = Storage.get('quizStats', {});
        const streak = StreakManager.getStreak();
        const favs = FavoritesManager.get();
        const badges = BadgeManager.getUnlocked();
        return `Monthly Report:\n\nWords Learned: ${favs.length}\nCurrent Streak: ${streak.count} days\nTotal Days: ${streak.totalDays || 0}\nQuiz Accuracy: ${stats.total > 0 ? (stats.correct / stats.total * 100).toFixed(1) : 0}%\nBadges Earned: ${badges.length}`;
    }
};

// Multi-language Manager
const LanguageManager = {
    currentLang: 'en',
    init() {
        const saved = Storage.get('language', 'en');
        this.currentLang = saved;
        document.getElementById('languageSelect').value = saved;
    },
    setLanguage(lang) {
        this.currentLang = lang;
        Storage.set('language', lang);
        showNotification(`Language set to ${lang.toUpperCase()} (Full translation requires word database)`);
    }
};

// Word Illustration Manager
const IllustrationManager = {
    generate(word) {
        // Generate simple visual representation
        const container = document.getElementById('wordIllustration');
        const emojiMap = {
            'serendipity': '✨', 'ephemeral': '🌸', 'mellifluous': '🎵',
            'petrichor': '🌧️', 'quixotic': '⚔️', 'luminous': '💡',
            'resilient': '🌱', 'eloquent': '📝', 'ineffable': '🌟',
            'wanderlust': '✈️'
        };
        const emoji = emojiMap[word.word.toLowerCase()] || '📚';
        container.innerHTML = `
            <div class="illustration-display">
                <div class="illustration-emoji">${emoji}</div>
                <h3 class="illustration-word">${word.word}</h3>
                <p class="illustration-desc">Visual memory aid for "${word.word}"</p>
            </div>
        `;
    }
};

// AI Features (Basic)
const AIFeatures = {
    generateExample(word) {
        // Simple example generation (in real app, use AI API)
        return `"The ${word.word} of the situation was immediately apparent to all observers."`;
    },
    suggestRelated(word) {
        // Simple related word suggestion
        const related = wordsDatabase.filter(w => 
            w.word !== word.word && 
            (w.partOfSpeech === word.partOfSpeech || 
             w.definition.toLowerCase().includes(word.word.toLowerCase().slice(0, 4)))
        ).slice(0, 3);
        return related.map(w => w.word);
    },
    adaptDifficulty(performance) {
        // Adaptive difficulty based on performance
        if (performance > 0.8) return 'advanced';
        if (performance > 0.5) return 'intermediate';
        return 'beginner';
    }
};

// Update displayWord to include new features
const originalDisplayWord = displayWord;
displayWord = function(word, idx, animate) {
    originalDisplayWord(word, idx, animate);
    
    // Add frequency badge
    const freq = FrequencyManager.getFrequency(word.word);
    const freqEl = document.getElementById('frequencyBadge');
    if (freqEl) {
        freqEl.textContent = `📊 ${freq.charAt(0).toUpperCase() + freq.slice(1)}`;
        freqEl.title = `Word frequency: ${freq}`;
    }
    
    // Add word length
    const lengthEl = document.getElementById('wordLength');
    if (!lengthEl && document.querySelector('.word-meta')) {
        const meta = document.querySelector('.word-meta');
        const len = document.createElement('span');
        len.id = 'wordLength';
        len.className = 'word-length';
        len.textContent = `${word.word.length} letters`;
        meta.appendChild(len);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // Initialize new features
    SwipeManager.init();
    LanguageManager.init();
    
    // Calendar
    document.getElementById('calendarBtn')?.addEventListener('click', () => {
        closePanels();
        CalendarManager.render();
        document.getElementById('calendarPanel').style.display = 'block';
        document.getElementById('wordCard').style.display = 'none';
    });
    document.getElementById('prevMonthBtn')?.addEventListener('click', () => {
        CalendarManager.currentMonth--;
        if (CalendarManager.currentMonth < 0) {
            CalendarManager.currentMonth = 11;
            CalendarManager.currentYear--;
        }
        CalendarManager.render();
    });
    document.getElementById('nextMonthBtn')?.addEventListener('click', () => {
        CalendarManager.currentMonth++;
        if (CalendarManager.currentMonth > 11) {
            CalendarManager.currentMonth = 0;
            CalendarManager.currentYear++;
        }
        CalendarManager.render();
    });
    
    // Journal
    document.getElementById('journalBtn')?.addEventListener('click', () => {
        closePanels();
        JournalManager.render(getWord(currentDayIndex).word);
        document.getElementById('journalPanel').style.display = 'block';
        document.getElementById('wordCard').style.display = 'none';
    });
    document.getElementById('saveJournalBtn')?.addEventListener('click', () => {
        const text = document.getElementById('journalText').value.trim();
        if (text) {
            JournalManager.saveEntry(getWord(currentDayIndex).word, text);
            document.getElementById('journalText').value = '';
            JournalManager.render(getWord(currentDayIndex).word);
            showNotification('Journal entry saved!');
        }
    });
    
    // Export
    document.getElementById('exportBtn')?.addEventListener('click', () => {
        closePanels();
        document.getElementById('exportPanel').style.display = 'block';
        document.getElementById('wordCard').style.display = 'none';
    });
    document.getElementById('exportPDFBtn')?.addEventListener('click', () => ExportManager.exportPDF());
    document.getElementById('exportAnkiBtn')?.addEventListener('click', () => ExportManager.exportAnki());
    document.getElementById('exportCSVBtn')?.addEventListener('click', () => ExportManager.exportCSV());
    document.getElementById('exportJSONBtn')?.addEventListener('click', () => ExportManager.exportJSON());
    
    // Journal entry button
    document.getElementById('journalEntryBtn')?.addEventListener('click', () => {
        closePanels();
        JournalManager.render(getWord(currentDayIndex).word);
        document.getElementById('journalPanel').style.display = 'block';
        document.getElementById('wordCard').style.display = 'none';
    });
    
    // Games panel
    document.getElementById('gamesPanel')?.addEventListener('click', (e) => {
        if (e.target.id === 'wordAssociationBtn') GamesManager.wordAssociation();
        if (e.target.id === 'synonymMatchBtn') GamesManager.synonymMatch();
        if (e.target.id === 'wordLadderBtn') GamesManager.wordLadder();
    });
    
    // Learning path
    document.getElementById('learningPathPanel')?.addEventListener('click', () => {
        LearningPathManager.render();
    });
    
    // Leaderboard
    document.getElementById('leaderboardPanel')?.addEventListener('click', () => {
        LeaderboardManager.render();
    });
    
    // Submissions
    document.getElementById('submitWordBtn')?.addEventListener('click', () => SubmissionsManager.submit());
    
    // Discussions
    document.getElementById('postDiscussionBtn')?.addEventListener('click', () => {
        const text = document.getElementById('discussionText')?.value.trim();
        if (text) {
            DiscussionsManager.post(getWord(currentDayIndex).word, text);
            document.getElementById('discussionText').value = '';
        }
    });
    
    // Theme variants
    document.querySelectorAll('.theme-variant-btn').forEach(btn => {
        btn.addEventListener('click', () => EnhancedThemeManager.setTheme(btn.dataset.theme));
    });
    
    // Calendar navigation
    document.getElementById('prevMonthBtn')?.addEventListener('click', () => {
        CalendarManager.currentMonth--;
        if (CalendarManager.currentMonth < 0) {
            CalendarManager.currentMonth = 11;
            CalendarManager.currentYear--;
        }
        CalendarManager.render();
    });
    document.getElementById('nextMonthBtn')?.addEventListener('click', () => {
        CalendarManager.currentMonth++;
        if (CalendarManager.currentMonth > 11) {
            CalendarManager.currentMonth = 0;
            CalendarManager.currentYear++;
        }
        CalendarManager.render();
    });
    
    // Pronunciation practice
    document.getElementById('practicePronounceBtn')?.addEventListener('click', () => {
        if (PronunciationPractice.mediaRecorder && PronunciationPractice.mediaRecorder.state === 'recording') {
            PronunciationPractice.stop();
        } else {
            PronunciationPractice.start();
        }
    });
    
    // Share image
    document.getElementById('shareImageBtn')?.addEventListener('click', () => {
        ShareImageGenerator.generate(getWord(currentDayIndex));
    });
    
    // Copy word
    document.getElementById('copyWordBtn')?.addEventListener('click', () => {
        navigator.clipboard.writeText(getWord(currentDayIndex).word);
        showNotification('Word copied!');
    });
    
    // More examples
    document.getElementById('moreExamplesBtn')?.addEventListener('click', () => {
        const container = document.getElementById('additionalExamples');
        container.style.display = container.style.display === 'none' ? 'block' : 'none';
        if (container.style.display === 'block') {
            const word = getWord(currentDayIndex);
            container.innerHTML = `<p class="example">"${word.example}"</p><p class="example">"Another example using ${word.word}..."</p>`;
        }
    });
    
    // Etymology visualization
    document.getElementById('visualizeEtymologyBtn')?.addEventListener('click', () => {
        const tree = document.getElementById('etymologyTree');
        tree.style.display = tree.style.display === 'none' ? 'block' : 'none';
        if (tree.style.display === 'block') {
            const word = getWord(currentDayIndex);
            tree.innerHTML = `<div class="etymology-visual">${word.etymology.split(' ').slice(0, 5).join(' → ')}</div>`;
        }
    });
    
    // Games
    document.getElementById('wordAssociationBtn')?.addEventListener('click', () => GamesManager.wordAssociation());
    document.getElementById('synonymMatchBtn')?.addEventListener('click', () => GamesManager.synonymMatch());
    document.getElementById('wordLadderBtn')?.addEventListener('click', () => GamesManager.wordLadder());
    
    // Learning path
    document.getElementById('closeLearningPathBtn')?.addEventListener('click', closePanels);
    
    // Submissions
    document.getElementById('submitWordBtn')?.addEventListener('click', () => SubmissionsManager.submit());
    
    // Discussions
    document.getElementById('postDiscussionBtn')?.addEventListener('click', () => {
        const text = document.getElementById('discussionText').value.trim();
        if (text) {
            DiscussionsManager.post(getWord(currentDayIndex).word, text);
            document.getElementById('discussionText').value = '';
        }
    });
    
    // Theme variants
    document.querySelectorAll('.theme-variant-btn').forEach(btn => {
        btn.addEventListener('click', () => EnhancedThemeManager.setTheme(btn.dataset.theme));
    });
    
    // Close all new panels
    ['closeCalendarBtn', 'closeJournalBtn', 'closeExportBtn', 'closeGamesBtn', 'closeLearningPathBtn', 'closeLeaderboardBtn', 'closeSubmissionsBtn', 'closeDiscussionsBtn', 'closeThemesBtn'].forEach(id => {
        document.getElementById(id)?.addEventListener('click', closePanels);
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
