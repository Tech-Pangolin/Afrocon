
function App() {

  return (
    <>
  {/* ======= Header ======= */}
  <header id="header" className="d-flex align-items-center ">
    <div className="container-fluid d-flex align-items-center">
      <div id="logo" className="me-auto">
        {/* Uncomment below if you prefer to use a text logo */}
        {/* <h1><a href="index.html">The<span>Event</span></a></h1>*/}
        {/* <a href="index.html" class="scrollto"><img src="assets/img/logo.png" alt="" title=""></a> */}
      </div>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          {/* <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
    <li><a class="nav-link scrollto" href="#about">About</a></li>
    <li><a class="nav-link scrollto" href="#speakers">Speakers</a></li>
    <li><a class="nav-link scrollto" href="#schedule">Schedule</a></li>
    <li><a class="nav-link scrollto" href="#venue">Venue</a></li>
    <li><a class="nav-link scrollto" href="#hotels">Hotels</a></li>
    <li><a class="nav-link scrollto" href="#gallery">Gallery</a></li>
    <li><a class="nav-link scrollto" href="#supporters">Sponsors</a></li> */}
          {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
    <ul>
      <li><a href="#">Drop Down 1</a></li>
      <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
        <ul>
          <li><a href="#">Deep Drop Down 1</a></li>
          <li><a href="#">Deep Drop Down 2</a></li>
          <li><a href="#">Deep Drop Down 3</a></li>
          <li><a href="#">Deep Drop Down 4</a></li>
          <li><a href="#">Deep Drop Down 5</a></li>
        </ul>
      </li>
      <li><a href="#">Drop Down 2</a></li>
      <li><a href="#">Drop Down 3</a></li>
      <li><a href="#">Drop Down 4</a></li>
    </ul>
  </li> */}
          {/* <li><a class="nav-link scrollto" href="#contact">Contact</a></li> */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
      {/* <a class="buy-tickets scrollto" href="#buy-tickets">Buy Tickets</a> */}
    </div>
  </header>
  {/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero">
    {/* <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
    
<h1 class="mb-4 pb-0">The Annual<br><span>Marketing</span> Conference</h1>
<p class="mb-4 pb-0">10-12 December, Downtown Conference Center, New York</p>
<a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a>
<a href="#about" class="about-btn scrollto">About The Event</a>
    </div> */}
  </section>
  {/* End Hero Section */}
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about">
      <div className="container position-relative" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6">
            <h2>
              The House of Afros, Capes &amp; Curls Presents: AfroCon 2023
            </h2>
            {/* <p>The House of Afros, Capes &amp; Curls Presents<br/>
      AfroCon 2023</p> */}
          </div>
          <div className="col-lg-3">
            <h3>Where</h3>
            <p>
              MCC Center for Advanced and Emerging Technology (CAET) Bldg. #24
              32nd &amp; Sorensen Parkway Omaha, NE 68111
            </p>
          </div>
          <div className="col-lg-3">
            <h3>When</h3>
            <p>October 7th 2023</p>
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}
    {/* ======= Speakers Section ======= */}
    <section id="speakers">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About AfroCon</h2>
          <p>
            Welcome to AfroCon, the ultimate celebration of black nerd culture!
            Join us for a one-of-a-kind event that brings together the best of
            both worlds: the vibrant energy of black culture and the thrilling
            world of nerdom. Immerse yourself in a captivating atmosphere where
            creativity knows no bounds, and support talented independent artists
            and businesses led by people of color. AfroCon is where
            conversations ignite, friendships are forged, and unforgettable
            memories are made. Get ready to experience the magic at AfroCon -
            the intersection of culture and fandom.
          </p>
          <br />
          <p>
            Get ready for an electrifying celebration of Black nerd culture at
            AfroCon! Immerse yourself in a world where superheroes, artists, and
            fans unite. Experience mind-blowing panels, explore virtual booths
            filled with exclusive merchandise, and connect with fellow
            enthusiasts. Don't miss this epic event that celebrates diversity,
            creativity, and the power of fandom. Get your tickets now and be
            part of the excitement at AfroCon!
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="speaker" data-aos="fade-up" data-aos-delay={100}>
              <a
                href="https://form.jotform.com/230688988600166"
                target="_blank"
              >
                {" "}
                <img
                  src="./img/volunteer.jpeg"
                  alt="Speaker 1"
                  className="img-fluid"
                />
              </a>
              <div className="details">
                <h3>
                  <a
                    href="https://form.jotform.com/230688988600166"
                    target="_blank"
                  >
                    Volunteer Interest Form
                  </a>
                </h3>
                <p>Volunteer with us</p>
                <div className="social">
                  {/* <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="speaker" data-aos="fade-up" data-aos-delay={200}>
              <a
                href="https://form.jotform.com/231817949324060"
                target="_blank"
              >
                <img
                  src="./img/panel.jpeg"
                  alt="Speaker 2"
                  className="img-fluid"
                />
              </a>
              <div className="details">
                <h3>
                  <a
                    href="https://form.jotform.com/231817949324060"
                    target="_blank"
                  >
                    Panel/Workshop/Presentation Application
                  </a>
                </h3>
                <p>Share your passions</p>
                <div className="social">
                  {/* <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-lg-4 col-md-6">
      <div class="speaker" data-aos="fade-up" data-aos-delay="300">
        <img src="assets/img/speakers/3.jpg" alt="Speaker 3" class="img-fluid">
        <div class="details">
          <h3><a href="speaker-details.html">Cole Emmerich</a></h3>
          <p>Fugiat laborum et</p>
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div> */}
          <div className="col-lg-6 col-md-6">
            <div className="speaker" data-aos="fade-up" data-aos-delay={100}>
              <a
                href="https://form.jotform.com/231819077997171"
                target="_blank"
              >
                <img
                  src="./img/vendor2.jpeg"
                  alt="Speaker 4"
                  className="img-fluid"
                />
              </a>
              <div className="details">
                <h3>
                  <a
                    href="https://form.jotform.com/231819077997171"
                    target="_blank"
                  >
                    Exhibitor/Vendor Application
                  </a>
                </h3>
                <p>Present your products</p>
                <div className="social">
                  {/* <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="speaker" data-aos="fade-up" data-aos-delay={300}>
              <img
                src="./img/HOACC.png"
                alt="Speaker 6"
                className="img-fluid"
              />
              <div className="details">
                <h3>
                  <a
                    href="https://form.jotform.com/232206884994165"
                    target="_blank"
                  >
                    Sponsorship Opportunities
                  </a>
                </h3>
                <p>Support our cause</p>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="speaker" data-aos="fade-up" data-aos-delay={200}>
              <a
                href="https://www.eventbrite.com/e/afrocon-2023-tickets-671116436327?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshwebdesktop"
                target="_blank"
              >
                <img
                  src="./img/join.jpeg"
                  alt="Speaker 5"
                  className="img-fluid"
                />
              </a>
              <div className="details">
                <h3>
                  <a
                    href="https://www.eventbrite.com/e/afrocon-2023-tickets-671116436327?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshwebdesktop"
                    target="_blank"
                  >
                    Get tickets!
                  </a>
                </h3>
                <p>Join the fun</p>
                <div className="social">
                  {/* <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Speakers Section */}
    {/* ======= Schedule Section ======= */}
    {/* <section id="schedule" class="section-with-bg">
<div class="container" data-aos="fade-up">
  <div class="section-header">
    <h2>Event Schedule</h2>
    <p>Here is our event schedule</p>
  </div>

  <ul class="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
    <li class="nav-item">
      <a class="nav-link active" href="#day-1" role="tab" data-bs-toggle="tab">Day 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#day-2" role="tab" data-bs-toggle="tab">Day 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#day-3" role="tab" data-bs-toggle="tab">Day 3</a>
    </li>
  </ul>

  <h3 class="sub-heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
    necessitatibus voluptatem quis labore perspiciatis quia.</h3>

  <div class="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">

  
    <div role="tabpanel" class="col-lg-9 tab-pane fade show active" id="day-1">

      <div class="row schedule-item">
        <div class="col-md-2"><time>09:30 AM</time></div>
        <div class="col-md-10">
          <h4>Registration</h4>
          <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>10:00 AM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/1.jpg" alt="Brenden Legros">
          </div>
          <h4>Keynote <span>Brenden Legros</span></h4>
          <p>Facere provident incidunt quos voluptas.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>11:00 AM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/2.jpg" alt="Hubert Hirthe">
          </div>
          <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
          <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>12:00 AM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/3.jpg" alt="Cole Emmerich">
          </div>
          <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
          <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>02:00 PM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/4.jpg" alt="Jack Christiansen">
          </div>
          <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
          <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>03:00 PM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/5.jpg" alt="Alejandrin Littel">
          </div>
          <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
          <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>04:00 PM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/6.jpg" alt="Willow Trantow">
          </div>
          <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
          <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
        </div>
      </div>

    </div>
    
    
    <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-2">

      <div class="row schedule-item">
        <div class="col-md-2"><time>10:00 AM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/1.jpg" alt="Brenden Legros">
          </div>
          <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
          <p>Facere provident incidunt quos voluptas.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>11:00 AM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/2.jpg" alt="Hubert Hirthe">
          </div>
          <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
          <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>12:00 AM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/3.jpg" alt="Cole Emmerich">
          </div>
          <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
          <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>02:00 PM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/4.jpg" alt="Jack Christiansen">
          </div>
          <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
          <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>03:00 PM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/5.jpg" alt="Alejandrin Littel">
          </div>
          <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
          <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>04:00 PM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/6.jpg" alt="Willow Trantow">
          </div>
          <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
          <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
        </div>
      </div>

    </div>
 
  
    <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-3">

      <div class="row schedule-item">
        <div class="col-md-2"><time>10:00 AM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/2.jpg" alt="Hubert Hirthe">
          </div>
          <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
          <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>11:00 AM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/3.jpg" alt="Cole Emmerich">
          </div>
          <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
          <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>12:00 AM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/1.jpg" alt="Brenden Legros">
          </div>
          <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
          <p>Facere provident incidunt quos voluptas.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>02:00 PM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/4.jpg" alt="Jack Christiansen">
          </div>
          <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
          <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>03:00 PM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/5.jpg" alt="Alejandrin Littel">
          </div>
          <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
          <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
        </div>
      </div>

      <div class="row schedule-item">
        <div class="col-md-2"><time>04:00 PM</time></div>
        <div class="col-md-10">
          <div class="speaker">
            <img src="assets/img/speakers/6.jpg" alt="Willow Trantow">
          </div>
          <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
          <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
        </div>
      </div>

    </div>
   

  </div>

</div>

    </section> */}
    {/* ======= Venue Section ======= */}
    <section id="venue">
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-header">
          <h2>Event Venue</h2>
          <p>Event venue location info and gallery</p>
        </div>
        <div className="row g-0">
          <div className="col-lg-6 venue-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.2429726332884!2d-95.9602761!3d41.3035776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x879391c1bdbf64f7%3A0xe7b819d492157392!2sSorensen%20Pkwy%20%26%20N%2032nd%20St%2C%20Omaha%2C%20NE%2068111!5e0!3m2!1sen!2sus!4v1692283805436!5m2!1sen!2sus"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="col-lg-6 venue-info">
            <div className="row justify-content-center">
              <div className="col-11 col-lg-8 position-relative">
                <h3>MCC Center for Advanced and Emerging Technology (CAET)</h3>
                <p>Bldg. #24 32nd &amp; Sorensen Parkway Omaha, NE 68111</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid venue-gallery-container"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="row g-0">
          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a
                href="./img/venue-gallery/1.jpg"
                className="glightbox"
                data-gall="venue-gallery"
              >
                <img
                  src="./img/venue-gallery/1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a
                href="./img/venue-gallery/2.jpg"
                className="glightbox"
                data-gall="venue-gallery"
              >
                <img
                  src="./img/venue-gallery/2.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a
                href="./img/venue-gallery/3.jpg"
                className="glightbox"
                data-gall="venue-gallery"
              >
                <img
                  src="./img/venue-gallery/3.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a
                href="./img/venue-gallery/4.jpg"
                className="glightbox"
                data-gall="venue-gallery"
              >
                <img
                  src="./img/venue-gallery/4.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a
                href="./img/venue-gallery/5.jpg"
                className="glightbox"
                data-gall="venue-gallery"
              >
                <img
                  src="./img/venue-gallery/5.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a
                href="./img/venue-gallery/6.jpg"
                className="glightbox"
                data-gall="venue-gallery"
              >
                <img
                  src="./img/venue-gallery/6.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a
                href="./img/venue-gallery/7.jpg"
                className="glightbox"
                data-gall="venue-gallery"
              >
                <img
                  src="./img/venue-gallery/7.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a
                href="./img/venue-gallery/8.jpeg"
                className="glightbox"
                data-gall="venue-gallery"
              >
                <img
                  src="./img/venue-gallery/8.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Venue Section */}
    {/* ======= Hotels Section ======= */}
    {/* <section id="hotels" class="section-with-bg">

<div class="container" data-aos="fade-up">
  <div class="section-header">
    <h2>Hotels</h2>
    <p>Her are some nearby hotels</p>
  </div>

  <div class="row" data-aos="fade-up" data-aos-delay="100">

    <div class="col-lg-4 col-md-6">
      <div class="hotel">
        <div class="hotel-img">
          <img src="assets/img/hotels/1.jpg" alt="Hotel 1" class="img-fluid">
        </div>
        <h3><a href="#">Hotel 1</a></h3>
        <div class="stars">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
        <p>0.4 Mile from the Venue</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6">
      <div class="hotel">
        <div class="hotel-img">
          <img src="assets/img/hotels/2.jpg" alt="Hotel 2" class="img-fluid">
        </div>
        <h3><a href="#">Hotel 2</a></h3>
        <div class="stars">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill-half-full"></i>
        </div>
        <p>0.5 Mile from the Venue</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6">
      <div class="hotel">
        <div class="hotel-img">
          <img src="assets/img/hotels/3.jpg" alt="Hotel 3" class="img-fluid">
        </div>
        <h3><a href="#">Hotel 3</a></h3>
        <div class="stars">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
        <p>0.6 Mile from the Venue</p>
      </div>
    </div>

  </div>
</div>

    </section> */}
    {/* End Hotels Section */}
    {/* ======= Gallery Section ======= */}
    {/* <section id="gallery">

<div class="container" data-aos="fade-up">
  <div class="section-header">
    <h2>Gallery</h2>
    <p>Check our gallery from the recent events</p>
  </div>
</div>

<div class="gallery-slider swiper">
  <div class="swiper-wrapper align-items-center">
    <div class="swiper-slide"><a href="assets/img/gallery/1.jpg" class="gallery-lightbox"><img src="assets/img/gallery/1.jpg" class="img-fluid" alt=""></a></div>
    <div class="swiper-slide"><a href="assets/img/gallery/2.jpg" class="gallery-lightbox"><img src="assets/img/gallery/2.jpg" class="img-fluid" alt=""></a></div>
    <div class="swiper-slide"><a href="assets/img/gallery/3.jpg" class="gallery-lightbox"><img src="assets/img/gallery/3.jpg" class="img-fluid" alt=""></a></div>
    <div class="swiper-slide"><a href="assets/img/gallery/4.jpg" class="gallery-lightbox"><img src="assets/img/gallery/4.jpg" class="img-fluid" alt=""></a></div>
    <div class="swiper-slide"><a href="assets/img/gallery/5.jpg" class="gallery-lightbox"><img src="assets/img/gallery/5.jpg" class="img-fluid" alt=""></a></div>
    <div class="swiper-slide"><a href="assets/img/gallery/6.jpg" class="gallery-lightbox"><img src="assets/img/gallery/6.jpg" class="img-fluid" alt=""></a></div>
    <div class="swiper-slide"><a href="assets/img/gallery/7.jpg" class="gallery-lightbox"><img src="assets/img/gallery/7.jpg" class="img-fluid" alt=""></a></div>
    <div class="swiper-slide"><a href="assets/img/gallery/8.jpg" class="gallery-lightbox"><img src="assets/img/gallery/8.jpg" class="img-fluid" alt=""></a></div>
  </div>
  <div class="swiper-pagination"></div>
</div>

    </section> */}
    {/* End Gallery Section */}
    {/* ======= Supporters Section ======= */}
    {/* <section id="supporters" class="section-with-bg">

<div class="container" data-aos="fade-up">
  <div class="section-header">
    <h2>Sponsors</h2>
  </div>

  <div class="row no-gutters supporters-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">

    <div class="col-lg-3 col-md-4 col-xs-6">
      <div class="supporter-logo">
        <img src="assets/img/supporters/1.png" class="img-fluid" alt="">
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-xs-6">
      <div class="supporter-logo">
        <img src="assets/img/supporters/2.png" class="img-fluid" alt="">
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-xs-6">
      <div class="supporter-logo">
        <img src="assets/img/supporters/3.png" class="img-fluid" alt="">
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-xs-6">
      <div class="supporter-logo">
        <img src="assets/img/supporters/4.png" class="img-fluid" alt="">
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-xs-6">
      <div class="supporter-logo">
        <img src="assets/img/supporters/5.png" class="img-fluid" alt="">
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-xs-6">
      <div class="supporter-logo">
        <img src="assets/img/supporters/6.png" class="img-fluid" alt="">
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-xs-6">
      <div class="supporter-logo">
        <img src="assets/img/supporters/7.png" class="img-fluid" alt="">
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-xs-6">
      <div class="supporter-logo">
        <img src="assets/img/supporters/8.png" class="img-fluid" alt="">
      </div>
    </div>

  </div>

</div>

    </section> */}
    {/* End Sponsors Section */}
    {/* =======  F.A.Q Section ======= */}
    {/* <section id="faq">

<div class="container" data-aos="fade-up">

  <div class="section-header">
    <h2>F.A.Q </h2>
  </div>

  <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
    <div class="col-lg-9">

      <ul class="faq-list">

        <li>
          <div data-bs-toggle="collapse" class="collapsed question" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
          <div id="faq1" class="collapse" data-bs-parent=".faq-list">
            <p>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          </div>
        </li>

        <li>
          <div data-bs-toggle="collapse" href="#faq2" class="collapsed question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
          <div id="faq2" class="collapse" data-bs-parent=".faq-list">
            <p>
              Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
            </p>
          </div>
        </li>

        <li>
          <div data-bs-toggle="collapse" href="#faq3" class="collapsed question">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
          <div id="faq3" class="collapse" data-bs-parent=".faq-list">
            <p>
              Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
            </p>
          </div>
        </li>

        <li>
          <div data-bs-toggle="collapse" href="#faq4" class="collapsed question">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
          <div id="faq4" class="collapse" data-bs-parent=".faq-list">
            <p>
              Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
            </p>
          </div>
        </li>

        <li>
          <div data-bs-toggle="collapse" href="#faq5" class="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
          <div id="faq5" class="collapse" data-bs-parent=".faq-list">
            <p>
              Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
            </p>
          </div>
        </li>

        <li>
          <div data-bs-toggle="collapse" href="#faq6" class="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
          <div id="faq6" class="collapse" data-bs-parent=".faq-list">
            <p>
              Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
            </p>
          </div>
        </li>

      </ul>

    </div>
  </div>

</div>

    </section> */}
    {/* End  F.A.Q Section */}
    {/* ======= Subscribe Section ======= */}
    {/* <section id="subscribe">
<div class="container" data-aos="zoom-in">
  <div class="section-header">
    <h2>Newsletter</h2>
    <p>Rerum numquam illum recusandae quia mollitia consequatur.</p>
  </div>

  <form method="POST" action="#">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-10 d-flex">
        <input type="text" class="form-control" placeholder="Enter your Email">
        <button type="submit" class="ms-2">Subscribe</button>
      </div>
    </div>
  </form>

</div>
    </section> */}
    {/* End Subscribe Section */}
    {/* ======= Buy Ticket Section ======= */}
    {/* <section id="buy-tickets" class="section-with-bg">
<div class="container" data-aos="fade-up">

  <div class="section-header">
    <h2>Buy Tickets</h2>
    <p>Velit consequatur consequatur inventore iste fugit unde omnis eum aut.</p>
  </div>

  <div class="row">
    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">Standard Access</h5>
          <h6 class="card-price text-center">$150</h6>
          <hr>
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fa fa-check"></i></span>Regular Seating</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>Coffee Break</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>Custom Badge</li>
            <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Community Access</li>
            <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Workshop Access</li>
            <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>After Party</li>
          </ul>
          <hr>
          <div class="text-center">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#buy-ticket-modal" data-ticket-type="standard-access">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">Pro Access</h5>
          <h6 class="card-price text-center">$250</h6>
          <hr>
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fa fa-check"></i></span>Regular Seating</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>Coffee Break</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>Custom Badge</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>
            <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Workshop Access</li>
            <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>After Party</li>
          </ul>
          <hr>
          <div class="text-center">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#buy-ticket-modal" data-ticket-type="pro-access">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
     <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">Premium Access</h5>
          <h6 class="card-price text-center">$350</h6>
          <hr>
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fa fa-check"></i></span>Regular Seating</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>Coffee Break</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>Custom Badge</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>Workshop Access</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>After Party</li>
          </ul>
          <hr>
          <div class="text-center">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#buy-ticket-modal" data-ticket-type="premium-access">Buy Now</button>
          </div>

        </div>
      </div>
    </div>
  </div>

</div>

    
<div id="buy-ticket-modal" class="modal fade">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Buy Tickets</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form method="POST" action="#">
          <div class="form-group">
            <input type="text" class="form-control" name="your-name" placeholder="Your Name">
          </div>
          <div class="form-group mt-3">
            <input type="text" class="form-control" name="your-email" placeholder="Your Email">
          </div>
          <div class="form-group mt-3">
            <select id="ticket-type" name="ticket-type" class="form-select">
              <option value="">-- Select Your Ticket Type --</option>
              <option value="standard-access">Standard Access</option>
              <option value="pro-access">Pro Access</option>
              <option value="premium-access">Premium Access</option>
            </select>
          </div>
          <div class="text-center mt-3">
            <button type="submit" class="btn">Buy Now</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </section> */}
    {/* End Buy Ticket Section */}
    {/* ======= Contact Section ======= */}
    {/* <section id="contact" class="section-bg">

<div class="container" data-aos="fade-up">

  <div class="section-header">
    <h2>Contact Us</h2>
    <p>Nihil officia ut sint molestiae tenetur.</p>
  </div>

  <div class="row contact-info">

    <div class="col-md-4">
      <div class="contact-address">
        <i class="bi bi-geo-alt"></i>
        <h3>Address</h3>
        <address>A108 Adam Street, NY 535022, USA</address>
      </div>
    </div>

    <div class="col-md-4">
      <div class="contact-phone">
        <i class="bi bi-phone"></i>
        <h3>Phone Number</h3>
        <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
      </div>
    </div>

    <div class="col-md-4">
      <div class="contact-email">
        <i class="bi bi-envelope"></i>
        <h3>Email</h3>
        <p><a href="mailto:info@example.com">info@example.com</a></p>
      </div>
    </div>

  </div>

  <div class="form">
    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
      <div class="row">
        <div class="form-group col-md-6">
          <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
        </div>
        <div class="form-group col-md-6 mt-3 mt-md-0">
          <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
        </div>
      </div>
      <div class="form-group mt-3">
        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
      </div>
      <div class="form-group mt-3">
        <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
      </div>
      <div class="my-3">
        <div class="loading">Loading</div>
        <div class="error-message"></div>
        <div class="sent-message">Your message has been sent. Thank you!</div>
      </div>
      <div class="text-center"><button type="submit">Send Message</button></div>
    </form>
  </div>

</div>
    </section> */}
    {/* End Contact Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    {/* <div class="footer-top">
<div class="container">
  <div class="row">

    <div class="col-lg-3 col-md-6 footer-info">
      <img src="assets/img/logo.png" alt="TheEvenet">
      <p>In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam vel eveniet est dolor et totam porro. Perspiciatis ad omnis fugit molestiae recusandae possimus. Aut consectetur id quis. In inventore consequatur ad voluptate cupiditate debitis accusamus repellat cumque.</p>
    </div>

    <div class="col-lg-3 col-md-6 footer-links">
      <h4>Useful Links</h4>
      <ul>
        <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
        <li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
        <li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>
        <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
        <li><i class="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
      </ul>
    </div>

    <div class="col-lg-3 col-md-6 footer-links">
      <h4>Useful Links</h4>
      <ul>
        <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
        <li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
        <li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>
        <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
        <li><i class="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
      </ul>
    </div>

    <div class="col-lg-3 col-md-6 footer-contact">
      <h4>Contact Us</h4>
      <p>
        A108 Adam Street <br>
        New York, NY 535022<br>
        United States <br>
        <strong>Phone:</strong> +1 5589 55488 55<br>
        <strong>Email:</strong> info@example.com<br>
      </p>

      <div class="social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>

    </div>

  </div>
</div>
    </div> */}
    <div className="container">
      <div className="copyright">
        © Copyright <strong>House of Afros Capes and Curls</strong>. All Rights
        Reserved
      </div>
    </div>
  </footer>
  {/* End  Footer */}
  <a
    href="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</>

  );
}

export default App;
