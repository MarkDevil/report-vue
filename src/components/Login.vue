<template>
    <v-card
        color="black"
        dark
        flat
        tile
    >
        <v-window v-model="onboarding">
            <v-window-item
                v-for="n in length"
                :key="`card-${n}`"
            >
                <v-card
                    color="transparent"
                    height="200"
                >
                    <v-layout
                        align-center
                        justify-center
                        fill-height
                        tag="v-card-text"
                    >
                        Transparent themed, for background-imaged slides. Background color black added for demonstration purposes.
                    </v-layout>
                </v-card>
            </v-window-item>
        </v-window>

        <v-card-actions class="justify-space-between">
            <v-btn
                flat
                @click="prev"
            >
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-item-group
                v-model="onboarding"
                class="text-xs-center"
                mandatory
            >
                <v-item
                    v-for="n in length"
                    :key="`btn-${n}`"
                >
                    <v-btn
                        slot-scope="{ active, toggle }"
                        :input-value="active"
                        icon
                        @click="toggle"
                    >
                        <v-icon>mdi-record</v-icon>
                    </v-btn>
                </v-item>
            </v-item-group>
            <v-btn
                flat
                @click="next"
            >
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>

    export default {
        name: "Login",
        mounted: function () {
            window.onresize = () => {
                const windowWidth = document.body.clientWidth
                const windowHeight = document.body.clientHeight
                const windowAspectRatio = windowHeight / windowWidth
                let videoWidth
                let videoHeight
                if (windowAspectRatio < 0.5625) {
                    videoWidth = windowWidth
                    videoHeight = videoWidth * 0.5625
                    this.fixStyle = {
                        height: windowWidth * 0.5625 + 'px',
                        width: windowWidth + 'px',
                        'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
                        'margin-left': 'initial'
                    }
                } else {
                    videoHeight = windowHeight
                    videoWidth = videoHeight / 0.5625
                    this.fixStyle = {
                        height: windowHeight + 'px',
                        width: windowHeight / 0.5625 + 'px',
                        'margin-left': (windowWidth - videoWidth) / 2 + 'px',
                        'margin-bottom': 'initial'
                    }
                }
            }
            window.onresize()
        }
    }
</script>

<style scoped>
    /*.el-header {*/
        /*background-color: #409EFF;*/
        /*color: #409EFF;*/
        /*line-height: 60px;*/
    /*}*/

    /*.el-aside {*/
        /*color: #409EFF;*/
    /*}*/

    .text-color {
        color: #dbf6f3;
    }
</style>
