// /frontend/js/main.js

/**
 * This script runs on all authenticated pages and handles shared functionality.
 * Its main role is to handle dynamic UI elements like the active sidebar link.
 * Component loading has been moved to a manual inclusion process to ensure
 * reliability across all environments.
 */
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Sets the 'active' class on the sidebar link corresponding to the current page.
     */
    const setActiveSidebarLink = () => {
        const currentPagePath = window.location.pathname;
        const sidebarLinks = document.querySelectorAll('.sidebar-link');

        sidebarLinks.forEach(link => {
            // The link's href is an absolute path, so we can get its pathname
            const linkPath = new URL(link.href, window.location.origin).pathname;

            // Remove 'active' class from any link that might have it by default
            // (e.g. the one in the component file)
            link.classList.remove('active');

            // Add 'active' class if the link's path matches the current page's path.
            if (linkPath === currentPagePath) {
                link.classList.add('active');
            }
        });
    };

    // Set the active link on page load.
    // We check if a sidebar exists to avoid running this on unauthenticated pages.
    if (document.querySelector('.sidebar')) {
        setActiveSidebarLink();
    }
});
