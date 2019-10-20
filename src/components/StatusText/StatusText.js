import React from 'react';

function StatusText({ statusNotice, firstValue, secondValue }) {
  return <h3>{statusNotice} {firstValue} / {secondValue}</h3>;
}

export default StatusText;
