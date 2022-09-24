import React from 'react'
import { styled } from '@stitches/react'
import PokemonList from '../components/PokemonList'

const Container = styled('div', {
  padding: '12px 18px',
  overflow: 'hidden'
})

const Title = styled('h1', {
  margin: 0,
  padding: 0,
  color: '#d34f49',
  fontWeight: 'bold'
})

const Description = styled('small', {
  color: '#6b7280',
  padding: 0,
  margin: '16px 0 0 0',
  display: 'block'
})

const ImageWrapper = styled('div', {
  position: 'fixed',
  width: '288px',
  height: '288px',
  top: 0,
  right: 0,
  opacity: 0.4,
  transform: 'translate(96px, -96px)'
})

const Image = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'contain'
})

export default function IndexPage() {
  return (
    <Container>
      <Title>Pokémon</Title>
      <Description>The Pokédex contains detailed stats for every creature from the Pokémon games.</Description>
      <PokemonList/>
      <ImageWrapper>
        <Image src='./pocketball.svg'/>
      </ImageWrapper>
    </Container>
  )
}
