// /frontend/js/main.js
// This script handles the dynamic loading of shared components and their logic.

document.addEventListener('DOMContentLoaded', () => {

    /**
     * Fetches an HTML component, loads it into a target element, and optionally
     * loads and executes a corresponding JavaScript file.
     * @param {string} componentFile - The name of the component HTML file (e.g., 'sidebar.html').
     * @param {string} placeholderId - The ID of the element to load the component into.
     * @param {string} [jsFile] - Optional: The name of the JS file to load after the HTML.
     */
    const loadComponent = (componentFile, placeholderId, jsFile) => {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) return;

        const componentPath = `../components/${componentFile}`;

        // Step 1: Fetch and inject the HTML.
        fetch(componentPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load HTML for ${componentFile}`);
                }
                return response.text();
            })
            .then(html => {
                placeholder.innerHTML = html;

                // Step 2: If a JS file is specified, create and append a script tag for it.
                if (jsFile) {
                    const script = document.createElement('script');
                    script.src = `../js/${jsFile}`;
                    script.onerror = () => console.error(`Failed to load script: ${jsFile}`);
                    document.body.appendChild(script);
                }
            })
            .catch(error => {
                console.error(`Error loading component ${componentFile}:`, error);
                placeholder.innerHTML = `<p style="color: red; text-align: center;">Error loading component.</p>`;
            });
    };

    // Load persistent components and their corresponding scripts.
    loadComponent('navbar.html', 'navbar-placeholder'); // Navbar has no specific JS for now
    loadComponent('sidebar.html', 'sidebar-placeholder', 'sidebar.js');
});
