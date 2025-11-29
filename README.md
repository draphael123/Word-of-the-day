# Word of the Day Website

A beautiful, modern website that displays a new interesting and fun word every day to help improve your vocabulary.

## Features

- **Daily Word Selection**: Each day displays a different word based on the date
- **Rich Word Information**: 
  - Word pronunciation
  - Definition
  - Example sentence
  - Etymology (word origin)
  - Part of speech
- **Navigation**: Browse previous and next words
- **Share Functionality**: Share words with others
- **Beautiful Design**: Modern, responsive UI with smooth animations
- **Mobile Friendly**: Works great on all device sizes

## Getting Started

### Option 1: Open Directly in Browser

1. Navigate to the `word-of-the-day` folder
2. Open `index.html` in your web browser
3. That's it! The website will work immediately.

### Option 2: Use a Local Server (Recommended)

For the best experience, especially if you plan to modify the code:

#### Using Python (if installed):
```bash
cd word-of-the-day
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

#### Using Node.js (if installed):
```bash
cd word-of-the-day
npx http-server
```
Then open the URL shown in the terminal (usually `http://localhost:8080`).

#### Using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## How It Works

- The website uses a date-based algorithm to select which word to display
- Each day gets a unique word from the database
- The same date will always show the same word
- You can navigate to previous/next days to see other words

## Customization

### Adding More Words

Edit `words.js` and add new word objects to the `wordsDatabase` array. Each word should have:
- `word`: The word itself
- `pronunciation`: How to pronounce it
- `definition`: What it means
- `example`: Example sentence
- `etymology`: Word origin/history
- `partOfSpeech`: noun, adjective, verb, etc.

### Changing the Design

Edit `styles.css` to customize colors, fonts, spacing, and layout. The CSS uses CSS variables (in `:root`) for easy theming.

### Modifying Behavior

Edit `app.js` to change how words are selected, how dates are calculated, or add new features.

## File Structure

```
word-of-the-day/
├── index.html      # Main HTML structure
├── styles.css      # Styling and design
├── words.js        # Word database
├── app.js          # Application logic
└── README.md       # This file
```

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Future Enhancements

Ideas for expanding the project:
- Add audio pronunciation
- Include word usage statistics
- Add a favorites/bookmark feature
- Create a quiz mode
- Add more words to the database
- Include word difficulty levels
- Add search functionality
- Create a mobile app version

## Publishing to a Live Website

Want to share your website with the world? Check out **[DEPLOYMENT.md](DEPLOYMENT.md)** for step-by-step instructions on publishing to:

- **Netlify** (Easiest - just drag and drop!)
- **GitHub Pages** (Free, great for learning)
- **Vercel** (Fast and professional)
- **Surge.sh** (Simple command line)
- **Firebase Hosting** (Google's platform)

**Quick Start:** The easiest way is to go to [netlify.com](https://www.netlify.com), sign up, and drag your `word-of-the-day` folder onto their dashboard. Your site will be live in seconds!

## License

Feel free to use and modify this project for personal or educational purposes.

Enjoy expanding your vocabulary! 📚✨

