import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/router";

const ConnectForm = () => {
  //   const router = useRouter();
  //   const onFinish = async (values) => {
  //     const value = "abc";
  //     const values = value;

  //     const isSuccessful = values.value;

  //     if (isSuccessful) {
  //       router.push("/");
  //     } else {
  //       console.log("Bad Request");
  //     }
  //   };
  return (
    <>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Onion Address"
          name="oa"
          rules={[
            {
              required: true,
              message: "Please input the IP!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ConnectForm;
