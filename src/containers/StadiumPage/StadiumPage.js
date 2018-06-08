import React from "react";
import Map from "../../components/map";
import Stadium from "../../components/stadium-description-card";
import { withRouter } from "react-router";

class StadiumPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stadiums: []
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
    )
      .then(res => res.json())
      .then(({ stadiums }) => {
        this.setState({ stadiums });
      });
  }

  render() {
    return (
      <div>
        <Map stadiums={this.state.stadiums} />
        <Stadium id={0} lat={0} lng={0} name={"Hello"} image={"hell"} />
      </div>
    );
  }
}

export default withRouter(StadiumPage);
