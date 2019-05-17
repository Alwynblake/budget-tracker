import React from 'react';
import { connect } from 'react-redux';
import { createSection } from '../action/section-actions';

import SectionForm from '../SectionForm/SectionForm';

class App extends React.Component {
  render() {
    return(
        <div>
          <SectionForm onComplete={this.props.mappedSectionCreate}/>
          { this.props.sections.map(current => <p>{current.title}</p>)}
        </div>
    )
  }
}

// curried-function (function that returns a function). It connects to the provider:
// connect to the provider and get elements from the provider
const  mapStateToProps = (state) => {
// anything returned will become props
//   console.log('state', state);
return {
  sections: state.sections,
 };
};

// connect to the provider and get the skill to dispatch actions.
const mapDispatchToProps = (dispatch) => {
return {
  mappedSectionCreate: (section) => {
    dispatch(createSection(section.title));
  }
 }
};
// create a new component called App but first add props to it from these 2 functions.
// the connect method takes state from store and passes it as props
export default connect(mapStateToProps, mapDispatchToProps)(App);