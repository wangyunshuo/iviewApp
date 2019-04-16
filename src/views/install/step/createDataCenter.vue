<template>
        <Form :model="formItem" :label-width="100">
          <FormItem label="数据中心名称">
            <Row>
                <Col span="18">
                    <Input v-model="formItem.input" placeholder="请填写数据中心名称"></Input>
                </Col>
                <Col span="4" offset="1">
                    <Button @click='add'>添加</Button>
                </Col>
            </Row>
          </FormItem>
        </Form>
</template>
<script>
export default {
  data () {
    return {
      formItem: {
        input: ''
      }
    }
  },
  methods: {
    // 添加
    add () {
      this.$Message.success('添加成功')
    }
  }
}
</script>
<style lang="less" scoped>
</style>
