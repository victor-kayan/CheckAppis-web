import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
    Layout, Breadcrumb, Table
} from 'antd';

class ContentBee extends Component {

    render() {

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Cash Assets',
            className: 'column-money',
            dataIndex: 'money',
        }, {
            title: 'Address',
            dataIndex: 'address',
        }];

        const data = [{
            key: '1',
            name: 'John Brown',
            money: '￥300,000.00',
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            money: '￥1,256,000.00',
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            money: '￥120,000.00',
            address: 'Sidney No. 1 Lake Park',
        }];

        return (
            <Layout.Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    {this.props.table}
                </div>
            </Layout.Content>
        );
    }
}

export default ContentBee;