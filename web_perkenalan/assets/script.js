let navLinks = document.querySelectorAll('.sidenav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(lnk => lnk.classList.remove('active'));
        this.classList.add('active');
    });
});