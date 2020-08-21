<template>
    <nav>
        <router-link class="nav-link" :to="{ name: 'Index'}">
            <div>
                <span>WEL</span>
            </div>
        </router-link>
        <router-link class="nav-link" :to="{ name: 'About'}">
            <div>
                <span>ABOUT</span>
            </div>
        </router-link>
    </nav>
</template>

<style lang="scss">
nav{
    width: 49px;
    z-index: 100;
    position: fixed;
    bottom: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    background-color: red;
}
</style>