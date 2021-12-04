type Id = number | string

export const getTabId = (id: Id): string => `${id}-tab`

export const getTabGroupId = (id: Id): string => `${id}-group`
