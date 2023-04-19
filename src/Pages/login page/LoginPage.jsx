import { Button, Card, Form, Input, Modal, Radio, Row, message, } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROFILE, GET_PROFILE } from "./query/profile-query";

const LoginPage = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [section, setSection] = useState('Login');

    const { data: profileData, loading: isProfileLoading, error: isProfileError } = useQuery(GET_PROFILE);
    console.log(profileData?.profile)

    const [register, { loading: isRegisterLoading }] = useMutation(ADD_PROFILE, {
        refetchQueries: [GET_PROFILE]
    })

    const onRegister = (values) => {
        const profile = [...profileData?.profile]

        // is user existed?
        const isExisted = profile?.some((item) => item.username === values.username);

        if (!isExisted) {
            register({
                variables: {
                    object: {
                        ...values
                    }
                },
                onError: (err) => {
                    message.open({
                        type: "error",
                        content: `${err.message}`
                    })
                },
                onCompleted: () => {
                    Modal.success({
                        title: "Register Success",
                        content: "Please login using your account",
                        centered: true,
                        onOk() {
                            form.resetFields(),
                                setSection("Login")
                        }
                    })
                }
            })
        } else {
            Modal.warning({
                title: "Regiser Failed",
                content: "your username has been already used",
                centered: true
            })
        }
    }

    const onLogin = (values) => {
        const profile = [...profileData.profile]

        // mengecek apakah user exist
        const isUser = profile.find(
            (item) => item.username === values.username);

        // mengecek apakah user terverifikasi (mengecek data user yg ada)
        const isVerified = JSON.stringify(isUser) === JSON.stringify(values)

        if (isVerified) {
            localStorage.setItem("token", true);
            navigate("/home");
        } else {
            Modal.warning({
                title: "Login Failed!",
                content: "Username/password is not correct",
                centered: true,
                onOk() {
                    setSection("Login");
                },
            });
        };
    };

    const onChange = ({ target: { value } }) => {
        setSection(value);
        form.resetFields();
    };

    return (
        <div className="container-center">
            <Card title="WELCOME!" className="welcome" bodyStyle={{ width: "480px" }}>
                <Row justify="center" className="group">
                    <Radio.Group
                        defaulValue="login"
                        buttonStyle="solid"
                        onChange={onChange}
                        value={section}>
                        <Radio.Button value="Login">Login Here</Radio.Button>
                        <Radio.Button value="Register">Register Here</Radio.Button>
                    </Radio.Group>
                </Row>

                <Form
                    name="Login-form"
                    form={form}
                    onFinish={section === "Login" ? onLogin : onRegister}>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "please input your username!"
                            }
                        ]}
                    ><Input

                            placeholder="username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "please input your password!"
                            }
                        ]}
                    ><Input.Password

                            placeholder="password" />
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isRegisterLoading}
                        block
                    >
                        {section === 'Login' ? 'Login' : 'Register'}
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;