  var navLinks = document.getElementById("nav-links");

    function showMenu(){
        navLinks.style.right = "0";
    }

    function hideMenu(){
        navLinks.style.right = "-200px";
    }
    function scrollToSection() {
        const targetElement = document.getElementById('target-section');
        if (targetElement) {
            targetElement.scrollIntoView({
            behavior: 'smooth', // 'auto' for instant jump, 'smooth' for animation
            block: 'start'    // Aligns the top of the element with the top of the viewport
            });
        }
    }