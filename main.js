const playerPosition = (map) => {
  const playerPosition = { playerY: 0, playerX: map.length / 2 };
  return playerPosition;
};

const getRandomNumber = (upperLimit) => {
  const num = Math.floor(Math.random() * (upperLimit + 1));
  return num;
};

const generateDebris = (map, numberOfDebris) => {
  const debrisPosition = {};
  for (let i = 1; i < map.length; i++) {
    debrisPosition[`debris${i}`] = getRandomNumber(map.length);
  }
  return debrisPosition;
};

let mapHight = 20
let mapWidth = 20

const generate2D = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};
