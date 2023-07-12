import Score from './Score';

const Header = ({ score, bestScore }) => {
  return (
    <div className="header">
      <div>
        <h1>Pokemon Memory Game</h1>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>
      <Score score={score} bestScore={bestScore} />
    </div>
  );
};

export default Header;
