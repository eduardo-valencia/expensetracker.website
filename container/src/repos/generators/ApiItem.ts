import { AxiosResponse } from 'axios'
import apiConfig from '../../api/config'
import ApiItem from '../../types/ApiItem'

export class ApiItemRepo<EditableFields, Item extends ApiItem> {
  constructor(private route: string) {}

  create = (item: EditableFields): Promise<AxiosResponse<Item>> => {
    return apiConfig.post<Item>(this.route, item)
  }

  edit = (
    id: Item['_id'],
    item: EditableFields
  ): Promise<AxiosResponse<Item>> => {
    const url: string = `${this.route}/${id}`
    return apiConfig.put<Item>(url, item)
  }
}
