// Footer Component
(function () {
	const currentYear = new Date().getFullYear();
	const footerHTML = `
        <footer class="footer">
            <p>&copy; ${currentYear} Dashboard App. All rights reserved.</p>
        </footer>
    `;

	document.getElementById("footer").innerHTML = footerHTML;
})();
