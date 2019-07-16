import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Appointment from "./components/Appointment";
import ListAppointments from "./components/ListAppointments";

class App extends Component {
  state = {
    appointments: []
  };

  createAppointment = data => {
    const appointments = [...this.state.appointments, data];

    this.setState({
      appointments: appointments
    });
  };

  deleteAppointment = id => {
    const currentAppointments = [...this.state.appointments];

    // use the filter to delete the specific element of our array of appointments
    const appointments = currentAppointments.filter(
      appointment => appointment.id !== id
    );

    // Update the state after deleting the appointment we want
    this.setState({ appointments });
  };

  render() {
    return (
      <div className="container">
        <Header title="Administrador de Pacientes" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Appointment createAppointment={this.createAppointment} />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListAppointments
              appointments={this.state.appointments}
              deleteAppointment={this.deleteAppointment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
