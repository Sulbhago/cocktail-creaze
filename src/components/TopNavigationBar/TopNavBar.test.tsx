import React from 'react'
import { shallow } from 'enzyme'
import { TopNavBar } from '.'
import { render, fireEvent } from '@testing-library/react'
import { IconButton } from '@mui/material'
import { createMemoryHistory } from 'history'

describe('TopNavBar', () => {
  it('renders without crashing', () => {
    shallow(<TopNavBar searchValue={''} handelSearch={undefined} />)
  })
})

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

describe('TopNavBar', () => {
  test('renders input and load button', () => {
    const { getAllByPlaceholderText } = render(
      <TopNavBar searchValue={''} handelSearch={undefined} />,
    )
    const input = getAllByPlaceholderText('Search')
    expect(input).toBeDefined()
  })

  test('fetches data on input change', async () => {
    const { queryByPlaceholderText } = render(
      <TopNavBar searchValue={'test'} handelSearch={undefined} />,
    )

    const searchInput = queryByPlaceholderText('Search') as HTMLInputElement

    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(searchInput.value).toBe('test')
  })
})

describe('IconButton', () => {
  it('should render a IconButton', () => {
    render(<IconButton />)
  })

  it('navigates to other page on click', () => {
    const history = createMemoryHistory()
    const { getByRole } = render(
      <IconButton onClick={() => history.push('/')} />,
    )

    const button = getByRole('button')
    fireEvent.click(button)

    expect(history.location.pathname).toBe('/')
  })
})
