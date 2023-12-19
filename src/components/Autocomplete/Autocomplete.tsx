import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';



const items = [
  {label: 'Home', to: '/'},
  {label: 'About', to: '/about'},
  {label: 'Contact', to: '/contact'},
];
const Autocomplete = () => {
  return (
    <div>
      <Typeahead
        id="Autocomplete"
        onChange={(selected) => {
          // Handle selections...
          console.log(selected);
        }}
        labelKey={option => `${option.label}`}
        options={items}
      />
    </div>
  );
};

export default Autocomplete;