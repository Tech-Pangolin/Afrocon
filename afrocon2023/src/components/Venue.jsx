
function Venue() {
  return (
    <section id="venue">
      <div className="container-fluid" data-aos="fade-up">        
        <div className="section-header">
          <h2>Event Venue</h2>
          <p>Event venue location info and gallery</p>
          <div className="details">
            <h5 className="text-center">
              <a
                href="https://form.jotform.com/230688988600166"
                rel="noopener noreferrer"
              >
                Volunteer Interest Form
              </a>
            </h5>
          </div>
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
              title="Venue Map"
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
  )
}

export default Venue;   