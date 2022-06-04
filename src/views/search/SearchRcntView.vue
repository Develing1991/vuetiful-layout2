<template>
  <v-list class="pt-0" dense>
    <v-list-item-group>
      <div v-for="(item, i) in items" :key="i">
        <v-list-item class="mx-0">
          <v-list-item-icon>
            <v-icon>mdi-clock-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            @click="
              $router.push({
                name: 'ProductList',
                params: { searchTerm: item.text },
              })
            "
          >
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
          <v-icon @click="deleteRcnt(item.id)">mdi-close</v-icon>
        </v-list-item>

        <v-divider></v-divider>
      </div>
    </v-list-item-group>
  </v-list>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { text: 'Real-Time', id: 1 },
        { text: 'Audience', id: 2 },
        { text: 'Conversions', id: 3 },
      ],
    }),
    methods: {
      deleteRcnt(id) {
        alert(id);
      },
    },
  };
</script>

<style></style>
