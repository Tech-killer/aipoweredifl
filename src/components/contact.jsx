import React, { useState, useRef, useEffect } from 'react';
import { 
  PaperAirplaneIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState('');
  const formRef = useRef(null);

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'E-commerce Solution',
    'UI/UX Design',
    'Digital Marketing',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call with realistic delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Direct Call',
      subtitle: 'Speak with our team',
      value: '+91 801 094 6458',
      href: 'tel:+918010946458',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Available Mon-Fri, 9 AM - 6 PM IST'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      subtitle: 'Send us your inquiry',
      value: 'fashionpark.ec@gmail.com',
      href: 'mailto:fashionpark.ec@gmail.com',
      gradient: 'from-purple-500 to-pink-500',
      description: 'We respond within 2-4 hours'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Consultation',
      subtitle: 'Schedule a meeting',
      value: 'Book a Call',
      href: '#',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Free 30-minute strategy session'
    }
  ];

  const benefits = [
    {
      icon: SparklesIcon,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology and creative approaches'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Proven Track Record',
      description: '100+ successful projects delivered on time'
    },
    {
      icon: ClockIcon,
      title: 'Rapid Response',
      description: 'Quick turnaround times without compromising quality'
    }
  ];

  return (
    <section id="contact" className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-10"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Transform your vision into reality with our expert team. We're here to guide you through 
              every step of your digital journey with personalized solutions and unmatched expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
            {/* Enhanced Contact Form */}
            <div className="xl:col-span-2 space-y-8">
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <PaperAirplaneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Tell Us About Your Project</h3>
                    <p className="text-slate-400">Fill out the form below and we'll get back to you within 24 hours</p>
                  </div>
                </div>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">First Name *</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('firstName')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-4 bg-white/5 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.firstName 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : focusedField === 'firstName'
                                ? 'border-blue-500 focus:ring-blue-500/50 bg-white/10'
                                : 'border-white/20 hover:border-white/30'
                          }`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Last Name *</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('lastName')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-4 bg-white/5 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.lastName 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : focusedField === 'lastName'
                                ? 'border-blue-500 focus:ring-blue-500/50 bg-white/10'
                                : 'border-white/20 hover:border-white/30'
                          }`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Email and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-4 bg-white/5 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.email 
                            ? 'border-red-500 focus:ring-red-500/50' 
                            : focusedField === 'email'
                              ? 'border-blue-500 focus:ring-blue-500/50 bg-white/10'
                              : 'border-white/20 hover:border-white/30'
                        }`}
                        placeholder="your.email@company.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-4 bg-white/5 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          focusedField === 'company'
                            ? 'border-blue-500 focus:ring-blue-500/50 bg-white/10'
                            : 'border-white/20 hover:border-white/30'
                        }`}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  {/* Phone and Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-4 bg-white/5 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          focusedField === 'phone'
                            ? 'border-blue-500 focus:ring-blue-500/50 bg-white/10'
                            : 'border-white/20 hover:border-white/30'
                        }`}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Project Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('projectType')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-4 bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                          focusedField === 'projectType'
                            ? 'border-blue-500 focus:ring-blue-500/50 bg-white/10'
                            : 'border-white/20 hover:border-white/30'
                        }`}
                      >
                        <option value="" className="bg-slate-800">Select project type</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type} className="bg-slate-800">{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Project Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-4 bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                        focusedField === 'budget'
                          ? 'border-blue-500 focus:ring-blue-500/50 bg-white/10'
                          : 'border-white/20 hover:border-white/30'
                      }`}
                    >
                      <option value="" className="bg-slate-800">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range} className="bg-slate-800">{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      rows="5"
                      className={`w-full px-4 py-4 bg-white/5 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:ring-red-500/50' 
                          : focusedField === 'message'
                            ? 'border-blue-500 focus:ring-blue-500/50 bg-white/10'
                            : 'border-white/20 hover:border-white/30'
                      }`}
                      placeholder="Tell us about your project goals, timeline, specific requirements, and any other details that would help us understand your needs better..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                    )}
                    <p className="text-slate-500 text-sm">
                      {formData.message.length}/500 characters
                    </p>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                        Processing Your Request...
                      </div>
                    ) : isSubmitted ? (
                      <div className="flex items-center justify-center">
                        <CheckCircleIcon className="w-6 h-6 mr-3" />
                        Message Sent Successfully!
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <PaperAirplaneIcon className="w-5 h-5 mr-3" />
                        Send Project Inquiry
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Enhanced Contact Information */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="block bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1">{method.title}</h4>
                        <p className="text-slate-400 text-sm mb-2">{method.subtitle}</p>
                        <p className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                          {method.value}
                        </p>
                        <p className="text-slate-500 text-xs mt-1">{method.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                <h4 className="text-white font-bold text-lg mb-4 flex items-center">
                  <SparklesIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Why Partner With Us?
                </h4>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h5 className="text-white font-medium text-sm">{benefit.title}</h5>
                        <p className="text-slate-400 text-xs">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30">
                <div className="flex items-center mb-3">
                  <ClockIcon className="w-5 h-5 text-green-400 mr-2" />
                  <h4 className="text-white font-semibold">Response Guarantee</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We guarantee a response within <span className="text-green-400 font-semibold">24 hours</span> for all inquiries. 
                  For urgent projects, we typically respond within <span className="text-green-400 font-semibold">2-4 hours</span> 
                  during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
