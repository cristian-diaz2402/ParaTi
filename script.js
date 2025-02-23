// Configuración de particles.js
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 30,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ff4081"
                },
                shape: {
                    type: "heart"
                },
                size: {
                    value: 6,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 4,
                        size_min: 0.3,
                        sync: false
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    } else {
        console.error("particlesJS is not defined. Make sure particles.js library is included.");
    }

    // Función para crear corazones flotantes
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(heart);

        // Eliminar el corazón después de la animación
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Crear corazones periódicamente
    setInterval(createHeart, 300);

    // Manejar el botón inicial
    const startBtn = document.getElementById('start-btn');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('love-song');

    startBtn.addEventListener('click', function() {
        // Ocultar botón inicial
        startBtn.style.display = 'none';
        
        // Mostrar contenido principal con animación
        mainContent.classList.remove('hidden');
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'scale(1)';
        
        // Intentar reproducir música
        audio.volume = 0.5;
        audio.play().catch(function(error) {
            console.log("Reproducción automática bloqueada por el navegador");
        });
    });

    // Efecto de brillo en las fotos
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        photo.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05) translateY(-10px)';
        });
        
        photo.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
});

// Cambio gradual del fondo
function changeBackground() {
    const colors = [
        'linear-gradient(135deg, #ffd1d1 0%, #ff9ecd 100%)',
        'linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)',
        'linear-gradient(135deg, #ffc0cb 0%, #ff1493 100%)'
    ];
    let currentIndex = 0;

    setInterval(() => {
        document.body.style.background = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }, 5000);
}

changeBackground();