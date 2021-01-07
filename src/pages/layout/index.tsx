import React, { FC, useState } from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import Loader from '../../components/loader';
import useGlobal from '../../store';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import styles from './layout.module.scss';
import { Link } from 'react-router-dom';

const { Header, Sider, Content, Footer } = AntLayout;

const Layout:FC = ({children}) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const [{isLoading}] = useGlobal();
	return (
		<>
			{isLoading && <Loader/>}
			<AntLayout className={styles.layout}>
        <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
          <div className={styles.layout__logo}> &nbsp;D</div>
          <Menu theme='dark' mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<QuestionCircleOutlined />}>
              <Link to='/interview'>Question List</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
          </Menu>
        </Sider>
        <AntLayout className="site-layout">
          <Header className={styles.header} style={{ padding: 0 }}>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1" onClick = {() => setCollapsed(!collapsed)}>
                <span className='trigger'>
                  {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </span>
              </Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content className={styles.layout__content}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>2000 copy</Footer>
        </AntLayout>
      </AntLayout>
		</>
	)
}

export default Layout;