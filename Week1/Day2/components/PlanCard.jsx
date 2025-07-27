import React from 'react';
import FeatureList from './FeatureList';
import Button from './Button';

const PlanCard = ({ name, price, features }) => (
  <div className="plan-card">
    <h3>{name}</h3>
    <FeatureList features={features} />
    <h2>{price}</h2>
    <Button label="Get Started" />
  </div>
);

export default PlanCard;
