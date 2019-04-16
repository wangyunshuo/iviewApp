<template>
    <Form ref="formDynamic" :model="formDynamic" :label-width="60">
        <FormItem
                v-for="(item, index) in formDynamic.items"
                v-if="item.status"
                :key="index"
                :label="'主机 ' + item.index"
                :prop="'items.' + index + '.value'"
                >
            <Row type="flex" justify="space-around">
                <Col span="7">
                    <Select v-model="formItem.selectOne">
                        <Option value="主机一">主机一</Option>
                        <Option value="主机二">主机二</Option>
                        <Option value="主机三">主机三</Option>
                    </Select>
                </Col>
                <Col span="7" offset="1">
                    <Select v-model="formItem.selectTwo">
                        <Option value="主机一">主机一</Option>
                        <Option value="主机二">主机二</Option>
                        <Option value="主机三">主机三</Option>
                    </Select>
                </Col>
                <Col span="3" offset="1">
                    <Button>添加</Button>
                </Col>
                <Col span="3" offset="1">
                    <Button @click='handleRemove(index)'>删除</Button>
                </Col>
            </Row>
        </FormItem>
        <FormItem>
            <Row type='flex' justify="end">
                <Col offset="1">
                    <Button @click="handleAdd" icon="md-add">创建主机</Button>
                </Col>
            </Row>
        </FormItem>
    </Form>
</template>
<script>
export default {
  data () {
    return {
      index: 1,
      formItem: {
        selectOne: '',
        selectTwo: ''
      },
      formDynamic: {
        items: [
          {
            value: '',
            index: 1,
            status: 1
          }
        ]
      }
    }
  },
  methods: {
    handleAdd () {
      this.index++
      this.formDynamic.items.push({
        value: '',
        index: this.index,
        status: 1
      })
    },
    handleRemove (index) {
      this.formDynamic.items[index].status = 0
    }
  }
}
</script>
