import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const SectionImage = styled.div`
  
  margin-top: 6em;


  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 11em;
    display: none;
  }
`;

