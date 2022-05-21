import * as React from "react";
import Config from "../../constants/Config";
import { query } from "../../api/query";
import PropertyTile from "../molecules/PropertyTile";
import Select from "../atoms/Select";

const Properties = ({ memberships, type, isLoading }) => {
    const PER_PAGE = 3;

    const [properties, setProperties] = React.useState([]);
    const [pageNum, setPageNum] = React.useState(1);
    const [activeFilter, setActiveFilter] = React.useState("");

    const filteredProperties = activeFilter ? properties.filter((property) => property.category === activeFilter) : properties;
    const openProperties = filteredProperties.slice(0, PER_PAGE * pageNum);
    const totalPages = filteredProperties.length / PER_PAGE;

    const nextPage = () => {
        setPageNum(pageNum + 1);
    };

    const handleChange = (e) => {
        setActiveFilter(e.target.value);
    }

    React.useEffect(() => {
        window
          .fetch(`https://graphql.contentful.com/content/v1/spaces/vyvd54sdd5jm`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Config.accessToken}`,
            },
            body: JSON.stringify({ query }),
          })
          .then((response) => response.json())
          .then(({ data, errors }) => {
            if (errors) {
              console.error(errors);
            }

            setProperties(data.propertyCollection.items);
          });
    }, []);

    return (
        <div className="properties">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="properties__title">Properties</h2>
                        <p className="properties__desc">Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                        <div className="row properties__filter">
                            <div className="col-xs-12">
                                <div className="properties__filter__inner">
                                    <Select
                                        className="properties__filter__input"
                                        value={activeFilter}
                                        onChange={handleChange}
                                    >
                                        <option value="">All categories</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="House">House</option>
                                        <option value="Penthouse">Penthouse</option>
                                        <option value="Villa">Villa</option>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {properties && properties.length > 0 && (
                                openProperties.map((property) => {
                                    return (
                                        <div className="col-xs-12 col-md-4">
                                            <PropertyTile
                                                key={property.id}
                                                property={property}
                                            />
                                        </div>
                                    );
                                })
                            )}
                        </div>
                        <div className="row">
                            {pageNum < totalPages && (
                                <button
                                    aria-label="Next Page"
                                    className="properties__pagination button button-primary"
                                    onClick={nextPage}
                                >
                                    Load more
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Properties;
