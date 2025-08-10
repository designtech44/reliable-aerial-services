import React, { useState, useEffect } from 'react';
import { Camera, Video, Home, Search, Map, Calendar, Phone, Mail, MapPin, Menu, X, Star, CheckCircle } from 'lucide-react';

const ReliableAerialServices = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // Gallery images - you can replace these URLs with actual drone footage
  const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400', title: 'Aerial Photography', category: 'photography' },
    { id: 2, url: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400', title: 'Real Estate', category: 'realestate' },
    { id: 3, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400', title: 'Nature Views', category: 'nature' },
    { id: 4, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', title: 'Construction Site', category: 'construction' },
    { id: 5, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400', title: 'Landscape', category: 'nature' },
    { id: 6, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', title: 'Industrial', category: 'commercial' },
    { id: 7, url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400', title: 'Sunset Aerial', category: 'photography' },
    { id: 8, url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400', title: 'City Skyline', category: 'commercial' },
    { id: 9, url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400', title: 'Coastline', category: 'nature' },
    { id: 10, url: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400', title: 'Highway', category: 'commercial' },
    { id: 11, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400', title: 'Forest', category: 'nature' },
    { id: 12, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', title: 'Beach House', category: 'realestate' }
  ];

  const services = [
    {
      id: 'aerial-photography',
      title: 'Aerial Photography',
      price: 299,
      icon: <Camera className="w-12 h-12" />,
      description: 'High-resolution aerial images for real estate, construction, events, and more.',
      features: ['4K Resolution', 'RAW Format', 'Multiple Angles', 'Quick Turnaround']
    },
    {
      id: 'aerial-videography',
      title: 'Aerial Videography',
      price: 499,
      icon: <Video className="w-12 h-12" />,
      description: 'Cinematic aerial footage for films, commercials, events, and promotional content.',
      features: ['4K Video', 'Stabilized Footage', 'Color Correction', 'Music & Effects']
    },
    {
      id: 'real-estate',
      title: 'Real Estate Marketing',
      price: 399,
      icon: <Home className="w-12 h-12" />,
      description: 'Showcase properties with stunning aerial photos and videos.',
      features: ['Photo + Video Package', 'Twilight Shots', 'Virtual Tour Ready', 'Same Day Delivery']
    },
    {
      id: 'roof-inspection',
      title: 'Roof Inspections',
      price: 199,
      icon: <Search className="w-12 h-12" />,
      description: 'Detailed aerial inspections for insurance claims and maintenance planning.',
      features: ['Detailed Report', 'HD Images', 'Insurance Ready', 'Damage Assessment']
    },
    {
      id: 'mapping',
      title: 'Mapping & Surveying',
      price: 599,
      icon: <Map className="w-12 h-12" />,
      description: 'Precise aerial mapping and surveying for construction and development.',
      features: ['GPS Coordinates', 'CAD Compatible', 'Progress Tracking', 'Topographical Data']
    },
    {
      id: 'events',
      title: 'Event Coverage',
      price: 799,
      icon: <Calendar className="w-12 h-12" />,
      description: 'Capture special events from unique aerial perspectives.',
      features: ['Live Streaming', 'Multiple Angles', 'Highlight Reel', 'Social Media Ready']
    }
  ];

  // Stripe Payment Integration (demo)
  const handlePayment = async (service) => {
    setSelectedService(service);
    setShowPaymentModal(true);
  };

  const processPayment = async () => {
    // In production, integrate with Stripe
    alert(`Payment processing for ${selectedService.title} - $${selectedService.price}`);
    setShowPaymentModal(false);
  };

  // Header component
  const Header = () => (
    <header className="fixed w-full top-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
              🚁
            </div>
            <span className="text-xl font-bold text-blue-600">Reliable Aerial Services</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );

  // Hero section
  const Hero = () => (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-orange-500 flex items-center justify-center text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Professional Drone Services for Every Need
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Reliable Aerial Services offers cutting-edge drone solutions for photography, videography, inspections, and more. Experience excellence from above.
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all">
          Explore Our Services
        </button>
      </div>
    </section>
  );

  // Services section with pricing
  const Services = () => (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional drone services with transparent pricing and guaranteed results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-8 text-white text-center">
                {service.icon}
                <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                <div className="text-3xl font-bold mt-2">${service.price}</div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => handlePayment(service)}
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // About section
  const About = () => (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-96 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center text-white text-6xl">
            🚁
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-6">About Reliable Aerial Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Reliable Aerial Services is a solo-operated business run by me, Dean Dyer. I handle everything myself—from flying the drone to editing the final footage—because I believe great work is done with focus and care, not a big crew.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I fly a DJI Air 2S drone for all my projects, capturing sharp, stable, professional-grade aerial imagery. For post-production, I use CapCut, allowing me to deliver clean, engaging videos and polished photos every time.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a homeowner needing a detailed roof inspection, a realtor looking to market a property from the sky, or a business wanting high-quality aerial footage—I'm here to help.
            </p>
            
            <div className="flex items-center gap-6">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold">
                Contact Us Today
              </button>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-2">
                  DD
                </div>
                <p className="text-sm font-semibold text-blue-600">Dean Dyer<br/>Owner & Pilot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Enhanced Gallery with lightbox
  const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all');

    const filteredImages = filter === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === filter);

    return (
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Portfolio Gallery</h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our recent work and see the quality of our aerial photography and videography services
            </p>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['all', 'photography', 'realestate', 'nature', 'construction', 'commercial'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    filter === cat 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-blue-100'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="aspect-square bg-cover bg-center rounded-lg cursor-pointer hover:scale-105 transition-transform"
                style={{ backgroundImage: `url(${image.url})` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="w-full h-full bg-black/20 hover:bg-black/40 transition-colors rounded-lg flex items-end p-4">
                  <span className="text-white font-semibold">{image.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300"
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  // Contact section with booking system
  const Contact = () => {
    const [contactData, setContactData] = useState({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    const handleContactSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      setContactData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to elevate your project? Contact us for a free consultation and quote.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>dean@reliableaerialservice.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>(770) 771-9212</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>3841 Meeting Street, Duluth, GA 30096</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold text-blue-600 mb-4">Operating Hours</h4>
                <div className="space-y-2">
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 3:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={contactData.name}
                    onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={contactData.email}
                    onChange={(e) => setContactData({...contactData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={contactData.phone}
                    onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(770) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
                  <select
                    value={contactData.service}
                    onChange={(e) => setContactData({...contactData, service: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={contactData.message}
                    onChange={(e) => setContactData({...contactData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project and any specific requirements..."
                  ></textarea>
                </div>
                
                <button
                  onClick={handleContactSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Payment Modal
  const PaymentModal = () => {
    if (!showPaymentModal) return null;

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-blue-600">Book {selectedService.title}</h3>
            <p className="text-3xl font-bold text-orange-500 mt-2">${selectedService.price}</p>
          </div>
          
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="px-4 py-3 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="CVC"
                className="px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>
            <input
              type="text"
              placeholder="Name on Card"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={processPayment}
              className="flex-1 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Reliable Aerial Services</h3>
            <p className="text-gray-300 mb-4">
              Professional drone services for photography, videography, inspections, mapping, and more.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/dean.dyer/" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">📘</a>
              <a href="https://www.instagram.com/reliableaerialservices/" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700">📷</a>
              <a href="https://www.linkedin.com/in/dean-dyer/" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900">💼</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              {services.map((service) => (
                <li key={service.id}><a href="#services" className="hover:text-white">{service.title}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe for updates and special offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg"
              />
              <button className="bg-orange-500 px-6 py-2 rounded-r-lg hover:bg-orange-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Reliable Aerial Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <PaymentModal />
    </div>
  );
};

export default ReliableAerialServices;
