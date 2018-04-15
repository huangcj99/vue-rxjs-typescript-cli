<template>
  <div class="content">
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <button type="button" name="button" v-stream:click="click$">点击发出流</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Prop } from "vue-property-decorator";
  import * as Rx from 'rxjs/Rx'

  @Component
  export default class HelloDecorator extends Vue {
    that: any = this;
    name: string = 'huang';
    age: number = 0;

    // domStream$
    click$ = new Rx.Subject();

    created () {
      this.test(this.name)
    }

    mounted () {
      let subscriptionsObj: any = this.subscriptions()

      for (let stream in subscriptionsObj) {
        this.that.$subscribeTo(
          subscriptionsObj[stream]
        )
      }
    }

    subscriptions () {
      return {
        test$: this.click$.take(1)
          .concatMap((e: object) => {
            console.log(e);
            return Rx.Observable.of('chen')
              .map((data: string) => {
                this.name = data
              })
          })
      }
    }

    test(data: string): string {
      return data
    }

    getRx (): void {
      Rx.Observable.interval(1000)
        .map((data) => data)
        .subscribe((data) => {
          this.age = data
        })
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
    }
  }
</style>
