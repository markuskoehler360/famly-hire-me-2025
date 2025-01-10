export const convertDateToReadableString = (date: string): string => {
  return `${new Date(date).getHours()}:${new Date().getMinutes()}`;
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
