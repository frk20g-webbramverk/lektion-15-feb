Vue.component('inputs', {
    template: `<section>
                <name></name>
                <name></name>
                <name></name>
                <name></name>
               </section>`
});

Vue.component('name', {
    template: `<section>
                 <input type="text" placeholder="Ditt namn" v-model="value" />
                 <h2>Välkommen, {{ value }}</h2>
               </section>`,
    data: function() {
        return {
            value: ''
        }
    }
});


//Vi skapar upp vår Vue-instans och kopplar till id:et app
let App = new Vue({
    el: '#app',
    data: {
        message: 'This is cool shit!',
        name: ''
    }
});


//Konceptet kring v-model i vanilla js
// let nameInput = '';

// document.querySelector('#name-input').addEventListener('keyup', (event) => {
//     nameInput = event.target.value;
//     console.log(nameInput);
// })