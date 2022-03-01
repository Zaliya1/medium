const slider = (unactiveClass = 'portfolio-item', activeClass = 'portfolio-item-active') => {
    console.log(unactiveClass);
    console.log(activeClass);
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.' + unactiveClass);
    const activeSlide = document.querySelectorAll('.' + activeClass);
    if (!slides || !activeSlide) {return};
    let dots;
    let currentSlide = 0;
    let interval;
    const timeInterval = 2000;
    const portfolioDots = document.querySelector('.portfolio-dots');
    
    const createDots = () => {
        for (let i = 0; i<slides.length; i++) {
            let dot = document.createElement('li');
            dot.classList.add('dot');
            if (i === 0) {
                dot.classList.add('dot-active');  
            }
            portfolioDots.append(dot);
        }
        dots = document.querySelectorAll('.dot');
        return dots;
    };

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };
    const autoSlide = () => {
        prevSlide(slides, currentSlide, activeClass);
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, activeClass);
        nextSlide(dots, currentSlide, 'dot-active');
    };
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }
        prevSlide(slides, currentSlide, activeClass);
        prevSlide(dots, currentSlide, 'dot-active');

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length-1;
        }
        nextSlide(slides, currentSlide, activeClass);
        nextSlide(dots, currentSlide, 'dot-active');
    });
    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);

    createDots();
    startSlide(timeInterval);
};
export default slider