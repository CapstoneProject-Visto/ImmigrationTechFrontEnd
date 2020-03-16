// Import required Components
import React from "react";
import { Slide } from "react-reveal";
import StarRatingComponent from "react-star-rating-component";
import Image from "../../images/studypermit.jpg";


function Testimonials() {
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <div
          style={{
            textAlign: "center",
            color: "orange",
            margin: "25px 0px"
          }}
        >
          <h3>TESTIMONIALS</h3>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 info-blocks firstblock">
            <Slide left delay={10}>
              <div>
                <div className="info-blocks-in">
                  <i className="icon-info-blocks material-icons">
                    <div>
                      <img
                        src={Image}
                        id="testimonial_image_1"
                        alt="Testimonial_1"
                      />
                    </div>
                  </i>
                  <h3>Sharad S.</h3>
                  <StarRatingComponent
                    name="rate1"
                    editing={false}
                    starCount={5}
                    value={5}
                  />
                  <div className="line"></div>
                  <p>
                    It was a pleasure working with Josh from Visto, he made the
                    immigration process so smooth and swift along with a
                    personal touch. I am now living in Toronto with my family
                    and couldn’t be happier
                  </p>
                </div>
              </div>
            </Slide>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 info-blocks secondblock">
            <Slide bottom delay={10}>
              <div>
                <div className="info-blocks-in">
                  <i className="icon-info-blocks material-icons">
                    <div>
                      <img
                        src={Image}
                        id="testimonial_image_2"
                        alt="Testimonial_2"
                      />
                    </div>
                  </i>
                  <h3>Leonardo L.</h3>
                  <StarRatingComponent
                    name="rate1"
                    editing={false}
                    starCount={5}
                    value={5}
                  />
                  <div className="line"></div>
                  <p>
                    I have worked with the team at Visto for some time now and
                    couldn’t be happier with my experience. I am now
                    living/working in Canada and was able to navigate Canadian
                    immigration without the added stress of having to do it
                    alone, which can be very daunting. I highly recommend it!
                  </p>
                </div>
              </div>
            </Slide>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 info-blocks thirdblock">
            <Slide right delay={10}>
              <div>
                <div className="info-blocks-in">
                  <i className="icon-info-blocks material-icons">
                    <div>
                      <img
                        src={Image}
                        id="testimonial_image_3"
                        alt="Testimonial_1"
                      />
                    </div>
                  </i>
                  <h3>Carli E.</h3>
                  <StarRatingComponent
                    name="rate1"
                    editing={false}
                    starCount={5}
                    value={5}
                  />
                  <div className="line"></div>
                  <p>
                    I was able to relocate to Canada and am now working in a
                    tech role thanks to working with the team at Visto. I am
                    happy to now call Canada home and hope others can as well!
                  </p>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
