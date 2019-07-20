import React from 'react';
import { Input } from 'antd';

import './styles.css';

export default class Campo extends React.Component {
    render() {
        return (
            <div className='inputGroup' style={this.props.style}>
                <Input
                    size="large"
                    // value={this.props.value}
                    // type={this.props.type}
                    // onChange={this.props.onChange}
                    style={this.props.styleInput}
                    maxLength={this.props.maxLength}
                    className={this.props.className}
                    placeholder={this.props.placeholder}
                    {...this.props}
                />
            </div>
        );
    }
}