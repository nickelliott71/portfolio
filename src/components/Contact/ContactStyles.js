import styled from "styled-components"

export const Field = styled.div`
  font-size: 1.5em;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 1em;

  @media ${props => props.theme.breakpoints.md}{

  }

  @media ${props => props.theme.breakpoints.sm}{

  }
`

export const FieldLabel = styled.label`
    display: block;
    margin-bottom: 0.25em;

  @media ${props => props.theme.breakpoints.md}{

  }

  @media ${props => props.theme.breakpoints.sm}{

  }
`

export const FieldInput = styled.input`
  color: #fff;
  background-color: rgb(45,45,45);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 0.25em;
  padding: 0.25em;
  width: 500px;

  @media ${props => props.theme.breakpoints.md}{
    width: 100%;
  }

  @media ${props => props.theme.breakpoints.sm}{

  }
`

export const FieldTextArea = styled.textarea`
  color: #fff;
  background-color: rgb(45,45,45);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 0.25em;
  padding: 0.25em;
  width: 500px;  

  @media ${props => props.theme.breakpoints.md}{
    width: 100%;
  }

  @media ${props => props.theme.breakpoints.sm}{

  }
`
export const SubmitButton = styled.button`
  border: none;
  border-radius: 0.25em;
  padding: 0.5em;
  color: #fff;
  background: ${({ alt }) => alt ? 'rgb(154, 14, 154);' : 'rgb(236, 139, 83);'};
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
  &:focus {

  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`