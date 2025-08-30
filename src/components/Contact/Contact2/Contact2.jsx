import React, { useState } from "react";
import "./Contact2.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validation
  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "The Name field is required.";
    if (!formData.phone) errs.phone = "The Mobile Number field is required.";
    if (!formData.email) errs.email = "The Email ID field is required.";
    if (
      !formData.comments ||
      formData.comments.length < 10 ||
      formData.comments.length > 2000
    ) {
      errs.comments = "Comments must be 10 to 2000 characters.";
    }
    return errs;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contacts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (res.ok) {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", phone: "", email: "", comments: "" });
        } else {
          alert("❌ " + (data.error || "Something went wrong"));
        }
      } catch (error) {
        console.error(error);
        alert("❌ Failed to send message");
      } finally {
        setLoading(false);
      }
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      {/* Left Section - Form */}
      <div className="contact-form-section">
        <h2>💬 Get Instant Tax Help</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="comments"
              placeholder="Write your message..."
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
            {errors.comments && <span className="error">{errors.comments}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}{" "}
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>

      {/* Right Section - Info */}
      <div className="contact-info-section">
        <h3>📍 Contact Information</h3>
        <p>
          <i className="fas fa-map-marker-alt"></i> T6-802 Lake View Apartments Sector 48
          <br />
          Faridabad Haryana 121001
        </p>
        <p>
          <i className="fas fa-phone-alt"></i> +91 9582042440
        </p>
        <p>
          <i className="fas fa-envelope"></i> contact@fdesk.in
        </p>
      </div>
    </div>
  );
};

export default Contact;
