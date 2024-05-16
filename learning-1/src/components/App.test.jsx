import { render, screen } from '@testing-library/react'
import App from './App'
import { expect } from 'vitest'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line

    expect(screen.getByText('Get Time')).toBeInTheDocument()
  })
})
