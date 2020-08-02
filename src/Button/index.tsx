import * as React from 'react';

interface IButtonProps {
  size: 'small' | 'medium' | 'large';
}

const Button: React.FC<IButtonProps> = props => {
  const { size, ...restProps } = props;
  return <button {...restProps}></button>;
};

export default Button;
