enum DirectionNumber {
  North = 2,
  East,
  South,
  West
}

let direction1: DirectionNumber = DirectionNumber.South;

direction1 = 2;
direction1 = 999;


enum DirectionString {
  North = 'NORTH',
  East = 'EAST',
  South = 'SOUTH',
  West = 'WEST'
}

let directions1: DirectionString = DirectionString.South;

// directions1 = 'NORTH';  // 💣
// directions1 = 'ZZZ';    // 💣