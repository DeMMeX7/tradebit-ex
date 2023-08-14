import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import './App.css';
import FilterDemo from './components/DropDown';
import BasicDemo from "./components/DropDef";
import CheckExample from "./components/Check";
import StatisticsCharts from "./components/StatisticsCharts";

class PersonalDetails extends Component {
  state = {
    selectedCountry1: null, // Initialize selected value state for the first <FilterDemo> component
    selectedCountry2: null, // Initialize selected value state for the second <FilterDemo> component
  };

  continue = (e) => {
    e.preventDefault();
    const isFirstNameValid = this.props.validateFirstName();
    const isLastNameValid = this.props.validateLastName();
    if (isFirstNameValid && isLastNameValid) {
      this.props.nextStep();
    }
  };

  // Function to update selected value for the first <FilterDemo> component
  handleSelectedCountryChange1 = (value) => {
    this.setState({ selectedCountry1: value });
  };

  // Function to update selected value for the second <FilterDemo> component
  handleSelectedCountryChange2 = (value) => {
    this.setState({ selectedCountry2: value });
  };

  render() {
    const {
      firstname,
      lastname,
      handleChange,
      validateFirstName,
      validateLastName,
      isErrorFirstName,
      isErrorLastName,
      errorMessageFirstName,
      errorMessageLastName,
    } = this.props;

    const { selectedCountry1, selectedCountry2 } = this.state; // Retrieve selected values from state


    return (
        <div className="form">
          <form>
            <Stepper
                steps={[{ label: 'Exchange Choice' }, { label: 'Wallet Address' }, { label: 'Confirmation' }]}
                activeStep={0}
                connectorStyleConfig={{
                  size: '6px',
                  stepSize: '2rem',
                  backgroundColor: 'red',
                  activeColor: '#0BCFAE',
                  disabledColor: '#0BCFAE',
                  marginTop: '5px'
                }}
                styleConfig={{
                  activeBgColor: '#0BCFAE',
                  activeTextColor:'#403E3E',
                  inactiveBgColor: '#172a46',
                  inactiveTextColor: '#0BCFAE',
                  completedBgColor: '#fff',
                  completedTextColor: '#0BCFAE',
                  size: '2em',
                  fontWeight: 'bold',
                  borderRadius: '20%',
                  stepSize: '3em'

                }}

                className={'stepper'}
                stepClassName={'stepper__step'}
            />


            <div className="form-group" >
              <div className="form-group__element" >
                <label htmlFor="first name" className="form-group__label">
                  <div style={{fontSize: "18px", fontWeight: "bold", color: "#0BCFAE",textShadow: '#0BCFAE 0 0 10px' }}>{selectedCountry2 ? selectedCountry2.name : 'Bitcoin'}  </div>
                </label>

                <input
                    type="text"
                    value={firstname}
                    name="first name"
                    onChange={handleChange('firstname')}
                    onBlur={validateFirstName}
                    className="form-group__input"
                />
                <FilterDemo
                    selectedCountry={selectedCountry1} // Pass the selected value as a prop
                    setSelectedCountry={this.handleSelectedCountryChange1} // Pass the callback function to update the selected value
                /><BasicDemo/>
                <p className="error">{isErrorFirstName && errorMessageFirstName}</p>
              </div>

              {/*<div><lottie-player src="https://lottie.host/9277098d-0602-4397-8e16-826aa18dcee2/0TCPmTwgr4.json"*/}
              {/*               background="transparent" speed="1" style={{ width: "70px", marginLeft:'300px', marginTop: '-60px', marginBottom: '-20px' }} loop="autoplay"/>   </div>*/}

                <div className="form-group__element">
                <label htmlFor="last name" className="form-group__label">
                  <div style={{fontSize: "18px", fontWeight: "bold", color: "#0BCFAE",textShadow: '#0BCFAE 0 0 10px' }}>{selectedCountry2 ? selectedCountry2.name : 'Bitcoin'} </div>
                </label>
                <input
                    type="text"
                    value={lastname}
                    name="last name"
                    onChange={handleChange('lastname')}
                    onBlur={validateLastName}
                    className="form-group__input"
                />
                <FilterDemo
                    selectedCountry={selectedCountry2} // Pass the selected value as a prop
                    setSelectedCountry={this.handleSelectedCountryChange2} // Pass the callback function to update the selected value
                /><BasicDemo>
                </BasicDemo>
                <p className="error">{isErrorLastName && errorMessageLastName}</p>
              </div>
            </div>

            <div className="app">

            </div>


            <div style={{ textAlign: 'center'}}>
              {/*<div className="inner-form">*/}
              {/*  <div className='comm-1'>*/}
              {/*  <label style={{display: 'inline', textAlign: 'left', float: 'left',marginLeft: '10px',marginTop: '3px',textShadow: '#0BCFAE 0 0 10px'}}>Commission</label><label style={{display: 'inline', textAlign: 'right', float: 'right',marginRight: '10px',marginTop: '3px',textShadow: '#0BCFAE 0 0 10px'}}>0.1234 %</label>*/}
              {/*  </div>*/}
              {/*  <div className='comm-2'>*/}
              {/*    <label style={{display: 'inline', textAlign: 'left', float: 'left', marginTop: '10px', marginLeft: '10px',textShadow: '#0BCFAE 0 0 10px'}}>Exchange Rate</label><label style={{display: 'inline', textAlign: 'right', float: 'right', marginTop: '10px',marginRight: '10px',textShadow: '#0BCFAE 0 0 10px'}}>1 USDT = 0.0004 BTC </label>*/}
              {/*  </div>*/}
              {/*</div>*/}

              <StatisticsCharts/>
              <CheckExample/>
              <button className="buttons__button buttons__button--next" onClick={this.continue}>
                <label className='ss'> Next </label>
              </button>
            </div>
          </form>
        </div>
    );
  }
}

export default PersonalDetails;
