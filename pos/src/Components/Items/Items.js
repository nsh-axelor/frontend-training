import React from "react";
import { Row } from "react-bootstrap";
import ItemCard from "../ItemCard";

const Items = ({
  itemData,
  billData,
  setBillData,
  billList,
  setBillList,
  showToaster,
  setShowToaster,
  toastList,
  setToastList

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
          toastList={toastList}
          setToastList={setToastList}
        />
      ))}
    </Row>
  );
};

export default Items;
