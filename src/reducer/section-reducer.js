export default (state = [], {type, payload}) => {
  // payload is a section in this situation
  console.log('in reducer', type);
  switch (type) {
    case'SECTION_CREATE':
      console.log('payload', payload);
      return [...state, payload];
    case'SECTION_UPDATE':
      // *we are going to use map *
      // possible structure:
//         handleUpdateSection = (section) =>
//       this.setState((previousState) => {
//   const updateSections = previousState.payload.map(currentSection =>
//       section.id === currentSection.id ? section : currentSection
//   );
//   return {section: updateSections};
// });

      return null;
    case'SECTION_DELETE':
      // *we are going to use filter *
        // possible structure:
        // handleRemoveSection = (section) => {
        //   this.setState(previousState => ({
        //     sections: previousState.sections.filter(currentSections => currentSections.id !== section.id),
        //   }))
        // };

      return null;
    default:
      return state;
  }
};
