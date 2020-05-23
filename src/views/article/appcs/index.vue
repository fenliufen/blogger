<template>
    <div>
        <div class="demo1">
            <div class="titer-01">
                <h4>app测试常见场景</h4>
                <p>
                    <span>作者：从小就疯了</span>
                    <span>观看群众：20</span>
                    <span>分类：网站测试</span>
                    <span>更新时间：2020年05月24日</span>
                </p>

                <div class="tome">
                    <span>24</span>
                    <span>05</span>
                    <span>2020</span>
                </div>

            </div>


            <div class="zhanshi-01">


                <h1>APP测试点注意事项汇总</h1>

                <h3>一、异常测试</h3>
                <ul class="list-01">
                    <li>
                        包括业务流程的异常情况；业务场景的异常；操作习惯的异常（比如答题过程中会出现声音干扰这样很不友好喔~）
                    </li>
                </ul>


                <h3>二、网络测试</h3>
                <ul class="list-01">
                    <li>
                        <br>网络切换的过程中，APP会不会异常；断网情况进行一些操作，APP会不会崩溃；有网时进行了一些操作，断开网络，
                        <br>再进行一些操作，再联网，看看会不会出问题；各种切换过程的提示文案是否清晰明了
                    </li>
                </ul>


                <h3>三、权限测试</h3>
                <ul class="list-01">
                    <li>
                        <br>位置、通讯录、相机、相册、照片、语音等权限，在实际要用的时候才会弹出提示。用户点击拒绝or开启 后，触发此提示
                        <br>的功能是否还能正常续运行。若无系统权限时是否引起APP的崩溃；注意验证按住说话功能，要考虑到结束后，手指移动的方向，
                        <br>可能会导致说话toast图标卡到页面上。
                    </li>
                </ul>

                <h3>四、页面刷新测试</h3>
                <ul class="list-01">
                    <li>
                        <br><strong>很多情况其实都是页面没有及时刷新造成的，刷新包括：</strong>

                        <br>（1）收到推送主动刷新；

                        <br>（2）切换其他页面刷新；

                        <br>（3）返回后台刷新 ；

                        <br>（4）杀掉APP；

                        <br>（5）重新登录
                    </li>
                </ul>

                <h3>五、缓存测试</h3>
                <ul class="list-01">
                    <li>
                        <br>APP端缓存问题还是比较麻烦，也让人头疼啊。一旦缓存清理失败，下一个账号进去就会异常。看到前一个账号的部分信息，
                        <br>引起此问题原因大多是前一个账号退出的时候，或者其他触发清理缓存的时候，手机进行了异常操作，导致缓存清理失败，
                        <br>就被带到了下一个账号里（APP如果检测到缓存存在，就不会去显示接口的真实返回了）。所以要进行缓存清除异常测试。比如清除的时候，
                        <br>强制退出，后台清理，黑屏，关机，断网等异常情况。
                    </li>
                </ul>

                <h3>六、兼容性测试</h3>
                <ul class="list-01">
                    <li>
                        <br>包括手机系统的版本和手机的分辨率，以及特殊机型（主要是在原生的系统上做了封装的品牌），特殊机型主要测试图片、文件的上传下载，
                        <br>涉及到文件系统的一些操作。
                    </li>
                </ul>

                <h3>七、特殊操作</h3>
                <ul class="list-01">
                    <li>
                        <br>左右滑动、长按、连续点击、拖拽、列表页面连续的上下滑动，特别是在数据还没加载出来的情况，继续滑动；iOS需要注意输入法遮挡页面的问题；
                        <br>APP中图片滑动的地方，要重点测试，滑动到最后一张，再继续滑
                    </li>
                </ul>

                <h3>八、其他特殊情况（摘自网上）</h3>
                <ul class="list-01">
                    <li>
                        <br>(1)AndroidApp 应用中，如果有下拉选项的操作，双击下拉选或快速点击选项，会有意想不到的结果，目前我们的应用出现过两次直接导致应用Crash,安卓测试时，要注意，返回后台后重打开后 点击各个控件（尤其是会出现弹窗的）是否正常

                        <br>(2)图片处理过的地方，是否容易出现程序崩溃，主要是图片压缩机制的问题。我们上传图片基本上都是正常的图片，图片也都是拍出来的，或者从网上下载的图片。但是很少会上传一下很长、很大的图片，目前知道我们应用Android系统上传长图后图片不显示，直接展示空白。——出自：https://blog.csdn.net/wangshufen20091651/article/details/71126801
                    </li>
                </ul>

                <h3>九、内存</h3>
                <ul class="list-01">
                    <li>
                        <br>测试在同时开启很多应用的情况，操作被测APP，是否会出现异常；在使用被测APP进行某些业务流程，进行到中间的某一步，
                        <br>切换到某个很占内存的应用操作一下，再切换回去，看看被测APP是否正常，之前操作的数据是否丢失
                    </li>
                </ul>

                <h3>十、安装、更新、卸载</h3>
                <ul class="list-01">
                    <li>
                        <br>安装：需考虑安装时的中断、弱网、安装后删除安装文件等情况

                        <br>卸载：需考虑 卸载后是否删除app相关的文件

                        <br>更新：分强制更新、非强制更新、增量包更新、断点续传、弱网状态下更新
                    </li>
                </ul>




                <h3>安卓应用与ios的区别</h3>
                <ul class="list-01">
                    <li>
                        <br>1.Android长按home键呼出应用列表和切换应用，然后右滑则终止应用；

                        <br>2.多分辨率测试，Android端20多种，ios较少；

                        <br>3.手机操作系统，Android较多，ios较少且不能降级，只能单向升级；新的ios系统中的资源库不能完全兼容低版本中的ios系统中的应用，低版本ios系统中的应用调用了新的资源库，
                        <br>会直接导致闪退（Crash）；

                        <br>4.操作习惯：Android，Back键是否被重写，测试点击Back键后的反馈是否正确；应用数据从内存移动到SD卡后能否正常运行等；

                        <br>5. push测试：Android：点击home键，程序后台运行时，此时接收到push，点击后唤醒应用，此时是否可以正确跳转；ios，点击home键关闭程序和屏幕锁屏的情况（红点的显示）；

                        <br>6.安装卸载测试：Android的下载和安装的平台和工具和渠道比较多，ios主要有app store，iTunes和testflight下载；

                        <br>7.升级测试：可以被升级的必要条件：新旧版本具有相同的签名；新旧版本具有相同的包名；有一个标示符区分新旧版本（如版本号），
                        <br>对于Android若有内置的应用需检查升级之后内置文件是否匹配（如内置的输入法）



                    </li>
                </ul>

















                <div class="tsxi-01">
                    <a href="javascript:history.go(-1)"><span>友情提示:</span>本章已看完，点击返回文章首页哦</a>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "index"
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




    /*文章展示区*/

    .zhanshi-01 {
        max-width: 1280px;
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
        position: absolute;
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
        position: relative;
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
        position: relative;
        box-sizing: border-box;
    }








    /*友情提示  */
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

    .list-03 li p {
        padding-left: 20px;
    }

    .list-03 li p img {
        width: 700px;
        height: 340px;
    }


</style>