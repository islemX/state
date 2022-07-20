import React from 'react'
import img from '../component/img.jpg'



 const Profile = props => {
  return (
    <div> 
     <div>   
<div className="myImage">
<img  src={img} alt='' style={{  borderRadius: "10%" ,   width: "60%"}}  />
</div>
{props.children}
</div> 
<div>
    <button onClick={()=>{ props.handleName(` 
            FULLNAME : ${ props.fullname} 
            BIO : ${props.bio}
            PROFESSION : ${props.profession}
      `)}}  style={{backgroundColor:"aqua", borderColor:"blue" , borderRadius:7,marginTop:10 , display:'flex'}}> 
   
     ABOUT ME</button> 
     </div>

    </div>
  )
}


export default Profile;
