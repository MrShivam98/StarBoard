import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { MyContext } from "../useContext";
import { toast } from "react-toastify";

export default function Pipeline() {
    let { index: idx } = useParams();
    const navigate = useNavigate();

    const initialFormData = {
        propertyName: "",
        tenent: "",
        rent: "",
        lease: "",
        size: "",
        financing: "",
        address: "",
    };
    const [formData, setFormData] = useState(initialFormData)
    
    const { sharedData, setSharedData } = useContext(MyContext)

    useEffect(() => {
        if (!Number.isNaN(idx) && sharedData[idx]) {
            setFormData(sharedData[idx]);
        } else {
            setFormData(initialFormData);
        }
    }, [idx, sharedData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Number.isNaN(idx) && sharedData[idx]) {
            setSharedData((prev) => {
                const updated = [...prev];
                updated[idx] = formData;
                return updated;
            });
        } else {
            setSharedData((prev) => [...prev, formData]);
        }
        navigate("/", { replace: true });
        toast.success("Added Successfully!")
    };

    return (
        <div className="p-4 md:p-5 space-y-4">
            <form className="max-w-3xl mx-auto my-10" onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label htmlFor="propertyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property Name</label>
                        <input type="text" name="propertyName" id="propertyName" value={formData.propertyName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type property name" required />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="tenent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tenent Name</label>
                        <input type="text" name="tenent" id="tenent" value={formData.tenent} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type tenent name" required />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="lease" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lease Term</label>
                        <input type="text" name="lease" id="lease" value={formData.lease} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type lease term" required />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="financing" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Financing</label>
                        <input type="text" name="financing" id="financing" value={formData.financing} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type assumable financing" required />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="rent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rent PSF</label>
                        <input type="text" name="rent" id="rent" value={formData.rent} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Rent PSF" required />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property Size</label>
                        <input type="text" name="size" id="size" value={formData.size} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type property size" required />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <textarea id="address" name="address" rows="2" value={formData.address} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write address here" required ></textarea>
                    </div>
                </div>
                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                    Submit
                </button>
            </form>
        </div>
    )
}