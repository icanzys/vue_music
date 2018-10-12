<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script>
import MusicList from '../music-list/music-list.vue'
import {mapGetters} from 'vuex'
import {getSingerDetail} from '../../api/singer.js'
import {ERR_OK} from '../../api/config.js'
import {createSong} from '../../common/js/song.js'
export default {
  components: {
    MusicList
  },
  computed: {
    ...mapGetters([
      'singer'
    ]),
    title() {
      return this.singer.name
    },
    bgImage() {
      return this.singer.avatar
    }
  },
  created() {
    this._getDetail()
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) {
        this.$router.push({
          path: '/singer'
        })
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
         this.songs = this._normalizeSongs(res.data.list)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((item) => {
        let {musicData} = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  data () {
    return {
      songs: []
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'

.slide-enter-active, .slide-leave-active
    transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>

