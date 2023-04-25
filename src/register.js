import './App.css';
import Image from './IMG/c1.png';
function Register() {
    return(
        <div>

        <h1>Register</h1>
        <div  className='row'>
            <div className='col-md-4'>
                <img className='IMAGE' src={Image}></img>
            </div>
            <div style={{marginLeft:"100px"}} className='col-md-6'>
                <h1  className='well' style={{marginTop:"200px"}}>Welcome!</h1>
                <p className='well'>Register to your page.</p>
                <input type='text' className='ipemail' placeholder='Name'/>
                <input type='text' className='ipemail' placeholder='Email'/>
                <input type='text' className='ipemail' placeholder='Password'/>
             
                <button className='btnlog '>Register</button>
                <p style={{marginLeft:"250px"}}>Don,t have an account?<strong style={{color:" rgb(26, 26, 234)"}}> create now</strong></p>
            </div>
        </div>
        </div>

    )
}
export default Register;