  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.body.classList.remove('high-contrast');
      
      const icon = darkModeToggle.querySelector('i');
      if (document.body.classList.contains('dark-mode')) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
      } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
      }
  });
  
  // High contrast toggle
  const highContrastToggle = document.getElementById('highContrastToggle');
  highContrastToggle.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      document.body.classList.remove('dark-mode');
  });
  
  // Font size control
  const increaseFontSize = document.getElementById('increaseFontSize');
  increaseFontSize.addEventListener('click', () => {
      if (document.body.classList.contains('font-larger')) {
          document.body.classList.remove('font-larger');
          document.body.classList.document.body.classList.remove('font-larger');
            document.body.classList.remove('font-large');
        } else if (document.body.classList.contains('font-large')) {
            document.body.classList.remove('font-large');
            document.body.classList.add('font-larger');
        } else {
            document.body.classList.add('font-large');
        }
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });