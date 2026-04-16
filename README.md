# printable-graph-paper-js

Generate printable graph paper layouts, SVG grids, and coordinate systems in JavaScript.

[Live Demo → Printable Graph Paper](https://printablegraphpaper.app)

## Features

- Generate square grid graph paper (customizable spacing)
- Dot grid paper generation
- Isometric/triangular grid generation
- Hex grid paper generation
- SVG output for high-quality printing
- Customizable paper sizes (A4, Letter, etc.)
- Line weight and color options

## Installation

```bash
npm install printable-graph-paper-js
```

## Usage

```javascript
const { generateSquareGrid, generateDotGrid, generateIsometricGrid } = require('printable-graph-paper-js');

// Generate a square grid SVG
const svgGrid = generateSquareGrid({ spacing: 10, width: 210, height: 297 });
console.log(svgGrid); // SVG string ready to print

// Generate dot grid
const dotGrid = generateDotGrid({ spacing: 5, dotSize: 1, width: 210, height: 297 });
```

## Live Demo

Try the full-featured [Printable Graph Paper](https://printablegraphpaper.app) generator online.

## License

MIT
