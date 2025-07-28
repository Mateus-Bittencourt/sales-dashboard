import { AvatarList, CardComponent, CustomTable, Header } from '@components'
import { Container } from '@mui/material'
import type { ListDataProps } from '@types'
import { currencyConverter } from '@utils'

function Home() {
  const mockListData: ListDataProps[] = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Maria Lorem da Silva',
      subtitle: currencyConverter(1000),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Maria Lorem da Silva',
      subtitle: currencyConverter(1000),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Maria Lorem da Silva',
      subtitle: currencyConverter(1000),
    },
  ]

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome</span>,
        <span>email@gmail.com</span>,
        <button>action</button>,
      ],
      [
        <span>Nome</span>,
        <span>email@gmail.com</span>,
        <button>action</button>,
      ],
      [
        <span>Nome</span>,
        <span>email@gmail.com</span>,
        <button>action</button>,
      ],
    ],
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>Card</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
