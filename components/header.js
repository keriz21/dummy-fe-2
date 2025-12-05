// Header Component
(function () {
	const headerHTML = `
        <header class="header">
            <div class="header-left">
                <button id="toggleSidebar" class="menu-btn">☰</button>
                <h2 class="logo">Dashboard App</h2>
            </div>
            <div class="header-right">
                <button id="darkModeBtn" class="icon-btn" title="Toggle Dark Mode">🌙</button>
                <div class="user-menu">
                    <button class="user-btn" id="userMenuBtn">
                        <span class="user-avatar" id="headerAvatar">U</span>
                        <span id="headerUsername">User</span>
                    </button>
                    <div class="dropdown-menu" id="userDropdown">
                        <a href="profile.html">👤 Profile</a>
                        <a href="settings.html">⚙️ Settings</a>
                        <hr>
                        <a href="#" id="logoutBtn">🚪 Logout</a>
                    </div>
                </div>
            </div>
        </header>
    `;

	document.getElementById("header").innerHTML = headerHTML;

	// Toggle sidebar
	document
		.getElementById("toggleSidebar")
		.addEventListener("click", function () {
			document.querySelector(".sidebar").classList.toggle("collapsed");
			document.querySelector(".content").classList.toggle("expanded");
		});

	// User dropdown
	const userMenuBtn = document.getElementById("userMenuBtn");
	const userDropdown = document.getElementById("userDropdown");

	userMenuBtn.addEventListener("click", function (e) {
		e.stopPropagation();
		userDropdown.classList.toggle("show");
	});

	document.addEventListener("click", function () {
		userDropdown.classList.remove("show");
	});

	// Load user info
	const currentUser = getCurrentUser();
	if (currentUser) {
		document.getElementById("headerUsername").textContent =
			currentUser.username;
		const initial = currentUser.fullName
			? currentUser.fullName.charAt(0).toUpperCase()
			: currentUser.username.charAt(0).toUpperCase();
		document.getElementById("headerAvatar").textContent = initial;
	}

	// Logout
	document.getElementById("logoutBtn").addEventListener("click", function (e) {
		e.preventDefault();
		logout();
	});

	// Dark mode toggle
	document
		.getElementById("darkModeBtn")
		.addEventListener("click", toggleDarkMode);
})();
