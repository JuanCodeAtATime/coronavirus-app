import React, { Component } from "react";

export class AutoCompleteTxt extends Component {
  constructor(props) {
    super(props);
    this.items = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas',
      'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia',
      'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
      'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands',
      'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
      'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
      'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau',
      'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
      'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia',
      'Wisconsin', 'Wyoming'];
  }
}


// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {


  return (
    <div className="form-group">
      <input className="form-control state" {...props}
      />
      <ul>
        {this.items.map((item) => <li>{item}</li>)}
      </ul>
      <input className="form-control" {...props} />


    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
