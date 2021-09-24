import React, { Component } from 'react'

class Keys extends Component {
    render() {
        const arr = this.props.value;
        const newArr = arr.map((num) => {
            return (<ol>
                <li>{num}</li></ol>
            )
        })
        return (
            <ul>{newArr}</ul>

        )
    }
}
export default Keys
