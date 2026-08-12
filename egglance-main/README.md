# Planta - AR Eggplant Disease Detection

**Planta** is an augmented reality-based disease detection system for eggplants. It helps farmers identify and manage crop diseases in real-time using AI and computer vision.

## Features

- **Real-time AR Detection** - Scan eggplant leaves with your phone camera to identify diseases
- **Offline Capability** - Detection works even without internet connection
- **Confidence Scores** - Know how confident the system is in its diagnosis
- **Scan History** - Track disease patterns across your field over time
- **Field-Ready** - Designed for use in agricultural environments

## Supported Diseases

- Leaf Spot
- White Mold
- Wilt
- And more...

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- Modern web browser or Android device

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/egglance.git
cd egglance

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Then open your browser to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Deployment

This project can be deployed to various platforms:

- **Vercel** (recommended for static hosting)
- **GitHub Pages**
- **Netlify**
- **Your own server**

## Android App

An Android APK is included in the assets folder. Download the latest version from the releases section.

## Project Structure

```
egglance-main/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # Styling and responsive design
├── package.json        # Project configuration
├── .gitignore          # Git ignore rules
├── assets/
│   ├── leaf.jpg        # Demo image
│   └── app-demo.apk    # Android application
└── README.md           # This file
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Mobile Support

- Android 8.0+ (via APK)
- iOS (via web app)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

Developed using YOLO v26 for disease detection.

## Support

For issues and questions, please open an issue on GitHub.

## Citation

If you use Planta in your research, please cite:

```
Planta: AR Eggplant Disease Detection System (2026)
```

---

**Note:** Always follow local agricultural guidelines and consult with agricultural experts when making crop management decisions.
