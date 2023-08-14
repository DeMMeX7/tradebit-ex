import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

function FilterDemo({ selectedCountry, setSelectedCountry }) {
    const countries = [
        { name: 'Bitcoin', code: 'BTC' },
        { name: 'Ethereum', code: 'ETH' },
        { name: 'Solana', code: 'SOL' }
    ];

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img
                        alt={option.name}
                        src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                        className={`mr-2 flag flag-${option.code.toLowerCase()}`}
                        style={{ width: '16px' }}
                    />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={option.name}
                    src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                    className={`mr-2 flag flag-${option.code.toLowerCase()}`}
                    style={{ width: '16px' }}
                />
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card-flex">
            <Dropdown
                style={{
                    height: '3.13rem',
                    marginLeft: '0',
                    backgroundColor: '#172a46',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    borderColor: '#0BCFAE',
                    borderWidth: "2px",
                    color: '#0BCFAE'

                }}
                root={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    borderColor: '#0BCFAE'
                }}

                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.value)} // Call the callback function to update the selected value
                options={countries}
                optionLabel="name"
                placeholder="ETH"
                filter
                valueTemplate={selectedCountryTemplate}
                itemTemplate={countryOptionTemplate}
                className="w-full md:w-7rem"
            />
        </div>
    );
}

export default FilterDemo;
