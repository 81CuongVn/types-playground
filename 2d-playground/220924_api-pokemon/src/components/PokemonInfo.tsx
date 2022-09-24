import React from 'react'
import { createStitches } from '@stitches/react'

import { Color, Type } from '../types'
import { formatNumbering, mapColorToHex, mapTypeToHex } from '../utils'

type Props = {
  id: string
  name?: string
  types?: Array<Type>
  color?: Color
}

const { styled, css } = createStitches({
  utils: {
    bgColor: (value) => ({
      backgroundColor: value
    })
  }
})

const Base = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  borderBottomLeftRadius: '20%',
  borderBottomRightRadius: '20%'
})

const ThumbnailImageWrapper = styled('div', {
  width: '160px',
  marginInline: 'auto',
  marginBlock: '24px'
})

const ThumbnailImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'contan'
})

const InfoWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
})

const Name = styled('div', {
  color: '#fff',
  fontSize: '30px',
  fontWeight: 'bold',
  textTransform: 'capitalize'
})

const Index = styled('div', {
  color: '#fff',
  fontSize: '36px',
  fontWeight: 'bold',
  opacity: '0.75'
})

const TypeWrapper = styled('div', {
  padding: '4px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '8px'
})

const TypeList = styled('div', {
  display: 'flex',
  marginTop: '8px',
})

const TypeInfo = styled('img', {
  height: '12px'
})

const ImageWrapper = styled('div', {
  position: 'absolute',
  width: '288px',
  height: '288px',
  left: '-96px',
  top: '-96px',
  opacity: '0.75'
})

const Image = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'contain'
})

const PokemonInfo: React.FC<Props> = ({ id, name, color, types  }) => {
  return (
    <Base css={{ bgColor: mapColorToHex(color?.name) }}>
      <ImageWrapper>
        <Image src='./pocketball.svg'/>
      </ImageWrapper>
      <InfoWrapper>
        <Name>{name}</Name>
        { id && (
          <Index>{formatNumbering(id)}</Index>
        ) }
      </InfoWrapper>
      { types && (
        <TypeList>
          { types.map(({ type }, idx) => (
            <TypeWrapper key={idx} css={{ bgColor: mapTypeToHex(type.name) }}>
              <TypeInfo src={`${type.name}.svg`}/>
            </TypeWrapper>
          )) }
        </TypeList>
      ) }
      <ThumbnailImageWrapper>
        <ThumbnailImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt="image" />
      </ThumbnailImageWrapper>
    </Base>
  )
}

export default PokemonInfo
