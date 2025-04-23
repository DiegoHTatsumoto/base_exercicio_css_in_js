import styled from 'styled-components'

export const FormWrapper = styled.div`
  background-color: #fdf6eb;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  margin: 32px auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }
`

export const StyledForm = styled.form`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

export const BtnPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--cor-principal);
  }
`

export const Input = styled.input`
  padding: 10px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 900px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
