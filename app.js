// Get today's date and calculate day index
function getDayIndex() {
    const today = new Date();
    const startDate = new Date('2024-01-01'); // Reference date
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Get word for a specific day index
function getWordForDay(dayIndex) {
    return wordsDatabase[dayIndex % wordsDatabase.length];
}

// Display word information
function displayWord(wordData) {
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
    const shareText = `Word of the Day: ${wordData.word}\n\n${wordData.pronunciation}\n\nDefinition: ${wordData.definition}\n\nExample: ${wordData.example}\n\nEtymology: ${wordData.etymology}`;
    
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
            alert('Word copied to clipboard!');
        }).catch(err => {
            console.log('Error copying:', err);
            prompt('Copy this text:', text);
        });
    } else {
        prompt('Copy this text:', text);
    }
}

// Initialize the app
let currentDayIndex = getDayIndex();
let currentDate = new Date();

function initializeApp() {
    // Display today's word
    const todayWord = getWordForDay(currentDayIndex);
    displayWord(todayWord);
    updateDateDisplay(currentDate);
    
    // Set up navigation buttons
    document.getElementById('prevWordBtn').addEventListener('click', () => {
        currentDayIndex--;
        currentDate.setDate(currentDate.getDate() - 1);
        const word = getWordForDay(currentDayIndex);
        displayWord(word);
        updateDateDisplay(currentDate);
    });
    
    document.getElementById('nextWordBtn').addEventListener('click', () => {
        currentDayIndex++;
        currentDate.setDate(currentDate.getDate() + 1);
        const word = getWordForDay(currentDayIndex);
        displayWord(word);
        updateDateDisplay(currentDate);
    });
    
    // Set up share button
    document.getElementById('shareBtn').addEventListener('click', () => {
        const currentWord = getWordForDay(currentDayIndex);
        shareWord(currentWord);
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', initializeApp);

