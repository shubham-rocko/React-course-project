import React, { Component } from "react";

// const withClass2 = (WrappedEle, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedEle {...props} />
//     </div>
//   );
// };

const withClass2 = (WrappedEle, className) => {
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedEle {...this.props} />
        </div>
      );
    }
  };
};

export default withClass2;
