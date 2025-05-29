import {PagableData} from './shared.model';

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

export type EpisodesDTO = PagableData<Episode>
