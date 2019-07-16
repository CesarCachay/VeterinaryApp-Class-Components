import React from "react";
import Reservations from "./Reservations";

const ListAppointments = ({ appointments, deleteAppointment }) => {
  return (
    <div className="card mt-2 py-5">
      <div className="card-title text-center">
        <h2 className="card-title text-center">Manage the appointments here</h2>
      </div>
      <div className="lista-citas">
        {appointments.map(appointment => {
          return (
            <Reservations
              key={appointment.id}
              appointment={appointment}
              deleteAppointment={deleteAppointment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListAppointments;
