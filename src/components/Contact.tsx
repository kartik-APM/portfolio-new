import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { KARTIK_ADDRESS, KARTIK_EMAIL, KARTIK_PHONE_NO } from "../personalDetails/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white ">
      <div className="container mx-auto px-6 py-6">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600" />
                <span>{KARTIK_EMAIL}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600" />
                <span>{KARTIK_PHONE_NO}</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-600" />
                <span>{KARTIK_ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            name="contact"
            className="space-y-6"
            action="/success"
            method="post"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;