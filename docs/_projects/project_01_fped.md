---
layout: project
title: "Fire Pump Simulation"
permalink: /fped/
thumbnail: /assets/images/thumbnails/fped_2x_thumb.png
#thumbnail: /assets/images/hero/fped_hero.png
hero_image: /assets/images/hero/fped_hero.png
hero_darken: true
github: https://github.com/evandeist/FireProtectionEngineering
hidden: false

tags: ["Unity", "C#", "Maya", "Gamedev"]

# todo: better images
# q: how to make images a column instead of row when on mobile?
# a: use flexbox
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
    }
</style>

This is a fire pump simulation to help train Fire Protection Engineering students at UMD. On a real fire pump, closing the wrong valve at the wrong time can cause some serious trouble. This virtual version gives students a safe way to prepare for the real thing.

The simulation includes a both a warehouse and fire pump room. The warehouse contains various pipes, valves, and clamps that students must learn the function of. 


<div class="is-centered">
    <img src="/assets/images/fped/main_drain.png" alt="drain system" width="70%"/>
</div>


The pump room contains a fire pump, which students can control using the electric pump controller and valves. The in-game pump controller is based on the actual pump controller, and displays readings in the exact same way. Students must monitor various voltages and pressure readings during operation.


<div class="is-centered">
    <div class="dualpics">
        <img src="/assets/images/fped/pumpcontroller.jpg" alt="actual pump controller" width="50%"/>
        <img src="/assets/images/fped/controller.png" alt="in-game controller" width="50%"/>
    </div>
</div>


They can test the pump using the header and canvas hoses outside. Red "hose monster" attachments are also available, which students need to be familiar with.


<div class="is-centered">
    <img src="/assets/images/fped/hosemonster.png" alt="actual pump controller" width="70%"/>
</div>


Incorrect usage of the fire pump can lead to catastrophe!


<div class="is-centered">
    <img src="/assets/images/fped/flood.png" alt="in-game controller" width="70%"/>
</div>


Below is a link to the game. Please note that it is intended for Fire Protection Engineering students and may not be very interesting to others.


<div class="is-centered">
    <iframe frameborder="0" src="https://itch.io/embed/1627219" width="552" height="167" class="is-centered"><a href="https://evandeist.itch.io/virtual-warehouse">Virtual Warehouse by evandeist</a></iframe>
</div>
