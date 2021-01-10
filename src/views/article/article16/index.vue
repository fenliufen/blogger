<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
<!--                <h4>jmeter存储变量</h4>-->
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：40</span>
                    <span>分类：网站测试</span>
                    <span>更新时间：2021年01月06日</span>

                </p>


                <div class="tome">
                    <span>06</span>
                    <span>01</span>
                    <span>2021</span>
                </div>



            </div>


            <div class="zhanshi-01">


                <h1>allure 常用装饰器介绍</h1>

                <div v-for="itme in mydata" :key="itme">
                <h3>{{itme.title}}</h3>
                <ul class="list-01">
                    <li>
                        <strong>作用：</strong>
                         {{itme.describe}}
                    </li>
                </ul>
                </div>


                <div>
                    <h3>生成测试报告文件</h3>
                    <ul class="list-01">
                        <li>
                            1、pytest test_blogger.py  -v -s  --alluredir ./result/ 命令行执行测试套件<br>
                            2、allure generate ./result/ -o ./report/ --clean    生成html文件测试报告
                            <p><img src="./1.png"></p>
                        </li>
                    </ul>
                </div>





                <div class="title">
                    <p>
                        <a href="javascript:history.go(-1)">返回上一步</a> >
                        <a href="/journal">日志文章</a>
                    </p>

                </div>


            </div>

            <message></message>

        </div>
    </div>
</template>

<script>
    import message from "../../../components/message";
    export default {
        name: "index",
        components: {
            message
        },

        data(){
            return {
                mydata:[
                    {
                        title:'一、_@allure.epic()',
                        describe:'epic描述   epic对大Story的一个描述性标签'
                    },
                    {
                        title:'二、@allure.feature()  ',
                        describe:'用于描述模块的名称'
                    },
                    {
                        title:'三、@allure.story()',
                        describe:'描述用户故事'
                    },
                    {
                        title:'四、@allure.title()',
                        describe:'用例的标题'
                    },
                    {
                        title:'五、@allure.testcase()',
                        describe:'测试用例的链接地址'
                    },
                    {
                        title:'六、@allure.issue()',
                        describe:'缺陷的链接地址'
                    },
                    {
                        title:'七、@allure.description()',
                        describe:'用例的描述也就可以是预期结果的描述'
                    },

                    {
                        title:'八、@allure.step()',
                        describe:'用例的操作步骤描述'
                    },
                    {
                        title:'九、@allure.attachment() ',
                        describe:'报告添加附件'
                    }

                ]
            }
        }

    }
</script>

<style scoped>
    .demo1 {
        padding-top: 80px;
        max-width: 1280px;
        padding-right: 20px;
        padding-left: 10px;
        margin:90px auto;
        background: #fff;
        border: 1px solid #cccccc;
        height: 100%;
        overflow: auto;
        overflow-x:hidden;
        /*火狐去掉滚动条*/
        scrollbar-width: none;
    }

    .demo1::-webkit-scrollbar {
        display: none;
    }
    /*文章展示区*/

    .titer-01 {
        position: relative;
        display: block;
        max-width: 1280px;
        min-height: 85px;
        margin: auto;
        line-height: 30px;
        padding: 5px 130px 5px 0;
        border-bottom: 1px solid #e8e9e7;
        font-size: 18px;
        font-weight: 400;
        background: #fff;
    }

    .titer-01 h4 {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: #333333;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 18px;
        padding-left: 20px;
    }

    .titer-01 p {
        font-size: 14px;
        color: #787077;
        padding-left: 20px;
    }

    .titer-01 p span {
        padding-left: 10px;
    }

    .titer-01 .tome {
        font-family: SourceCodeProRegular, Menlo, Monaco, Consolas, "Courier New", monospace, 'Helvetica Neue', Arial, sans-serif;
        position: absolute;
        right: 140px;
        top: 10px;
        background-color: #fff;
        padding: 0 20px 5px 20px;
        line-height: 32px;
    }

    .titer-01 .tome span:nth-of-type(1) {
        display: block;
        text-align: center;
        font-weight: 700;
        font-size: 40px;
        color: #6bc30d;
        position: relative;
        top: 2px;
    }

    .titer-01 .tome span:nth-of-type(2) {
        color: #989997;
        font-size: 18px;
    }

    .titer-01 .tome span:nth-of-type(3) {
        color: #989997;
        font-size: 18px;
        padding-left: 6px;
    }




    /*文章展示区*/

    .zhanshi-01 {
        max-width: 100%;
        background: #fff;
        margin: 0;
    }


    .titer-01 h4 {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: #333333;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 18px;
        padding-left: 20px;
    }

    .titer-01 p {
        font-size: 14px;
        color: #787077;
        padding-left: 20px;
    }

    .titer-01 p span {
        padding-left: 10px;
    }

    .titer-01 .tome {
        font-family: SourceCodeProRegular, Menlo, Monaco, Consolas, "Courier New", monospace, 'Helvetica Neue', Arial, sans-serif;
        /*position: absolute;*/
        right: 0px;
        top: 10px;
        background-color: #fff;
        padding: 0 20px 5px 20px;
        line-height: 32px;
    }

    .titer-01 .tome span:nth-of-type(1) {
        display: block;
        text-align: center;
        font-weight: 700;
        font-size: 40px;
        color: #6bc30d;
        position: relative;
        top: 2px;
    }

    .titer-01 .tome span:nth-of-type(2) {
        color: #989997;
        font-size: 18px;
    }

    .titer-01 .tome span:nth-of-type(3) {
        color: #989997;
        font-size: 18px;
    }

    .zhanshi-01 {
        width: 1280px;
        background: #fff;
        margin: 0;
    }

    .zhanshi-01 h1 {
        padding-bottom: .3em;
        border-bottom: 1px solid #eee;
        margin-top: 1em;
        margin-bottom: 16px;
        font-weight: 700;
        line-height: 1.4;
        font-size: 2.25em;
        padding-left: 1em;
    }

    .zhanshi-01 h3 {
        display: block;
        position: relative;
        margin-top: 2em;
        margin-bottom: 16px;
        font-weight: 700;
        line-height: 1.4;
        color: #333333;
        font-size: 21px;
        padding-left: 1em;
    }

    .list-01 {
        font-size: 14px;
        color: #333333;
        padding-left: 2em;
        background: #fff;
    }

    .list-01 li {
        box-sizing: border-box;
    }


    .list-01 li p{
        padding-top:20px ;
        width: 80%;
        height: 80%;
    }

    .list-01 li p img{
        display: block;
        width: 100%;
        height: 100%;
    }



    .title{
        padding: 10px;
        max-width: 1280px;
        margin: 10px auto 0;
        background-color:;
        /*box-shadow: 1px 2px 6px rgba(63,74,105,.16);*/
        /*border-radius: 3px;*/
    }

    .title p a{
        color: #555;
        text-decoration: none;

    }





</style>