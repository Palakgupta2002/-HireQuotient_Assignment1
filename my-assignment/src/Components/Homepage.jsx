import React from 'react';
import './homepage.css';
import Collapse from './Collapse';

const Homepage = () => {

    return (
        <div className="homepage">
            <div className="section section1">
                <span className='heading'>👋 WELCOME TO MANAGE WISE!</span>
                <div className="headingText">
                    <span>Empower your business with</span>
                    <div className='downText'><span className='orangeText'>Strategic</span> insights</div>
                </div>
                <div className="paraText">
                    Powerful management platform designed to streamline your business <br /> operations, boost productivity, and drive success
                </div>
                <div className="buttons">
                    <div>
                        <span>Get Started</span>
                    </div>
                    <div>
                        <span>Watch Demo</span>
                    </div>
                </div>
                <div className="dashboardImage">
                    <img
                        src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048"
                        alt="dashboarImage"
                    />
                </div>
            </div>
            <div className=" section section2">
                <span className='heading'>🔥PREMIER FEATURES</span>
                <div className='headingTextSection2'>Discover our product's <span className='orangeText'>Capabilities</span></div>
                <div className="paraText">
                    Don't settle for mediocrity - embrace the future of management <br />with Manage Wise.
                </div>
                <div className="productInsight">
                    <div className="box">
                        <span className='star'>⭐️</span>
                        <span className='desText'>Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.</span>
                    </div>
                    <div className="box">
                        <img src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024" alt="" />
                        <div className="description">
                            <span>Smart Task Management</span>
                            <span>Say goodbye to chaos with our smart task management system</span>
                        </div>
                    </div>
                </div>
                <div className="productFunctionality">
                    <div className="card">
                        <img src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512" alt="" />
                        <div className="description">
                            <span>Flexible Scheduling</span>
                            <span>Stay productive with our flexible scheduling system</span>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512" alt="" />
                        <div className="description">
                            <span>Easy Communication</span>
                            <span>Collaborate seamlessly with your team in real-time</span>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512" alt="" />
                        <div className="description">
                            <span>Analytics</span>
                            <span>Gain valuable insights with our advanced analytics feature</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section3">
                <span className='heading'>🤩 AND MORE...</span>
                <div className="headingTextSectionThree">Explore an array of features that elevate your <span className='orangeText'>Productivity</span> to new heights</div>
                <div className="paraTextSectionThree">
                    Discover the tools that will revolutionize the way you manage and optimize your operations
                </div>
                <div className="cardContainer">
                    <div className="cardSectionThree">
                        <span className='iconBox'></span>
                        <span className='cardTitle'>Cross-Platform Compatibility</span>
                        <span className='cardDescription'>Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</span>
                    </div>
                    <div className="cardSectionThree">
                        <span className='iconBox'></span>
                        <span className='cardTitle'>Stay Informed with Essential Notifications</span>
                        <span className='cardDescription'>Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.</span>
                    </div>
                    <div className="cardSectionThree">
                        <span className='iconBox'></span>
                        <span className='cardTitle'>Secure Data Encryption at all times</span>
                        <span className='cardDescription'>Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</span>
                    </div>
                </div>

            </div>
            <div className="section section4" id='faq'>
                <div className='faqDetails'>
                    <span className='heading'>🙋‍♀️ FAQ</span>
                    <div className='headingTextSection4'>Need <span className='orangeText'>Answers? </span></div>
                    <div className="paraDetails">
                        Check out our most commonly asked questions below to find the information you need.
                    </div>
                </div>
                <div className='faqContainer'>
                    <Collapse title={"What is Manage Wise and what does it offer?"} children={"Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more."} />
                    <Collapse title={"Is Manage Wise suitable for small businesses and larger enterprises alike?"} children={"Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes."} />
                    <Collapse title={"Can I access Manage Wise from different devices and platforms?"} children={"Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices."} />
                    <Collapse title={"What kind of support options do you offer to users?"} children={"We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise."} />
                    <Collapse title={"How secure is the data stored within Manage Wise?"} children={"Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected."} />
                </div>
            </div>
            <div className='fixedButton'>
                <img src="https://www.svgrepo.com/show/306070/framer.svg" alt="" />
                <span>Made in Framer</span>
            </div>
        </div>
    );
};

export default Homepage;
