import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from './theme/Logo';

export default function Menu() {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas Frequentes',
      url: '/fac',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
  ]
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        {links.map((link) => {
          return (
            <li>
              <a href={link.url}>
                {link.texto}
              </a>
            </li>
          )
        })}
      </MenuWrapper.CenterSide>
      <MenuWrapper.RightSide>
        <button>
          Entrar
        </button>
        <button>
          Cadastrar
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}