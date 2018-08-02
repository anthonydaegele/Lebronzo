import * as React from 'react';

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
}

export class EventItem extends React.Component<EventItemProps>{
    onRSVP = () => {
        this.props.onRSVP(this.props.name);
    }

    onIgnore = () => {
        this.props.onIgnore(this.props.name);
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
                                            <a href="#"><h2>{this.props.description}</h2></a>
                                            <p className="text-secondary"> Organizer: {this.props.owner}</p>
                                            <p><i className="fa fa-calendar" />{this.props.date} </p>
                                            <p><i className="fa fa-map-pin" aria-hidden="true" /> {this.props.location}</p>
                                            <p className="text-secondary"><i>{this.props.tags.map(tag => {
                                                return ( <div key={this.props.name}>
                                                        <div>{tag}</div>
                                                        </div>)
                                            })
                                            }
                                            </i></p>
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