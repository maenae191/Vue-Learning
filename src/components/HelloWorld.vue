<template>
<section>
    <h1></h1>
    <span>Wellcome to Homepage</span>
    <input :value="text" @input="event => text = event.target.value"> >>
    <input v-model="text">
    <hr>
    <p>This Message 99999 is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
    <h1>{{ msg }}</h1>
    <hr>
    <h6>---{{data}}---</h6>
    {{number}}
    <button @click="displayNum">Click!!</button>
    <button @click="changeNumber(99)">Change Num</button>
    <hr>
    {{numCount}}<button @click="numCount++">Count++</button>
    <hr>
    <button @click="showText = !showText">Show Toggle</button>

    <h1 v-if="showText">Show text == True!</h1>
    <h1 v-else>Oh no 😢</h1>

</section>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: ['msg', 'data'],
    data() {
        return {
            message: "",
            text: "",
            number: 100,
            numCount: 0,
            showText: true,
        }
    },
    methods: {
        displayNum(event) {
            console.log(event, '--------');

        },
        changeNumber(num) {
            this.number = this.number + num;
            console.log(num, 'Num');
        }
    },
    // created() {
    //     console.log(`the component is now created.`)
    // },
    // mounted() {
    //     console.log(`the component is now mounted.`)
    // },
    // updated() {
    //     console.log(`the component is now updated.`)
    // },
    // unmounted() {
    //     console.log(`the component is now unmounted.`)
    // },
   
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
