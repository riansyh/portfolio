import { useHistory } from "react-router";

function BackButton(){
    let history = useHistory();

    function handleClick(){
        history.push('/portfolio');
    }

    return(
        <div className="back">
            <h5 onClick={handleClick}>← Back to home</h5>
        </div>        
    )
}

export default BackButton;