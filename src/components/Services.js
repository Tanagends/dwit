import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <img src={icon} alt={`${title} Icon`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;

