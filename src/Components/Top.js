import React from 'react';
import "./Top.css";

function Top() {
    return (
        <div>
            <header className='header'>
                <a href="-"><img src="https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM" alt="logo" className='logo' /> Spotify</a>
                <nav>
                    <a href="+">Premium</a>
                    <a href="+">Support</a>
                    <a href="+">Download</a>
                    <span>|</span>
                    <a href="+">Sign Up</a>
                    <a href="+">LogIn</a>
                </nav>
                <div className='icons'>
                    <i className="fa-solid fa-bars" />
                </div>
            </header>


            <div className='main'>
                <div className='content'>
                    <h1>Get Premium free for 1 month</h1>
                    <h6>Just ₹ 119/month after. Debit and credit card accepted. Cancel anytime</h6>
                    <div className='button1'>
                        <button className='rounded-pill ' style={{ backgroundColor: "black" }}>GET STARTED</button>
                        <button className='rounded-pill ' style={{ border: "1px solid white" }}>SEE OTHER PLANS</button>
                    </div>
                    <div className="text"><a href="=">Term and conditions apply.</a>
                        <span>  1 month free not available for users who have already tried Premium</span>
                    </div>
                </div>

            </div>
            <div className='main2'>
                <div className='content'>
                    <h1>Introducing Premium Mini</h1>
                    <h3> ₹ 7 for 1 day</h3>
                    <h3> ₹ 25 for 1 week</h3>
                    <button className='rounded-pill button1' style={{ backgroundColor: "white", color: "black", padding: "10px 25px", marginTop: "1.5rem" }}>GET MINI</button>
                </div>
                <a href="=" className='text'>Term and conditions apply</a>
            </div>
        </div>
    )
}

export default Top