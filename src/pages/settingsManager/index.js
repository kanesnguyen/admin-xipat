import React, { useState } from 'react'
import { Input, Form, Button, message, DatePicker } from 'antd';
import moment from 'moment';
import { RgbaColorPicker } from "react-colorful";
import { cleanInputColor } from "../../extensions/cleanInputColor"
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
function SettingsManager({ settingDefaults }) {

  const [form] = Form.useForm();
  const [color, setColor] = useState({ r: 22, g: 119, b: 255, a: 1 });
  const [disabelButton, setDisableButton] = useState(true)
  const [openSketchPicker, setOpenSketchPicker] = useState(false);

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };

  const onFinish = (values) => {
    console.log({ ...values, background: cleanInputColor(color), activeDate: values.activeDate.map(e => moment(e.$d).format("DD/MM/YYYY")) })
    message.success('Update success!');
  };

  const handleChangeInput = (value) => {
    setColor(value);
  }
  const handleFormChange = () => {
    // eslint-disable-next-line
    if (form.getFieldValue("title") && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.getFieldValue("email"))) && form.getFieldValue("activeDate")?.length > 0) {
      if (form.getFieldValue("title") !== settingDefaults.title
        || form.getFieldValue("email") !== settingDefaults.email
        || form.getFieldValue("activeDate") !== settingDefaults.activeDate) {
        setDisableButton(false);
      }
    }
    else {
      setDisableButton(true);
    }
  }

  const concernedElement = document.querySelector(".box-color");
  document.addEventListener("mousedown", (event) => {
    if (!concernedElement.contains(event.target)) {
      setOpenSketchPicker(false);
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Form
        {...layout}
        form={form}
        onFinish={onFinish}
        onFieldsChange={handleFormChange}
        validateMessages={validateMessages}
      >
        <Form.Item label="Title" name="title">
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[
          {
            type: 'email',
          },
        ]}>
          <Input placeholder="Email" />
        </Form.Item>
        <div className="box-color">
        <Form.Item label="Background">
          <Input className='mb-0' placeholder="Background" defaultValue={cleanInputColor(color)} value={cleanInputColor(color)} onChange={e => handleChangeInput(e.target.value)} />
          <Button type="primary" onClick={() => setOpenSketchPicker({ ...openSketchPicker, open: !openSketchPicker.open })} style={{ backgroundColor: cleanInputColor(color) }} className={`absolute right-0`}></Button>
        </Form.Item>
        {
          openSketchPicker.open &&
          <div className="flex justify-end mb-4 box-color-select" id="cobra">
            <RgbaColorPicker color={color} onChange={setColor} />
          </div>
        }
        </div>

        <Form.Item label="Active Date" name="activeDate">

          <DatePicker.RangePicker
            className="w-full"
            dateRender={(current) => {
              const style = {};
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
          <Button className="mt-6 ml-5" type="primary" htmlType="submit" disabled={disabelButton}>Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SettingsManager