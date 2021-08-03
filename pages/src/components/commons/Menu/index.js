import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from './theme/Logo';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        Links Area (centro)
      </MenuWrapper.CenterSide>
      <MenuWrapper.RightSide>
        Buttons Area (direita)
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}