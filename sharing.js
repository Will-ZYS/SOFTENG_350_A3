function toggleAdvancedSharing() {
    if (document.getElementById('advanced-button').innerHTML === "Advanced Sharing") {
        document.getElementById('advanced-sharing').style.display = 'block';
        document.getElementById('advanced-button').innerHTML = "Hide Advanced Sharing";
    } else {
        document.getElementById('advanced-sharing').style.display = 'none';
        document.getElementById('advanced-button').innerHTML = "Advanced Sharing";
    }
}