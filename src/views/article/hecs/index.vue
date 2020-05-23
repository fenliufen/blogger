<template>
    <div class="demo1">

        <div class="titer-01">
            <h4>常见的黑盒测试方法</h4>
            <p>
                <span>作者：从小就疯了</span>
                <span>观看群众：40</span>
                <span>分类：网站测试</span>
                <span>更新时间：2020年05月22日</span>
            </p>

            <div class="tome">
                <span>22</span>
                <span>05</span>
                <span>2020</span>
            </div>

        </div>


        <div class="zhanshi-01">

            <h1>常用的黑盒测试设计用例方法</h1>
            <ul class="list-02">
                <li>
                    <p><span class="test-01">什么是黑盒测试</span>
                        <br>所谓的黑盒测试：就是传统的手工测试，也就是软件测试最基础的一种，指的是把被测试的软件看做是一个盒子，我们不关注盒子里边的结构是怎么样的
                        <br>只关注功能是否可以实现，数据输入输出的结果。
                    </p>
                </li>

                <li>
                    <p><span class="test-01">黑盒测试的方法有以下</span>
                        <br><strong>1.等价类：</strong>比较常用
                        <br><strong>2.边界值：</strong>比较常用
                        <br><strong>3.判定表：</strong>比较常用
                        <br><strong>4.因果图：</strong>很多测试不理解，不常用
                        <br><strong>5.正交表：</strong>很多测试不理解，不常用
                        <br><strong>6.场景法：</strong>比较常用
                        <br><strong>7.状态迁移：</strong>很多测试不理解，不常用
                    </p>
                </li>

                <li>
                    <p><span class="test-01">一、等价划分法（等价类）</span>
                        <br><strong>等价类：</strong>指某个输入域的集合，在集合中各个输 入的条件都是等效的。
                        <br><strong>通常等价类划分为2种情况：</strong>
                        <br>①有效等价类：对程序规格说明有意义的、合理 的输入数据
                        <br>②无效等价类：对程序规格说明无意义的、不合 理的输入数据
                        <br><strong>等价类划分的设计用例思路：</strong>
                        <br>1. 找输入条件
                        <br>2. 为每个输入条件找有效、无效等价类
                        <br>3. 为每个等价类编号
                        <br> 4. 用最少的用例覆盖最多的有效等价类
                        <br>5. 每一个无效等价类都是一个用例
                        <br> 6. 并非所有有效等价类都有无效
                        <br> 7. 等价类的覆盖可以重复覆盖
                    </p>

                    <p><strong>常见的能够划分等价类的地方：</strong>
                        <br>1. 数值范围
                        <br>2. 重复次
                        <br>3. 字符串长度
                        <br> 4. 字符串组中字符长度与个数
                        <br> 5. 文件命名
                        <br>6. 文件大小
                        <br> 7. 屏幕的颜色种类
                        <br>8. 超时时间
                        <br><strong>等价类的优点：</strong> 是考虑了单个输入域的各类情况， 避免了盲目或随机选取输入数据的不完整 性和覆盖的不稳定性。

                        <br><strong>等价类的缺点：</strong> 方法虽然简单易用，但是没有对组 合情况进行充分的考虑。需要结合其他测 试用例设计的方法进行补充。比如边界值
                    </p>
                </li>


                <li>
                    <p><span class="test-01">二、边界值</span>
                        <br><strong>边界的定义</strong> 1.上点：边界上的点 2.离点：离上点最近的点（即上点左右两边最邻近的点） 3.内点：在域范围内的点
                        <br><strong>边界值分析原则：</strong>
                        <br>1. 如果输入（输出）条件规定了取值范围，则应该 以该范围的边界内及边界附近的值作为测试用例
                        <br>2. 如果输入（输出）条件规定了值的个数，则用最 大个数，最小个数，比最小个数少一，比最大个 数多一的数作为测试数据
                        <br>3. 如果程序规格说明中提到的输入或输出是一个有 序集合，应该注意选取有序集合的第一个和最后 一个元素作为测试数据
                    </p>
                </li>


                <li>
                    <p><span class="test-01">三、判定表</span>
                        <br><strong>判定表定义：</strong>
                        <br>1、条件桩: 列出问题所有条件（通常条件次序无关紧要）。
                        <br>2、条件项：列出针它条件的取值（所有情况下的真假值）。
                        <br>3、动作桩：列出问题规可采取的动作（顺序无约束）。
                        <br>4、动作项：列出条件各 种情况的应采取的 动作。

                        <br><strong>判定表的作用：</strong> 利用判定表将复杂的问题按照各种可能的 情况全部列举出来，能针对不同逻辑条件 的组合值，分别执行不同的操作。其实也是结合了边界，和等价类等
                    </p>
                </li>


                <li>
                    <p><span class="test-01">四、因果图</span>
                        <br>因果图提供了一个把规格转化为判定表的系 统化方法，从该图中可以产生测试数据。其 中，原因是表示输入条件，结果是对输入执 行的一系列计算后得到的输出。
                        <br>因果图方法最终生成的就是判定表。它适合 于检查软件输入条件的各种组合情况
                    </p>
                </li>

                <li>
                    <p><span class="test-01">五、场景法(正常场景与异常场景)</span>
                        <br>场景法主要是针对测试场景类型的，顾也称场景流程分析法。
                        <br>流程分析是将软件系统的某个流程看成路径，用路径分析的方法来设计测试用例。根据流程的顺序依次进行组合，使得流程的各个分支都能走到。
                        <br>顾明思议：测试设计有时也要进行思考，从而退测出软件个个场景存在的问题

                    </p>
                </li>


                <li>
                    <p><span class="test-01">六、正交试验</span>
                        <br>正交试验设计法，是从大量的试验点中挑选出适量的、有代表性的点，应用依据迦罗瓦理论导出的“正交表”，合理的安排试验的一种科学的试验设计方法。
                        <br><strong>正交常用的术语</strong>
                        <br>1、指标：通常把判断试验结果优劣的标准叫做试验的指标
                        <br> 2、 因子：所有影响试验指标的条件 水平值：影响试验因子的取值

                        <br><strong>正交实际应用：</strong>
                        <br>1、单个功能测试：每个输入是因子，每个输入的取值是状态
                        <br>2、功能组合测试：每个功能是因子，是否包含功能是状态，也就是每个功能2个状态。比如手机有多个功能：接听电话、接收短信、游戏、音乐、拍照等
                        <br>3、配置测试：每个配置项是因子，每个具体配置是状态。比如针对CPU测试，需要考虑CPU与主板、内存、显卡、声卡等组合到一起能不能正常工作
                        <br>4、正交的原则：两两组合



                    </p>
                </li>


                <li>
                    <p><span class="test-01">七、转态迁移图</span>
                        <br>通过描绘系统的状态及引起系统状态转换的事件，来表示系统的行为
                        <br><strong>状态迁移图设计测试用例步骤：</strong>
                        <br>1、画出状态迁移图
                        <br>2、 通过状态迁移图出状态转换树
                        <br>3、从状态转换树推导出测试路径
                        <br>4、根据测试路径编写合法（正常）测试用例或非法（异常）测试用例
                        <br> 5、注意：保证从状态转换树的根节点到每个叶节点的每一条路径都至少设计出一个测试用例。

                    </p>
                </li>


                <li>
                    <p><span class="test-01">八、其他补充</span>
                        <br><strong>1、基于经验的测试技术之错误推测法</strong>
                        <br>错误推测法也叫错误猜测法，就是根据经验猜想，已有的缺陷，测试经验和失败数据等可能有什么问题并依此设计测试用例
                        <br><strong>2、基于经验的测试技术之异常分析法</strong>
                        <br>系统异常分析法就是针对系统有可能存在的异常操作、软硬件缺陷引起的故障进行分析，依此设计测试用例。主要针对系统的容错能力、故障恢复能力进行测试。

                        <br><strong>3、基于经验的测试技术之随机测试</strong>
                        <br>随机测试指的是测试中的所有的输入数据都是随机生成的，其目标是模拟用户的操作。 真实环境中，尤其是软件刚刚发布时，会有成千上万的人在上面乱敲乱试；因此在发布软件前，用模拟用户的随机测试就可能发现其它方式漏掉的软件缺陷。


                    </p>
                </li>


                <li>
                    <p><span class="test-01">九、用例设计补充</span>
                        <br><strong>1、使用各种测试方法思路</strong>
                        <br>在任何情况下都必须使用边界值分析方法，经验表明用这种方法设计出测试用例发现程序错误的能力最强；
                        <br>必要时用等价类划分方法补充一些测试用例；
                        <br>用错误推测法再追加一些测试用例(依靠经验)；
                        <br>如果程序的功能说明中含有输入条件组合情况，则可选用因果图/判定表；
                        <br>对业务流程场景清晰的系统，使用场景法贯穿；
                        <br>检查已设计的测试用例的覆盖程度；
                        <br>最后要考虑异常分析，再进行综合使用。

                    </p>
                </li>

                <li>
                    <p>
                        <br><strong>2、测试用例的设计步骤 </strong>

                        <br>构造根据设计规格得出的基本功能测试用例
                        <br>边界值测试用例
                        <br>状态转换测试用例
                        <br>错误猜测测试用例
                        <br>异常测试用例
                        <br>其它测试类型测试用例(如性能测试，易用性测试，安全测试等)


                    </p>
                </li>


                <li>
                    <p>
                        <br><strong>3、优化测试用例的方法 </strong>



                        <br>利用设计测试用例的7种方法不断的对测试用例进行分解与合并
                        <br>采用遗传算法理论进化测试用例
                        <br>在测试时利用发散思维构造测试用例


                    </p>
                </li>

            </ul>

            <div class="tsxi-01">
                <a href="javascript:history.go(-1)"><span>友情提示:</span>本章已看完，点击返回文章首页哦</a>

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
        margin-left: auto;
        margin-right: auto;
        margin-top: 90px;
        background: #fff;
        border: 1px solid #cccccc;
        height: 100%;
        overflow: auto;
        overflow-x: hidden;
        /*火狐去掉滚动条*/
        scrollbar-width: none;
    }

    .demo1::-webkit-scrollbar {
        display: none;
    }
    /*文章展示区*/

    .titer-01 {
        position: relative;
        width: 1280px;
        height: 85px;
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

    .zhanshi-01 {
        max-width: 1280px;
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
        position: relative;
        margin-top: 1em;
        margin-bottom: 16px;
        font-weight: 700;
        line-height: 1.4;
        color: #333333;
        font-size: 21px;
        padding-left: 1em;
    }

    .list-02 {
        font-size: 14px;
        color: #333333;
        padding-left: 2em;
        padding-bottom: 40px;
    }

    .list-02 li {
        display: block;
        position: relative;
        box-sizing: border-box;
        line-height: 30px;
        margin-top: 30px;
    }

    .test-01 {
        font-weight: bold;
        font-size: 20px;
    }

    .tsxi-01 {
        max-width: 1280px;
        height: 100px;
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