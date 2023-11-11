// import { createPopper } from '@popperjs/core/lib/popper-lite.js';
// import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
// import flip from '@popperjs/core/lib/modifiers/flip.js';

// const button = document.querySelector('#button');
// const tooltip = document.querySelector('#tooltip');

// createPopper(button, tooltip, {
//   modifiers: [preventOverflow, flip],
// })

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, options)
var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, {
  boundary: document.body // or document.querySelector('#boundary')
})