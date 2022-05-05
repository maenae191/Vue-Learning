<template>
<div>
    <hr>
    <h1>Test TEst</h1>
    <hr>
    <div>
        {{firstName}}
    </div>
    <h1>Sum {{numTest}} + 10 = {{sumNumber}}</h1>
    <hr>
    Fullname : {{fullName}}
    <hr>
    <ul>
        <li v-for="item in items" :key="item">
            {{ item.message }}
        </li>
    </ul>
    <hr>
    <div v-for="item of items" :key="item">{{ item.message }}</div>
    <hr>
    <ul>
        <template v-for="(value, key, index) in myObject" :key="index">
            <li>
                {{ index }}. {{ key }}: {{ value }}
            </li>
        </template>
    </ul>
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
