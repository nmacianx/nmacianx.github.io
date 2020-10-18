$('#portfolioModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var project = button.data('project');
    var info = getInfo(project);
    var modal = $(this);
    populateModal(modal, info);
});

function customScroll(id, speed, padding = 0) {
    $('html, body').animate({
        scrollTop: $(id).offset().top - padding
    }, speed);
}

$('#attributes').tooltip();

function getInfo(project) {
    var info = {};
    switch (project) {
        case 'edumovil':
            info.name = 'Edumovil';
            info.img = ['Edumovil00.jpg', 'Edumovil01.jpg', 'Edumovil02.jpg', 'Edumovil03.jpg'];
            info.description = 'probandoo';
            info.url = 'https://usuarios.edumovil.com.ar';
            break;
        case 'zabmakerstable':
            info.name = 'Z. Alexander Brown';
            info.img = ['portfolio00.jpg', 'portfolio00.jpg', 'portfolio00.jpg'];
            info.description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley`;
            break;
        default:
            info.name = 'Proyecto';
            break;
    }
    return info;
}

function populateModal(modal, info) {
    modal.find('.modal-title').html(info.name);
    var indicators = ``;
    info.img.forEach(function (value, i) {
        if (i == 0) {
            indicators = `<li data-target="#modalCarousel" data-slide-to="0" class="active"></li>`;
        } else {
            indicators += `<li data-target="#modalCarousel" data-slide-to="${i}"></li>`;
        }
    });
    modal.find('.carousel-indicators').html(indicators);
    var images = ``;
    info.img.forEach(function (value, i) {
        if (i == 0) {
            images = `
                <div class="carousel-item active">
                    <img class="d-block w-100" src="./img/${value}" alt="First slide">
                </div>
            `;
        } else {
            images += `
                <div class="carousel-item">
                    <img class="d-block w-100" src="./img/${value}" alt="Slide">
                </div>
            `;
        }
    });
    modal.find('.carousel-inner').html(images);
    modal.find('.modal-text-description').html(info.description);
    var url = ``;
    if (info.url) {
        if (!info.state) {
            info.state = '';
        }
        url = `<a target="_blank" href="${info.url}"><div class="btn btn-primary">Visit website</div></a>
        <div class="modal-state-message">${info.state}</div>`;
    } else {
        url = `<a class="disabled" target="_blank"><div class="btn btn-primary disabled">Visit website</div></a>
            <div class="modal-state-message">Site is not live anymore.</div>`;
    }
    modal.find('.modal-state').html(url);
}

function showMore() {
    document.getElementById("portfolio-row-3").removeAttribute('data-hidden');
    document.getElementById("one-more-button").setAttribute('data-hidden', true);
    customScroll('#portfolio-row-3', 700, 50);
    AOS.refresh();
}

function showMoreCourses() {
    document.getElementById("education-row-3").removeAttribute('data-hidden');
    document.getElementById("education-row-4").removeAttribute('data-hidden');
    document.getElementById("education-row-5").removeAttribute('data-hidden');
    document.getElementById("three-more-button").setAttribute('data-hidden', true);
    customScroll('#education-row-3', 700, 50);
}

$(function () {
    var preloader = document.querySelector('.preloader');
    const fadeEffect = setInterval(function () {
        // if we don't set opacity 1 in CSS, then
        // it will be equaled to "" -- that's why
        // we check it, and if so, set opacity to 1
        if (!preloader.style.opacity) {
            preloader.style.opacity = 1;
        }
        if (preloader.style.opacity > 0) {
            preloader.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            preloader.style.display = 'none';
        }
    }, 100);
});

particles_config = {
    "particles": {
        "number": {
            "value": 90,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
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
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
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
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
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
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
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
}

particlesJS.load('particles-js', particles_config, function () {
    console.log('callback - particles.js config loaded');
});