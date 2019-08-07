<!--<script src="../../vueTest/src/tpls/vue-test-toast/toast.js"></script>-->
<template>
    <div :class="{'toast':status}" :style="{animation: ani}">{{text}}</div>
</template>

<script>
    export default{
        name: 'toast',
        data (){
            return {
                status: false,
                text: '',
                duration: null,
                type: '',
            }
        },
        computed: {
            ani () {
                return this.status ? `${this.type}Frame ${this.duration}ms ease` : '';
            }
        },
        mounted () {
        }
    }
</script>

<style>
    .toast {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        padding: 10Px 20Px;
        box-sizing: border-box;
        line-height: 25Px;
        border-radius: 4Px;
        font-size: 14Px;
        min-width: 160Px;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        box-shadow: 0 0 12Px rgba(0, 0, 0, 0.2);
        text-align: center;
        z-index: 9999;
        white-space: nowrap;
    }

    /*渐隐动画*/
    @keyframes fadeFrame {
        0% {
            display: block;
            opacity: 0;
        }
        8% {
            opacity: 1;
        }
        92% {
            opacity: 1;
        }
        100% {
            display: block;
            opacity: 0;
        }
    }
    @-webkit-keyframes fadeFrame {
        0% {
            display: block;
            opacity: 0;
        }
        8% {
            opacity: 1;
        }
        92% {
            opacity: 1;
        }
        100% {
            display: block;
            opacity: 0;
        }
    }
    @-ms-keyframes fadeFrame {
        0% {
            display: block;
            opacity: 0;
        }
        8% {
            opacity: 1;
        }
        92% {
            opacity: 1;
        }
        100% {
            display: block;
            opacity: 0;
        }
    }
    @-moz-keyframes fadeFrame {
        0% {
            display: block;
            opacity: 0;
        }
        8% {
            opacity: 1;
        }
        92% {
            opacity: 1;
        }
        100% {
            display: block;
            opacity: 0;
        }
    }
    /*从上渐隐*/
    @keyframes upFadeFrame {
        0% {
            display: block;
            top:46%;
            opacity: 0;
        }
        10% {
            top:50%;
            opacity: 1;
        }
        90% {
            top:50%;
            opacity: 1;
        }
        100% {
            display: block;
            top:46%;
            opacity: 0;
        }
    }
    @-webkit-keyframes upFadeFrame {
        0% {
            display: block;
            top:46%;
            opacity: 0;
        }
        10% {
            top:50%;
            opacity: 1;
        }
        90% {
            top:50%;
            opacity: 1;
        }
        100% {
            display: block;
            top:46%;
            opacity: 0;
        }
    }
    @-ms-keyframes upFadeFrame {
        0% {
            display: block;
            top:46%;
            opacity: 0;
        }
        10% {
            top:50%;
            opacity: 1;
        }
        90% {
            top:50%;
            opacity: 1;
        }
        100% {
            display: block;
            top:46%;
            opacity: 0;
        }
    }
    @-moz-keyframes upFadeFrame {
        0% {
            display: block;
            top:46%;
            opacity: 0;
        }
        10% {
            top:50%;
            opacity: 1;
        }
        90% {
            top:50%;
            opacity: 1;
        }
        100% {
            display: block;
            top:46%;
            opacity: 0;
        }
    }

</style>
