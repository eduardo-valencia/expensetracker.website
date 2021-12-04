import { OpenState, useIsOpen } from './isOpen'

export interface EditAndInfoState {
  infoOpenState: OpenState
  editOpenState: OpenState
}

const useEditAndInfoState = (): EditAndInfoState => {
  const infoOpenState = useIsOpen()
  const editOpenState = useIsOpen()

  return {
    infoOpenState,
    editOpenState,
  }
}

export default useEditAndInfoState
