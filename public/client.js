Vue.component('eval', {
    props: ['item'],
    template: `
        <div>
            <h3>{{item.formattedDate}}</h3>
        </div>
    `
})

const vm = new Vue({
   el: '#app' 
})