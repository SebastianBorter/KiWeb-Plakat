window.addEventListener('scroll', function() {
    var title = document.getElementById('title');
    var scrollPos = window.scrollY;

    if (scrollPos > 0) {
        // Wenn gescrollt wird, füge die Klasse "scrolled" hinzu
        document.body.classList.add('scrolled');
    } else {
        // Entferne die Klasse "scrolled", wenn nicht gescrollt wird
        document.body.classList.remove('scrolled');
    }
});
