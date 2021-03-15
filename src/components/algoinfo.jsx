import '../css/algoinfo.css'

function AlgoInformation() {
    const algoName = 'Merge Sort';
    const algoDesc = 'Merge Sort is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows.';
    return (
        <div className="algo-info-container" >
            <p className="title">{algoName}</p>
            <p className="description">{algoDesc}</p>
        </div>
    );
}

export default AlgoInformation;

