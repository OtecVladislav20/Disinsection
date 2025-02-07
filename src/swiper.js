document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
        perPage: 2,
        gap: '50px',
        type: 'loop',
        arrows: boolean = false,
        breakpoints: {
            900: {
                perPage: 1,
            }
        }
    });
    splide.mount();
});

