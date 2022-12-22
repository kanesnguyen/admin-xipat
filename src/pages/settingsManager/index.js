import React, { useState } from 'react'
import { Input, Form, Button, message } from 'antd';
import { SketchPicker } from 'react-color'

function SettingsManager() {
  const [form] = Form.useForm();
  const [background, setBackground] = useState("#fff");

  const onFinish = (values) => {
    console.log(values)
    message.success('Update success!');
  };

  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };
  return (
    <div className="grid grid-cols-2 gap-6">
      <Form
        layout={'horizontal'}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item label="Title" name="title">
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Background" name="background">
          <Input placeholder="Background" />
        </Form.Item>
        <SketchPicker 
          color={background}
          onChangeComplete={() => handleChangeComplete} />
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item></Form>
    </div>
  )
}

export default SettingsManager