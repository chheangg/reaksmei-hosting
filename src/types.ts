export interface Plan {
  color: string,
  setOrdered?: (ordered: number) => void,
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

export interface Qna {
  id: number,
  question: string,
  answer: string,
}