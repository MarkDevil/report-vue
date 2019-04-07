<template>
    <v-container fluid>
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
    padding: 2em 0 0 0;
}
.item-flex{
    padding: 0 1em 5em 1em;
}
</style>
