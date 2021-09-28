import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props
      {}
    return (
      <div>
        <button onClick={() => onReset()} className="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map((counter) => (
          <div>
            <Counter key={counter.id}
            // value={counter.value}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}>
                {/* <h4>Counter #{counter.id}</h4> */}
            </Counter>
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
