particlesJS('particles-js', {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#4F95FF',
    },
    shape: {
      type: 'star',
      stroke: {
        width: 0,
        color: '#161b31',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.70,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: '#ffe1ff',
      opacity: 0.2,
      width: 0.7,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'random',
      random: true,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  config_demo: {
    hide_card: false,
    background_repeat: 'no-repeat',
    background_size: 'cover',
  },
});
