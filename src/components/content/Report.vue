<template>
    <v-container fluid id="rsc">
        <ReportTable></ReportTable>
    </v-container>
</template>

<script>
import cm from '../../js/common'
import ReportTable from "./report/reportTable";



export default {
    name: 'Report',
    components: {
        ReportTable
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#rsc{
    width: 99.5%;
    height: 100%;
}
.item-flex{
    padding: 0 1em 5em 1em;
}
</style>
