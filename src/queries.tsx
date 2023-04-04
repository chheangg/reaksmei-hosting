import { gql } from "@apollo/client"

export const VPS_PLANS = gql`
  query{
    vpsPlans {
      color,
      price,
      id,
      name,
      cpu,
      ram,
      ssd,
      extra,
    }
  }
`

export const DEDICATED_PLANS = gql`
  query{
    dedicatedPlans {
      color,
      price,
      id,
      name,
      cpu,
      ram,
      ssd,
      extra,
    }
  }
`

export const WEB_PLANS = gql`
  query{
    webPlans {
      color,
      price,
      id,
      name,
      cpu,
      ram,
      ssd,
      extra,
    }
  }
`

export const GAME_PLANS = gql`
  query{
    gamePlans {
      color,
      price,
      id,
      name,
      cpu,
      ram,
      ssd,
      extra,
    }
  }
`