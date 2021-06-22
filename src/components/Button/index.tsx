import React, { ButtonHTMLAttributes } from 'react';

import { ButtonComponent } from './style';

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ ...rest }: Props): JSX.Element {
  return (
    <ButtonComponent {...rest} />
  );
}
