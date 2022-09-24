export const formatNumbering = (pokemonIndex: number | string): string => {
  return `#${(typeof pokemonIndex === 'number' 
    ? String(pokemonIndex)
    : pokemonIndex
  ).padStart(3, '0')}`
}