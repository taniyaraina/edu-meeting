import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  border-bottom: 1px solid
    ${(props) => (props.borderColor ? '#eee' : 'rgba(250,250,250,0.15)')};
`;

const HorizontalLine = ({ borderColor, ...props }) => {
  return (
    <Line {...props} borderColor={borderColor}>
      <div className="line" />
    </Line>
  );
};

export default HorizontalLine;
