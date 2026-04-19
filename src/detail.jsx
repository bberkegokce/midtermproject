import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleCharacter } from './api';

export default function CharacterDetail() {
const { id } = useParams();
const navigate = useNavigate();
const [char, setChar] = useState(null);

useEffect(() => {
    getSingleCharacter(id).then(setChar);
}, [id]);

if (!char) return <div className="text-center">Loading...</div>;

return (
    <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
    <img src={char.image} alt={char.name} className="w-full md:w-1/2 object-cover" />
    <div className="p-8 space-y-4">
        <button onClick={() => navigate(-1)} className="text-green-400 text-sm">← Back</button>
        <h1 className="text-4xl font-bold">{char.name}</h1>
        <div className="space-y-2 text-slate-300">
        <p><span className="text-white font-semibold">Status:</span> {char.status}</p>
        <p><span className="text-white font-semibold">Species:</span> {char.species}</p>
        <p><span className="text-white font-semibold">Gender:</span> {char.gender}</p>
        <p><span className="text-white font-semibold">Origin:</span> {char.origin.name}</p>
        <p><span className="text-white font-semibold">Location:</span> {char.location.name}</p>
        </div>
    </div>
    </div>
);
}