/**
 * printable-graph-paper-js
 * Generate printable graph paper SVG layouts
 * Live demo: https://printablegraphpaper.app
 */

'use strict';

function generateSquareGrid(options = {}) {
  const { spacing = 10, width = 210, height = 297, color = '#b0b0b0', strokeWidth = 0.5 } = options;
  let lines = '';
  for (let x = 0; x <= width; x += spacing) {
    lines += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${color}" stroke-width="${strokeWidth}"/>`;
  }
  for (let y = 0; y <= height; y += spacing) {
    lines += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${color}" stroke-width="${strokeWidth}"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}mm" height="${height}mm" viewBox="0 0 ${width} ${height}">${lines}</svg>`;
}

function generateDotGrid(options = {}) {
  const { spacing = 5, dotSize = 1, width = 210, height = 297, color = '#b0b0b0' } = options;
  let dots = '';
  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {
      dots += `<circle cx="${x}" cy="${y}" r="${dotSize}" fill="${color}"/>`;
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}mm" height="${height}mm" viewBox="0 0 ${width} ${height}">${dots}</svg>`;
}

function generateIsometricGrid(options = {}) {
  const { spacing = 10, width = 210, height = 297, color = '#b0b0b0', strokeWidth = 0.5 } = options;
  const h = spacing * Math.sqrt(3) / 2;
  let lines = '';
  for (let y = 0; y <= height + spacing; y += h) {
    lines += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${color}" stroke-width="${strokeWidth}"/>`;
  }
  for (let x = -height; x <= width + height; x += spacing) {
    lines += `<line x1="${x}" y1="0" x2="${x + height}" y2="${height}" stroke="${color}" stroke-width="${strokeWidth}"/>`;
    lines += `<line x1="${x}" y1="${height}" x2="${x + height}" y2="0" stroke="${color}" stroke-width="${strokeWidth}"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}mm" height="${height}mm" viewBox="0 0 ${width} ${height}">${lines}</svg>`;
}

function getPaperDimensions(size = 'A4') {
  const sizes = {
    'A4': { width: 210, height: 297 },
    'A3': { width: 297, height: 420 },
    'Letter': { width: 216, height: 279 },
    'Legal': { width: 216, height: 356 }
  };
  return sizes[size] || sizes['A4'];
}

module.exports = {
  generateSquareGrid,
  generateDotGrid,
  generateIsometricGrid,
  getPaperDimensions
};
