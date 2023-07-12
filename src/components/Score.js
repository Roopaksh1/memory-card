const Score = ({ score = 0, bestScore = 0 }) => {
  return (
    <div>
      <div className="score">Score : {score}</div>
      <div className="best-score">Best Score : {bestScore}</div>
    </div>
  );
};

export default Score;
