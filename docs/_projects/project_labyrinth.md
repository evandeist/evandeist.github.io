---
layout: project
title: "LED Labyrinth"
permalink: /labyrinth/
thumbnail: /assets/images/thumbnails/labyrinth_thumb_2.jpg
hero_image: /assets/images/hero/labyrinth_thumb_2.jpg
github: https://github.com/evndeist/LED-Labyrinth
hidden: false

tags: ["Arduino", "C++"]

# Make video smaller
---

<div class="video-container">
  <video controls name="media">
    <source type="video/mp4" src="/assets/videos/labyrinth.mp4">
  Your browser does not support the video tag.
  </video>
</div>

A digital marble labyrinth on a 64x64 LED matrix.
Tilt the board to roll the marble toward the goal, while avoiding the holes!

This arduino project uses a 6-axis IMU (Interial Measurement Unit) to detect tilt. 
The greatest challenge was acheiving natural motion on such a small-resolution display. It took a lot of optimizations to get things running smoothly.