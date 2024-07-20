document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById('home-link');

    // Function to show the confirmation prompt
    function showConfirmationPrompt(targetUrl) {
        const userConfirmed = confirm('Are you sure you want to Logout?');

        if (userConfirmed) {
            window.location.href = targetUrl; // Redirect if the user confirms
        } else {
            // Push the state back to keep the user on the dashboard
            window.history.pushState(null, null, window.location.href);
        }
    }

    // Event listener for the "HOME" link
    homeLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link click behavior
        showConfirmationPrompt(this.href);
    });

    // Event listener for the back button
    window.addEventListener('popstate', function (event) {
        showConfirmationPrompt(document.referrer);
    });

    // Add a state to the history stack to handle the back button
    window.history.pushState(null, null, window.location.href);
});
