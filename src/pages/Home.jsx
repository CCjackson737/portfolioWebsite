import headshot from './images/placeholder.jpeg';
import StateChangingComponent  from './assets/StateChangingComponent';
export default function Home() {
    return [
        <div className="home-container">
        <div className="headshot-container">
            <img className="headshot" src={headshot} alt="headshot"/>
        </div>
        <div className="container-content">
            <h1>Cameron Jackson</h1>
            <h2>Technical Skills</h2>
                <div className='clean-div'>
                    <StateChangingComponent />
                </div>
            <h2>Work Experience</h2>
                <div className='list-div'>
                    <h2>Target  Tech Consultant </h2>
                    <h3>Sep 2023 - Current</h3>
                    <ul>
                        <li><span>Assist shoppers with product inquiries, offering expert advice on electronics, and ensuring a positive shopping experience</span></li>
                        <li><span>Demonstrate in-depth knowledge of a wide range of electronics</span></li>
                        <li><span>Maintain stock and ensure shipments are appropriately put on the sales floor or in the backroom</span></li>
                    </ul>
                </div>
        </div>
        </div>
    ]
}