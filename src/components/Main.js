import Card from './Card';
import charmander from '../images/charmander.jpg';
import charmeleon from '../images/charmeleon.jpg';
import charizard from '../images/charizard.png';
import bulbasaur from '../images/bulbasaur.png';
import ivysaur from '../images/ivysaur.png';
import venusaur from '../images/venusaur.png';
import dragonite from '../images/dragonite.png';
import mewtwo from '../images/mewtwo.png';
import drowzee from '../images/drowzee.png';
import kadabra from '../images/kadabra.png';
import metapod from '../images/metapod.png';
import snorlax from '../images/snorlax.png';
import rapidash from '../images/rapidash.png';
import pichu from '../images/pichu.png';
import blastoise from '../images/blastoise.png';
import Header from './Header';
import { useState } from 'react';
import { useRef } from 'react';

const Main = () => {
  const images = [
    { path: charmander, text: 'Charmander' },
    { path: charmeleon, text: 'Charmeleon' },
    { path: charizard, text: 'Charizard' },
    { path: bulbasaur, text: 'Bulbasaur' },
    { path: ivysaur, text: 'Ivysaur' },
    { path: venusaur, text: 'Venusaur' },
    { path: dragonite, text: 'Dragonite' },
    { path: mewtwo, text: 'Mewtwo' },
    { path: drowzee, text: 'Drowzee' },
    { path: kadabra, text: 'Kadabra' },
    { path: metapod, text: 'Metapod' },
    { path: snorlax, text: 'Snorlax' },
    { path: rapidash, text: 'Rapidash' },
    { path: pichu, text: 'Pichu' },
    { path: blastoise, text: 'Blastoise' },
  ];

  const checkSelection = (event) => {
    let pos = event.currentTarget.id;
    if (isCorrect(pos)) {
      selections.current.push(images[pos].text);
      score.current++;
    } else {
      bestScore.current = Math.max(score.current, bestScore.current);
      score.current = 0;
      selections.current = [];
    }
    shuffle(cards);
  };

  const score = useRef(0);
  const bestScore = useRef(0);
  const [cards, setCards] = useState(
    images.map((d, i) => (
      <Card
        image={d.path}
        text={d.text}
        key={i}
        pos={i}
        checkSelection={checkSelection}
      />
    ))
  );
  const selections = useRef([]);

  const isCorrect = (id) => {
    return !selections.current.includes(images[id].text);
  };

  const shuffle = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setCards(arr);
  };

  return (
    <>
      <Header score={score.current} bestScore={bestScore.current} />
      <div className="main">{cards}</div>
    </>
  );
};

export default Main;
