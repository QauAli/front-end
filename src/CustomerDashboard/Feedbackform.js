import React, { useState } from "react";
import "./Feedbackform.css";
import arrays from "../variables/globals";

function Feedbackform() {
  const [feedback, setfeedback] = useState("");
  const [formVisible, setFormVisible] = useState(true);
  const initialFormState = {
    feedback: "",
  };
  const [values, setvalues] = useState(initialFormState);
  const handlefeedback = (event) => {
    setfeedback(event.target.value);
    setvalues(initialFormState);
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    if (!feedback.trim()) {
      alert("Feedback cannot be empty!");
      return;
    }
    console.log("Submit button clicked");

    const email = arrays.email; // Assuming  the user's email stored in array

    const data = {
      C_Email_Id: email,
      Feedback: feedback,
    };

    fetch("http://127.0.0.1:5000/feedback", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit feedback");
        }
        return response.json();
      })
      .then((responseData) => {
        alert(responseData.message);
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error.message);
        alert("Failed to submit feedback");
      });
    setfeedback("");
    
  };
  const handleRefresh = () => {
    // Clear feedback input when cancel button is clicked
    setfeedback("");
  };

  const handleCancel = () => {
    setFormVisible(false); // Hide the form when cancel button is clicked
  };

  return (
    <div className={`feedbackform ${formVisible ? "visible" : "hidden"}`}>
      
      <form onSubmit={handlesubmit}>
      
        <div className="form-container">
        <h1>Feedback Form</h1>
          <textarea
            className="feedbackarea"
            placeholder="Type Feedback"
            rows="20"
            value={feedback}
            onChange={handlefeedback}
          ></textarea>
          <div>
            <button type="submit" className="feedback_button">
              Send Feedback
            </button>
            <button
              type="button"
              className="feedback_button"
              onClick={handleRefresh}
            >
              Refresh
            </button>
            <button
              type="button"
              className="feedback_cancel_button"
              onClick={handleCancel}
            >
              Cancle
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Feedbackform;
