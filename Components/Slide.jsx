import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
  overflow-x: hidden;
`

const Content = styled.div`
  background: ${(props) => props.$cor};
  height: 40vh;
  display: flex;
  transition: transform 0.3s ease;
`
const SlideContainer = styled.div`
  background: ${(props) => props.$cor};
  min-width: 100%;
  height: 100%;
`

const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  margin: 15px;
  cursor: pointer;
`

const Slide = ({ slides }) => {
  const [slide, setSlide] = useState(0)
  const [contentPosition, setContentPosition] = useState(0)
  const contentRef = useRef()

  useEffect(() => {
    let width = contentRef.current
      ? contentRef.current.getBoundingClientRect().width
      : 0
    setContentPosition(slide * width)
  }, [slide])

  console.log(slide)
  function avancar() {
    if (slide < slides.length - 1) setSlide(() => slide + 1)
  }
  function retroceder() {
    if (slide > 0) setSlide(() => slide - 1)
  }
  return (
    <>
      <Container>
        <Content
          ref={contentRef}
          style={{
            transform: `translateX(-${contentPosition}px)`,
          }}
        >
          {' '}
          {slides.map((s) => (
            <SlideContainer key={s.id} $cor={s.cor}>
              {s.text}
            </SlideContainer>
          ))}
        </Content>
      </Container>

      <Button onClick={retroceder}>Anterior</Button>
      <Button onClick={avancar}>Próximo</Button>
    </>
  )
}

export default Slide
