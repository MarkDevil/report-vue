<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" clipped fixed app >
            <drawer-left />
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left color="blue" dark>
            <v-toolbar-side-icon id="side-btn" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-card-text>监控系统</v-card-text>
            <more />
        </v-toolbar>

        <v-content>
            <v-container fluid fill-height class="container" id="main-container">
                <v-layout justify-center id="main-layout">
                <v-flex id="main-flex">
                    <keep-alive include="Resources">
                        <router-view></router-view>
                    </keep-alive>
                </v-flex>
                </v-layout>
            </v-container>
        </v-content>

        <v-footer color="blue" app fixed>
            <v-layout justify-center
                      row
                      wrap>Power by mamingfeng007@gmail.com</v-layout>
        </v-footer>
        <v-dialog v-model="serverDialog" width='400px'>
        	<v-card>
        		<server-info :hostname="hostname" :server="activeServer"></server-info>
        		<v-card-actions>
                    <confirm-btns noLeft rightPrimary @clickRight="serverDialog = false"></confirm-btns>
                </v-card-actions>
        	</v-card>
		</v-dialog>
    </v-app>
</template>

<script>
import cm from '../js/common'
import DrawerLeft from '@/components/DrawerLeft'
import more from '@/components/more'
import serverInfo from '@/components/header/serverInfo'
import confirmBtns from '@/components/common/confirmBtns'

export default {
    name: 'Layout',
    components: {
        DrawerLeft,
        more,
        serverInfo,
        confirmBtns,
    },
    data () {
        return {
            drawer: false,
            infoAll: null,
            serverDialog: false,
            activeServer: cm.sapi.getActiveServer(),
            hostname: null
        }
    },
    beforeCreate () {
    	cm.sapi.getActiveHostname(this);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    padding: 0;
}

#main-flex {
    max-width: 100%;
}

.hdr-text {
    cursor: pointer;
    font-size: 1em;
    text-align: center;
    margin: 0;
}

#side-btn {
	margin: 6px;
}

.uif {
	color: #f7abab;
}
</style>
