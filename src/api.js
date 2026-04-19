const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (page = 1, name = "") => {
const res = await fetch(`${BASE_URL}/character?page=${page}&name=${name}`);
if (!res.ok) throw new Error("Character not found");
return res.json();
};

export const getSingleCharacter = async (id) => {
const res = await fetch(`${BASE_URL}/character/${id}`);
return res.json();
};