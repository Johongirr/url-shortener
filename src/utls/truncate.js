export const truncate = (url) => {
  let truncatedVal = "";
  for (let i = 0; i < 57; i++) {
    truncatedVal += url[i];
  }
  return truncatedVal + "...";
};
