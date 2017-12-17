var TodoFrom = React.createClass({
  getInitialState: function () {
    this.inputs = {};
    return {};
  },
  onSubmit: function (e) {
    e.preventDefault();

    var name = this.inputs.name.value;
    var score = this.inputs.score.value;
    this.inputs.name.value = '';
    this.inputs.score.value = '';

    this.props.addItem(name, score);
  },
  inputRef: function (input) {
    this.input = input;
    this.inputs[input.name] = input;
  },
  render: function () {
    return (
            <form className="todo-form" onSubmit={this.onSubmit}>
              <input type="text" name="name" placeholder="請輸入名字" ref={this.inputRef}/>
              <input type="number" name="score" placeholder="請輸入分數" ref={this.inputRef}/>
              <input type="submit" value="Post"/>
            </form>
    );
  },
});
