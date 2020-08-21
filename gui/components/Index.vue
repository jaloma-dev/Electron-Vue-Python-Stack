<template>
    <div>
        <h1>Index</h1>
        <h2>{{index.title}}</h2>
        <p>{{index.description}}</p>
    </div>
</template>

<script>
import axios from '../axios';

export default {
    data(){
        return {
            index: {
                title: '',
                description: ''
            }
        }
    },
    mounted: function() {
        axios.get('/index').then(res => this.index = res.data)
    }
}
</script>
<style lang="scss">
</style>