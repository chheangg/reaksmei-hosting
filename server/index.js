const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { GraphQLError } = require('graphql');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = uuidv4();
const saltRounds = 10;

const vpsPlans = [
  {
    id: uuidv4(),
    color: 'blue.400',
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
    id: uuidv4(),
    color: 'green.400',
    name: 'VPS Medium Plan',
    cpu: '3 CPU Thread',
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
    id: uuidv4(),
    color: 'yellow.400',
    name: 'VPS Intermediate Plan',
    cpu: '3 CPU Thread',
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
    id: uuidv4(),
    recommended: true,
    color: 'red.400',
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
    id: uuidv4(),
    color: 'orange.400',
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

const dedicatedPlans = [
  {
    id: uuidv4(),
    color: 'blue.400',
    name: 'Dedicated Essential Plan',
    cpu: '8 CPU Thread',
    ram: '32Gb DDR4 RAM',
    ssd: '1Tb NVME SSD',
    extra: [
      'Upgradable RAM',
      'Unlimited Transfer',
      'Unlimited Bandwidth',
      'DDos Protection',
      'Ryzen 5 3600X'
    ],
    price: 50
  },
  {
    id: uuidv4(),
    color: 'green.400',
    name: 'Dedicated Intermediate Plan',
    cpu: '16 CPU Thread',
    ram: '64Gb DDR4 RAM',
    ssd: '2Tb NVME SSD',
    extra: [
      'Upgradable RAM',
      'Unlimited Transfer',
      'Unlimited Bandwidth',
      'DDos Protection',
      'Intel Xeon-E 2288G'
    ],
    price: 70
  },
  {
    id: uuidv4(),
    color: 'red.400',
    name: 'Dedicated Ultimate Plan',
    cpu: '32 CPU Thread',
    ram: '256Gb DDR4 RAM',
    ssd: '5Tb NVME SSD',
    extra: [
      'Upgradable RAM',
      'Unlimited Transfer',
      'Unlimited Bandwidth',
      'DDos Protection',
      'AMD Epyc 7371'
    ],
    price: 100
  },
]

const webPlans = [
  {
    id: uuidv4(),
    color: 'blue.400',
    name: 'Personal Hosting',
    cpu: '2 Shared CPU Thread',
    ram: '1024Mb DDR4 RAM',
    ssd: '100Gb NVME SSD',
    extra: [
      '10 x 50Gb Email Accounts',
      'Automatic Backup',
      'Unlimited Bandwidth',
      'WordPress Optimised',
      'DDos Protection',
    ],
    price: 3
  },
  {
    id: uuidv4(),
    color: 'green.400',
    name: 'Personal+ Hosting',
    cpu: '3 Shared CPU Thread',
    ram: '2048Mb DDR4 RAM',
    ssd: '200Gb NVME SSD',
    extra: [
      '20 x 50Gb Email Accounts',
      'Automatic Backup',
      'Unlimited Bandwidth',
      'WordPress Optimised',
      'DDos Protection',
    ],
    price: 6
  },
  {
    id: uuidv4(),
    color: 'yellow.400',
    name: 'Small Business Hosting',
    cpu: '4 Shared CPU Thread',
    ram: '4096Mb DDR4 RAM',
    ssd: '256Gb NVME SSD',
    extra: [
      '100 x 50Gb Email Accounts',
      'Automatic Backup',
      'Unlimited Bandwidth',
      'WordPress Optimised',
      'DDos Protection',
    ],
    price: 15
  },
  {
    id: uuidv4(),
    color: 'orange.400',
    name: 'Medium Business Hosting',
    cpu: '2 Dedicated + 2 Shared CPU Thread',
    ram: '4096Mb DDR4 RAM',
    ssd: '512Gb NVME SSD',
    extra: [
      '300 x 50Gb Email Accounts',
      'Automatic Backup',
      'Unlimited Bandwidth',
      'WordPress Optimised',
      'DDos Protection',
    ],
    price: 25
  },
  {
    id: uuidv4(),
    color: 'red.400',
    name: 'Large Business Hosting',
    cpu: '4 Dedicated CPU Thread',
    ram: '8192Mb DDR4 RAM',
    ssd: '1Tb NVME SSD',
    extra: [
      '1000 x 50Gb Email Accounts',
      'Automatic Backup',
      'Unlimited Bandwidth',
      'WordPress Optimised',
      'DDos Protection',
    ],
    price: 40
  },
]

const gamePlans = [
  {
    id: uuidv4(),
    color: 'red.400',
    name: 'Game I Plan',
    cpu: '12 CPU Thread',
    ram: '16Gb DDR4 RAM',
    ssd: '2Tb NVME SSD',
    extra: [
      'Upgradable RAM',
      'Unlimited Transfer',
      'Unlimited Bandwidth',
      'DDos+ Protection',
      'AMD Ryzen 5 5600X'
    ],
    price: 70
  },
  {
    id: uuidv4(),
    color: 'red.500',
    name: 'Game II Plan',
    cpu: '16 CPU Thread',
    ram: '32Gb DDR4 RAM',
    ssd: '5Tb NVME SSD',
    extra: [
      'Upgradable RAM',
      'Unlimited Transfer',
      'Unlimited Bandwidth',
      'DDos+ Protection',
      'AMD Ryzen 7 3800X'
    ],
    price: 120
  },
]

const users = [

];

const typeDefs = `
  type Plan {
    recommended: String,
    color: String!,
    id: ID!
    name: String!,
    cpu: String!,
    ram: String!,
    ssd: String!,
    price: Float!,
    extra: [String!]!,
  }

  type User {
    id: ID!
    first_name: String!,
    last_name: String!,
    fullName: String!,
    username: String!,
    password: String!,
  }

  type Token {
    value: String!
  }

  type Query {
    vpsPlans: [Plan!],
    dedicatedPlans: [Plan!],
    webPlans: [Plan!],
    gamePlans: [Plan!],
    users: [User!],
  }

  type Mutation {
    createUser(
      first_name: String!,
      last_name: String!,
      username: String!,
      password: String!,
      confirmed_password: String!,
    ): User,

    login(
      username: String!,
      password: String!,
    ): Token,
  }
`

const resolvers = {
  User: {
    fullName: (root) => root.first_name + ' ' + root.last_name,
  },
  Query: {
    vpsPlans: () => vpsPlans,
    dedicatedPlans: () => dedicatedPlans,
    webPlans: () => webPlans,
    gamePlans: () => gamePlans,
    users: () => users,
  },
  Mutation: {
    createUser: async (root, args) => {
      console.log(args, 'hey')
      const user = users.find(user => user.username === args.username);

      if (user) {
        throw new GraphQLError('Email already taken')
      };

      if (args.first_name.length < 2 || args.last_name.length < 2 ) {
        throw new GraphQLError('First name or Last name is too short')
      }

      if (args.password !== args.confirmed_password) {
        throw new GraphQLError('Incorrect Password')
      }

      const passwordHash = await bcrypt.hash(args.password, saltRounds);

      const newUser = {
        id: uuidv4(),
        first_name: args.first_name,
        last_name: args.last_name,
        username: args.username,
        password: passwordHash,
      }

      users.push(newUser);

      return newUser;
    },
    login: async (root, args) => {
      const user = users.find(user => user.username === args.username);

      if (!user) {
        throw new GraphQLError('User not found')
      }

      const isPasswordCorrect = await bcrypt.compare(args.password, user.password);

      if (!isPasswordCorrect) {
        throw new GraphQLError('Incorrect password');
      }

      const userForToken = {
        id: user.id,
        username: user.username,
      }

      return {
        value: jwt.sign(userForToken, secret)
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4000 },
}).then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});