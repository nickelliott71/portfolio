import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', color: "white" }}>

        <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >Nick Elliott</span>

      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <a href="https://blog.vipuljha.com">
          <NavLink>Blog</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/nickelliott/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
