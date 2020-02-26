<<<<<<< HEAD
const playerPosition = (map) => {
  const playerPosition = { playerY: 0, playerX: map.length / 2 };
  return playerPosition;
};
=======
let mapHight = 20
let mapWidth = 20

const generate2D = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};
>>>>>>> a03a0302118632e371063851b7cdf45ae4d3640f
