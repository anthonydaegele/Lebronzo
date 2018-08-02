import * as React from 'react';
import './App.css';
import { EventItem } from './EventItem';

interface EventItemData {
  name: string;
  owner: string;
  location: string;
  date: string;
  tags: Array<string>;
}

interface EventItemState {
  events: Array<EventItemData>;
  newEventName: string;
  newEventOwner: string;
  newEventLocation: string;
  newEventDate: string;
  newEventTags: Array<string>;
}

class EventFeed extends React.Component<{}, EventItemState> {
  contructor(p: {}){
    super(p);
    this.state = { events: [],
    newEventName: "",
    newEventOwner: "",
    newEventLocation: "",
    newEventDate: "",
    newEventTags: [] };
  }
}

class App extends React.Component {
  public render() {
    return (


      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top" style={{ "backgroundColor": "blueviolet"}}>
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
              <i className="fas fa-cogs fa-lg" style={{"color":"white"}}/>
            </button>
          </div>
        </nav>




        <div className="container">
          <div className="row">
            <div className="col-md-9 scroll">
              <div className="row mb-2">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <img src="https://www.forumblueandgold.com/wp-content/uploads/lelaker-1024x650.jpg" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <div className="news-content">
                              <a href="#"><h2>Hey guys I'm a total loser and I am heading to LA to make movies and all of that jazz... It's ok though because Nick still loves me, and I still love him</h2></a>
                              <p className="text-secondary"> Organizer: LeBron James</p>
                              <p><i className="fa fa-calendar" />July 2, 2018 </p>
                              <p><i className="fa fa-map-pin" aria-hidden="true" /> This place is basically hell. Nobody likes it here. We have earthquakes, celebrities, and avocado toast... what could possibly be worse</p>
                              <p className="text-secondary"><i>Basketball, Traveling, Movies, Drake, Henny, Lifting, Strive for Greatness, Season 16</i></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2" />
                        <button type="button" className="btn btn-success col-md-3">RSVP</button>
                        <div className="col-md-2" />
                        <button type="button" className="btn btn-danger col-md-3">Ignore</button>
                        <div className="col-md-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <img src="https://www.forumblueandgold.com/wp-content/uploads/lelaker-1024x650.jpg" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <div className="news-content">
                              <a href="#"><h2>Heading to LA</h2></a>
                              <p className="text-secondary"> Organizer: LeBron James</p>
                              <p><i className="fa fa-calendar" /> July 2, 2018 </p>
                              <p><i className="fa fa-map-pin" aria-hidden="true" /> Los Angeles, CA</p>
                              <p className="text-secondary"><i>Basketball, Traveling, Movies</i></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2" />
                        <button type="button" className="btn btn-success col-md-3">RSVP</button>
                        <div className="col-md-2" />
                        <button type="button" className="btn btn-danger col-md-3">Ignore</button>
                        <div className="col-md-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <img src="https://www.forumblueandgold.com/wp-content/uploads/lelaker-1024x650.jpg" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <div className="news-content">
                              <a href="#"><h2>Heading to LA</h2></a>
                              <p className="text-secondary"> Organizer: LeBron James</p>
                              <p><i className="fa fa-calendar" /> July 2, 2018 </p>
                              <p><i className="fa fa-map-pin" aria-hidden="true" /> Los Angeles, CA</p>
                              <p className="text-secondary"><i>Basketball, Traveling, Movies</i></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2" />
                        <button type="button" className="btn btn-success col-md-3">RSVP</button>
                        <div className="col-md-2" />
                        <button type="button" className="btn btn-danger col-md-3">Ignore</button>
                        <div className="col-md-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h2>My Events</h2>
                      <div>Heading to LA</div>
                      <div>AAU Tournament Watch</div>
                      <div>Bachelorette Finale Watch</div>
                      <div>Wine Night</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
