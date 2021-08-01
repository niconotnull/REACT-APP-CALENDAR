import { types } from '../types/types';

const intialState = {
  events: [],
  activeEvent: null,
};

export const calendarReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };
    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };
    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent.id),
        activeEvent: null,
      };
    case types.eventLoaded:
      return {
        ...state,
        events: [...action.payload],
      };
    case types.eventLogout:
      return {
        ...intialState,
      };
    default:
      return state;
  }
};

// const intialState = {
//   events: [
//     {
//       id: new Date().getTime(),
//       title: 'Cumpleños de Nicolas',
//       start: moment().toDate(),
//       end: moment().add(2, 'hours').toDate(),
//       bgcolor: '#fafafa',
//       notes: 'Comprar el pastel',
//       user: {
//         _id: '123',
//         name: 'Nicolas',
//       },
//     },
//   ],
//   activeEvent: null,
// };
