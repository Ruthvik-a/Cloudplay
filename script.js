document.getElementById("startOs").addEventListener("click", function () {
    var emulator = new V86({
        wasm_path: "https://copy.sh/v86/build/v86.wasm",
        memory_size: 256 * 1024 * 1024,
        vga_memory_size: 8 * 1024 * 1024,
        screen_container: document.getElementById("os"),
        bios: { url: "https://copy.sh/v86/seabios.bin" },
        vga_bios: { url: "https://copy.sh/v86/vgabios.bin" },
        cdrom: { url: "YOUR_TINYCORE_ISO_URL" }
    });
});

function loadFromDrive(fileId) {
    var url = "https://www.googleapis.com/drive/v3/files/" + fileId + "?alt=media&key=YOUR_GOOGLE_DRIVE_API_KEY";
    window.open(url, "_blank");
}

function loadFromTeraBox() {
    document.getElementById("teraboxFrame").src = "YOUR_TERABOX_DOWNLOAD_URL";
    document.getElementById("teraboxFrame").style.display = "block";
}
