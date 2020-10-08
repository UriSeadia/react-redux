import React, { Component, createRef, RefObject } from 'react';
import { TPictureDataResult } from '../models/types';

class ImageCard extends Component<{ image: TPictureDataResult }> {

  state = {
    spans: 0
  };

  imageRef: RefObject<HTMLImageElement>

  constructor(props: { image: TPictureDataResult }) {
    super(props);
    this.imageRef = createRef();
  }

  componentDidMount() {
    this.imageRef.current?.addEventListener('load', this.setSpans);
  }

  setSpans = (): void => {
    const height: number = this.imageRef.current?.clientHeight || 500;
    const spans: number = Math.ceil(height / 10);
    this.setState({ spans });
  }

  render() {
    const { urls, description } = this.props.image;

    return (
      <div className="image-card" style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img className="image" ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
