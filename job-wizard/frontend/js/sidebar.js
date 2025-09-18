// /frontend/js/sidebar.js
// Handles interactivity for the animated sidebar.

// Since this script is now loaded after the sidebar HTML is injected,
// we can directly access the elements without waiting for DOMContentLoaded
// or using a MutationObserver.

const sidebar = document.querySelector('.sidebar');
const dropdownToggle = document.getElementById('my-jobs-toggle');
const submenu = document.getElementById('my-jobs-submenu');
const body = document.body;


if (sidebar) {
    // --- Expansion Logic ---
    // Add a class to the body when the mouse enters the sidebar area.
    sidebar.addEventListener('mouseenter', () => {
        sidebar.classList.add('is-expanded');
        body.classList.add('sidebar-is-expanded');
    });

    // Remove the class when the mouse leaves the sidebar area.
    sidebar.addEventListener('mouseleave', () => {
        sidebar.classList.remove('is-expanded');
        body.classList.remove('sidebar-is-expanded');
    });

    // --- Dropdown Logic ---
    if (dropdownToggle && submenu) {
        const toggleDropdown = (e) => {
            e.stopPropagation(); // Prevent the main document click listener from firing
            submenu.classList.toggle('is-open');
            dropdownToggle.classList.toggle('is-open');
        };

        dropdownToggle.addEventListener('click', toggleDropdown);

        // Accessibility: allow opening with Enter key
        dropdownToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                toggleDropdown(e);
            }
        });

        // --- Global Click/Key Listeners to Close Dropdown ---
        // Close the dropdown if the user clicks anywhere else on the page
        document.addEventListener('click', () => {
            if (submenu.classList.contains('is-open')) {
                submenu.classList.remove('is-open');
                dropdownToggle.classList.remove('is-open');
            }
        });

        // Close the dropdown if the user presses the Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && submenu.classList.contains('is-open')) {
                submenu.classList.remove('is-open');
                dropdownToggle.classList.remove('is-open');
            }
        });
    }
}
