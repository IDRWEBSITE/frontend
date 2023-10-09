import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const newForm = new FormData();
    newForm.append("firstname", firstName);
    newForm.append("lastname", lastName);
    newForm.append("email", email);
    newForm.append("phoneno", phone);
    newForm.append("product", product);
    newForm.append("message", message);
    axios
      .post(``, newForm, config)
      .then((res) => {
        toast.success(res.data.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setProduct("");
        setMessage("");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="wrapper">
    <Navbar />
      <div className="heading">
        <h1>Contact Us</h1>
        <p>Any Questions or remarks? Just Write us a message!</p>
      </div>
      <div className="main-form">
        <div className="contact-form">
          <div className="contact-form-left">
            <div className="form-heading">
              <h2>Contact Information</h2>
              <p>Say Something to start a live chat!</p>
            </div>
            <div className="form-info">
              <div className="contact-no">
                <img src="" alt="" />
                <span>+10123456789</span>
              </div>
              <div className="mail-id">
                <img src="" alt="" />
                <span>demo@gmail.com</span>
              </div>
              <div className="address">
                <img src="" alt="" />
                Niet Incubator, Niet College,
                <br />
                Gauttam Buddh Nagar, Gr.Noida
              </div>
            </div>

            <div className="form-socials">
              <span>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </span>
            </div>
          </div>
          <div className="contact-form-right">
            <div className="inner-form">
              <form action="" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="firstName" className="">
                    First Name
                  </label>
                  <div>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      autoComplete="name"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="">
                    Last Name
                  </label>
                  <div>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      autoComplete="name"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="">
                    Email
                  </label>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="">
                    Phone Number
                  </label>
                  <div>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="products" className="">
                    Select Products?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="doot-mk-1"
                      id="product"
                      className=""
                    />
                    <input
                      type="radio"
                      name="general-inquiry"
                      id="product"
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="">
                    Message
                  </label>
                  <div>
                    <textarea
                      name="message"
                      id="message"
                      cols="1"
                      rows="1"
                      placeholder="write your message.."
                      vlaue={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className=""
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button type="submit" className="">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
