import React from 'react';
import Typography from 'components/Typography';

type LocalDateProps = {
  date: number;
};

const LocalDate: React.FC<LocalDateProps> = ({ date }) => {
  const dateObj = new Date(date);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return (
    <Typography
      type="caption"
      className="text-gray-500"
    >{`${year}.${month}.${day}`}</Typography>
  );
};

export default LocalDate;
