// Authentication System
function isAuthenticated() {
	return localStorage.getItem("currentUser") !== null;
}

function getCurrentUser() {
	const userJson = localStorage.getItem("currentUser");
	return userJson ? JSON.parse(userJson) : null;
}

function setCurrentUser(user) {
	localStorage.setItem("currentUser", JSON.stringify(user));
}

function logout() {
	localStorage.removeItem("currentUser");
	showToast("Logout berhasil", "success");
	setTimeout(() => {
		// Support both local and GitHub Pages paths
		const basePath = window.location.pathname.includes("/dummy-fe-2/")
			? "/dummy-fe-2/"
			: "/";
		window.location.href = basePath + "index.html";
	}, 500);
}

function register(userData) {
	const users = getUsers();

	// Check if username already exists
	if (users.find((u) => u.username === userData.username)) {
		showToast("Username sudah digunakan", "error");
		return false;
	}

	// Check if email already exists
	if (users.find((u) => u.email === userData.email)) {
		showToast("Email sudah terdaftar", "error");
		return false;
	}

	const newUser = {
		id: generateId(),
		username: userData.username,
		email: userData.email,
		password: userData.password,
		fullName: userData.fullName,
		bio: "",
		phone: "",
		status: "active",
		createdAt: new Date().toISOString(),
	};

	users.push(newUser);
	localStorage.setItem("users", JSON.stringify(users));
	showToast("Registrasi berhasil! Silakan login", "success");
	return true;
}

function login(username, password) {
	const users = getUsers();
	const user = users.find(
		(u) => u.username === username && u.password === password
	);

	if (user) {
		const { password, ...userWithoutPassword } = user;
		setCurrentUser(userWithoutPassword);
		showToast("Login berhasil!", "success");
		return true;
	}

	showToast("Username atau password salah", "error");
	return false;
}

function getUsers() {
	const usersJson = localStorage.getItem("users");
	if (!usersJson) {
		// Initialize with default users
		const defaultUsers = [
			{
				id: "1",
				username: "admin",
				email: "admin@example.com",
				password: "admin123",
				fullName: "Administrator",
				bio: "System Administrator",
				phone: "081234567890",
				status: "active",
				createdAt: new Date().toISOString(),
			},
			{
				id: "2",
				username: "user",
				email: "user@example.com",
				password: "user123",
				fullName: "Regular User",
				bio: "Regular user account",
				phone: "081234567891",
				status: "active",
				createdAt: new Date().toISOString(),
			},
		];
		localStorage.setItem("users", JSON.stringify(defaultUsers));
		return defaultUsers;
	}
	return JSON.parse(usersJson);
}

function updateUser(userId, userData) {
	const users = getUsers();
	const index = users.findIndex((u) => u.id === userId);

	if (index !== -1) {
		users[index] = { ...users[index], ...userData };
		localStorage.setItem("users", JSON.stringify(users));

		// Update current user if it's the logged-in user
		const currentUser = getCurrentUser();
		if (currentUser && currentUser.id === userId) {
			setCurrentUser(users[index]);
		}

		return true;
	}
	return false;
}

function deleteUser(userId) {
	const users = getUsers();
	const filteredUsers = users.filter((u) => u.id !== userId);
	localStorage.setItem("users", JSON.stringify(filteredUsers));
}

// Page protection
function protectPage() {
	if (!isAuthenticated()) {
		// Support both local and GitHub Pages paths
		const basePath = window.location.pathname.includes("/dummy-fe-2/")
			? "/dummy-fe-2/"
			: "/";
		window.location.href = basePath + "index.html";
	}
}

// Call protectPage on protected pages
const currentPath = window.location.pathname;
const isLoginPage =
	currentPath.endsWith("index.html") ||
	currentPath.endsWith("/") ||
	currentPath.endsWith("/dummy-fe-2");
const is404Page = currentPath.includes("404.html");

if (!isLoginPage && !is404Page) {
	protectPage();
}
