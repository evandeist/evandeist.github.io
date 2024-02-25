---
layout: project
title: "LED Waterfall"
permalink: /waterfall/
thumbnail: /assets/images/thumbnails/waterfall_thumb.jpg
hero_image: /assets/images/thumbnails/waterfall_thumb.jpg
hidden: false
github: https://github.com/evandeist/LED-waterfall

tags: ["Arduino", "C++"]

# todo: github repo
---

<style>
    .dualpics {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    img {
        margin-top: 1.5%;
        margin-bottom: 2.5%;
        padding:0.5rem;
    }
</style>

<div class="video-container" style="height:50%">
  <video controls name="media">
    <source type="video/mp4" src="/assets/videos/waterfall_placeholder.mp4">
        Your browser does not support the video tag.
  </video>
</div>

This is an arduino-based interactive art piece. Put your hand in one of the streams, and watch as the drops of light gently bounce off!

Each LED-strip is driven by an its own arduino board, attached to the back. The arduinos calculate the physics for each drop, then draw the drops at the appropriate LED addresses.

<div class="is-centered">
  <img src="/assets/images/waterfall/boards.JPG" alt="arduino boards" width="70%"/>
</div>

At the top of each strip is a time-of-flight (ToF) sensor, which reads the distance of the nearest object within its detection range. These readings are used to determine the height at which the drops bounce. The field of view for each ToF sensor is slightly cone-shaped, so the columns had to be spaced out enough to reduce overlap between cones. This is to prevent situations where putting an obstacle in one column would affect the drops in the adjacent columns.

<div class="is-centered">
    <div class="dualpics" height="50%">
        <img src="/assets/images/waterfall/tof2.webp" alt="Sparkfun time-of-flight sensor" width="50%"/>
        <img src="/assets/images/waterfall/front3.JPG" alt="the sensors are placed at the top of each column" width="50%"/>
    </div>
</div>

This piece was selected and shown off at the official dedication of UMD's Clarvit Studio and Courtyard — a new space where students can leverage various technologies in their artistic pursuits.