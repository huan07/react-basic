/**
 * Created by yanghuan on 18/8/6.
 */

import React, { PureComponent }from 'react';
import { render } from 'react-dom';

class Chosen extends PureComponent {
    componentDidMount(){
        this.$el = $(this.el);
        this.$el.chosen();

        this.handleChange = this.handleChange.bind(this);
        this.$el.on('change', this.handleChange);
    }

    componentDidUpdate(prevProps){
        if (prevProps.children !== this.props.children) {
            this.$el.trigger("chosen:updated");
        }
    }

    componentWillUnmount(){
        this.$el.off('change', this.handleChange);
        this.$el.chosen('destroy');
    }

    handleChange(e){
        this.props.onChange(e.target.value);
    }

    render(){
        return (
            <div>
                <select className="Chosen-select" ref={el => this.el = el}>
                    {this.props.children}
                </select>
            </div>
        );
    }
}

function Example(){
    return (
        <Chosen onChange={value => console.log(value)}>
            <option>vanilla</option>
            <option>chocolate</option>
            <option>strawberry</option>
        </Chosen>
    );
}

render(
    <Example />,
    document.getElementById('app')
);