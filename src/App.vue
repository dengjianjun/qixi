<template>
  <div id="app" @click.once="play">
    <div class="content">
      <img src="./assets/g1.gif"/>
      <h3 class="title">小姐姐，做我女朋友吧！</h3>
      <div class="operate">
        <button type="primary" class="btn" @click="agree">好呀</button>
        <button type="warn" class="btn" @click="disagree">不好</button>
      </div>
      <div class="message" v-for="one in love" :key="one">{{one}}</div>
    </div>
    <div v-show="showAlt" class="alertBox">
      <div class="content">
        <div class="alertTitle">小姐姐，要不要再想想?</div>
        <div class="alertText">拒绝了可就没有大红包了?</div>
        <div class="alertBot">
          <button class="alertBtn cancel" @click="showAlt=false;status=1">同意</button>
          <button class="alertBtn handle" @click="showAlt=false;status=2">拒绝</button>
        </div>
      </div>
    </div>
    <audio id="myAudio" ref="audio" src="http://140.143.132.225/love/pdd.mp3" autoplay muted loop></audio>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      love: [],
      timer: {},
      showAlt: false,
      status: 0
    }
  },
  mounted () {
    this.love = []
    this.timer = {}
    let msg = {
      2000: '张小慧，我爱你！',
      3000: 'Zhang Xiaohui, I love you! (英语)',
      6000: '張小慧、愛しています (日语)',
      8000: 'Zhang Xiaohui, ich liebe dich! (德语)',
      10000: 'Чжан сяохуэй, я люблю тебя! (俄语)',
      12000: 'Zhang Xiaohui, ti amo! (意大利语)',
      13000: '¡Zhang Xiaohui, te amo! (西班牙语)',
      16000: '장소혜,나 사랑해요! (韩语)',
      18000: 'Zhang Xiaohui, jeg elsker dig! (丹麦语)',
      20000: 'Zhang Xiaohui, σ \'αγαπώ! (希腊语)'
    }
    let ref = this
    for (let key in msg) {
      let t = setTimeout(function () {
        ref.love.push(msg[key])
        delete ref.timer[key]
      }, key)
      ref.timer[key] = t
    }
  },
  methods: {
    play(){
      this.$refs.audio.muted = false
      this.$refs.audio.play()
    },
    agree: function () {
      this.$toast({
        icon: 'none',
        text: '小姐姐，晚上下班后一起约会吧！',
        duration: 3000
      })
    },
    disagree: function () {
      this.showAlt = true
    }
  },
  watch: {
    status (val, oldVal) {
      if (val === 1) {
        this.$toast({
          icon: 'none',
          text: '我就知道小姐姐一定会同意的：）',
          duration: 3000
        })
      } else if (val === 2) {
        this.$toast({
          icon: 'none',
          text: '真遗憾！你错过了1个亿的大红包',
          duration: 3000
        })
      }
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    height: 100vh;
  }
  .content {
    padding: 0 40px;
  }
  .content img {
    width: 100%;
  }
  .content .title {
    display: block;
    text-align: center;
    font-size: 50px;
    font-weight: bolder;
  }
  .content .operate {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .content .operate .btn {
    width: 200px;
    height: 80px;
    display: inline-block;
  }
  .content .operate .btn:first-of-type {
    margin-right: 40px;
  }
  .content .message {
    font-size: 34px;
    margin: 15px 0;
    color: #333;
  }
  .alertBox {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.5);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .alertBox .content {
    width: 600px;
    height: 350px;
    background: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 0;
    box-sizing: border-box;
  }
  .alertTitle {
    font-size: 13pt;
    text-align: center;
    line-height: 30px;
  }
  .alertBot {
    height: 90px;
    display: flex;
    justify-content: space-around;
  }
  .alertBtn {
    width: 165px;
    height: 80px;
    line-height: 80px;
    border-radius: 10px;
    outline: none;
    font-size: 13pt;
    box-sizing: border-box;
  }
  .cancel {
    background: #ffffff;
    border: 1px solid #000000;
  }
  .handle {
    color: #ffffff;
    background: #404040;
  }
  .message {
    margin: 20px;
  }
  .btn {
    width: 200px;
    height: 80px;
    margin-left: 20px;
    border-radius: 8px;
    background: #e64340;
    color: #ffffff;
    font-weight: 600;
  }
  .myAudio{
    height: 0;
    position: absolute;
  }

</style>
