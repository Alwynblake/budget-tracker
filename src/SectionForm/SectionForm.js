import React from 'react';

export default class sectionForm extends React.Component {

  render() {
    return (
        <form>
          <input
            type = 'text'
            name = 'title'
            placeholder = 'title'
            />
          <button type='submit'> Create Section </button>
        </form>
    );
  }
}