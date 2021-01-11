import { useHistory } from "react-router";
import logo from './../../../svg/Logo'

function SeeMore(){
    let history = useHistory();

    function handleClick(){
        history.push('/gallery');
    }

    return(
        <div className="col-xl-4 col-md-10 col-sm-10 col-xs-10 justify-items-center img-center container-card">
            <div onClick={handleClick} className="more-porto text-center d-flex justify-content-center align-items-center">
                <div class="wrapper-porto">
                    <img class="mb-4 more" src={logo.more} alt="more"/>
                    <h3>See More</h3>
                </div>
            </div>                        
        </div>
        )
}

export default SeeMore;