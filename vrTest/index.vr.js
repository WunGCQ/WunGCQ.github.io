import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Model,
  AmbientLight,
  VrHeadModel,
} from 'react-vr';
import Button from './button.js';

class EarthMoonVR extends React.Component {
  constructor() {
    super();
    this.state = {
      rotation: 130,
      zoom: -70,
      moonTranslate: [10, 10, -100],
    };
    this.lastUpdate = Date.now();
    this.spaceSkymap = [
      '../static_assets/space_right.png',
      '../static_assets/space_left.png',
      '../static_assets/space_up.png',
      '../static_assets/space_down.png',
      '../static_assets/space_back.png',
      '../static_assets/space_front.png'
    ];
    this.styles = StyleSheet.create({
      menu: {
        flex: 1,
        flexDirection: 'column',
        width: 1,
        alignItems: 'stretch',
        transform: [{ translate: [2, 2, -5] }],
      },
    });

    this.rotate = this.rotate.bind(this);
  }

  componentDidMount() {
    this.rotate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  rotate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;
    this.lastUpdate = now;
    const rotation = this.state.rotation + delta / 150;
    this.setState({
      rotation,
      moonTranslate: this.calculateCircle(rotation),
    });
    this.frameHandle = requestAnimationFrame(this.rotate);
  }
  calculateCircle(rotation) {
    const { zoom } = this.state;
    var a = rotation / 180;
    const sin_a = Math.sin(a);
    const cos_a = Math.cos(a);
    var r = 50;
    const center = [-25, 0, zoom];
    const y = VrHeadModel.rotationOfHeadMatrix()[0];
    return [-25 + sin_a * r, center[1] - y * cos_a * r, zoom - 30 * cos_a];
  }
  render() {
    return (
      <View>
        <Pano source={{ uri: this.spaceSkymap }} />

        <AmbientLight intensity={1.6} />

        <View style={this.styles.menu}>
          <Button text='+'
            callback={() => this.setState((prevState) => ({ zoom: prevState.zoom + 10 }))} />
          <Button text='-'
            callback={() => this.setState((prevState) => ({ zoom: prevState.zoom - 10 }))} />
        </View>

        <Model

          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translate: [-25, 0, this.state.zoom] },
              { scale: 0.05 },
              { rotateY: this.state.rotation },
              { rotateX: 20 },
              { rotateZ: -10 }
            ],
          }}
          source={{ obj: asset('earth.obj'), mtl: asset('earth.mtl') }}
          lit={true}
        />

        <Model
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translate: this.state.moonTranslate },
              { scale: 0.1 },
              { rotateY: this.state.rotation / 3 },
            ],
          }}
          source={{ obj: asset('moon.obj'), mtl: asset('moon.mtl') }}
          lit={true}
        />
      </View>
    );
  }
};


AppRegistry.registerComponent('EarthMoonVR', () => EarthMoonVR);
