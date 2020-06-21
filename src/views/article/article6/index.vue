<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
                <h4>手机银行转账页面测试详解</h4>
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：100</span>
                    <span>分类：网站测试</span>
                    <span>更新时间：2020年06月11日</span>
                </p>

                <div class="tome">
                    <span>11</span>
                    <span>06</span>
                    <span>2020</span>
                </div>

            </div>


            <div class="zhanshi-01">

                <div class="title_02">
                    <h3><i class="iconfont">&#xe657;</i>某公司一道笔试题</h3>
                </div>

                <div class="list_001">
                    <p>已建设银行手机银行转账功能为例，尽可能包含所有功能测试点,如下图，请写出测试点</p>
                    <div class="img_01">
                        <img src="../../../assets/imgs/8.jpg">
                    </div>
                </div>

                <div class="list_002">
                    <p>一.功能分析：从界面上看，除了表单之外，界面存在的功能有以下</p>
                    <p>1.跳转到语音帮助页面</p>
                    <p>2.可选择最近收款人</p>
                    <p>3.支持银行卡拍照识别</p>
                    <p>4.转账功能可选择实时，2小时后，次日转账</p>
                    <p>5.支持留言功能</p>
                    <p>以上属于此页面必备功能，除了实现正常功能外，还应该考虑安全性，兼容性因素</p>
                </div>


                <div class="list_002">
                    <p>三.表单验证</p>
                    <p>1.银行卡状态多选，目前小编知道的银行卡状态有，止付，冻结，注销，均要进行验证,银行卡种类，借记卡，和贷记卡</p>
                    <p>2.银行卡格式校验，字符类型校验，不存在银行卡，户名与银行卡不一致等情况</p>
                    <p>3.转账金额：最大转账金额，最小转账金额，系统自动转换为大写，卡无余额，或者余额不足</p>
                    <p>4.银行卡监听，输入银行卡号自动识别银行功能，也可进行手动选择银行</p>
                    <p>5.必填项</p>
                    <p>6.验证码的有效时长，过期验证码，和正常验证码等</p>
                    <p>7.转账支付密码最大输入次数均要考虑到</p>
                </div>

                <div class="list_002">
                    <p>四.专项测试</p>
                    <p>1.兼容测试，在不同的手机，不同型号，不同品牌主手机进行兼容测试，兼容测试考虑界面是否自适应</p>
                    <p>2.接口安全测试，加密，漏洞测试</p>
                    <p>3.性能测试，响应时间，最大并发数等</p>
                </div>


                <div class="list_002">
                    <p>补充说明：切勿被功能所诱导，面试的时候考验的是你的思维能力，应该要多方面进行考虑</p>
                </div>










            </div>



            <div class="tsxi-01">
                <a href="javascript:history.go(-1)"><span>友情提示:</span>本章已看完，点击返回文章首页哦</a>

            </div>

        </div>

    </div>

</template>

<script>
    export default {
        name: "index",
        mounted() {

        }
    }
</script>

<style scoped>
    .demo1 {
        position: relative;
        padding-top: 80px;
        max-width: 1280px;
        margin:90px auto;
        left: auto;
        right: auto;
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



    .list-01 li {
        position: relative;
        box-sizing: border-box;
        line-height: 30px;
    }



    /*文章内容样式*/
    .zhanshi-01{
        width: 100%;
        min-height: 500px;
    }

    .title_02{
        width: 100%;
    }


    .title_02 h3{
        text-indent: 1em;
        color: blue;
    }


    .list_001{
        width: 100%;
    }

    .list_001 p{
        text-indent: 1em;
        color: black;
    }


    .img_01{
        width: 200px;
        height: 400px;
        padding-top: 20px;
    }
    .img_01 img{
        width: 200px;
        height: 400px;
        padding-left: 10%;

    }

    .list_002 {
        width: 100%;
        padding-top: 20px;
    }
    .list_002 p{
        text-indent: 1em;
        line-height: 30px;

    }










    /*友情提示样式*/
    .tsxi-01 {
        max-width: 1280px;
        min-height: 100px;
        border-top: 1px solid #cccccc;
        background: #fff;
        margin-top: 100px;
    }




    .tsxi-01 a {
        color: #333333;
        font-size: 30px;
        line-height: 100px;
        padding-left: 1em;
    }




    .tsxi-01 a:hover {
        font-weight: bold;
        color: red;
    }



</style>