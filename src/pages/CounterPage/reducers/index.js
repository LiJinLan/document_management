

export function couter(state = 0, action) {
  switch (action.type) {
    case "add":
      return state + action.number;
    case "counter-saga-sub":
        return state + action.number;
    default:
      return state;
  }
}


export function couterSagaData(state = {data: []}, action) {
  switch (action.type) {
    case "counter-saga-show":
      return action.data;
    default:
      return state;
  }
}


