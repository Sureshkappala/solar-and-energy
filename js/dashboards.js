document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // SIDEBAR RESPONSIVE HAMBURGER TOGGLE
    // ==========================================
    const menuTrigger = document.querySelector('.dash-menu-trigger');
    const sidebar = document.querySelector('.dash-sidebar');
    
    if (menuTrigger && sidebar) {
        // Create backdrop overlay for sidebar
        let backdrop = document.querySelector('.dash-backdrop');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.className = 'dash-backdrop';
            // Styling backdrop overlay
            Object.assign(backdrop.style, {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)',
                zIndex: '95',
                opacity: '0',
                visibility: 'hidden',
                transition: 'opacity 0.3s, visibility 0.3s'
            });
            document.body.appendChild(backdrop);
        }

        const openSidebar = () => {
            sidebar.classList.add('active');
            backdrop.style.opacity = '1';
            backdrop.style.visibility = 'visible';
            document.body.classList.add('menu-open');
            document.documentElement.classList.add('menu-open');
        };

        const closeSidebar = () => {
            sidebar.classList.remove('active');
            backdrop.style.opacity = '0';
            backdrop.style.visibility = 'hidden';
            document.body.classList.remove('menu-open');
            document.documentElement.classList.remove('menu-open');
        };

        menuTrigger.addEventListener('click', openSidebar);
        backdrop.addEventListener('click', closeSidebar);
        
        // Auto-close sidebar on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 991) {
                closeSidebar();
            }
        });
    }

    // ==========================================
    // DYNAMIC TABLE SEARCH FILTER
    // ==========================================
    const searchInput = document.getElementById('tableSearch');
    const tableRows = document.querySelectorAll('.dash-table tbody tr');

    if (searchInput && tableRows.length > 0) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim().toLowerCase();
            
            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(query)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // ==========================================
    // MOCK TELEMETRY UPDATER (Dynamic values)
    // ==========================================
    const liveLoadVal = document.getElementById('liveLoadVal');
    const liveCapacityVal = document.getElementById('liveCapacityVal');

    if (liveLoadVal && liveCapacityVal) {
        let baseLoad = 34.8;
        let baseCapacity = 48.2;

        setInterval(() => {
            // Slight oscillation to simulate actual smart telemetry
            const deltaLoad = (Math.random() - 0.5) * 1.2;
            const deltaCap = (Math.random() - 0.5) * 0.8;

            baseLoad = Math.max(20, Math.min(100, baseLoad + deltaLoad));
            baseCapacity = Math.max(30, Math.min(120, baseCapacity + deltaCap));

            liveLoadVal.innerHTML = `${baseLoad.toFixed(1)} <span style="font-size: 14px; font-weight: 500; color: var(--text-muted);">kW</span>`;
            liveCapacityVal.innerHTML = `${baseCapacity.toFixed(1)} <span style="font-size: 14px; font-weight: 500; color: var(--text-muted);">kW</span>`;
        }, 3000);
    }
});
