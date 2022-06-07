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
      <v-card elevation="0" class="px-4">
        <v-simple-table dense>
          <template v-slot:default>
            <!-- <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
              </tr>
            </thead> -->
            <tbody>
              <tr v-for="(ui, index) in userInfo" :key="ui.column">
                <td
                  class="text-caption grey--text px-0"
                  width="20%"
                  style="border-bottom: none"
                >
                  {{ ui.column }}
                </td>
                <td
                  class="text-caption"
                  width="80%"
                  style="border-bottom: none"
                >
                  {{ ui.value }}
                  <span
                    v-if="index === 0"
                    style="font-size: 0.2rem; position: absolute; right: 0px"
                    >정보수정
                    <v-icon color="primary"> mdi-chevron-right </v-icon>
                  </span>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
      <v-divider></v-divider>

      <!-- 주소 -->
      <v-card elevation="0" class="px-4">
        <v-simple-table dense>
          <template v-slot:default>
            <tbody>
              <tr v-for="(ua, index) in userAddr" :key="ua.column">
                <td
                  class="text-caption grey--text px-0"
                  width="20%"
                  style="border-bottom: none"
                >
                  {{ ua.column }}
                </td>
                <td
                  class="text-caption"
                  width="80%"
                  style="border-bottom: none"
                >
                  {{ ua.value }}
                  <span
                    v-if="index === 0"
                    style="font-size: 0.2rem; position: absolute; right: 0px"
                    >주소수정
                    <v-icon color="primary"> mdi-chevron-right </v-icon>
                  </span>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
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
    <v-expansion-panels accordion>
      <v-expansion-panel v-for="i in 2" :key="i">
        <v-expansion-panel-header
          class="px-4 elevation-0"
          expand-icon="mdi-chevron-right"
          >gd</v-expansion-panel-header
        >
        <v-expansion-panel-content class="elevation-0">
          <v-switch
            v-model="switch1"
            :label="`Switch 1: ${switch1.toString()}`"
          ></v-switch>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  export default {
    data: () => ({
      switch1: true,
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
      userInfo: [
        { column: '고객명', value: '이수한' },
        { column: '비밀번호', value: '*******' },
        { column: '이메일', value: 'completed0728@gmail.com' },
        { column: '연락처', value: '010****8884' },
      ],
      userAddr: [
        { column: '수령인', value: '이수한' },
        {
          column: '주소',
          value:
            '[41123] 인천광역시 오지구 렛잇고 23211 에욱아파트 123동 1234호',
        },
        { column: '연락처', value: '010****8884' },
      ],
    }),
    mounted() {
      //debugger;
    },
  };
</script>

<style>
  tbody tr:hover {
    background-color: transparent !important;
  }
  .v-expansion-panel::before {
    box-shadow: none;
  }
</style>
