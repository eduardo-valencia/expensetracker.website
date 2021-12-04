import { OpenState } from '../../hooks/isOpen'

export interface ButtonOpenStateProps {
  openEditDialog: OpenState['open']
  closeInfoDialog: OpenState['close']
}
