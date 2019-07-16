import React, { Component } from "react";
import uuid from "uuid";

const initialState = {
  appointment: {
    patient: "",
    client: "",
    date: "",
    time: "",
    sympthoms: ""
  },
  error: false
};

class Appointment extends Component {
  state = { ...initialState };

  handleChange = e => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { patient, client, date, time, sympthoms } = this.state.appointment;
    if (
      patient === "" ||
      client === "" ||
      date === "" ||
      time === "" ||
      sympthoms === ""
    ) {
      this.setState({
        error: true
      });
      return;
    }

    const newAppointment = { ...this.state.appointment };
    newAppointment.id = uuid();

    this.props.createAppointment(newAppointment);

    this.setState({
      ...initialState
    });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Fill the form to create a new appointment
          </h2>

          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center ">
              All the inputs are required!
            </div>
          ) : null}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Patient
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Patient's name"
                  name="patient"
                  onChange={this.handleChange}
                  value={this.state.appointment.patient}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Client</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Client's name"
                  name="client"
                  onChange={this.handleChange}
                  value={this.state.appointment.client}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.appointment.date}
                />
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.appointment.time}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sympthoms
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  placeholder="Describe the signs of sickness please"
                  name="sympthoms"
                  onChange={this.handleChange}
                  value={this.state.appointment.sympthoms}
                />
              </div>
            </div>
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Add new appointment"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Appointment;
