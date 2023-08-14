import { Routes, Route, Link } from "react-router-dom";

export default function ResourcesPage() {
    return (
        <>

<nav className="bg-transparent p-4 fixed w-full z-50 flex justify-center items-center">
    <div className="max-w-7xl mx-auto">
        <div className="flex space-x-6">
            <Link to="/" className="link text-white">Home</Link>
            <Link to="/personal" className="link text-white">Personal</Link>
            <Link to="/sleep" className="link text-white">Sleep</Link>
            <Link to="/water" className="link text-white">Water</Link>
            <Link to="/resources" className="link text-white">Resources</Link>
        </div>
    </div>
</nav>


        <h1>Resources</h1>
        <div className="rcontainer">
            <img src="https://intlsleep.com/wp-content/uploads/2019/11/young-man-peacefully-sleeping-in-his-bed-2Y22HQS-2048x1152.jpg" alt="sleep image" />
            <h2>Sleep tips: 6 steps to better sleep</h2>
            <p>You're not doomed to toss and turn every night. Consider simple tips for better sleep, from setting a sleep schedule to including physical activity in your daily routine.</p>
            <a href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/sleep/art-20048379">Link</a>
        </div>

        <div className="rcontainer">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftflmag.com%2Fsites%2Fdefault%2Ffiles%2Farticle%2Ftips-for-healthy-hydration.jpg&f=1&nofb=1&ipt=eee67d84ab606b48f89fe4fe5f6203c19b9dd16bb3acbe1a6aab296df02c88b1&ipo=images" alt="water image" />
            <h2>Water: How much should you drink every day?</h2>
            <p>Water is essential to good health. Are you getting enough? These guidelines can help you find out.</p>
            <a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/water/art-20044256">Link</a>
        </div>

        <div className="rcontainer">
            <img src="https://www.oceanfrontrecovery.com/wp-content/uploads/2019/12/stress-management-techniques.jpg" alt="stress img" />
            <h2>Stress Management: How to Reduce and Relieve Stress</h2>
            <p>While it may seem like there’s nothing you can do about stress at work and home, there are steps you can take to destress and regain control.</p>
            <a href="https://www.helpguide.org/articles/stress/stress-management.htm">Link</a>
        </div>

        <div className="rcontainer">
            <img src="https://www.mypressplus.com/wp-content/uploads/2018/09/Image_1-1.jpeg" alt="meditation img" />
            <h2>Daily Calm | 10 Minute Mindfulness Meditation | Be Present</h2>
            <p>Tamara Levitt guides this 10 minute Daily Calm mindfulness meditation to powerfully restore and re-connect with the present.</p>
            <a href="https://www.youtube.com/watch?v=ZToicYcHIOU">Link</a>
        </div>

        <div className="rcontainer">
            <img src="https://diaryofajournalplanner.com/wp-content/uploads/2020/12/Journal-Prompts-.jpg.webp" alt="journaling image" />
            <h2>99+ Journal Prompts To Inspire You</h2>
            <p>Feeling stuck for new journal entry ideas? Try these Journal prompt ideas to inspire you and spark creativity. </p>
            <a href="https://diaryofajournalplanner.com/journal-prompts/">Link</a>
        </div>



        </>
    )
}