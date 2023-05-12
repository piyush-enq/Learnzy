import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = ({ heading, subheading, body }) => {
  return (
    <div className="card">
      <h2 className="card-heading">{heading}</h2>
      <h3 className="card-subheading">{subheading}</h3>
      <p className="card-body">{body}</p>
    </div>
  );
};

const CardWebsite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/assign')
      .then((response) => {
        // Handle the response data here
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  }, []);

  return (
    <div className="card-website">
      {Array.isArray(data) &&
        data.map((card) => (
          <Card key={card._id} heading={card.subject} subheading={card.topic} body={card.body} />
        ))}
    </div>
  );
};

export default CardWebsite; 
