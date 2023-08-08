export const convertDateFormat = inputDate => {
  const parts = inputDate.split('-');
  if (parts.length !== 3) {
    throw new Error(
      'Invalid input date format. Please use "YYYY-MM-DD" format.'
    );
  }

  const day = parts[2];
  const month = parts[1];

  return `${day}.${month}`;
};
