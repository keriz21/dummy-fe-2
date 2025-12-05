// Profile Page Script
document.addEventListener("DOMContentLoaded", function () {
	loadProfileData();

	const profileForm = document.getElementById("profileForm");
	profileForm.addEventListener("submit", handleProfileUpdate);
});

function loadProfileData() {
	const currentUser = getCurrentUser();

	if (currentUser) {
		document.getElementById("profileUsername").value =
			currentUser.username || "";
		document.getElementById("profileEmail").value = currentUser.email || "";
		document.getElementById("profileFullName").value =
			currentUser.fullName || "";
		document.getElementById("profileBio").value = currentUser.bio || "";
		document.getElementById("profilePhone").value = currentUser.phone || "";

		// Set avatar initial
		const initial = currentUser.fullName
			? currentUser.fullName.charAt(0).toUpperCase()
			: currentUser.username.charAt(0).toUpperCase();
		document.getElementById("avatarInitial").textContent = initial;
	}
}

function handleProfileUpdate(e) {
	e.preventDefault();

	const currentUser = getCurrentUser();

	const updatedData = {
		email: document.getElementById("profileEmail").value,
		fullName: document.getElementById("profileFullName").value,
		bio: document.getElementById("profileBio").value,
		phone: document.getElementById("profilePhone").value,
	};

	if (updateUser(currentUser.id, updatedData)) {
		showToast("Profile berhasil diperbarui", "success");
		loadProfileData();

		// Update header avatar
		const headerAvatar = document.getElementById("headerAvatar");
		const headerUsername = document.getElementById("headerUsername");
		if (headerAvatar && headerUsername) {
			const initial = updatedData.fullName.charAt(0).toUpperCase();
			headerAvatar.textContent = initial;
		}
	} else {
		showToast("Gagal memperbarui profile", "error");
	}
}
