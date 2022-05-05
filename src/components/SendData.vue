<template>
<section>
    <h1>Test Send Data</h1>
    <hr>
    <div v-if="childText">
        This is data from child parent : {{childText}}
        <hr>
    </div>

    <ChildData :title="title" :object="stdObj" @childValue="showChildVal" />

</section>
</template>

<script>
import ChildData from './ChildData.vue'

export default {
    components: {
        ChildData,
    },
    props: ['msg', 'data'],
    data() {
        return {
            title: "Return Data Title",
            stdObj: {
                name: "Matee",
                age: "36"
            },
            childText: ""

        }
    },
    methods: {
        showChildVal(data) {
            this.childText = data;
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
