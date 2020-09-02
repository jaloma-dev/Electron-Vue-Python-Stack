<template>
    <nav>
        <router-link class="nav-link" :to="{ name: 'Index'}">
            <div>
                <span>WEL</span>
            </div>
        </router-link>
        <router-link class="nav-link" :to="{ name: 'About'}">
            <div>
                <span>ABO</span>
            </div>
        </router-link>
    </nav>
</template>

<style lang="scss">
@import '../assets/styles/_vars.scss';
@import '../assets/styles/_mixins.scss';
nav{
    background-color: $shade-dark;
    border-right: 1px solid $shade-darker;
    color: $shade-lighter;
    width: 49px;
    position: fixed;
    bottom: 0;
    top: 40px;
    display: flex;
    flex-direction: column;
    a{
        height: 40px;
        margin-top: 10px;
        @include flex(row, center);
        * {
            color: $shade-light;
        }
        &:hover, &.active{
            * {
                color: $shade-lighter;
            }
        }
         &.active{
            border-left: 3px solid $accent;
         }
    }
}
</style>