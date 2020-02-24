(function() {
    // General Variables
    var Particle, particleCount, particles, sketch, z;
  
    sketch = Sketch.create();
  
    particles = [];
  
    particleCount = 5000;
  
    sketch.mouse.x = sketch.width / 5;
  
    sketch.mouse.y = sketch.height / 5;
  
    sketch.strokeStyle = 'hsla(200, 50%, 50%, .8)';
  
    sketch.globalCompositeOperation = 'lighter';
  
    
    // Particle Constructor
    Particle = function() {
      this.x = random(sketch.width);
      this.y = random(sketch.height, sketch.height * 2);
      this.vx = 0;
      this.vy = -random(1, 10) / 5;
      this.radius = this.baseRadius = 1;
      this.maxRadius = 250;
      this.threshold = 200;
      return this.hue = random(180, 400);
    };
  
    // Particle Prototype
    Particle.prototype = {
      update: function() {
        var dist, distx, disty, radius;
        // Determine Distance From Mouse
        distx = this.x - sketch.mouse.x;
        disty = this.y - sketch.mouse.y;
        dist = sqrt(distx * distx + disty * disty);
        
        // Set Radius
        if (dist < this.threshold) {
          radius = this.baseRadius + ((this.threshold - dist) / this.threshold) * this.maxRadius;
          this.radius = radius > this.maxRadius ? this.maxRadius : radius;
        } else {
          this.radius = this.baseRadius;
        }
        
        // Adjust Velocity
        this.vx += (random(100) - 50) / 1000;
        this.vy -= random(1, 30) / 100;
        
        // Apply Velocity
        this.x += this.vx;
        this.y += this.vy;
        
        // Check Bounds   
        if (this.x < -this.maxRadius || this.x > sketch.width + this.maxRadius || this.y < -this.maxRadius) {
          this.x = random(sketch.width);
          this.y = random(sketch.height + this.maxRadius, sketch.height * 2);
          this.vx = 0;
          return this.vy = -random(1, 10) / 2;
        }
      },
      render: function() {
        sketch.beginPath();
        sketch.arc(this.x, this.y, this.radius, 0, TWO_PI);
        sketch.closePath();
        sketch.fillStyle = 'hsla(' + this.hue + ', 60%, 40%, .35)';
        sketch.fill();
        return sketch.stroke();
      }
    };
  
    // Create Particles
    z = particleCount;
  
    while (z--) {
      particles.push(new Particle());
    }
  
    // Sketch Clear
    sketch.clear = function() {
      return sketch.clearRect(0, 0, sketch.width, sketch.height);
    };
  
    
    // Sketch Update
    sketch.update = function() {
      var i, results;
      i = particles.length;
      results = [];
      while (i--) {
        results.push(particles[i].update());
      }
      return results;
    };
  
    // Sketch Draw
    sketch.draw = function() {
      var i, results;
      i = particles.length;
      results = [];
      while (i--) {
        results.push(particles[i].render());
      }
      return results;
    };
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtBQUFBLE1BQUEsUUFBQSxFQUFBLGFBQUEsRUFBQSxTQUFBLEVBQUEsTUFBQSxFQUFBOztFQUNBLE1BQUEsR0FBUyxNQUFNLENBQUMsTUFBUCxDQUFBOztFQUNULFNBQUEsR0FBWTs7RUFDWixhQUFBLEdBQWdCOztFQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQWIsR0FBaUIsTUFBTSxDQUFDLEtBQVAsR0FBZTs7RUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFiLEdBQWlCLE1BQU0sQ0FBQyxNQUFQLEdBQWdCOztFQUNqQyxNQUFNLENBQUMsV0FBUCxHQUFxQjs7RUFDckIsTUFBTSxDQUFDLHdCQUFQLEdBQWtDLFVBUGxDOzs7O0VBVUEsUUFBQSxHQUFXLFFBQUEsQ0FBQSxDQUFBO0lBQ1QsSUFBSSxDQUFDLENBQUwsR0FBUyxNQUFBLENBQVEsTUFBTSxDQUFDLEtBQWY7SUFDVCxJQUFJLENBQUMsQ0FBTCxHQUFTLE1BQUEsQ0FBUSxNQUFNLENBQUMsTUFBZixFQUF1QixNQUFNLENBQUMsTUFBUCxHQUFnQixDQUF2QztJQUNULElBQUksQ0FBQyxFQUFMLEdBQVU7SUFDVixJQUFJLENBQUMsRUFBTCxHQUFVLENBQUMsTUFBQSxDQUFRLENBQVIsRUFBVyxFQUFYLENBQUQsR0FBbUI7SUFDN0IsSUFBSSxDQUFDLE1BQUwsR0FBYyxJQUFJLENBQUMsVUFBTCxHQUFrQjtJQUNoQyxJQUFJLENBQUMsU0FBTCxHQUFpQjtJQUNqQixJQUFJLENBQUMsU0FBTCxHQUFpQjtXQUNqQixJQUFJLENBQUMsR0FBTCxHQUFXLE1BQUEsQ0FBUSxHQUFSLEVBQWEsR0FBYjtFQVJGLEVBVlg7OztFQXFCQSxRQUFRLENBQUMsU0FBVCxHQUNFO0lBQUEsTUFBQSxFQUFRLFFBQUEsQ0FBQSxDQUFBO0FBRU4sVUFBQSxJQUFBLEVBQUEsS0FBQSxF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QU0sQ0FBQSxFQUFOO21CQUF4QixTQUFXLENBQUEsQ0FBQSxDQUFHLENBQUMsTUFBZixDQUFBO0lBQXdCLENBQUE7O0VBRlYsRUFuRWhCOzs7RUF3RUEsTUFBTSxDQUFDLElBQVAsR0FBYyxRQUFBLENBQUEsQ0FBQTtBQUNaLFFBQUEsQ0FBQSxFQUFBO0lBQUEsQ0FBQSxHQUFJLFNBQVMsQ0FBQztBQUNVO1dBQU0sQ0FBQSxFQUFOO21CQUF4QixTQUFXLENBQUEsQ0FBQSxDQUFHLENBQUMsTUFBZixDQUFBO0lBQXdCLENBQUE7O0VBRlo7QUF4RWQiLCJzb3VyY2VzQ29udGVudCI6WyIjIEdlbmVyYWwgVmFyaWFibGVzXG5za2V0Y2ggPSBTa2V0Y2guY3JlYXRlKClcbnBhcnRpY2xlcyA9IFtdXG5wYXJ0aWNsZUNvdW50ID0gNzUwXG5za2V0Y2gubW91c2UueCA9IHNrZXRjaC53aWR0aCAvIDJcbnNrZXRjaC5tb3VzZS55ID0gc2tldGNoLmhlaWdodCAvIDJcbnNrZXRjaC5zdHJva2VTdHlsZSA9ICdoc2xhKDIwMCwgNTAlLCA1MCUsIC40KSdcbnNrZXRjaC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcidcbiAgXG4jIFBhcnRpY2xlIENvbnN0cnVjdG9yXG5QYXJ0aWNsZSA9IC0+XG4gIHRoaXMueCA9IHJhbmRvbSggc2tldGNoLndpZHRoICkgXG4gIHRoaXMueSA9IHJhbmRvbSggc2tldGNoLmhlaWdodCwgc2tldGNoLmhlaWdodCAqIDIgKVxuICB0aGlzLnZ4ID0gMFxuICB0aGlzLnZ5ID0gLXJhbmRvbSggMSwgMTAgKSAvIDVcbiAgdGhpcy5yYWRpdXMgPSB0aGlzLmJhc2VSYWRpdXMgPSAxXG4gIHRoaXMubWF4UmFkaXVzID0gNTAgIFxuICB0aGlzLnRocmVzaG9sZCA9IDE1MFxuICB0aGlzLmh1ZSA9IHJhbmRvbSggMTgwLCAyNDAgKVxuXG4jIFBhcnRpY2xlIFByb3RvdHlwZVxuUGFydGljbGUucHJvdG90eXBlID1cbiAgdXBkYXRlOiAtPlxuICAgICMgRGV0ZXJtaW5lIERpc3RhbmNlIEZyb20gTW91c2VcbiAgICBkaXN0eCA9IHRoaXMueCAtIHNrZXRjaC5tb3VzZS54XG4gICAgZGlzdHkgPSB0aGlzLnkgLSBza2V0Y2gubW91c2UueVxuICAgIGRpc3QgPSBzcXJ0KCBkaXN0eCAqIGRpc3R4ICsgZGlzdHkgKiBkaXN0eSApXG4gICAgXG4gICAgIyBTZXQgUmFkaXVzXG4gICAgaWYgZGlzdCA8IHRoaXMudGhyZXNob2xkXG4gICAgICByYWRpdXMgPSB0aGlzLmJhc2VSYWRpdXMgKyAoICggdGhpcy50aHJlc2hvbGQgLSBkaXN0ICkgLyB0aGlzLnRocmVzaG9sZCApICogdGhpcy5tYXhSYWRpdXNcbiAgICAgIHRoaXMucmFkaXVzID0gaWYgcmFkaXVzID4gdGhpcy5tYXhSYWRpdXMgdGhlbiB0aGlzLm1heFJhZGl1cyBlbHNlIHJhZGl1c1xuICAgIGVsc2VcbiAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5iYXNlUmFkaXVzXG4gICAgICAgIFxuICAgICMgQWRqdXN0IFZlbG9jaXR5XG4gICAgdGhpcy52eCArPSAoIHJhbmRvbSggMTAwICkgLSA1MCApIC8gMTAwMFxuICAgIHRoaXMudnkgLT0gcmFuZG9tKCAxLCAyMCApIC8gMTAwMDBcbiAgICAgIFxuICAgICMgQXBwbHkgVmVsb2NpdHlcbiAgICB0aGlzLnggKz0gdGhpcy52eFxuICAgIHRoaXMueSArPSB0aGlzLnZ5XG4gICAgICBcbiAgICAjIENoZWNrIEJvdW5kcyAgIFxuICAgIGlmIHRoaXMueCA8IC0gdGhpcy5tYXhSYWRpdXMgfHwgdGhpcy54ID4gc2tldGNoLndpZHRoICsgdGhpcy5tYXhSYWRpdXMgfHwgdGhpcy55IDwgLSB0aGlzLm1heFJhZGl1c1xuICAgICAgdGhpcy54ID0gcmFuZG9tKCBza2V0Y2gud2lkdGggKSAgICAgIFxuICAgICAgdGhpcy55ID0gcmFuZG9tKCBza2V0Y2guaGVpZ2h0ICsgdGhpcy5tYXhSYWRpdXMsIHNrZXRjaC5oZWlnaHQgKiAyIClcbiAgICAgIHRoaXMudnggPSAwXG4gICAgICB0aGlzLnZ5ID0gLXJhbmRvbSggMSwgMTAgKSAvIDVcbiAgcmVuZGVyOiAtPlxuICAgIHNrZXRjaC5iZWdpblBhdGgoKVxuICAgIHNrZXRjaC5hcmMoIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgVFdPX1BJIClcbiAgICBza2V0Y2guY2xvc2VQYXRoKClcbiAgICBza2V0Y2guZmlsbFN0eWxlID0gJ2hzbGEoJyArIHRoaXMuaHVlICsgJywgNjAlLCA0MCUsIC4zNSknXG4gICAgc2tldGNoLmZpbGwoKVxuICAgIHNrZXRjaC5zdHJva2UoKVxuXG4jIENyZWF0ZSBQYXJ0aWNsZXNcbnogPSBwYXJ0aWNsZUNvdW50XG53aGlsZSB6LS1cbiAgcGFydGljbGVzLnB1c2goIG5ldyBQYXJ0aWNsZSgpIClcblxuIyBTa2V0Y2ggQ2xlYXJcbnNrZXRjaC5jbGVhciA9IC0+XG4gIHNrZXRjaC5jbGVhclJlY3QoIDAsIDAsIHNrZXRjaC53aWR0aCwgc2tldGNoLmhlaWdodCApXG4gIFxuIyBTa2V0Y2ggVXBkYXRlXG5za2V0Y2gudXBkYXRlID0gLT5cbiAgaSA9IHBhcnRpY2xlcy5sZW5ndGhcbiAgcGFydGljbGVzWyBpIF0udXBkYXRlKCkgd2hpbGUgaS0tXG5cbiMgU2tldGNoIERyYXdcbnNrZXRjaC5kcmF3ID0gLT4gIFxuICBpID0gcGFydGljbGVzLmxlbmd0aFxuICBwYXJ0aWNsZXNbIGkgXS5yZW5kZXIoKSB3aGlsZSBpLS1cbiJdfQ==
  //# sourceURL=coffeescript
