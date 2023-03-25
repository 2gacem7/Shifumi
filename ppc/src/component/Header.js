import "./Header.css"
export function Header (props)  {
    const rules = "La pierre bat les ciseaux en les cassant. Les ciseaux battent la feuille en la coupant. La feuille bat la pierre en l’enveloppant. La partie s’arrête quand un des deux joueurs atteint 3 points."
    return (
        <div className="header">
            {!props.playing && (
                <>
                    <div className="rules"> règles </div>
                    <div className="rulesCard"> {rules} </div>
                </>
            )}
            <div className="container">
                {props.playing && (
                    <div className="headerText">
                    {props.name + " " + props.score.player}
                    </div>
                )}
                <div className="headerTitle"> 
                   Shifumi
                </div>
                {props.playing && (
                     <div className="headerText">
                     {"Machine " + " " + props.score.ai }
                    </div>
                )}
            </div>
        </div>
    )
}