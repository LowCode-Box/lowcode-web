import { ProFormList, ProCard, ProFormText, ProForm } from "@ant-design/pro-components"

export const MountEventSetter = () => {
  return (
    <ProFormList
        name="attributes"
        label="规格"
        creatorButtonProps={{
          creatorButtonText: '添加规格项',
        }}
        min={1}
        copyIconProps={false}
        itemRender={({ listDom, action }, { index }) => (
          <ProCard
            bordered
            style={{ marginBlockEnd: 8 }}
            title={`规格${index + 1}`}
            extra={action}
            bodyStyle={{ paddingBlockEnd: 0 }}
          >
            {listDom}
          </ProCard>
        )}
        creatorRecord={{ name: '', items: [{ name: '' }] }}
      >
        <ProFormText
          style={{ padding: 0 }}
          width="md"
          name="name"
          label="规格名"
        />
        <ProForm.Item isListField style={{ marginBlockEnd: 0 }} label="规格值">
          <ProFormList
            name="items"
            creatorButtonProps={{
              creatorButtonText: '新建',
              icon: false,
              type: 'link',
              style: { width: 'unset' },
            }}
            min={1}
            copyIconProps={false}
            deleteIconProps={{ tooltipText: '删除' }}
            itemRender={({ listDom, action }) => (
              <div
                style={{
                  display: 'inline-flex',
                  marginInlineEnd: 25,
                }}
              >
                {listDom}
                {action}
              </div>
            )}
          >
            <ProFormText allowClear={false} width="xs" name={['name']} />
          </ProFormList>
        </ProForm.Item>
      </ProFormList>
  )
}