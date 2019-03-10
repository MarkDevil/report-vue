<template>
    <el-container style="position:fixed; left:0; top:0; width:100%;height:100%;">
        <el-aside class="sidebar-container el-scrollbar" width="200px">
            <el-cascader-menu>
                <el-input></el-input>
            </el-cascader-menu>
            <el-menu background-color="rgb(48, 65, 86)" style="color: rgb(252,254,255);">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-message" style=""></i>
                        <span class="text-color">测试报告</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">
                            <a href="/">
                                <span class="text-color">环境配置</span>
                            </a>
                        </el-menu-item>
                        <el-menu-item index="1-2">
                            <span class="text-color">环境配置</span>
                        </el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="1-3">
                        <span class="text-color">环境配置</span>
                    </el-menu-item>
                    <el-submenu index="1-4">
                        <template slot="title">
                            <span class="text-color">环境配置</span>
                        </template>
                        <el-menu-item index="1-4-1">
                            <span class="text-color">环境配置</span>
                        </el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="color:rgb(252,254,255); text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>

            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import ElCascaderMenu from "element-ui/packages/cascader/src/menu";
    export default {
        name: "Home",
        components: {ElCascaderMenu},
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路1518'
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
        methods: {
            getdata() {
                return this.$.http.get()
            }
        },

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
