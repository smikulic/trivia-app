import React from 'react';

interface IStatusTextProps {
  statusNotice: string,
  firstValue: string | number,
  secondValue: string | number,
  small?: boolean,
}

function StatusText({ statusNotice, firstValue, secondValue, small }: IStatusTextProps) {
  if (small) {
    return <div>{statusNotice} {firstValue} / {secondValue}</div>;
  }
  return <h4>{statusNotice} {firstValue} / {secondValue}</h4>;
}

export default StatusText;
