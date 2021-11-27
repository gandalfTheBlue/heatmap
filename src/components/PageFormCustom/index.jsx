import React from 'react'
import { Button, Form } from 'antd'
import { formLayout } from 'src/utils/const'
import { getStatus } from 'src/utils/common'
import FormBottom from 'src/components/FormBottom'
import { useRouteMatch } from 'react-router'
import useActiveRoute from 'src/hooks/useActiveRoute'

import './index.less'

const PageFormCustom = ({
  children,
  title,
  fullTitle,
  customClass,
  form,
  onFinish,
  cancel,
  onFieldsChange,
  onValuesChange,
}) => {
  const match = useRouteMatch()
  const { title: defaultTitle } = useActiveRoute()
  const [defaultForm] = Form.useForm()
  const entityId = match.params.id
  const isEdit = !!entityId
  const status = getStatus(isEdit)
  if (!title) {
    title = defaultTitle
  }

  const finalTitle = fullTitle ?? `${status}${title}`

  return (
    <div className={`page admin-form ${customClass}`}>
      <div className="admin-form-header">
        <Button onClick={cancel}>返回</Button>
        <div className="admin-form-title">{finalTitle}</div>
        <div></div>
      </div>
      <Form
        {...formLayout}
        form={form ?? defaultForm}
        onFinish={onFinish}
        onFieldsChange={onFieldsChange}
        onValuesChange={onValuesChange}
      >
        {children}
        <FormBottom cancel={cancel} />
      </Form>
    </div>
  )
}

export default PageFormCustom
