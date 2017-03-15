import React, {Component} from "react";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
const style = {
    margin: '1em'
}

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            finished: false,
            open: false
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    componentDidMount() {
        let self = this;
        window.raptor.api.on("ready ", function (event, frame) {
            frame.onload = function () {
                window.raptor.api.launch(frame.name);
            }
        });

        window.raptor.api.on("inboundReady ", function (event, data) {
            console.log("inbound commands ready ");
        });

        window.raptor.api.on("clipEnd ", function (event, data) {
            window.$("#submit-form ").removeClass("hidden ");
            self.setState({
                finished: true
            });
        });
    }


    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onTouchTap={this.handleClose}
            />,
        ];
        return (
            <div className="Video">
                <div style={style}>
                    <iframe name="hello-rapt"
                            src="https://cdn1.raptmedia.com/projects/aG07sW2I/embed?autoplay=false&controls=overlay"
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
                <Dialog
                    title="Request Info"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <TextField className="form-input" hintText="Name"/>
                    <TextField className="form-input" hintText="Email"/>
                </Dialog>
                <FlatButton
                    label="Request Info"
                    primary={true}
                    onTouchTap={this.handleOpen}
                />
            </div>
        );
    }
}

export default Video;
