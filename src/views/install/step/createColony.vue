<template>
        <Form :model="formItem" :label-width="80">
          <FormItem label="选择">
            <Row>
              <Col span="18">
                <Select v-model="formItem.select">
                    <Option value="集群一">集群一</Option>
                    <Option value="集群二">集群二</Option>
                    <Option value="集群三">集群三</Option>
                </Select>
              </Col>
            </Row>
        </FormItem>
          <FormItem label="集群名称">
            <Row>
                <Col span="18">
                    <Input v-model="formItem.input" placeholder="请填写数据中心名称"></Input>
                </Col>
                <Col span="4" offset="1">
                    <Button>添加</Button>
                </Col>
            </Row>
          </FormItem>
        </Form>
</template>
<script>
export default {
  data () {
    return {
      modal1: true,
      formItem: {
        select: '',
        input: ''
      }
    }
  },
  methods: {
    ok () {
      this.$Message.info('Clicked ok')
    },
    cancel () {
      this.modal1 = false
      this.$Message.info('Clicked cancel')
    }
  }
}
</script>
<style lang="less" scoped>
</style>
