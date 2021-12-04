import { List as BaseList, ListProps } from '@material-ui/core'

import ApiItem from '../types/ApiItem'

const getList = <IItem extends ApiItem>() => {
  interface Props extends ListProps {
    items: IItem[]
    Item: React.FC<IItem>
  }

  const List = ({ items, Item, ...other }: Props) => {
    const renderItem = (item: IItem): JSX.Element => {
      return <Item {...item} key={item._id} />
    }

    const renderedItems: JSX.Element[] = items.map(renderItem)

    return (
      <BaseList disablePadding {...other}>
        {renderedItems}
      </BaseList>
    )
  }

  return List
}

export default getList
