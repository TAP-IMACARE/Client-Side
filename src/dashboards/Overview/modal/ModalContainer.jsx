/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ModalContainer = ({ modal }) => {
  const navigate = useNavigate();
  return (
    <Modal
      isOpen={modal}
      // onRequestClose={() => setModal(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.40)",
          zIndex: "999",
          transition: "2000ms ease-in-out",
        },
        content: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "auto auto",
          maxWidth: "496px",
          height: "300px",
        },
      }}
    >
      <h5
        style={{
          color: "#005E5D",
          fontSize: "30px",
          fontWeight: "600",
          marginBottom: "25px",
        }}
      >
        Thank you for booking an appointment
      </h5>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        You’ll receive a notification when your appointment is confirmed.
      </p>
      {/* <Link to={"/dashboard"}>Overview</Link> */}
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "10px 30px",
          background: "#005E5D",
          borderRadius: "10px",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Overview
      </button>
    </Modal>
  );
};

export default ModalContainer;
