import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import url from "../url";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "lucide-react";
import api from '../url';
function CreateDomain() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams<any>();
    const [domainError, setDomainError] = useState<any>('')
    const [domainLoader, setDomainLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const numericId = Number(id);
    const token = localStorage.getItem('token');
    const abortControllerRef = useRef<AbortController | null>(null);
    const theme2 = {
        sliderData:
        {
            title: 'You Can\nHire Freelancer\nHere',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page',
        },
        experinceData: {
            title: 'Best Experinced Freelancer Here',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as',
        },
        categoryData: [
            {
                text: 'Design & Arts',
            },
            {
                text: 'Web Development',
            },
            {
                text: 'SEO Markting',
            },
            {
                text: 'Video Edting',
            },
            {
                text: 'Logo Design',
            },
            {
                text: 'Game Design',

            },
        ],
        aboutData: {
            title: 'About Spering Company',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you',
        },
        freelanceData: {
            title: 'Work Freelaner Has Done',
            works: [
                {
                    count: '$250 Million',
                    tittle: 'Paid to Freelancers',
                },
                {
                    count: '2 Million',
                    tittle: 'Paid Invoices',
                },
                {
                    count: '700,000',
                    tittle: 'Worldwide Freelancer',
                },
                {
                    count: '98%',
                    tittle: 'Customer Satisfaction Rate',
                },
            ]
        },
        feedbackData: {
            title: "Testimonial",
            feedback: [
                {
                    name: "John Hissona",
                    description: "passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s"
                },
                {
                    name: "John Hissona",
                    description: "passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s"
                },
                {
                    name: "John Hissona",
                    description: "passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s"
                },
            ]
        },
        footer: {
            offices: 'Readable content of a page when looking at its layoutreadable content of a page when looking at its layout',
            information: 'Readable content of a page when looking at its layoutreadable content of a page when looking at its layout',
            email: 'demo@gmail.com',
            phone: 'Call +01 1234567890',
            copyright: 'Chennai',
        }
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm();
    const domainName = watch('subdomain')
    const handleDomainCheck = async (val: any) => {
        setDomainLoader(true);
        setDomainError('');
        // Cancel previous request if still ongoing
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        // Create a new abort controller
        const controller = new AbortController();
        abortControllerRef.current = controller;
        try {
            if (val.length) {
                const updateApi: any = await axios.get(`${url.checkDomain}/?sub_domain=${val}`, {
                    signal: controller.signal,
                  })
                console.log(updateApi)
                if (updateApi?.data?.msg === 'Domain Name Alredy Exist') {
                    setDomainError('Business Name Alredy Exist')
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
        setErrorMessage('');
        const payload = {
            ...data,
            themeName: `Theme${id}`
        }
        try {
            const res = await axios.post(url.createSubdomain, payload);
            if (res) {
                const payload = {
                    ...theme2,
                    sub_domain: data?.subdomain,
                    theme_id: 'Theme2'
                }
                if (numericId === 2) {
                    const updateTheme = await axios.post(api.websiteCreate, payload,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    )
                    if (updateTheme) {
                        navigate(`/profile/chooseTheme/theme${id}/${res?.data?.result?.name}`)
                    }
                }
            }
        } catch (error: any) {
            console.log(error)
            const message = error?.response?.data?.message || "Something went wrong. Please try again.";
            setErrorMessage(message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-blue-500 via-gray-500 to-slate-500">
                <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Domain</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-lg font-bold text-gray-700 mb-1">business Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter the business Name"
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
                                {!domainError && domainName && !domainLoader && (
                                    <p className="text-gray-400 mt-2 flex flex-wrap">{domainName}.ftdigitalsolutions.org</p>
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
                        {errorMessage && (
                            <div className="text-red-600 bg-red-100 p-2 rounded mt-3">
                                {errorMessage}
                            </div>
                        )}
                        <button
                            type="submit"
                            disabled={domainError || loading || !isValid || domainLoader}
                            className={`w-full py-2 rounded transition font-bold text-base ${domainError || loading || !isValid || domainLoader
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-700 hover:bg-green-600 text-white"
                                }`}
                        >
                            {loading ? "Creating..." : "Create Domain"}
                        </button>
                    </form>
                </div>
            </div>


        </>
    )
}

export default CreateDomain;