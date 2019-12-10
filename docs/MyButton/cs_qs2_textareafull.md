---
id: cs_qs2_textareafull
title: cs_qs2_textareafull
---

## **Mô tả**

Sử dụng cho màn hình có Detail, show full ui

![](/img/btn_textareafull.png)

## **More**

Không có More

## **Ví dụ**

Xem trong [http://localhost:8080/#/dev/mybutton](http://localhost:8080/#/dev/mybutton) 

## **Code**

```javascript
import React from 'react'
import PropTypes from 'prop-types';
import {
  Row,Col,
  Card,CardHeader,CardBody,CardFooter,CardTitle,
  Button, Input,
} from 'reactstrap';
import Popover from '../../../mreact/popover/Popover';
/**
 * MyButtonType: cs_qs2_textareafull
 *
 * @class cs_qs2_textareafull
 * @static
 * @namespace cs_qs2_textareafull
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

  _convert=()=>{
    let _allExpandDetail = document.querySelectorAll(".div-expand");
    if(_allExpandDetail && _allExpandDetail.length>0){
      for(let i1 =0;i1<_allExpandDetail.length;i1++){
        let _expandDetail = _allExpandDetail[i1];
        let _allExpandRow = _expandDetail.querySelectorAll(".div-expand-row");
        if(_allExpandRow && _allExpandRow.length>0){
          let _maxRow = {};
          for(let i2 =0;i2<_allExpandRow.length;i2++){
            let _expandRow = _allExpandRow[i2];
            let _allTextareaFull = _expandRow.querySelectorAll("textarea");
            let _allDivFull = _expandRow.querySelectorAll(".ita-full");
            if(_allTextareaFull && _allTextareaFull.length>0){              
              for(let i3 =0;i3<_allTextareaFull.length;i3++){
                let _textarea = _allTextareaFull[i3];
                let _heightDiv = 0;
                // if(_div && _div.offsetHeight){
                //   _heightDiv = _div.offsetHeight;
                // }
                if(_textarea && _textarea.scrollHeight){
                  _heightDiv = _textarea.scrollHeight;
                }   
                if(_maxRow[i3]==null || _maxRow[i3]<_heightDiv){
                  _maxRow[i3] = _heightDiv;
                }
              }
            }            
          }
          // console.warn(`maxRow:`,_maxRow);
          for(let i2 =0;i2<_allExpandRow.length;i2++){
            let _expandRow = _allExpandRow[i2];
            let _allDivFull = _expandRow.querySelectorAll("textarea");
            // let _allDivFull = _expandRow.querySelectorAll(".ita-full");
            if(_allDivFull && _allDivFull.length>0){              
              for(let i3 =0;i3<_allDivFull.length;i3++){
                let _div = _allDivFull[i3];
                if(_div && _div.style && _maxRow[i3]){
                  _div.style.height = `${_maxRow[i3]+10}px`;
                } 
              }
            }            
          }
        }
      }
    }    
  }

  _convert_divtextareafull=()=>{
    let _allExpandDetail = document.querySelectorAll(".div-expand");
    if(_allExpandDetail && _allExpandDetail.length>0){
      for(let i1 =0;i1<_allExpandDetail.length;i1++){
        let _expandDetail = _allExpandDetail[i1];
        let _allExpandRow = _expandDetail.querySelectorAll(".div-expand-row");
        if(_allExpandRow && _allExpandRow.length>0){
          let _maxRow = {};
          for(let i2 =0;i2<_allExpandRow.length;i2++){
            let _expandRow = _allExpandRow[i2];
            let _allDivFull = _expandRow.querySelectorAll(".ita-full");
            if(_allDivFull && _allDivFull.length>0){              
              for(let i3 =0;i3<_allDivFull.length;i3++){
                let _textarea = _allDivFull[i3];
                let _heightDiv = 0;
                if(_div && _div.offsetHeight){
                  _heightDiv = _div.offsetHeight;
                }
                if(_maxRow[i3]==null || _maxRow[i3]<_heightDiv){
                  _maxRow[i3] = _heightDiv;
                }
              }
            }            
          }
          // console.warn(`maxRow:`,_maxRow);
          for(let i2 =0;i2<_allExpandRow.length;i2++){
            let _expandRow = _allExpandRow[i2];
            let _allDivFull = _expandRow.querySelectorAll(".ita-full");
            if(_allDivFull && _allDivFull.length>0){              
              for(let i3 =0;i3<_allDivFull.length;i3++){
                let _div = _allDivFull[i3];
                if(_div && _div.style && _maxRow[i3]){
                  _div.style.height = `${_maxRow[i3]}px`;
                } 
              }
            }            
          }
        }
      }
    }    
  }

  _convert2=()=>{
    let _allExpand = document.querySelectorAll(".div-expand-row");
    if(_allExpand && _allExpand.length>0){
      //t.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
      for(let i=0;i<_allExpand.length;i++){
        let _eExpand = _allExpand[i];
        let _pExpand = _eExpand.parentElement;
        let _heightExpand = _pExpand.offsetHeight;
        let _heightTextarea = _heightExpand - 59;
        let _divTextarea = _eExpand.querySelector(".ita-full");
        // _divTextarea.offsetHeight = _heightTextarea;
        if(_divTextarea && _divTextarea.style){
          _divTextarea.style.height = `${_heightTextarea}px`;
        }        
      }
    }
  }

  render() {
    return(
      <Button color="primary" onClick={()=>{
        this._convert();
      }}>
        UIFull
      </Button>  
    )
  }
}

export default Z;
```

