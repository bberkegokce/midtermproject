import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './home';
import CharacterList from './character';
import CharacterDetail from './detail';
import Trivia  from './trivia';

const RandomPortalButton = () => {
  const navigate = useNavigate();
  const goToRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    navigate(`/characters/${randomId}`);
  };

  return (
    <button 
      onClick={goToRandomCharacter}
      className="relative overflow-hidden px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-tighter text-black transition-all hover:scale-110 active:scale-95 group"
    >
      {/* The Portal Background */}
      <div className="absolute inset-0 bg-linear-to-r from-green-400 via-emerald-500 to-green-600 animate-pulse"></div>
      {/* The Swirl Overlay */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-size-[10px_10px] group-hover:rotate-180 transition-transform duration-1000"></div>
      <span className="relative z-10 flex items-center gap-1">
        🌀 Random Portal
      </span>
    </button>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-white">
        <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-[#00ff9d]/30 shadow-[0_0_20px_rgba(0,255,157,0.1)]">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-black text-[#00ff9d] tracking-tighter drop-shadow-[0_0_5px_#00ff9d]">R&M WIKI</Link>
            
            <div className="flex gap-8 items-center text-xs font-black uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-[#00ff9d] transition">Home</Link>
              <Link to="/characters" className="hover:text-[#00ff9d] transition">Characters</Link>
              <Link to="/trivia" className="text-[#00d1ff] hover:text-white transition">Trivia</Link>
              <RandomPortalButton />
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
            <Route path="/trivia" element={<Trivia />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;