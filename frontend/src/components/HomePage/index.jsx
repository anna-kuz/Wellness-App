import "./home.css"
import { Routes, Route, Link } from "react-router-dom";


export default function HomePage() {

    // const backgroundStyle = {
    //     background: 'linear-gradient(to right, #fff, black)',
    //     backgroundSize: '100%',
    //     height: '100vh',
    //     overflow: 'hidden'
    // }
    return (
        <div className="home-bg" 
        // style={{
        //   backgroundColor: 'rgb(142, 187, 255)',
        //   backgroundSize: 'cover',
        //   minHeight: '100vh'
        // }}
      >
        <h1>Home</h1>

        <div className="icon-row">
    <div className="column">
        <Link to="/personal">
            <div className="icon icon1">
            </div>
        </Link>
        <h4 className="icon-text">Profile</h4>

    </div>
  
    <div className="column">
        <Link to="/sleep">
            <div className="icon icon2">
            </div>
        </Link>
        <h4 className="icon-text">Track Sleep</h4>

    </div>
  
    <div className="column">
        <Link to="/water">
            <div className="icon icon3">
            </div>
        </Link>
        <h4 className="icon-text">Water Intake</h4>

        
    </div>
  
    <div className="column">
        <Link to="/resources">
            <div className="icon icon4">
            </div>
        </Link>
        <h4 className="icon-text">Wellness Resources</h4>
    </div>
    
</div>

        </div>
    )
}