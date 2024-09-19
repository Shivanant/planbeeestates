import "./../css/Products.css"

const Products=()=>{
    return(
        <div class="properties-section" id="Projects">
    <h2>Popular Properties</h2>
    <div class="properties-container">
        
    <div class="property-card">
            {/* <div class="property-badge for-sale">For Sale</div> */}
            <img src="houses/house1.jpg" alt="Property Image 1"></img>
            <div class="property-details">
                <h3>Comfortable Apartment in Palace</h3>
                <p>Popular Properties</p>
                <span class="price">From $20k</span>
            </div>
        </div><div class="property-card">
            <img src="houses/house1.jpg" alt="Property Image 1"></img>
            <div class="property-details">
                <h3>Comfortable Apartment in Palace</h3>
                <p>Popular Properties</p>
                <span class="price">From $20k</span>
            </div>
        </div>

        <div class="property-card">
            {/* <div class="property-badge for-rent">For Rent</div> */}
            <img src="houses/house2.jpg" alt="Property Image 2"></img>
            <div class="property-details">
                <h3>Comfortable Apartment in Palace</h3>
                <p>Popular Properties</p>
                <span class="price">$563/month</span>
            </div>
        </div>

        <div class="property-card">
            {/* <div class="property-badge for-sale">For Sale</div> */}
            <img src="houses/house3.jpg" alt="Property Image 3"></img>
            <div class="property-details">
                <h3>Comfortable Apartment in Palace</h3>
                <p>Popular Properties</p>
                <span class="price">From $20k</span>
            </div>
        </div>

    </div>
</div>
    )
}

export default Products;