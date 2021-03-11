Date.prototype.getWeekNumber = function () {
  var d = new Date(
    Date.UTC(this.getFullYear(), this.getMonth(), this.getDate())
  );
  d.setUTCDate(d.getUTCDate() - d.getUTCDay());
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};

function Calendar(startDate, endDate) {
  const weeks = {};

  for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
    const weekNumber = day.getWeekNumber();
    const weekDay = day.getDay();
    weeks[weekNumber] = weeks[weekNumber] || {};
    weeks[weekNumber][weekDay] = new Date(day);
  }
  return weeks;
}

export default Calendar;
