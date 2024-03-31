
function Speakers() {
  return (
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
          {/* <div className="col-lg-6 col-md-6">
            <div className="speaker" data-aos="fade-up" data-aos-delay={100}>
              <a href="https://form.jotform.com/230688988600166" rel="noopener noreferrer">
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
                    rel="noopener noreferrer"
                  >
                    Volunteer Interest Form
                  </a>
                </h3>
                <p>Volunteer with us</p>
                <div className="social">
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-lg-12 col-md-12">
            <div className="speaker" data-aos="fade-up" data-aos-delay={200}>
              <a
                href="https://www.eventbrite.com/e/afrocon-2023-tickets-671116436327?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshwebdesktop"
                rel="noopener noreferrer"
              >
                <img
                  src="./img/join.jpeg"
                  alt="Speaker 5"
                  className="img-fluid"
                />
              </a>
              <div className="details">
                <h1 className="text-uppercase" style={{fontSize:'72px'}}>
                  {/* <a
                    href="https://www.eventbrite.com/e/afrocon-2023-tickets-671116436327?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshwebdesktop"
                    rel="noopener noreferrer"
                  > */}
                  <a href="#">
                   <strong>Tickets coming soon!</strong></a>
                  {/* </a> */}
                </h1>
                <p>Join the fun</p>
                <div className="social">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Speakers;