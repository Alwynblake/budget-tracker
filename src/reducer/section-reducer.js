export default (state = [], {type, payload}) => {
  // payload is a section in this situation
  switch (type) {
    case'SECTION CREATE':
      return [...state, payload];
    case'SECTION UPDATE':
      // *we are going to use map
      return null;
    case'SECTION DELETE':
      // *we are going to use filter
      return null;
    default:
      return state;

  }
}