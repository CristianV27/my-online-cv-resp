import React from "react";
import "./Contact.css";
import pic from "../../images/contact.jpg";
import { Button } from "../../components/Button/Button"

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      selectService: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.resetForm();

    // fetch("http://localhost:3000/contact", {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     if (response.status === "success") {
    //       alert("Message Sent.");
    //       this.resetForm();
    //     } else if (response.status === "fail") {
    //       alert("Message failed to send.");
    //     }
    //   });
  }
  // nu mai e nevoie de ".bind(this)"
  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(this.state);
  //     this.resetForm();
  //   }

  resetForm() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      selectService: "",
      message: "",
    });
  }

  render() {
    return (
      <div className="contact-container">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="contact-form-div">
            <input
              type="text"
              className="contact-form-text-input"
              id="firstName"
              value={this.state.firstName}
              onChange={this.onFirstNameChange.bind(this)}
            />
            <label htmlFor="name">First Name</label>

            <input
              type="text"
              className="contact-form-text-input"
              id="lastName"
              value={this.state.lastName}
              onChange={this.onLastNameChange.bind(this)}
            />
            <label htmlFor="name">Last Name</label>
          </div>

          <div className="contact-form-div">
            <select
              className="contact-form-text-input"
              name="service"
              id="service"
              onChange={this.onSelectService.bind(this)}
            >
              <option selected disabled>
                Need a service?
              </option>
              <option value="Photography">Photography</option>
              <option value="Dancing Shows">Dancing Shows</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Layout Design">Layout Design</option>
              <option value="Logo Design">Logo Design</option>
              <option value="Photo Retouching">Photo Retouching</option>
              <option value="Drawings">Drawings</option>
            </select>

            <input
              type="text"
              className="contact-form-text-input"
              id="telephone"
              value={this.state.telephone}
              onChange={this.onTelephoneChange.bind(this)}
            />
            <label htmlFor="telephone">Telephone</label>

            <input
              type="email"
              className="contact-form-text-input"
              id="email"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
            <label htmlFor="exampleInputEmail1">Email address</label>
          </div>

          <textarea
            placeholder="Tell Me More..."
            className="contact-tellMeMore"
            rows="5"
            id="message"
            value={this.state.message}
            onChange={this.onMessageChange.bind(this)}
          />

          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
          >
            SUBMIT
          </Button>

          <div className="contact-picture-container">
            <img src={pic} alt="contactPicture" />
            <div className="myContact">
              <p>Or contact me @ 0743 495 664</p>
              <p>Office: Molnar Piuariu, nr 5</p>
              <p>Cluj Napoca, Romania</p>
            </div>
          </div>
        </form>
      </div>
    );
  }

  onFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  onLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onTelephoneChange(event) {
    this.setState({ telephone: event.target.value });
  }

  onSelectService(event) {
    this.setState({ selectService: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}
