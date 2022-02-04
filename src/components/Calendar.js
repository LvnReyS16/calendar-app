import React from 'react';
import {Link} from 'react-router-dom';
const Calendar = ({id,title,status,date}) => {

    return (
        <>
            <Link to={{
                pathname:`/update/${id}`,
                state:{
                    id: id,
                    title: title,
                    status: status,
                    date: date
                }
                }} >
                <div className="calendar-list m-3 rounded-sm shadow-lg h-24 cursor-pointer relative ">
                        <h2 className="h-10 pl-1 pt-2">{title}</h2>
                        <span className="font-bold absolute bottom-2 right-100 pl-2">{status}</span>
                        <span className="absolute bottom-2 right-2">{date}</span>
                </div>
            </Link>
        </>
    );
}

export default Calendar;
