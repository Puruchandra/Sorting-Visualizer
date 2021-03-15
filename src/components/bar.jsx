import '../css/component.css'

function Bar(props) {
    return (
        <div>
            <div className="single-element-bar-top"></div>
            <div
                className="single-element-bar"
                key={props.id}
                style={{
                    height: `${props.value / 2}px`,
                }}>
            </div>
        </div>


    );
}

export default Bar;