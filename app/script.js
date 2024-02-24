function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showVisibleProjects() {
    var projects = document.querySelectorAll('.img');
    
    projects.forEach(function(img) {
        if (isElementInViewport(img)) {
            img.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', showVisibleProjects);

showVisibleProjects();