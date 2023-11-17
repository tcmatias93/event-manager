export const ADD_EVENT = "ADD_EVENT";

export const addEvent = (event: Event) => ({
  type: ADD_EVENT,
  payload: event,
});
