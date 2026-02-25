import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export function protectRoute(pageType) {

    onAuthStateChanged(auth, (user) => {

        console.log("Auth check on:", pageType, "User:", user);

        if (pageType === "login") {
            if (user) {
                window.location.replace("dashboard.html");
            }
        }

        if (pageType === "dashboard") {
            if (!user) {
                window.location.replace("login.html");
            }
        }

    });
}
