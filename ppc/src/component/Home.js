import { Header } from './Header';
import { Footer } from './Footer';
import {Card } from './Card';
import { Input } from './Input';
import "./Home.css"
import {useState, useEffect} from 'react'

export function Home ()  {
    const [cardSelect, setCardSelect] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [aiCardSelect, setAiCardSelect] = useState(null);
    const [score, setScore] = useState(0);
    const [name, setName] = useState("Chaoshyn");
    let [round, setRound] = useState(1);
    const [audioActivate, setAudioActivate] = useState(false)
    let [playerScore, setPlayerScore] = useState(0);
    let [aiScore, setAiScore] = useState(0);


   
    var audio = document.createElement('audio');
    audio.setAttribute('src','balrog.mp3');
 
    function startPlaying() {
        if(cardSelect !== null && aiCardSelect !== null) {
            setPlaying(true)
          /*   audio.play(); */
            getScore()
        } else {
            alert("Choisis ton champion")
        }
        if(playing) {
            setRound(round += 1)
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    function getfight(index) {
        setCardSelect(index)
        setAiCardSelect(getRandomInt(3))
    }


    function getScore () {
        console.log("player" + cardSelect)
        console.log("ai" + aiCardSelect);
        if(cardSelect !== null && aiCardSelect !== null) {
            if(cardSelect === aiCardSelect) {
                return;
            }
            if(cardSelect === 0) {
                if(aiCardSelect === 1) {
                    setAiScore(aiScore += 1)
                } else {
                    setPlayerScore(playerScore += 1)
                }  
            } else if(cardSelect === 1) {
                if(aiCardSelect === 0) {
                    setPlayerScore(playerScore += 1)
                } else {
                    setAiScore(aiScore += 1)
                }  
            } else {
                if(aiCardSelect === 0) {
                    setAiScore(aiScore += 1)
                } else {
                    setPlayerScore(playerScore += 1)
                } 
            }
        }
       
    }

    function compareCard () {

    }
    function ContinuePlaying() {
        setPlaying(false);
        setShowRoundButton(false)
        setRound(round += 1);
    }

    function stopPlaying() {
        setPlaying(false)
        setRound(1)
        setAiScore(0)
        setPlayerScore(0)
    }
      
    function activateSong() {
        audio.play();
        setAudioActivate(true);
    }

    function disableSong() {
        audio.preload();
        setAudioActivate(false);
    }
    console.log(cardSelect)
    const gameCard = [{
        src:"scissors.png",
        alt:"scissors",
        id: 0
    },
    {
        src:"rock.png",
        alt:"rock",
        id: 1,
    },
    {
        src:"paper.png",
        alt:"paper",
        id: 2
    }]

    const [showRoundButton,setShowRoundButton] = useState(false)
    useEffect(()=>{
        if(!showRoundButton) {
            setTimeout(function() {
                setShowRoundButton(true)
                   }, 4000)}
        },
     [])

    return (
        <div>
            <Header name={name} playing={playing} score={{player: playerScore, ai: aiScore}}/>
            {/* {!audioActivate ? <div onClick={activateSong}> Activer le son </div> : <div onClick={disableSong}> Desactiver le son </div>} */}
            <div className="ring">
                {!name && ( <div className="namingContainer">
                    <Input />
                </div>) }
              
                {playing ? (
                    <>
                      {aiScore === 3 || playerScore === 3 ? 
                      <> 
                        <div className='winner' style={{display: 'flex', justifyContent:'center', position: 'absolute', color: "white", paddingTop: 40}}>
                            WINNER
                            </div>
                            <div style={{display: 'flex', justifyContent:'center', position: 'absolute', paddingTop: 120}}> 
                                <img src="ggwp.gif" alt="ggwp" height={150} width={105} />
                            </div>
                            </>
                             : <></> 
                        }
                <div className='playing'> 
                        <Card img={gameCard[cardSelect].src} alt={gameCard[cardSelect].alt}/>
                            <div className="vstext" style={{fontSize: playerScore === 3 ? 60 : 120 }}>  {aiScore === 3 && "AI(E)"}
                            {playerScore === 3 && name} {aiScore < 3 && playerScore < 3 && "VS"}   </div>
                            <Card img={gameCard[aiCardSelect].src} alt={gameCard[aiCardSelect].alt}/>
                </div>
                <div className="buttonFight">
                   {aiScore === 3 || playerScore === 3 ? 
                     <button className="button" onClick={stopPlaying}>  
                     <div className="headerText">
                         FINISH
                     </div>
                    </button> : 
                    <div>
                        <button className="button" onClick={ContinuePlaying}>  
                        <div className="headerText">
                           Continue
                        </div>
                    </button>
                 
                    </div>}
                </div>
                </>
                ) 
                : (
                <>
                <div className="cardcontainer">
                {gameCard.map((e, index) => {
                    return (
                        <div key={index}>
                        <button className="cardAction" onClick={() => getfight(index)}>
                        <div className="deckCard" style={{opacity: cardSelect === index ? 1 : 0.7}}>
                            <Card img={e.src} alt={e.alt}/>
                        </div>
                    </button>
                    </div>
                    )
                })}
                </div>
                <div className="buttonFight">
                    <button className="button" onClick={startPlaying}>  
                        <div className="headerText">
                            FIGHT
                        </div>
                    </button>
               </div>
               </>
               )}
               
            </div>
            <Footer />
        </div>
    )
}