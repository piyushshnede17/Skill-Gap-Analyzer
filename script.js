document.addEventListener("DOMContentLoaded", function () {

    const homeButton = document.querySelector("#home button");
    const loginForm = document.querySelector("#login form");
    const navLinks = document.querySelectorAll("nav a");

    // Get Started button
    if (homeButton) {
        homeButton.addEventListener("click", function () {
            document.querySelector("#login").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Login form
    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();

            if (name === "" || email === "") {
                alert("Please enter your name and email.");
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email.");
                return;
            }

            const formData = new URLSearchParams();

            formData.append("name", name);
            formData.append("email", email);

            try {

                const response = await fetch(
                    "http://localhost:8080/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/x-www-form-urlencoded"
                        },
                        body: formData.toString()
                    }
                );

                const data = await response.json();

                if (data.success) {

                    localStorage.setItem(
                        "skillGapUserName",
                        data.name
                    );

                    localStorage.setItem(
                        "skillGapUserEmail",
                        data.email
                    );

                    alert(
                        "Welcome " + data.name +
                        "! Java backend se connection successful."
                    );

                    loginForm.reset();

                } else {

                    alert(data.message);
                }

            } catch (error) {

                console.error(error);

                alert(
                    "Java backend se connection nahi ho paya. " +
                    "Please check whether the Java server is running on port 8080."
                );
            }
        });
    }

    // Smooth navigation
    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
