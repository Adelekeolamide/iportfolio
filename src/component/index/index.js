import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Olamide from '../img/olamideprof.jpg';
import '../index/index.css';
import ScriptTag from 'react-script-tag';
const Landing = () => {
    return (  
        <div>
            <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
            <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src={Olamide} alt="" class="img-fluid rounded-circle"/>
        <h1 class="text-light"><a href="index.html"> Olamide Adeleke</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav class="nav-menu">
        <ul>
          <li class="active"><a href="index.html"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio"><i class="bx bx-book-content"></i> Portfolio</a></li>
          <li><a href="#services"><i class="bx bx-server"></i> Services</a></li>
          <li><a href="#contact"><i class="bx bx-envelope"></i> Contact</a></li>

        </ul>
      </nav>
      <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

    </div>
  </header>

  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <h1>Olamide Adeleke</h1>
      <p>I'm a <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span>
     
       
        <div class="animated-info">
              <span class="animated-item">Designer</span>
              <span class="animated-item">Developer</span>
              <span class="animated-item">Freelancer</span>
              
       </div>
       </p>
    </div>
  </section>


  <main id="main">


<section id="about" class="about">
  <div class="container">

    <div class="section-title">
      <h2>About</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>

    <div class="row">
      <div class="col-lg-4" data-aos="fade-right">
        <img src={Olamide} class="img-fluid" alt=""/>
      </div>
      <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>UI/UX Designer &amp; Web Developer.</h3>
        <p class="font-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> 1 Sept 2001</li>
              <li><i class="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
              <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
              <li><i class="icofont-rounded-right"></i> <strong>City:</strong> City : New York, USA</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <li><i class="icofont-rounded-right"></i> <strong>Age:</strong> 19</li>
              <li><i class="icofont-rounded-right"></i> <strong>Degree:</strong> Master</li>
              <li><i class="icofont-rounded-right"></i> <strong>PhEmailone:</strong> email@example.com</li>
              <li><i class="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
            </ul>
          </div>
        </div>
        <p>
          Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
          Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
        </p>
      </div>
    </div>

  </div>
</section>

<section id="portfolio" class="portfolio section-bg">
<div class="container my-5">
<section>
  <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body p-0">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          
          
          <div class="row">
          
          
            <div class="col-md-6 py-5 pl-5">
              
              <h5 class="font-weight-normal mb-3">Paper cup mockup</h5>

              <p class="text-muted">Key letters, explain which writing we he carpeting or fame, the itch expand medical amped through constructing time. And scarfs, gain, get showed accounts decades.</p>

              <ul class="list-unstyled font-small mt-5">
                <li>
                  <p class="text-uppercase mb-2"><strong>Client</strong></p>
                  <p class="text-muted mb-4">Envato Inc.</p>
                </li>

                <li>
                  <p class="text-uppercase mb-2"><strong>Date</strong></p>
                  <p class="text-muted mb-4">June 27, 2019</p>
                </li>

                <li>
                  <p class="text-uppercase mb-2"><strong>Skills</strong></p>
                  <p class="text-muted mb-4">Design, HTML, CSS, Javascript</p>
                </li>

                <li>
                  <p class="text-uppercase mb-2"><strong>Address</strong></p>
                  <a href="https://mdbootstrap.com/docs/jquery/design-blocks/">MDBootstrap</a>
                </li>
              </ul>
              
            </div>
          
            <div class="col-md-6">
              
              <div class="view rounded-right">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/5.jpg" alt="Sample image"/>
              </div>
              
            </div>
            
          
          </div>
          
        </div>
      </div>
    </div>
  </div>

 
  <h3 class="font-weight-bold text-center dark-grey-text pb-2">Product Designs</h3>
  <hr class="w-header my-4"/>
  
  <div class="row">

    
    <div class="col-md-12 dark-grey-text d-flex justify-content-center mb-5">

      <button type="button" class="btn btn-flat btn-lg m-0 px-3 py-1 filter" data-rel="all">All</button>
      <p class="font-weight-bold mb-0 px-1 py-1">/</p>
      <button type="button" class="btn btn-flat btn-lg m-0 px-3 py-1 filter" data-rel="1">Design</button>
      <p class="font-weight-bold mb-0 px-1 py-1">/</p>
      <button type="button" class="btn btn-flat btn-lg m-0 px-3 py-1 filter" data-rel="2">Mockup</button>

    </div>
   

  </div>
  
  <div class="gallery mb-5" id="gallery">

    
    <div class="mb-3 pics all 2 animation">
      <a data-toggle="modal" data-target="#basicExampleModal">
        <img class="img-fluid z-depth-1 rounded" src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" alt="Card image cap"/>
      </a>
    </div>
    
    <div class="mb-3 pics animation all 1">
      <a data-toggle="modal" data-target="#basicExampleModal">
        <img class="img-fluid z-depth-1 rounded" src="https://mdbootstrap.com/img/Photos/Vertical/7.jpg" alt="Card image cap"/>
      </a>
    </div>
   
    <div class="mb-3 pics animation all 1">
      <a data-toggle="modal" data-target="#basicExampleModal">
        <img class="img-fluid z-depth-1 rounded" src="https://mdbootstrap.com/img/Photos/Vertical/4.jpg" alt="Card image cap"/>
      </a>
    </div>
    
    <div class="mb-3 pics all 2 animation">
      <a data-toggle="modal" data-target="#basicExampleModal">
        <img class="img-fluid z-depth-1 rounded" src="https://mdbootstrap.com/img/Photos/Others/images/63.jpg" alt="Card image cap"/>
      </a>
    </div>
   
    <div class="mb-3 pics all 2 animation">
      <a data-toggle="modal" data-target="#basicExampleModal">
        <img class="img-fluid z-depth-1 rounded" src="https://mdbootstrap.com/img/Photos/Others/images/64.jpg" alt="Card image cap"/>
      </a>
    </div>
   

    
    <div class="mb-3 pics animation all 1">
      <a data-toggle="modal" data-target="#basicExampleModal">
        <img class="img-fluid z-depth-1 rounded" src="https://mdbootstrap.com/img/Photos/Vertical/5.jpg" alt="Card image cap"/>
      </a>
    </div>
  </div>
  

</section>
</div>
</section>



<section id="services" class="services">
<div class="container z-depth-1  p-5">


 

    <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">Services</h6>
    <h3 class="font-weight-bold text-center dark-grey-text pb-2">Our Services</h3>
    <hr class="w-header my-4"/>
    <p class="lead text-center text-muted pt-2 mb-5">Join thousands of satisfied customers using our template
      globally.</p>

    <div class="row d-flex justify-content-center">

      <div class="col-md-6 col-xl-4">
        <h5 class="font-weight-normal"><a class="dark-grey-text" href="#">Website Design</a></h5>
        <p class="small grey-text">Responsive, Minimalism</p>
      </div>

      <div class="col-md-6">
        <p class="text-muted mb-5 pb-2">So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on
          cousin ye dinner should in. Sex stood tried walls manor truth shy and three his. Their to years so child
          truth. Honoured peculiar families sensible up likewise by on in.</p>
      </div>


      <div class="col-md-6 col-xl-4">
        <h5 class="font-weight-normal"><a class="dark-grey-text" href="#">Web Development</a></h5>
        <p class="small grey-text">PHP, MySQL, Laravel</p>
      </div>

      <div class="col-md-6">
        <p class="text-muted mb-5 pb-2">So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on
          cousin ye dinner should in. Sex stood tried walls manor truth shy and three his. Their to years so child
          truth. Honoured peculiar families sensible up likewise by on in.</p>
      </div>


      <div class="col-md-6 col-xl-4">
        <h5 class="font-weight-normal"><a class="dark-grey-text" href="#">Mobile App</a></h5>
        <p class="small grey-text">Andriod, iOS</p>
      </div>

      <div class="col-md-6">
        <p class="text-muted mb-5 pb-2">So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on
          cousin ye dinner should in. Sex stood tried walls manor truth shy and three his. Their to years so child
          truth. Honoured peculiar families sensible up likewise by on in.</p>
      </div>

    </div>
</div>
</section>


<div class="container z-depth-1 ">

  <section class="text-center py-5">

    <p class="mb-4 pb-2 lead font-weight-bold">Trusted by 1 000 000 + developers &amp; designers</p>

    
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="1800">
      <div class="carousel-inner">
        
        <div class="carousel-item active">
          
          <div class="row">

            
            <div class="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://mdbootstrap.com/img/Photos/Template/5.png" class="img-fluid px-4" alt="Logo"/>
            </div>
            
            <div class="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://mdbootstrap.com/img/Photos/Template/7.png" class="img-fluid px-4" alt="Logo"/>
            </div>
            
            <div class="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://mdbootstrap.com/img/Photos/Template/6.png" class="img-fluid px-4" alt="Logo"/>
            </div>
            
            <div class="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://mdbootstrap.com/img/Photos/Template/9.png" class="img-fluid px-4" alt="Logo"/>
            </div>
            

          </div>
         
        </div>
       

        
        <div class="carousel-item">
          
          <div class="row">

            
            <div class="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://mdbootstrap.com/img/Photos/Template/11.png" class="img-fluid px-4" alt="Logo"/>
            </div>
           
            <div class="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://mdbootstrap.com/img/Photos/Template/10.png" class="img-fluid px-4" alt="Logo"/>
            </div>
           
            <div class="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://mdbootstrap.com/img/Photos/Template/12.png" class="img-fluid px-4" alt="Logo"/>
            </div>
            
            <div class="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://mdbootstrap.com/img/Photos/Template/13.png" class="img-fluid px-4" alt="Logo"/>
            </div>
            

          </div>
          
        </div>
        
        <div class="carousel-item">
         
          <div class="row">

            
            <div class="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://mdbootstrap.com/img/Photos/Template/1a.png" class="img-fluid px-4" alt="Logo"/>
            </div>
            
            <div class="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://mdbootstrap.com/img/Photos/Template/2a.png" class="img-fluid px-4" alt="Logo"/>
            </div>
            
            <div class="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://mdbootstrap.com/img/Photos/Template/3a.png" class="img-fluid px-4" alt="Logo"/>
            </div>
           
            <div class="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://mdbootstrap.com/img/Photos/Template/4a.png" class="img-fluid px-4" alt="Logo"/>
            </div>
            

          </div>
          
        </div>
        
      </div>

    </div>
    
    
  </section>

</div>

<section id="contact" class="contact">
<div class="container z-depth-1  px-0">

  
  <section class="contactme ">



    <div class="rgba-black-strong rounded p-5">

     
      <h3 class="text-center font-weight-bold text-white mt-3 mb-5">Contact Us</h3>

      <form class="mx-md-5" action="">

        <div class="row">
          <div class="col-md-6 mb-4">

            <div class="card">
              <div class="card-body px-4">

                
                <div class="md-form md-outline mt-0">
                  <input type="text" id="name" class="form-control"/>
                  <label for="name">Your Name</label>
                </div>
               
                <div class="md-form md-outline">
                  <input type="text" id="email" class="form-control"/>
                  <label for="email">Your Email Address</label>
                </div>
                
                <div class="md-form md-outline">
                  <textarea id="message" class="md-textarea form-control" rows="3"></textarea>
                  <label for="message">Your Message</label>
                </div>

                <button type="submit" class="btn btn-primary btn-md btn-block ml-0 mb-0">Submit inquiry</button>

              </div>
            </div>

          </div>
          <div class="col-md-5 offset-md-1 mt-md-4 mb-4 white-text">

            <h5 class="font-weight-bold">Address</h5>
            <p class="mb-0">1632 Main Street</p>
            <p class="mb-0">New York, 94126</p>
            <p class="mb-4 pb-2">United States</p>

            <h5 class="font-weight-bold">Phone</h5>
            <p class="mb-4 pb-2">+ 01 234 567 89</p>

            <h5 class="font-weight-bold">Email</h5>
            <p>info@gmail.com</p>

          </div>
        </div>

      </form>

    </div>

  </section>
 


</div>
</section>



<footer class="page-footer font-small grey lighten-3 py-4 dark-grey-text">


  <div class="container">

    <div class="row">
      <div class="col-md-4">
        <h3 class="font-weight-bold mb-0"></h3>
      </div>
      <div class="col-md-4">
        <ul class="list-unstyled d-flex justify-content-center mb-0 mt-2">
          <li>
          	<a class="mx-3" role="button">About</a>
          </li>
          <li>
          	<a class="mx-3" role="button">Blog</a>
          </li>
          <li>
          	<a class="mx-3" role="button">Policy</a>
          </li>
          <li>
          	<a class="mx-3" role="button">Contact</a>
          </li>
        </ul>
      </div>
      <div class="col-md-4">
       
        <div class="footer-copyright text-right bg-transparent dark-grey-text mt-2">© 2020.
          <a class="dark-grey-text" href="https://mdbootstrap.com/education/bootstrap/"> Adeleke Olamide.</a>
        </div>
        
      </div>
    </div>

  </div>
  

</footer>

</main>



<ScriptTag type="text/javascript" src="../index/main.js" />
        </div>
    );
}
 
export default Landing;