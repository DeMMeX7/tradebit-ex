import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import '../extra.css'
 function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'BEP20', code: 'BEP' },
        { name: 'BTC', code: 'BTC' },
        { name: 'SOL', code: 'SOL' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown style={{
                height: '3.12rem',
                marginLeft: '580px',
                marginTop: '-50.5px',
                marginBottom: '40px',
                backgroundColor: '#172a46',
                borderWidth: '2px',
                fontSize: '14px',
                fontWeight: 'bold',
                borderColor: '#0BCFAE',
                color: 'white',
                borderRadius: '10px',


            }} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                      placeholder="BEP20" className="w-full-2 md:w-8rem" />
        </div>
    )
}
export default BasicDemo;
