let pokemonList = [
    {name: 'Nidorino', attack: 72, defense: 57, types: ['poison']},
    {name: 'Ponyta', attack: 85, defense: 55, types: ['fire']},
    {name: 'Onix', attack: 45, defense: 160, types: ['rock', 'ground']},
    {name: 'Starmie', attack: 75, defense: 85, types: ['water', 'psychic']},
    {name: 'Umbreon', attack: 65, defense: 110, types: ['dark']},
];

for (let i = 0; i < pokemonList.length; i++) {    
    if (pokemonList[i].attack > 80) {        
        document.write(pokemonList[i].name + ' (attack: ' + pokemonList[i].attack + ' / defense: ' + pokemonList[i].defense + ') is the most powerful pokemon of ' + pokemonList.length + '<br />'); 
        }
        else {
            document.write(pokemonList[i].name + ' (attack: ' + pokemonList[i].attack + ' / defense: ' + pokemonList[i].defense + ')<br/>');
        }
}
