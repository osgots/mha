/* =========================================
   MY HERO ACADEMIA UNIVERSE - AUDIO PLAYER
========================================= */

'use strict';

class AudioPlayer {
  constructor() {
    this.audio = document.querySelector('#bgMusic');
    this.toggleBtn = document.querySelector('.music-toggle');
    this.volumeSlider = document.querySelector('#volumeControl');
    this.progressBar = document.querySelector('.music-progress');
    this.current...