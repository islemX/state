import React from 'react'
import img from '../component/img.jpg'



 const Profile = props => {
  return (
    <div> 
        FULLNAME : { props.fullname} 
        BIO : {props.bio}
        PROFESSION : {props.profession}
     <div>   
<div className="myImage">
<img  src={img} alt='' style={{  borderRadius: "10%" ,   width: "60%"}}  />
</div>
{props.children}
</div> 
</div>
)};
export default Profile;

