import './App.css';
import image from './IMG/c2.png';


function Reset(){
    return(
        <div className='container'>
            <img src={image} ></img>
            <h1>Reset Password</h1>
            <p>Enter an email address you use to sign in to.</p><br></br>
            <input type='text' className='ipEMAIL' placeholder='Email address'/><br></br>
            <button className='btnreset '>Reset Password</button>




        </div>

    )
}
export default Reset;