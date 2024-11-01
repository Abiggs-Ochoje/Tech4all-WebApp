import  ptcCoworking from './assets/images/ptcCoworking.svg'
import useAosAnimation from "./useAosAnimation";
import Navbar from './Navbar';

const Header = () => {

    useAosAnimation ();

const handleClick = (a) =>{
    alert(a)
}
    return (
        
        <div className="head">
            <div><Navbar/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-9 header" data-aos='zoom-in' >
                        <h1 className="text-light">Acquire World-Class Tech Skills </h1>
                        <p className="lead text-light">We provide the training and mentorship you 
                            need to get you from novice to job-ready in 6 months,
                             through our programs led by instructors from leading companies. </p>
                           
                        <div>
                            <button className="btn btn-light btn-sm rounded-pill my-2 my-sm-0 px-3 get-started" type="submit"
                           onClick={() => handleClick('welcome')} >Get started</button>
                            {/* <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>  
                            <FontAwesomeIcon icon={faPlayCircle} className="ps-3 text-light" /> Watch video</Link> */}
                        </div>
                    </div>

                    <div className="col-xl-6 col-md-6 " data-aos='zoom-in'>

                        <img src={ptcCoworking}
                        alt="Working in the Tech firm"
                        className="header-photo img-fluid" /> 
                       
                    </div>
                </div>

            </div>

           

            
        </div>
    )
}

export default Header;