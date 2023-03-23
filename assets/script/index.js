const { createApp } = Vue
const url = "https://mindhub-xj03.onrender.com/api/amazing"

  createApp({
    data() {
      return {
        dataEvents: [],
      }
    },
    created(){
      fetch(url)
        .then( res => res.json() )
        .then( data => {
          this.dataEvents = data.events
        })
    },
    methods: {

    },
    computed: {

    }
  }).mount('#app')