import * as React from 'react';

interface myEventsProps {
    names: Array<string>;
}

export class myEvents extends React.Component<myEventsProps>{
    render() {
        return (
            <div>{this.props.names.map(name => {
                return (
                    <div>{name}</div>
                )
            })}
            </div>
        )
    }
}