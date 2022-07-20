
import React from 'react';
import "./premium.css";

function Premium() {
    return (
        <div className='subMain'>
            <h1 style={{ padding: "5%", fontWeight: "900" }}>The Power of Premium</h1>
            <ul>
                <li className='la'>
                    <div className='image'>
                        {/* image */}
                        <img className='img1' src="https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137" alt="Ad-free" />
                    </div>
                    <div className='description'>
                        {/* text */}
                        <h5 style={{ fontWeight: "900" }}>Ad-free music listening</h5>
                        <p style={{ fontWeight: "500", fontSize: "1.2rem" }}>Enjoy uninterrupted music.</p>
                    </div>
                </li>
                <li className='la'>
                    <div className='image'>
                        <img className='img1' src="https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f" alt="Offline" />
                    </div>
                    <div className='description'>
                        {/* text */}
                        <h5 style={{ fontWeight: "900" }}>Offline playback</h5>
                        <p style={{ fontWeight: "500", fontSize: "1.2rem" }}>Save your data by listening offline.</p>
                    </div>
                </li>
                <li className='la'>
                    <div className='image'>
                        <img className='img1' src="https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67" alt="everywhere" />
                    </div>
                    <div className='description'>
                        {/* text */}
                        <h5 style={{ fontWeight: "900" }}>Play everywhere</h5>
                        <p style={{ fontWeight: "500", fontSize: "1.2rem" }}>Listen on your speakers, TV, and other favorite devices.</p>
                    </div>
                </li>
                <li className='la'>
                    <div className='image'>
                        <img className='img1' src="https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012" alt="pay your way" />
                    </div>
                    <div className='description'>
                        {/* text */}
                        <h5 style={{ fontWeight: "900" }}>Pay your way</h5>
                        <p style={{ fontWeight: "500", fontSize: "1.2rem" }}> Prepay with Paytm, UPI, and more.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Premium
