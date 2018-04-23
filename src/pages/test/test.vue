<template>
  <div class="content">
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ test$ }}</p>
    <p>{{ count$ }}</p>
    <button type="button" name="button" v-stream:click="click$">点击发出流</button>
    <button type="button" name="button" v-stream:click="sendCount$">点击开始计数</button>
    <A></A>
  </div>
</template>

<script lang="ts">
  import A from './components/a.vue'
  import Vue from 'vue'
  import Component from "vue-class-component";
  import * as Rx from 'rxjs/Rx'
  
  @Component({
    components: {
      A,
    }
  })
  export default class HelloDecorator extends Vue {
    name: string = 'huang';
    age: number = 0;

    click$ = new Rx.Subject();
    sendCount$ = new Rx.Subject();

    created () {
      
    }

    subscriptions () {
      console.log('---');
      return {
        test$: this.click$
          .take(1)
          .concatMap((e: object) => {
            console.log(e);
            return Rx.Observable.of('chen')
              .map((data: string) => {
                return data
              })
          })
          .startWith('huang'),
        count$: this.sendCount$
          .concatMap(() => {
            return Rx.Observable.interval(1000)
          })
          .startWith(0)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    width: 100vw;
    height: 100vh;
    font-size: 30px;

    button {
      width: 200px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      background-color: #f5f5f5;
    }
  }
</style>
