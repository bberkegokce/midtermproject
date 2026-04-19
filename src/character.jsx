import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from './api';

export default function CharacterList() {
  const [chars, setChars] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // API fonksiyonunun status parametresini desteklediğini varsayıyoruz
    getCharacters(page, search, status).then(data => { 
      setChars(data.results || []); 
      setLoading(false); 
    }).catch(() => { 
      setChars([]); 
      setLoading(false); 
    });
  }, [page, search, status]);

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-8 italic">Characters</h1>
        
        <div className="flex flex-col items-center gap-4">
          <input 
            type="text" 
            placeholder="Search characters..." 
            className="max-w-xl w-full bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-2xl focus:border-[#00ff9d] outline-none text-white transition-all shadow-2xl" 
            onChange={(e) => { setSearch(e.target.value); setPage(1); }} 
          />
          
          <div className="flex gap-2">
            {["", "Alive", "Dead", "unknown"].map((s) => (
              <button
                key={s}
                onClick={() => { setStatus(s); setPage(1); }}
                className={`px-4 py-1 rounded-full text-[10px] font-black uppercase transition ${status === s ? 'bg-[#00ff9d] text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                {s === "" ? "All" : s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00ff9d]"></div></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chars.map(c => (
            <Link to={`/characters/${c.id}`} key={c.id} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl">
              <div className="relative overflow-hidden aspect-square">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase ${c.status === 'Alive' ? 'bg-green-600' : 'bg-red-600'}`}>{c.status}</div>
              </div>
              <div className="p-5 bg-black/60">
                <h3 className="font-black text-xl text-[#00ff9d] truncate uppercase tracking-tighter group-hover:text-[#00d1ff] transition-colors">{c.name}</h3>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">{c.species} • {c.gender}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
      
      <div className="flex justify-center mt-16 gap-6 items-center font-black">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} className="px-8 py-3 bg-white/5 rounded-xl hover:bg-[#00ff9d] hover:text-black transition uppercase text-xs">Back</button>
        <span className="text-[#00ff9d] tracking-widest uppercase text-xs">Page {page}</span>
        <button onClick={() => setPage(p => p + 1)} className="px-8 py-3 bg-white/5 rounded-xl hover:bg-[#00ff9d] hover:text-black transition uppercase text-xs">Next</button>
      </div>
    </div>
  );
}