const botoes = document.querySelectorAll('.botao');
const pokemons = document.querySelectorAll('.pokemon');

var listaPokemons = ['Bulbasaur', 'Charmander', 'Squirtle']
botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        desselecionarBotao();
        desselecionarPokemon();

        botao.classList.add('selecionado');
        pokemons[index].classList.add('selecionado');     
        
    });
});

function desselecionarPokemon() {
    const pokemonSelecionado = document.querySelector('.pokemon.selecionado');
    pokemonSelecionado.classList.remove('selecionado');
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

