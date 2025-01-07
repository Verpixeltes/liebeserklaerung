onload = () => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Add "Click here :)" text
    const clickHereText = document.createElement('div');
    clickHereText.innerText = 'Click here :)';
    clickHereText.style.position = 'absolute';
    clickHereText.style.top = '50%';
    clickHereText.style.left = '50%';
    clickHereText.style.transform = 'translate(-50%, -50%)';
    clickHereText.style.fontSize = '20px';
    clickHereText.style.color = 'white';
    document.body.appendChild(clickHereText);

    document.body.addEventListener('click', () => {
        // Enable scrolling
        document.body.style.overflow = 'auto';

        // Remove the "Click here :)" text after clicking
        clickHereText.remove();

        const c = setTimeout(() => {
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
        
            // Show the typewriter text after the animation
            const typewriter = document.getElementById("typewriter");
            typewriter.classList.remove("hidden");

            // Play sound during the animation
            const audio = new Audio('/images/sound.mp3');
            audio.play().then(() => {
                console.log('Audio is playing');
            }).catch((error) => {
                console.error('Error playing audio:', error);
            });
        
            // Remove the blinking caret after the typing animation is done
            setTimeout(() => {
                typewriter.style.borderRight = 'none';
            }, 3000); // Match the duration of the typing animation
        }, 1000); // Adjusted delay to match the end of your animation
    }, { once: true }); // Ensure the event listener is only triggered once
};