import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

async function main() {
  // User Starts
  const bob = await prisma.user.create({
    data: {
      id: uuidv4(),
      email: 'bob@prisma.io',
      firstName: 'bob',
      lastName: 'Ja',
      avatar:
        'https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=681&h=383&crop=1',
      title: 'Master Reefer'
    }
  })
  const scott = await prisma.user.create({
    data: {
      id: uuidv4(),
      email: 'scott@prisma.io',
      firstName: 'Scott',
      lastName: 'Tang',
      avatar:
        'https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=681&h=383&crop=1',
      title: 'Noob'
    }
  })
  // User Ends

  // Shop Starts
  const monkfishCorals = await prisma.shop.create({
    data: {
      name: 'Monkfish Corals',
      owner: {
        connect: { id: bob.id }
      },
      rating: 5.0,
      locationsAt: {
        create: {
          street: '2220 McClendon Trail',
          city: 'Leander',
          state: 'TX',
          zip: 79641,
          isPrimary: true,
          owner: {
            connect: { id: bob.id }
          }
        }
      }
    }
  })
  // Shop Ends

  // Livestock Starts
  const orangePassion = await prisma.livestock.create({
    data: {
      name: 'Orange Passion',
      images: {
        create: [
          {
            url: 'orange1.com'
          },
          {
            url: 'orange2.com'
          }
        ]
      },
      currentPrice: 120.0,
      salePrice: 99.99,
      quantity: 2,
      shop: {
        connect: { id: monkfishCorals.id }
      }
    }
  })

  const fruityPebbles = await prisma.livestock.create({
    data: {
      name: 'Fruity Pebbles',
      images: {
        create: [
          {
            url: 'Pebbles.com'
          },
          {
            url: 'Pebbles2.com'
          }
        ]
      },
      currentPrice: 199.0,
      salePrice: 129.99,
      quantity: 12,
      shop: {
        connect: { id: monkfishCorals.id }
      }
    }
  })

  const redPlanet = await prisma.livestock.create({
    data: {
      name: 'Red Planet',
      images: {
        create: [
          {
            url: 'redPlanet.com'
          },
          {
            url: 'redPlanet2.com'
          }
        ]
      },
      currentPrice: 18.0,
      quantity: 12,
      shop: {
        connect: { id: monkfishCorals.id }
      }
    }
  })
  // Livestock Ends

  // Shop Reviews Start
  const reviewMonkfish = await prisma.shopReview.create({
    data: {
      text: 'Fantastic Service and coral collectoins',
      rating: 5.0,
      reviewer: {
        connect: {
          id: scott.id
        }
      },
      shop: {
        connect: {
          id: monkfishCorals.id
        }
      }
    }
  })

  // Shop Reviews End

  // Shop Likes Start
  const likedMonkfish = await prisma.shopLike.create({
    data: {
      liker: {
        connect: {
          id: scott.id
        }
      },
      shop: {
        connect: {
          id: monkfishCorals.id
        }
      }
    }
  })
  // Shop Likes End
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
