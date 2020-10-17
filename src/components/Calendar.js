import React, {useState} from 'react';
import {Multiselect} from 'multiselect-react-dropdown';
import { Scheduler } from 'devextreme-react/scheduler';
import {releaseDate} from './datos';



export default function Calendar({data}) {
        
    const views = ['month'];
    const currentDate = new Date(1977, 5, 5);
    const opcT = data; /*Guarde mi array en la variable opcT y al usar este multiselec en options le pase la variable y en displayValue le pase el parametro a mostrar*/

    
    return (
        <>
            <h1>Release dates Star Wars movies</h1>
            
            <Multiselect options={opcT} displayValue="title"/>
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
