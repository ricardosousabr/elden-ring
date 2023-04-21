/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import Subcategory from './[category]'

it('renders homepage unchanged', () => {
  const { container } = render(<Subcategory category="Ammos" />)
  expect(container).toMatchSnapshot()
})
