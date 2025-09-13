// /frontend/js/navbar.js
// Handles interactivity for the top navigation bar, specifically dropdowns.

document.addEventListener('DOMContentLoaded', () => {
    // This script needs to wait for the navbar to be loaded into the DOM by main.js.
    // We use a MutationObserver to wait for the #navbar-placeholder to be populated.
    const navbarPlaceholder = document.getElementById('navbar-placeholder');

    if (navbarPlaceholder) {
        const initNavbar = () => {
            const dropdownContainers = document.querySelectorAll('.top-navbar .dropdown-container');

            if (dropdownContainers.length === 0) return;

            dropdownContainers.forEach(container => {
                const toggleButton = container.querySelector('.nav-button');
                const dropdownMenu = container.querySelector('.dropdown-menu');

                if (toggleButton && dropdownMenu) {
                    toggleButton.addEventListener('click', (e) => {
                        e.stopPropagation();

                        // Close other open dropdowns before opening the new one
                        document.querySelectorAll('.dropdown-menu.is-open').forEach(openMenu => {
                            if (openMenu !== dropdownMenu) {
                                openMenu.classList.remove('is-open');
                            }
                        });

                        // Toggle the current dropdown
                        dropdownMenu.classList.toggle('is-open');
                    });
                }
            });

            // Add a single listener to the document to close any open dropdown when clicking outside
            document.addEventListener('click', (e) => {
                document.querySelectorAll('.dropdown-menu.is-open').forEach(openMenu => {
                    // Check if the click was outside the dropdown's parent container
                    if (!openMenu.parentElement.contains(e.target)) {
                        openMenu.classList.remove('is-open');
                    }
                });
            });

            // We've initialized the navbar, no need to run this again.
            observer.disconnect();
        };

        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.addedNodes.length) {
                    initNavbar();
                    break;
                }
            }
        });

        observer.observe(navbarPlaceholder, { childList: true, subtree: true });
    }
});
