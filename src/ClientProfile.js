import React from "react";

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  return valid;
};

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
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
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
    this.setState({ errors, [name]: value }, () => console.log(this.state));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form - Creating Profile");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="clientProfile">
        <div className="form-wrapper">
          <h1>Client Profile Form </h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label>First Name: </label>
              <input
                type="text"
                name="fName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.firstName.length > 50 && (
                <span className="errMsg"> {errors.firstName} </span>
              )}
            </div>
            <div className="lastName">
              <label>Last Name: </label>
              <input
                type="text"
                name="lName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.lastName.length > 50 && (
                <span className="errMsg"> {errors.lastName} </span>
              )}
            </div>
            <div className="firstAddress">
              <label>Address 1: </label>
              <input
                type="text"
                name="address1"
                onChange={this.handleChange}
                noValidate
              />
              {errors.firstAddress.length > 50 && (
                <span className="errMsg"> {errors.firstAddress} </span>
              )}
            </div>
            <div className="firstName">
              <label>First Name: </label>
              <input
                type="text"
                name="fName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.firstName.length > 50 && (
                <span className="errMsg"> {errors.firstName} </span>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
