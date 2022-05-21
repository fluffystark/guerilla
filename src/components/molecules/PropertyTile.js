import * as React from "react";
import IconLocation from "../atoms/IconLocation";

const PropertyTile = ({ property }) => {

    return (
        <div className="property-tile">
            <div className="property-tile__image">
                <img
                    className="property-tile__image__inner"
                    src={property.image.url}
                    alt={`Property ${property.title}`}
                />
            </div>
            <div className="property-tile__content">
                <div className="property-tile__title">
                    {property.title}
                </div>
                <div className="property-tile__address">
                    <IconLocation />
                    <span className="property-tile__address__text">{property.address}</span>
                </div>
            </div>
        </div>
    );
};

export default PropertyTile;
