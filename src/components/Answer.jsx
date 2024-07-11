import { useRef } from 'react';
export const Answer = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id='answers'>
      {answers.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let className = '';
        if (answerState === 'answered' && isSelected) {
          className = 'selected';
        }

        if (
          (answerState === 'correct' || answerState === 'wrong') &&
          isSelected
        ) {
          className = answerState;
        }
        return (
          <li key={answer} className='answer'>
            <button
              onClick={() => onSelect(answer)}
              className={className}
              disabled={answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
