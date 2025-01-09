export const convertDateToReadibleString = (date: Date): string => {
  return new Date(date)
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
    .slice(0, 5);
};

export const filterTimeslots = (timeslots: string[]): string[] => {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  return timeslots.filter((timeslot) => {
    const [hours, minutes] = timeslot.split(":").map(Number);
    const timeslotMinutes = hours * 60 + minutes;
    return timeslotMinutes >= nowMinutes;
  });
};
