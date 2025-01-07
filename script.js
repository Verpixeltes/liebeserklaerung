onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  
      // Show the typewriter text after the animation
      const typewriter = document.getElementById("typewriter");
      typewriter.classList.remove("hidden");
  
      // Remove the blinking caret after the typing animation is done
      setTimeout(() => {
        typewriter.style.borderRight = 'none';
      }, 3000); // Match the duration of the typing animation
    }, 1000); // Adjusted delay to match the end of your animation
  };