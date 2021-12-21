import React from 'react';

const piggyImageUrl = "images/piggy_clicker.png";

export function ClickButton(props) {
  const onClickFunction = props.onButtonClick;
  return <div id="button">
    <img
    className="ClickButton"
    src={piggyImageUrl}
    alt="piggy to click"
    onClick={onClickFunction}
    />
  </div>
}