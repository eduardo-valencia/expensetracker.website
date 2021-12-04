import SignIn from '../SignIn'
import testAuth from '../tests/testAuth'

jest.mock('../api/signIn.ts')
jest.mock('../api/user.ts')

testAuth(SignIn)
