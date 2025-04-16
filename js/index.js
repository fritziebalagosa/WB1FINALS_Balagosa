// Load preferences on page load
window.addEventListener('DOMContentLoaded', () => {
    const mode = localStorage.getItem('mode');
    const contrast = localStorage.getItem('contrast');
    const fontSize = localStorage.getItem('fontSize');

    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    if (contrast === 'high') {
        document.body.classList.add('high-contrast');
    }

    if (fontSize === 'large') {
        document.body.classList.add('font-large');
    } else if (fontSize === 'larger') {
        document.body.classList.add('font-larger');
    }
});

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.remove('high-contrast');

    const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle('fa-moon', !isDark);
    icon.classList.toggle('fa-sun', isDark);

    localStorage.setItem('mode', isDark ? 'dark' : 'light');
    localStorage.removeItem('contrast');
});

// High contrast toggle
highContrastToggle.addEventListener('click', () => {
    const isHighContrast = document.body.classList.toggle('high-contrast');
    document.body.classList.remove('dark-mode');

    localStorage.setItem('contrast', isHighContrast ? 'high' : 'normal');
    localStorage.removeItem('mode');

    // Reset dark mode icon to moon when switching to high contrast
    const icon = darkModeToggle.querySelector('i');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
});

// Font size control
increaseFontSize.addEventListener('click', () => {
    if (document.body.classList.contains('font-larger')) {
        document.body.classList.remove('font-larger', 'font-large');
        localStorage.removeItem('fontSize');
    } else if (document.body.classList.contains('font-large')) {
        document.body.classList.remove('font-large');
        document.body.classList.add('font-larger');
        localStorage.setItem('fontSize', 'larger');
    } else {
        document.body.classList.add('font-large');
        localStorage.setItem('fontSize', 'large');
    }
});

//JQUERY

$(document).ready(function() {
    $("#clickme").on("click", function(e) {
        e.preventDefault();
        alert("Clicked!");
    }); 
});