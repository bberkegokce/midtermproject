import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './home';
import CharacterList from './character';
import CharacterDetail from './detail';
import Trivia from './trivia';

const RandomPortalButton = () => {
  const navigate = useNavigate();
  const goToRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    navigate(`/characters/${randomId}`);
  };

  return (
    <button 
      onClick={goToRandomCharacter}
      className="relative overflow-hidden px-4 py-2 rounded-full font-black text-[10px] uppercase text-black transition-all hover:scale-110 active:scale-95 group shadow-[0_0_15px_#00ff9d]"
    >
      <div className="absolute inset-0 bg-linear-to-r from-green-400 via-[#00ff9d] to-emerald-500 animate-pulse"></div>
      <span className="relative z-10 flex items-center gap-1">🌀 Portal</span>
    </button>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-white">
        <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
          <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/" className="text-2xl font-black text-[#00ff9d] tracking-tighter drop-shadow-[0_0_8px_#00ff9d]">R&M WIKI</Link>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-[#00ff9d] transition">Home</Link>
              <Link to="/characters" className="hover:text-[#00ff9d] transition">Characters</Link>
              <Link to="/trivia" className="text-[#00d1ff] hover:text-white transition">Trivia</Link>
              <RandomPortalButton />
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 md:px-6 py-10">
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