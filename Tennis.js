import React, { useEffect, useState } from "react";
import styles from "./Tennis.module.css";

export default function Login() {
  const [scorePlayerOne, setScorePlayerOne] = useState(0);
  const [scorePlayerTwo, setScorePlayerTwo] = useState(0);
  const [countPlayerOne, setCountPlayerOne] = useState(0);
  const [countPlayerTwo, setCountPlayerTwo] = useState(0);
  const [text, setText] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    gameResult();
  });

  const handlePlayerOneScore = () => {
    setCountPlayerOne(countPlayerOne + 1);
    if (countPlayerOne < 2) {
      setScorePlayerOne(scorePlayerOne + 15);
    } else if (countPlayerOne === 2) {
      setScorePlayerOne(scorePlayerOne + 10);
    }
  };

  const handlePlayerTwoScore = () => {
    setCountPlayerTwo(countPlayerTwo + 1);
    if (countPlayerTwo < 2) {
      setScorePlayerTwo(scorePlayerTwo + 15);
    } else if (countPlayerTwo === 2) {
      setScorePlayerTwo(scorePlayerTwo + 10);
    }
  };

  const gameResult = () => {
    //Duce State
    if (
      scorePlayerOne === 40 &&
      scorePlayerTwo === 40 &&
      countPlayerOne === 3 &&
      countPlayerTwo === 3
    ) {
      setText("Duce State");
    }
    //Player One Advantage
    else if (
      scorePlayerOne === 40 &&
      scorePlayerTwo === 40 &&
      countPlayerOne === 4 &&
      countPlayerTwo === 3
    ) {
      setText("Player 1 is on advantage");
    }
    //Player One Wins
    else if (
      scorePlayerOne === 40 &&
      scorePlayerTwo === 40 &&
      countPlayerOne === 5 &&
      countPlayerTwo === 3
    ) {
      setText("Player 1 wins!!");
      setDisableButton(true);
    }

    //Player Two Advantage
    else if (
      scorePlayerOne === 40 &&
      scorePlayerTwo === 40 &&
      countPlayerOne === 3 &&
      countPlayerTwo === 4
    ) {
      setText("Player 2 is on advantage");
    }
    //Player Two Wins
    else if (
      scorePlayerOne === 40 &&
      scorePlayerTwo === 40 &&
      countPlayerOne === 3 &&
      countPlayerTwo === 5
    ) {
      setText("Player 2 wins!!");
      setDisableButton(true);
    }
    //Game tied
    else if (
      scorePlayerOne === 40 &&
      scorePlayerTwo === 40 &&
      countPlayerOne === 4 &&
      countPlayerTwo === 4
    ) {
      setText("Game Tied");
      setDisableButton(true);
    }
  };

  return (
    <div>
      <div className={styles.result}>
        <h1>{text}</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.playerOneHeading}>Player 1</h1>
          <div className={styles.scoreContainer}>
            <p>{scorePlayerOne}</p>
          </div>
          <button
            onClick={handlePlayerOneScore}
            disabled={disableButton}
            className={styles.buttonClass}
          >
            Increment Score
          </button>
        </div>
        <div className={styles.right}>
          <h1 className={styles.playerTwoHeading}>Player 2</h1>
          <div className={styles.scoreContainer}>
            <p>{scorePlayerTwo}</p>
          </div>
          <button
            onClick={handlePlayerTwoScore}
            disabled={disableButton}
            className={styles.buttonClass}
          >
            Increment Score
          </button>
        </div>
      </div>
    </div>
  );
}


 // const updatedTasks = tasks.filter((_, i) => i !== index);

