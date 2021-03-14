import React from 'react';
import '../css/ComponentCss.css';

class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            unsortedArray: [],
        };
    }

    componentDidMount() {
        this.generateNewRandomArray();
    }

    generateNewRandomArray() {

        const arr = [];
        for (let i = 0; i < 310; i++) {
            arr.push(randomize(5, 650));
        }
        this.setState({ unsortedArray: arr });

        console.log("Set State");

    }

    render() {
        const { unsortedArray } = this.state;
        return (
            <div className="array-container">
                {unsortedArray.map((value, idx) => (
                    <div
                        className="single-element-bar"
                        key={idx}
                        style={{
                            height: `${value}px`,
                        }}></div>
                ))}
            </div>
        );
    }
}

export default SortingVisualizer;


function randomize(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


