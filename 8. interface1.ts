interface Player {
  name: string;
  nrOfLives: number;
  isActive: boolean;
}

// const player10: Player = {
//   name: 'Elmo',
//   nrOfLives: 3,
//   isActive: true,
// };

// const player11: Player = {
//   name: 'Elmo',
//   nrOfLives: 3,
//   isActive: false,
// };

// player10.isActive = true;
// // player10.nrOfLives = 'veel';

interface HavingLives {
  nrOfLives: number;
}

const player10: Player = {
  name: 'Elmo',
  nrOfLives: 3,
  isActive?: true,
};

const player11 = {
  name: 'Elmo',
  nrOfLives: 2,
  isActive: false,
};

function showResult(obj: HavingLives): void {
  console.log(`Number of lives: ${obj.nrOfLives}, ${JSON.stringify(obj)}`);
}

showResult(player10);
