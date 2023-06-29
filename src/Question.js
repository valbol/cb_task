const Question = ({
  questionWithAnswers,
  handleCorrectAnswer,
  correctAnswer,
  answered,
}) => {
  const answersList = questionWithAnswers.answers.map((answer, i) => {
    return (
      <div key={i}>
        <button
          disabled={answered}
          value={i}
          onClick={(e) => handleCorrectAnswer(e.target.value, correctAnswer)}
        >
          {answer}
        </button>
      </div>
    );
  });

  return (
    <div>
      <div>{questionWithAnswers?.question}</div>
      <div>{answersList}</div>
    </div>
  );
};

export default Question;
