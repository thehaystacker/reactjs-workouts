import React from "react";
import './Person.css';

const person = props => {
  console.log(" [props.children] ", props.children);

  let hobbies = null;
  if (props.children) {
    hobbies = (
      <ul>
        {props.children.map((hobbie, i) => {
          console.log("[hobbie]", hobbie);

          return <li key={i}>{hobbie}</li>;
        })}
      </ul>
    );
  }

  const h4Style = {
    'color': '#346175'
  }

  return (
    <div className="new-person">
      <h4 style={h4Style}>
        Hi I'm {props.name} and I'm {props.age} years old.
      </h4>
      
      <input 
        type="text" 
        value={props.name} 
        onChange={props.eventInputChange}
        onBlur={props.eventInputOnblur}
        className="inp-txt-person" />
      
      {hobbies}
    </div>
  );
};

export default person;
