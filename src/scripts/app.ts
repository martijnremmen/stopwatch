import Vue from 'vue'

Vue.component('digit', {
    props: ['number'],
    template: "<span id=\"hours\"> {{ number }} </span>"
})

Vue.component('timer-display', {
    props: ['counter'],
    template: "<h1 class=\"timer\"> {{ counter }} </h1>",
    methods: {}
})

var app = new Vue({
    el: '#app',
    data: {
        counting: false,
        counter: 0,
    },
    // render: function (h) {
    //     return this.$createElement('div', 
    //         this.$createElement()
    //     )
    // },
    // methods: [

    // ],
    template: `
        <timer-display counter=4></timer-display>
    `
})