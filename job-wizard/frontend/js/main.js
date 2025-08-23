// /frontend/js/main.js
// This script handles the dynamic loading of shared components.

document.addEventListener('DOMContentLoaded', () => {

    /**
     * Fetches an HTML component and loads it into a target element by ID.
     * This requires the page to be served by a web server, not opened as a file.
     * @param {string} componentFile - The name of the component file (e.g., 'navbar.html').
     * @param {string} placeholderId - The ID of the element to load the component into.
     */
    const loadComponent = (componentFile, placeholderId) => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            // Assumes pages are in /pages/ and components are in /components/
            const componentPath = `../components/${componentFile}`;

            fetch(componentPath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok for ${componentPath}`);
                    }
                    return response.text();
                })
                .then(html => {
                    placeholder.innerHTML = html;
                })
                .catch(error => {
                    console.error(`Error loading component ${componentFile}:`, error);
                    placeholder.innerHTML = `<p style="color: red; text-align: center;">Error loading ${placeholderId}.</p>`;
                });
        }
    };

    // Load the persistent components into all authenticated pages.
    loadComponent('navbar.html', 'navbar-placeholder');
    loadComponent('sidebar.html', 'sidebar-placeholder');
});
