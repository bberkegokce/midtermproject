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
    getCharacters(page, search, status).then(data => {
      setChars(data.results || []);
      setLoading(false);
    }).catch(() => { setChars([]); setLoading(false); });
  }, [page, search, status]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 italic">Characters</h1>
        <div className="flex flex-col items-center gap-4 px-4">
          <input 
            type="text" 
            placeholder="Search characters..." 
            className="w-full max-w-xl bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-2xl focus:border-[#00ff9d] outline-none text-white shadow-2xl"
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
          <div className="flex flex-wrap justify-center gap-2">
            {["", "Alive", "Dead", "unknown"].map((s) => (
              <button key={s} onClick={() => { setStatus(s); setPage(1); }} className={`px-4 py-1 rounded-full text-[10px] font-black uppercase ${status === s ? 'bg-[#00ff9d] text-black' : 'bg-white/10 hover:bg-white/20'}`}>
                {s === "" ? "All" : s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00ff9d]"></div></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {chars.map(c => (
            <Link to={`/characters/${c.id}`} key={c.id} className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.03] transition-all duration-300 shadow-2xl">
              <div className="relative aspect-square">
                <img src={c.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={c.name} />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase ${c.status === 'Alive' ? 'bg-green-600' : 'bg-red-600'}`}>{c.status}</div>
              </div>
              <div className="p-5 bg-black/60 border-t border-white/5">
                <h3 className="font-black text-lg text-[#00ff9d] truncate uppercase tracking-tighter">{c.name}</h3>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">{c.species} • {c.gender}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
      
      <div className="flex justify-center mt-12 gap-4 items-center px-4">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} className="flex-1 max-w-30 py-3 bg-white/5 rounded-xl hover:bg-[#00ff9d] hover:text-black transition font-black uppercase text-[10px]">Back</button>
        <span className="text-[#00ff9d] font-black text-xs uppercase tracking-widest">Page {page}</span>
        <button onClick={() => setPage(p => p + 1)} className="flex-1 max-w-30 py-3 bg-white/5 rounded-xl hover:bg-[#00ff9d] hover:text-black transition font-black uppercase text-[10px]">Next</button>
      </div>
    </div>
  );
}