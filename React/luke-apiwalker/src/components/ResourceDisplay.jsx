import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ResourceDisplay = () => {
  const { resource, id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/${resource}/${id}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        setError(error.message);
      });
  }, [resource, id]);

  if (error) {
    return (
      <div>
        <p>These aren't the droids you're looking for</p>
        <img
          src="https://vignette.wikia.nocookie.net/starwars/images/3/32/BenHS-SWE.jpg/revision/latest?cb=20130313001012"
          alt="Obi-Wan Kenobi"
        />
      </div>
    );
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  const renderAttributes = () => {
    const attributes = [];

    if (resource === 'people') {
      attributes.push(
        { label: 'Name', value: data.name },
        { label: 'Height', value: data.height },
        { label: 'Mass', value: data.mass },
        { label: 'Hair Color', value: data.hair_color },
        { label: 'Skin Color', value: data.skin_color },
        { label: 'Eye Color', value: data.eye_color },
        { label: 'Birth Year', value: data.birth_year },
        { label: 'Gender', value: data.gender },
      );
    } else if (resource === 'planets') {
      attributes.push(
        { label: 'Name', value: data.name },
        { label: 'Climate', value: data.climate },
        { label: 'Terrain', value: data.terrain },
        { label: 'Surface Water', value: data.surface_water },
        { label: 'Population', value: data.population },
      );
    }

    return attributes.map(attr => (
      <p key={attr.label}><strong>{attr.label}:</strong> {String(attr.value)}</p>
    ));
  };

  return (
    <div>
      <h2>{resource.charAt(0).toUpperCase() + resource.slice(1)} Details</h2>
      {renderAttributes()}
    </div>
  );
};

export default ResourceDisplay;
