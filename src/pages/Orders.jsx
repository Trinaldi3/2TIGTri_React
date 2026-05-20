import PageHeader from "../components/PageHeader";
import orderData from "../data/orders.json"; // Asumsi file JSON disimpan di folder data

export default function Orders() {
    return (
        <div>
            <PageHeader 
                title="Order List" 
                breadcrumb={["Dashboard", "Order List"]}
            >
                <button 
                    onClick={() => alert("Menampilkan Form Add Order")}
                    className="bg-hijau text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700"
                >
                    + Add Orders
                </button>
            </PageHeader>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4">Order ID</th>
                            <th className="p-4">Customer</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData.map((order) => (
                            <tr key={order.orderId} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-medium text-blue-600">{order.orderId}</td>
                                <td className="p-4">{order.customerName}</td>
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-xs ${
                                        order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-4">Rp {order.totalPrice.toLocaleString()}</td>
                                <td className="p-4 text-gray-500">{order.orderDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}