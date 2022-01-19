import React, { useEffect } from 'react';
import { Form, Input, InputNumber } from 'antd';

const pizzaNameRules = [{ required: true, min: 3, message: 'Nazwa musi zostać podana!' }];
const pizzaDescriptionRules = [
	{ required: true, message: 'Opis musi zostać podany!' },
	{ min: 6, message: 'Opis nie może być krótszy niż 6 liter!' }
];

const PizzaForm = function ({ initialValues, form }) {
	useEffect(() => {
		form.setFieldsValue(initialValues);
	}, [form, initialValues]);

	return (
		<Form form={form} initialValues={initialValues} layout='vertical'>
			<Form.Item name='id' hidden>
				<Input />
			</Form.Item>
			<Form.Item rules={pizzaNameRules} label='Nazwa pizzy' name='name'>
				<Input />
			</Form.Item>
			<Form.Item rules={pizzaDescriptionRules} label='Opis' name='description'>
				<Input />
			</Form.Item>
			<Form.Item label='Cena' name='cost'>
				<InputNumber min={1} precision={2} />
			</Form.Item>
		</Form>
	);
};

export default PizzaForm;
