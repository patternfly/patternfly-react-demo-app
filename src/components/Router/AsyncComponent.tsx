import * as React from 'react';

export default function asyncComponent(importComponent: Function) {
  interface State {
    component: React.ComponentClass<any> | null;
  }
  class AsyncComponent extends React.Component<any, State> {
    constructor(props: any) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      if (component) {
        this.setState({
          component: component
        });
      }
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
