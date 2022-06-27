<template>
  <v-dialog v-model="dialog" scrollable width="80%">
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <slot></slot>
      </div>
    </template>
    <v-card>
      <v-card-title class="ma-auto font-weight-bold"
        >발송문구 불러오기</v-card-title
      >
      <v-divider />
      <v-card-text style="height: 300px">
        {{ dialogm1 }}
        <v-radio-group v-model="dialogm1" column>
          <v-list outlined class="py-0">
            <v-list-item>
              <v-list-item-content class="py-0">
                <v-radio label="[예시문구1]가낟라마" value="예시1" />
              </v-list-item-content>
              <v-list-item-action class="my-0">
                <v-icon color="red darken-3"> mdi-trash-can-outline </v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-divider />
            <v-list-item>
              <v-list-item-content class="py-0">
                <v-radio label="[예시문구1]가낟라마" value="예시2" />
              </v-list-item-content>
              <v-list-item-action class="my-0">
                <v-icon color="red darken-3"> mdi-trash-can-outline </v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-divider />
            <v-list-item>
              <v-list-item-content class="py-0">
                <v-radio label="[예시문구1]가낟라마" value="예시3" />
              </v-list-item-content>
              <v-list-item-action class="my-0">
                <v-icon color="red darken-3"> mdi-trash-can-outline </v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-divider />
            <v-list-item>
              <v-list-item-content class="py-0">
                <v-radio label="[예시문구1]가낟라마" value="예시4" />
              </v-list-item-content>
              <v-list-item-action class="my-0">
                <v-icon color="red darken-3"> mdi-trash-can-outline </v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-radio-group>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-row>
          <v-col cols="6">
            <v-btn color="black" outlined width="100%" @click="dialog = false">
              취소
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn color="orange" dark width="100%" @click="dialog = false">
              불러오기
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogm1: '',
        dialog: false,
      };
    },
  };
</script>

<style></style>
