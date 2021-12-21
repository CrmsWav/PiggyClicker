import React from 'react';

export function Upgrades(props) {
  const score = props.score;
  const upgrades = props.upgradesList;

  return (
    <div>
      {upgrades.map((upgrade, index) => (
        <div
        key={index}
        id="boosts"
        >
          <button
          onClick={() => props.onBuy(index)}
          disabled={upgrade.cost > score}
          id="boost">
            {upgrade.name + " :"}
            <br/>
            {upgrade.cost + " "}
            <img src="images/dollar.png" alt="coin"></img>
          </button>
        </div>
      ))}
    </div>
  )
}