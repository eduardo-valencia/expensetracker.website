import { FieldRenderProps } from 'react-final-form'
import IItemWithName from '../../../types/items'
import getRelatedRecordSelector, {
  RelatedRecordSelectorProps,
} from '../../RelatedRecordSelector'

const generateSelector =
  <Item extends IItemWithName>({
    selectGroupProps,
    ...other
  }: RelatedRecordSelectorProps) =>
  ({ input: { onChange, value } }: FieldRenderProps<Item['_id']>) => {
    const Selector = getRelatedRecordSelector<Item>()
    return (
      <Selector
        {...other}
        selectGroupProps={{ ...selectGroupProps, onChange, value }}
      />
    )
  }

export default generateSelector
