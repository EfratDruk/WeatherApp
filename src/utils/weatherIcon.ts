export function getIcon(temp: number) {
  if (temp < 20) return "../images/cold.png";
  if (temp > 30) return "../images/sun.png";
  return "../images/warm.png";
}
