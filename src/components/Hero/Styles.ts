import styled from 'styled-components'

export const Form = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-color: var(--cor-principal);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const FormContent = styled.div`
  position: relative;
  color: #fff !important;
  z-index: 2;
`

export const HeroTitle = styled.h1`
  font-family: Gloock, serif;
  font-size: 48px;
  color: #fff !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 32px;
  }
`
