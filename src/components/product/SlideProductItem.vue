<template>
  <div style="height: 100%">
    <div
      class="img"
      :style="{
        'background-image': `url(${'https://dliveimg.kbnc.co.kr/shop/upload/main/155/0000000000642491651033823320_main.png'})`,
      }"
    ></div>
    <div style="font-size: 8px" class="font-weight-bold red--text">
      지금 45% 할인 중
    </div>
    <div style="font-size: 8px" class="font-weight-bold">
      팀스핏 빅사이즈 기능성 쿨 카라 반팔 티셔츠
    </div>
    <div style="font-size: 8px" class="text-decoration-line-through grey--text">
      27,750
    </div>
    <div style="font-size: 8px" class="font-weight-bold red--text">
      15,000원
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  .img {
    //color: red;
    width: 100%;
    height: 50%;
    //background-image: url(https://dliveimg.kbnc.co.kr/shop/upload/main/155/0000000000642491651033823320_main.png); //이미지 사이즈가 정해저야함
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: top center;
  }
</style>
