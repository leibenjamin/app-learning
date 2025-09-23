import React, { useState, useMemo } from 'react';

// Helper function to get a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Quiz = ({ questions: questionPools, lessonId }) => {
  // This useMemo hook ensures the questions are shuffled only once per quiz attempt.
  const shuffledQuestions = useMemo(() => {
    if (!questionPools) return [];
    return questionPools.map(pool => {
      const randomIndex = getRandomInt(pool.questions.length);
      return pool.questions[randomIndex];
    });
  }, [questionPools]);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (questionIndex, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    
    let correctCount = 0;
    shuffledQuestions.forEach((q, qIndex) => {
      if (selectedAnswers[qIndex] === q.correctAnswerIndex) {
        correctCount++;
      }
    });

    try {
      await fetch('/api/v1/users/submit-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'static_user_123', // Using a static ID for this demo
          lessonId,
          correct: correctCount,
          total: shuffledQuestions.length,
        }),
      });
    } catch (error) {
      console.error("Failed to submit quiz score:", error);
    }
  };

  const allQuestionsAnswered = Object.keys(selectedAnswers).length === shuffledQuestions.length;

  return (
    <div className="mt-6 border-t-2 border-gray-200 pt-6">
      <h4 className="text-xl font-bold text-gray-800 mb-4">Test Your Knowledge</h4>
      {shuffledQuestions.map((q, qIndex) => (
        <div key={qIndex} className="mb-6">
          <p className="font-semibold text-gray-800 mb-3">{qIndex + 1}. {q.questionText}</p>
          <div className="flex flex-col space-y-2">
            {q.options.map((option, oIndex) => {
              const isSelected = selectedAnswers[qIndex] === oIndex;
              const isCorrect = q.correctAnswerIndex === oIndex;
              let buttonClass = 'text-left p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors';

              if (isSubmitted) {
                if (isCorrect) {
                  buttonClass += ' bg-green-100 border-green-400';
                }
                if (isSelected && !isCorrect) {
                  buttonClass += ' bg-red-100 border-red-400';
                }
              } else if (isSelected) {
                buttonClass += ' bg-blue-100 border-blue-400';
              }

              return (
                <button key={oIndex} onClick={() => !isSubmitted && handleSelect(qIndex, oIndex)} className={buttonClass} disabled={isSubmitted}>
                  <span className="text-gray-700">{option}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <div className="mt-6 text-center">
        {!isSubmitted ? (
          <button onClick={handleSubmit} disabled={!allQuestionsAnswered} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition-all">
            Submit Answers
          </button>
        ) : (
          <div className="p-4 bg-blue-50 rounded-lg text-blue-800 font-bold">
            Score Submitted! You got {shuffledQuestions.reduce((acc, q, i) => acc + (selectedAnswers[i] === q.correctAnswerIndex ? 1 : 0), 0)} out of {shuffledQuestions.length} correct.
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
