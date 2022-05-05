<template>
<section>
    <h1>About us</h1>

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
    created() {
        console.log(`the component is now created.`)
    },
    mounted() {
        console.log(`the component is now mounted.`)
    },
    updated() {
        console.log(`the component is now updated.`)
    },
    unmounted() {
        console.log(`the component is now unmounted.`)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
