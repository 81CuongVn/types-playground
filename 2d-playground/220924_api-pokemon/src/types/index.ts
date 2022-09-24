export type Sprites = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  other: {
    dream_world: {
      front_edfault: string
    }
    'official-artwork': {
      front_default: string
    }
  }
}

export type Type = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type Stat = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export type Ability = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export type SimplePokemonInfo = {
  name: string
  url: string
}

export type ListResponse = {
  count: number
  results: Array<SimplePokemonInfo>
}

export type PokemonResponse = {
  id: number
  name: string
  order: number
  sprites: Sprites
  base_experience: number
  height: number
  weight: number
  stats: Array<Stat>
  abilities: Array<Ability>
  types: Array<Type>
}