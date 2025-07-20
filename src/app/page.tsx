"use client"

import {useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

declare global {
  interface Window {
    initMain: () => void
  }
}

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined' && window.initMain) {
      window.initMain()
    }
  
  }, [])
  if (!isClient) return null;
  
  return (
    <div className="index-page" suppressHydrationWarning>
      <Header />
      <main id="main">

        <section id="hero" className="hero section">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 content-col" data-aos="fade-up">
                <div className="content">
                  <div className="agency-name">
                  <h5>OUR TEAM</h5>
                  </div>
                  <div className="main-heading">
                    <h1>BILDING <br/>SOFTWARE</h1>
                    </div>

                    <div className="divider"></div>

                    <div className="description">
                      <p>Discover innovative strategies for impactful visual communication. We transform ideas into compelling realities, ensuring your brand stands out in a crowded marketplace. Our dedicated team leverages cutting-edge techniques to deliver exceptional results that resonate with your audience.</p>
                    </div>

                    <div className="cta-button">
                      <a href="#services" className="btn">
                        <span>EXPLORE SERVICES</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                </div>
                
              </div>
              <div className="col-lg-5" data-aos="zoom-out">
                <div className="visual-content">
                  <div className="fluid-shape">
                    <Image src="/assets/img/abstract/abstract-1.webp" alt="Abstract Fluid Shape" width={600} height={400} className="fluid-img"/>
                  </div>

                  <div className="stats-card">
                    <div className="stats-number">
                      <h2>5K</h2>
                    </div>
                    <div className="stats-label">
                      <p>Successful Campaigns</p>
                    </div>
                    <div className="stats-arrow">
                      <a href="#portfolio"><i className="bi bi-arrow-up-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>

        {/* About Section  */}
        <section id="about" className="about section">

          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <div><span>Learn More</span> <span className="description-title">About Us</span></div>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container">

            <div className="row gx-5 align-items-center">
              <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
                <div className="about-image position-relative">
                  <Image src="/assets/img/about/about-portrait-1.webp" width={600} height={800} className="img-fluid rounded-4 shadow-sm" alt="About Image" loading="lazy" />
                  <div className="experience-badge">
                    <span className="years">20+</span>
                    <span className="text">Years of Expertise</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="300">
                <div className="about-content">
                  <h2>Elevating Business Performance Through Innovation</h2>
                  <p className="lead">We focus on crafting bespoke strategies that navigate complexity and deliver tangible results for our clients.</p>
                  <p>Through a blend of sophisticated analytics and creative problem-solving, we empower organizations to thrive in rapidly evolving markets.</p>

                  <div className="row g-4 mt-3">
                    <div className="col-md-6" data-aos="zoom-in" data-aos-delay="400">
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <h5>Dedicated Team Support</h5>
                        <p>Our highly skilled professionals are committed to providing personalized service and impactful solutions on every engagement.</p>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-in" data-aos-delay="450">
                      <div className="feature-item">
                        <i className="bi bi-lightbulb-fill"></i>
                        <h5>Forward-Thinking Approach</h5>
                        <p>We embrace innovative methodologies to develop unique strategies that drive lasting success.</p>
                      </div>
                    </div>
                  </div>

                  <a href="#" className="btn btn-primary mt-4">Explore Our Services</a>
                </div>
              </div>
            </div>

            <div className="testimonial-section mt-5 pt-5" data-aos="fade-up" data-aos-delay="100">
              <div className="row">
                <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
                  <div className="testimonial-intro">
                    <h3>Our Clients Speak Highly</h3>
                    <p>Hear directly from those who have experienced the impact of our partnership and achieved their strategic goals.</p>
                    <div className="swiper-nav-buttons mt-4">
                      <button className="slider-prev"><i className="bi bi-arrow-left"></i></button>
                      <button className="slider-next"><i className="bi bi-arrow-right"></i></button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8" data-aos="fade-left" data-aos-delay="300">
                  <div className="testimonial-slider swiper init-swiper">
                    <script 
                      type="application/json" 
                      className="swiper-config"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                        "loop": true,
                        "speed": 800,
                        "autoplay": {
                          "delay": 5000
                        },
                        "slidesPerView": 1,
                        "spaceBetween": 30,
                        "navigation": {
                          "nextEl": ".slider-next",
                          "prevEl": ".slider-prev"
                        },
                        "breakpoints": {
                          "768": {
                            "slidesPerView": 2
                          }
                        }
                      })
                      }}
                    />
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="rating mb-3">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <p>&quot;Their strategic vision and unwavering commitment to results provided exceptional value. Our operational efficiency has signficantly improved.&quot;</p>
                          <div className="client-info d-flex align-items-center mt-4">
                            <Image src="/assets/img/person/person-f-1.webp" width={100} height={100} className="client-img" alt="Client" loading="lazy"/>
                            <div>
                              <h6 className="mb-0">Eleanor Vance</h6>
                              <span>Operations Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="rating mb-3">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                          <p>&quot;Collaborating with their team was a revelation. Their innovative strategies guided us toward achieving our objectives with precision and speed.&quot;</p>
                          <div className="client-info d-flex align-items-center mt-4">
                            <Image src="/assets/img/person/person-m-1.webp" width={100} height={100} className="client-img" alt="Client" loading="lazy"/>
                            <div>
                              <h6 className="mb-0">David Kim</h6>
                              <span>Product Lead</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="rating mb-3">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <p>&quot;The depth of knowledge and unwavering dedication they bring to every project is exceptional. They&apos;ve become an essential ally in driving our expansion.&quot;</p>
                          <div className="client-info d-flex align-items-center mt-4">
                            <Image src="/assets/img/person/person-f-2.webp" className="client-img" alt="Client" loading="lazy" width={100} height={100}/>
                            <div>
                              <h6 className="mb-0">Isabella Diaz</h6>
                              <span>Research Analyst</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="rating mb-3">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                          <p>&quot;Their dedication to delivering superior solutions and their meticulous attention to detail have profoundly impacted our corporate growth trajectory.&quot;</p>
                          <div className="client-info d-flex align-items-center mt-4">
                            <Image src="/assets/img/person/person-f-3.webp" className="client-img" alt="Client" loading="lazy" width={100} height={100}/>
                            <div>
                              <h6 className="mb-0">Olivia Chen</h6>
                              <span>Development Strategist</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>
        {/* About Section */}

        {/* <section id="services" className="services sections-bg">
          <div className="container">
            <div className="section-header">
              <h2>Services</h2>
            </div>
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <h4>Creative Branding</h4>
                <p>We help define and design brand identities that resonate.</p>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <h4>Design Systems</h4>
                <p>Systematic design approaches to unify your products and visuals.</p>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <h4>Marketing Strategies</h4>
                <p>Innovative strategies that deliver measurable marketing success.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-header">
              <h2>Portfolio</h2>
            </div>
            <div className="row portfolio-container isotope-container">
              {[1,2,3,4].map(i => (
                <div className="col-lg-3 col-md-6 portfolio-item" key={i}>
                  <img src={`/assets/img/portfolio/portfolio-${i}.webp`} alt={`Portfolio ${i}`} width={300} height={200} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container">
            <div className="section-header">
              <h2>Team</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <h4>Walter White</h4>
                <p>Chief Executive Officer</p>
              </div>
              <div className="col-lg-4 col-md-6">
                <h4>Sarah Johnson</h4>
                <p>Product Manager</p>
              </div>
              <div className="col-lg-4 col-md-6">
                <h4>William Anderson</h4>
                <p>CTO</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-header">
              <h2>Contact</h2>
            </div>
            <form>
              <input type="text" placeholder="Your Name" /><br />
              <input type="email" placeholder="Your Email" /><br />
              <textarea placeholder="Your Message"></textarea><br />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section> */}

      </main>
      <Footer />
    </div>
  )
}
