import Rank from '../components/rank/rank.vue'
import Recommend from '../components/recommend/recommend.vue'
import Search from '../components/search/search.vue'
import Singer from '../components/singer/singer.vue'
import SingerDetail from '../components/singer-detail/singer-detail.vue'
export default [
  {
    path: '/',
    redirect: '/recommend',
  },
  {
    path: '/rank',
    component: Rank,
  },
  {
    path: '/recommend',
    component: Recommend,
  },
  {
    path: '/search',
    component: Search,
  },{
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  }
]