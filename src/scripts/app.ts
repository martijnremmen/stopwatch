import Vue from 'vue'

Vue.component('digit', {
    props: ['number'],
    template: "<span> {{ number }} </span>"
})

Vue.component('timer-display', {
    props: ['counter'],
    template: "<h1 class=\"timer\"><digit number=1></h1>",
    methods: {}
})

var app = new Vue({
    el: '#app',
    data: {
        counting: false,
        counter: 0,
    },
    template: "<timer-display counter=4></timer-display>"
})