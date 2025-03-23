document.getElementById("startOS").addEventListener("click", function () {
    let osFrame = document.getElementById("osFrame");
    let osContainer = document.getElementById("osContainer");

    // Load TinyOS emulator
    osFrame.src = "https://copy.sh/v86/?profile=tinycore";  

    // Show OS window
    osContainer.classList.remove("hidden");
});
