import React from "react";
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate('/Donate');
    }
    return (
        <div>
            <div className="container text-align-center">
                <div className="row justify-content-evenly">
                    <div className="col-4">
                        <div className="alert alert-light" role="alert">
                            <text style={{ fontSize: 25 }}>Donate</text> food, clothing, shelter, $$$, other
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="alert alert-light" role="alert">
                            <text style={{ fontSize: 25 }}>Submit a Mitzva</text> Learning, Tehillim, Shabbos
                        </div>
                    </div>
                </div>
            </div>


            <div className="container text-center">
                <div className="row row-cols-2">
                    <div className="col">
                        <img src="https://i.etsystatic.com/9696864/r/il/68d85f/1330226234/il_794xN.1330226234_iz42.jpg" style={{ height: '400px' }}></img>
                    </div>
                    <div className="col">
                        <div className="card"style={{width: '600px', height: '400px', backgroundColor:'#c6c3a5'}}>
                            <button type="button" className="alert alert-secondary" onClick={onButtonClick} style={{ backgroundColor: '#c6c3a5' }}><br /><br/><br /><br /><br /><br /><br /><h1>Click here to Donate</h1><br /><br /><br /><br /><br /><br/></button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br/><br/>
            <div className="container text-center">
                <div className="row row-cols-2">
                    <div className="col">
                        <div className="card"style={{width: '600px', height: '400px', backgroundColor:'#c6c3a5'}}>
                        <button type="button" className="alert alert-secondary" onClick={()=>navigate('/SubmitMitzvah')} style={{ backgroundColor: '#c6c3a5' }}><br /><br/><br /><br /><br /><br /><br /><h1>Click here to Submit a Mitzva</h1><br/><br/><br /><br /><br /><br /></button>
                    </div>
                    </div>
                    <div className="col">
                        <img src="https://360000hours.org/images/read-more.png" style={{ height: '400px' }}></img>
                    </div>
                </div>
            </div>
            <div><br /><br />
            <h1>About AYC</h1>
            <br />
            <h5><b>Together AYC (Am Yisrael Chai)</b> is a heartfelt initiative dedicated to offering support and solidarity to the resilient Israeli soldiers and citizens affected by the Simchat Torah Massacre. In the face of tragedy, we believe in the power of collective compassion and the strength that arises when communities unite.
                <br />
                Our mission is twofold: to provide both physical and spiritual support to those who have endured the unimaginable. Through your generosity, we aim to alleviate the immediate challenges faced by the affected individuals and families, offering a helping hand in rebuilding their lives. Whether it's medical assistance, essential supplies, or other pressing needs, we strive to make a tangible difference.
                <br />
                Beyond the tangible, we recognize the importance of spiritual support during times of crisis. Our community is committed to fostering a sense of hope, resilience, and togetherness. We encourage individuals from all walks of life to join hands in promoting healing, understanding, and solidarity.
                <br />
                As we navigate the aftermath of the Simchat Torah Massacre, let us stand united in our commitment to making a positive impact. Together, we can sow the seeds of compassion, resilience, and hope for a brighter future.
                <br /><br />
                Thank you for being a part of this journey.
                <br /><br />
                Together AYC</h5>
        </div>
        </div>
    )

}
export default Home;