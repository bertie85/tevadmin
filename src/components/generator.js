import { Component } from "react";

class Generator extends Component {
  constructor(props) {
    super(props);

    this.state = { code: "asdfdas" };

  }

  handleChange = (e) => {
    const names = e.target.value.split(/\r?\n/);
    const code = `[${names}].forEach((name) => {
      $(".ui-widget-content.ui-datatable-even"). - here use the "name"
    }
    )`;

    this.setState({ code })
  }

  render() {
    return (
      <div className="row">
        <div className="col left">
          <textarea rows="" name="nevek" onChange={this.handleChange} width="400"></textarea>
        </div>
        <div className="col right">
          <div className="code">
            {this.state.code}
          </div>
        </div>
      </div>
    )
  }
}

export default Generator;
