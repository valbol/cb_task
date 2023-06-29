import Question from './Question';

const QuestionList = ({
  questionsList,
  handleCorrectAnswer,
  handleNextQuestion,
  currentQuestionIndex,
  answered,
}) => {
  const currentQuestion = questionsList && questionsList[currentQuestionIndex];

  return (
    <div>
      {currentQuestion ? (
        <div>
          <Question
            answered={answered}
            questionWithAnswers={currentQuestion}
            handleCorrectAnswer={handleCorrectAnswer}
            correctAnswer={currentQuestion.correct_answer}
          />
          <br />
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      ) : (
        <div>{'Congratulations! You have finished the quiz.'}</div>
      )}
    </div>
  );
};

export default QuestionList;
