# Adex React PDF Viewer

A simple and lightweight PDF viewer for React apps. Built using [`react-pdf`](https://github.com/wojtekmaj/react-pdf), it provides an easy way to display PDFs with minimal setup.

<img alt="Adex React PDF Viewer" width="100%" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBLIpbk4gScb_eIyaMDWdXnOUX_ofix9a8zssvT103n-yjiwXl2pn3641lEy661cACqsW-B4krIA2siMDlnRjPBYzWojHQUAX16g5V5nGYygxYHupyDrvq2N0l7VbrBDiw5wszOcMq77L7kg6jWATIDPFMYbZJaISVDPT0Ksc5j-j_qaASjeY6Oh4y3jDn/s1600/screenshot.jpg"/>

## ✨ Features

✅ Easy to use with minimal setup  
✅ Supports remote PDF URLs  
✅ No extra dependencies required  
✅ Lightweight and fast

---

## 🌐 Live Demo

🔗 **[View Demo Here](https://abhibagul.github.io/Adex-React-PDF-Viewer/)**

---

## 🖼️ Screenshot

![PDF Viewer Screenshot](./screenshot.png)

---

## 📞 Installation

Install via npm:

```sh
npm i adex-react-pdf-viewer
```

or with yarn:

```sh
yarn add adex-react-pdf-viewer
```

---

## 🚀 Usage

Import and use the `AdexViewer` component in your React app:

```jsx
import React from "react";
import { AdexViewer } from "adex-react-pdf-viewer";
import "adex-react-pdf-viewer/index.css";

function App() {
  return (
    <div>
      <h1>PDF Viewer</h1>
      <AdexViewer
        data={{ url: "https://pdfobject.com/pdf/sample.pdf" }}
        credits={false}
      />
    </div>
  );
}

export default App;
```

---

## 📚 Props

| Prop      | Type    | Description                              | Default    |
| --------- | ------- | ---------------------------------------- | ---------- |
| `data`    | object  | `{ url: "PDF_URL" }` - The PDF file URL. | _Required_ |
| `credits` | boolean | Show or hide credits in the viewer.      | `true`     |

---

## 🛠️ Development

Clone the repository:

```sh
git clone https://github.com/abhibagul/Adex-React-PDF-Viewer.git
cd Adex-React-PDF-Viewer
npm install
```

Run the development server:

```sh
npm start
```

Build the package:

```sh
npm run build
```

---

## 💡 Contributing

Contributions are welcome! Feel free to submit issues and pull requests on [GitHub](https://github.com/abhibagul/Adex-React-PDF-Viewer).

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
