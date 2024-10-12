import React, { useState } from "react";
import "./../css/Products.css";
import { propertyData } from "../constants/propertyData";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [showMore, setShowMore] = useState({}); // State for show more/less for description
  const [selectedProperty, setSelectedProperty] = useState(null); // State for modal
  const [visibleProperties, setVisibleProperties] = useState(4); // Initially show 4 properties
  const navigate = useNavigate();

  // Toggle description show more/less
  const toggleShowMore = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle showMore state for each property
    }));
  };

  const openModal = (property) => {
    setSelectedProperty(property); // Set selected property to show in the modal
  };

  const closeModal = () => {
    setSelectedProperty(null); // Close modal
  };

  const handleShowMoreClick = () => {
    setVisibleProperties((prev) => prev + 4); // Show 4 more properties on each click
  };

  const handleNavigate = () => {
    navigate(`/residential`, { replace: true });
  };

  return (
    <div className="properties-section" id="Projects">
      <h2>Popular Properties</h2>
      <div className="properties-container">
        {propertyData.slice(0, visibleProperties).map((property) => (
          <div
            className="property-card"
            key={property.id}
            onClick={() => openModal(property)}
          >
            <img src={property.image} alt={`Property Image ${property.id}`} />
            <div className="property-details">
              <h3>{property.name}</h3>
              <p>
                {showMore[property.id]
                  ? property.description
                  : `${property.description.substring(0, 80)}...`}{" "}
                {property.description.length > 80 && (
                  <span
                    className="show-more-toggle"
                    onClick={(e) => {
                      e.stopPropagation(); // Stop event bubbling
                      toggleShowMore(property.id);
                    }}
                    style={{ color: "#2a9d8f", cursor: "pointer" }}
                  >
                    {showMore[property.id] ? "Show Less" : "Show More"}
                  </span>
                )}
              </p>
              <span className="price">{property.price}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedProperty && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
            <img src={selectedProperty.image} alt={selectedProperty.name} />
            <h2>{selectedProperty.name}</h2>
            <p>{selectedProperty.description}</p>
            <span className="price">{selectedProperty.price}</span>
          </div>
        </div>
      )}

      {visibleProperties < propertyData.length && (
        <div className="show-more-btn-container">
          <button className="btn" onClick={handleShowMoreClick}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
