
# 🌍 Blissful Beauty - Multi-Language Skincare SPA

A sophisticated, multi-language single-page application (SPA) built with React, featuring comprehensive internationalization (i18n) and localization (l10n) support, including right-to-left (RTL) languages.

## 🚀 Live Demo

**Deployed URL:** [https://dhanasirikoppisetti.github.io/global-spa-project/]

## ✨ Features

### Core Functionality
- ✅ **Multi-Language Support**: English, Spanish, Arabic, and Japanese
- ✅ **RTL Support**: Complete right-to-left layout adaptation for Arabic
- ✅ **Language Switching**: Seamless language switching with dropdown menu
- ✅ **Language Persistence**: Selected language saved in localStorage
- ✅ **Auto-Detection**: Automatically detects browser language on first visit
- ✅ **Locale-Based Routing**: URL structure includes locale (`/:locale/:page`)

### Localization Features
- 📅 **Date Formatting**: Dates formatted according to user's locale
- 🔢 **Number Formatting**: Currency and numbers with correct separators
- ⏰ **Relative Time**: Dynamic relative time display (e.g., "2 hours ago")
- 🌐 **Dynamic Content Translation**: All UI elements and product descriptions translated

### Technical Implementation
- ⚡ **Performance Optimized**: Translations bundled with the app for fast loading
- 🎨 **CSS Logical Properties**: Layout automatically adapts for LTR/RTL
- 🔍 **SEO Optimized**: Dynamic `lang` and `dir` attributes, proper meta tags
- ♿ **Accessible**: ARIA labels and semantic HTML
- 📱 **Responsive Design**: Works seamlessly on all device sizes

## 🛠️ Tech Stack

- **Framework**: React 18
- **Routing**: React Router v6
- **Internationalization**: i18next, react-i18next
- **Localization**: Intl API (native browser API)
- **Language Detection**: i18next-browser-languagedetector
- **SEO**: react-helmet-async
- **Styling**: Inline CSS with CSS logical properties

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository:**
git clone <https://github.com/Dhanasirikoppisetti/global-spa-project>
cd global-spa-project


2. **Install dependencies:**
npm install

text

3. **Start the development server:**
npm start



The app will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```bash
global-spa-project/
├── public/
│ ├── index.html
│ ├── favicon.ico
│ ├── manifest.json
│ └── locales/ # Original translation files (not used in production)
│ ├── en/
│ │ ├── common.json
│ │ └── product.json
│ ├── es/
│ ├── ar/
│ └── ja/
│
├── src/
│ ├── components/
│ │ ├── Header.js # Navigation header with language switcher
│ │ ├── LanguageSwitcher.js # Language dropdown component
│ │ ├── Layout.js # Main layout wrapper
│ │ ├── ProductCard.js # Product display card
│ │ └── SEOHead.js # Dynamic SEO meta tags
│ │
│ ├── hooks/
│ │ └── useLocaleInfo.js # Custom hook for locale information
│ │
│ ├── locales/ # Translation files (bundled with app)
│ │ ├── en/
│ │ │ ├── common.json # English UI translations
│ │ │ └── product.json # English product data
│ │ ├── es/
│ │ │ ├── common.json
│ │ │ └── product.json
│ │ ├── ar/
│ │ │ ├── common.json
│ │ │ └── product.json
│ │ └── ja/
│ │ ├── common.json
│ │ └── product.json
│ │
│ ├── pages/
│ │ ├── Home.js # Home page component
│ │ └── Products.js # Products catalog page
│ │
│ ├── services/
│ │ └── localeFormatter.js # Locale formatting utilities (dates, currency)
│ │
│ ├── App.js # Main app component with routing
│ ├── App.css # Global app styles
│ ├── i18n.js # i18next configuration
│ ├── index.js # App entry point
│ └── index.css # Global styles
│
├── Screenshorts/ # Application screenshots
│ ├── en-home.png
│ ├── en-products.png
│ ├── es-home.png
│ ├── ar-home.png
│ ├── ar-products.png
│ ├── ja-products.png
│ ├── mobile-eng.png
│ └── mobile-ar.png
│
├── Demo_video.mp4 # Demo video
├── package.json # Dependencies and scripts
├── package-lock.json
└── README.md # Project documentation
```
## 🌐 Supported Languages

| Language | Code | Direction | Locale |
|----------|------|-----------|--------|
| English  | `en` | LTR       | en-US  |
| Spanish  | `es` | LTR       | es-ES  |
| Arabic   | `ar` | RTL       | ar-SA  |
| Japanese | `ja` | LTR       | ja-JP  |

## 📝 Usage

### Accessing Different Languages

- **English**: `http://localhost:3000/en/home`
- **Spanish**: `http://localhost:3000/es/home`
- **Arabic**: `http://localhost:3000/ar/home`
- **Japanese**: `http://localhost:3000/ja/home`

### Language Switcher

Use the dropdown menu in the top-right corner to switch between languages. The selected language is persisted in localStorage and will be remembered on subsequent visits.

## 🧪 Testing

Run tests (if configured)
npm test

Run tests in watch mode
npm test -- --watch

text

## 🏗️ Build for Production

Create optimized production build
npm run build

The build folder will contain the production-ready files
text

## 🚀 Deployment

The app can be deployed to any static hosting service:

### Deploy to Netlify
npm run build

Drag and drop the 'build' folder to Netlify
text

### Deploy to Vercel
npm run build
vercel --prod

text

### Deploy to GitHub Pages
npm install gh-pages --save-dev

Add to package.json: "homepage": "https://dhanasirikoppisetti.github.io/global-spa-project/"
npm run build
npm run deploy



## 🔧 Configuration

### Adding a New Language

1. **Add translations** in `src/locales/[lang-code]/`:
   - Create `common.json` and `product.json`

2. **Update `src/i18n.js`**:
// Add imports
import newLangCommon from './locales/newlang/common.json';
import newLangProduct from './locales/newlang/product.json';

// Add to LANGUAGES array
{ code: "newlang", locale: "xx-XX", dir: "ltr", name: "Language Name" }

// Add to resources
newlang: {
common: newLangCommon,
product: newLangProduct
}



### Modifying Translations

Edit the JSON files in `src/locales/[language-code]/`:
- `common.json` - UI text, navigation, common elements
- `product.json` - Product-specific content

## 📊 Performance

- ✅ Translations bundled with app (no HTTP requests)
- ✅ Lazy loading with React.Suspense
- ✅ Optimized re-renders with React hooks
- ✅ Minimal bundle size with tree-shaking

## ♿ Accessibility

- ARIA labels for navigation
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## 🐛 Known Issues

None at this time. Please report issues on GitHub.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Your Name**
- GitHub: [Dhanasiri](https://github.com/dhanasiri)
- Email: koppisettidhanasiri@gmail.com
## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [i18next](https://www.i18next.com/)
- [React Router](https://reactrouter.com/)
- Product images from [Pinterest](https://pinterest.com)

---

**Made with ❤️ for the global audience**
