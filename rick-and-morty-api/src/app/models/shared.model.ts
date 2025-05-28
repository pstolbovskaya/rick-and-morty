export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}

export interface PagableData<T> {
  info: Info,
  results: T[]
}
