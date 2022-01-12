import React from "react";
import { CardGroup, Col, Row, ToastContainer } from "react-bootstrap";
import ItemCard from "../ItemCard";
import PosToast from "../PosToast";

const Items = ({
  itemData,
  billData,
  setBillData,
  billList,
  setBillList,
  showToaster,
  setShowToaster,
  selectedItem,
  setSelectedItem,
}) => {
  return (

    <Row>
      {Object.keys(itemData).map((key) => (
        <ItemCard
          key={key}
          name={key}
          price={itemData[key].price}
          imageLocation={itemData[key].imageLocation}
          billData={billData}
          setBillData={setBillData}
          billList={billList}
          setBillList={setBillList}
          showToaster={showToaster}
          setShowToaster={setShowToaster}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ))}
    </Row>
  );
};

export default Items;
