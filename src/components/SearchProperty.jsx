import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/Products.css"

function SearchProperty({category}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProperties, setFilteredProperties] = useState(propertyData);
    const [showMore, setShowMore] = useState({}); // State for show more/less
    const [selectedProperty, setSelectedProperty] = useState(null); // State for modal
    const navigate = useNavigate();
  return (
    <div className="properties-container">
        {propertyData.map((property) => (
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
      
    </div>
    );
  
};

export default SearchProperty