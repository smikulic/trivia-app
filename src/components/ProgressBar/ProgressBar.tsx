import React from 'react';
import './ProgressBar.css';

interface IPercentageProps {
  percentage: number,
}

function ProgressBar({ percentage }: IPercentageProps) {
  return <div className="progress-bar" style={{ width: `${percentage}%` }}></div>;
}

export default ProgressBar;
