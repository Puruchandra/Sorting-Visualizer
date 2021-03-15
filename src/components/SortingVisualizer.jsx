import React from 'react';
import '../css/component.css';
import AlgoInformation from './algoinfo';
import Appbar from './appbar';
import Bar from './bar';

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


    //GENERATES NEW ARRAY WITH RANDOM VALUES
    generateNewRandomArray() {

        const arr = [];
        for (let i = 0; i < 15; i++) {
            arr.push(randomize(5, 450));
        }
        this.setState({ unsortedArray: arr });

        console.log("Set State");

    }

    render() {
        const { unsortedArray } = this.state;
        return (

            <div>
                <Appbar></Appbar>

                <div className="array-container" style={{
                    height: `250px`,
                }}>
                    {unsortedArray.map((value, idx) => (
                        <div><Bar id={idx} value={value}></Bar></div>
                    ))}
                </div>

                <AlgoInformation></AlgoInformation>
                <hr></hr>
            </div>
        );
    }
}

export default SortingVisualizer;

//HELPER FOR GENERATING RANDOMS
function randomize(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


