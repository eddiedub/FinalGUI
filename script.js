document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Tab Navigation
    const tabs = document.querySelectorAll('.nav-links li');
    const tabContents = document.querySelectorAll('.tab-content');
    const topBarTitle = document.querySelector('.window-title');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update Tab Styling
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update Content
            tabContents.forEach(c => c.classList.remove('active'));
            const targetId = tab.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // Update Top Bar Title
            topBarTitle.textContent = tab.textContent + " Panel";
        });
    });

    // 2. Universal Toggle Switch Logic
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active-toggle');
        });
    });

    // 3. Lettuce Farm / Body Fat Panel Logic
    const lettuceToggle = document.getElementById('lettuce-toggle');
    const bfPanel = document.getElementById('bf-panel');

    if (lettuceToggle && bfPanel) {
        lettuceToggle.addEventListener('click', () => {
            // Check if active-toggle class is present after the click event toggles it
            if (lettuceToggle.classList.contains('active-toggle')) {
                bfPanel.classList.remove('hidden');
            } else {
                bfPanel.classList.add('hidden');
            }
        });
    }

    // 4. Active Target Overlay - Remove Button Logic
    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.target-card');
            if(card) {
                card.style.display = 'none';
            }
        });
    });

});