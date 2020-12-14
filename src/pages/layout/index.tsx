import React, { FC, useState } from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import Loader from '../../components/loader';
import useGlobal from '../../store';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import styles from './layout.module.scss';

const { Header, Sider, Content } = AntLayout;

const Layout:FC = ({children}) => {
	const [collapsed, setCollapsed] = useState<boolean>(true);

	const [{isLoading}] = useGlobal();
	return (
		<>
			{isLoading && <Loader/>}
			<AntLayout>
        <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <AntLayout className="site-layout">
          <Header className={styles.header} style={{ padding: 0 }}>
						<span className='trigger' onClick = {() => setCollapsed(!collapsed)}>
							{collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
						</span>
          </Header>
          <Content className={styles.content}>
            {children}
          </Content>
        </AntLayout>
      </AntLayout>
		</>
	)
}

export default Layout;