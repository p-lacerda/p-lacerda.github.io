import { Box } from '@chakra-ui/react';
import { HiMenuAlt3, IoCloseOutline } from 'react-icons/all';

type Props = {
  toggle(): void,
  isOpen: boolean,
}

export default function MenuToggle({ toggle, isOpen }: Props): JSX.Element {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={() => toggle()}>
      {isOpen ? <IoCloseOutline /> : <HiMenuAlt3 />}
    </Box>
  );
}
