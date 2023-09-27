import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Image
        src="/images/website-logo.png"
        width={50}
        height={50}
        alt=""
      />
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', color: "white", fontSize: 36 }}>

        <span style={{ marginLeft: 10, color: "#EC8B53" }} >Elliott</span>
        <span> UX</span>

      </Link>
    </Div1>
    <Div2>
        <span style={{ fontSize: 24, color: "#D9D9D9" }} >Consultant & practitioner</span>
    </Div2>
    <Div3>
      <li>
        <Link href="#howicanhelp" aria-current="page">
          <NavLink>How I can help</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" aria-current="page">
          <NavLink href="#about">About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact" aria-current="page">
          <NavLink href="#contact">Contact</NavLink>
        </Link>
      </li>      
      <li>
        <SocialIcons title="LinkedIn profile" href="https://www.linkedin.com/in/nickelliott/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </li>      
    </Div3>
  </Container>
);

export default Header;
