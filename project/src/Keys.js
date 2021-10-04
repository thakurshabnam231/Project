import React, { Component } from 'react'

class Keys extends Component {
    render() {
        const arr = this.props.value;
        const newArr = arr.map((num) => {
            return (
                <li> key={num} value={num}</li>
            )
        })
        return (
            <ul>{newArr}</ul>

        )
    }
}
export default Keys
