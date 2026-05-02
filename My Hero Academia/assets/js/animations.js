/* =========================================
   MY HERO ACADEMIA UNIVERSE - ANIMATIONS JS
========================================= */

'use strict';

class AnimationController {
  constructor() {
    this.animatedElements = document.querySelectorAll(
      '.fade-in, .fade-in-up, .fade-in-left, .fade-in-right, .zoom-in, .reveal'
    );

    this.counters = document.querySelectorAll('[data-counter]');
    this.progressBars = document.querySelector...