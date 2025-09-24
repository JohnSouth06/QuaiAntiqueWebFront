import Route from "./route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "Galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/signin", "Connexion", "/pages/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/account.html", ["client", "admin"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "Ma réservation", "/pages/reservations/reserver.html", ["client"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";