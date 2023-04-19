import {
  Input,
  Space,
  Typography,
  Form,
  Button,
  Table,
  Popconfirm,
} from 'antd';
import React, { useState, useEffect } from 'react';
import { INITIAL_TABLE_DATA } from './Constant';
import Gap from '../../component/gap/Gap';
import {
  useDeleteBiodata,
  useGetBiodata,
  usePostBiodata,
  useUpdateBiodata,
} from './hooks/useBiodata';

const FormCRUD = () => {
  const { Title } = Typography;
  const { TextArea } = Input;

  const [isLoadingBiodata, Biodata, getBiodata] = useGetBiodata();
  const [isLoadingCreateBiodata, createBiodata] = usePostBiodata();
  const [isLoadingDeleteBiodata, deleteBiodata] = useDeleteBiodata();
  const [isLoadingUpdateBiodata, updateBiodata] = useUpdateBiodata();

  const [formBio] = Form.useForm();

  const [data, setData] = useState();

  const [rowData, setRowData] = useState(Biodata);
  const [isEdit, setIsEdit] = useState(false);

  // Activate Custom Hook
  useEffect(() => {
    getBiodata();
  }, []);

  const TABLE_COLUMNS = [
    {
      title: 'No. ',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'NIM',
      dataIndex: 'nim',
      key: 'nim',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
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
        ) : null,
    },
  ];

  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
  };

  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    formBio.resetFields();
  };

  // add data to table
  const onAdd = (values) => {
    createBiodata(values, () => {
      getBiodata();
      formBio.resetFields();
    });
  };

  // delete data from table
  const onDelete = (row_id) => {
    deleteBiodata(row_id, () => {
      getBiodata();
    });
  };

  // edit data in the table
  const onEdit = (values) => {
    const id = rowData.id;
    updateBiodata(id, values, () => {
      getBiodata();
      handleCancel();
    });
  };
  console.log({ data });
  return (
    <div>
      <Title>Form Biodata Mahasiswa</Title>

      <Gap height={40} />
      <Form
        name="form-bio"
        form={formBio}
        layout="horizontal"
        onFinish={isEdit ? onEdit : onAdd}
        style={{
          width: '600px',
        }}
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        fields={[
          {
            name: ['firstName'],
            value: rowData?.firstName,
          },
          {
            name: ['lastName'],
            value: rowData?.LastName,
          },
          {
            name: ['nim'],
            value: rowData?.nim,
          },
          {
            name: ['address'],
            value: rowData?.address,
          },
        ]}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: 'please input your first name',
            },
          ]}
        >
          <input placeholder="input your first name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: 'please input your last name',
            },
          ]}
        >
          <input placeholder="input your last name" />
        </Form.Item>
        <Form.Item
          name="nim"
          label="NIM"
          rules={[
            {
              required: true,
              message: 'please input your last nim',
            },
          ]}
        >
          <input placeholder="input your last nim" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: 'please input your adress',
            },
          ]}
        >
          <TextArea placeholder="input your address"></TextArea>
        </Form.Item>

        {isEdit ? (
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoadingUpdateBiodata}
            >
              Save
            </Button>
            <Button type="primary" onClick={handleCancel} danger>
              Cancel
            </Button>
          </Space>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoadingCreateBiodata}
          >
            Submit
          </Button>
        )}
      </Form>

      <Gap height={20} />
      <Table
        rowKey="id"
        columns={TABLE_COLUMNS}
        dataSource={Biodata}
        loading={isLoadingBiodata || isLoadingDeleteBiodata}
      />
    </div>
  );
};

export default FormCRUD;
