import React from "react";
import { TextInput, Switch } from "@mantine/core";
import Feed from "./feed";
import {useState} from 'react';

function Home(): JSX.Element {
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState(false);
    return(
        <div>
            <p hidden={checked}>Please enter here your care recipient id</p>
            <div style={{ display:"flex", flexDirection:"row", backgroundColor: "darkgrey", alignItems:"center" }} >
                <TextInput value={value} onChange={(event) => setValue(event.currentTarget.value)} placeholder="care_recipient_id" style={{flex:12}} disabled={checked} />
                <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} style={{flex:0.3}} size="lg" onLabel="edit" offLabel="search" ></Switch>
            </div>
            <div>
                {checked?
                <Feed care_recipient_id={value} />
                :
                <div>Please submit your id</div>
            }
            </div>
        </div>


    )
}

export default Home;