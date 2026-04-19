import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4">
      <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-[#00ff9d] uppercase bg-[#00ff9d]/10 rounded-full border border-[#00ff9d]/20">
        Interdimensional Access Granted
      </div>
      
      <h1 className="text-7xl md:text-[130px] font-black mb-4 tracking-tighter leading-none text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] uppercase">
        Rick and Morty<br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00ff9d] to-[#00d1ff] animate-pulse">
          
        </span>
      </h1>
      <p className="max-w-2xl text-gray-200 text-lg mb-12 font-medium leading-relaxed drop-shadow-md">
        Explore the ultimate Rick and Morty encyclopedia. Discover characters across dimensions 
        and test your knowledge in the interdimensional trivia challenge.
      </p>

      <div className="flex flex-col sm:flex-row gap-8 mt-12">
        
        <Link to="/characters" className="relative group flex items-center justify-center">
          {/* Animated Background Swirl */}
          <div className="absolute inset-0 bg-[#00ff9d] rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative px-12 py-5 bg-[#00ff9d] text-black font-black rounded-2xl transition-all transform hover:scale-110 overflow-hidden">
            
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] animate-portal-swirl"></div>
            <span className="relative z-10 uppercase tracking-widest">Explore Wiki</span>
          </div>
        </Link>

        <Link to="/trivia" className="px-12 py-5 bg-white/5 backdrop-blur-md hover:bg-white/20 text-white font-black rounded-2xl transition-all transform hover:scale-105 border border-white/20 uppercase tracking-widest border-dashed">
          Play Trivia
        </Link>
      </div>
    </div>
  );
}