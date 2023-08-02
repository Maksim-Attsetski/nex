export const getRandomColor = (opacity: number = 0.4): string => {
  const randomNum1 = Math.floor(Math.random() * 255);
  const randomNum2 = Math.floor(Math.random() * 255);
  const randomNum3 = Math.floor(Math.random() * 255);

  return `rgba(${randomNum1}, ${randomNum2}, ${randomNum3}, ${opacity})`;
};
