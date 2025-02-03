const particles = {}

document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function(e) {
        // Show particles for both scenarios
        document.querySelector('#particles-js').style.display = "block"

        // Shared GIFs array
        const gifs = [
            "https://media.tenor.com/Ka7sVbRXQUwAAAAj/tkthao219-bubububu.gif",
            "https://media.giphy.com/media/l4pTdcifPZLpDjL1e/giphy.gif?cid=790b7611qb7r6qjnnpl2y2lywsy2yhe18st7j7i8ekunijx6&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "assets/tenor.gif"
        ]

        // Determine messages based on button ID
        let messages;
        if (e.target.id === 'yes') {
            messages = [
                'YAY, I LOVE YOU!', 'This makes me so happy!', 'Yessss!',
                'You chose the right answer', 'You made my day', "You've made my heart flutter!",
                "You're my sunshine on a cloudy day!", "You mean the world to me", 'Y- you actually said yes 🥲'
            ]
        } else if (e.target.id === "If I don't, who will?") {
            messages = [
                'You\'re the one who lights up my world 🌟',
                "You're my Wonder Girl!!", 
                "You make my heart smile! 💕",
                'IY, my Love'
            ]
        }

        const randomMessageIndex = Math.floor(Math.random() * messages.length);
        const randomGifIndex = Math.floor(Math.random() * gifs.length);

        document.querySelector('h1').innerText = messages[randomMessageIndex]       
        document.querySelector('#gif').src = gifs[randomGifIndex]            

        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#FF0000"
                },
                "shape": {
                    "type": "image",
                    "stroke": {
                        "width": 0,
                        "color": "#FF0000"
                    },
                    "polygon": {
                        "nb_sides": 3
                    },
                    "image": {
                        "src": "../assets/heart.png",
                        "width": 50,
                        "height": 50
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 50,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 4.795204795204795,
                        "size_min": 0,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 32.06824121731046,
                    "color": "#ffffff",
                    "opacity": 0.03206824121731046,
                    "width": 0
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 0,
                        "size": 40,
                        "duration": 0.6496617698410762,
                        "opacity": 1,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 300,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        });
    })
})
