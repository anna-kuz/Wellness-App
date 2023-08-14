import "./home.css"
import { Routes, Route, Link } from "react-router-dom";


export default function HomePage() {
    return (
        <div
        style={{
          backgroundColor: 'rgb(142, 187, 255)',
          backgroundSize: 'cover',
          minHeight: '100vh'
        }}
      >
        <h1>Home</h1>

        <div className="icon-row">
    <div className="column">
        <Link to="/personal">
            <div className="icon icon1">
                <h1 className="icon-text">Personal Profile</h1>
            </div>
        </Link>
    </div>
  
    <div className="column">
        <Link to="/sleep">
            <div className="icon icon2">
                <h1 className="icon-text">Track Sleep</h1>
            </div>
        </Link>
    </div>
  
    <div className="column">
        <Link to="/water">
            <div className="icon icon3">
                <h1 className="icon-text">Water Intake</h1>
            </div>
        </Link>
    </div>
  
    <div className="column">
        <Link to="/resources">
            <div className="icon icon4">
                <h1 className="icon-text">Wellness Resources</h1>
            </div>
        </Link>
    </div>
</div>

        </div>
    )
}