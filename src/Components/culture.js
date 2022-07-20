import React from 'react';
import './culture.css';

function Culture() {
    return (
        <div style={{ background: "black" }}>
            <h1 style={{ color: "white", paddingTop: "10vh", textAlign: "center" }}>Connect with music culture</h1>
            <div id="culture">

                <div class="card" style={{ background: "black", color: "white" }}>
                    <img class="card-img-top" src="https://i.scdn.co/image/ab671c3d0000f4309894eb4527215b7fde79e673" alt='bollywood' style={{ width: "250px", padding: "10px 40px 10px 40px" }} />
                    <div className='item' style={{ width: "14rem", paddingTop: "1rem", textAlign: "center" }}>
                        <h5 style={{ paddingTop: "2rem" }}>Bollywood Butter</h5>
                        <p style={{ paddingTop: "1rem" }}>The finest quality Bollywood music handpicked for you.</p>
                    </div>
                </div>


                <div class="card" style={{ background: "black", color: "white" }}>
                    <img class="card-img-top" src="https://i.scdn.co/image/ab671c3d0000f4308180688c87bd403b7a6da8c7" alt='Punjabi' style={{ width: "250px", padding: "10px 40px 10px 40px" }} />
                    <div className='item' style={{ width: "15rem", paddingTop: "1rem", textAlign: "center" }}>
                        <h5 style={{ paddingTop: "2rem" }}>Punjabi 101
                        </h5>
                        <p style={{ paddingTop: "1rem" }}>The ultimate Punjabi hits.</p>
                    </div>
                </div>

                <div class="card" style={{ background: "black", color: "white" }}>
                    <img class="card-img-top" src="https://i.scdn.co/image/ab671c3d0000f430ed50366d5d8ba3e7d12fca43" alt='Tollywood Pearl' style={{ width: "250px", padding: "10px 40px 10px 40px" }} />
                    <div className='item' style={{ width: "15rem", paddingTop: "1rem", textAlign: "center" }}>
                        <h5 style={{ paddingTop: "2rem" }}>Tollywood Pearl
                        </h5>
                        <p style={{ paddingTop: "1rem" }}>The finest music from Telugu films.</p>
                    </div>
                </div>

                <div class="card" style={{ background: "black", color: "white" }}>
                    <img class="card-img-top" src="https://i.scdn.co/image/ab671c3d0000f430330523a1b60c1d5e0b31935f" alt=' Hits India' style={{ width: "250px", padding: "10px 40px 10px 40px" }} />
                    <div className='item' style={{ width: "15rem", paddingTop: "1rem", textAlign: "center" }}>
                        <h5 style={{ paddingTop: "2rem" }}>Hot Hits India
                        </h5>
                        <p style={{ paddingTop: "1rem" }}>50 hottest hits from across the globe.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Culture