import { Header } from './Header';
import { Footer } from './Footer';
import { Input } from './Input';
import "./Home.css"
export function Home ()  {
    return (
        // Header avec le score + le nom choisi du joueur;
        // Input d'arriver (Inscrire le nom du joueur) + background en Blur;
        // Background en theme de street fighter;
        // Scene au milieu de fight (les deux cartes s'afficheront au moment ou le joueur choisi) - 3 seconde d'attentes
        // Footer avec le score de l'intelligence artificielle. 
        <div>
            <Header />
            <div className="ring">
                <div className="namingContainer">
                    <Input />
                </div>
            </div>
            <Footer />
        </div>
    )
}