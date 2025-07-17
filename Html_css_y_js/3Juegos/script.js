const video = document.getElementById("vd");

video.addEventListener("ended", function() {
    video.remove();
})
