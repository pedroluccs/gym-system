import styled from "styled-components";
import { Content } from "../Employee/style";

export const Container = styled.div`
  display: flex;
  max-width: 100%;
`;

export const StockContent = styled(Content)`
color: #fff;
width: 120vh;
`

export const SectionTitle = styled.h1`
  margin-bottom: 20px;
`;

export const SearchBar = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  border: 1px solid #ddd;
  font-size: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: #f5f5f5;
  padding: 10px;
  text-align: left;
`;

export const TableRow = styled.tr`
    background-color: #fff;
    color: #000;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const LowStockAlert = styled.span`
  color: red;
  font-weight: bold;
  margin-left: 8px;
`;

export const ActionButtons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const StockActionsContainer = styled.div`
  margin-top: 30px;
`;

export const AddButton = styled.button`
  background-color: #82ca9d;
  color: #000;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6dbd81;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #888;
  &:hover {
    color: #333;
  }
`;

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ddd;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ModalActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  button {
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }
  button:first-child {
    background-color: #28a745;
    color: white;
    &:hover {
      background-color: #218838;
    }
  }
  button:last-child {
    background-color: #dc3545;
    color: white;
    &:hover {
      background-color: #c82333;
    }
  }
`;

export const LinkButton = styled.button`
  background-color: #82ca9d;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #6dbd81;
  }
`;

export const InputText = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
`;

export const InputFieldWrapper = styled.div`
  margin-bottom: 20px;
`;