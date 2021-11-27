export const project = '中科微'

export const domain = process.env.REACT_APP_DOMAIN

export const apiBase = `${domain}/delonixServer/api/admin`

export const apiBaseImg = () => `${apiBase}/common/uploadImage`

export const apiBaseFile = () => `${apiBase}/common/uploadFileUseFileName`
