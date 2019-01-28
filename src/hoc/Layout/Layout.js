import React, { Component } from "react";
import Aux from "../Aux/Aux";
import Header from "../../components/navigation/Header/Header";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <main style={{ fontFamily: "Josefin Slab, serif" }}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
