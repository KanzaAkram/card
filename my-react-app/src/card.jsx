import profilePic from './assets/kk.jpg';

function Card() {
    return(
        <div className = "card">
            <img className = "img-card" src={profilePic} alt = "Profile picture"></img>
            <h2 className = "card-title">Card Title</h2>
            <p className="card-para">I study in NED University and I am doing Software Engineering</p>
        </div>
    );
}

export default Card;