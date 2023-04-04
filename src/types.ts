export interface Plan {
  color: string,
  recommended?: boolean,
  id: string,
  name: string
  cpu: string,
  ram: string,
  ssd: string,
  extra?: string[]
  price: number
}