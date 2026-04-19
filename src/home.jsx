import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 mt-10 md:mt-0">
      <div className="inline-block px-4 py-1.5 mb-6 text-[8px] md:text-[10px] font-black tracking-[0.3em] text-[#00ff9d] uppercase bg-[#00ff9d]/10 rounded-full border border-[#00ff9d]/20">
        Interdimensional Access Granted
      </div>
      
      <h1 className="text-5xl sm:text-7xl md:text-[120px] font-black mb-4 tracking-tighter leading-none text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] uppercase">
        Rick and Morty <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00ff9d] to-[#00d1ff] animate-pulse">
          
        </span>
      </h1>

      <p className="max-w-xl text-gray-300 text-sm md:text-lg mb-10 font-medium leading-relaxed px-2">
        Explore characters across dimensions and test your knowledge in the interdimensional trivia challenge.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link to="/characters" className="px-12 py-5 bg-[#00ff9d] text-black font-black rounded-2xl transition-all transform hover:scale-105 portal-glow uppercase tracking-widest text-xs">
          Explore Wiki
        </Link>
        <Link to="/trivia" className="px-12 py-5 bg-white/5 backdrop-blur-md text-white font-black rounded-2xl transition-all transform hover:scale-105 border border-white/20 uppercase tracking-widest text-xs">
          Play Trivia
        </Link>
      </div>
    </div>
  );
}