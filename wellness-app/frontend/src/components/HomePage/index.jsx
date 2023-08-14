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

        <div class="icon-row">
    <div class="column">
        <Link to="/personal">
            <div class="icon icon1">
                <h1 class="icon-text">Personal Profile</h1>
            </div>
        </Link>
    </div>
  
    <div class="column">
        <Link to="/sleep">
            <div class="icon icon2">
                <h1 class="icon-text">Track Sleep</h1>
            </div>
        </Link>
    </div>
  
    <div class="column">
        <Link to="/water">
            <div class="icon icon3">
                <h1 class="icon-text">Water Intake</h1>
            </div>
        </Link>
    </div>
  
    <div class="column">
        <Link to="/resources">
            <div class="icon icon4">
                <h1 class="icon-text">Wellness Resources</h1>
            </div>
        </Link>
    </div>
</div>

        </div>
    )
}