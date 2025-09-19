import Route from "./route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/signin.html"),
    new Route("/signup", "Inscription", "/pages/signup.html"),
    new Route("/account", "Mon compte", "/pages/account.html"),
    new Route("/editPassword", "Changement de mot de passe", "/pages/editPassword.html"),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html"),
    new Route("/reserver", "Ma réservation", "/pages/reservations/reserver.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";