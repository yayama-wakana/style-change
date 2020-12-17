import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';
import './style.css';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectMenu: 0};
    this.onClickMenu = this.onClickMenu.bind(this);
  }

  renderToolbar() {
    return (
      <Toolbar>
      <div className='center'>CSSで見た目を変える</div>
      </Toolbar>
    );
  }

  onClickMenu(i) {
    this.setState({selectMenu: i});
  }


  render() {
    
    var color =  ["red","orange", "blue", "green"];
    var styleHello = {"color": color[this.state.selectMenu-1]};
     
    var menuItemClass = ["item", "item", "item", "item"];
    menuItemClass[this.state.selectMenu-1] = "item"+this.state.selectMenu;
    

    return (
      <Page renderToolbar={this.renderToolbar}>
         <div className="midashi">見出しタイトル</div>
         <p style={styleHello}>はろー！</p>
        <ul className="menu">
            <li className={menuItemClass[0]} onClick={()=>this.onClickMenu(1)}>メニュー１</li>
            <li className={menuItemClass[1]} onClick={()=>this.onClickMenu(2)}>メニュー２</li>
            <li className={menuItemClass[2]} onClick={()=>this.onClickMenu(3)}>メニュー３</li>
            <li className={menuItemClass[3]} onClick={()=>this.onClickMenu(4)}>メニュー４</li>   
        </ul>     
      </Page>
    );
  }
}

/*      var styleHello = {
        "color": "red",
      };
      var menuItemClass = "item";

    if(this.state.selectMenu == 1) {
      menuItemClass = "item-selected1";
      styleHello = {
      "color": "blue",
      "font-family": "serif",
      };
    }

    if(this.state.selectMenu == 2){
      menuItemClass = "item-selected2";
      styleHello = {
      "color": "green",
      "font-family": "serif",
      };
    }*/
