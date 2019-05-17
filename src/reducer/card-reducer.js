export default (state = {}, {type, payload}) => {
  let updatedState = null;
  let sectionCards = null;
  let updatedCards = null;

  switch (type) {
    case 'SECTION_CREATE':

      return {...state, [payload.id]: []};
    case 'SECTION_DELETE':
      updatedState = {...state};
      delete updatedState[payload.id];
      return updatedState;
    case 'CARD_CREATE':
      // get the array that you want to modify:
      sectionCards = state[payload.sectionID];
      // make a copy of the array by adding a new element into the array:
      updatedCards = [...sectionCards, payload];
      // return the state, which is the entire object, with the updated cards:
      return {...state, [payload.sectionId]:updatedCards};
    case 'CARD_DELETE':
      //////
    //  *complete this section
      /////
    case 'CARD_UPDATE':
      sectionCards = state[payload.sectionID];
      updatedCards = sectionCards.map(currentCard => {
        return currentCard.id === payload.id ? payload : currentCard
      });
      return {...state, [payload.sectionId]:updatedCards};
    default:
      return state;
  }

};
