import ReactDataGrid from 'react-data-grid';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as proptypes from '../proptypes/types';
import { updateHint } from '../api_calls/python.js';
import { input } from '../containers/InputBox';
import { storeCurrentInput } from '../actions/index.js';


const setInput = (dispatch, active, text, onlyOne = false) => {
    return () => {
        if(active === true){
          let stripText = text.replace(/{/g, '').replace(/}/g, '');
          if(onlyOne === true){
            input.value = text;
          }
          else if(input.value.includes(text)){
            let items = input.value.split(",").map(x => x.replace(/^\s+|\s+$/g, ''));
            let findIndex = items.indexOf(text);
            if(findIndex > -1){
               items.splice(findIndex, 1)
            }
            input.value = items.join(", ");// input.value.replace(RegExp(test+",|"test), '');
          }
          else{
            if(input.value !== "") input.value = input.value + ", " + stripText;
            else input.value = stripText;
          }
          dispatch(storeCurrentInput(input.value));
          updateHint(input.value);
        }
    };
};

class TableSelectMessage extends Component {

  render = () => {
    const data = JSON.parse(this.props.text);
    this.testColumns = data["column_data"];
    this.colMap = {};
    for(let i = 0; i < this.testColumns.length; i++){
      this.colMap[i] = this.testColumns[i].name;
    }
    this.testRows = data["row_data"].slice(0,3);
    let containsText = false;
    let singleColumn = this.testColumns.length === 1;
    console.log(this.props.currentInput);
    return (<div className = {this.props.origin === 'iris' ? 'message left' : 'message right'} style={this.props.hidden === true ? {display: 'none'} : {}}>
        <div className="bubble table">
        <div className="data_table" style={{width: this.testColumns.length * (350+10+1)}}>
          <div className="header">
          {this.testColumns.map((column,i) => {
            if(column.type === "Text"){
              containsText = true;
            }
            return <span className="data_column" onClick={setInput(this.props.dispatch, this.props.active, column.name, this.props.onlyOne)} style={singleColumn || i == 0 ? {'border-left': 'none'} : {}}>{column.name}</span>;
          })}
          </div>
          {this.testRows.map((row,i) => {
            let newRowStyle = {};
            if (containsText){ newRowStyle['height'] = '4em'};
            return (<div className="data_row" style={newRowStyle}>
              {this.testColumns.map((column, i) => {
                let newColStyle = {};
                if(column.type === "Text"){
                  newColStyle['width'] = 350;
                  newColStyle['height'] = '4em';
                }
                if(this.props.active && this.props.currentInput.includes(this.colMap[i])){
                  newColStyle['background-color'] = '#eee';
                }
                if (singleColumn || i == 0){ newColStyle['border-left'] = 'none' };
                return <span className="data_column" style={newColStyle}>{row[column.name]}</span>;
              })}
            </div>)
          })}
        </div>
        </div>
    </div>);
  }

}

TableSelectMessage.propTypes = proptypes.messageType;

const mapStateToProps = (state) => ({
    currentInput: state.currentInput.input
});

TableSelectMessage = connect(mapStateToProps)(TableSelectMessage);

export default TableSelectMessage;