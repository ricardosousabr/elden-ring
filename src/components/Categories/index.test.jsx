/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import Categories from './index'

import { jest } from '@jest/globals'

jest.mock('next/link', () => {
  return ({ children }) => {
    return children
  }
})

it('renders homepage unchanged', () => {
  const { container } = render(<Categories />)
  expect(container).toMatchSnapshot()
})
