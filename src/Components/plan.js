import React from 'react';
import './plan.css'

function Plan() {
  return (
    <>
                <div id="plans" style={plan}>
                    <div id="upi">
                        <h1>Pick your Premium</h1>
                        <p>Listen without limits on your phone, speaker, and other devices.</p>
                        <ul id="pay">
                            <li style={{ display: "inline" }}><img src="https://content-tooling.spotifycdn.com/images/b33cabea-d074-4f4f-8714-da6bdb2f067f_upi.svg" alt="" /></li>
                            <li style={{ display: "inline" }}><img src="https://content-tooling.spotifycdn.com/images/ea750340-f556-4682-b84c-326269cdd4bc_paytm.svg" alt="" /></li>
                            <li style={{ display: "inline" }}><img src="https://content-tooling.spotifycdn.com/images/e549bf16-2051-43ac-b4d6-c5b8d7bf100d_visa.svg" alt="" /></li>
                            <li style={{ display: "inline" }}><img src="https://content-tooling.spotifycdn.com/images/6d693019-628b-45b8-96ca-e3c294aed6aa_mastercard.svg" alt="" /></li>
                            <li style={{ display: "inline" }}><img src="https://content-tooling.spotifycdn.com/images/468706f2-62af-48e4-80cb-9616b011f6c6_amex.svg" alt="" /></li>
                        </ul>
                    </div>
                    <div id="contain">
                        <div className='cards'>
                            <div className='cardContent'>
                                <div>
                                    <h6 className='one'>One-time plans available</h6>
                                    <h3>Mini</h3>
                                    <p>From ₹7/day</p>
                                    <p>1 account on mobile only</p>
                                </div>
                                <hr style={{ marginTop: "20%" }} />
                                <div>
                                    <ul className='desx'>
                                        <li>Add-free music listening on mobile</li>
                                        <li>Group Session</li>
                                        <li>Download 30 Songs on 1 mobile device</li>
                                    </ul>
                                </div>
                                <div style={{ marginTop: "23%" }}>
                                    <button className='rounded-pill'>VIEW PLANS</button>
                                    <a href="=" style={{ fontSize: "10px", lineHeight: ".1rem" }}><p>Terms and conditions apply</p></a>
                                </div>


                            </div>
                        </div>

                        <div className='cards'>
                            <div className='cardContent'>
                                <div>
                                    <h6 className='oneMonth'> 1 month free</h6>
                                    <h6 className='one'>One-time plans available</h6>
                                    <h3>Indvidual</h3>
                                    <p>₹119/month after offer period</p>
                                    <p>1 account</p>
                                </div>
                                <hr />
                                <div>
                                    <ul className='desx'>
                                        <li>Add-free music listening on mobile</li>
                                        <li>Group Session</li>
                                        <li>Download 10k songs/device on 5 devices</li>
                                    </ul>
                                </div>
                                <div style={{ marginTop: "22%" }}>
                                    <button className='rounded-pill'>VIEW PLANS</button>
                                    <a href="=" style={{ fontSize: "10px", lineHeight: ".1rem" }}>Terms and conditions apply</a> <span style={{ fontSize: "10px", lineHeight: ".1rem" }} >1 month free not available for users who have already tried Premium.</span>
                                </div>
                            </div>
                        </div>

                        <div className='cards'>
                            <div className='cardContent'>
                                <div>
                                    <h6 className='oneMonth'> 1 month free</h6>
                                    <h6 className='one'>One-time plans available</h6>
                                    <h3>Duo</h3>
                                    <p>₹149/month after offer period</p>
                                    <p>2 accounts</p>
                                </div>
                                <hr />
                                <div>
                                    <ul className='desx'>
                                        <li>For couple who live together</li>
                                        <li>Add-free music listening </li>
                                        <li>Group Session</li>
                                        <li>Download 10k songs, on 5 devices</li>
                                    </ul>
                                </div>
                                <div style={{ marginTop: "17%" }}>
                                    <button className='rounded-pill'>VIEW PLANS</button>
                                    <a href="=" style={{ fontSize: "10px", lineHeight: ".1rem" }}>Terms and conditions apply</a> <span style={{ fontSize: "10px", lineHeight: ".1rem" }}>1 month free not available for users who have already tried Premium.</span>
                                </div>
                            </div>
                        </div>

                        <div className='cards'>
                            <div className='cardContent'>
                                <div>
                                    <h6 className='oneMonth'> 1 month free</h6>
                                    <h6 className='one'>One-time plans available</h6>
                                    <h3>Family</h3>
                                    <p>₹179/month after offer period</p>
                                    <p>Up to 6 accounts</p>
                                </div>
                                <hr />
                                <div>
                                    <ul className='desx'><li>For family who live together</li>
                                        <li>Block explicit music</li>
                                        <li>Add-free music listening </li>
                                        <li>Group Session</li>
                                        <li>Download 10k songs/device on 5 devices</li>
                                    </ul>
                                </div>
                                <div style={{ marginTop: "7%" }}>
                                    <button className='rounded-pill'>VIEW PLANS</button>
                                    <a href="=" style={{ fontSize: "10px", lineHeight: ".1rem" }}>Terms and conditions apply</a> <span style={{ fontSize: "10px", lineHeight: ".1rem" }}>1 month free not available for users who have already tried Premium.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='subscribe'>
                    <p style={{ margin: "14px 5px", }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='rounded-pill' style={{ background: "white", border: "2px solid", padding: "8px 1.8rem", fontSize: "1.2rem", fontWeight: "700", marginLeft: "2.5rem" }}>Learn More</button>
                </div>
            </>
  )
}
const plan = {
  width: "100%",
  textAlign: "center",
  margin: "auto",
  listStyle: "none",
  textDecoration: "none",
  padding: "10vh"
}
export default Plan;