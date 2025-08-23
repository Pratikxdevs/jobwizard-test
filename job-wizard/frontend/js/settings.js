// /frontend/js/settings.js

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.settings-menu-item');
    const panels = document.querySelectorAll('.settings-panel');

    if (menuItems.length > 0 && panels.length > 0) {

        const activatePanel = (targetId) => {
            // Handle active states for panels
            panels.forEach(p => p.classList.remove('active'));
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }

            // Handle active states for menu
            menuItems.forEach(i => {
                if (i.getAttribute('data-target') === targetId) {
                    i.classList.add('active');
                } else {
                    i.classList.remove('active');
                }
            });
        };

        // Click event for menu items
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = item.getAttribute('data-target');
                activatePanel(targetId);
                // Update URL hash without jumping
                history.pushState(null, '', `#${targetId}`);
            });
        });

        // Check for hash on page load
        const currentHash = window.location.hash.substring(1);
        if (currentHash) {
            activatePanel(currentHash);
        }
    }
});
