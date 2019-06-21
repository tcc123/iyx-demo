  <template>
  <div class='canshushezhi'>
    <div class="grid-content bg-purple">
      <div class='mianbaoxie-Nav'>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">返回报告</el-breadcrumb-item>
          <el-breadcrumb-item>开始评估</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class='report-schoolName'>
        <h4>评估学校</h4>
        <ul>
          <li>
            <span>报告类型：</span>
            <el-radio-group v-model="radioType" size="small">
              <el-radio-button label="单校评估"></el-radio-button>
              <el-radio-button label="区域评估" disabled></el-radio-button>
            </el-radio-group>
          </li>
          <li>
            <span>评估学校：</span>
            <el-input v-model="diqu" placeholder="请输入内容" size="small"></el-input>
            <el-input v-model="xuexiao" placeholder="请输入内容" size="small"></el-input>
          </li>
          <li>
            <span>学年学期：</span>
            <el-input v-model="xueqi" placeholder="请输入内容" size="small"></el-input>
          </li>
        </ul>
      </div>
      <div class='choose-parameter'>
        <h4>
          选课方案
        </h4>
        <el-radio-group v-model="radioReport" class='report-radio'>
          <el-radio-button label="6选3"></el-radio-button>
          <el-radio-button label="7选3"></el-radio-button>
          <el-radio-button label="3+1+2"></el-radio-button>
        </el-radio-group>
        <h4>核心数据</h4>
        <ul>
          <li>
            <p>
              选课数据
            </p>
            <div class='select-tit'>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <span>已包含：学生成绩、课程课时</span>
            </div>
          </li>
          <li>
            <p>学生成绩</p>
            <div>如果选科数据内已包含学生成绩，报告中将会呈现对成绩的分析。</div>
          </li>
        </ul>
        <h4>评估参数</h4>
        <ul>
          <li>
            <p>
              分班参数
            </p>
            <div>
              <span>行政班开班数：</span>
              <el-input-number v-model="num8" size='small' controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
              <br>
              <span>行政班人数区间：</span>
              <el-slider v-model="studentsScope" range :max="100" input-size='mini'>
              </el-slider>
            </div>
          </li>
          <li>
            <p>课程课时</p>
            <div>
              <span style="margin:10px 0px;display:inline-block">将依据选科数据内包含的课程课时进行分析。</span>
              <br>
              <span>教师周课时不超过：</span>
              <el-input-number v-model="num8" size='small' controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
            </div>
          </li>
        </ul>
        <h4 style="margin-bottom:15px">选择走班方案
          <span>必须选择一个方案,请先选择任务</span>
        </h4>
        <ul style="display:inline-block;width:100%">
          <li class='el-col el-col-5' :span="6" v-for="(o, index) in 8" :key="o" :offset="index > 0 ? 2 : 0" style="margin:5px 5px;">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <div style="padding: 14px;">
                <span style="margin-bottom:15px;display:inline-block">套餐制</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">选择任务</el-button>
                </div>
              </div>
            </el-card>
          </li>
        </ul>
        <span style="font-size: 12px;color: #5A5A5A;">注：报告仅显示已选择任务的走班方案。</span>
      </div>
      <div class='footerBtn-group'>
        <el-button type="primary" size="small">开始评估</el-button>
        <el-button size="small">取 消</el-button>
      </div>
    </div>
    <!-- <el-col :span="6">
      <div class="grid-content bg-purple rightContent">
        <div class='start-report'>
          <el-card shadow="never">
            开始评估
          </el-card>
        </div>
        <div class='report-template'>
          <span>资源评估报告模版</span>
          <div>

          </div>
          <span>资源评估操作手册</span>
          <div>

          </div>
          <span>常见问题</span>
          <br>
          <i>
            暂无
          </i>
        </div>
      </div>
    </el-col> -->
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      radioType: '单校评估',
      radioReport: '6选3',
      diqu: '',
      xuexiao: '',
      xueqi: '',
      num8: 1,
      openClasses: '5',
      maxScope: 100,
      studentsScope: [4, 70],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
.canshushezhi {
  width: 100%;
  .bg-purple {
    width: 897px;
    margin: 0 auto;
    .mianbaoxie-Nav {
      display: flex;
      align-items: center;
      color: #5A5A5A;
      font-size: 14px;
      height: 64px;
      background: #FFFFFF;
      border-radius: 3px;
      padding-left: 32px;
      margin-bottom: 24px;
      .el-breadcrumb__item {
        &:last-of-type {
          .el-breadcrumb__inner {
            color: #1890FF;
          }
        }
        .el-breadcrumb__inner {
          font-weight: normal;
        }
      }
    }
    .report-schoolName {
      height: 236px;
      background: #FFFFFF;
      border-radius: 3px;
      margin-bottom: 16px;
      padding: 24px;
      > h4 {
        font-size: 18px;
        font-weight: 500;
        color: #5A5A5A;
      }
      > ul {
        padding: 24px 24px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          > .el-radio-group {
            > label {
              margin: 5px;
              > span {
                border: 1px solid #dcdfe6;
                border-radius: 4px;
              }
            }
          }
          > span {
            float: left;
            font-size: 14px;
            color: #5a5a5a;
          }
          > .el-input {
            float: left;
            width: 200px;
            margin: 0px 5px;
          }
        }
      }
    }
    .choose-parameter {
      background-color: white;
      padding: 24px;
      border-bottom: 1px solid #eee;
      > h4 {
        font-size: 18px;
        color: #5a5a5a;
        > span {
          font-size: 13px;
          color: #f5222d;
        }
      }
      > .report-radio {
        margin: 10px 0px;
        > label {
          margin: 10px;
          > span {
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            padding: 10px 40px;
          }
        }
      }
      > ul {
        padding-bottom: 34px;
        > li {
          > p {
            font-size: 16px;
            color: #5a5a5a;
            border-left: 3px solid #40a9ff;
            text-indent: 20px;
            margin: 20px 0px;
          }
          > div {
            font-size: 14px;
            > .el-select {
              width: 316px;
              height: 32px;
              .el-input__inner {
                height: 32px;
                line-height: 32px;
              }
            }
            > span {
              font-size: 14px;
            }
          }
          > .select-tit {
            > span {
              color: #1890ff;
            }
          }
          > .el-card {
            text-align: center;
            .bottom {
              border-top: 1px solid #cecece;
            }
          }
        }
      }
    }
  }
  .rightContent {
    text-align: center;
    > .report-template {
      margin-top: 14px;
      background: white;
      padding: 20px;
      > span {
        font-size: 16px;
        color: #5a5a5a;
        display: inline-block;
        margin: 16px 0px;
      }
      > div {
        height: 108px;
        width: 80%;
        background-color: #f7f7f7;
        margin: 0 auto;
      }
    }
    .el-card__body {
      background-color: #40a9ff;
      color: white;
    }
  }
  .footerBtn-group {
    background-color: white;
    padding: 14px;
  }
}
li {
  list-style: none;
}
</style>
