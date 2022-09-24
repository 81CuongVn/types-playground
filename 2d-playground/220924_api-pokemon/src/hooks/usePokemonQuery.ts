import axios, { AxiosResponse } from "axios"
import { useQueries, useQuery } from "react-query"
import { UseQueryResult } from "react-query/types/react/types"

import { PokemonResponse } from "../types"

export const pokemonApi = (id?: string) => {
  const params = {
    limit: 500
  }
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id || ''}`, { params: params })
}

export const usePokemonQueries = (names: string[]): Array<UseQueryResult<AxiosResponse<PokemonResponse>, Error>> => {
  const queries = names.map((name, idx) => ({
    queryKey: ['evolution', `${name}_${idx}`],
    queryFn: () => pokemonApi(name)
  }))
  
  return useQueries(queries) as Array<UseQueryResult<AxiosResponse<PokemonResponse>, Error>>
}

const usePokemonQuery = <T>(id?: string): UseQueryResult<AxiosResponse<T>, Error> =>
  useQuery(id ? [`pokemon`, id] : 'pokemon', () => pokemonApi(id))

export default usePokemonQuery
