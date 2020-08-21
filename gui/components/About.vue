<template>
    <div>
        <h2>About</h2>
    </div>
</template>

<script>
import axios from '../axios';

export default {
    data(){
        return {
            test: ''
        }
    },
    mounted: function() {
        axios.get('/').then(res => this.test = res.data.data)
    }
}
</script>
<style lang="scss">
</style>