export function getDistanceBetweenPoints(
  latitude1: number,
  longitude1: number,
  latitude2: number,
  longitude2: number
) {
  const theta = longitude1 - longitude2;
  let distance =
    Math.sin(deg2rad(latitude1)) * Math.sin(deg2rad(latitude2)) +
    Math.cos(deg2rad(latitude1)) *
      Math.cos(deg2rad(latitude2)) *
      Math.cos(deg2rad(theta));
  distance = Math.acos(distance);
  distance = rad2deg(distance);
  distance = distance * 60 * 1.1515;
  distance = distance * 1.609344;
  return round(distance, 2);
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

function rad2deg(rad: number) {
  return rad * (180 / Math.PI);
}

function round(value: number, precision: number) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
