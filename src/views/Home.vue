<template>
    <Tooltip placement="top">
        <Button @click='fn'>Multiple lines</Button>
        <Button @click='fn1'>333</Button>
        <div slot="content">
            <p>Display multiple lines of information</p>
            <p><i>{{$store.state.app}}</i></p>
        </div>
    </Tooltip>
</template>
<script>
export default {
  methods: {
    fn () {
      console.log(this.$store.dispatch('add'))
    },
    fn1 () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
