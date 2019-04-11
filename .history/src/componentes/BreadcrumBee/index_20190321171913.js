import React from 'react';

import { Breadcrumb, Icon } from 'antd';

const BreadcrumbBee = () => {

    const mapa = props.mapa;

    const listItems = mapa.map((m) =>
        <Breadcrumb.Item key={m.toString()++} href="" >
            <Icon type={m.icon} />
            <span>{m.rota}</span>
        </Breadcrumb.Item>
    );

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>



            {this.props.rotas.m}
            <Breadcrumb.Item href="">
                <Icon type="home" />
            </Breadcrumb.Item>
            {/* <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                Application
            </Breadcrumb.Item> */}
        </Breadcrumb>
    );
};

export default BreadcrumbBee;
