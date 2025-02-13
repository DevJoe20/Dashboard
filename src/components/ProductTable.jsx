import React, { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import Modal from "./Modal";

const ProductTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add", "edit", "delete"
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleIconClick = (type, productId) => {
    setSelectedProduct(productId);
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting product ID:", selectedProduct);
    setIsModalOpen(false);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td className="icon-container">
              <Pencil className="icon edit-icon" onClick={() => handleIconClick("edit", 1)} />
              <Trash className="icon delete-icon" onClick={() => handleIconClick("delete", 1)} />
            </td>
          </tr>
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={modalType === "delete" ? handleConfirmDelete : undefined}
        type={modalType}
      />
    </>
  );
};

export default ProductTable;
