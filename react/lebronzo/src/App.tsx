import * as React from 'react';
import './App.css';
import { EventItem } from './EventItem';
import { MyEvents } from './myEvents';

interface EventItemData {
  name: string;
  owner: string;
  location: string;
  date: string;
  tags: Array<string>;
  image: string;
  description: string;
}

interface EventFeedState {
  events: Array<EventItemData>;
  myEvents: Array<MyEventData>;
  SelectedEvent: EventItemData;
  newEventName: string;
  newEventOwner: string;
  newEventLocation: string;
  newEventDate: string;
  newEventTags: Array<string>;
  newEventImage: string;
  newEventDescription: string;
}

interface MyEventData {
  name: string;
  owner: string;
  location: string;
  date: string;
  tags: Array<string>;
  image: string;
  description: string;
}

// interface myEventsState {
//   names: Array<myEventData>;
// }

// class EventFeed extends React.Component<{}, EventFeedState> {
//   contructor(p: {}){
//     super(p);
//     this.state = { events: [],
//     newEventName: "",
//     newEventOwner: "",
//     newEventLocation: "",
//     newEventDate: "",
//     newEventTags: [] };
//   }
// }


class EventFeed extends React.Component<{}, EventFeedState> {
  constructor(p: {}) {
    super(p);

    var event1: EventItemData = {
      name: "AAU Game",
      owner: "Lebron James",
      location: "Los Angeles, CA",
      date: "August 2nd",
      tags: ["basketball", "LA", "Lebron", "Not Cleveland"],
      image: "http://images.performgroup.com/di/library/omnisport/d1/f8/lebronjames-cropped_i9ob0vabfhuc1jjospcm2a9f8.jpg?t=1593952276",
      description: "Come watch Lebron Jr. beat down on some scrubs"
    }

    var event2: EventItemData = {
      name: "AAU Game 2",
      owner: "Nick Palutsis",
      location: "Hell",
      date: "August 10th",
      tags: ["basketball", "LA", "Lebron", "Not Cleveland", "the devil"],
      image: "https://thenypost.files.wordpress.com/2018/01/lebron-2.jpg?quality=90&strip=all",
      description: "Hey waddup cuh"
    }

    var event3: EventItemData = {
      name: "AAU Game 3",
      owner: "Lebron James",
      location: "Los Angeles, CA",
      date: "August 2nd",
      tags: ["basketball", "LA", "Lebron", "Not Cleveland"],
      image: "http://images.performgroup.com/di/library/omnisport/d1/f8/lebronjames-cropped_i9ob0vabfhuc1jjospcm2a9f8.jpg?t=1593952276",
      description: "Come watch Lebron Jr. beat down on some scrubs"
    }

    var myEvent1: MyEventData = {
      name: "Lebron is coming to LA!",
      owner: "Nick Palutsis",
      location: "Pheonix, AZ",
      date: "September 5th",
      tags: ["Lebron", "AZ", "fun", "beer"],
      image: "http://images.performgroup.com/di/library/omnisport/d1/f8/lebronjames-cropped_i9ob0vabfhuc1jjospcm2a9f8.jpg?t=1593952276",
      description: "Lebron has finally made the right decision and come to LA! It's about time! Let's celebrate!"
    }

    var myEvent2: MyEventData = {
      name: "Bachelorette finale watch!",
      owner: "Anthony Daegele",
      location: "Chicago, IL",
      date: "December 10th",
      tags: ["The Bachelorette", "fake", "show", "abc"],
      image: "http://images.performgroup.com/di/library/omnisport/d1/f8/lebronjames-cropped_i9ob0vabfhuc1jjospcm2a9f8.jpg?t=1593952276",
      description: "I can't believe it's finally here! Come watch how this riveting season of The Bachelorette will end!"
    }

    var myEvent3: MyEventData = {
      name: "Lebron Jr Birthday!",
      owner: "Mrs. James",
      location: "Akron, OH",
      date: "March 29th",
      tags: ["birthday", "celebration", "fun", "cake", "pizza"],
      image: "http://images.performgroup.com/di/library/omnisport/d1/f8/lebronjames-cropped_i9ob0vabfhuc1jjospcm2a9f8.jpg?t=1593952276",
      description: "Come celebrate with us as we herald in a new year for Lebron Jr! There will be cake and pizza!"
    }

    this.state = {
      events: [event1, event2, event3],
      myEvents: [myEvent1, myEvent2, myEvent3],
      SelectedEvent: event1,
      newEventName: "",
      newEventOwner: "",
      newEventLocation: "",
      newEventDate: "",
      newEventTags: [],
      newEventImage: "",
      newEventDescription: ""
    };


    // class myEvents extends React.Component<{},{}>{
    //   constructor(p: {}){
    //     super(p);
    //   }
    // }
    // class myEvents extends React.Component<{}, {}}> {
    //    constructor(p: {}) {
    //      super(p);
    //    }
    //   }

    //     var myEvent1: myEventData = {
    //       name: "Lebron is coming to LA!"
    //     }

    //     var myEvent2: myEventData = {
    //       name: "Bachelorette finale watch!"
    //     }

    //     var myEvent3: myEventData = {
    //       name: "Lebron Jr Birthday!"
    //     }

    //     this.state = {
    //       names: [myEvent1, myEvent2, myEvent3]
    //     }
    //   }

    // }

  }

  onEventRSVP = (name: string) => {
    var events = this.state.events;
    var myEvents = this.state.myEvents;
    var event_to_move_array = events.filter(event => event.name == name);
    var event_to_move = event_to_move_array[0];
    var newMyEvent: MyEventData = {
      name: event_to_move.name,
      owner: event_to_move.owner,
      location: event_to_move.location,
      date: event_to_move.date,
      tags: event_to_move.tags,
      image: event_to_move.image,
      description: event_to_move.description
    };
    //console.log(newMyEvent)
    myEvents.push(newMyEvent);
    events = events.filter(x => x.name != name);
    this.setState({ events: events, myEvents: myEvents });
  }

  onEventIgnore = (name: string) => {
    var events = this.state.events;
    events = events.filter(x => x.name != name);
    this.setState({ events: events });

  }

  onEventSelectEvent = (name: string) => {
    var events = this.state.events;
    var event_to_load_array = events.filter(event => event.name == name);
    var event_to_load = event_to_load_array[0];
    this.setState({ SelectedEvent: event_to_load });
  }


  public render() {

    var eventData = this.state.events;
    //var myEventData = this.state.myEvents;

    return (


      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top" style={{ "backgroundColor": "blueviolet" }}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#" style={{ "color": "yellow" }}>LA-Bronzo</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto mt-2 mt-lg-0">
              <a className="nav-item nav-link" href="#">Feed</a>
              <a className="nav-item nav-link" href="#">Create Event</a>
            </div>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <button className="btn btn-link">
              <i className="fas fa-cogs fa-lg" style={{ "color": "white" }} />
            </button>
          </div>
        </nav>




        <div className="container">

          {/* top of modal */}
          {/* I deleted `tabindex="-1"` but I'm not sure if that's important */}
          <div id="event-modal" className="modal fade bd-example-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog  modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>{this.state.SelectedEvent.name}</h2>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">

                  {/* insert container here */}

                  <div className="row">
                    <div className="scroll">
                      <div>
                        <img src={this.state.SelectedEvent.image}></img>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <i>{this.state.SelectedEvent.owner}</i>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <i>{this.state.SelectedEvent.date}</i>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <i>{this.state.SelectedEvent.location}</i>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <p>{this.state.SelectedEvent.description}
                            </p>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <ul className="list-inline list-unstyled">
                              {this.state.SelectedEvent.tags.map(tag => 
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
                      <div className="card">
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <h3>Comments</h3>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row justify-content-center">
                            <div className="input-group">
                              <input type="text" id="userComment" className="form-control input-sm chat-input" placeholder="Write your message here..." />
                              <span className="input-group-btn">
                                <a href="#" className="btn btn-primary btn-sm">
                                  <span className="glyphicon glyphicon-comment"></span> Add Comment</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <strong className="pull-left primary-font">James</strong>
                            <small className="pull-right text-muted">
                              <span className="glyphicon glyphicon-time"></span>7 mins ago</small>
                            <br />
                            <p>Wow this looks like such a fun event. I can't wait to see Lebron play in
                                LA, what a waste it was for him to play in Cleveland! I look forward
                                                    to the food and entertainment!</p>
                          </div>
                        </div>

                        <div className="card-body">
                          <div className="row">
                            <strong className="pull-left primary-font">Chris</strong>
                            <small className="pull-right text-muted">
                              <span className="glyphicon glyphicon-time"></span>18 mins ago</small>
                            <br />
                            <p>I am so glad Lebron is in LA now. He simply does not belong in Cleveland!
                                All that talent, but so far away from any kind of championship culture
                                or mentality? SHAME!
                                                </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>

                <div className="row">
                  <div className="col-md-2"></div>
                  <button onClick={() => this.onEventRSVP(this.state.SelectedEvent.name)} type="button" className="btn btn-success col-md-3" data-dismiss="modal">RSVP</button>
                  <div className="col-md-2"></div>
                  <button onClick={() => this.onEventIgnore(this.state.SelectedEvent.name)} type="button" className="btn btn-danger col-md-3" data-dismiss="modal">Ignore</button>
                  <div className="col-md-2"></div>
                </div>

              </div>
            </div>
          </div>
          {/* end of modal */}

          {/* beginning of event */}

          <div className="row">
            <div className="col-md-9 scroll">

              <div>{eventData.map(event =>
                <EventItem key={event.name} name={event.name} owner={event.owner} location={event.location} date={event.date} tags={event.tags} image={event.image} description={event.description} onRSVP={this.onEventRSVP} onIgnore={this.onEventIgnore} onSelectEvent={this.onEventSelectEvent} />
              )}
              </div>

             
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h2>My Events</h2>
                      {/* <div>Heading to LA</div>
                      <div>AAU Tournament Watch</div>
                      <div>Bachelorette Finale Watch</div>
                      <div>Wine Night</div> */}

                      <div>
                        <MyEvents myConfirmedEvents={this.state.myEvents} />

                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* end of event */}
        </div>
      </div>
    );
  }
}

export default EventFeed;
