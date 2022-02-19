import React from "react";

function ClientProfile() {
  return (
    <div>
      <h1>ClientProfile</h1>
    </div>
  );
}

export default ClientProfile;

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      firstAddress: null,
      secondAddress: null,
      city: null,
      state: null,
      zipcode: null,
      errors: {
        firstName: "",
        lastName: "",
        firstAddress: "",
        secondAddress: "",
        city: "",
        state: "",
        zipcode: ""
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { info, value } = event.target;
    let errors = this.state.errors;

    switch (info) {
      case "firstName":
        errors.firstName = value.length > 50 ? "Maximum is 50 characters" : "";
        break;
      case "lastName":
        errors.lastName = value.length > 50 ? "Maximum is 50 characters" : "";
        break;
      case "firstAddress":
        errors.firstAddress =
          value.length > 100 ? "Maximum is 100 characters" : "";
        break;
      case "secondAddress":
        errors.secondAddress =
          value.length > 100 ? "Maximum is 100 characters" : "";
        break;
      case "city":
        errors.city = value.length > 100 ? "Maximum is 100 characters" : "";
        break;
      case "state":
        errors.state = value.length < 2 ? "Please select a state" : "";
        break;
      case "zipcode":
        if (value.length < 5) {
          errors.zipcode = "At least 5 characters required";
        } else if (value.length > 9) {
          errors.zipcode = "Maximum is 9 characters";
        }
        break;
      default:
        break;
    }
    this.setState({ errors, [info]: value }, () => console.log(this.state));
  };
}
