import React, { useState } from "react";
import "../css/Residential.css";
import { residentialPropertyData } from "../constants/residentialPropertyData"; // Updated import

function Recidential() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(residentialPropertyData); // Use residentialPropertyData
  const [showMore, setShowMore] = useState({});
  const [selectedProperty, setSelectedProperty] = useState(null);

  const toggleShowMore = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const openModal = (property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setFilteredProperties(residentialPropertyData); // Use residentialPropertyData
    } else {
      const filtered = residentialPropertyData.filter(
        (property) =>
          property.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          property.description
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
      );
      setFilteredProperties(filtered);
    }
  };

  return (
    <div>
      <div className="search-page">
        <input
          type="text"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="properties-container">
        {filteredProperties.map((property) => (
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
                      e.stopPropagation(); // Prevent modal from opening
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
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
    </div>
  );
}

export default Recidential;
