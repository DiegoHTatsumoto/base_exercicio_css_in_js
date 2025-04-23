import React, { useState, FormEvent } from 'react'
import { StyledForm, BtnPesquisar, Input, FormWrapper } from './Styles'

interface Props {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <FormWrapper>
      <div className="container">
        <StyledForm onSubmit={aoEnviarForm}>
          <Input
            placeholder="Front-end, fullstack, node, design"
            onChange={(e) => setTermo(e.target.value)}
            type="search"
          />
          <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
        </StyledForm>
      </div>
    </FormWrapper>
  )
}

export default FormVagas
