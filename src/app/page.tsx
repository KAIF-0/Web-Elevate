'use client'
import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Star, ChevronRight, ChevronLeft, Instagram } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const handleScroll = () => {
      revealRefs.current.forEach((ref) => {
        if (ref) {
          const top = ref.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (top < windowHeight * 0.85) {
            ref.classList.add('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const features = [
    {
      title: "Stunning Design",
      description: "Transform your Instagram aesthetic into a captivating website with our custom designs.",
      icon: "✨"
    },
    {
      title: "Fast Development",
      description: "Get your website up and running in just 7-10 business days.",
      icon: "⚡"
    },
    {
      title: "Mobile Responsive",
      description: "Your website will look amazing on all devices, just like your Instagram.",
      icon: "📱"
    },
    {
      title: "SEO Optimized",
      description: "Rank higher in search results and attract more visitors to your website.",
      icon: "🔍"
    },
    {
      title: "Content Integration",
      description: "Seamlessly integrate your Instagram content into your new website.",
      icon: "🔄"
    },
    {
      title: "Ongoing Support",
      description: "We're here to help you with any updates or changes you need.",
      icon: "🛠️"
    }
  ];

  const projects = [
    {
      title: "Fashion Influencer",
      description: "Transformed an Instagram fashion page into a full e-commerce website.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "E-commerce"
    },
    {
      title: "Food Blogger",
      description: "Created a recipe website with search functionality from a food Instagram page.",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
      category: "Blog"
    },
    {
      title: "Travel Photographer",
      description: "Built a portfolio website showcasing travel photography and booking services.",
      image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      category: "Portfolio"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Influencer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      quote: "InstaWeb transformed my Instagram page into a stunning website that perfectly captures my brand. My engagement and sales have increased by 40% since launch!"
    },
    {
      name: "Michael Chen",
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      quote: "The team at InstaWeb understood exactly what I needed. They created a website that showcases my recipes beautifully and is incredibly easy to navigate."
    },
    {
      name: "Elena Rodriguez",
      role: "Travel Photographer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      quote: "I was blown away by the quality and speed of InstaWeb's service. My portfolio website looks incredible and I've already booked several new clients through it!"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: 499,
      description: "Perfect for personal Instagram pages",
      features: [
        "Instagram Content Integration",
        "Responsive Design",
        "Contact Form",
        "Basic SEO Setup",
        "1 Revision Round"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: 999,
      description: "Ideal for influencers and content creators",
      features: [
        "Everything in Basic",
        "Custom Design",
        "Blog Section",
        "Newsletter Integration",
        "Social Media Feed",
        "3 Revision Rounds",
        "1 Month Support"
      ],
      popular: true
    },
    {
      name: "Business",
      price: 1999,
      description: "For professional brands and businesses",
      features: [
        "Everything in Premium",
        "E-commerce Integration",
        "Advanced SEO",
        "Content Management System",
        "Booking/Appointment System",
        "Unlimited Revisions",
        "3 Months Support"
      ],
      popular: false
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-pink-900/40 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,255,0.1),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 neon-text">
                Transform Your <span className="gradient-text">Instagram</span> Into A Stunning Website
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Take your Instagram presence to the next level with a custom-designed website that captures your unique style and expands your reach.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#pricing" className="btn-primary">
                  Get Started
                </a>
                <Link href="/projects" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 p-2 rounded-xl shadow-2xl border border-gray-700">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Instagram to Website Transformation" 
                  className="rounded-lg shadow-lg transform transition-all duration-500 hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg shadow-lg">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Service Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="reveal fade-bottom text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">Why Choose <span className="gradient-text">InstaWeb</span>?</h2>
            <p className="text-xl text-gray-300">
              We specialize in transforming Instagram pages into beautiful, functional websites that help you grow your brand and reach new audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                ref={addToRefs}
                className="reveal fade-bottom feature-card glass-card p-6 rounded-xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div ref={addToRefs} className="reveal fade-bottom mt-16 text-center">
            <Link href="/services" className="btn-primary inline-flex items-center">
              <span>Explore All Services</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900 bg-opacity-60 relative">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="reveal fade-bottom max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">See How It <span className="gradient-text">Works</span></h2>
            <p className="text-xl text-gray-300">
              Watch our quick overview of how we transform your Instagram page into a stunning website.
            </p>
          </div>

          <div ref={addToRefs} className="reveal fade-bottom relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30"></div>
            <div className="relative aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-xl text-gray-400 mb-4">Video placeholder - In a real implementation, this would be an embedded video player showing the Instagram to website transformation process.</p>
                <button className="btn-primary">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="reveal fade-bottom text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">Our <span className="gradient-text">Projects</span></h2>
            <p className="text-xl text-gray-300">
              Check out some of the amazing websites we've created from Instagram pages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                ref={addToRefs}
                className="reveal fade-bottom project-card glass-card rounded-xl overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Link href="/projects" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                    <span>View Project</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div ref={addToRefs} className="reveal fade-bottom mt-12 text-center">
            <Link href="/projects" className="btn-secondary inline-flex items-center">
              <span>View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 bg-opacity-60 relative">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="reveal fade-bottom text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">What Our <span className="gradient-text">Clients</span> Say</h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                ref={addToRefs}
                className="reveal fade-bottom testimonial-card"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="testimonial-card-inner h-full">
                  <div className="testimonial-card-front glass-card p-6 rounded-xl h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="relative mr-4">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse-slow"></div>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-gray-800 relative z-10"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-purple-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-yellow-500 flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                    </div>
                  </div>
                  <div className="testimonial-card-back glass-card p-6 rounded-xl h-full flex flex-col justify-center items-center text-center absolute inset-0">
                    <h3 className="text-xl font-semibold text-white mb-4">Want results like {testimonial.name}?</h3>
                    <p className="text-gray-300 mb-6">Let's transform your Instagram page into a stunning website!</p>
                    <a href="#pricing" className="btn-primary">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="reveal fade-bottom text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">Simple <span className="gradient-text">Pricing</span></h2>
            <p className="text-xl text-gray-300">
              Choose the perfect plan for your needs. All plans include a custom design and responsive layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                ref={addToRefs}
                className={`reveal fade-bottom pricing-card glass-card rounded-xl overflow-hidden ${plan.popular ? 'popular border-2 border-transparent relative z-10' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400"> / one-time</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#" 
                    className={plan.popular ? "btn-primary w-full text-center" : "btn-secondary w-full text-center"}
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div ref={addToRefs} className="reveal fade-bottom mt-12 text-center">
            <p className="text-gray-400 mb-4">Need a custom solution? We've got you covered.</p>
            <Link href="/contact" className="btn-secondary inline-flex items-center">
              <span>Contact Us for Custom Quote</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/40 via-black/60 to-pink-900/40 relative">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="reveal fade-bottom max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">Ready to <span className="gradient-text">Transform</span> Your Instagram?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build a stunning website that takes your online presence to the next level.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="btn-primary">
                Get Started Now
              </a>
              <Link href="/contact" className="btn-secondary">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;