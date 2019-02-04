import React from "react";

const withClass2 = (WrappedEle, className) => {
    return (props) => (
             <div className={className}>
              <WrappedEle/>
             </div>
        )
}

export default withClass2;