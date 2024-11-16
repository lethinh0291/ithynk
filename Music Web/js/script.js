document.addEventListener("DOMContentLoaded", () => {
    const audioElements = document.querySelectorAll("audio");

    audioElements.forEach(audio => {
        audio.addEventListener("play", () => {
            audioElements.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });
});
