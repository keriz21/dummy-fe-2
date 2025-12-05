// Dashboard Page Script
document.addEventListener("DOMContentLoaded", function () {
	loadDashboardData();
});

function loadDashboardData() {
	const users = getUsers();
	const totalUsers = users.length;

	document.getElementById("totalUsers").textContent = totalUsers;

	showToast("Dashboard berhasil dimuat", "success");
}
