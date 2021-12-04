import '@testing-library/jest-dom/extend-expect'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.test',
})

jest.setTimeout(20_000)
