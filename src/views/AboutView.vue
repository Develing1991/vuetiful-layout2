<template>
  <v-card class="mx-auto" max-width="100%" elevation="0">
    <v-container>
      <v-row>
        <v-col class="pa-0">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="100vmin"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div style="font-size: 5vw" class="font-weight-bold red--text">
            지금 45% 할인 중
          </div>
          <div style="font-size: 4vw" class="font-weight-bold">
            팀스핏 빅사이즈 기능성 쿨 카라 반팔 티셔츠
          </div>
          <div
            style="font-size: 4vw"
            class="text-decoration-line-through grey--text"
          >
            27,750
          </div>
          <div style="font-size: 4.5vw" class="font-weight-bold red--text">
            15,000원
          </div>
          <div style="font-size: 5vw"></div>
        </v-col>
        <v-col>
          <div style="font-size: 5vw" class="font-weight-bold red--text">
            지금 45% 할인 중
          </div>
          <div style="font-size: 4vw" class="font-weight-bold">
            팀스핏 빅사이즈 기능성 쿨 카라 반팔 티셔츠
          </div>
          <div
            style="font-size: 4vw"
            class="text-decoration-line-through grey--text"
          >
            27,750
          </div>
          <div style="font-size: 4.5vw" class="font-weight-bold red--text">
            15,000원
          </div>
          <div style="font-size: 5vw"></div>
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-divider /> -->

    <!-- <v-card-text>
      I'm a thing. But, like most politicians, he promised more than he could
      deliver. You won't have time for sleeping, soldier, not with all the bed
      making you'll be doing. Then we'll go with that data file! Hey, you add a
      one and two zeros to that or we walk! You're going to do his laundry? I've
      got to find a way to escape.
    </v-card-text> -->

    <!-- <v-expand-transition>
      <div v-show="show">
        <v-divider />

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition> -->
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  };
</script>
