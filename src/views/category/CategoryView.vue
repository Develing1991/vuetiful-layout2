<template>
  <!-- <v-card class="mx-auto">
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-avatar>
            <v-icon>{{ item.action }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title">
          <v-list-item-avatar>
            <v-img :src="child.url"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card> -->
  <div>
    <v-btn @click="all"> all </v-btn>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel v-for="(item, i) in items" :key="i">
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="subItem in item.items"
                :key="subItem.title"
                cols="4"
              >
                <img
                  :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`"
                  alt="lorem"
                  class="image"
                  height="100%"
                  width="100%"
                />
                <!-- :src="susbItem.url" -->
              </v-col>
            </v-row>
          </v-container>
          <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. -->
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  export default {
    data: () => ({
      allClicked: false,
      panel: [],
      items: [
        {
          action: 'mdi-coffee',
          active: true,
          title: '카페',
          items: [
            {
              title: '스타벅스',
              url: 'https://wdgift.co.kr/data/item/1571482985/4YSF4YWp4YSA4YWp22.png',
            },
            {
              title: '커핀그루나루',
              url: 'https://mblogthumb-phinf.pstatic.net/20160606_255/ppanppane_1465209133567Exe6I_PNG/%C4%BF%C7%C7%B1%D7%B7%E7%B3%AA%B9%AB_%B7%CE%B0%ED_%281%29.png?type=w800',
            },
            {
              title: '투썸플레이스',
              url: 'https://www.shinhancard.com/pconts/images/contents/icon/bg_cardLookBg232.png',
            },
            {
              title: '스무디킹',
              url: 'https://w7.pngwing.com/pngs/837/4/png-transparent-smoothie-king-juice-new-orleans-restaurant-juice-love-food-text.png',
            },
            {
              title: '쥬씨',
              url: 'https://modo-phinf.pstatic.net/20220225_291/1645724294720p9L1u_PNG/mosacAru6L.png?type=f320_320',
            },
          ],
        },
        {
          action: 'mdi-bird',
          title: '치킨',
          items: [
            {
              title: 'BHC',
              url: 'https://mblogthumb-phinf.pstatic.net/20160507_185/ppanppane_1462549491273dSctQ_PNG/Untitled-1-27.png?type=w800',
            },
            {
              title: 'BBQ',
              url: 'https://mblogthumb-phinf.pstatic.net/20160507_233/ppanppane_1462548783999tnIYw_PNG/Untitled-1-36.png?type=w800',
            },
          ],
        },
        {
          action: 'mdi-storefront-outline',
          title: '편의점',
          items: [
            {
              title: 'CU',
              url: 'https://blog.kakaocdn.net/dn/tyZ4s/btqVzRA237b/fKErznVXSHDV4furT0FkW1/img.jpg',
            },
            {
              title: 'GS25',
              url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/GS25_BI_%282005%29.svg/1200px-GS25_BI_%282005%29.svg.png',
            },
          ],
        },
        {
          action: 'mdi-ticket-confirmation-outline ',
          title: '상품권',
          items: [
            {
              title: '요기요',
              url: 'https://image.newdaily.co.kr/site/data/img/2020/06/03/2020060300145_0.png',
            },
            {
              title: '컬쳐랜드',
              url: 'https://w.namu.la/s/fb0fc09b58b8683bf1116d009574e8455fee3cf7dd8ef01eee6fe5191c2d3b8271f9ced54deafe920dfbf5e73c32b26c61d15702957c384d099f65414ae0545f5d2ba4d5167775cc046c58341a97253f',
            },
            {
              title: '구글플레이 기프트',
              url: 'https://e7.pngegg.com/pngimages/737/981/png-clipart-google-play-app-store-optimization-android-angle-rectangle.png',
            },
            {
              title: '롯데멤버스',
              url: 'http://photo.sentv.co.kr/photo/2019/08/14/20190814043233.png',
            },
            {
              title: '쿠팡이즈',
              url: 'https://www.coupangeats.com/wp-content/uploads/2021/10/AppIcon-with-border.png',
            },
          ],
        },
        {
          action: 'mdi-content-cut',
          title: '기타',
          items: [
            { title: '소품상품' },
            { title: '배송상품' },
            { title: '이가자헤어비스' },
            { title: '글라스박스' },
            { title: '인터컨티넨탈' },
          ],
        },
      ],
    }),

    methods: {
      all() {
        this.allClicked = !this.allClicked;
        this.panel = [];
        if (this.allClicked) {
          this.items.forEach((item, index) => {
            this.panel.push(index);
          });
        }
      },
      // Reset the panel
      none() {},
    },
  };
</script>

<style></style>
