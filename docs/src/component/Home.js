import { Header } from "./Header";
import { Footer } from "./Footer";
import { Card } from "./Card";
import "./Home.css";
import { useState } from "react";

import isMobileScreen from "../isMobile";

export function Home() {
  const name = "Humain";
  const [cardSelect, setCardSelect] = useState(null);
  const [aiCardSelect, setAiCardSelect] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [continueState, setContinueState] = useState(false);
  let [playerScore, setPlayerScore] = useState(0);
  let [aiScore, setAiScore] = useState(0);
  
  var audioChoose = document.createElement("audio");
  audioChoose.setAttribute("src", "choose2.mp3");

  var audioFight = document.createElement("audio");
  audioFight.setAttribute("src", "fight.mp3");

  var audioLoose = document.createElement("audio");
  audioLoose.setAttribute("src", "hahaha.wav")

  const isMobile = isMobileScreen();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function chooseCardPlayer(index) {
    setCardSelect(index);
    setAiCardSelect(getRandomInt(3));
    audioChoose.play();
  }

  async function startPlaying() {
    if (cardSelect !== null && aiCardSelect !== null) {
      setPlaying(true);
      getScore();
      setContinueState(true);
      audioFight.play();
    } else {
      alert("Choisis ton champion");
    }
  }

  if(aiScore === 3) {
    audioLoose.play();
  }

  function getScore() {
    if (cardSelect !== null && aiCardSelect !== null) {
      if (cardSelect === aiCardSelect) {
        return;
      }
      if (cardSelect === 0) {
        if (aiCardSelect === 1) {
          setAiScore((aiScore += 1));
        } else {
          setPlayerScore((playerScore += 1));
        }
      } else if (cardSelect === 1) {
        if (aiCardSelect === 0) {
          setPlayerScore((playerScore += 1));
        } else {
          setAiScore((aiScore += 1));
        }
      } else {
        if (aiCardSelect === 0) {
          setAiScore((aiScore += 1));
        } else {
          setPlayerScore((playerScore += 1));
        }
      }
    }
  }

  function ContinuePlaying() {
    setPlaying(false);
    setCardSelect(null);
  }

  function stopPlaying() {
    setPlaying(false);
    setAiScore(0);
    setPlayerScore(0);
    setCardSelect(null);
    setAiCardSelect(null);
    setContinueState(false);
  }

  const gameCard = [
    {
      src: "scissors.png",
      alt: "scissors",
    },
    {
      src: "rock.png",
      alt: "rock",
    },
    {
      src: "paper.png",
      alt: "paper",
    },
  ];

  return (
    <div>
      <Header
        name={name}
        playing={continueState}
        score={{ player: playerScore, ai: aiScore }}
      />
      <div className="ring">
        <div className="ring-container">
          {playing ? (
            <>
              {aiScore === 3 || playerScore === 3 ? (
                <div className="winner">
                  <div className="winnerText">
                    WINNER
                    <div className="vstext">
                      {aiScore === 3 && "MACHINE"}
                      {playerScore === 3 && name}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src="ggwp.gif" alt="ggwp" height={150} width={105} />
                  </div>
                </div>
              ) : (
                <></>
              )}
              {!(aiScore === 3 || playerScore === 3) && (
                <div className="playing">
                  <Card
                    img={gameCard[cardSelect].src}
                    alt={gameCard[cardSelect].alt}
                  />
                  <div className="vstext">
                    {aiScore < 3 && playerScore < 3 && "VS"}
                  </div>
                  <Card
                    img={gameCard[aiCardSelect].src}
                    alt={gameCard[aiCardSelect].alt}
                  />
                </div>
              )}

              <div className="buttonFight">
                {aiScore === 3 || playerScore === 3 ? (
                  <button className="button" onClick={stopPlaying}>
                    FINISH
                  </button>
                ) : (
                  <div>
                    <button className="button" onClick={ContinuePlaying}>
                      Continue
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="card-container">
                {gameCard.map((e, index) => {
                  return (
                    <div key={index}>
                      <button
                        className="cardAction"
                        onClick={() => chooseCardPlayer(index)}
                      >
                        <div
                          className="deckCard"
                          style={{
                            opacity: cardSelect === index && 1,
                            marginTop: !isMobile && cardSelect === index && -60,
                          }}
                        >
                          <Card img={e.src} alt={e.alt} />
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="buttonFight">
                <button className="button" onClick={startPlaying}>
                  FIGHT
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
