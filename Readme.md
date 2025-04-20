# Adex React PDF Viewer v1.0.8

A powerful, feature-rich PDF viewer component for React applications. Built on top of `react-pdf`, AdexViewer provides a complete solution for viewing, annotating, and interacting with PDF documents in your web applications.

![AdexViewer Screenshot](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAORxaZuLl6l7ICdLsNZYs5I1GLmViazmsZKBSwCcMtXBWJjH_juerbO4bvf8mKbQfAD1cuBwlanOKT6xW8fiG-oftf2MEYidzdibdHkvKkd_b2IZ7y2cdd3nN4nVZGSMoR7ICVBx_gumh0Yii1uzC7Z_5ViTDHRt7QmUr6QgtHHTF3-nJ2DPV5b6tLjgv/s1600/adex2.jpg)

## 🌐 Live Demo

🔗 **[View Adex Viewer Here](https://abhibagul.github.io/Adex-React-PDF-Viewer/)**

## ✨ Features

- 📄 **Document Navigation**: Page thumbnails, navigation controls, and smooth scrolling
- 🔍 **Search**: Full-text search with result highlighting and navigation
- 📑 **Bookmarks & Outline**: Support for document outlines and custom bookmarks
- ✏️ **Annotations**: Add notes, highlights, and drawings to your documents
- 🔄 **Rotation & Zoom**: Rotate pages and adjust zoom levels
- 📱 **Responsive Design**: Optimized for both desktop and mobile devices
- 🖨️ **Print Support**: Print documents with customizable options
- 🌙 **Text Selection**: Enable or disable text selection and copying
- 🔗 **Download**: Direct download option for PDF files
- 🖼️ **Fullscreen Mode**: Immersive viewing experience
- 📊 **Document Info**: View and display PDF metadata
- 🌍 **Internationalization**: Support for multiple languages with easy switching
- 🎨 Themes: Multiple built-in themes to customize the appearance

## 🚀 Installation

With NPM:

```bash
npm install adex-react-pdf-viewer
```

For yarn:

```plaintext
yarn add adex-react-pdf-viewer
```

## 📖 Basic Usage

```javascriptreact
import React from "react";
import AdexViewer from "adex-react-pdf-viewer";
import "adex-react-pdf-viewer/index.css"; // Import styles

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <AdexViewer
        data={{ url: "https://example.com/sample.pdf" }}
      />
    </div>
  );
}

export default App;
```

## 🛠️ Props

| Prop            | Type    | Description                                        | Default    |
| --------------- | ------- | -------------------------------------------------- | ---------- |
| `data`          | object  | `{ url: string }` - URL of the PDF file to display | _Required_ |
| `credits`       | boolean | Show or hide attribution credits                   | `true`     |
| `showSidebar`   | boolean | Show or hide the sidebar on initial load           | `false`    |
| `showToolbar`   | boolean | Show or hide the toolbar                           | `true`     |
| `showControls`  | object  | Configure which controls to display (see below)    | See below  |
| `defaultValues` | object  | Set default zoom, page, and fullscreen state       | See below  |
| `responsive`    | object  | Configure responsive behavior                      | See below  |
| `textOptions`   | object  | Configure text selection and copying               | See below  |
| `printOptions`  | object  | Configure print behavior                           | See below  |
| `localization`  | array   | Configure language options (see below)             | See below  |
| `theme`         | string  | Set the theme for the viewer (see themes section)  | See below  |

### `showControls` Object

```javascriptreact
showControls: {
  navigation: true,      // Page navigation controls
  zoom: true,            // Zoom controls
  fullscreen: true,      // Fullscreen button
  download: true,        // Download button
  info: true,            // Document info button
  sidebarButton: true,   // Sidebar toggle button
  rotation: true,        // Page rotation controls
  print: true,           // Print button
  search: true,          // Search functionality
  bookmarks: true,       // Bookmarks functionality
  annotations: true,     // Annotations functionality
  localization: true     // Language selection button
}
```

### `defaultValues` Object

```javascriptreact
defaultValues: {
  zoom: 1.25,            // Initial zoom level (0.5 to 3)
  page: 1,               // Initial page number
  fullscreen: false      // Start in fullscreen mode
}
```

### `textOptions` Object

```javascriptreact
textOptions: {
  enableSelection: true,   // Allow text selection
  enableCopy: true         // Allow text copying
}
```

### `printOptions` Object

```javascriptreact
printOptions: {
  printBackground: true,     // Print background graphics
  pageRangeEnabled: true     // Enable page range selection
}
```

### `localization` Array

The `localization` prop accepts an array of `LocalizationOptions` objects that define the available languages for the viewer interface. Each object has the following properties:

```javascriptreact
localization: [
  { locale: "en", title: "English", active: true },
  { locale: "es", title: "Español", active: false },
  { locale: "fr", title: "Français", active: false },
  // ... more languages
]
```

Each language object contains:

- `locale`: The language code (used for loading translation files)
- `title`: The display name of the language
- `active`: Whether this language is active by default

## 🎨 Themes

AdexViewer comes with multiple built-in themes to customize the appearance of the viewer.

![AdexViewer Screenshot](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimInOB9qw5fBpeABbWySFNKAv0U7-T8dKmZ2F9O7ghA2f-rdvuYgN8wqIfG3rkSuF3F8K420xJdvKcpskS-lfthh6kkS_XjOEjJryjEWP-y1Ig_Q0ILVjSGvZaL9xxwV4sS9NDFDqt2_QLNvZvzQrxO_m1WP92jYgxet-cmO2n50VqAO2W8B5sD0Q-ffld/s1600/adex-react-pdf-viewer.webp)

### Using Themes

To use a theme, you need to:

1. Import the theme CSS file:

```javascript
import "adex-react-pdf-viewer/themes/blue-theme.css";
```

2. Provide the theme name to the component:

```javascriptreact
<AdexViewer
  data={{ url: "https://pdfobject.com/pdf/pdf_open_parameters_acro8.pdf" }}
  theme="blue-theme"
/>
```

### Available Theme Options

The following themes are available:

| Theme Name              | Description                                                                                   |
| ----------------------- | --------------------------------------------------------------------------------------------- |
| `"default-theme"`       | The standard theme with a clean, neutral design suitable for most applications                |
| `"blue-theme"`          | A modern theme with blue accents and a professional appearance                                |
| `"dark-theme"`          | Dark background with light text, ideal for low-light environments and reducing eye strain     |
| `"minimal-theme"`       | A simplified interface with reduced visual elements for a distraction-free reading experience |
| `"corporate-theme"`     | Formal design with subtle colors suitable for business and enterprise applications            |
| `"professional-theme"`  | Polished interface with refined controls and balanced color scheme                            |
| `"high-contrast-theme"` | Enhanced contrast between elements for improved accessibility and readability                 |
| `"night-mode-theme"`    | Dark background with optimized colors for nighttime reading                                   |
| `"sepia-theme"`         | Warm, yellowish-brown tones that reduce eye strain for extended reading sessions              |
| `"retro-theme"`         | Nostalgic design inspired by classic windown 95 style document viewers                        |
| `"adobe-theme"`         | Inspired by Adobe's PDF viewer interface for users familiar with that environment             |
| `"microsoft-theme"`     | Design elements reminiscent of Microsoft's document viewing applications                      |
| `"acrobat-theme"`       | Styled after Adobe Acrobat's interface for a familiar experience                              |

## 🌍 Internationalization

AdexViewer supports multiple languages through its localization system. The component will:

1. Load language files from the `/locales/{locale}.json` directory
2. Allow users to switch languages via the language selector
3. Remember the user's language preference in localStorage

### Supported Languages

The viewer comes with support for 35+ languages including:

| Language Code | Language Name           | Language Code | Language Name                 | Language Code | Language Name                  |
| ------------- | ----------------------- | ------------- | ----------------------------- | ------------- | ------------------------------ |
| en            | English                 | ar            | العربية (Arabic)              | bg            | Български (Bulgarian)          |
| bn            | বাংলা (Bengali)         | ca            | Català (Catalan)              | cs            | Čeština (Czech)                |
| de            | Deutsch (German)        | el            | Ελληνικά (Greek)              | es            | Español (Spanish)              |
| fi            | Suomi (Finnish)         | fr            | Français (French)             | he            | עברית (Hebrew)                 |
| hi            | हिन्दी (Hindi)          | id            | Bahasa Indonesia              | it            | Italiano (Italian)             |
| ja            | 日本語 (Japanese)       | ko            | 한국어 (Korean)               | mr            | मराठी (Marathi)                |
| ms            | Bahasa Melayu           | nl            | Nederlands (Dutch)            | no            | Norsk (Norwegian)              |
| pa            | ਪੰਜਾਬੀ (Punjabi)        | pl            | Polski (Polish)               | pt            | Português                      |
| ro            | Română (Romanian)       | ru            | Русский (Russian)             | sv            | Svenska (Swedish)              |
| sw            | Kiswahili (Swahili)     | ta            | தமிழ் (Tamil)                 | te            | తెలుగు (Telugu)                |
| th            | ไทย (Thai)              | tr            | Türkçe (Turkish)              | uk            | Українська (Ukrainian)         |
| vi            | Tiếng Việt (Vietnamese) | zh-CN         | 简体中文 (Simplified Chinese) | zh_TW         | 繁體中文 (Traditional Chinese) |

## 🎨 Annotations

AdexViewer supports three types of annotations:

1. **Notes**: Add floating note markers with custom text
2. **Highlights**: Highlight text selections with custom colors
3. **Drawings**: Create freehand drawings on any page

Annotations are automatically saved to localStorage and persist between sessions.

## 🔍 Search Functionality

The search feature allows users to:

- Search for text across the entire document
- Navigate between search results
- See highlighted matches with context
- View a list of all matches with page numbers

## 📑 Bookmarks and Document Outline

AdexViewer supports both:

- **Document Outline**: Displays the PDF's built-in table of contents
- **Custom Bookmarks**: Allows users to add their own bookmarks to specific pages

## 📱 Mobile Support

The viewer is fully responsive and includes:

- Simplified interface on smaller screens
- Optimized performance for mobile devices

## 🖥️ Browser Compatibility

AdexViewer works in all modern browsers:

- Chrome, Firefox, Safari, Edge (latest versions)
- IE11 is not supported

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

#### 🛠️ Development

Clone the repository:

```shellscript
git clone https://github.com/abhibagul/Adex-React-PDF-Viewer.git
cd Adex-React-PDF-Viewer
npm install
```

Build the package:

```shellscript
npm run build
```

to link and use in the project:

```shellscript
npm link
```

setup the react project and link package using:

```shellscript
npm link adex-react-pdf-viewer
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Created By

AdexViewer is created with ❤️ by [Abhishek Bagul](https://github.com/abhibagul/).
