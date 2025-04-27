import { useContext } from "react";
import { useNavigate } from "react-router";
import { MyContext } from "../useContext";
import * as XLSX from "xlsx";

export default function Home() {
    const { sharedData } = useContext(MyContext)

    const navigate = useNavigate();

    const handleEdit = (index) => {
        navigate(`/pipeline/${index}`);
    };

    const handleDownloadOM = () => {
        const link = document.createElement('a');
        link.href = '/OM.pdf';
        link.download = 'OM.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet(sharedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "dealsData");
        const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

        const blob = new Blob([wbout], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "dealsData.xlsx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Deal Pipeline</h2>
                <div className="flex space-x-2">
                    <button type="button" onClick={handleDownload} className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Excel Download
                    </button>
                    <button type="button" onClick={handleDownloadOM} className="px-3 py-2 text-xs font-medium text-center text-white bg-green-600 rounded-full hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900">
                        OM Download
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {sharedData && sharedData.map((item, index) => (
                    <div key={index} onClick={() => { handleEdit(index) }} className="cursor-pointer flex items-center bg-white dark:bg-gray-800 dark:hover:bg-gray-600 shadow-sm rounded-xl p-4 hover:shadow-lg">
                        <div className="flex-shrink-0 w-80 h-50 bg-gray-200 rounded-lg overflow-hidden mr-4">
                            <iframe
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(item.address)}&ie=UTF8&output=embed`}
                                className="w-full h-full"
                                loading="lazy"
                                width="100%"
                                height="100%"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Map"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="flex-1">
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{item.propertyName}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{item.address}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{item.size}</div>
                        </div>

                        <div className="hidden md:flex space-x-8 text-right">
                            <div>
                                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Rent</div>
                                <div className="text-gray-900 dark:text-white">{item.rent}</div>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Lease</div>
                                <div className="text-gray-900 dark:text-white">{item.lease}</div>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Financing</div>
                                <div className="text-gray-900 dark:text-white">{item.financing}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
