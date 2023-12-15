import { Button, Heading } from '@chakra-ui/react';
import React from 'react';

const EditModal = ({
  price,
  setPrice,
  quantity,
  setQuantity,
  selectedReason,
  onSelectReason,
  onCancel,
  onSave,
  productId
}) => {
  return (
    <div style={modalStyle}>
      <Heading fontSize={"20px"} textAlign={"center"}> Edit Page</Heading>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <br />
      <label>
        Reason:
        <select value={selectedReason} onChange={(e) => onSelectReason(e.target.value)}>
          <option value="">Select a reason</option>
          <option value="reason1">Missing Product </option>
          <option value="reason2">Other</option>
        </select>
      </label>
      <br />
      <Button bg='blue' mr={5} p={5} textColor={"white"} borderRadius={10} onClick={()=>onSave(productId)}>Save</Button>
      <Button bg='red' mr={5} p={5} textColor={"white"}  borderRadius={10}  onClick={onCancel}>Cancel</Button>
    </div>
  );
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width:"30%",
  height:"200px",
  textAlign:"left",
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  background: '#fff',
  boxShadow: "0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)",

};

export default EditModal;
