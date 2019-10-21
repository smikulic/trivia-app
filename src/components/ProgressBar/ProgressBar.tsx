import React from 'react';
import './ProgressBar.css';

interface IProgressBarProps {
  percentage: number,
}

function ProgressBar({ percentage }: IProgressBarProps) {
  return <div className="progress-bar" style={{ width: `${percentage}%` }}></div>;
}

export default ProgressBar;
