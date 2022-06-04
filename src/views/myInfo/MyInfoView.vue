<template>
  <div class="grey lighten-4">
    <v-list class="mb-2 py-0">
      <v-list-item ripple>
        <template>
          <v-list-item-avatar>
            <v-img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>LEE SU HAN</v-list-item-title>
            <v-list-item-subtitle>completed0728@gmail.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>

    <!-- 서브메뉴 -->
    <v-list class="mb-2 py-0">
      <div v-for="subMenu in subMenus" :key="subMenu.id">
        <v-row no-gutters>
          <v-col cols="4" v-for="menu in subMenu.menus" :key="menu.id">
            <v-list-item ripple class="px-0 py-0">
              <!-- <v-list-item-content style="justify-content: center">
                {{ menu.name }}
              </v-list-item-content> -->

              <v-btn
                value="left"
                large
                text
                outlined
                width="100%"
                height="100"
                tile
                class="px-0"
                :retain-focus-on-click="true"
              >
                <!-- <span style="position: relative; bottom: 10px">Favorites</span> -->
                <v-btn :ripple="false" absolute icon class="mb-5">
                  <!-- <v-avatar>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    >
                    </v-img>
                  </v-avatar> -->
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    width="50"
                    height="50"
                  >
                  </v-img>
                </v-btn>
                <v-btn :ripple="false" absolute top text width="100%">{{
                  menu.name
                }}</v-btn>
              </v-btn>
            </v-list-item>
          </v-col>
        </v-row>
      </div>
    </v-list>

    <!-- 광고 -->
    <v-list class="mb-2 py-0">
      <div v-for="item in addBanners" :key="item.id">
        <v-list-item ripple>
          <template>
            <v-list-item-content
              ><v-img
                :src="item.url"
                :alt="`banner-${item.id}`"
                height="40"
              ></v-img>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
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
        { id: 1, title: '공지사항' },
        { id: 2, title: '이벤트' },
        { id: 3, title: '고객센터' },
        { id: 4, title: '환경설정' },
        { id: 5, title: '약관 및 정책' },
      ],
      addBanners: [
        {
          id: 1,
          url: 'https://i.pinimg.com/originals/f7/64/d8/f764d8c6889b701cdd870e1688506375.jpg',
        },
        {
          id: 2,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7PJieFvWT_VNvlPeUAT-XNtCjLB-xmbVbxYYHMr2KFoDVAaF3O7gw5a-pYrW4GJ8RA&usqp=CAU',
        },
      ],
      subMenus: [
        {
          id: 'm1',
          menus: [
            { id: 1, name: '포인트' },
            { id: 2, name: '쿠폰함' },
            { id: 3, name: '선물함' },
          ],
        },
        {
          id: 'm2',
          menus: [
            { id: 4, name: '찜' },
            { id: 5, name: '주문내역' },
            { id: 6, name: '리뷰관리' },
          ],
        },
      ],
    }),
  };
</script>

<style></style>
