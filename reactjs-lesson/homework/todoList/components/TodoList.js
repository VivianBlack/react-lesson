var TodoList = React.createClass({
  getInitialState: function () {
    return {
      list: [
        {
          id: 1,
          name: 'pekachu',
          score: 99,
          done: false,
        },
        {
          id: 2,
          name: 'pekachu1',
          score: 100,
          done: false,
        },
        {
          id: 3,
          name: 'pekachu2',
          score: 0,
          done: true,
        },
      ].sort(function (a, b) {
        return b.score - a.score;
      }),
    };
  },
  addItem: function (name, score) {
    var item = {
      id: this.state.list.length + 1,
      name: name,
      score: score,
      done: false,
    };
    this.setState({
      list: this.state.list.concat(item).sort(function (a, b) {
        return b.score - a.score;
      }),
    });
  },
  toggleItem: function (id) {
    var list = this.state.list.map(function (item) {
      return (item.id !== id) ? item : {
        id: item.id,
        name: item.name,
        score: item.score,
        done: !item.done,
      };
    });

    this.setState({
      list: list,
    });
  },
  upBtn: function () {
    var list = this.state.list.sort(function (a, b) {
      return b.score - a.score;
    });
    this.setState({
      list: list,
    });
  },
  downBtn: function () {
    var list = this.state.list.sort(function (a, b) {
      return a.score - b.score;
    });
    this.setState({
      list: list,
    });
  },
  render: function () {
    var toggleItem = this.toggleItem;
    return (
            <div className="todo-list">

                <button onClick={this.upBtn}>UP</button>
                <button onClick={this.downBtn}>DOWN</button>

                <TodoFrom addItem={this.addItem} />
                <table>
                  <tbody>
                    {
            this.state.list.map(function (item) {
                return (
                    <TodoItem
                    done={item.done}
                    id={item.id}
                    key={item.id}
                    toggleItem={toggleItem}
                    >
                            <td>{item.name}</td>
                            <td>{item.score}</td>
                          </TodoItem>
                );
            })
            }
                  </tbody>
                </table>
              </div>
    );
  },
});
