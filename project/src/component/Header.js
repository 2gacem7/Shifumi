import "./Header.css";
import { useState } from "react";

export function Header(props) {
  const [showRulesCard, setShowRulesCard] = useState(false);

  const toggleRulesCard = () => {
    setShowRulesCard(!showRulesCard);
  };
  const rules =
    "La pierre bat les ciseaux en les cassant. Les ciseaux battent la feuille en la coupant. La feuille bat la pierre en l’enveloppant. La partie s’arrête quand un des deux joueurs atteint 3 points.";
  return (
    <div className="header">
      {!props.playing && (
        <>
          <div className="rules" onClick={toggleRulesCard}>
            règles
          </div>
          {showRulesCard && <div className="rulesCard"> {rules} </div>}
        </>
      )}
      <div className="container">
        {props.playing && (
          <>
            <div className="headerText">
              <div> {props.name} </div>
              <div> {props.score.player} </div>
            </div>
          </>
        )}
        <div className="headerTitle">Shifumi</div>
        {props.playing && (
          <div className="headerText">
            <div> Machine </div>
            <div> {props.score.ai} </div>
          </div>
        )}
      </div>
    </div>
  );
}
