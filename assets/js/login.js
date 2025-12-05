// Login Page Script
document.addEventListener("DOMContentLoaded", function () {
	// Redirect if already logged in
	if (isAuthenticated()) {
		window.location.href = "pages/dashboard.html";
		return;
	}

	const loginForm = document.getElementById("loginForm");
	const registerForm = document.getElementById("registerForm");
	const loginBox = document.querySelector(".login-box");
	const registerBox = document.querySelector(".register-box");
	const showRegisterLink = document.getElementById("showRegister");
	const showLoginLink = document.getElementById("showLogin");

	// Toggle between login and register
	showRegisterLink.addEventListener("click", function (e) {
		e.preventDefault();
		loginBox.style.display = "none";
		registerBox.style.display = "block";
	});

	showLoginLink.addEventListener("click", function (e) {
		e.preventDefault();
		registerBox.style.display = "none";
		loginBox.style.display = "block";
	});

	// Login form submit
	loginForm.addEventListener("submit", function (e) {
		e.preventDefault();

		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;

		if (login(username, password)) {
			setTimeout(() => {
				window.location.href = "pages/dashboard.html";
			}, 500);
		}
	});

	// Register form submit
	registerForm.addEventListener("submit", function (e) {
		e.preventDefault();

		const userData = {
			username: document.getElementById("regUsername").value,
			email: document.getElementById("regEmail").value,
			password: document.getElementById("regPassword").value,
			fullName: document.getElementById("regFullName").value,
		};

		if (register(userData)) {
			registerForm.reset();
			setTimeout(() => {
				registerBox.style.display = "none";
				loginBox.style.display = "block";
			}, 1000);
		}
	});
});
