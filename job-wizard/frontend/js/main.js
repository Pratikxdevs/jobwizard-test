// /frontend/js/main.js

/**
 * This script runs on all pages and handles shared functionality.
 * Its main roles are:
 * 1. Loading shared components (navbar, sidebar) into placeholders.
 * 2. Handling dynamic UI elements like the active sidebar link.
 */
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Fetches an HTML component and loads it into a target element by ID.
     * @param {string} componentFile - The name of the component file (e.g., 'navbar.html').
     * @param {string} placeholderId - The ID of the element to load the component into.
     */
    const loadComponent = (componentFile, placeholderId) => {
        const placeholder = document.getElementById(placeholderId);

        // Only fetch if the placeholder exists on the page.
        if (placeholder) {
            // The path to the components directory is relative to the page in /pages/.
            const componentPath = `../components/${componentFile}`;

            fetch(componentPath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(html => {
                    placeholder.innerHTML = html;
                    // After loading the sidebar, update the active link.
                    if (placeholderId === 'sidebar-placeholder') {
                        setActiveSidebarLink();
                    }
                })
                .catch(error => {
                    console.error(`Error loading component ${componentFile}:`, error);
                    placeholder.innerHTML = `<p style="color: red;">Error: Could not load ${componentFile}.</p>`;
                });
        }
    };

    /**
     * Sets the 'active' class on the sidebar link corresponding to the current page.
     */
    const setActiveSidebarLink = () => {
        // A small delay ensures the component is rendered before we try to manipulate it.
        setTimeout(() => {
            const currentPagePath = window.location.pathname;
            const sidebarLinks = document.querySelectorAll('.sidebar-link');

            sidebarLinks.forEach(link => {
                const linkPath = new URL(link.href).pathname;

                // Remove 'active' class from any link that has it.
                link.classList.remove('active');

                // Add 'active' class if the link's path matches the current page's path.
                if (linkPath === currentPagePath) {
                    link.classList.add('active');
                }
            });
        }, 100); // 100ms timeout.
    };

    // Load the persistent components into their placeholders on page load.
    loadComponent('navbar.html', 'navbar-placeholder');
    loadComponent('sidebar.html', 'sidebar-placeholder');
});
