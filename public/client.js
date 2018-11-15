
Vue.component('interval', {
  props: [
    "formattedDate",
    "resultsBis"
  ],
})
const vm = new Vue({
    el : '#app',
    template: `
        <div class="template">
            <h1>{{ title }}</h1>
            <form v-on:submit.prevent>
                <input class="champs" placeholder="Entrez votre texte" type="text"/>
                <button class="btn-add" type="submit">valider</button>
            </form>
        </div>
    `,
    data: {
        title: 'EVAL - Node2',
        loading: false,
        items: [],
        formItem: {
            text: '',
        }
    },
    methods: {
        intervalData(){
          this.formattedDate = setInterval(() => {
            this.resultsBis =!this.resultsBis;
          }, 1000);
        }
    }
})
