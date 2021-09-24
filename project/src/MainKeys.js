import React, { Component } from 'react'
import Keys from './Keys';

class MainKeys extends Component {
    render() {
        const array = [10, 20, 30, 40];
        return (
            <div>
                <Keys value={array} />
            </div>
        )
    }
}
export default MainKeys

