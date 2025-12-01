// ═══════════════════════════════════════════════════════════════
// THE ANTIQUARIAN'S STUDY — Word of the Day
// ═══════════════════════════════════════════════════════════════

// Get today's date and calculate day index
function getDayIndex() {
    const today = new Date();
    const startDate = new Date('2024-01-01');
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Get word for a specific day index
function getWordForDay(dayIndex) {
    // Handle negative indices by wrapping around
    const len = wordsDatabase.length;
    const normalizedIndex = ((dayIndex % len) + len) % len;
    return wordsDatabase[normalizedIndex];
}

// Display word information with optional animation
function displayWord(wordData, dayIndex, animate = false) {
    const card = document.getElementById('wordCard');
    
    if (animate) {
        card.classList.add('transitioning');
        setTimeout(() => {
            updateWordContent(wordData, dayIndex);
            setTimeout(() => {
                card.classList.remove('transitioning');
            }, 200);
        }, 200);
    } else {
        updateWordContent(wordData, dayIndex);
    }
}

// Update the DOM with word content
function updateWordContent(wordData, dayIndex) {
    // Calculate display number (1-based, wraps around)
    const displayNumber = ((dayIndex % wordsDatabase.length) + wordsDatabase.length) % wordsDatabase.length + 1;
    
    document.getElementById('wordNumber').textContent = displayNumber;
    document.getElementById('word').textContent = wordData.word;
    document.getElementById('pronunciation').textContent = wordData.pronunciation;
    document.getElementById('definition').textContent = wordData.definition;
    document.getElementById('example').textContent = wordData.example;
    document.getElementById('etymology').textContent = wordData.etymology;
    document.getElementById('partOfSpeech').textContent = wordData.partOfSpeech;
}

// Format date for display
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

// Update date display
function updateDateDisplay(date) {
    document.getElementById('dateDisplay').textContent = formatDate(date);
}

// Share functionality
function shareWord(wordData) {
    const shareText = `✦ Word of the Day ✦

${wordData.word}
${wordData.pronunciation}

Definition: ${wordData.definition}

"${wordData.example}"

Etymology: ${wordData.etymology}

— The Antiquarian's Study`;
    
    if (navigator.share) {
        navigator.share({
            title: `Word of the Day: ${wordData.word}`,
            text: shareText
        }).catch(err => {
            console.log('Error sharing:', err);
            fallbackShare(shareText);
        });
    } else {
        fallbackShare(shareText);
    }
}

// Fallback share method (copy to clipboard)
function fallbackShare(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Word copied to clipboard!');
        }).catch(err => {
            console.log('Error copying:', err);
            prompt('Copy this text:', text);
        });
    } else {
        prompt('Copy this text:', text);
    }
}

// Show a brief notification
function showNotification(message) {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: #d4a373;
            color: #0a0a0a;
            padding: 0.75rem 1.5rem;
            font-family: 'Cormorant Garamond', serif;
            font-size: 0.95rem;
            letter-spacing: 0.05em;
            z-index: 10000;
            opacity: 0;
            transition: all 0.4s ease;
        `;
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(-50%) translateY(0)';
        notification.style.opacity = '1';
    });
    
    // Animate out after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(100px)';
        notification.style.opacity = '0';
    }, 2500);
}

// Initialize the app
let currentDayIndex = getDayIndex();
let currentDate = new Date();

function initializeApp() {
    // Display today's word
    const todayWord = getWordForDay(currentDayIndex);
    displayWord(todayWord, currentDayIndex);
    updateDateDisplay(currentDate);
    
    // Set up navigation buttons
    document.getElementById('prevWordBtn').addEventListener('click', () => {
        currentDayIndex--;
        currentDate.setDate(currentDate.getDate() - 1);
        const word = getWordForDay(currentDayIndex);
        displayWord(word, currentDayIndex, true);
        updateDateDisplay(currentDate);
    });
    
    document.getElementById('nextWordBtn').addEventListener('click', () => {
        currentDayIndex++;
        currentDate.setDate(currentDate.getDate() + 1);
        const word = getWordForDay(currentDayIndex);
        displayWord(word, currentDayIndex, true);
        updateDateDisplay(currentDate);
    });
    
    // Set up share button
    document.getElementById('shareBtn').addEventListener('click', () => {
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
}

// Run when page loads
document.addEventListener('DOMContentLoaded', initializeApp);
