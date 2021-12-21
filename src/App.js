import "./App.css";
import { ClickButton } from "./components/piggyButton";
import { Upgrades } from "./components/upgrades";
import React from "react";

function App() {
  const [score, setScore] = React.useState(0);
  const [scorePerSecond, setScorePerSecond] = React.useState(0);

  const [upgrades, setUpgrades] = React.useState([
    {
      name: "Boost",
      scorePerSecond: 1,
      cost: 1,
    },
    {
      name: "SuperBoost",
      scorePerSecond: 10,
      cost: 10,
    },
  ]);

  const scoreRef = React.useRef();
  scoreRef.current = score;
  const scorePerSecondRef = React.useRef();
  scorePerSecondRef.current = scorePerSecond;

  React.useEffect(() => {
    setInterval(() => {
      // console.log(score);
      // console.log(scorePerSecond);

      // console.log("Ref");
      // console.log(scoreRef);
      // console.log(scoreRef.current);
      setScore(scoreRef.current + scorePerSecondRef.current);
    }, 1000);
  }, []);

  function incrementScore() {
    setScore(score + 1);
  }

  return (
    <div className="app">
      <body>
        <header>
          <h1>Piggy Clicker</h1>
        </header>
        <div className="container">
          <main>
            <div id="myH2">
              <h2>
                Piggy Score :<br />
                {score} <img src="images/dollar.png" alt="coin"></img>
              </h2>
              <h2>
                Piggy Boosts :<br />+ {scorePerSecond}{" "}
                <img src="images/dollar.png" alt="coin"></img> / SEC
              </h2>
            </div>
            {<ClickButton onButtonClick={incrementScore} />}
            {
              <Upgrades
                score={score}
                upgradesList={upgrades}
                onBuy={buyUpgrade}
              />
            }
          </main>
        </div>
        <footer>
          <p>By Crms.wav</p>
        </footer>
      </body>
    </div>
  );

  /**
   * Cette fonction va :
   * - Modifier le state des upgrades pour augmenter le coût de l'upgrade achetée
   * - Ajouter le scorePerSecond de l'upgarde achetée au SPS total
   * - Retirer le coût de l'upgrade au score du joueur
   *
   * @param index Nombre entier qui représente la position de l'amélioration dans le tableau
   */
  function buyUpgrade(index) {
    // Cloner upgrades
    const updatedUpgrades = [...upgrades];

    // Retirer le coût de l'upgrade à notre score pour "payer"
    const upgradeCost = updatedUpgrades[index].cost;
    setScore(score - upgradeCost);

    // Ajouter le score par seconde pour augmenter le compteur
    setScorePerSecond(scorePerSecond + updatedUpgrades[index].scorePerSecond);

    // Mettre à jour le coût de l'amélioration

    // Cloner l'upgrade mise à jour
    const updatedUpgrade = { ...updatedUpgrades[index] };
    updatedUpgrade.cost = Math.round(updatedUpgrade.cost * 1.5);

    updatedUpgrades[index] = updatedUpgrade;
    setUpgrades(updatedUpgrades);
  }
}

export default App;
