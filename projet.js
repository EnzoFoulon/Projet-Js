//les cartes
const deck = [
    { value: '2', suit: 'clubs' },
    { value: '3', suit: 'clubs' },
    { value: '4', suit: 'clubs' },
    // ... (toutes les autres cartes)
  ];

//mélange et distri des cartes
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
  
  function dealCards(players, deck) {
    for (let i = 0; i < 5; i++) {
      players.forEach(player => {
        player.hand.push(deck.pop());
      });
    }
  }

//gagnant
const _ = require('lodash');

function getHandValue(hand) {
  // Détermine la combinaison de cartes la plus forte pour une main donnée
  // (par exemple, une paire, un brelan, une quinte, etc.)
}

function determineWinner(players) {
  const playerHands = players.map(player => {
    const sortedHand = _.orderBy(player.hand, 'value');
    const handValue = getHandValue(sortedHand);
    return { hand: sortedHand, value: handValue };
  });

  const winningHand = _.maxBy(playerHands, 'value');

  return players.filter(player => {
    const playerHand = _.find(playerHands, { hand: player.hand });
    return playerHand.value === winningHand.value;
  });
}

//logique jeu

const game = {
    players: [
      { name: 'Player 1', hand: [], chips: 100 },
      { name: 'Player 2', hand: [], chips: 100 }
    ],
    pot: 0,
    currentBet: 0
  };
  
  function placeBet(player, amount) {
    if (amount > player.chips) {
      amount = player.chips;
    }
  
    if (amount > game.currentBet) {
      game.currentBet = amount;
    }
  
    player.chips -= amount;
    game.pot += amount;
  }
  
  function fold(player) {
    // Retirer le joueur de la partie
  }
  
  function endRound() {
    const winners = determineWinner(game.players);
    // Distribuer le pot aux gagnants
    // Réinitialiser l'état du jeu pour le prochain tour
  }
  
  // Gestionnaire d'événements pour le bouton "Miser"
  betButton.addEventListener('click', () => {
    const amount = parseInt(betInput.value, 10);
    placeBet(game.players[0], amount);
    // Passer au joueur suivant
  });
  
  // Gestionnaire d'événements pour le bouton "Se coucher"
  foldButton.addEventListener('click', () => {
    fold(game.players[0]);
    // Passer au joueur suivant
  });
  
  // Gestionnaire d'événements pour le bouton "Terminer le tour"
  endRoundButton.addEventListener('click', () => {
    endRound();
    // Passer au joueur suivant
  });
  