<template>
    <h1 class="timer" :class="{blink: blinking}">
        <digit v-bind:number=getHours></digit><span class="sc">:</span><digit v-bind:number=getMinutes></digit><span class="sc">:</span><digit v-bind:number=getSeconds></digit>
    </h1>
</template>

<script>
import Vue from 'vue'

Vue.component('digit', {
    props: ['number'],
    template: "<span>{{ number }}</span>"
})

export default {
    props: ['counter', 'blinking'],

    methods: {
        twoDigit (number) {
            return number.toString().padStart(2, '0')
        }
    },

    computed: {
        getSeconds() {
            return this.twoDigit(Math.floor(this.counter % 60))
        },
        getMinutes() {
            return this.twoDigit(Math.floor(this.counter / 60) % 60)
        },
        getHours() {
            return this.twoDigit(Math.floor(this.counter / 60 / 60) % 60)
        }
    }
}
</script>

<style>

</style>