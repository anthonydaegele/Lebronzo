import * as React from 'react';
// import { throws } from 'assert';

export interface EventItemProps {
    name: string;
    owner: string;
    location: string;
    date: string;
    tags: Array<string>;
    image: string;
    description: string;
    onRSVP: (name: string) => void;
    onIgnore: (name: string) => void;
    onSelectEvent: (name: string) => void;
}

export class EventItem extends React.Component<EventItemProps>{
    onRSVP = () => {
        this.props.onRSVP(this.props.name);
    }

    onIgnore = () => {
        this.props.onIgnore(this.props.name);
    }

    onSelectEvent = () => {
        this.props.onSelectEvent(this.props.name);
    }

    render() {
        return (
            <div className="row mb-2">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={this.props.image} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="news-content">
                                            <a href="#" onClick={this.onSelectEvent} data-toggle="modal" data-target="#event-modal"><h2>{this.props.name}</h2></a>
                                            <p className="text-secondary"> Organizer: {this.props.owner}</p>
                                            <p><i className="fa fa-calendar" /> {this.props.date} </p>
                                            <p><i className="fa fa-map-pin" aria-hidden="true" /> {this.props.location}</p>
                                            <div className="text-secondary">
                                            <ul className="list-inline list-unstyled">
                                                {this.props.tags.map(tag =>
                                                    <li className="list-inline-item text-secondary">
                                                        <i>
                                                            <u>{tag}</u>
                                                        </i>
                                                    </li>  
                                                )}
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2" />
                                <button onClick={this.onRSVP} type="button" className="btn btn-success col-md-3">RSVP</button>
                                <div className="col-md-2" />
                                <button onClick={this.onIgnore} type="button" className="btn btn-danger col-md-3">Ignore</button>
                                <div className="col-md-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}