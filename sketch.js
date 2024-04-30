 // p5.js sketch for particle system animation
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // Black background

  // Add new particles
  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }

  // Update and display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.color = color(random(255), random(255), random(255), 200); // Initial alpha set to 200 
    this.size = random(2, 6);
    this.lifespan = 100; // Controls how quickly the particle fades
  }

  update() {
    this.position.add(this.velocity);
    this.lifespan -= 1;
    this.color.setAlpha(map(this.lifespan, 0, 100, 0, 255)); // Update alpha based on lifespan
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  isDead() {
    return this.lifespan <= 0;
  }
  }
