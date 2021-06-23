import React from 'react';

import copyImg from '../../assets/images/copy.svg';
import { ButtonComponent } from './style';

interface Props {
  code: string;
}

export function RoomCode({ code }: Props): JSX.Element {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <ButtonComponent onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>
        Room
        #
        {code}
      </span>
    </ButtonComponent>
  );
}
