
        var COLOURS = [ '#E37B64', '#A7EBCA', '#FFFFFF', '#D8ABA7', '#868E80' ];
        var radius = 5;

        Sketch.create({

            container: document.getElementById( 'container' ),
            autoclear: false,
            retina: 'auto',

            setup: function() {
                console.log( 'setup' );
            },

            update: function() {
                radius = 2 + abs( sin( this.millis * 0.009 ) * 60 );
            },

            // Event handlers

            keydown: function() {
                if ( this.keys.C ) this.clear();
            },

            // Mouse & touch events are merged, so handling touch events by default
            // and powering sketches using the touches array is recommended for easy
            // scalability. If you only need to handle the mouse / desktop browsers,
            // use the 0th touch element and you get wider device support for free.
            touchmove: function() {

                for ( var i = this.touches.length - 1, touch; i >= 0; i-- ) {

                    touch = this.touches[i];

                    this.lineCap = 'square';
                    this.lineJoin = 'round';
                    this.fillStyle = this.strokeStyle = COLOURS[ i % COLOURS.length ];
                    this.lineWidth = radius;

                    this.beginPath();
                    this.moveTo( touch.x, touch.y );
                    this.lineTo( touch.x, touch.y );
                    this.stroke();
                }
            }
        });