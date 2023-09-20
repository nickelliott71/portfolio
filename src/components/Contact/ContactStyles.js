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
