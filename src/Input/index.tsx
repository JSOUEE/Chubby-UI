import * as React from 'react';
import { ConfigContext } from '../ConfigProvider';
import './index.less';

const { useState, useContext } = React;

type BaseInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface IInputProps extends Omit<BaseInputProps, 'size' | 'prefix'> {
  size?: 'sm' | 'md' | 'lg';
  maxLength?: number;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

const sizeObject = {
  sm: 100,
  md: 150,
  lg: 200,
};

const Input: React.FC<IInputProps> = props => {
  const {
    size = 'md',
    maxLength,
    suffix,
    prefix,
    value,
    onChange,
    ...restProps
  } = props;
  // 全局配置
  const { size: configSize, createBEM } = useContext(ConfigContext);
  // 生成bem的类名
  const bem = createBEM('input');
  const isControlled = value != null && onChange != null;
  // 内部非受控值
  const [unControlledValue, setUnControlledValue] = useState('');
  // 内部onChange
  const unControlledOnChange: IInputProps['onChange'] = evt => {
    setUnControlledValue(evt.target.value);

    onChange && onChange(evt);
  };
  // 不同value值
  const inputValue = isControlled ? value : unControlledValue;
  //  不同onChange
  const inputOnChangeHandler = isControlled ? onChange : unControlledOnChange;

  return (
    <input
      className={bem()}
      value={inputValue}
      onChange={inputOnChangeHandler}
      style={{
        width: sizeObject[size],
      }}
      {...restProps}
    />
  );
};

export default Input;
