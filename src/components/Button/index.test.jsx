/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import Button from './index'

it('renders homepage unchanged', () => {
  const { container } = render(<Button />)
  expect(container).toMatchSnapshot()
})
