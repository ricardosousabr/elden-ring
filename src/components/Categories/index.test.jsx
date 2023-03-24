/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import Categories from './index'

it('renders homepage unchanged', () => {
  const { container } = render(<Categories />)
  expect(container).toMatchSnapshot()
})
