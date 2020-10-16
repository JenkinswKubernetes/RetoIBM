import React, {useState} from 'react';

import {Grid, Card} from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import {Multiselect} from 'multiselect-react-dropdown';
import { Scheduler } from 'devextreme-react/scheduler';
import {releaseDate} from './datos';

export default function Calendar({data}) {
    /* Intente hacer un array multidimencional pero me líe, al final pongo los datos manuales, algo que es obvio que se debía evitar*/
    const info = [
        {Film: 'A New Hope', release_date: "1977-05-25"},
        {Film: 'The Empire Strikes Back', release_date: "1980-05-17"},
        {Film: 'Return of the Jedi', release_date: "1983-05-25"},
        {Film: 'The Phantom Menace', release_date: "1999-05-19"},
        {Film: 'Attack of the Clones', release_date: "2002-05-16"},
        {Film: 'Revenge of the Sith', release_date: "2005-05-19"}
    ]
    const [opc] = useState(info);
    
    const views = ['month'];
    const currentDate = new Date(1977, 5, 5);

    
    return (
        <>
            <h1>Release dates Star Wars movies</h1>
            <Multiselect options={opc} displayValue="Film"/>
            <Scheduler
                dataSource={releaseDate}
                views={views}
                defaultCurrentView="month"
                defaultCurrentDate={currentDate}
                height={600}
            />
        </>
    )
}
