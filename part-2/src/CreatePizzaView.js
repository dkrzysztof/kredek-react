import React from 'react';
import { Form, Button, message } from 'antd';
import { addPizza } from './api';
import PizzaForm from './PizzaForm';

const initialValues = {
	cost: 20
};

const CreatePizzaView = () => {
	const [form] = Form.useForm();
	const handleCreatePizzaFormFinish = () => {
		form.validateFields().then(({ id, ...values }) => {
			addPizza(values).then(() => {
				message.success('Pomyślnie dodano pizze ' + values.name);
			});
		});
	};

	return (
		<>
			<h1 className='text-center m-5 font-display'>Kreator nowej pizzy !</h1>
			<div style={{ margin: 'auto', maxWidth: '400px' }}>
				<PizzaForm form={form} initialValues={initialValues} />
			</div>
			<div className='text-center'>
				<Button size='large' type='primary' onClick={handleCreatePizzaFormFinish}>
					Utwórz pizze!
				</Button>
			</div>
		</>
	);
};

export default CreatePizzaView;
