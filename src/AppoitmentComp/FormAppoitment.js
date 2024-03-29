import React, { useState } from "react";
import "./AppoitmentStyles.css";
import AppointmentsFormValidations from "../DynamicComponents/AppointmentsFormValidations";

function FormAppoitment({}) {
  const initialFormState = {
    name: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
    carModelMake: "",
    contactInfo: "",
    city: "",
    description: "",
  };
  const [values, setvalues] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleMessage() {
    try {
      const messageObj = {
        Name: values.name,
        C_Email_Id: values.email,
        Appointment_Date: values.appointmentDate,
        Appointment_Time: values.appointmentTime,
        Car_Model_Make: values.carModelMake,
        ContactNo: values.contactInfo,
        City: values.city,
        Description: values.description,
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageObj),
      };

      console.log(messageObj);

      const response = await fetch(
        "http://127.0.0.1:5000/appointment",
        requestOptions
      );
      const data = await response.json();

      if (!response.ok) {
        alert("Please Enter Data Correctly.");
        console.log("Appointment Not Registered");
      } else {
        alert("Thankyou for booking appointment");
        console.log("Appointment Registered Successfully");
        console.log(JSON.stringify(data));
        // Dispatch a custom event when the appointment is registered
        const event = new CustomEvent("newAppointment", { detail: data });
        window.dispatchEvent(event);
      }
    } catch (error) {
      console.error("Error during appointment registration:", error);
    }
    setIsSubmitted(true);
    setvalues(initialFormState);
  }

  /*============================values-entered handling=============================================*/
  function handlechange(e) {
    setvalues({ ...values, [e.target.name]: e.target.value });
  }

  /*=============================submitbutton handling==============================================*/
  async function handlesubmit(e) {
    e.preventDefault();

    console.log("handle submit called");

    const validationErrors = AppointmentsFormValidations(values);
    console.log("validationErrors");
    console.log(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Book appointment:", values.name, "and email:", values.email);
      handleMessage();
    } else {
      console.log("Fill form correctly");
      setErrors(validationErrors);
    }
  }

  return (
    <div className="mainbody">
      <div id="body">
        <form className="form2">
          <div className="content">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handlechange}
              />
            </label>
            {errors.name && <p className="red-color">{errors.name}</p>}

            <label>
              Email
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handlechange}
              />
            </label>
            {errors.email && <p className="red-color">{errors.email}</p>}

            <label>
              Appointment Date
              <input
                type="date"
                name="appointmentDate"
                value={values.appointmentDate}
                onChange={handlechange}
              />
            </label>
            <label>
              Appointment Time
              <input
                type="time"
                name="appointmentTime"
                value={values.appointmentTime}
                onChange={handlechange}
              />
            </label>

            <label className="form2_label">
              Car Model\Make
              <input
                type="text"
                name="carModelMake"
                value={values.carModelMake}
                onChange={handlechange}
              />
            </label>

            <label className="contact">
              Contact Info
              <input
                type="text"
                name="contactInfo"
                value={values.contactInfo}
                onChange={handlechange}
              />
            </label>

            <label className="city">
              City
              <input
                type="text"
                name="city"
                value={values.city}
                onChange={handlechange}
              />
            </label>

            <label className="description">Description</label>

            <textarea
              rows="6"
              name="description"
              value={values.description}
              onChange={handlechange}
            ></textarea>

            <button type="submit" onClick={handlesubmit}>
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormAppoitment;
