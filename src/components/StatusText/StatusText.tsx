import React from 'react';

interface IStatusTextProps {
  statusNotice: string,
  firstValue: string | number,
  secondValue: string | number,
}

function StatusText({ statusNotice, firstValue, secondValue }: IStatusTextProps) {
  return <h4>{statusNotice} {firstValue} / {secondValue}</h4>;
}

export default StatusText;
