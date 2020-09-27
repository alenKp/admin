import advTable from '@/views/banner-manage/adv-table'
export default {
  components: { advTable },
  props: {
    advList: {
      type: Array,
      default() {
        return []
      },
      required: true
    },
    pagination: {
      type: Object,
      default() {
        return {}
      },
      required: true
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    },
    updateAdvList(id) {
      this.$emit('updateAdvList', id)
    },
    editAdv(id) {
      this.$emit('editAdv', id)
    }
  }
}
