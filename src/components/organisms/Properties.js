import * as React from "react";
import Config from "../../constants/Config";
import { query } from "../../api/query";

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
            <h2>Properties</h2>
            <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
            <div>
                <select value={activeFilter} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Villa">Villa</option>
                </select>
            </div>
            {properties && properties.length > 0 && (
                openProperties.map((property) => {
                    return (
                        <div>
                            {property.title}
                        </div>
                    );
                })
            )}
            {pageNum < totalPages && (
                <button onClick={nextPage}>Load more</button>
            )}
        </div>
    );
};

export default Properties;
