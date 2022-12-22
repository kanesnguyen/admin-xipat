import React, { useState } from 'react'
import { Input, Form, Button, message, DatePicker } from 'antd';
import { SketchPicker } from 'react-color'
import moment from 'moment';

function SettingsManager({ settingDefaults }) {

  const [form] = Form.useForm();
  const [disabelButton, setDisableButton] = useState(true)
  const [sketchPicker, setSketchPicker] = useState({
    background: "#1677ff",
    open: false,
  });
  const onFinish = (values) => {
    console.log({ ...values, background: sketchPicker.background, activeDate: values.activeDate.map(e => moment(e.$d).format("DD/MM/YYYY")) })
    message.success('Update success!');
  };

  const handleChangeComplete = (color) => {
    setSketchPicker({ ...sketchPicker, background: color.hex });
    console.log(color)
    console.log(sketchPicker.background)
  };
  const handleChangeInput = (value) => {
    setSketchPicker({ ...sketchPicker, background: value.trim() });
  }
  const handleFormChange = () => {
    if (form.getFieldValue("title") !== settingDefaults.title 
    || form.getFieldValue("email") !== settingDefaults.email 
    || sketchPicker.background !== settingDefaults.background 
    || form.getFieldValue("activeDate") !== settingDefaults.activeDate) {
      setDisableButton(false);
    }
    else {
      setDisableButton(true);
    }
  }
  return (
    <div className="grid grid-cols-2 gap-6">
      <Form
        layout={'horizontal'}
        form={form}
        onFinish={onFinish}
        onFieldsChange={handleFormChange}
      >
        <Form.Item label="Title" name="title">
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Background">
          <Input placeholder="Background" defaultValue={sketchPicker.background} value={sketchPicker.background} onChange={e => handleChangeInput(e.target.value)} />
          <Button type="primary" onClick={() => setSketchPicker({ ...sketchPicker, open: !sketchPicker.open })} style={{ backgroundColor: sketchPicker.background }} className={`absolute right-0`}></Button>
        </Form.Item>
        {
          sketchPicker.open &&
          <div>
            <SketchPicker
              width="100%"
              height={sketchPicker.open ? "200px" : '0'}
              color={sketchPicker.background}
              onChangeComplete={handleChangeComplete} />
          </div>
        }

        <Form.Item label="Active Date" name="activeDate">

          <DatePicker.RangePicker
            dateRender={(current) => {
              const style = {};
              if (current.date() === 1) {
                style.border = '1px solid #1890ff';
                style.borderRadius = '50%';
              }
              return (
                <div className="ant-picker-cell-inner" style={style}>
                  {current.date()}
                </div>
              );
            }
            }
            format={("DD/MM/YYYY")}
          />
        </Form.Item>
        <Form.Item>
          <Button className="mt-6" type="primary" htmlType="submit" disabled={disabelButton}>Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SettingsManager