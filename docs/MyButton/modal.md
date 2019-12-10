---
id: modal
title: modal
---


## **Mô tả**

Button click vào sẽ show modal

![](/img/btn_modal.png)

## **More**

More truyền cho modal (truyền trong modalProps của modal)

***modal type: list_check***

| Tên | Type | Mô tả |
| --- | ---- |------ |
| source | String | options[source] (dùng để render list checbox)|
| fQuery | String | fieldName của data truyền cho api khi click nút Submit của modal |
| modal | Object | config modal |

## **Ví dụ**

Xem trong [http://localhost:8080/#/dev/mybutton](http://localhost:8080/#/dev/mybutton) 

Hoặc ứng dụng thực tế trong:

Xem trong [https://dev.solidapp.vn/#/project/project-maintenance/TEST_COPY_FILE](https://dev.solidapp.vn/#/project/project-maintenance/TEST_COPY_FILE) 

## **Code**

```javascript
import React from 'react'
import {
  Row,Col,
  Card,CardHeader,CardBody,CardFooter,CardTitle,
  Button, Input, Label,
} from 'reactstrap';
import MyModal from '../../MyModal/MyModal';
import MyForm from '../../../views/Components/Form/index';
import * as H from '../../../helpers';
import ApiGeneric from '../../../services/generic';
import PropTypes from 'prop-types';
import MyButtonHelpers from '../MyButtonHelpers';

/**
 * MyButtonType: modal.
 *
 * @class modal
 * @static
 * @namespace modal
 * @memberof MyButtonTypes
 * 
 */
class MyButton_Modal extends React.Component {
  static propTypes = {
  }
  static defaultProps = {
  }
  constructor(props) {
    super(props);
    this.state={
    };
  }
  _onClickSubmit=({queryFromTypeModal}={})=>{
    // const {queryData,config,reloadTable} = this.props;
    const {type,title,color,typeProps,getQuery,getOptions,formConfig,reloadTable,successCallBack} = this.props;
    const {queryData} = (typeProps || {});
    let _queryData = Object.assign({},queryData);
    if(getQuery){
      let _customQuery = getQuery() || {};
      _queryData = Object.assign(_queryData,_customQuery);
    }
    if(queryFromTypeModal){
      _queryData = Object.assign(_queryData,queryFromTypeModal);
    }

    MyModal.Helper.showLoading();
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
        if(successCallBack){
          successCallBack(response);
        }
        MyModal.Helper.hide();
      },
      errorCallBack:(error,response)=>{
        MyModal.Helper.hideLoading();
      }
    })
  }

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

  _getKeyModal=()=>{
    return `button_modal_`;
  }

  render() {
    const {type,title,color,typeProps,getCustomQuery,getOptions,styleBtn,outline,formType,formConfig,getSource} = this.props;    
    let _more = MyButtonHelpers.getMoreInConfig(this.props);
    let _configModal = MyButtonHelpers.getConfigModal(this.props,{moreObj:_more});   
    return(
      <Button 
        onClick={()=>{
          MyModal.Helper.showFromType(_configModal.type || 'list_check',{
            key: this._getKeyModal(),
            title: _configModal.title || title ||'Modal Button',
            className: _configModal.className || 'modal-lg',
            showFooter:!this._showSubmitFooter(),       
            showSubmit: !this._showSubmitFooter(),
            onClickSubmit: this._onClickSubmit, 
            modalProps: {
              more: _more
            },
            getOptions:()=>{
              if (getOptions){
                return getOptions();
              }
              return [];
            },  
            // fnList: {
            //   fnUpdateData:()=>{
            //   }
            // }
          });
        }}
        {...MyButtonHelpers.getMoreProps(this.props,null,null)}
      >          
      {
        MyButtonHelpers.getTitle(this.props)
      }
      </Button>
    )
  }
}

export default MyButton_Modal;
```

