import React from 'react';

interface IStatusTextProps {
  statusNotice: string,
  firstValue: string | number,
  secondValue: string | number,
}

function StatusText({ statusNotice, firstValue, secondValue }: IStatusTextProps) {
  return <h3>{statusNotice} {firstValue} / {secondValue}</h3>;
}

export default StatusText;
