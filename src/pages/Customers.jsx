import PageHeader from "../components/PageHeader";
import customerData from "../data/customers.json";

export default function Customers() {
    return (
        <div>
            <PageHeader 
                title="Customer Directory" 
                breadcrumb={["Dashboard", "Customers"]}
            >
                <button 
                    onClick={() => alert("Menampilkan Form Add Customer")}
                    className="bg-hijau text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700"
                >
                    + Add Customer
                </button>
            </PageHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {customerData.map((cust) => (
                    <div key={cust.customerId} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                {cust.customerName.charAt(0)}
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-md font-bold ${
                                cust.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-600' :
                                cust.loyalty === 'Silver' ? 'bg-gray-100 text-gray-600' : 'bg-orange-100 text-orange-600'
                            }`}>
                                {cust.loyalty}
                            </span>
                        </div>
                        <h3 className="font-bold text-lg">{cust.customerName}</h3>
                        <p className="text-gray-500 text-sm">{cust.email}</p>
                        <div className="mt-4 pt-4 border-t text-sm text-gray-400">
                            ID: {cust.customerId} • {cust.phone}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}