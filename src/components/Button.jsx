import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';


class ButtonIncome extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          activeTab: 'Demography',
        };
      }

      onClickTabItem = () => {
        this.setState({ activeTab: 'Demography' });
      }


      render(){
        const {
            onClickTabItem,
            props: {
              children,
            },
            state: {
              activeTab,
            }
          } = this;

          return(
<div>
<button onClick={onClickTabItem}>Next Button</button>




</div>

          )
      }




}

export default ButtonIncome;