import React from 'react';
import NavbarContainer from './NavbarContainer';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import MenuLinks from './MenuLinks';

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = ():void => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <Logo
        w="100px"
        color={['white', 'white', 'primary.500', 'primary.500']}
      />
      <MenuToggle toggle={() => toggle()} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  );
}
