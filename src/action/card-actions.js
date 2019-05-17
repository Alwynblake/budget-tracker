// actions are just objects

export const createCard = (title, content ) => {
  // return object that represents the action
  return {
    type: 'CARD_CREATE',
    payload: {
      id: Math.random(),
      title,
      content,
      createdOn: new Date(),
    }
  }
};
export const updateCard = (card) => {
  return {
    type: 'CARD_UPDATE',
    payload: card,
  }
};

export const deleteCard = (card) => {
  return {
    type: 'CARD_DELETE',
    payload: card,
  }
};