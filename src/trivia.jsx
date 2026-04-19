import { useState } from 'react';
import { Link } from 'react-router-dom';

const triviaData = [
  {
    question: "What is the code of the main universe where Rick and Morty live?",
    options: ["C-137", "C-131", "Prime-1", "D-99"],
    answer: "C-137",
    difficulty: "Easy"
  },
  {
    question: "What is Rick's famous catchphrase?",
    options: ["Bazinga!", "Wubba Lubba Dub Dub!", "I am Iron Man", "Lick my balls!"],
    answer: "Wubba Lubba Dub Dub!",
    difficulty: "Easy"
  },
  {
    question: "What is the name of Morty's older sister?",
    options: ["Beth", "Summer", "Jessica", "Tammy"],
    answer: "Summer",
    difficulty: "Easy"
  },
  {
    question: "What did Rick turn himself into to avoid family therapy?",
    options: ["A Robot", "A Pickle", "A Cucumber", "A Planet"],
    answer: "A Pickle",
    difficulty: "Medium"
  },
  {
    question: "What does 'Wubba Lubba Dub Dub' mean in Birdperson's language?",
    options: ["Let's party!", "I love you", "I am in great pain, please help me", "I am hungry"],
    answer: "I am in great pain, please help me",
    difficulty: "Medium"
  },
  {
    question: "What is the sole purpose of a Mr. Meeseeks?",
    options: ["To conquer the world", "To fulfill a single task and then die", "To help Jerry with golf", "To live forever"],
    answer: "To fulfill a single task and then die",
    difficulty: "Medium"
  },
  {
    question: "What was Jerry Smith's professional job at the start of the series?",
    options: ["Doctor", "Advertising Agent", "Engineer", "Unemployed"],
    answer: "Advertising Agent",
    difficulty: "Medium"
  },
  {
    question: "What group did Rick found to bring together the smartest Ricks in the multiverse?",
    options: ["Galactic Federation", "The Council of Ricks", "The Intelligence Club", "Citadel Residents"],
    answer: "The Council of Ricks",
    difficulty: "Medium"
  },
  {
    question: "Rick's Szechuan Sauce obsession is based on a real sauce released for which movie?",
    options: ["Mulan", "The Lion King", "Tarzan", "Hercules"],
    answer: "Mulan",
    difficulty: "Hard"
  },
  {
    question: "After the Federation raid, what name did Birdperson take as a cyborg?",
    options: ["Metalperson", "Phoenixperson", "Cyberbird", "Deadbird"],
    answer: "Phoenixperson",
    difficulty: "Hard"
  }
];

export default function Trivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (option) => {
    setSelectedOption(option);
    const correct = option === triviaData[currentQuestion].answer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < triviaData.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  if (showScore) {
    return (
      <div className="max-w-2xl mx-auto mt-20 p-10 bg-black/60 border-2 border-green-500 rounded-3xl text-center shadow-[0_0_50px_rgba(34,197,94,0.3)]">
        <h2 className="text-5xl font-black text-white mb-6 uppercase">Game Over!</h2>
        <p className="text-3xl text-green-400 mb-8 font-mono">Your Score: {score} / {triviaData.length}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-green-500 text-black font-black px-8 py-3 rounded-xl hover:bg-green-400 transition uppercase tracking-tighter"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8 flex justify-between items-center bg-gray-900/80 p-4 rounded-xl border border-gray-700">
        <span className="text-green-400 font-bold uppercase tracking-widest text-xs">Question {currentQuestion + 1}/{triviaData.length}</span>
        <span className="text-blue-400 font-mono font-bold">SCORE: {score}</span>
      </div>

      <div className="bg-black/40 backdrop-blur-md border border-gray-800 p-8 rounded-3xl shadow-2xl">
        <div className="mb-4">
          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
            triviaData[currentQuestion].difficulty === 'Hard' ? 'bg-red-600' : 
            triviaData[currentQuestion].difficulty === 'Medium' ? 'bg-yellow-600' : 'bg-green-600'
          }`}>
            {triviaData[currentQuestion].difficulty}
          </span>
        </div>
        
        <h2 className="text-3xl font-extrabold text-white mb-10 leading-tight">
          {triviaData[currentQuestion].question}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {triviaData[currentQuestion].options.map((option) => (
            <button
              key={option}
              disabled={selectedOption !== null}
              onClick={() => handleAnswerClick(option)}
              className={`p-5 rounded-2xl text-left font-bold transition-all border-2 text-sm ${
                selectedOption === option 
                  ? (isCorrect ? 'bg-green-500 border-green-400 text-black scale-105' : 'bg-red-500 border-red-400 text-white')
                  : 'bg-gray-800/50 border-gray-700 hover:border-green-500 hover:bg-gray-800'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}