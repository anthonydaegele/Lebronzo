import * as React from 'react';

interface EventItemProps{
    name: string;
    owner: string;
    location: string;
    date: string;
    tags: Array<string>;
    onRSVP: (name: string) => void;
    onIgnore: (name: string) => void;
}

export class EventItem extends React.Component<EventItemProps>{
    onRSVP = () => {
        this.props.onRSVP(this.props.name);
    }

    onIgnore = () => {
        this.props.onIgnore(this.props.name);
    }


}