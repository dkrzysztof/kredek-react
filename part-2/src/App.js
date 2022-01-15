import React from 'react';
import { Layout, Menu } from 'antd';
import { PieChartOutlined, PlusOutlined, ShopOutlined, TeamOutlined } from '@ant-design/icons';
import GetAllPizzasView from './GetAllPizzasView';
import CreatePizzaView from './CreatePizzaView';
import LogoSrc from './assets/logo.png';
import './App.css';

const { Content, Sider, Header, Footer } = Layout;

function App() {
	const handleChangeToGetAll = () => {};
	const handleChangeToCreate = () => {};

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider>
				<div className='logo'>
					<img src={LogoSrc} alt='logo kredek' />
					<h1 className='font-display m-1'>Pizzastic</h1>
				</div>
				<Menu theme='light' mode='inline' defaultSelectedKeys={[1]}>
					<Menu.Item key='1' icon={<PieChartOutlined />} onClick={handleChangeToGetAll}>
						Pizza Menu
					</Menu.Item>
					<Menu.Item key='2' icon={<PlusOutlined />} onClick={handleChangeToCreate}>
						Dodaj Pizze!
					</Menu.Item>
					<Menu.Item disabled key='-1' icon={<ShopOutlined />}>
						Placówki (Wkrótce!)
					</Menu.Item>
					<Menu.Item disabled key='-2' icon={<TeamOutlined />}>
						Pracownicy (Wkrótce!)
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Header>
					<h2>Pizzastic!</h2>
				</Header>
				<Content>
					<GetAllPizzasView />
				</Content>
				<Footer>@2021 - Kredek Repos</Footer>
			</Layout>
		</Layout>
	);
}

export default App;
