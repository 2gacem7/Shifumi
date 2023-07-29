// isMobileScreen.js

// Fonction pour vérifier si l'écran est un écran mobile
function isMobileScreen() {
    // Récupérer la largeur de l'écran
    const screenWidth = window.innerWidth;
    
    // Définir la largeur seuil pour les écrans considérés comme mobiles (ajustez selon vos besoins)
    const mobileScreenWidthThreshold = 767; // par exemple, 767px
    
    // Vérifier si la largeur de l'écran est inférieure à la largeur seuil
    return screenWidth <= mobileScreenWidthThreshold;
  }
  
  export default isMobileScreen;
  