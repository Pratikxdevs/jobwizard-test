// /frontend/js/sidebar.js

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.getElementById('my-jobs-toggle');
    const submenu = document.getElementById('my-jobs-submenu');

    if (dropdownToggle && submenu) {
        const toggleDropdown = (e) => {
            // Stop propagation to prevent the document click listener from immediately closing it
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

        // Close dropdown if clicked outside
        document.addEventListener('click', () => {
            if (submenu.classList.contains('is-open')) {
                submenu.classList.remove('is-open');
                dropdownToggle.classList.remove('is-open');
            }
        });

        // Close dropdown with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && submenu.classList.contains('is-open')) {
                submenu.classList.remove('is-open');
                dropdownToggle.classList.remove('is-open');
            }
        });
    }
});
