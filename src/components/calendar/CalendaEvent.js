import React from 'react';

export const CalendaEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <div>
      <strong>{title}</strong>
      <span> - {user.name}</span>
    </div>
  );
};
