const OrderCard = ({ order, onClick }) => {
  const formatStatus = (status) => {
    switch (status) {
      case "WAITING_FOR_ACCEPT":
        return "Waiting for accept";
      case "ACCEPTED":
        return "Accepted";
      case "WAITING_FOR_PAYMENT":
        return "Waiting for payment";
      case "PROCESSING":
        return "Processing";
      case "CANCELLED":
        return "Cancelled";
      case "COMPLETED":
        return "Completed";
      default:
        return "Waiting for accept";
    }
  };
  return (
    <div className="p-4 flex justify-between gap-4 border items-center">
      <p className="capitalize">{order.service.serviceCenterName}</p>
      <p className="capitalize">{order.type}</p>
      <p className="capitalize">{formatStatus(order.status)}</p>
      <button onClick={onClick} className="btn btn-outline btn-primary btn-sm">
        View Details
      </button>
    </div>
  );
};

export default OrderCard;
