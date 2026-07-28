import profilepic from "./assets/profile.png";

function Card() {
  return (
    <div className="card">
      <img className="profile-pic" src={profilepic}  alt="Profile Picture" />
      <h2 className="card-title">Dulaksha</h2>
      <p className="card-description">
        I am a Software engineer, a photographer, and a social media content
        creator.
      </p>
    </div>
    
    
    
  );
}
export default Card;
