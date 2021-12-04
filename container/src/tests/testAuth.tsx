import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'

import StoreProvider from '../contexts/StoreProvider'
import { errors, placeholders } from '../constants/authForm'

export const renderAuthPage = (AuthPage: React.FunctionComponent): void => {
  render(
    <StoreProvider>
      <AuthPage />
    </StoreProvider>
  )
}

const testAuth = (AuthPage: React.FunctionComponent) => {
  const validEmail: string = 'example@example.com'

  describe('Form', () => {
    type QueryResult = HTMLElement | null

    let email: QueryResult = null
    let password: QueryResult = null

    const getEmail = () => screen.queryByPlaceholderText(placeholders.email)

    const getPassword = () =>
      screen.queryByPlaceholderText(placeholders.password)

    beforeEach(() => {
      renderAuthPage(AuthPage)
      email = getEmail()
      password = getPassword()
    })

    const fillInputWithText = (element: HTMLElement, text: string): void => {
      fireEvent.change(element!, { target: { value: text } })
    }

    it('Should display the form fields', () => {
      expect(email).toBeInTheDocument()
      expect(password).toBeInTheDocument()
    })

    const fillTextAndTestTextExists = (element: QueryResult) => {
      fillInputWithText(element!, validEmail)
      const elementWithText = screen.queryByDisplayValue(validEmail)
      expect(elementWithText).toBeInTheDocument()
    }

    it('Lets users enter an email', () => {
      fillTextAndTestTextExists(email)
    })

    it('Lets users enter a password', () => {
      fillTextAndTestTextExists(password)
    })

    const fillInputWithTextAndFindError = (
      element: HTMLElement,
      text: string
    ): HTMLElement | null => {
      element.focus()
      fillInputWithText(element, text)
      element.blur()
      return screen.queryByText(errors.emptyField)
    }

    const testFieldShowsErrorWhenInvalid = (element: HTMLElement): void => {
      const error: HTMLElement | null = fillInputWithTextAndFindError(
        element,
        ''
      )
      expect(error).toBeInTheDocument()
    }

    it('Should show error when email left empty', () => {
      testFieldShowsErrorWhenInvalid(email!)
    })

    it('Should show error when password left empty', () => {
      testFieldShowsErrorWhenInvalid(password!)
    })

    const testNoErrorWhenValidField = (element: HTMLElement): void => {
      const error: HTMLElement | null = fillInputWithTextAndFindError(
        element,
        validEmail
      )
      expect(error).not.toBeInTheDocument()
    }

    it('Should not show error when email not empty', () => {
      testNoErrorWhenValidField(email!)
    })

    it('Should not show error when password not empty', () => {
      testNoErrorWhenValidField(password!)
    })
  })
}

export default testAuth
