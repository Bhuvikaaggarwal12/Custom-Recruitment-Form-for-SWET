import React from "react";

const SocialMediaForm = () => {
  return (
    <div style={{ backgroundColor: "#ffe6e6", padding: "20px", borderRadius: "10px", maxWidth: "700px", margin: "auto" }}>
      <h4 style={{ color: "#d44", marginBottom: "10px" }}>Section 9 of 13</h4>

      <div style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "20px", marginBottom: "20px" }}>
        <h2>SOCIAL MEDIA</h2>
        <ul style={{ lineHeight: "1.8" }}>
           <li>Develop social media strategies aligned with business goals.</li>
          <li>Create and curate engaging content tailored to each platform.</li>
          <li>Manage online communities and engage with followers.</li>
          <li>Run and optimize social media advertising campaigns.</li>
          <li>Track, analyze, and report on social media performance.</li>
          <li>Stay up-to-date on social media trends and best practices.</li>
        </ul>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label><span role="img" aria-label="skills">🤳</span> <strong>Skill Sets You Bring In:</strong> <span style={{ color: "red" }}>*</span></label>
        <textarea rows="4" style={textareaStyle} placeholder="Long answer text"></textarea>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label><span role="img" aria-label="experience">📁</span> <strong>Previous Experience:</strong> <span style={{ color: "red" }}>*</span></label>
        <textarea rows="4" style={textareaStyle} placeholder="Long answer text"></textarea>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label><span role="img" aria-label="referral">🧾</span> <strong>Referral Name:</strong></label>
        <input type="text" style={inputStyle} placeholder="Short answer text" />
      </div>
    </div>
  );
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginTop: "8px",
  fontSize: "14px"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginTop: "8px",
  fontSize: "14px"
};

export default SocialMediaForm;


