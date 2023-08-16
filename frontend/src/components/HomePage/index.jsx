import { useState } from "react";
import "./home.css"
import { Routes, Route, Link } from "react-router-dom";


export default function HomePage() {
    const [showWelcome, setShowWelcome] = useState(false)


        const toggleWelcome = () => {
            setShowWelcome(!showWelcome)
        }
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
<div className="fade-in">
        <div className="title">
        <h1>GLOW UP</h1>
        </div>

        <div className="icon-row">
    <div className="column">
        <Link to="/personal">
            <div className="icon icon1">
                <h4 className="icon-text">Profile</h4>
            </div>
        </Link>

    </div>
  
    <div className="column">
        <Link to="/sleep">
            <div className="icon icon2">
                <h4 className="icon-text">Track Sleep</h4>
            </div>
        </Link>

    </div>
  
    <div className="column">
        <Link to="/water">
            <div className="icon icon3">
                <h4 className="icon-text">Water Intake</h4>
            </div>
        </Link>
        
    </div>
  
    <div className="column">
        <Link to="/resources">
            <div className="icon icon4">
                <h4 className="icon-text">Wellness Resources</h4>
            </div>
        </Link>
        
    </div>
    
</div>

<h5 className={`fade-in ${showWelcome ? "" : "hide"}`} onClick={toggleWelcome}>
        {showWelcome ? "Hide" : "Click to Learn More"}
        </h5>
<div className="welcome" id="welcome">
    {showWelcome && (
    <h6>
        Welcome to <span className="gu">Glow Up</span> - Your Personal Wellness Companion!
        <br/>
        Step into a world of balance and well-being with our intuitive wellness app. We're here to help you take charge of your health journey by seamlessly tracking essential aspects of your life, such as water intake, sleep hours, and more.
        <br/>
        Our mission is to empower you on your path to wellness, guiding you towards a life of vitality and inner harmony. Whether you're aiming to improve your hydration, sleep quality, or overall wellness, our app is designed to make the process simple and enjoyable.
        <br/>
        Get ready to embark on a transformative journey towards a healthier and happier you. Your well-being is our priority, and we're excited to join you every step of the way.
        <br />
        Start exploring Glow Up today and experience the joy of nurturing your mind, body, and soul.
        <br />
        Here's to a vibrant and fulfilling wellness journey ahead!"
    </h6>
    )}
</div>
</div>
        </div>
    )
}