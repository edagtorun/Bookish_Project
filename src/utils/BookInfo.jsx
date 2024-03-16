import React from "react";

const BookInfo = ({ label, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-secondary me-3">{label} </span>
      <span>{value}</span>
    </p>
  );
};

export default BookInfo;
