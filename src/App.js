import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Appointment from "./components/Appointment";

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

  render() {
    return (
      <div className="container">
        <Header title="Administrador de Pacientes" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Appointment createAppointment={this.createAppointment} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
