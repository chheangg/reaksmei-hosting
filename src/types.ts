export interface Plan {
  color: string,
  recommended?: boolean,
  id: string,
  name: string
  cpu: string,
  ram: string,
  ssd: string,
  ordered?: number,
  extra?: string[]
  price: number
}