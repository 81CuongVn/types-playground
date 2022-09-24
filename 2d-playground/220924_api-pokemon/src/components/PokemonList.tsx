import React from 'react'
import { styled } from '@stitches/react'
import { useNavigate } from 'react-router-dom'

import { ListResponse } from '../types'
import { formatNumbering } from '../utils'

import usePokemonQuery from '../hooks/usePokemonQuery'

const Base = styled('div', {
  marginTop: '24px'
})

const LoadingWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'calc(100vh - 180px)',
})

const Loading = styled('img', {

})

const ListItem = styled('li', {
  position: 'relative',
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '6px 4px 14px 5px rgba(0, 0, 0, 0.21)',
  borderRadius: '12px',
  width: '20vw',
  '& + &': {
    marginTop: '18px'
  }
})

const List = styled('ul', {
  margin: '0',
  padding: '0',
  display: 'flex',
  height: 'auto',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px'
})

const Image = styled('img', {

})

const Name = styled('p', {
  margin: '0',
  padding: '0 0 0 12px',
  flex: '1 1 100%',
  color: '#374151',
  textTransform: 'capitalize',
  fontSize: '16px',
  fontWeight: 'bold'
})

const Index = styled('p', {
  position: 'absolute',
  margin: '0',
  padding: '0',
  right: '16px',
  bottom: '16px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#d1d5db'
})

const getImageUrl = (pokemonIndex: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

const PokemonList: React.FC = () => {
  const { isLoading, isError, data } = usePokemonQuery<ListResponse>()
  const navigate = useNavigate()

  return (
    <Base>
    { isLoading || isError ? (
      <LoadingWrapper>
        <Loading src='./loading.gif' alt='loading'/>
      </LoadingWrapper>
    ) : (
      <List>
        { data?.data.results.map((pokemon, idx) => (
          <ListItem key={pokemon.name} onClick={() => navigate(`/${idx + 1}`)}>
            <Image src={getImageUrl(idx + 1)} alt={pokemon.name}/>
            <Name>{pokemon.name}</Name>
            <Index>{formatNumbering(idx + 1)}</Index>
          </ListItem>
        )) }
      </List>
    ) }
    </Base>
  )
}

export default PokemonList
