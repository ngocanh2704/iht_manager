import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  actFetchPaymentsRequeset,
  actOpenModalEdit,
  actSearchAllRequest,
  actGetPaymentRequeset
} from "../../actions";
import { Space, Button } from "antd";
import TableCustom from "../../components/Table";
import SearchApi from '../../components/Search/SearchApi'
import ModalPayment from "../../components/Modal/ModalPayment";
import ModalEditPayment from "../../components/Modal/ModalEditPayment";

const Payment = () => {
  const payments = useSelector((state) => state.payments);
  const dispatch = useDispatch();
  const fetchPayments = () => dispatch(actFetchPaymentsRequeset());
  const getPayment = (LENDER_NO) => dispatch(actGetPaymentRequeset(LENDER_NO));
  const openModalEdit = () => dispatch(actOpenModalEdit());

  const [state, setState] = useState(true)


  useEffect(() => {
    fetchPayments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "Advance No",
      dataIndex: "LENDER_NO",
      key: "LENDER_NO",
    },
    {
      title: "Type",
      dataIndex: "LENDER_NAME",
      key: "LENDER_NAME",
    },
    {
      title: "JOB NO",
      dataIndex: "JOB_NO",
      key: "JOB_NO",
    },
    {
      title: "",
      key: "LENDER_NO",
      render: (text, record) => (
        <>
          <Space size="middle">
            <Button
              type="primary"
              onClick={(e) => {
                setState(false)
                getPayment(record.LENDER_NO);
                openModalEdit()
              }}
            >
              Xem
            </Button>
          </Space>
        </>
      ),
    },
  ];


  const onSearch = (values) => {
    if (values.keyword) {
      dispatch(actSearchAllRequest(values.type, values.keyword));
    } else {
      fetchPayments();
    }
  };

  
  const changeEdit = () => {
    setState(true)
  }

  let pay = 'payment'

  console.log(state)

  return (
    <Fragment>
      {SearchApi(onSearch, state,  pay)}
      {TableCustom(payments, columns)}
      {state === false ? <ModalEditPayment changeEdit={changeEdit}/> : <ModalPayment />}
    </Fragment>
  );
};

export default Payment;
