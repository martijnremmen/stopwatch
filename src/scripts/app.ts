import Vue from 'vue'
import timerdisplay from './timerdisplay.vue'

var app = new Vue({
    el: '#app',
    
    data: {
        counting: false,
        seconds: 0,
    },

    template: `
        <div>
            <timerdisplay :counter=seconds :blinking=isPaused></timerdisplay>
            <div class='buttons'>
                <button :class="{ active: counting }" @click=toggleTimer>{{ counting ? 'Stop' : 'Start' }}</button>
                <button @click=resetTimer >Reset</button>
            </div>
        </div>
    `,

    components: {
        timerdisplay,
    },

    methods: {
        toggleTimer () {
            this.counting = !this.counting
        },

        resetTimer () {
            this.counting = false
            this.seconds = 0
        },

        pauseTimer () {
            this.counting = false
        },

        startTimer () {
            this.counting = true
        }
    },

    computed: {
        isPaused () {
            return this.seconds !== 0 && !this.counting
        }
    },

    mounted: function () {
        window.setInterval(() => {
            if (this.counting) {
                this.seconds++
            }
        },1000)
    }
})