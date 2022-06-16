<template>
<div>
    <hr>
    <h1>Test TEst</h1>
    <hr>
    <div>
        {{firstName}}
    </div>
    <h5 id="title page">Sum {{numTest}} + 10 = {{sumNumber}}</h5>
    <hr>
    Fullname : {{fullName}}
    <hr>
    <ul>
        <li v-for="item in items" :key="item">
            {{ item.message }}
        </li>
    </ul>
    <hr>
    <div v-for="i of items" :key="`key-${i}}`">{{ i.message }}</div>
    <hr>
    Test Pull Request
    <hr>
    <span v-for="n in 10" :key="n">{{ n }}</span>
    <hr>
    {{numbers}}--------{{evenNumbers}}
    


</div>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'Matee',
            lastName: 'Rrrrrr',
            numTest: 100,
            arrayTest: [],
            objTest: {},
            items: [{
                message: 'Foo'
            }, {
                message: 'Bar'
            }],

            myObject: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
            numbers: [1, 2, 3, 4, 5]
        }
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter(n => n % 2 === 0)
        },

        sumNumber() {
            return this.numTest + 10;
        },
        fullName() {
            return `${this.firstName} --- ${this.lastName}`;
        }
    },
}
</script>
