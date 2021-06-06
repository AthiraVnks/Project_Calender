import FullCalendar from '@fullcalendar/react';

import React,{Component} from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default class EventCalendar extends Component  {

    render(){
        return(<FullCalendar 
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            
            events={[
                { title: 'Project On Progress', date: '2021-05-31' },
                { title: 'event 2', date: '2019-04-02' }]}

               


            />
            
            
            )
    }
    
 
}
