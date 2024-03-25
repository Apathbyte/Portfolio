window.addEventListener('scroll', function() {
    const title = document.querySelector('.welcome-section h1');
    const subtitle = document.querySelector('.welcome-section h2');
    let scrollPosition = window.scrollY;

    const screenWidth = window.innerWidth;
    const maxScroll = screenWidth;

    if (scrollPosition <= maxScroll) {
        title.style.transform = 'translateX(' + scrollPosition * 1 + 'px)';
        subtitle.style.transform = 'translateX(' + scrollPosition * 1 + 'px)';
    } else {
        title.style.transform = 'none';
        subtitle.style.transform = 'none';
    }
});

window.addEventListener('scroll', function() {
    const introSection = document.getElementById('Intro-section');
    const title = document.querySelector('.Intro-section h1');
    const subtitle = document.querySelector('.Intro-section h2');
    let scrollPosition = window.scrollY;
    const previousSectionBottom = introSection.previousElementSibling.offsetTop + introSection.previousElementSibling.offsetHeight + 5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const maxScroll = Math.min(window.innerHeight, previousSectionBottom);

    if (scrollPosition >= previousSectionBottom) {
        title.style.transform = 'translateY(' + (scrollPosition - previousSectionBottom) * 0.5 + 'px)';
        subtitle.style.transform = 'translateY(' + (scrollPosition - previousSectionBottom) * 0.5 + 'px)';
    } else {
        title.style.transform = 'none';
        subtitle.style.transform = 'none';
    }
});
