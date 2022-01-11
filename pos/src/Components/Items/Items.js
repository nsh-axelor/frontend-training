import React from "react";
import { CardGroup } from "react-bootstrap";
import ItemCard from "../ItemCard";

const Items = ({ itemData,billData,setBillData, billList, setBillList, showToaster, setShowToaster, selectedItem, setSelectedItem}) => {
  return (
    <CardGroup>
      {itemData.map(({ name, price, imageLocation }) => (
        <ItemCard name={name} price={price} imageLocation={imageLocation}  billData = {billData} setBillData={setBillData} billList={billList} setBillList={setBillList} showToaster={showToaster} setShowToaster={setShowToaster} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
      ))}
    </CardGroup>
  );
};

export default Items;
