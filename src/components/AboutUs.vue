<template>
<section>
    <h1>About us</h1>
    <p>55555555555555555555 from branch Matee</p>

    <main style="background: green; color: white; padding: 15px">
        Text Sample Data
        <p><b>88888888888888</b></p>
        <p><b>Matee Ruaprasert</b></p>
        <p style="background: yellow; padding: 15px">
            <b>888888888888889999999999999999</b>
        </p>
        <p style="background: yellow; padding: 15px">
            <b>888888888888889999999999999999</b>
        </p>
        <p style="background: yellow; padding: 15px">
            <b>888888888888889999999999999999</b>
        </p>
        <p style="background: yellow; padding: 15px">
            <b>888888888888889999999999999999</b>
        </p>
        <p style="background: yellow; padding: 15px">
            <b>888888888888889999999999999999</b>
        </p>
    </main>
</section>
</template>

<script>
export default {
    name: "HelloWorld",
    props: ["msg", "data"],
    data() {
        return {
            message: "",
            text: "",
            number: 100,
            numCount: 0,
            showText: true,
        };
    },
    methods: {
        displayNum(event) {
            console.log(event, "--------");
        },
        changeNumber(num) {
            this.number = this.number + num;
            console.log(num, "Num");
        },
    },
    created() {
        console.log(`the component is now created.`);
    },
    mounted() {
        console.log(`the component is now mounted.`);
    },
    updated() {
        console.log(`the component is now updated.`);
    },
    unmounted() {
        console.log(`the component is now unmounted.`);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
