<template>
<div>
    <h3>
        {{title}}
    </h3>
    <div>
        {{object}}
    </div>
    <hr>
    <button type="button" @click="sendData(number)">Send data to parent component</button>

</div>
</template>

<script>
export default {
    props: ['title','object'],
    data() {
        return {
            number:999,
            

        }
    },
    methods: {
        sendData(val){
            //to parent
            this.$emit('childValue', val)
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
