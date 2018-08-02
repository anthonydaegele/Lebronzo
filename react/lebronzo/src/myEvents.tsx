import * as React from 'react';

interface myEventProps{
    name: string;
    owner: string;
    location: string;
    date: string;
    tags: Array<string>;
    image: string;
    description: string;
}

interface myEventsProps {
    myConfirmedEvents: Array<myEventProps>
}


export class MyEvents extends React.Component<myEventsProps>{
    render() {
        return (
            <div>{this.props.myConfirmedEvents.map(event => {
                return (
                    <div>{event.name}</div>
                )
            })}
            </div>
        )
    }
}