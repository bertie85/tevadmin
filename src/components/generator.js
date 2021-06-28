import { Component } from "react";

class Generator extends Component {
  constructor(props) {
    super(props);

    this.state = { code: " -- Itt fog megjelenni a kód --" };
  }

  handleChange = (e) => {
    const names = e.target.value.split(/\r?\n/);

    let namesStr = '[';

    for (let name of names) {
      namesStr += `"${name.trim().toLowerCase()}",`;
    }

    namesStr += ']';

    const code = `
      const names = ${namesStr};

      $("[id$=igenybevevo]").each((index, value) => {
        for(let name of names){
            if($(value).text().toLowerCase() === name){
                const a = $(value).parent().next().children().children('a');
                a.click();
                console.log(name);
            }
          }
      });
    `;

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
