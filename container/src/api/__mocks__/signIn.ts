const createAuthRequest = () => {
  return {
    status: 200,
    data: {},
  }
}

export const signIn = jest.fn(createAuthRequest)

export const signUp = jest.fn(createAuthRequest)
