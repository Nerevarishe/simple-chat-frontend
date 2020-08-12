export const rem = (data) => {
  const dataArray = data.split(" ");
  const convertedArray = [];
  dataArray.forEach((element) => {
    const pixels = parseInt(element);
    const rem = pixels / 16 + "rem";
    convertedArray.push(rem);
  });
  return convertedArray.join(" ");
};
