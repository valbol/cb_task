import { useEffect, useState, useCallback } from 'react';
import QuestionList from './QuestionList';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({});
  const [points, setPoints] = useState(0);
  const [pointsPerCorrect, setPointsPerCorrect] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleCorrectAnswer = useCallback(
    (selectedAnswer, correctAnswer) => {
      if (parseInt(selectedAnswer) === parseInt(correctAnswer)) {
        const updatedPoints = points + pointsPerCorrect;
        setPoints(updatedPoints);
      }
      setAnswered(true);
    },
    [points, pointsPerCorrect]
  );

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setAnswered(false);
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:3030/questionaire_data');
      setData(result.data);
      setPointsPerCorrect(parseInt(result.data.points_per_correct_answer));
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(`Updated Points: ${points}`);
  }, [points]);

  console.log(data);
  return (
    <>
      <div>{data.contestant_name} Want to be a Codebashier ? </div>
      <div>Points: {points}</div>
      <br />
      <QuestionList
        questionsList={data.questions}
        currentQuestionIndex={currentQuestionIndex}
        handleNextQuestion={handleNextQuestion}
        handleCorrectAnswer={handleCorrectAnswer}
        answered={answered}
      />
    </>
  );
};

export default App;
