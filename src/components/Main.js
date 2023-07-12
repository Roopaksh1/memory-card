import Card from './Card';
import charmander from "../images/charmander.jpg";
import charmeleon from "../images/charmeleon.jpg";
import charizard from "../images/charizard.png";
import bulbasaur from "../images/bulbasaur.png";
import ivysaur from "../images/ivysaur.png";
import venusaur from "../images/venusaur.png";
import dragonite from "../images/dragonite.png";
import mewtwo from "../images/mewtwo.png";
import drowzee from "../images/drowzee.png";
import kadabra from "../images/kadabra.png";
import metapod from "../images/metapod.png";
import snorlax from "../images/snorlax.png";
import rapidash from "../images/rapidash.png";
import pichu from "../images/pichu.png";
import blastoise from "../images/blastoise.png";

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
  ]
  
  let cards =  images.map((d, i) => <Card image={d.path} text={d.text} key={i}/>);

  return (
    <div className='main'>
      {cards}
    </div>
  );
};

export default Main;
