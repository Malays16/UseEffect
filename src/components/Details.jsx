import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Details = ({ info }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUserUrl = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`;
    setLoading(true);
    fetch(apiUserUrl)
      .then(response => response.json())
      .then(data => {
          setDetails(data);
          setLoading(false);
      });
  }, [info]);

  if (loading) {
    return <span className="loader"></span>;
  }

  return (
    <div className="details">
      <img className="details-avatar" src={details.avatar} alt={details.name} />
      <h3 className="details-name">{details.name}</h3>
      <div className="details-item">City: {details.details.city}</div>
      <div className="details-item">Company: {details.details.company}</div>
      <div className="details-item">Position: {details.details.position}</div>
    </div>
  );
};

export default Details;

Details.propTypes = {
  info: PropTypes.object
};