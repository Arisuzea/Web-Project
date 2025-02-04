document.getElementById("startWatchingButton").addEventListener("click", () => {
    const videoBackground = document.getElementById("videoBackground");
    const content = document.querySelector(".content");

    videoBackground.style.opacity = "1";

    const video = document.getElementById("backgroundVideo");
    video.play();
    video.muted = false;  

   
    setTimeout(() => {
      
    }, 1000); 
});
