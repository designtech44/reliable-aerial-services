import React, { useState } from 'react';

function App() {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const services = [
    { name: 'Aerial Photography', price: 299, icon: '📸' },
    { name: 'Aerial Videography', price: 499, icon: '🎬' },
    { name: 'Real Estate Marketing', price: 399, icon: '🏠' },
    { name: 'Roof Inspections', price: 199, icon: '🔍' },
    { name: 'Mapping & Surveying', price: 599, icon: '🗺️' },
    { name: 'Event Coverage', price: 799, icon: '🎉' }
  ];

  const handleBooking = (service) => {
    setSelectedService(service);
    setShowPayment(true);
  };

  const processPayment = () => {
    alert(`Booking ${selectedService.name} for $${selectedService.price}. We'll contact you to schedule!`);
    setShowPayment(false);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(45deg, #0056b3, #ff9900)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}>🚁</div>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0056b3' }}>
              Reliable Aerial Services
            </span>
          </div>
          
          <nav style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '2rem', alignItems: 'center' }}>
            <a href="#home" style={{ textDecoration: 'none', color: '#333', fontWeight: '600' }}>Home</a>
            <a href="#services" style={{ textDecoration: 'none', color: '#333', fontWeight: '600' }}>Services</a>
            <a href="#about" style={{ textDecoration: 'none', color: '#333', fontWeight: '600' }}>About</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#333', fontWeight: '600' }}>Contact</a>
            <button style={{
              background: 'linear-gradient(45deg, #ff9900, #ff7700)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>Get Quote</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0056b3, #ff9900)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '2rem', fontWeight: 'bold' }}>
            Professional Drone Services for Every Need
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', marginBottom: '2rem' }}>
            Reliable Aerial Services offers cutting-edge drone solutions for photography, videography, inspections, and more. Experience excellence from above.
          </p>
          <button style={{
            background: 'white',
            color: '#0056b3',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '25px',
            fontSize: '1.2rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>Explore Our Services</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '5rem 2rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: '#0056b3', marginBottom: '1rem', fontWeight: 'bold' }}>
              Our Services
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#666' }}>
              Professional drone services with transparent pricing and guaranteed results
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  background: 'linear-gradient(45deg, #0056b3, #ff9900)',
                  color: 'white',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    {service.name}
                  </h3>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>${service.price}</div>
                </div>
                
                <div style={{ padding: '2rem' }}>
                  <button
                    onClick={() => handleBooking(service)}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(45deg, #0056b3, #ff9900)',
                      color: 'white',
                      border: 'none',
                      padding: '15px',
                      borderRadius: '10px',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '5rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              height: '400px',
              background: 'linear-gradient(45deg, #0056b3, #ff9900)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '6rem'
            }}>🚁</div>
            
            <div>
              <h2 style={{ fontSize: '2.5rem', color: '#0056b3', marginBottom: '2rem', fontWeight: 'bold' }}>
                About Reliable Aerial Services
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Reliable Aerial Services is a solo-operated business run by me, Dean Dyer. I handle everything myself—from flying the drone to editing the final footage—because I believe great work is done with focus and care, not a big crew.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                I fly a DJI Air 2S drone for all my projects, capturing sharp, stable, professional-grade aerial imagery. For post-production, I use CapCut, allowing me to deliver clean, engaging videos and polished photos every time.
              </p>
              <button style={{
                background: 'linear-gradient(45deg, #ff9900, #ff7700)',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}>Contact Us Today</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '5rem 2rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: '#0056b3', marginBottom: '2rem', fontWeight: 'bold' }}>
            Get In Touch
          </h2>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>📧 dean@reliableaerialservice.com</p>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>📞 (770) 771-9212</p>
            <p style={{ fontSize: '1.2rem' }}>📍 3841 Meeting Street, Duluth, GA 30096</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '10px',
                fontSize: '1rem'
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '10px',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <textarea
            placeholder="Tell us about your project..."
            rows="5"
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid #ddd',
              borderRadius: '10px',
              fontSize: '1rem',
              margin: '2rem 0',
              resize: 'vertical'
            }}
          ></textarea>
          
          <button style={{
            background: 'linear-gradient(45deg, #0056b3, #ff9900)',
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            borderRadius: '25px',
            fontSize: '1.2rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>Send Message</button>
        </div>
      </section>

      {/* Payment Modal */}
      {showPayment && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '2rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '3rem',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#0056b3' }}>
              Book {selectedService?.name}
            </h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff9900', marginBottom: '2rem' }}>
              ${selectedService?.price}
            </p>
            
            <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
              <input
                type="text"
                placeholder="Card Number"
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid #ddd',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  marginBottom: '1rem'
                }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input
                  type="text"
                  placeholder="MM/YY"
                  style={{
                    padding: '15px',
                    border: '2px solid #ddd',
                    borderRadius: '10px',
                    fontSize: '1rem'
                  }}
                />
                <input
                  type="text"
                  placeholder="CVC"
                  style={{
                    padding: '15px',
                    border: '2px solid #ddd',
                    borderRadius: '10px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Name on Card"
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid #ddd',
                  borderRadius: '10px',
                  fontSize: '1rem'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setShowPayment(false)}
                style={{
                  flex: 1,
                  padding: '15px',
                  border: '2px solid #ddd',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  backgroundColor: 'white'
                }}
              >
                Cancel
              </button>
              <button
                onClick={processPayment}
                style={{
                  flex: 1,
                  background: 'linear-gradient(45deg, #0056b3, #ff9900)',
                  color: 'white',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#333', color: 'white', padding: '3rem 2rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff9900' }}>
          Reliable Aerial Services
        </h3>
        <p style={{ marginBottom: '2rem', color: '#ccc' }}>
          Professional drone services for photography, videography, inspections, mapping, and more.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <a href="https://www.facebook.com/dean.dyer/" style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#0056b3',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            fontSize: '1.2rem'
          }}>📘</a>
          <a href="https://www.instagram.com/reliableaerialservices/" style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#ff9900',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            fontSize: '1.2rem'
          }}>📷</a>
        </div>
        <p style={{ color: '#999' }}>&copy; 2025 Reliable Aerial Services. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
