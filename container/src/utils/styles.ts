type Size = string | number

export const getPaddingX = (amount: Size) => {
  return {
    paddingLeft: amount,
    paddingRight: amount,
  }
}

export const getPaddingY = (amount: Size) => {
  return {
    paddingTop: amount,
    paddingBottom: amount,
  }
}

export const getMarginX = (amount: Size) => {
  return {
    marginLeft: amount,
    marginRight: amount,
  }
}

export const getMarginY = (amount: Size) => {
  return {
    marginTop: amount,
    marginBottom: amount,
  }
}

export const getSize = (amount: Size) => {
  return {
    width: amount,
    height: amount,
  }
}
