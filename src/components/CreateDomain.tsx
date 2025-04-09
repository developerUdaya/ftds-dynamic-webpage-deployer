import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import url from "../url";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "lucide-react";

function CreateDomain() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const [domainError, setDomainError] = useState<any>('')
    const [domainLoader, setDomainLoader] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();

    const handleDomainCheck = async (val: any) => {
        setDomainLoader(true);
        try {
            if (val.length) {
                const updateApi: any = await axios.get(`${url.checkDomain}/?sub_domain=${val}`)
                console.log(updateApi)
                if (updateApi?.data?.msg === 'Domain Name Alredy Exist') {
                    setDomainError('Domain Name Alredy Exist')
                    setDomainLoader(false);
                } else {
                    setDomainError('');
                    setDomainLoader(false);
                }
            } else {
                setDomainError('')
                setDomainLoader(false);
            }
        } catch (error) {
            setDomainError('')
            setDomainLoader(false);
        }
    }

    const onSubmit = async (data: any) => {
        setLoading(true);
        const payload = {
            ...data,
            themeName: "Theme1"
        }
        try {
            const res = await axios.post(url.createSubdomain, payload);
            console.log(res?.data?.result?.domain_name)
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
            <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-blue-500 via-gray-500 to-slate-500">
                <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create SubDomain</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-lg font-bold text-gray-700 mb-1">Sub Domain</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter the subDomain"
                                    {...register("subdomain", {
                                        required: "Subdomain is required",
                                        onChange: (e) => {
                                            handleDomainCheck(e.target.value);
                                        },
                                    })}
                                    className={`border p-2 rounded w-full pr-10 border-gray-300 ${domainError ? "border-red-400 border-2" : ""
                                        }`}
                                />
                                {domainLoader && (
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <Loader className="animate-spin text-blue-500" />
                                    </div>
                                )}
                            </div>

                            {typeof errors.subdomain?.message === "string" && (
                                <p className="text-red-500 text-sm">{errors.subdomain.message}</p>
                            )}
                            {domainError && (
                                <p className="text-red-500 text-base mt-2 font-medium">
                                    {domainError}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block  text-lg font-bold text-gray-700 mb-1">Theme Name</label>
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
                            disabled={domainError || loading || !isValid || domainLoader}
                            className={`w-full py-2 rounded transition font-bold text-base ${domainError || loading || !isValid || domainLoader
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-700 hover:bg-green-600 text-white"
                                }`}
                        >
                            {loading ? "Creating..." : "Create SubDomain"}
                        </button>
                    </form>
                </div>
            </div>


        </>
    )
}

export default CreateDomain;