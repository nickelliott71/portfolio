import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: [a] 200px [b] auto [c] auto;
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: [a] auto [b] auto [c] auto;
    grid-template-rows: [a] auto [b] 20px [c] 60px;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    padding-top: 1rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-area: 1 / 1 / 1 / 3;
    justify-content: right;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 1 / 1 / 4;
    justify-content: center;
  } 
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  column-gap: 24px;
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-area: 1 / 3 / 1 / 4;
    justify-content: left;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 2 / 1 / 2 / 4;
    margin-top: 0.75em;
    justify-content: center;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 2 / 3 / 4;
  display: flex;
  justify-content: flex-end;
  column-gap: 24px;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 3 / 1 / 3 / 4;
    margin-top: 0.75em;
    justify-content: center;
    column-gap: 16px;
  }  
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 1.7rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`