// Toast Notification System
function showToast(message, type = "info") {
	const toastContainer = document.getElementById("toast-container");
	const toast = document.createElement("div");
	toast.className = `toast toast-${type}`;

	const icons = {
		success: "✓",
		error: "✕",
		warning: "⚠",
		info: "ℹ",
	};

	toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-message">${message}</span>
    `;

	toastContainer.appendChild(toast);

	setTimeout(() => {
		toast.classList.add("show");
	}, 10);

	setTimeout(() => {
		toast.classList.remove("show");
		setTimeout(() => {
			toast.remove();
		}, 300);
	}, 3000);
}

// Dark Mode
function initDarkMode() {
	const darkMode = localStorage.getItem("darkMode") === "true";
	if (darkMode) {
		document.body.classList.add("dark-mode");
		const darkModeBtn = document.getElementById("darkModeBtn");
		if (darkModeBtn) {
			darkModeBtn.textContent = "☀️";
		}
	}
}

function toggleDarkMode() {
	document.body.classList.toggle("dark-mode");
	const isDark = document.body.classList.contains("dark-mode");
	localStorage.setItem("darkMode", isDark);

	const darkModeBtn = document.getElementById("darkModeBtn");
	if (darkModeBtn) {
		darkModeBtn.textContent = isDark ? "☀️" : "🌙";
	}

	showToast(`Mode ${isDark ? "gelap" : "terang"} diaktifkan`, "success");
}

// Initialize dark mode on page load
document.addEventListener("DOMContentLoaded", initDarkMode);

// Helper functions
function generateId() {
	return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatDate(date) {
	return new Date(date).toLocaleDateString("id-ID", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
