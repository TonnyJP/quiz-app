import { useState, useCallback } from 'react';
import { QUESTIONS } from '../questions';
import { Question } from './Question';
import { Summary } from '.';

export const Quiz = () => {
  const [userAnswers, setUserAnswer] = useState([]);

  const activQuestionIdx = userAnswers.length;
  const isQuizComplited = activQuestionIdx === QUESTIONS.length;

  const handleSelectAnswer = useCallback((answer) => {
    setUserAnswer((prev) => [...prev, answer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isQuizComplited) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id='quiz'>
      <Question
        key={activQuestionIdx}
        onSelectedAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        index={activQuestionIdx}
      />
    </div>
  );
};
