{
  let Service = require('../../service/service.jsx');

  let Register = React.createClass({
    getInitialState(){
        return {
          step: 0,
          step_0:{
            lock: true,
            mouseDown: false,
            left: 0,
            formData:{

            }
          },
          step_1:{
            isCodeSent: false,
            seconds : 0,
            codeTip : '发送验证码',
            data:{
              formData:{

              }
            }
          },
          step_2:{
            type:0,
            imageSrc:''
          }
        }
    },
    render(){
      return (
        <div className="row">
          {this.renderProgress()}

          <div className="center-block">
            <img src="../img/logo.png" className="logo" alt=""/>
            {this.renderCenter()}
          </div>
        </div>
      )
    },
    renderProgress(){
      var status = ['','',''];
      status[this.state.step] = 'active';
      return (
        <div className="top-bar">
          <div className={`item ${status[0]}`}>
             <span>验证手机号</span>
          </div>
          <div className={`item ${status[1]}`}>
            <span>填写账号信息</span>
          </div>
          <div className={`item ${status[2]}`}>
            <span>验证用户身份</span>
          </div>
        </div>
      );
    },
    renderCenter(){
      return (
        <div className="bottom-section">
            {this.renderFormByStep()}
        </div>
      );
    },
    renderFormByStep(){
      var name = `renderStep_${this.state.step}`;
      return this[name].call();
    },
    renderStep_0(){
      return(
        <div className="step-wrapper" id="step_1">
          <form className="row form" id="form_step_1">
            <div className="row">
              <input type="text" className="ipt" placeholder="手机号*"/>
            </div>
            <div className="touch-move-bar">
              <span>{this.state.step_0.lock?'滑动解锁':'解锁完毕' }</span>
              <i className="move-block"
                onMouseDown={this.setLock}
                onMouseUp={this.setLock}
                onMouseLeave={this.setLock}
                onMouseMove={this.setLockLeft}>
                {this.state.step_0.lock?'>>':'✓'}
              </i>
            </div>
            <div className="row">
              <span className="btn default i-b fs-n" style={{width:'100%;'}} onClick={this.goStep_1}>下一步</span>
            </div>
          </form>
        </div>
      )
    },
    goStep_1(){
      this.state.step = 1;
      this.setState(this.state);
    },
    setLock(ev){
      var width = 326;
        if(ev.type == 'mousedown'){
          this.state.step_0.mouseDown = true;
        }else if(ev.type == 'mouseup' || ev.type== 'mouseleave'){
          this.state.step_0.mouseDown = false;
          if(this.state.step_0.left < width){
            this.state.step_0.left = 0;
            ev.target.style['margin-left'] = 0;
          }else{
            this.state.step_0.left = width+'px';
            ev.target.style['margin-left'] = width+'px';
            this.state.step_0.lock = false;
            this.setState(this.state);
          }

        }

    },
    setLockLeft(ev){

        if(this.state.step_0.mouseDown){
          var x = ev.pageX - ev.target.offsetParent.offsetParent.offsetLeft - 2;
          var width = 326;
          if(x > width){
            x = width;
          }else if (x < 0){
            x = 0;
          }

          console.log(x);
          this.state.step_0.left = x;
          ev.target.style['margin-left'] = x+'px';
        }else{
          return 0;
        }
    },
    renderStep_1(){
      return (
        <div className="step-wrapper" id="step_2">
          <form className="row form" >
            <div className="row">
              <input type="text" className="ipt" name="name" placeholder="姓名"/>
            </div>
            <div className="row">
              <input type="password" className="ipt" name="pwd" placeholder="密码"/>
            </div>
            <div className="row">
              <input type="password" className="ipt" name="pwd" placeholder="确认密码"/>
            </div>
            <div className="row">
              <div className="col" style={{width:'65%;','padding-left':0}}>
                <input type="text" className="ipt" name="code" placeholder="输入验证码"/>
              </div>
              <div className="col" style={{width:'35%;','padding-right':0}}>
                <span className={`btn i-b ${this.state.step_1.isCodeSent?'disabled':'default'}`} style={{width:'100%'}} onClick={this.sendCode}>{this.state.step_1.codeTip}</span>
              </div>
            </div>
            <div className="row">
              <span className="btn default i-b fs-n" style={{width:'100%'}} onClick={this.goStep_2}>下一步</span>
            </div>
          </form>
        </div>
      );
    },
    sendCode(){
      var me = this;
      if(this.state.step_1.isCodeSent == false){
        //send code
        var codeTimer = setInterval(()=>{
          if(me.state.step_1.seconds < 60){
            me.state.step_1.seconds ++;
            me.state.step_1.codeTip = `(${me.state.step_1.seconds})秒后再次发送`;
            me.setState(me.state);
          }else{
            me.state.step_1.seconds = 0;
            me.state.step_1.codeTip = '发送短信验证码';
            me.setState(me.state);
            clearInterval(codeTimer);
          }
        },1000);
        this.state.step_1.isCodeSent = true;
        this.setState(this.state);
      }else{
        alert('还不能发送手机验证码!');
      }
    },
    goStep_2(){
      //验证
      var me = this;
      me.state.step = 2;
      me.setState(me.state);
    },

    renderStep_2(){

      return (
        <div className="step-wrapper" id="step_3">
          <form className="row register-type-wrapper" id="register_type">
              <div className="radio col">
                  <input type="radio" name="register_type" id="register_type_admin" value="0" checked={this.state.step_2.type==0?'checked':''}/>
                  <label htmlFor="register_type_admin"  onClick={this.setUserType} data-value={0}><span>机构管理员</span></label>
              </div>
              <div className="radio col">
                  <input type="radio"  name="register_type" id="register_type_worker" value="1"  checked={this.state.step_2.type==1?'checked':''}/>
                  <label htmlFor="register_type_worker"  onClick={this.setUserType} data-value={1}><span>我是护工</span></label>
              </div>
              <div className="radio col">
                  <input type="radio"  name="register_type" id="register_type_family" value="2"  checked={this.state.step_2.type==2?'checked':''}/>
                  <label htmlFor="register_type_family"  onClick={this.setUserType} data-value={2}><span>我是家属</span></label>
              </div>
          </form>

          {this.renderFormByType()}

          <div className="row">
            <span className="btn default i-b fs-n" style={{width:'100%','margin-top':'15px'}}>完 成</span>
          </div>
        </div>

      );
    },
    setUserType(ev){
      var dom = ev.target;
      if(dom.nodeName.toLowerCase()=='span'){
        dom = dom.parentNode;
      }
      var type = dom.getAttribute('data-value') - 0;
      this.state.step_2.type = type;
      this.state.step_2.maxLevel = [0,3,4][type];
      this.state.step_2.level = 0;
      this.setState(this.state);
    },
    renderFormByType(){
      return this[`renderStep_2_type_${this.state.step_2.type}`].call(this);
    },
    renderStep_2_type_0(){
      //机构
      return (
        <div className="row form">
          <form className="row form" >
            <div className="row">
              <input type="text" className="ipt" name="org_name" placeholder="机构名称*"/>
            </div>
            <div className="row">
              <input type="text" className="ipt" name="org_person" placeholder="机构负责人*"/>
            </div>

            <div className="row">
              <input type="text" className="ipt" name="org_bed_num" placeholder="床位数"/>
            </div>
          </form>

          <District type={this.state.step_2.type} level={this.state.step_2.level} maxLevel={3}/>

          <form className="row form" >
            <div className="col" style={{'width':'50%'}}>
              <input type="file" style={{'display':'none'}} id="org_img_uploader" onChange={this.uploadImage}/>
              <label className="btn default i-b fs-n" htmlFor="org_img_uploader">上传机构证件照</label>
            </div>
            <div className="col" style={{'width':'50%'}}>
              <img src={this.state.step_2.imgSrc} alt={'机构证件照预览'} width="170"/>
            </div>
          </form>
        </div>
      );
    },
    uploadImage(ev){
      var input = ev.target;
      var file = ev.target.files[0];
      var me = this;
      if(file.type.toLowerCase().indexOf('image') > -1){
        var reader = new FileReader();
            reader.onload = (e)=>{
                var r = reader.result;
                me.state.step_2.imgSrc = r;
                me.setState(me.state);
            };
        reader.readAsDataURL(file);
      }
    },
    renderStep_2_type_1(){
      return (
        <div className="row form">
          <form className="row form" >
            <div className="row">
              <input type="text" className="ipt" name="org_name" placeholder="机构名称*"/>
            </div>
            <div className="row">
              <input type="text" className="ipt" name="org_person" placeholder="机构负责人*"/>
            </div>

            <div className="row">
              <input type="text" className="ipt" name="org_bed_num" placeholder="床位数"/>
            </div>
          </form>


          <District type={this.state.step_2.type} level={this.state.step_2.level} maxLevel = {4}/>


        </div>
      );
    },
    renderStep_2_type_2(){
      return (
        <form className="row form" >
          <div className="row">
            <input type="text" className="ipt" name="org_name" placeholder="老人信息"/>
          </div>
          <div className="row">
            <input type="text" className="ipt" name="org_person" placeholder="老人身份证号"/>
          </div>
          <div className="row">
            <input type="text" className="ipt" name="org_bed_num" placeholder="机构名称"/>
          </div>
        </form>
      );
    },

  });
var District = React.createClass({
  getInitialState(){
    this.state = {
      level: this.__default('level',0),
      levelNames: ['province','city','district','org'],
      levelLabel: ['省份','城市','区县','机构名称'],
      picked: this.__default('picked',[]),
      pickedLabels: this.__default('picked',[]),
      levelData: [],
      levelString:this.__default('levelString',''),
      loading: false,
      loaded: false
    };
    this.getItems();
    return this.state;
  },
  __default(name,value){
    return this.props[name]== undefined ? value : this.props[name];
  },
  render(){
    return(
      <div className="row district-panel form">
        <div className="row m-value">
          <input type="text" className="ipt" placeholder="机构名称" value={this.state.levelString} disabled/>
        </div>
        <div className="row level-wrapper">
          {this.renderLevelLabels()}
        </div>
        {this.renderItems()}
      </div>
    )
  },
  renderLevelLabels(){
    var me = this;
    var len = this.props.maxLevel;
    var arr = this.state.levelLabel.slice(0,len);
    return _.map(arr,(item,level)=>{
        return (
          <div className={`item m-${len} ${me.state.level == level?'active':''}`} data-level={level} onClick={this.switchLevel}>
            <span data-level={level}>{item}</span>
          </div>
        )
    });
  },
  renderItems(){
    var data = null;
    if(this.state.loading){
      data = (<span>查询中...</span>);
    }else{
      var data = _.map(this.state.levelData,(item,index)=>{
        return (
          <span className="item" data-level={this.state.level} data-value={item.value} data-label={item.name}>
            {item.name}
          </span>
        );
      });
      if(data == []){
        data = (<span>无结果</span>)
      }
    }

    return (
      <div className="districts-wrapper" onClick={this.changeLevel}>
        { data }
      </div>
    );
  },
  provinceData(){
    var me = this;
    this.state.loading = true;
    Service.Register.province()
      .done((data)=>{
        me.state.levelData = data;
        me.state.loading = false;
        me.setState(me.state);
      },me);
  },
  cityData(provinceData){
    var me = this;
    this.state.loading = true;
    Service.Register.city(provinceData)
      .done((data)=>{
        me.state.levelData = data;
        me.state.loading = false;
        me.setState(me.state);
      },me);
  },
  districtData(cityData){
    var me = this;
    this.state.loading = true;
    Service.Register.district(cityData)
      .done((data)=>{
        me.state.levelData = data;
        me.state.loading = false;
        me.setState(me.state);
      },me);
  },
  orgData(districtData){
    var me = this;
    this.state.loading = true;
    Service.Register.org(districtData)
      .done((data)=>{
        me.state.levelData = data;
        me.state.loading = false;
        me.setState(me.state);
      },me);
  },
  changeLevel(ev){
    var me = this;
    if(ev.target.tagName.toLowerCase() == 'span'){
      var level = ev.target.getAttribute('data-level') - 0;
      var value = ev.target.getAttribute('data-value');//待定
      var label = ev.target.getAttribute('data-label');

      this.state.picked[this.state.level]  = value;
      this.state.pickedLabels[this.state.level]  = label;
      if(this.state.level < this.props.maxLevel - 1){
        this.state.level++;
        this.setState(this.state);
        this.getItems();
      }else{
        this.setState(this.state);
        this.getItems();
      }
      console.log(value);
    }
  },
  switchLevel(ev){
    var me = this;
    var level = ev.target.getAttribute('data-level') - 0;
    var len = this.state.picked.length;
    //如果level大过 piced 长度 name是不允许的
    if(level >= len){
      return;
    }else{
      //否则将降至level 级数据
      this.state.picked = this.state.picked.splice(0,level);
      this.state.pickedLabels = this.state.pickedLabels.splice(0,level);
      this.state.level = level;
      this.getItems();
    }
  },
  getItems(){
    var level = this.state.level;
    var data = level > 0 ? this.state.picked[level-1]:null;
    var name = this.state.levelNames[level];
    this.state.levelString = this.state.pickedLabels.join(' ');
    this[`${name}Data`].call(this,data);
  }
});

  React.render(<Register/>,document.body);
}
