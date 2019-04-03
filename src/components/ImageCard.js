import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans: 0};
    }

    componentDidMount(){
        //before image has had a chance to download itself

        //js event listener
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans});
    }

    render(){
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img 
                    alt={description} 
                    src={urls.regular} 
                    ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;