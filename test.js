const cartesianToPolar = (x, y) => {
  const cx = 0;
  const cy = 0;
  return (
    Math.round(
      (Math.atan2(y - cy, x - cx) * 180) / Math.PI + (x > cx ? 90 : 450),
    ) % 360
  );
};
console.log(cartesianToPolar(-0.8, 0.6)); // 45
