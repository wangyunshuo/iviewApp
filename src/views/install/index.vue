<template>
  <div>
    <p><i>{{$store.state.app}}</i></p>
    <Modal
        v-model="modal1"
        :title="title"
        :mask-closable="false"
        >
        <createDataCenter  v-if='isShow==1'/>
        <createColony v-if='isShow==2'/>
        <addHost v-if='isShow==3'/>
        <div slot="footer">
            <Button type="primary" size="small" @click='last(title)'>上一步</Button>
            <Button size="small" @click='skip(title)'>跳过</Button>
            <Button type="primary" size="small" @click='next(title)'>下一步</Button>
         </div>
    </Modal>
    <Button type="primary" @click='create'>创建</Button>
  </div>
</template>
<script>
import createDataCenter from './step/createDataCenter.vue'
import createColony from './step/createColony.vue'
import addHost from './step/addHost.vue'
export default {
  data () {
    return {
      isShow: 1,
      modal1: false,
      title: '新建数据中心'
    }
  },
  components: {
    createDataCenter,
    createColony,
    addHost
  },
  methods: {
    // 下一步
    next (title) {
      switch (title) {
        case '新建数据中心':
          this.title = '新建集群'
          this.isShow = 2
          break
        case '新建集群':
          this.title = '添加主机'
          this.isShow = 3
          break
      }
    },
    // 上一步
    last (title) {
      switch (title) {
        case '新建数据中心':
          this.title = '新建数据中心'
          this.isShow = 1
          break
        case '新建集群':
          this.title = '新建数据中心'
          this.isShow = 1
          break
        case '添加主机':
          this.title = '新建集群'
          this.isShow = 2
          break
      }
    },
    // 跳过
    skip (title) {
      switch (title) {
        case '新建数据中心':
          this.title = '新建集群'
          this.isShow = 2
          break
        case '新建集群':
          this.title = '添加主机'
          this.isShow = 3
          break
      }
    },
    // 创建
    create () {
      this.modal1 = true
      this.title = '新建数据中心'
      this.isShow = 1
    }
  }
}
</script>
<style lang="less" scoped>
</style>
