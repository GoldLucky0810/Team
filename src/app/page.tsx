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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message: ''
  })

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined' && window.initMain) {
      window.initMain()
    }
  
  }, [])
  if (!isClient) return null;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // You can add API submission logic here
  }
  return (
    <div className="index-page" suppressHydrationWarning>
      
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
        {/*End About Section */}
        {/* Services Section */}
        <section id="services" className="services section">

          {/*Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <div><span>Check Our</span> <span className="description-title">Services</span></div>
          </div>
          {/* End Section Title */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="service-header">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  <div className="service-intro">
                    <h2 className="service-heading">
                      <div>Innovative business</div>
                      <div><span>performance solutions</span></div>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="service-summary">
                    <p>
                      We integrate forward-thinking strategies, creative approaches, and state-of-the-art technologies to deliver exceptional customer experiences that drive growth and engage target markets.
                    </p>
                    <a href="services.html" className="service-btn">
                      View All Services
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-palette"></i>
                  </div>
                  <a href="service-details.html" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Creative <span>branding</span>
                    </a>
                  </h3>
                  <p>
                    Nulla facilisi. Maecenas eget magna neque. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate, vel condimentum libero tempus. Proin consectetur feugiat diam.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-gem"></i>
                  </div>
                  <a href="service-details.html" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Design <span>systems</span>
                    </a>
                  </h3>
                  <p>
                    Praesent euismod varius tellus, vel bibendum nunc interdum at. Donec vehicula diam vel metus venenatis convallis. Aliquam erat volutpat. Etiam viverra magna sit amet.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-megaphone"></i>
                  </div>
                  <a href="service-details.html" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Marketing <span>strategies</span>
                    </a>
                  </h3>
                  <p>
                    Vivamus tempor velit id magna dictum, sed fermentum nisi faucibus. Integer nec pretium sapien. Fusce tincidunt ligula et purus consequat, ac pellentesque nulla eleifend.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <a href="service-details.html" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Digital <span>platforms</span>
                    </a>
                  </h3>
                  <p>
                    Cras fermentum odio eu feugiat malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et accumsan cursus. Morbi placerat nulla vel nunc viverra accumsan.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-graph-up"></i>
                  </div>
                  <a href="service-details.html" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Growth <span>acceleration</span>
                    </a>
                  </h3>
                  <p>
                    Aenean vel augue vel nisi bibendum posuere. Phasellus in lacus quis urna sodales dignissim. Duis aliquam libero eget risus facilisis. Quisque eget libero vel nisl fringilla.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-camera-video"></i>
                  </div>
                  <a href="service-details.html" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Media <span>solutions</span>
                    </a>
                  </h3>
                  <p>
                    Etiam efficitur lacus in diam finibus, nec ultrices est sagittis. Maecenas elementum magna sed risus faucibus, nec commodo purus facilisis. Vestibulum accumsan magna.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </section>
        {/* End Services Section */}
        {/* Steps Section */}
        <section id="steps" className="steps section">

          {/* Section Title*/}
          <div className="container section-title" data-aos="fade-up">
            <h2>Steps</h2>
            <div><span>How we</span> <span className="description-title">Work</span></div>
          </div>
          {/* End Section Title  */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="steps-wrapper">

              <div className="step-item" data-aos="fade-right" data-aos-delay="200">
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-lightbulb"></i>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 01</span>
                    <h3>Initial Consultation</h3>
                    <p>Conducting thorough discovery sessions to understand your business requirements and objectives. Our expert team analyzes your needs to create a customized approach.</p>
                  </div>
                </div>
              </div>
            

              <div className="step-item" data-aos="fade-left" data-aos-delay="300">
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-gear"></i>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 02</span>
                    <h3>Planning &amp; Strategy</h3>
                    <p>Developing comprehensive strategies and detailed project plans based on the initial consultation. We create actionable roadmaps with clear milestones and deliverables.</p>
                  </div>
                </div>
              </div>
             

              <div className="step-item" data-aos="fade-right" data-aos-delay="400">
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 03</span>
                    <h3>Development Phase</h3>
                    <p>Executing the planned strategies with precision and agility. Our team implements solutions while maintaining constant communication and progress updates.</p>
                  </div>
                </div>
              </div>

              <div className="step-item" data-aos="fade-left" data-aos-delay="500">
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-check2-circle"></i>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 04</span>
                    <h3>Launch &amp; Support</h3>
                    <p>Ensuring smooth deployment and providing ongoing support for implemented solutions. We monitor performance and make necessary adjustments for optimal results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Steps Section  */}
        {/* Call To Action Section */}
        <section id="call-to-action" className="call-to-action section">

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="advertise-1 d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">

              <div className="content-left flex-grow-1" data-aos="fade-right" data-aos-delay="200">
                <span className="badge text-uppercase mb-2">Don&apos;t Miss!</span>
                <h2>Revolutionize Your Digital Experience Today</h2>
                <p className="my-4">GoldEngineers accelerates your business growth through innovative solutions and cutting-edge technology. Join thousands of satisfied customers who have transformed their operations.</p>

                <div className="features d-flex flex-wrap gap-3 mb-4">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Premium Support</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Cloud Integration</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Real-time Analytics</span>
                  </div>
                </div>

                <div className="cta-buttons d-flex flex-wrap gap-3">
                  <a href="#" className="btn btn-primary">Contact to Our</a>
                  <a href="#" className="btn btn-outline">Learn More</a>
                </div>
              </div>

              <div className="content-right position-relative" data-aos="fade-left" data-aos-delay="300">
                <Image src="/assets/img/misc/misc-1.webp" width={600} height={400} alt="Digital Platform" className="img-fluid rounded-4"/>
                <div className="floating-card">
                  <div className="card-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <div className="card-content">
                    <span className="stats-number">245%</span>
                    <span className="stats-text">Growth Rate</span>
                  </div>
                </div>
              </div>

              <div className="decoration">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
              </div>
            </div>
          </div>
        </section>
        {/* end Call To Action Section */}
        {/*Testimonials Section*/}
        <section id="testimonials" className="testimonials section light-background">

          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <div><span>Check Our</span> <span className="description-title">Testimonials</span></div>
          </div>
          {/* End Section Title */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="testimonials-slider swiper init-swiper">
              <script 
                type="application/json" 
                className="swiper-config"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                  "slidesPerView": 1,
                  "loop": true,
                  "speed": 600,
                  "autoplay": {
                    "delay": 5000
                  },
                  "navigation": {
                    "nextEl": ".swiper-button-next",
                    "prevEl": ".swiper-button-prev"
                  }
                })
                }}
              />
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Sed ut perspiciatis unde omnis</h2>
                        <p>
                          Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        </p>
                        <p>
                          Beatae magnam dolore quia ipsum. Voluptatem totam et qui dolore dignissimos. Amet quia sapiente laudantium nihil illo et assumenda sit cupiditate. Nam perspiciatis perferendis minus consequatur. Enim ut eos quo.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <Image src="/assets/img/person/person-m-7.webp" width={100} height={100} className="profile-img" alt=""/>
                          <div className="profile-info">
                            <h3>Saul Goodman</h3>
                            <span>Client</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <Image src="/assets/img/person/person-m-7.webp" fill className="featured-img" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Nemo enim ipsam voluptatem</h2>
                        <p>
                          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        </p>
                        <p>
                          Dolorem excepturi esse qui amet maxime quibusdam aut repellendus voluptatum. Corrupti enim a repellat cumque est laborum fuga consequuntur. Dolorem nostrum deleniti quas voluptatem iure dolorum rerum. Repudiandae doloribus ut repellat harum vero aut. Modi aut velit aperiam aspernatur odit ut vitae.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <Image src="/assets/img/person/person-f-8.webp" width={100} height={100} className="profile-img" alt=""/>
                          <div className="profile-info">
                            <h3>Sara Wilsson</h3>
                            <span>Designer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <Image src="/assets/img/person/person-f-8.webp" fill className="featured-img" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Testimonial Item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>
                          Labore nostrum eos impedit
                        </h2>
                        <p>
                          Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                        </p>
                        <p>
                          Itaque ut explicabo vero occaecati est quam rerum sed. Numquam tempora aut aut quaerat quia illum. Nobis quia autem odit ipsam numquam. Doloribus sit sint corporis eius totam fuga. Hic nostrum suscipit corrupti nam expedita adipisci aut optio.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <Image src="/assets/img/person/person-m-9.webp" width={100} height={100} className="profile-img" alt=""/>
                          <div className="profile-info">
                            <h3>Matt Brandon</h3>
                            <span>Freelancer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <Image src="/assets/img/person/person-m-9.webp" fill className="featured-img" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Testimonial Item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Impedit dolor facilis nulla</h2>
                        <p>
                          Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                        </p>
                        <p>
                          Omnis aspernatur accusantium qui delectus praesentium repellendus. Facilis sint odio aspernatur voluptas commodi qui qui qui pariatur. Corrupti deleniti itaque quaerat ipsum deleniti culpa tempora tempore. Et consequatur exercitationem hic aspernatur nobis est voluptatibus architecto laborum.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <Image src="/assets/img/person/person-f-10.webp" width={100} height={100} className="profile-img" alt=""/>
                          <div className="profile-info">
                            <h3>Jena Karlis</h3>
                            <span>Store Owner</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <Image src="/assets/img/person/person-f-10.webp" fill className="featured-img" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Testimonial Item --> */}

              </div>

              <div className="swiper-navigation w-100 d-flex align-items-center justify-content-center">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>

            </div>

          </div>

        </section>
        {/* <!-- /Testimonials Section --> */}
        {/* <!-- Portfolio Section --> */}
        <section id="portfolio" className="portfolio section">

          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <div><span>Check Our</span> <span className="description-title">Portfolio</span></div>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">

            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

              <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
                <li data-filter="*" className="filter-active">
                  <i className="bi bi-grid-3x3"></i> All Projects
                </li>
                <li data-filter=".filter-ui">
                  <i className="bi bi-phone"></i> UI/UX
                </li>
                <li data-filter=".filter-development">
                  <i className="bi bi-code-slash"></i> Development
                </li>
                <li data-filter=".filter-photography">
                  <i className="bi bi-camera"></i> Photography
                </li>
                <li data-filter=".filter-marketing">
                  <i className="bi bi-graph-up"></i> Marketing
                </li>
              </ul>

              <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <Image src="/assets/img/portfolio/portfolio-1.webp" fill className="img-fluid" alt="" loading="lazy"/>
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">UI/UX Design</div>
                          <h3 className="entry-title">Mobile Banking App</h3>
                          <div className="entry-links">
                            <a href="/assets/img/portfolio/portfolio-1.webp" className="glightbox" data-gallery="portfolio-gallery-ui" data-glightbox="title: Mobile Banking App; description: Praesent commodo cursus magna, vel scelerisque nisl consectetur.">
                              <i className="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <Image src="/assets/img/portfolio/portfolio-10.webp" fill className="img-fluid" alt="" loading="lazy"/>
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">Development</div>
                          <h3 className="entry-title">E-Learning Platform</h3>
                          <div className="entry-links">
                            <a href="/assets/img/portfolio/portfolio-10.webp" className="glightbox" data-gallery="portfolio-gallery-development" data-glightbox="title: E-Learning Platform; description: Nulla vitae elit libero, a pharetra augue mollis interdum.">
                              <i className="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-photography">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <Image src="/assets/img/portfolio/portfolio-7.webp" fill className="img-fluid" alt="" loading="lazy"/>
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">Photography</div>
                          <h3 className="entry-title">Urban Architecture</h3>
                          <div className="entry-links">
                            <a href="/assets/img/portfolio/portfolio-7.webp" className="glightbox" data-gallery="portfolio-gallery-photography" data-glightbox="title: Urban Architecture; description: Sed ut perspiciatis unde omnis iste natus error sit voluptatem.">
                              <i className="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-marketing">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <Image src="/assets/img/portfolio/portfolio-4.webp" fill className="img-fluid" alt="" loading="lazy"/>
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">Marketing</div>
                          <h3 className="entry-title">Social Media Campaign</h3>
                          <div className="entry-links">
                            <a href="/assets/img/portfolio/portfolio-4.webp" className="glightbox" data-gallery="portfolio-gallery-marketing" data-glightbox="title: Social Media Campaign; description: Quis autem vel eum iure reprehenderit qui in ea voluptate.">
                              <i className="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <Image src="/assets/img/portfolio/portfolio-2.webp" fill className="img-fluid" alt="" loading="lazy"/>
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">UI/UX Design</div>
                          <h3 className="entry-title">Smart Home Interface</h3>
                          <div className="entry-links">
                            <a href="/assets/img/portfolio/portfolio-2.webp" className="glightbox" data-gallery="portfolio-gallery-ui" data-glightbox="title: Smart Home Interface; description: At vero eos et accusamus et iusto odio dignissimos ducimus.">
                              <i className="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <Image src="/assets/img/portfolio/portfolio-11.webp" fill className="img-fluid" alt="" loading="lazy"/>
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">Development</div>
                          <h3 className="entry-title">Cloud Management System</h3>
                          <div className="entry-links">
                            <a href="/assets/img/portfolio/portfolio-11.webp" className="glightbox" data-gallery="portfolio-gallery-development" data-glightbox="title: Cloud Management System; description: Temporibus autem quibusdam et aut officiis debitis.">
                              <i className="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-photography">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <Image src="/assets/img/portfolio/portfolio-8.webp" fill className="img-fluid" alt="" loading="lazy"/>
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">Photography</div>
                          <h3 className="entry-title">Nature Collection</h3>
                          <div className="entry-links">
                            <a href="/assets/img/portfolio/portfolio-8.webp" className="glightbox" data-gallery="portfolio-gallery-photography" data-glightbox="title: Nature Collection; description: Integer posuere erat a ante venenatis dapibus posuere velit aliquet.">
                              <i className="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-marketing">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <Image src="/assets/img/portfolio/portfolio-5.webp" fill className="img-fluid" alt="" loading="lazy"/>
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">Marketing</div>
                          <h3 className="entry-title">Brand Strategy</h3>
                          <div className="entry-links">
                            <a href="/assets/img/portfolio/portfolio-5.webp" className="glightbox" data-gallery="portfolio-gallery-marketing" data-glightbox="title: Brand Strategy; description: Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.">
                              <i className="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* <!-- End Portfolio Item --> */}

              </div>
              {/* <!-- End Portfolio Container --> */}

            </div>

          </div>

        </section>
        {/* <!-- /Portfolio Section --> */}
        {/* <!-- Team Section --> */}
        <section id="team" className="team section light-background">

          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <div><span>Check Our</span> <span className="description-title">Team</span></div>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="team-member d-flex">
                  <div className="member-img">
                    <Image src="/assets/img/person/person-m-7.webp" width={200} height={200} className="img-fluid" alt="" loading="lazy"/>
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
                    <div className="social">
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                      <a href=""><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="team-member d-flex">
                  <div className="member-img">
                    <Image src="/assets/img/person/person-f-8.webp" width={200} height={200} className="img-fluid" alt="" loading="lazy"/>
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
                    <div className="social">
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                      <a href=""><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="team-member d-flex">
                  <div className="member-img">
                    <Image src="/assets/img/person/person-m-6.webp" width={200} height={200} className="img-fluid" alt="" loading="lazy"/>
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
                    <div className="social">
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                      <a href=""><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="team-member d-flex">
                  <div className="member-img">
                    <Image src="/assets/img/person/person-f-4.webp" width={200} height={200} className="img-fluid" alt="" loading="lazy"/>
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p>
                    <div className="social">
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                      <a href=""><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
                <div className="team-member d-flex">
                  <div className="member-img">
                    <Image src="/assets/img/person/person-m-12.webp" width={200} height={200} className="img-fluid" alt="" loading="lazy"/>
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Brian Doe</h4>
                    <span>Marketing</span>
                    <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p>
                    <div className="social">
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                      <a href=""><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
                <div className="team-member d-flex">
                  <div className="member-img">
                    <Image src="/assets/img/person/person-f-9.webp" width={200} height={200} className="img-fluid" alt="" loading="lazy"/>
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Josepha Palas</h4>
                    <span>Operation</span>
                    <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p>
                    <div className="social">
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                      <a href=""><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

            </div>

          </div>

        </section>
        {/* <!-- /Team Section --> */}
        {/* <!-- Contact Section --> */}
        <section id="contact" className="contact section">

          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <div><span>Let's</span> <span className="description-title">Connect</span></div>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            {/* <!-- Contact Info Boxes --> */}
            <div className="row gy-4 mb-5">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4>Our Address</h4>
                    <p>1842 Maple Avenue, Portland, Oregon 97204</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h4>Email Address</h4>
                    <p>goldlucky0810@gmail.com</p>
                    <p>keremeir20@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-headset"></i>
                  </div>
                  <div className="info-content">
                    <h4>Hours of Operation</h4>
                    <p>Sunday-Fri: 9 AM - 6 PM</p>
                    <p>Saturday: 9 AM - 4 PM</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* <!-- Google Maps (Full Width) --> */}
          <div className="map-section" data-aos="fade-up" data-aos-delay="200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* <!-- Contact Form Section (Overlapping) --> */}
          <div className="container form-container-overlap">
            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
              <div className="col-lg-10">
                <div className="contact-form-wrapper">
                  <h2 className="text-center mb-4">Get in Touch</h2>

                  <form onSubmit={handleSubmit} className="php-email-form">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-person"></i>
                            <input type="text" className="form-control" name="name" placeholder="First Name" value={formData.name} onChange={handleChange} required/>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-envelope"></i>
                            <input type="email" className="form-control" name="email" placeholder="Email Address"  value={formData.email} onChange={handleChange} required/>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-text-left"></i>
                            <input type="text" className="form-control" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required/>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-chat-dots message-icon"></i>
                            <textarea className="form-control" name="message" placeholder="Write Message..." style={{height: '180px'}} value={formData.message} onChange={handleChange} required/>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      </div>

                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary btn-submit">SEND MESSAGE</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>

        </section>
        {/* <!-- /Contact Section --> */}
      </main>
    </div>

  )
}
