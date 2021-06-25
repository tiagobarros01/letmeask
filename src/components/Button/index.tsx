/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { ButtonHTMLAttributes } from 'react';

import { ButtonComponent } from './style';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined ?: boolean;
}

export function Button({ isOutlined = false, ...rest }: Props): JSX.Element {
  return (
    <ButtonComponent
      isOutlined={isOutlined}
      {...rest}
    />
  );
}
