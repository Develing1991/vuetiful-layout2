<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12">
        <div class="pa-10 rounded-xl" style="border: 2px solid">
          <div style="text-align: center" class="font-weight-bold text-h4">
            로그인
          </div>

          <form>
            <v-text-field
              outlined
              dense
              label="이메일"
              prepend-inner-icon="mdi-email-outline"
              clearable
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="비밀번호"
              prepend-inner-icon="mdi-lock-outline"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              @click:append="showPass = !showPass"
              pattern="[A-Za-z]+"
              clearable
              @keydown="aaa($event)"
            ></v-text-field>
            <!-- <v-text-field
              outlined
              dense
              label="비밀번호"
              prepend-inner-icon="mdi-lock-outline"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="showPass ? 'text' : 'password'"
              hint="At least 8 characters"
              @click:append="showPass = !showPass"
              clearable
            ></v-text-field> -->
            <input type="submit" />
          </form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        showPass: false,
        // rules: {
        //   required: (value) => !!value || 'Required.',
        //   min: (v) => v.length >= 8 || 'Min 8 characters',
        //   emailMatch: () => `The email and password you entered don't match`,
        // },
      };
    },
    methods: {
      aaa(event) {
        console.log(event);
      },
    },
  };
</script>

<style></style>
