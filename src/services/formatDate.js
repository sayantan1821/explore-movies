export default (stringDate) => {
    const months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December"
    };
    const year = stringDate.substring(0, 4);
    const date = stringDate.substring(8, 10);
    const monthIndex = stringDate.substring(5, 7);
    const monthName = months[monthIndex - 1];
    const formatted = `${date} ${monthName} ${year}`;
    return formatted.toString();
  }