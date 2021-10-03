import {Button, Card } from "react-bootstrap";
import propTypes from "prop-types";

const ProfileCard= ({fullName, Bio, Profession, showAlert, children}) => {
     showAlert = () => {
        alert('Hello' +' '+ fullName);
      }
    return (
        <div style={{position:'center', marginLeft:"40%", marginTop:50}}>
         <Card style={{ width: '13rem', border:"solid",borderColor:"darkBlue", borderRadius:10, position:"center", backgroundColor:'#3BB0BA', padding:10}}>
            <Card.Img style={{borderRadius:500}} variant="top" src={children} />
             <Card.Body>
                 <Card.Title style={{fontWeight:500, color:'white',fontSize:"2rem"}}>{fullName}</Card.Title>
                 <Card.Text style={{fontWeight:500, color:'white',fontSize:"1.1rem"}}> {Profession} </Card.Text >
                <p style={{color:'white',fontSize:"1rem"}}>{Bio}</p>
                <Button variant="primary" onClick={showAlert}>Click Me</Button>
             </Card.Body>
         </Card>
        </div>

    )
}

ProfileCard.defaultProps={
    FullName:"Wael",
    Profession:"WebDev",
    Bio: "No data Available"
}
ProfileCard.propTypes={
    FullName: propTypes.string,
    Profession: propTypes.string,
    Bio: propTypes.string,
}
export default ProfileCard;