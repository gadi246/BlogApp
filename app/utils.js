

export const extractDate = (num) => {
  let [,month,day,year] = new Date(+num).toDateString().split(" ");
  day = day < 10 ? day % 10 : day;
  let fullDate = `${day} ${month}, ${year}`;
  let compareDate = `${month}-${year}`;
  return {fullDate, compareDate};
};

export const toFixedKey = key => key.slice(4).toLowerCase();
