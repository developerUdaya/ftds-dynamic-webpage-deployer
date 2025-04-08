import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import url from "../url";
import { useNavigate, useParams } from "react-router-dom";

function CreateDomain() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();


    const onSubmit = async (data: any) => {
        setLoading(true);
        const payload = {
            ...data,
            themeName: "Theme1"
        }
        try {
            const res = await axios.post(url.createSubdomain, payload);
            if (res) {
                navigate(`/profile/chooseTheme/dashboard/${res?.data?.result?.domain_name}`)
            }
        } catch (error) {
            console.error("API Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Subdomain</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Domain Type</label>
                            <select
                                {...register("domain_type", { required: "Domain type is required" })}
                                className="w-full border border-gray-300 bg-white p-2 rounded"
                            >
                                <option value="">Select</option>
                                <option value="UserOwnDomain">UserOwnDomain</option>
                                <option value="CompanyDomain">CompanyDomain</option>
                            </select>
                            {typeof errors.domain_type?.message === "string" && (
                                <p className="text-red-500 text-sm">{errors.domain_type.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subdomain</label>
                            <input
                                type="text"
                                placeholder="e.g. test.aimwindow.com"
                                {...register("subdomain", { required: "Subdomain is required" })}
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                            {typeof errors.subdomain?.message === "string" && (
                                <p className="text-red-500 text-sm">{errors.subdomain.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Theme Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Theme1"
                                value={`Theme${id}`}
                                className="w-full border border-gray-300 p-2 rounded"
                                readOnly
                                disabled
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={!isValid || loading}
                            className={`w-full py-2 rounded transition ${!isValid || loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-700 hover:bg-green-600 text-white"
                                }`}
                        >
                            {loading ? "Creating..." : "Create Subdomain"}
                        </button>
                        <div className="text-center cursor-pointer"
                            onClick={() => navigate('/profile/chooseTheme/dashboard')}
                        >
                            <a className="text-blue-400 font-medium"> I Already have Domain Skip !</a>
                        </div>

                    </form>
                </div>
            </div>


        </>
    )
}

export default CreateDomain;