import React, { Component } from "react";

export default class AutoCompleteTxt extends Component {
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
            'Wisconsin', 'Wyoming']
    }

    render() {
        return (
            <div>
                <input>
                    <ul>
                        {this.items.map((item) => <li>{item}</li>)}
                    </ul>
                </input>
            </div>
        )
    }
}

