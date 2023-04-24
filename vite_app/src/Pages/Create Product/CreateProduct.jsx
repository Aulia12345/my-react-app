import React, { useEffect, useState } from 'react';
import { Alert, Space, Button, Select, Radio, Input, InputNumber, Layout, Form, Table, Popconfirm } from 'antd';
import logo from '../../img/bs-logo.png';
import './createProduct.css';
import { staticProductData, generateProductKey } from './constant';
import { v4 as uuid } from 'uuid';
import { useDeleteProducts, useGetProducts, usePostProducts, useUpdateProducts } from './hook/useProduct';

const { useForm } = Form;
const { TextArea } = Input;

const CreateProduct = () => {

  // // welcome alert
  useEffect(() => {
    alert('Welcome toa our page!');
  }, []);

  // footer
  const { Footer } = Layout;

  // console Math random
  const handleClick = () => {
    console.log(Math.floor(Math.random() * 10) + 1);
  };

  const article = {
    title: {
      id: 'Buat Akun',
      en: 'Create Account',
    },
    description: {
      id: 'Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.',
      en: 'Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.',
    },
  };

  // DATA

  const [isLoadingProducts, products, getProducts] = useGetProducts();
  const [isLoadingCreateProducts, createProducts] = usePostProducts();
  const [isLoadingUpdateProducts, updateProducts] = useUpdateProducts();
  const [isLoadingDeleteProducts, deleteProducts] = useDeleteProducts();

  const [form] = useForm();
  const [productData, setProductData] = useState(staticProductData);
  const [rowData, setRowData] = useState(products);
  const [isEdit, setIsEdit] = useState(false);

  // Activate Custom Hook
  useEffect(() => {
    getProducts()
  }, []);

  // add data to table
  const onAdd = (values) => {
    createProducts(values, () => {
      getProducts()
      form.resetFields();
    })
  };

  // delete
  const onDelete = (row_id) => {
    deleteProducts(row_id, () => {
      getProducts();
    })
  };

  // edit
  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
  };

  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    form.resetFields();
  };

  // edit data in the table
  const onEdit = (values) => {
    const id = rowData.id;
    updateProducts(id, values, () => {
      getProducts();
      handleCancel();
    })
  }

  // tabel
  const columns = [
    {
      title: 'No.',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'product-name',
    },
    {
      title: 'Product Category',
      dataIndex: 'productCategory',
      key: 'product-category',
    },
    {
      title: 'Image of Product',
      dataIndex: 'imageProduct',
      key: 'product-image',
    },
    {
      title: 'Product Freshness',
      dataIndex: 'productFreshness',
      key: 'product-freshness',
    },
    {
      title: 'Product Price',
      dataIndex: 'productPrice',
      key: 'product-price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <a onClick={() => handleEdit(record)}>Edit</a>
          <Popconfirm
            title="sure to delete>"
            arrow={false}
            onConfirm={() => onDelete(record.id)}
          >
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <div>

      {/* header */}

      <div className="container-fluid">
        <h6 className="header">Simple header</h6>
        <nav className="nav-list">
          <a className="link" href="#home">
            Home
          </a>
          <a className="link" href="#features">
            Features
          </a>
          <a className="link" href="#pricing">
            Pricing
          </a>
          <a className="link" href="#faqs">
            FAQs
          </a>
          <a className="link" href="#about">
            About
          </a>
        </nav>
      </div>

      <section className="container">
        <div className="section1">
          <div className="gambar">
            <img className="vector" src={logo} alt="logo" />
          </div>
          <div className="header2">
            <h1 className="text1" id="judul">
              {article.title.en}
            </h1>
            <p className="paragraph1">{article.description.en}</p>
          </div>
        </div>
      </section>
      <section className="container-fluid2">
        <div className="row">
          <div className="col">
            <h2 className="detail-product">Detail Product</h2>
            <Space direction={'vertical'}>
              <Form
                form={form}
                layout={'vertical'}
                onFinish={isEdit ? onEdit : onAdd}
              // fields={[
              //   {
              //     name: ['productName'],
              //     value: rowData?.productName,
              //   },
              //   {
              //     name: ['productCategory'],
              //     value: rowData?.productCategory,
              //   },
              //   {
              //     name: ['imageProduct'],
              //     value: rowData?.imageProduct,
              //   },
              //   {
              //     name: ['productFreshness'],
              //     value: rowData?.productFreshness,
              //   },
              //   {
              //     name: ['productPrice'],
              //     value: rowData?.productPrice,
              //   },
              // ]}
              >
                <Form.Item
                  label={'Product Name'}
                  name={'productName'}
                  rules={[
                    {
                      required: true,
                      message: "please type your Product Name."
                    },
                    {
                      pattern: new RegExp(/^[A-Za-z ]*$/),
                      message: 'Product Name tidak boleh memuat simbol'
                    },
                    {
                      max: 10,
                      message: 'Product Name tidak boleh melebihi 10 karakter'
                    }
                  ]}
                >
                  <Input
                    autoComplete="off" />
                </Form.Item>
                <Form.Item
                  label={'Product Category'}
                  name={'productCategory'}
                  rules={[
                    {
                      required: true,
                      message: 'please select valid Product Category'
                    },
                  ]}
                >
                  <Select
                    placeholder={'Choose...'}
                    options={[
                      { value: 'Electronic', label: 'Electronic' },
                      { value: 'Books', label: 'Books' },
                      { value: 'Shoes', label: 'Shoes' },
                    ]}
                    rules={[
                      {
                        pattern: new RegExp(/^[a-zA-Z0-9\s]*$/),
                        message: 'please select the valid category'
                      }
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  label={'Image of Product'}
                  name={'imageProduct'}
                  rules={[
                    {
                      required: true,
                      message: 'upload your image'
                    },
                  ]}
                >
                  <Input type={"file"}
                    required
                    accept={"image/*"}
                    multiple />
                </Form.Item>
                <Form.Item
                  label={'Product Freshness'}
                  name={'productFreshness'}
                  rules={[
                    {
                      required: true,
                      message: 'please select the Product Freshness'
                    },
                  ]}
                >
                  <Radio.Group
                    rules={[
                      {
                        required: true,
                        message: 'pelase select the freshness'
                      },
                      {
                        pattern: new RegExp(/^[A-Za-z0-9\s]+$/),
                        message: 'please select the valid freshness'
                      }
                    ]}
                  >
                    <Space direction={'vertical'}>
                      <Radio value={'Brand New'}>Brand New</Radio>
                      <Radio value={'Second Hand'}>Second Hand</Radio>
                      <Radio value={'Refurbished'}>Refurbished</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  label={'Additional Description'}
                  name={'additionalDescription'}
                  rules={[
                    {
                      required: true,
                      message: 'please type the Additional Description'
                    }
                  ]}
                >
                  <TextArea
                    rows={"5"} />
                </Form.Item>
                <Form.Item
                  label={'Product Price'}
                  name={'productPrice'}
                  rules={[
                    {
                      required: true,
                      message: 'please type the Product Price'
                    },
                    {
                      pattern: new RegExp(/^\d+(\d{1,3}(?:[,.]\d{1,3}))*$/),
                      message: 'Product Price tidak valid'
                    }
                  ]}
                >
                  <InputNumber type={'number'} placeholder={"$20.000"} />
                </Form.Item>
                <Form.Item>
                  <Space direction={'vertical'}>
                    {isEdit ? (
                      <Space>
                        <Button type='primary' htmlType='submit' loading={isLoadingUpdateProducts}>
                          Save
                        </Button>
                        <Button type='primary' onClick={handleCancel} danger>
                          Cancel
                        </Button>
                      </Space>
                    ) : (
                      <Button type='primary' htmlType='submit' loading={isLoadingCreateProducts}>
                        Submit
                      </Button>
                    )}
                    <Button style={{ width: 100 }} type="primary" onClick={handleClick}>
                      Click Me
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </Space>
          </div>
        </div>
      </section>
      <hr />
      <Table rowKey="id" columns={columns} dataSource={products} loading={isLoadingProducts || isLoadingDeleteProducts} />

      {/* footer */}
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: 'white',
          boxShadow: '0px 1px 6px 1px rgba(0, 0, 0, 0.2)',
        }}
      >
        Create Product ©2023 Created by Lia
      </Footer>
    </div >
  );
};

export default CreateProduct;
