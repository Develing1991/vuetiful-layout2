<template>
  <div class="grey lighten-4">
    <v-list class="mb-2 py-0">
      <v-list-item ripple @click="$router.push({ name: '내 정보' })">
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
    <v-container class="mb-2 py-0 px-0">
      <v-divider></v-divider>
      <v-row no-gutters v-for="subMenu in subMenus" :key="subMenu.id">
        <v-col
          class="px-0"
          cols="4"
          v-for="(menu, index) in subMenu.menus"
          :key="menu.id"
        >
          <v-btn
            style="background-color: white"
            width="100%"
            height="100"
            tile
            class="elevation-0"
            :style="
              subMenu.menus.length - 1 === index
                ? ''
                : `border-right: 1px solid rgba(0, 0, 0, 0.12)`
            "
          >
            <v-container>
              <v-row>
                <v-col cols="12" class="pa-0 pb-1">
                  <v-avatar :color="menu.color">
                    <v-icon class="white--text">{{ menu.icon }}</v-icon>
                  </v-avatar>

                  <!-- <v-img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    width="50"
                    height="50"
                    class="d-inline-block"
                  >
                  </v-img> -->
                </v-col>
                <v-col cols="12" class="pa-0 pt-1 text-caption">
                  {{ menu.name }}
                </v-col>
              </v-row>
            </v-container>
          </v-btn>
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-container>
    <!-- 광고 -->
    <v-list class="mb-2 py-0">
      <div v-for="item in addBanners" :key="item.id">
        <v-list-item ripple>
          <template>
            <v-list-item-content>
              <v-img
                :aspect-ratio="400 / 50"
                :src="item.url"
                :alt="`banner-${item.id}`"
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
  };
</script>

<style></style>
