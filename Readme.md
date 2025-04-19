# Adex React PDF Viewer

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

## 🚀 Installation

With NPM:

```bash
npm install adex-react-pdf-viewer
```

For yarn:

```
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
  annotations: true      // Annotations functionality
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

```sh
git clone https://github.com/abhibagul/Adex-React-PDF-Viewer.git
cd Adex-React-PDF-Viewer
npm install
```

Build the package:

```sh
npm run build
```

to link and use in the project:

```sh
npm link
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Created By

AdexViewer is created with ❤️ by [Abhishek Bagul](https://github.com/abhibagul/).
