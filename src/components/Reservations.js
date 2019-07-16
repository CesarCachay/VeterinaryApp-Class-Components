import React from "react";

const Reservations = ({ appointment, deleteAppointment }) => {
  return (
    <div className="media mt-3">
      <div className="media-body">
        <h3 className="mt-0">{appointment.patient}</h3>
        <p className="card-text">
          <span>Client Name: </span>
          {appointment.client}
        </p>
        <p className="card-text">
          <span>Date: </span>
          {appointment.date}
        </p>
        <p className="card-text">
          <span>Time: </span>
          {appointment.time}
        </p>
        <p className="card-text">
          <span>Sympthoms: </span>{" "}
        </p>
        <p className="card-text">{appointment.sympthoms}</p>

        <button
          className="btn btn-danger"
          onClick={() => deleteAppointment(appointment.id)}
        >
          Delete &times;
        </button>
      </div>
    </div>
  );
};

export default Reservations;
