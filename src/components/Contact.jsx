import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const whatsappNumber = "919576305811";
    const textMessage = `Hello, I'm ${name}.\nEmail: ${email}\n\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(textMessage);
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 z-10 bg-[#080808]">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-[#FFFFFF] mb-4 md:mb-6 leading-[1.2] lg:leading-[1.1]" style={{ fontFamily: '"Monument Extended", "Bebas Neue", sans-serif' }}>
            LET'S CREATE <br/><span className="text-[#C9A84C]">SOMETHING</span>
          </h2>
          <p className="text-[#F5E6C8] text-xs sm:text-sm mb-8 md:mb-10 max-w-md mx-auto lg:mx-0 font-light leading-relaxed tracking-wider uppercase">
            Available for freelance & collaborations
          </p>
          
          <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
            {[
              { icon: <Mail size={24} />, href: "mailto:hello@example.com" },
              { icon: <Instagram size={24} />, href: "https://www.instagram.com/editing_room_21?utm_source=qr&igsh=MXI5eDR4NTlsdTdwcw%3D%3D" },
              { icon: <Twitter size={24} />, href: "#" },
              { icon: <Youtube size={24} />, href: "https://www.youtube.com/@editingroom21" }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                className="w-12 h-12 flex items-center justify-center text-[#C9A84C] border border-transparent hover:border-[#C9A84C] hover:bg-[#111111] transition-all duration-300 transform hover:-translate-y-1 rounded-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-[#111111] p-6 sm:p-8 md:p-10 border border-[#333] flex flex-col space-y-6 lg:ml-8">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-[#999999] font-semibold">Name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className="bg-[#111111] border-b border-[#333] pb-2 text-[#FFFFFF] focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 placeholder-[#333] font-light"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#999999] font-semibold">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className="bg-[#111111] border-b border-[#333] pb-2 text-[#FFFFFF] focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 placeholder-[#333] font-light"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-[#999999] font-semibold">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                className="bg-[#111111] border-b border-[#333] pb-2 text-[#FFFFFF] focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 placeholder-[#333] font-light resize-none"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="mt-6 group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-[#080808] uppercase tracking-widest bg-[#C9A84C] border border-[#C9A84C] transition-all duration-300 hover:bg-[#080808] hover:text-[#C9A84C]"
            >
              <span className="flex items-center gap-3">
                Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
              </span>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
