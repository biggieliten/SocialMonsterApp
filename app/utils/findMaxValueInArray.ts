export const findMaxValueInArray = (data: any[]) => {
  const arr: number[] = [];

  data.map((values) => {
    arr.push(Number(values));
  });
  const highestValue = Math.max(...arr);
  return highestValue;
};
