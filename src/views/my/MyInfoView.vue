<template>
  <!-- 
======================================================
======================================================
전체적으로 테이블로 수정해서 깨지지않게 수정할 필요가 있어보임 
======================================================
======================================================-->
  <div class="grey lighten-4">
    <v-list class="mb-2 py-0">
      <v-list-item :ripple="false" class="px-0">
        <template>
          <v-card tile elevation="0">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-2 pl-1">(주) 프리랜서</div>
                <v-list-item-title class="text-h5 mb-1">
                  이수한
                </v-list-item-title>
                <v-list-item-subtitle
                  :style="`width:${$vuetify.breakpoint.width - 270}px`"
                  class="pl-1"
                  >대리
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-btn
                color="primary"
                icon
                outlined
                width="60"
                height="60"
                class="mr-2"
              >
                <v-icon size="40">mdi-account</v-icon>
              </v-btn>
            </v-list-item>

            <v-card-actions class="mr-3 py-0">
              <v-spacer></v-spacer>
              <v-btn text small> 로그아웃 </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item class="px-0">
        <v-col cols="3" class="py-0 pr-0">
          <v-list-item-content>
            <template>
              <span
                style="font-size: 0.2rem; text-align: right; visibility: hidden"
                >라인
                <v-icon color="primary"> mdi-chevron-right </v-icon>
              </span>
            </template>
            <v-list-item-subtitle class="grey--text">
              <span class="text-caption"> 고객명 </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle class="grey--text">
              <span class="text-caption"> 비밀번호 </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle class="grey--text">
              <span class="text-caption"> 이메일 </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle class="grey--text">
              <span class="text-caption"> 연락처 </span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-col>
        <v-col cols="9" class="py-0"
          ><v-list-item-content>
            <template>
              <span style="font-size: 0.2rem; text-align: right"
                >정보수정
                <v-icon color="primary"> mdi-chevron-right </v-icon>
              </span>
            </template>
            <v-list-item-subtitle>
              <span class="text-caption"> 이수한 </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <span class="text-caption"> ****** </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <span class="text-caption"> completed0728@gmail.com </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <span class="text-caption"> 010****8884 </span>
            </v-list-item-subtitle>
          </v-list-item-content></v-col
        >
      </v-list-item>
      <!-- 주소 -->
      <v-divider></v-divider>

      <v-list-item class="px-0 pr-0" three-line>
        <v-col cols="3" class="py-0">
          <v-list-item-content>
            <v-list-item-subtitle class="grey--text pt-2">
              <span class="text-caption"> 수령인 </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle class="grey--text">
              <span class="text-caption"> 주소 </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle class="grey--text">
              <span class="text-caption"> 연락처 </span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-col>

        <v-col cols="9" class="py-0"
          ><v-list-item-content>
            <template>
              <span style="font-size: 0.2rem; text-align: right"
                >주소수정
                <v-icon color="primary"> mdi-chevron-right </v-icon>
              </span>
            </template>
            <v-list-item-subtitle>
              <span class="text-caption"> 이수한 </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <span class="text-caption">
                [41123] 인천광역시 오지구 렛잇고 23211 에욱아파트 123동 1234호
              </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <span class="text-caption"> 010****8884 </span>
            </v-list-item-subtitle>
          </v-list-item-content></v-col
        >
      </v-list-item>
    </v-list>

    <!-- 기타메뉴 -->
    <v-list class="mb-2 py-0" dense>
      <div v-for="item in others" :key="item.id">
        <v-list-item ripple>
          <template>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
  export default {
    data: () => ({
      others: [
        { id: 1, title: '푸시설정' },
        { id: 2, title: '맞춤 설정' },
      ],
      addBanners: [
        {
          id: 1,
          url: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg',
        },
        {
          id: 2,
          url: 'https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg',
        },
      ],
      subMenus: [
        {
          id: 'm1',
          menus: [
            {
              id: 1,
              name: '포인트',
              icon: 'mdi-file-powerpoint-box-outline',
              color: 'yellow darken-2',
            },
            {
              id: 2,
              name: '쿠폰함',
              icon: 'mdi-package-variant',
              color: 'orange darken-3',
            },
            {
              id: 3,
              name: '선물함',
              icon: 'mdi-gift-open-outline',
              color: 'primary lighten-1',
            },
          ],
        },
        {
          id: 'm2',
          menus: [
            { id: 4, name: '찜', icon: 'mdi-heart-outline', color: 'red' },
            {
              id: 5,
              name: '주문내역',
              icon: 'mdi-clipboard-list-outline',
              color: 'secondary',
            }, //mdi-clipboard-text-outline
            {
              id: 6,
              name: '리뷰관리',
              icon: 'mdi-comment-edit-outline',
              color: 'teal lighten-2',
            },
          ],
        },
      ],
    }),
    mounted() {
      //debugger;
    },
  };
</script>

<style></style>
