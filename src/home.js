import './App.css'
import image from './IMG/LOGO.png';
import image1 from './IMG/a1.png';
import image2 from './IMG/a2.png';
import image3 from './IMG/a3.png';
import image4 from './IMG/a4.png';
import image5 from './IMG/b1.png';
import image6 from './IMG/b2.png';
import image7 from './IMG/b3.png';
import image8 from './IMG/b4.png';
import image9 from './IMG/b5.png';
import image0 from './IMG/b6.png';


function Home(){
    return(
        <div>
            <div className='container'>
            <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={image}></img> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Contact Us</a>
        </li>
        <li style={{marginLeft:"360px"}} class="nav-item">
          <a class="nav-link ">Log in</a>
        </li>
        </ul>
        <button className='btnre'>Register</button>

    </div>
  </div>
</nav>
                <h1 style={{marginTop:"70px",fontSize:"50px"}}>We're changing the</h1>
                <h1 style={{fontSize:"50px"}}> whole game</h1>
                <button className='btnget'>Get started</button>
                <button style={{marginTop:"30px"}} className='btnre'>View Pricing</button>
                <img style={{marginTop:"40px"}}  src={image1}></img> 
                <div className='row'>
                    <div style={{marginTop:"100px"}} className='col-md-6'>
                        <h4 style={{textAlign:"left"}}>OUR STORY</h4>
                        <h2 style={{textAlign:"left"}}>We're building the economic <br></br>infrastructure for the internet.<br></br>Businesses of every size,</h2>
                        <div style={{marginTop:"70px"}} className='row'>
                            <div className='col-md-4'>
                                <img src={image2}></img>
                            </div>
                            <div className='col-md-8'>
                                <p style={{textAlign:"left"}}>A living place for curiosity and collaboration,meeting and meaning.<br></br>The heart of a creative community.</p>
                            </div>
                    </div>
                    </div>
                    <div style={{marginTop:"100px"}}  className='col-md-6'>
                        <h2 style={{marginLeft:"70px"}}>01. 6 Years of intense reasearch</h2>
                        <p style={{marginLeft:"140px",textAlign:"left"}}>our founders has a solutions.This is your Email marketing specialist,and campaign manager ,all rolled into one.</p>
                        <h2 style={{marginLeft:"20px"}}>02. Audience segmentation </h2>
                        <p style={{marginLeft:"140px",textAlign:"left"}}>improve audience engagement by segmenting. boost your conversions by targeting subsets from your contacts. Give them content they need.</p>
                        <h2 style={{marginRight:"30px"}}>03. Contact Monitoring</h2>
                        <p style={{marginLeft:"150px",textAlign:"left"}}>Just import your contact list ,segment your contacts and we'll get you a detailed real-time report of their activity.</p>
                        
                            
                      
                    </div>
                  
                    </div>
                    <div style={{textAlign:"left"}} className='row'>
                     <div style={{marginTop:"250px"}} className='col-md-7'>
                        <h1>Our Mission</h1>
                        <p style={{fontSize:"20px"}}>We,re building the economic infrastructure for the<br></br> internet.Businesses of every size, be it new startups<br></br> or public companies, use our software to accept<br></br> payments and manage their businesses online. </p>

                        
                        <div className='row'>
                          <div className='col-md-4'>
                            <h1 style={{marginLeft:"30px"}}>94%</h1>
                            <p>CLIENT RETENTION</p>
                          </div>
                          <div className='col-md-4'>
                            <h1 style={{marginLeft:"30px"}}>70M+</h1>
                            <p>EMAILS PER MONTH</p>
                          </div>
                          <div className='col-md-4'>
                            <h1 style={{marginLeft:"30px"}} >10K+</h1>
                            <p>MONTHLY CAMPAIGNS</p>
                          </div>
                          </div>
                          </div>
                          <div style={{marginTop:"100px"}} className='col-md-1'>
                            <img src={image3}></img>

                          </div>
                          </div>
                          <div className='row'>
                            <div style={{marginTop:"70px"}} className='col-md-7'>
                            <img src={image4}></img>
                          </div>
                          <div style={{textAlign:"left",marginTop:"250px"}} className='col-md-5'>
                            <h1>Our Vision</h1>
                            <p style={{fontSize:"20px"}}>We believe the world will look very different after this pandemic, as it did after the second world war and the financial crisis of 2008. As always does, after it has faced destruction.</p>
                            <p style={{fontSize:"20px"}}>We foresee a gigantic acceleration towards digitalization in all businesses.Businesses need to vet partners,hold money in escrow.</p>
                          </div>
                          </div>
                          <h1 style={{marginTop:"100px"}}>Our Leading, Strong <br></br> And Creative Team</h1>
                          <div style={{marginTop:"50px"}} className='row'>
                            <div className='col-md-4'>
                            <div class="card1" style={{width:"18rem"}}>
                           <img src={image5} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Pansy Parkinson</h5>
    <p class="card-text">UI/UX DESIGNER</p>
   
   
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-twitter"></i></a> 
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-instagram"></i></a>  
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-facebook"></i></a>  
    <a href="#"><i style={{marginRight:"10px",color:"black"}} className="fa fa-linkedin"></i></a> 

  </div>
</div>
                            </div>
                            <div className='col-md-4'>
                            <div class="card2" style={{width:"18rem"}}>
  <img src={image6} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Rubeus Hagrid</h5>
    <p class="card-text">DEVELOPMENT</p>

    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-twitter"></i></a> 
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-instagram"></i></a>  
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-facebook"></i></a>  
    <a href="#"><i style={{marginRight:"10px",color:"black"}} className="fa fa-linkedin"></i></a> 
  </div>
</div>
                            </div>
                            <div className='col-md-4'>
                            <div class="card3" style={{width:"18rem"}}>
  <img src={image7} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Hagaruka Leua</h5>
    <p class="card-text">DEVELOPMENT</p>
   
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-twitter"></i></a> 
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-instagram"></i></a>  
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-facebook"></i></a>  
    <a href="#"><i style={{marginRight:"10px",color:"black"}} className="fa fa-linkedin"></i></a> 
  </div>
</div>
                            </div>
                          </div>
                          <div style={{marginTop:"50px"}} className='row'>
                            <div className='col-md-4'>
                            <div class="card1" style={{width:"18rem"}}>
                           <img src={image8} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Nimakia Hasial</h5>
    <p class="card-text">UI/UX DESIGNER</p>
   
   
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-twitter"></i></a> 
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-instagram"></i></a>  
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-facebook"></i></a>  
    <a href="#"><i style={{marginRight:"10px",color:"black"}} className="fa fa-linkedin"></i></a> 

  </div>
</div>
                            </div>
                            <div className='col-md-4'>
                            <div class="card2" style={{width:"18rem"}}>
  <img src={image9} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Thishis Hangama</h5>
    <p class="card-text">DEVELOPMENT</p>

    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-twitter"></i></a> 
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-instagram"></i></a>  
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-facebook"></i></a>  
    <a href="#"><i style={{marginRight:"10px",color:"black"}} className="fa fa-linkedin"></i></a> 
  </div>
</div>
                            </div>
                            <div className='col-md-4'>
                            <div class="card3" style={{width:"18rem"}}>
  <img src={image0} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Garlikan Ambase</h5>
    <p class="card-text">DEVELOPMENT</p>
   
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-twitter"></i></a> 
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-instagram"></i></a>  
    <a href="#"><i style={{marginRight:"40px",color:"black"}} className="fa fa-facebook"></i></a>  
    <a href="#"><i style={{marginRight:"10px",color:"black"}} className="fa fa-linkedin"></i></a> 
  </div>
</div>
                            </div>
                          </div>
                          <button className='btnview'>View all </button>
                          <h1 style={{marginTop:"60px"}}>Register for our Free<br></br>7-Day Trial now! </h1>
                          <input type="checkbox" id="C" name="C" value="C"/>  
                 <label style={{paddingLeft:"7px"}}> No credit card required</label>  
                 <input style={{marginLeft:"40px",marginTop:"20px"}} type="checkbox" id="C" name="C" value="C"/>  
                 <label style={{paddingLeft:"7px"}}> Cancel anytime</label><br></br>
                 <input className='ipemail' type="text" placeholder="Enter your email address"/><button className="btnsub">Subscribe Now</button>
                 <div className="footer">
                  <div style={{marginTop:"60px"}} className="row">
                    <div  className="col-md-2">
                      <h4 style={{textAlign:"left"}}>PRODUCT</h4>
                      <div style={{textAlign:"left",marginTop:"30px"}}>
                        <p>insights</p>
                        <p>risk policing</p>
                        <p>PCI Compliance</p>
                        <p>integaration</p>
                        <p>Pricing</p>
                     </div>

                    </div>
                    <div  className="col-md-3">
                      <h4 style={{textAlign:"left"}}>FOR DEVELOPERS</h4>
                      <div style={{textAlign:"left",marginTop:"30px"}}>
                        <p>Docs</p>
                        <p>Knowledge base</p>
                        <p>System status</p>
                        <p>Tutorials </p>
                        <p>Blog</p>
                     </div>

                    </div>
                    <div  className="col-md-3">
                      <h4 style={{textAlign:"left"}}>FOR BRANDS</h4>
                      <div style={{textAlign:"left",marginTop:"30px"}}>
                        <p>Brands</p>
                        <p>Performance marketing</p>
                        <p>Publishers</p>
                        <p>styleguide</p>
                     
                     </div>

                    </div>
                    <div  className="col-md-2">
                      <h4 style={{textAlign:"left"}}>RESOURCES</h4>
                      <div style={{textAlign:"left",marginTop:"30px"}}>
                        <p>Case studies</p>
                        <p>Events</p>
                        <p>Blog</p>
                        <p>Portfolio</p>
                   
                     </div>

                    </div>
                    <div  className="col-md-2">
                      <h4 style={{textAlign:"left"}}>ABOUT</h4>
                      <div style={{textAlign:"left",marginTop:"30px"}}>
                        <p>About Us</p>
                        <p>Leadership</p>
                        <p>Press/News</p>
                        <p>Careers/Team</p>
                        <p>Contact us</p>
                     </div>

                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">

                    <div  className="col">
                      <div  className="row">
                        <div className="col">
                          Terms
                          </div>
                          <div className="col">
                          privacy
                          </div>
                          <div className="col">
                          Security
                          </div>
                          </div>
                    

                    </div>

                    <div className="col-md-4">
                    <p>@ 2020 Gro.Pro.All Rights Reserved </p>
                      </div>
                      <div className="col-md-4">
                      <a href="#"><i style={{marginRight:"20px",color:"black"}} className="fa fa-twitter"></i></a> 
    <a href="#"><i style={{marginRight:"20px",color:"black"}} className="fa fa-instagram"></i></a>  
    <a href="#"><i style={{marginRight:"20px",color:"black"}} className="fa fa-facebook"></i></a>  
    <a href="#"><i style={{marginleft:"20px",color:"black"}} className="fa fa-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
             
                        
                       
                      
                    
                      
                    
                
                
                
                    </div>
            </div>
  
        
    )
}

export default Home;