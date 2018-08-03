import * as React from 'react';

interface myEventProps {
    name: string;
    owner: string;
    location: string;
    date: string;
    tags: Array<string>;
    image: string;
    description: string;
    //onMyEventsSelectEvent: (myArray: Array<myEventProps>) => void;
}

interface myEventsProps {
    myConfirmedEvents: Array<myEventProps>
}


export class MyEvents extends React.Component<myEventsProps>{

    // onMyEventsSelectEvent = () => {
    //     this.props.onMyEventsSelectEvent(this.props.myConfirmedEvents)
    // }

    render() {
        return (
            <div>{this.props.myConfirmedEvents.map(event => {
                return (
                    <div>
                        <div style={{"color":"blueviolet"}}>{event.name}</div>
                        <div style={{"color":"grey"}}><u><i>{event.date}</i></u></div>
                        <div style={{"color":"darkgrey"}}><i>{event.location}</i></div>
                        <br/>
                    </div>
                )
            })}
            </div>
        )
    }
}