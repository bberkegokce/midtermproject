import { useState } from 'react';

const triviaData = [
  { question: "What is the code of the main universe where Rick and Morty live?", options: ["C-137", "C-131", "Prime-1", "D-99"], answer: "C-137", difficulty: "Easy" },
  { question: "What is Rick's famous catchphrase?", options: ["Bazinga!", "Wubba Lubba Dub Dub!", "I am Iron Man", "Lick my balls!"], answer: "Wubba Lubba Dub Dub!", difficulty: "Easy" },
  { question: "What is the name of Morty's older sister?", options: ["Beth", "Summer", "Jessica", "Tammy"], answer: "Summer", difficulty: "Easy" },
  { question: "What did Rick turn himself into to avoid family therapy?", options: ["A Robot", "A Pickle", "A Cucumber", "A Planet"], answer: "A Pickle", difficulty: "Medium" },
  { question: "What does 'Wubba Lubba Dub Dub' mean in Birdperson's language?", options: ["Let's party!", "I love you", "I am in great pain, please help me", "I am hungry"], answer: "I am in great pain, please help me", difficulty: "Medium" },
  { question: "What is the sole purpose of a Mr. Meeseeks?", options: ["To conquer the world", "To fulfill a task and die", "To help Jerry", "To live forever"], answer: "To fulfill a task and die", difficulty: "Medium" },
  { question: "What was Jerry Smith's professional job at the start?", options: ["Doctor", "Advertising Agent", "Engineer", "Unemployed"], answer: "Advertising Agent", difficulty: "Medium" },
  { question: "What group did Rick found to bring together the smartest Ricks?", options: ["Federation", "Council of Ricks", "Intelligence Club", "Citadel"], answer: "Council of Ricks", difficulty: "Medium" },
  { question: "Rick's Szechuan Sauce obsession is based on which movie?", options: ["Mulan", "Lion King", "Tarzan", "Hercules"], answer: "Mulan", difficulty: "Hard" },
  { question: "After the raid, what name did Birdperson take as a cyborg?", options: ["Metalperson", "Phoenixperson", "Cyberbird", "Deadbird"], answer: "Phoenixperson", difficulty: "Hard" }
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
    if (correct) setScore(score + 1);
    setTimeout(() => {
      if (currentQuestion + 1 < triviaData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else { setShowScore(true); }
    }, 1200);
  };

  if (showScore) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-10 bg-black/60 backdrop-blur-xl border-2 border-[#00ff9d] rounded-3xl text-center shadow-[0_0_50px_rgba(0,255,157,0.3)]">
        <h2 className="text-4xl font-black mb-6 uppercase">Game Over!</h2>
        <p className="text-2xl text-[#00ff9d] mb-8 font-mono tracking-widest">Score: {score} / 10</p>
        <button onClick={() => window.location.reload()} className="w-full bg-[#00ff9d] text-black font-black py-4 rounded-xl hover:scale-105 transition uppercase tracking-widest">Try Again</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="mb-6 flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/10">
        <span className="text-[#00ff9d] font-black uppercase text-[10px]">Q: {currentQuestion + 1}/10</span>
        <span className="text-[#00d1ff] font-black uppercase text-[10px]">Score: {score}</span>
      </div>
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl">
        <span className="bg-blue-600 px-3 py-1 rounded-full text-[8px] font-black uppercase mb-4 inline-block">{triviaData[currentQuestion].difficulty}</span>
        <h2 className="text-xl md:text-3xl font-black text-white mb-10 leading-tight uppercase">{triviaData[currentQuestion].question}</h2>
        <div className="grid grid-cols-1 gap-3">
          {triviaData[currentQuestion].options.map((option) => (
            <button key={option} disabled={selectedOption !== null} onClick={() => handleAnswerClick(option)} className={`p-4 md:p-5 rounded-2xl text-left font-bold transition-all border-2 text-xs md:text-sm ${selectedOption === option ? (isCorrect ? 'bg-[#00ff9d] border-[#00ff9d] text-black' : 'bg-red-600 border-red-600 text-white') : 'bg-white/5 border-white/10 hover:border-[#00ff9d]'}`}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}