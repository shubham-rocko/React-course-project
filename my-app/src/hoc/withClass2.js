import React, { Component } from "react";

// const withClass2 = (WrappedEle, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedEle {...props} />
//     </div>
//   );
// };

const withClass2 = (WrappedEle, className) => {
  const WithClass2 = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedEle ref={this.props.forwardedRed} {...this.props} />
        </div>
      );
    }
  };

  return React.forwardRef((props, ref) => {
    return <WithClass2 {...props} forwardedRed={ref}/>
  })
};

export default withClass2;
