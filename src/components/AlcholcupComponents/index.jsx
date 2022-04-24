import React, { useCallback, useEffect, useState } from "react";
import { AlcholStyled } from "./styled";
import WinnerSentence from "./WinnerSentence";

export const AlcholcupComponents = ({ alcholLists, roundValue }) => {
  const [alchols, setAlchols] = useState(alcholLists);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  const [value, setValue] = useState(false);
  const [winnerText, setWinnerText] = useState("");
  const [selectRound, setSelectRound] = useState(roundValue);
  let [rounds, setRounds] = useState(1);

  useEffect(() => {
    setDisplays([alchols[0], alchols[1]]);
  }, [alchols]);

  console.log("초기 display : ", displays);

  const onDescription = useCallback(() => {
    setValue(true);
  }, []);

  const clickHandler = (alchol) => () => {
    console.log(alchol);
    if (alchols.length <= 2) {
      setSelectRound(alchols.length);
      if (winners.length === 0) {
        setDisplays([alchol]);
        onDescription();
        setWinnerText("우승");
      } else {
        let updatedAlchol = [...winners, alchol];
        setAlchols(updatedAlchol);
        setDisplays([updatedAlchol[0], updatedAlchol[1]]);
        setWinners([]);
        setSelectRound(updatedAlchol.length);
        setRounds(rounds - updatedAlchol.length + 1);
      }
    } else if (alchols.length > 2) {
      setWinners([...winners, alchol]);
      setDisplays([alchols[2], alchols[3]]);
      setAlchols(alchols.slice(2));
      setRounds(rounds + 1);
    }
  };
  console.log("클릭 된 winners : ", winners);

  return (
    <>
      <AlcholStyled>
        {!value ? (
          <div className="rounds">
            {selectRound}강 : {rounds}/ {selectRound / 2}
          </div>
        ) : (
          <div className="rounds">
            {winnerText}
            <br />
            <span>{displays[0].name}</span>
          </div>
        )}
        {displays.map((drinks) => {
          return (
            <div className="tableWrap" key={drinks.id}>
              <div
                className="table__box position-relative"
                key={drinks.id}
                onClick={clickHandler(drinks)}
              >
                <div className="table__img">
                  <img src={drinks.img} alt={drinks.name} />
                </div>
                <p>{drinks.name}</p>
              </div>
            </div>
          );
        })}
        {!value ? null : <WinnerSentence displays={displays} />}
      </AlcholStyled>
    </>
  );
};
