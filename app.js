// Get the document elements
const fileInput = document.getElementById("fileInput");
const uploadButton = document.getElementById("uploadButton");

function upload(event) {
  event.preventDefault();

  // Get the selected file
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    // Read the file as a data URL
    reader.onload = function (e) {
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = ""; // Clear the previous content

      // Check if the file is an image or a video
      if (file.type.startsWith("image/")) {
        // Create an img element for image files
        const img = document.createElement("img");
        img.src = e.target.result;
        img.style.maxWidth = "100%"; // Optional styling
        resultDiv.appendChild(img);
      } else if (file.type.startsWith("video/")) {
        // Create a video element for video files
        const video = document.createElement("video");
        video.src = e.target.result;
        video.controls = true; // Add controls for playback
        video.style.maxWidth = "100%"; // Optional styling
        resultDiv.appendChild(video);
      }
    };

    // Read the file as a Data URL (suitable for both images and videos)
    reader.readAsDataURL(file);
  }
}

// Add event listener for the upload button
uploadButton.addEventListener("click", upload);
