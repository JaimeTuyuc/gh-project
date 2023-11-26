import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => { 
  it('should render the logo', () => {
    render(<App />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should check the tittle of page', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Learn & Master GitHub Actions');
  });

  it('should not check the tittle of page', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
} )