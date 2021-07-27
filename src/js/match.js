export const arrayHeroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

export default function showHeroes(data) {
  return data.sort((a, b) => b.health - a.health);
}