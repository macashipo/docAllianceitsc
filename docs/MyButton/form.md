---
id: form
title: form
---


## **Mô tả**

Button click vào sẽ show form

![](/img/btn_form.png)

## **More**

Không có More

## **Ví dụ**

Xem trong [http://localhost:8080/#/dev/mybutton](http://localhost:8080/#/dev/mybutton) 

## **Code**

```javascript
import React from 'react'
import {
  Row,Col,
  Card,CardHeader,CardBody,CardFooter,CardTitle,
  Button
} from 'reactstrap';
import ModalForm from "../../../views/Components/Form/FormModal";
import MyModal from '../../MyModal/MyModal';
import MyForm from '../../../views/Components/Form/index';
import * as H from '../../../helpers';
import ApiGeneric from '../../../services/generic';
import PropTypes from 'prop-types'
import MyForm2 from '../../MyForm/MyForm';
import Global from '../../../helpers/Global';
/**
 * MyButtonType: form.
 *
 * @class form
 * @static
 * @namespace form
 * @memberof MyButtonTypes
 * 
 */
class Z extends React.Component {
  static propTypes = {
  }
  static defaultProps = {
  }
  constructor(props) {
    super(props);
    this.state={
    };
  }
  _onClickOK=()=>{
    if(this._cForm){
      let _values = this._cForm._getCurrentValues();
      // console.warn("values:",_values);
      this._onRequestSubmit(_values);
    }

  }
  _onRequestSubmit=(data={})=>{
    // const {queryData,config,reloadTable} = this.props;
    const {type,title,color,typeProps,getQuery,getOptions,formConfig,reloadTable,successCallBack} = this.props;
    const {queryData} = (typeProps || {});
    let _queryData = Object.assign({},queryData,data);
    if(getQuery){
      let _customQuery = getQuery() || {};
      _queryData = Object.assign(_queryData,_customQuery);
    }
    // console.warn('_onRequestSubmit:',_queryData,this.props,queryData,data);
    // return;
    MyModal.Helper.showLoading();
    // return;
    ApiGeneric.generic({
      request:{
        method: 'POST',
        url: `/api/v1/${typeProps.apiPathAndName}`
      },
      data:_queryData,
      successCallBack:(response)=>{
        let _msg = response.Msg;
        let _data = response.Data;
        if(_msg){
          H.Global.Toast.showSuccess(_msg);
        }
        if(typeProps.reloadAfterRequest==true){
          location.reload();
        }
        else if(typeProps.reloadTableAfterRequest==true && reloadTable!=null){
          reloadTable();
        }
        if(_data){
          if(_data.FullPath){
            H.MyDialog.Helper.show({
              title: 'Link',
              msg: (<div style={{wordWrap:'break-word'}}><a href={_data.FullPath} target="_blank">{_data.FullPath}</a></div>)});
          }
        }
        // this.setState({isSubmiting:false,isShow:false});
        if(successCallBack){
          successCallBack(response);
        }
        MyModal.Helper.hide();
      },
      errorCallBack:(error,response)=>{
        // this.setState({isSubmiting:false});
        MyModal.Helper.hideLoading();
      }
    })
  }
  // getOptions=()=>{
  //   console.warn('getOptions:',this.props);
  //   if(this.props.options){
  //     console.warn('this.props.options: ', this.props.options);
  //     return this.props.options;
  //   }
  //   else if(this.props.getOptions){
  //     let _options = this.props.getOptions();
  //     // console.log('getOptions2 :',_options);
  //     return _options;
  //   }
  //   return {};
  // }
  _getTitleModal=()=>{
    const {type,title,color,typeProps,getCustomQuery,getOptions,formConfig} = this.props;
    let _title = 'Form Button';
    if(formConfig && formConfig.Title){
      _title = formConfig.Title;
    }
    return _title;
  }
  _renderModalContent=()=>{
    const {type,title,color,typeProps,getCustomQuery,getOptions,formConfig} = this.props;
    const {ConfirmMsg} = (typeProps || {});
    return(
      <div>
        { 
          ConfirmMsg!= null &&
          <div>{ConfirmMsg}</div>
        }
        <MyForm 
          ref={r=>{this._cForm=r;}} 
          config={formConfig} 
          onSubmit={this._onClickOK}
          getOptionOfKey={(key)=>{    
            if(getOptions){
              let _options = getOptions();          
              // console.warn('getOptionOfKey:',key,_options);
              if(_options[key]){
                return _options[key];
              }
            }                
            return [];
          }}
        />
      </div>
    )
  }

  //dung cho render form fumigation-certificate
  _renderFormType=()=>{
    const {type,title,color,typeProps,getCustomQuery,getOptions,formConfig} = this.props;
    // console.warn('formConfig ', formConfig );
    return(
      <MyForm2 ref={r=>{this._cForm=r;}} config={formConfig}/>
    )
  }

  //dùng để render cho type select_kanban_working
  // _renderModalSelectWorking=()=>{
  //   const {type,title,color,typeProps,getCustomQuery,getOptions,formConfig} = this.props;
  //   const {ConfirmMsg} = (typeProps || {});
  //   return(
  //     <div>
  //       { 
  //         ConfirmMsg!= null &&
  //         <div>{ConfirmMsg}</div>
  //       }
  //       <MyForm 
  //         ref={r=>{this._cForm=r;}} 
  //         config={formConfig} 
  //         onSubmit={this._onClickOK}
  //         getOptionOfKey={(key)=>{    
  //           if(getOptions){
  //             let _options = getOptions();          
  //             // console.warn('getOptionOfKey:',key,_options);
  //             if(_options[key]){
  //               return _options[key];
  //             }
  //           }                
  //           return [];
  //         }}
  //       />
  //     </div>
  //   )
  // }

  _showSubmitFooter=()=>{
    const {type,title,color,typeProps,getCustomQuery,getOptions,formConfig} = this.props;
    if (formConfig && formConfig.Data && formConfig.Data.length>0){
      let _data = formConfig.Data;
      for (let i=0;i<_data.length;i++){
        if (_data[i].SubmitAfterChange){
          if (_data[i].SubmitAfterChange == false){
            return false;
          }
        }else{
          return false;
        }
      }
    } 
    return true;
  }

  render() {
    const {type,title,color,typeProps,getCustomQuery,getOptions,styleBtn,outline,formType,formConfig} = this.props;
    const {ConfirmMsg,Icon} = (typeProps || {});
    let _key = `form_`;
    // console.warn('this.props', this.props);
    // if (formConfig && formConfig.Data && formConfig.Data.length>0){
    //   let _data = formConfig.Data;
    //   for (let i=0;i<_data.length;i++){
    //     if (_data[i].Type == "select_kanban_working"){
    //       return (
    //         <Button 
    //           color={color}
    //           style={styleBtn}
    //           outline={outline}
    //           onClick={()=>{
    //             MyModal.Helper.show(this._renderModalSelectWorking(),{
    //               key: _key,
    //               title: this._getTitleModal(),
    //               className: 'modal-lg',
    //               // showFooter:true,       
    //               // showSubmit: true,
    //               // onClickSubmit: this._onClickOK,      
    //             });
    //           }}
    //         >          
    //         {title||"Button"}
    //         </Button>
    //       )
    //     }
    //   }
    // }
    if (formType){
      // console.warn('formType', formType);
      return(
        <Button 
          color={color}
          onClick={()=>{
            MyModal.Helper.show(this._renderFormType(),{
              key: _key,
              title: 'Form Button',
              className: 'modal-lg',
              showFooter:true,       
              showSubmit: false, //Bấm Submit bị lỗi nên ẩn đi
              onClickSubmit: this._onClickOK,      
            });
          }}
        >          
        {
          Icon !=null ?
            (
              this.state.isLoading==true ?
              <span>
                <i className={"fa fa-spinner fa-spin"}/> 
                <i className={Icon}/>
              </span>
              :
              <i className={Icon}/>
            )        
          :
            (
              this.state.isLoading==true &&
              <i className={"fa fa-spinner fa-spin"}/> 
            )
        }
        {
          title
        }
        </Button>
      )
    }
    return(
      <Button 
        color={color}
        style={styleBtn}
        outline={outline}
        onClick={()=>{
          MyModal.Helper.show(this._renderModalContent(),{
            key: _key,
            title: this._getTitleModal(),
            className: 'modal-lg',
            showFooter:!this._showSubmitFooter(),       
            showSubmit: !this._showSubmitFooter(),
            onClickSubmit: this._onClickOK,      
          });
        }}
      >          
      {
        Icon !=null ?
          (
            this.state.isLoading==true ?
            <span>
              <i className={"fa fa-spinner fa-spin"}/> 
              <i className={Icon}/>
            </span>
            :
            <i className={Icon}/>
          )        
        :
          (
            this.state.isLoading==true &&
            <i className={"fa fa-spinner fa-spin"}/> 
          )
      }
      {
        title
      }
      </Button>
    )
  }
}

export default Z;
```

