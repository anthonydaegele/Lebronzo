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
      image: "https://cdn-s3.si.com/s3fs-public/2018/07/30/lebron-james-dunk.jpg",
      description: "Come watch Bronny beat down on some scrubs"
    }

    var event2: EventItemData = {
      name: "Liars Dice",
      owner: "Nick Palutsis",
      location: "Black Friars",
      date: "Every night @ 10pm",
      tags: ["Dice", "Bars", "Nightlife"],
      image: "https://www.thoughtco.com/thmb/hcMi1eJVLdH6l0UHSka5IvEb83Q=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-93453966-59684e1d3df78c57f49b0c91.jpg",
      description: "The beautiful game. The sweet science. The sport of kings."
    }

    var event3: EventItemData = {
      name: "Top Golf",
      owner: "Travis Gayle",
      location: "8787 Park Ln, Dallas, TX 75231",
      date: "July 28, 2018",
      tags: ["Golf", "Bars", "Food"],
      image: "http://wpmediars.golfwrx.com/wp-content/uploads/2018/06/TopGolfVegas.jpg",
      description: "Come for the food, friends, and to laugh at how bad at golf we all are"
    }

    var event4: EventItemData = {
      name: "Smash Burger Run",
      owner: "Travis Gayle",
      location: "1201 16th St, Space 106, Denver, CO 80202",
      date: "Tonight at 1 AM",
      tags: ["Burgers", "Food", "Smash", "Munchies"],
      image: "http://www.franchisetimes.com/images/cache/cache_8/cache_5/cache_e/Smashburger-21b89e58.jpeg?ver=1533306356&aspectratio=1.5267175572519",
      description: "Who doesn't love late night food?"
    }

    var event5: EventItemData = {
      name: "Visiting South Bend Zoo Bison Pen",
      owner: "Anthony Daegele",
      location: "500 S Greenlawn Ave, South Bend, IN 46615",
      date: "August 4, 2018",
      tags: ["Zoo", "Animals", "Bison"],
      image: "https://i.pinimg.com/736x/43/47/52/434752ae4cbbc60bf6cd33dccee1041e--american-bison-native-american.jpg",
      description: "The oldest zoo in Indiana, Potawatomi zoo features over 500 animals, with fun activities for everyone!"
    }

    var event6: EventItemData = {
      name: "Bubble Soccer",
      owner: "Nick Ward",
      location: "McKinney, Texas",
      date: "August 11, 2018",
      tags: ["Soccer", "Sports", "Activities"],
      image: "https://cdn.inflatable-zone.com/media/product/c13/free-shipping-1-5m-bubble-soccer-austin-bubble-bumper-suit-messi-bubble-football-colorful-dot-e27.jpg",
      description: "One of the few times you'll get the chance to hit your co-workers in a socially accepted way"
    }

    var event7: EventItemData = {
      name: "The Roast of Ray",
      owner: "Morgan Radic",
      location: "Hotel Zaza",
      date: "August 4, 2018",
      tags: ["Comedy"],
      image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/16807745_2085227865037354_6288810888283698698_n.jpg?_nc_cat=0&oh=494bdfe9c064b4a5ba3658b0ee8298a0&oe=5BFFA4B6",
      description: "I think the title says it all"
    }

    var myEvent1: MyEventData = {
      name: "Developer School Presentations",
      owner: "Igor Geyfman",
      location: "Dallas, TX",
      date: "August 3rd, 2018",
      tags: ["Developer School", "Dallas", "dolphin"],
      image: "http://images.performgroup.com/di/library/omnisport/d1/f8/lebronjames-cropped_i9ob0vabfhuc1jjospcm2a9f8.jpg?t=1593952276",
      description: "Come watch as our new fins present on the projects they've worked on throughout the week in Developer School."
    }

    var myEvent2: MyEventData = {
      name: "Bachelorette finale watch!",
      owner: "Nick Palutsis",
      location: "Chicago, IL",
      date: "August 6th, 2018",
      tags: ["The Bachelorette", "fake", "show", "abc"],
      image: "http://images.performgroup.com/di/library/omnisport/d1/f8/lebronjames-cropped_i9ob0vabfhuc1jjospcm2a9f8.jpg?t=1593952276",
      description: "I can't believe it's finally here! Come watch how this riveting season of The Bachelorette will end!"
    }

    var myEvent3: MyEventData = {
      name: "Lebron Jr Birthday!",
      owner: "Mrs. James",
      location: "Akron, OH",
      date: "October 6th, 2018",
      tags: ["birthday", "celebration", "fun", "cake", "pizza"],
      image: "http://images.performgroup.com/di/library/omnisport/d1/f8/lebronjames-cropped_i9ob0vabfhuc1jjospcm2a9f8.jpg?t=1593952276",
      description: "Come celebrate with us as we herald in a new year for Lebron Jr! There will be cake and pizza!"
    }

    this.state = {
      events: [event3, event2, event1, event4, event5, event7, event6],
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
        <div id="create-event-modal" className="modal fade bd-example-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog  modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Create Event</h2>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                {/* insert container here */}
                <div className="row">
                  <div className="col-md-4">
                    <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" />
                    <button type="button" className="btn btn-primary col-md-12" data-dismiss="modal">Upload Photo</button>
                  </div>
                  <div className="col-md-8">


                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Date</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Time</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Tags</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                    </div>

                  </div>
                </div>
                {/* bottom of container */}

              </div>
              <div className="row">
                <div className="col-md-2"></div>
                <button type="button" className="btn btn-success col-md-3" data-dismiss="modal">Create</button>
                <div className="col-md-2"></div>
                <button type="button" className="btn btn-secondary col-md-3" data-dismiss="modal">Cancel</button>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top" style={{ "backgroundColor": "blueviolet" }}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#" style={{ "color": "yellow" }}>LA-Bronzo</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto mt-2 mt-lg-0">
              <a className="nav-item nav-link" href="#">Feed</a>
              <a className="nav-item nav-link" href="#" data-toggle="modal" data-target="#create-event-modal">Create Event</a>
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
                        {/* <div className="card-body">
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
                        </div> */}
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

            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h2>My Events</h2>
                      

                      <div>
                        <MyEvents myConfirmedEvents={this.state.myEvents} />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-9 scroll">

              <div>{eventData.map(event =>
                <EventItem key={event.name} name={event.name} owner={event.owner} location={event.location} date={event.date} tags={event.tags} image={event.image} description={event.description} onRSVP={this.onEventRSVP} onIgnore={this.onEventIgnore} onSelectEvent={this.onEventSelectEvent} />
              )}
              </div>


            </div>
            {/* <div className="col-md-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h2>My Events</h2>
                      

                      <div>
                        <MyEvents myConfirmedEvents={this.state.myEvents} />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* </div> */}
          </div>
          {/* end of event */}
        </div>
      </div>
    );
  }
}

export default EventFeed;
