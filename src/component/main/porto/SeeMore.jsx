import { useHistory } from "react-router";
import logo from './../../../svg/Logo'

function SeeMore(){
    let history = useHistory();

    function handleClick(){
        history.push('/portfolio/gallery');
        window.scrollTo(0, 0); 
    }

    return(
        <div className="col-xl-4 col-md-10 col-sm-10 col-xs-10 justify-items-center img-center container-card"> 
            <div onClick={handleClick} className="more-porto text-center d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
                <div class="wrapper-porto">
                    <img class="mb-4 more" src={logo.more} alt="more"/>
                    <h3>See More</h3>
                </div>
            </div>                        
        </div>
        )
}

export default SeeMore;