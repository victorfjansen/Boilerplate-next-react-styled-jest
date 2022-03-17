import * as S from './styles'

const Main = ({
  title = 'React Testando',
  description = 'TypeScript, React, Next e Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Uma imagem de um cara sentado no computador programando"
    />
  </S.Wrapper>
)

export default Main
