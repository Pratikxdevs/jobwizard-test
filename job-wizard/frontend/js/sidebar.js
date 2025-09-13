// /frontend/js/sidebar.js
// Handles interactivity for the new animated sidebar.

document.addEventListener('DOMContentLoaded', () => {
    // This script needs to wait for the sidebar to be loaded into the DOM by main.js
    // We can use a MutationObserver to wait for the #sidebar-placeholder to be populated.
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');

    if (sidebarPlaceholder) {
        const observer = new MutationObserver((mutationsList, observer) => {
            for(const mutation of mutationsList) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    const dropdownToggle = document.getElementById('my-jobs-toggle');
                    const submenu = document.getElementById('my-jobs-submenu');

                    if (dropdownToggle && submenu) {
                        const toggleDropdown = (e) => {
                            e.stopPropagation();
                            submenu.classList.toggle('is-open');
                            dropdownToggle.classList.toggle('is-open');
                        };

                        dropdownToggle.addEventListener('click', toggleDropdown);

                        dropdownToggle.addEventListener('keydown', (e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                toggleDropdown(e);
                            }
                        });

                        document.addEventListener('click', () => {
                            if (submenu.classList.contains('is-open')) {
                                submenu.classList.remove('is-open');
                                dropdownToggle.classList.remove('is-open');
                            }
                        });

                        document.addEventListener('keydown', (e) => {
                            if (e.key === 'Escape' && submenu.classList.contains('is-open')) {
                                submenu.classList.remove('is-open');
                                dropdownToggle.classList.remove('is-open');
                            }
                        });

                        // Once the script is initialized, we don't need to observe anymore.
                        observer.disconnect();
                    }
                }
            }
        });

        observer.observe(sidebarPlaceholder, { childList: true });
    }
});
