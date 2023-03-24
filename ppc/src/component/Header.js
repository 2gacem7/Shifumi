import "./Header.css"

export function Header (props)  {
  
    return (
        <div className="header">
            <div className="container">
                <div className="headerText">
                    {props.name}
                </div>
                <div className="headerTitle"> 
                   Shifumi
                </div>
                <div className="headerText">
                     {"Score " + props.score.player + " / " + props.score.ai }
                </div>
            
            </div>
        </div>
    )
}