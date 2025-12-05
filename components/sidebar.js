// Sidebar Component
(function () {
	const sidebarHTML = `
        <aside class="sidebar">
            <nav class="sidebar-nav">
                <a href="dashboard.html" class="nav-item" data-page="dashboard">
                    <span class="nav-icon">📊</span>
                    <span class="nav-text">Dashboard</span>
                </a>
                <a href="users.html" class="nav-item" data-page="users">
                    <span class="nav-icon">👥</span>
                    <span class="nav-text">Users</span>
                </a>
                <a href="profile.html" class="nav-item" data-page="profile">
                    <span class="nav-icon">👤</span>
                    <span class="nav-text">Profile</span>
                </a>
                <a href="settings.html" class="nav-item" data-page="settings">
                    <span class="nav-icon">⚙️</span>
                    <span class="nav-text">Settings</span>
                </a>
            </nav>
        </aside>
    `;

	document.getElementById("sidebar").innerHTML = sidebarHTML;

	// Set active menu item
	const currentPage = window.location.pathname
		.split("/")
		.pop()
		.replace(".html", "");
	const navItems = document.querySelectorAll(".nav-item");

	navItems.forEach((item) => {
		const page = item.getAttribute("data-page");
		if (page === currentPage) {
			item.classList.add("active");
		}
	});
})();
