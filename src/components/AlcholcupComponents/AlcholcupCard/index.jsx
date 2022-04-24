import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Global } from "styled";
import AlcholcupDesc from "AlcholcupDesc";

const AlcholcupCard = ({ alcholcup }) => {
  const { alcholcupLists } = useSelector((state) => state.alcholcup);
  // console.log('alcholcupLists : ', alcholcupLists);

  const [alchols, setAlchols] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  // const [likes, setLikes] = useState();
  const [value, setValue] = useState(false);
  const [round, setRound] = useState(alcholcupLists.length);

  useEffect(() => {
    setAlchols(alcholcupLists);
    setDisplays([alcholcupLists[0], alcholcupLists[1]]);
    console.log("useEffect", alcholcupLists);

    // setLikes([alcholcupLists[0].likeNum, alcholcupLists[1].likeNum]);
    // console.log('setLikes', setLikes([alcholcupLists[0].likeNum, alcholcupLists[1].likeNum]));
  }, [alcholcupLists]);

  console.log("display : ", displays);
  console.log(alcholcupLists[0].likeNum);
  console.log(alcholcupLists.length / 2);

  const onDescription = useCallback(() => {
    setValue(true);
  }, []);

  const clickHandler = (alchol) => () => {
    const onRound = () => {
      setRound(alchols.length / 2);
    };
    onRound();
    if (alchols.length <= 2) {
      if (winners.length === 0) {
        setDisplays([alchol]);
        // const likeNumber = winners.likeNum + 1;
        // setLikes([likeNumber]);
        onDescription();
      } else {
        let updatedAlchol = [...winners, alchol];
        setAlchols(updatedAlchol);
        setDisplays([updatedAlchol[0], updatedAlchol[1]]);
        setWinners([]);
      }
    } else if (alchols.length > 2) {
      setWinners([...winners, alchol]);
      setDisplays([alchols[2], alchols[3]]);
      setAlchols(alchols.slice(2));
    }
  };
  console.log("winners : ", winners);

  const lastDesc = alcholcupLists[0].description;
  const lastName = alcholcupLists[0].name;
  const lastType = alcholcupLists[0].type;
  const lastAlc = alcholcupLists[0].alc;

  return (
    <>
      <Global />
      {displays.map((v) => {
        return (
          <div className="tableWrap" key={v.id}>
            <div
              className="table__box position-relative"
              key={v.id}
              onClick={clickHandler(v)}
            >
              <div className="table__img">
                <img src={v.img} alt={v.id} />
              </div>
              <p>{v.name}</p>
            </div>
          </div>
        );
      })}
      {!value ? <div className="round">현재 16강 : {round}</div> : null}
      {value ? (
        <AlcholcupDesc
          lastDesc={lastDesc}
          lastName={lastName}
          lastType={lastType}
          lastAlc={lastAlc}
        />
      ) : null}
    </>
  );
};

export default AlcholcupCard;
