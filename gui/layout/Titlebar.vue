<template>
    <div id="titlebar">
        <div class="window-info">
            <span class="win-title">Title</span>
        </div>
        <div class="window-action">
            <a class="icon win-min" @click="minimizeWindow">
                <MinimizeIcon />
            </a>
            <a class="icon win-toggle" @click="toggleStateWindow">
                <component :is="winState" />
            </a>
            <a class="icon win-close" @click="closeWindow">
                <CloseIcon />
            </a>
        </div>
    </div>
</template>

<script>
import { remote } from 'electron';
import CloseIcon from '../icons/CloseIcon.vue';
import MaximizeIcon from '../icons/MaximizeIcon.vue';
import UnmaximizeIcon from '../icons/UnmaximizeIcon.vue';
import MinimizeIcon from '../icons/MinimizeIcon.vue';

export default {
    components:{
        CloseIcon,
        MaximizeIcon,
        MinimizeIcon,
        UnmaximizeIcon
    },
    data() {
        return {
            winState: remote.getCurrentWindow().isMaximized() ? UnmaximizeIcon : MaximizeIcon
        }
    },
    methods: {
        minimizeWindow: function() {
            remote.getCurrentWindow().minimize();
        },
        toggleStateWindow: function() {
            let win = remote.getCurrentWindow();
            if(win.isMaximized()){
                win.unmaximize();
                this.winState = MaximizeIcon;
            } else {
                win.maximize();
                this.winState = UnmaximizeIcon;
            }
        },
        closeWindow: function() {
            remote.getCurrentWindow().close();
        }
    }
}
</script>

<style lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';

#titlebar{
    z-index: 100;
    height: 40px;
    @include flex;
    width: 100%;
    border-bottom: 1px solid $shade-darker;
    background-color: $shade-dark;
    * {
        color: $shade-lighter;
    }

    .window-info{
        margin-left: 10px;
        flex-grow: 1;
        height: 100%;
        -webkit-user-select: none;
        -webkit-app-region: drag;
        @include flex(row, space-between, center);
        .win-title{
            text-transform: uppercase;
        }
    }

    .window-action{
        font-weight: bold;
        @include flex;
        height: 100%;
        > a{
            &.icon{
                @include flex(row, center, center);
                svg{
                    width: 12px;
                    height: auto;
                }
            }
            height: 100%;
            width: 40px;
            margin-right: 1px;
            &:hover{
                &.win-close{
                    background-color: $alert;
                    
                }
            background-color: $shade-medium;
            }
        }
    }
}
</style>