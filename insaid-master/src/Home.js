import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from "./domino-164_6wVEHfI-unsplash.jpg";
import pic2 from "./usama-akram-kP6knT7tjn4-unsplash.jpg";
import pic3 from "./luis-felipe-lins-LG88A2XgIXY-unsplash.jpg";


export const Home=()=> {
  return (
    <div>
   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>The Red Beast</h1>
        <p>Order you favourite shoes Now Only from Sumit Shoe Company</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>The Quick Silver </h1>
        <p>Order you favourite shoes Now Only from Sumit Shoe Company</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>The Green Giant</h1>
        <p>Order you favourite shoes Now Only from Sumit Shoe Company</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   
   <div>
   <section className="page-section mt-5" id="services">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">Services</h2>
     
    </div>
    <div className="row text-center">
      <div className="col-md-4">
      
        <h4 className="my-3">High Quality</h4>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          maxime quam architecto quo inventore harum ex magni, dicta impedit.
        </p>
      </div>
      <div className="col-md-4">
       
        <h4 className="my-3">Super Comfortable</h4>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          maxime quam architecto quo inventore harum ex magni, dicta impedit.
        </p>
      </div>
      <div className="col-md-4">
      
        <h4 className="my-3">Very Stylish</h4>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          maxime quam architecto quo inventore harum ex magni, dicta impedit.
        </p>
      </div>
    </div>
  </div>
</section>

   </div>
   <section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
   <h1 className='py-4'>Shop Now</h1>
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      <div className="col mb-5">
        <div className="card h-100">
          {/* Product image*/}
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          {/* Product details*/}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">Fancy Product</h5>
              {/* Product price*/}
              ₹4000-₹8000
            </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                View options
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-5">
        <div className="card h-100">
          {/* Sale badge*/}
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
          {/* Product image*/}
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/1449844/pexels-photo-1449844.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          {/* Product details*/}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">Special Item</h5>
              {/* Product reviews*/}
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
              </div>
              {/* Product price*/}
              <span className="text-muted text-decoration-line-through">
              ₹2000
              </span>
              ₹1800
            </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-5">
        <div className="card h-100">
          {/* Sale badge*/}
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
          {/* Product image*/}
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          {/* Product details*/}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">Sale Item</h5>
              {/* Product price*/}
              <span className="text-muted text-decoration-line-through">
              ₹4800
              </span>
              ₹2500
            </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-5">
        <div className="card h-100">
          {/* Product image*/}
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          {/* Product details*/}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">Popular Item</h5>
              {/* Product reviews*/}
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
              </div>
              {/* Product price*/}
              ₹3800
            </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-5">
        <div className="card h-100">
          {/* Sale badge*/}
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
          {/* Product image*/}
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          {/* Product details*/}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">Sale Item</h5>
              {/* Product price*/}
              <span className="text-muted text-decoration-line-through">
              ₹6500
              </span>
              ₹6000
            </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-5">
        <div className="card h-100">
          {/* Product image*/}
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          {/* Product details*/}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">Fancy Product</h5>
              {/* Product price*/}
              ₹3000-₹5000
            </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                View options
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-5">
        <div className="card h-100">
          {/* Sale badge*/}
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
          {/* Product image*/}
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          {/* Product details*/}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">Special Item</h5>
              {/* Product reviews*/}
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
              </div>
              {/* Product price*/}
              <span className="text-muted text-decoration-line-through">
              ₹5000
              </span>
              ₹4700
            </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-5">
        <div className="card h-100">
          {/* Product image*/}
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          {/* Product details*/}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">Popular Item</h5>
              {/* Product reviews*/}
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
              </div>
              {/* Product price*/}
              ₹3500
            </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





    </div>

   
  )
}




//  {/* <MDBCarousel showIndicators showControls fade >
//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={1}
//         src={pic1}
//         alt='...'
//       >
//         <h1 className='mb-5'>Best Shoes in the town</h1>
//         <p className='mb-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       </MDBCarouselItem>

//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={2}
//         src={pic2}
//         alt='...'
//       >
//         <h1 className='mb-5'>Quality like this never seen before</h1>
//         <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </MDBCarouselItem>

//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={3}
//         src={pic3}
//         alt='...'
//       >
//         <h1 className='mb-5'>Available in all sizes</h1>
//         <p className='mb-5'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//       </MDBCarouselItem>
//     </MDBCarousel> */}