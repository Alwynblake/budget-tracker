export default (state = [], {type, payload}) => {
  // payload is a section in this situation
  switch (type) {
    case'SECTION CREATE':
      return [...state, payload];
    case'SECTION UPDATE':
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
    case'SECTION DELETE':
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
