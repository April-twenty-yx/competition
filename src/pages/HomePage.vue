<template>
  <q-page>
    <!-- 传入的图片比例最好为 16/9，否则可能会出现图片显示不全的问题 -->
    <banner :p-height="bannerH" :p-cha="bannerC"></banner>
    <somecard :des-array="firstArray" :id="oneTitle" :part-title="oneTitle"></somecard>
    <number :num-array="twoArray"></number>
    <intro :id="thrData.thrTitie" :part-title="thrData.thrTitie" :intro-cha="thrData.thrDes" :intro-src="thrData.thrSrc"></intro>
    <gallery :id="fouTitle" :t-d-array="fouArray" :part-title="fouTitle"></gallery>
    <footpart></footpart>
  </q-page>
</template>

<script>
import banner from '../components/home/Banner.vue'
import somecard from '../components/common/Card.vue'
import number from '../components/home/Number.vue'
import intro from '../components/home/Intro.vue'
import gallery from '../components/home/Gallery'
import footpart from '../components/home/Footer'
import { topbanner } from '../network/request.js'
// import { topbanner, midfirpart, midtwopart, midthrpart, midfoupart } from '../network/request.js'
export default {
  components: {
    banner,
    // parttitle,
    somecard,
    number,
    intro,
    gallery,
    footpart
  },
  data () {
    return {
      bannerId: '1',
      bannerH: 500,
      bannerC: '这是一段描述文字，这是一段描述文字，这是一段描述文字',
      // 图片地址
      bannerS: '',
      firstArray: [
        {
          _id: '1',
          icon: '../assets/书籍.svg',
          title: '出版业务',
          des: '这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字'
        },
        {
          _id: '2',
          icon: '../assets/书籍.svg',
          title: '打印业务',
          des: '这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字'
        },
        {
          _id: '3',
          icon: '../assets/书籍.svg',
          title: '出版业务',
          des: '这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字'
        },
        {
          _id: '4',
          icon: '../assets/书籍.svg',
          title: '打印业务',
          des: '这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字'
        }
      ],
      // ========================
      oneTitle: '第一部分',
      // ========================
      twoArray: [
        {
          _id: 'xx',
          num: 15,
          des: '成立15周年'
        },
        {
          _id: 'yy',
          num: 125,
          des: '专业技术人员100多名'
        },
        {
          _id: 'aa',
          num: 500,
          des: '印刷票据500多万张'
        },
        {
          _id: 'bb',
          num: 3200,
          des: '服务3200多家企业'
        }
      ],
      // ========================
      thrData: {
        thrTitie: '第三部分',
        thrDes: '哈忽丑回座水发售鬼朴任卧济匹冒圈靠妖丹板抵量赚鱼两坊捉肌豆箱惑饶念掘余掉张社幅探委沉紧凝出庸采塞抽搞泛卷晋改氏育谢虫它援李宜悲龟女钓按伴角喊嘴掏蔽箭漆问占赠漏巴誓盯匀晨完泪质锋曾仅枕棋呆叔沙串础娇嘉悄炼',
        thrSrc: 'https://placeimg.com/500/300/nature'
      },
      // =======================
      fouArray: [
        [
          {
            _id: '11',
            src: 'https://cdn.quasar.dev/img/mountains.jpg',
            des: '阵鸿袭嘱叙俺蓝肪社已笤抗筋蛹豁诡别杉扼办龄芥凹削毯送表魄僧风阵鸿袭嘱叙俺蓝肪社已笤抗筋蛹豁诡别杉扼办龄芥凹削毯送表魄僧风阵鸿袭嘱叙俺蓝肪社已笤抗筋蛹豁诡别杉扼办龄芥凹削毯送表魄僧风'
          },
          {
            _id: '12',
            src: 'https://cdn.quasar.dev/img/parallax1.jpg',
            des: '阵鸿袭嘱叙俺蓝肪社已笤抗筋蛹豁诡别杉扼办龄芥凹削毯送表魄僧风阵鸿袭嘱叙俺蓝肪社已笤抗筋蛹豁诡别杉扼办龄芥凹削毯送表魄僧风阵鸿袭嘱叙俺蓝肪社已笤抗筋蛹豁诡别杉扼办龄芥凹削毯送表魄僧风'
          }
        ],
        [
          {
            _id: '21',
            src: 'https://cdn.quasar.dev/img/parallax2.jpg',
            des: 'cpn'
          },
          {
            _id: '22',
            src: 'https://cdn.quasar.dev/img/quasar.jpg',
            des: 'cpn'
          }
        ]
      ],
      fouTitle: '第四部分'
    }
  },
  methods: {
    // Banner
    /*
    data: {
      _id: String,
      bheight: Number, // 图片高度
      bcha: String, // 图片中的文字描述
      bsrc: String(base64编码) //图片地址
    }
     */
    getBannerInfo () {
      topbanner({
        method: 'get'
      })
        .then(function (response) {
          this.bannerId = response.data._id
          this.bannerH = response.data.bheight
          this.bannerC = response.data.bcha
          this.bannerS = response.data.bsrc
        })
    },
    // OnePart
    /*
    data: {
      title: String, //第一部分内容的标题
      dataArray: [
        {
          _id: String,
          icon: String, // 图标 base64 编码
          title: String, // 每个小卡片的标题
          des: String // 每个小卡片上的文字描述
        },
        ...
      ]
    }
     */
    getOnePartInfo () {
      this.$axios.get('#')
        .then(function (response) {
          this.oneTitle = response.data.title
          this.firstArray = response.data.dataArray
        })
    },
    // TwoPart
    /*
    暂定：数组长度为2的整数倍，且不大于6
    data: {
      numArray: [
        {
          _id: String,
          num: Number, // 显示的人数
          des: String // 显示的描述
        },
      ...
      ]
    }
     */
    getTwoPartInfo () {
      this.$axios.get('#')
        .then(function (response) {
          this.twoArray = response.data.numArray
        })
    },
    // ThreePart
    /*
    data: {
      thrTitle: String, // 第三部分的标题
      thrDes: String, // 第三部分的描述
      thrSrc: String // 第三部分放的图片 base64 编码
    }
     */
    getThrPartInfo () {
      this.$axios.get('#')
        .then(function (response) {
          this.thrData = response.data
        })
    },
    // FourPart
    /*
    二维数组，且子数组中最多只能包含两个对象
    data: {
      title: '',
      TDArray: [
        [
          {
            _id: String,
            src: String,
            des: String
          },
          {
            ...
          }
        ],
        ...
      ]
    }
     */
    getFouPartInfo () {
      this.$axios.get('#')
        .then(function (response) {
          this.fouTitle = response.data.title
          this.fouArray = response.data.TDArray
        })
    }
  }
}
</script>

<style lang="stylus">

</style>
