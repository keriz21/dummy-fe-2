// Settings Page Script
document.addEventListener("DOMContentLoaded", function () {
	initializeSettings();

	document
		.getElementById("changePasswordBtn")
		.addEventListener("click", handleChangePassword);
	document
		.getElementById("deleteAccountBtn")
		.addEventListener("click", handleDeleteAccount);

	// Dark mode toggle in settings
	const darkModeToggle = document.getElementById("darkModeToggle");
	darkModeToggle.checked = localStorage.getItem("darkMode") === "true";
	darkModeToggle.addEventListener("change", toggleDarkMode);

	// Other toggles
	document
		.getElementById("emailNotif")
		.addEventListener("change", handleNotificationToggle);
	document
		.getElementById("pushNotif")
		.addEventListener("change", handleNotificationToggle);
	document
		.getElementById("twoFactorAuth")
		.addEventListener("change", handleSecurityToggle);
});

function initializeSettings() {
	// Load saved preferences
	const emailNotif = localStorage.getItem("emailNotif") !== "false";
	const pushNotif = localStorage.getItem("pushNotif") === "true";
	const twoFactorAuth = localStorage.getItem("twoFactorAuth") === "true";

	document.getElementById("emailNotif").checked = emailNotif;
	document.getElementById("pushNotif").checked = pushNotif;
	document.getElementById("twoFactorAuth").checked = twoFactorAuth;
}

function handleNotificationToggle(e) {
	const setting = e.target.id;
	const value = e.target.checked;
	localStorage.setItem(setting, value);
	showToast(
		`Pengaturan notifikasi ${value ? "diaktifkan" : "dinonaktifkan"}`,
		"success"
	);
}

function handleSecurityToggle(e) {
	const value = e.target.checked;
	localStorage.setItem("twoFactorAuth", value);
	showToast(
		`Two-Factor Authentication ${value ? "diaktifkan" : "dinonaktifkan"}`,
		"success"
	);
}

function handleChangePassword() {
	const newPassword = prompt("Masukkan password baru:");

	if (newPassword && newPassword.length >= 6) {
		const currentUser = getCurrentUser();
		const users = getUsers();
		const user = users.find((u) => u.id === currentUser.id);

		if (user) {
			user.password = newPassword;
			localStorage.setItem("users", JSON.stringify(users));
			showToast("Password berhasil diubah", "success");
		}
	} else if (newPassword) {
		showToast("Password minimal 6 karakter", "error");
	}
}

function handleDeleteAccount() {
	const confirmation = confirm(
		"Apakah Anda yakin ingin menghapus akun? Tindakan ini tidak dapat dibatalkan."
	);

	if (confirmation) {
		const doubleConfirm = prompt('Ketik "DELETE" untuk konfirmasi:');

		if (doubleConfirm === "DELETE") {
			const currentUser = getCurrentUser();
			deleteUser(currentUser.id);
			localStorage.removeItem("currentUser");
			showToast("Akun berhasil dihapus", "success");
			setTimeout(() => {
				const basePath = window.location.pathname.includes("/dummy-fe-2/")
					? "/dummy-fe-2/"
					: "/";
				window.location.href = basePath + "index.html";
			}, 1500);
		} else {
			showToast("Penghapusan akun dibatalkan", "info");
		}
	}
}
