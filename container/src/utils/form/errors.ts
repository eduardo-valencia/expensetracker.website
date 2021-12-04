import { AxiosResponse } from 'axios'
import { FORM_ERROR } from 'final-form'

export const validateResponse = <ResponseData>(
  response: AxiosResponse<ResponseData>
) => {
  const { status } = response
  if (status < 200 || status >= 300) {
    console.error(response)
    throw new Error('Request failed')
  }
}

export const handleError = (error: any) => {
  console.error(error)
  return {
    [FORM_ERROR]: 'Sorry, there was a problem. Please try again later.',
  }
}
