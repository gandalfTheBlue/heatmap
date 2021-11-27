import { getStatus } from 'src/utils/common'

const usePageForm = (entity = {}) => {
  const entityId = entity.id
  const isEdit = !!entityId
  const status = getStatus(isEdit)

  return [entityId, isEdit, status]
}

export default usePageForm
