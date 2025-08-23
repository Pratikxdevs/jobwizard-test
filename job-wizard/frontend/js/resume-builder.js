// /frontend/js/resume-builder.js

document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('upload-drop-zone');
    const browseBtn = document.getElementById('browse-btn');
    const fileInput = document.getElementById('resume-file-input');
    const fileNameDisplay = document.getElementById('file-name-display');

    // Check if all required elements exist before adding event listeners
    if (dropZone && browseBtn && fileInput && fileNameDisplay) {

        // Function to trigger the hidden file input
        const triggerFileInput = () => {
            fileInput.click();
        };

        // Event listeners for clicking
        browseBtn.addEventListener('click', triggerFileInput);
        dropZone.addEventListener('click', (e) => {
            // Prevent triggering if the button itself was the click target
            if (!browseBtn.contains(e.target)) {
                triggerFileInput();
            }
        });

        // Event listener for file selection
        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                fileNameDisplay.textContent = fileInput.files[0].name;
            } else {
                fileNameDisplay.textContent = 'No file selected.';
            }
        });

        // Event listeners for drag and drop functionality
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault(); // Necessary to allow for 'drop'
            dropZone.classList.add('dragover');
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('dragover');
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                // Assign the dropped files to the file input
                fileInput.files = files;
                // Manually trigger the 'change' event to update the UI
                const changeEvent = new Event('change', { bubbles: true });
                fileInput.dispatchEvent(changeEvent);
            }
        });
    }
});
