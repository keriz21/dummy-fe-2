// Users Page Script
let currentEditId = null;

document.addEventListener("DOMContentLoaded", function () {
	loadUsers();
	initializeModal();

	document.getElementById("addUserBtn").addEventListener("click", openAddModal);
});

function loadUsers() {
	const users = getUsers();
	const tbody = document.getElementById("usersTableBody");

	tbody.innerHTML = "";

	users.forEach((user) => {
		const tr = document.createElement("tr");
		tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.fullName}</td>
            <td><span class="status-badge status-${user.status}">${user.status}</span></td>
            <td>
                <button class="btn-icon btn-edit" onclick="editUser('${user.id}')" title="Edit">✏️</button>
                <button class="btn-icon btn-delete" onclick="confirmDelete('${user.id}')" title="Delete">🗑️</button>
            </td>
        `;
		tbody.appendChild(tr);
	});
}

function initializeModal() {
	const modal = document.getElementById("userModal");
	const closeBtn = document.querySelector(".close");
	const cancelBtn = document.getElementById("cancelBtn");
	const userForm = document.getElementById("userForm");

	closeBtn.addEventListener("click", closeModal);
	cancelBtn.addEventListener("click", closeModal);

	window.addEventListener("click", function (e) {
		if (e.target === modal) {
			closeModal();
		}
	});

	userForm.addEventListener("submit", handleUserSubmit);
}

function openAddModal() {
	currentEditId = null;
	document.getElementById("modalTitle").textContent = "Tambah User";
	document.getElementById("userForm").reset();
	document.getElementById("userId").value = "";
	document.getElementById("userModal").style.display = "block";
}

function editUser(userId) {
	const users = getUsers();
	const user = users.find((u) => u.id === userId);

	if (user) {
		currentEditId = userId;
		document.getElementById("modalTitle").textContent = "Edit User";
		document.getElementById("userId").value = user.id;
		document.getElementById("modalUsername").value = user.username;
		document.getElementById("modalEmail").value = user.email;
		document.getElementById("modalFullName").value = user.fullName;
		document.getElementById("modalStatus").value = user.status;
		document.getElementById("userModal").style.display = "block";
	}
}

function closeModal() {
	document.getElementById("userModal").style.display = "none";
	document.getElementById("userForm").reset();
	currentEditId = null;
}

function handleUserSubmit(e) {
	e.preventDefault();

	const formData = {
		username: document.getElementById("modalUsername").value,
		email: document.getElementById("modalEmail").value,
		fullName: document.getElementById("modalFullName").value,
		status: document.getElementById("modalStatus").value,
	};

	if (currentEditId) {
		// Update existing user
		if (updateUser(currentEditId, formData)) {
			showToast("User berhasil diperbarui", "success");
			loadUsers();
			closeModal();
		} else {
			showToast("Gagal memperbarui user", "error");
		}
	} else {
		// Add new user
		const users = getUsers();

		if (users.find((u) => u.username === formData.username)) {
			showToast("Username sudah digunakan", "error");
			return;
		}

		const newUser = {
			id: generateId(),
			...formData,
			password: "password123", // Default password
			bio: "",
			phone: "",
			createdAt: new Date().toISOString(),
		};

		users.push(newUser);
		localStorage.setItem("users", JSON.stringify(users));

		showToast("User berhasil ditambahkan", "success");
		loadUsers();
		closeModal();
	}
}

function confirmDelete(userId) {
	if (confirm("Apakah Anda yakin ingin menghapus user ini?")) {
		const currentUser = getCurrentUser();

		if (currentUser.id === userId) {
			showToast("Tidak dapat menghapus user yang sedang login", "error");
			return;
		}

		deleteUser(userId);
		showToast("User berhasil dihapus", "success");
		loadUsers();
	}
}
