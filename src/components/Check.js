import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function BasicDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox style={{ marginRight: '20px', marginBottom: '15px'}} onChange={e => setChecked(e.checked)} checked={checked}/>
            <label style={{ marginRight: '-30px' , fontWeight: 'bold', fontSize: '1.27rem',color: 'white',textShadow: '#0BCFAE 0 0 10px', marginTop: '-4px'
                }}>I've read and accept the terms & conditions.</label>

        </div>
    )
}
