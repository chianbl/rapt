import React, { Component } from 'react';
import Form from './Form'
const style = {
  margin: '1em'
}

class Video extends Component {
      constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            finished: false
        };
    }

    componentDidMount(){
      let self = this;
      window.raptor.api.on("ready ", function(event, frame){
        frame.onload = function(){
          window.raptor.api.launch(frame.name);
        }
      });

      window.raptor.api.on("inboundReady ", function(event, data){
        console.log("inbound commands ready ");
      });      
      
      window.raptor.api.on("clipEnd ", function(event, data){
        window.$("#submit-form ").removeClass("hidden ");
        self.setState({
            finished: true
        });
      });
    }


  render() {
    return (
      <div className="Video">
        <div style={style}>
            <iframe name="hello-rapt" 
            src="http://cdn1.raptmedia.com/projects/aG07sW2I/embed?autoplay=false&controls=overlay" 
            width="720"
            height="405" 
            scrolling="no" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0" 
            allowFullScreen="true">
            Iframes are required to view this content
          </iframe>
        </div>
        {this.state.finished ? <Form /> : ""}
      </div>
    );
  }
}

export default Video;
