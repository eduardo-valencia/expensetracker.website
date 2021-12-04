if (process.env.NODE_ENV === 'test') {
  const dotenv = require('dotenv')
  dotenv.config({
    path: '.env.test',
  })
}

interface Keys {
  backendUrl: string
  testUrl?: string
  trackingId: string
}

export const keys: Keys = {
  backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL as string,
  testUrl: process.env.NEXT_PUBLIC_TEST_URL,
  trackingId: process.env.NEXT_PUBLIC_TRACKING_ID as string,
}

type Key = keyof typeof keys

const validateVariableExists = (key: Key) => {
  if (keys.hasOwnProperty(key)) {
    const { [key]: value } = keys
    if (!value) {
      throw new Error(`${key} is missing from the environment variables.`)
    }
  }
}

export const validateEnvironmentVariables = () => {
  for (const key in keys) {
    validateVariableExists(key as Key)
  }
}
