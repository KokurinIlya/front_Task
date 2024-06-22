document.addEventListener('DOMContentLoaded', () => {
    const characterContainer = document.getElementById('character-container');
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('search-button');

    async function fetchCharacters(query = '') {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
        const data = await response.json();
        displayCharacters(data.results);
    }

    function displayCharacters(characters) {
        characterContainer.innerHTML = '';
        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            characterCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
                <p>Species: ${character.species}</p>
                <p>Status: ${character.status}</p>
                <p>Location: ${character.location.name}</p>
            `;
            characterContainer.appendChild(characterCard);
        });
    }

    function handleSearch() {
        const query = searchInput.value;
        fetchCharacters(query);
    }

    searchButton.addEventListener('click', handleSearch);

    fetchCharacters();
});
