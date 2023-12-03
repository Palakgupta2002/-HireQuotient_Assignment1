import React from 'react';
import './homepage.css';
import Collapse from './Collapse';
import Marquee from "react-fast-marquee";
import 'animate.css';
const Homepage = () => {

    return (

        <div className="homepage">
            <div className="section section1">
                <div className="animate__animated animate__fadeInUp">
                    <span className='heading'>👋 WELCOME TO MANAGE WISE!</span>
                    <div className="headingText">
                        <span>Empower your business with</span>
                        <div className='downText'><span className='orangeText'>Strategic</span> insights</div>
                    </div>
                    <div className="paraText">
                        Powerful management platform designed to streamline your business <br /> operations, boost productivity, and drive success
                    </div>
                    <div className="buttons">
                        <div className='getStartedShadowButton'>
                            <span>Get Started</span>
                        </div>
                        <div>
                            <span>Watch Demo</span>
                        </div>
                    </div>
                </div>
                <div className="dashboardImage animate__animated animate__fadeIn">
                    <img
                        src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048"
                        alt="dashboarImage"
                    />
                </div>
            </div>
            <div className=" section section2" id='features'>
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
                    <div className="card animate__animated animate__flipInX">
                        <img src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512" alt="" />
                        <div className="description">
                            <span>Flexible Scheduling</span>
                            <span>Stay productive with our flexible scheduling system</span>
                        </div>
                    </div>
                    <div className="card animate__animated animate__flipInX animate__delay-1s">
                        <img src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512" alt="" />
                        <div className="description">
                            <span>Easy Communication</span>
                            <span>Collaborate seamlessly with your team in real-time</span>
                        </div>
                    </div>
                    <div className="card animate__animated animate__flipInX animate__delay-2s">
                        <img src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512" alt="" />
                        <div className="description">
                            <span>Analytics</span>
                            <span>Gain valuable insights with our advanced analytics feature</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section3">
                <div className='iconDiv image1'>
                    <img src="https://www.svgrepo.com/show/452213/gmail.svg" alt="" />
                </div>
                <div className='iconDiv image2'>
                    <img src="https://www.svgrepo.com/show/448248/slack.svg" alt="" />
                </div>
                <div className='iconDiv image3'>
                    <img src="https://www.svgrepo.com/show/475645/dropbox-color.svg" alt="" />
                </div>
                <div className='iconDiv image4'>
                    <img src="https://www.svgrepo.com/show/452202/figma.svg" alt="" />
                </div>
                <div className='iconDiv image5'>
                    <img src="https://www.svgrepo.com/show/343538/zoom-communication-network-conversation-connection-internet.svg" alt="" />
                </div>
                <div className='iconDiv image6'>
                    <img src="https://www.svgrepo.com/show/475694/vimeo-color.svg" alt="" />
                </div>
                <span className='heading'>🤩 AND MORE...</span>
                <div className="headingTextSectionThree">Explore an array of features that elevate your <span className='orangeText'>Productivity</span> to new heights</div>
                <div className="paraTextSectionThree">
                    Discover the tools that will revolutionize the way you manage and optimize your operations
                </div>
                <div className="cardContainer">
                    <div className="cardSectionThree animate__animated animate__fadeIn">
                        <span className='iconBox'></span>
                        <span className='cardTitle'>Cross-Platform Compatibility</span>
                        <span className='cardDescription'>Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</span>
                    </div>
                    <div className="cardSectionThree animate__animated animate__fadeIn animate__delay-1s">
                        <span className='iconBox'></span>
                        <span className='cardTitle'>Stay Informed with Essential Notifications</span>
                        <span className='cardDescription'>Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.</span>
                    </div>
                    <div className="cardSectionThree animate__animated animate__fadeIn animate__delay-2s">
                        <span className='iconBox'></span>
                        <span className='cardTitle'>Secure Data Encryption at all times</span>
                        <span className='cardDescription'>Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</span>
                    </div>
                </div>
                <div className="iconContainer">
                    <span className="headerOfIconContainer">🛠 INTEGRATIONS</span>
                    <br />
                    <span className='headingTextSectionFour'>Enable <span className='orangeText'>integration</span> with other popular tools and platforms</span>
                    <span className="paraTextSectionFour">Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.</span>
                    <div className="bottomImage">
                        <img src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024" alt="" />
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
            <div className="section section5" id='pricing'>
                <span className='headingPricing'>💲PRICING</span>
                <div className='headingTextSection5'>Select your ideal <span className='orangeText'>Pricing</span> plan</div>
                <span className='headingTextSection5Para'>At Manage Wise, we believe in providing you with <br />pricing plans that adapt to your unique needs.</span>
                <div className="pricingCardContainer">
                    <div className="pricingCardOne animate__animated animate__fadeIn">
                        <span className="cardButton">FREE</span>
                        <div className='dollarText'><span className='dollar'>$0</span> /month</div>
                        <div className="pricingDescription">
                            <span>Access to all basic features</span>
                            <span>Reporting and analytics</span>
                            <span>Up to 5 individual users</span>
                            <span>Chat and email support</span>
                        </div>
                        <span className="getStartedButton">Get started</span>
                    </div>
                    <div className="pricingCardTwo animate__animated animate__fadeIn animate__delay-1s">
                        <span className="cardButton">STANDARD</span>
                        <div className='dollarTextSecond'><span className='dollarTwo'>$25</span> /month</div>
                        <div className="pricingDescription">
                            <span>Access to all basic features</span>
                            <span>Reporting and analytics</span>
                            <span>Up to 5 individual users</span>
                            <span>Chat and email support</span>
                            <span>3+ integrations</span>
                            <span>Account performance reporting</span>
                        </div>
                        <span className="getStartedButtonSecond">Get started</span>
                    </div>
                    <div className="pricingCardOne animate__animated animate__fadeIn animate__delay-2s">
                        <span className="cardButton">BUSINESS</span>
                        <div><span className='dollar'>$42</span> /month</div>
                        <div className="pricingDescription">
                            <span>Access to all basic features</span>
                            <span>Reporting and analytics</span>
                            <span>Up to 5 individual users</span>
                            <span>Chat and email support</span>
                            <span>3+ integrations</span>
                        </div>
                        <span className="getStartedButton" style={{ marginTop: '45px' }}>Get started</span>
                    </div>
                </div>
            </div>
            <div className="section section6" id="testimonials">
                <span className='heading'>🧡 TESTIMONIALS</span>
                <div className='headingTextSection2'>Hear from our <span className='orangeText'>Satisfied</span> clients</div>
                <div className="paraTextSection">Discover why our clients love working with us. Read their <br /> testimonials and learn how we has helped businesses.</div>
                <div className="marqueeContainer">
                    <Marquee gradient={true}>
                        <div className="testimonialCardContainer">
                            <div className="testimonialCard">
                                <div className='review'><span>"The customer support <br /> team behind this product <br />is exceptional. They have been <br />incredibly responsive and helpful, addressing <br />any questions or concerns promptly.</span></div>
                                <div className="detailsContainer">
                                    <img width={'100px'} src="https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg" alt="" />
                                    <div className="nameWithDesignation">
                                        <span>Sarah</span>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonialCard">
                                <div className='review'><span>"The customer support <br /> team behind this product <br />is exceptional. They have been <br />incredibly responsive and helpful, addressing <br />any questions or concerns promptly.</span></div>
                                <div className="detailsContainer">
                                    <img width={'100px'} src="https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg" alt="" />
                                    <div className="nameWithDesignation">
                                        <span>Sarah</span>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonialCard">
                                <div className='review'><span>"The customer support <br /> team behind this product <br />is exceptional. They have been <br />incredibly responsive and helpful, addressing <br />any questions or concerns promptly.</span></div>
                                <div className="detailsContainer">
                                    <img width={'100px'} src="https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg" alt="" />
                                    <div className="nameWithDesignation">
                                        <span>Sarah</span>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonialCard">
                                <div className='review'><span>"The customer support <br /> team behind this product <br />is exceptional. They have been <br />incredibly responsive and helpful, addressing <br />any questions or concerns promptly.</span></div>
                                <div className="detailsContainer">
                                    <img width={'100px'} src="https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg" alt="" />
                                    <div className="nameWithDesignation">
                                        <span>Sarah</span>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonialCard">
                                <div className='review'><span>"The customer support <br /> team behind this product <br />is exceptional. They have been <br />incredibly responsive and helpful, addressing <br />any questions or concerns promptly.</span></div>
                                <div className="detailsContainer">
                                    <img width={'100px'} src="https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg" alt="" />
                                    <div className="nameWithDesignation">
                                        <span>Sarah</span>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonialCard">
                                <div className='review'><span>"The customer support <br /> team behind this product <br />is exceptional. They have been <br />incredibly responsive and helpful, addressing <br />any questions or concerns promptly.</span></div>
                                <div className="detailsContainer">
                                    <img width={'100px'} src="https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg" alt="" />
                                    <div className="nameWithDesignation">
                                        <span>Sarah</span>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonialCard">
                                <div className='review'><span>"The customer support <br /> team behind this product <br />is exceptional. They have been <br />incredibly responsive and helpful, addressing <br />any questions or concerns promptly.</span></div>
                                <div className="detailsContainer">
                                    <img width={'100px'} src="https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg" alt="" />
                                    <div className="nameWithDesignation">
                                        <span>Sarah</span>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonialCard">
                                <div className='review'><span>"The customer support <br /> team behind this product <br />is exceptional. They have been <br />incredibly responsive and helpful, addressing <br />any questions or concerns promptly.</span></div>
                                <div className="detailsContainer">
                                    <img width={'100px'} src="https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg" alt="" />
                                    <div className="nameWithDesignation">
                                        <span>Sarah</span>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Marquee>
                </div>
            </div>
            <div className="section7">
                <div className="sectionSeven">
                    <div className="sectionSevenContainerOne">
                        <span className='heading'>👋 DON'T MISS OUT</span>
                        <div className='headingTextSection7'>Unleash your <span className='orangeText'>Potential</span> with us</div>
                        <div className="paraTextSection7">Join our community of ambitious individuals and organizations eager to make a difference.</div>
                        <div className='getStartedShadowButton' style={{ width: 'fit-content', padding: '15px 60px', marginTop: '20px', borderRadius: '20px', fontSize: '18px', fontWeight: '700' }}>
                            <span>Try out now</span>
                        </div>
                    </div>
                    <div className="sectionSevenContainerTwo">
                        <div className="userBtn"><span style={{ color: '#8247FF' }}>200+ </span>Happy users</div>
                        <div className="imageFirst">
                            <img src="https://framerusercontent.com/images/584hzJDnWCS5SFABKjaCzgDspY.png?scale-down-to=512" alt="" />
                            {/* <img src="" alt="" /> */}
                        </div>
                    </div>

                </div>
                <div className="footerContainer">
                    <div className="logo">
                        <img src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt="" />
                    </div>
                    <div className="sections">
                        <a href="#features">
                            <span>Features</span>
                        </a>
                        <a href="#faq">
                            <span>FAQ</span>
                        </a>
                        <a href="#pricing">
                            <span>Pricing</span>
                        </a>
                        <a href="#testimonials">
                            <span>Testimonials</span>
                        </a>
                    </div>
                </div>
                <hr />
                <div className="copyrightContainer">
                    <span>© 2022 ManageWise, Inc.</span>
                    <span className='socialMedia'>
                        <img src="https://www.svgrepo.com/show/512399/instagram-167.svg" alt="" />
                        <img src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="" />
                        <img src="https://www.svgrepo.com/show/512419/linkedin-161.svg" alt="" />

                    </span>
                </div>
            </div>

        </div>

    );
};

export default Homepage;
