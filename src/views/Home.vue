<template>
  <div class="home">
    <!-- 
    data-wow-offset="100" 
    data-wow-delay="" 
    data-wow-iteration="1" 
    data-wow-duration="500"
    -->

    <div 
    >
    <img 
    class="animate__animated animate__flash"
    data-wow-offset="0"
    data-wow-iteration="infinite"
      src="https://upload.cc/i1/2019/11/20/iBj2Tn.png">
    </div>

    <div 
    >
    <img 
    class="wow flash"
    data-wow-offset="0"
    data-wow-iteration="infinite"
      src="https://upload.cc/i1/2019/11/20/iBj2Tn.png">
    </div>


    <div 
    >
    <img 
    class="wow zoomInUp" 
    data-wow-offset="100"
    data-wow-iteration="1"
      src="https://upload.cc/i1/2019/11/20/iBj2Tn.png">
    </div>


    <div 
    >
    <img 
      class="wow flipInX" 
      data-wow-offset="100" 
      data-wow-iteration="1"
      src="https://upload.cc/i1/2019/11/20/qjDM9B.png">
    </div>


    <div
    >
    <img 
      class="wow hinge" 
      data-wow-offset="100" 
      data-wow-delay=""
      src="https://upload.cc/i1/2019/11/20/m96fkK.png">
    </div>


    <div 
    >
    <img 
      class="wow rollIn" 
      data-wow-offset="100" 
      data-wow-duration="500"
      src="https://upload.cc/i1/2019/11/20/qwASWf.png">
    </div>


    <div 
    >
    <img
      class="wow fadeInUp" 
      data-wow-offset="100" 
      data-wow-delay="" 
      data-wow-iteration="1"
      src="https://upload.cc/i1/2019/11/20/kiLTqC.png">
    </div>


    <!--div
    >
      <img 
      class="wow fadeInUp" 
      data-wow-offset="100" 
      data-wow-delay="0" 
      data-wow-iteration=""
      src="https://picsum.photos/id/1/130/130">
    </div-->
  </div>
</template>

<script>
import {WOW} from 'wowjs'
import {onMounted} from 'vue'
export default {
  setup(){
    // methods v
    const wowFun = ()=>{
      const wow = new WOW({
        offset: 150,
        live: true,
        // boxClass: 'target',
        // animateClass: 'animated',
        // offset: 0,
        // mobile: true,
        // live: true
      })

      wow.init()
    }

    // start v
    onMounted(()=>{
      console.log('%c--- got onMounted ---','color:#777')
      wowFun()
    })
  }
}
// new WOW.init()
</script>

<style lang="sass">
// @import '~animate.css'
@import '~wowjs/css/libs/animate.css' // 二法澤一(b:1/1)

*
  padding: 0
  margin: 0
  box-sizing: border-box
  
.home div
  height: 100vh
  padding-top: 50px
  overflow: hidden

.home div:nth-child(even)
  background-color: #aaa

img
  display: block
  margin: 0 auto

</style>

