import { Plan } from "../types";

export const vpsPlan: Plan[] = [
  {
    color: 'blue.400',
    id: '1',
    name: 'VPS Beginner Plan',
    cpu: '1 CPU Thread',
    ram: '1024 Mb DDR4 RAM',
    ssd: '20Gb NVME SSD',
    extra: [
      'Unlimited Bandwidth',
      'DDos Protection',
      'Ryzen 9 5950x'
    ],
    price: 5
  },
  {
    color: 'green.400',
    id: '2',
    name: 'VPS Medium Plan',
    cpu: '2 CPU Thread',
    ram: '2048 Mb DDR4 RAM',
    ssd: '50Gb NVME SSD',
    extra: [
      'Unlimited Bandwidth',
      'DDos Protection',
      'Ryzen 9 5950x'
    ],
    price: 10
  },
  {
    color: 'yellow.400',
    id: '3',
    name: 'VPS Intermediate Plan',
    cpu: '2 CPU Thread',
    ram: '3072 Mb DDR4 RAM',
    ssd: '70Gb NVME SSD',
    extra: [
      'Unlimited Transfer',
      'Unlimited Bandwidth',
      'DDos Protection',
      'Ryzen 9 5950x'
    ],
    price: 15
  },
  {
    recommended: true,
    color: 'red.400',
    id: '4',
    name: 'VPS Advanced Plan',
    cpu: '4 CPU Thread',
    ram: '4096 Mb DDR4 RAM',
    ssd: '100Gb NVME SSD',
    extra: [
      'Unlimited Transfer',
      'Unlimited Bandwidth',
      'DDos Protection',
      'Ryzen 9 5950x'
    ],
    price: 25
  },
  {
    color: 'orange.400',
    id: '5',
    name: 'VPS Advanced+ Plan',
    cpu: '8 CPU Thread',
    ram: '8192 Mb DDR4 RAM',
    ssd: '200Gb NVME SSD',
    extra: [
      'Unlimited Transfer',
      'Unlimited Bandwidth',
      'DDos Protection',
      'Ryzen 9 5950x'
    ],
    price: 35,
  },
]