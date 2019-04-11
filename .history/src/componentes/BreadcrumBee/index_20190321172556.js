import React from 'react';

import { Breadcrumb, Icon } from 'antd';

const BreadcrumbBee = () => {

    const mapa = this.props.mapa;

    const listItems = mapa.map((m) =>
        <Breadcrumb.Item key={m.key} href="" >
            <Icon type={m.icon} />
            <span>{m.rota}</span>
        </Breadcrumb.Item>
    );

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {listItems}
        </Breadcrumb>
    );
};

export default BreadcrumbBee;