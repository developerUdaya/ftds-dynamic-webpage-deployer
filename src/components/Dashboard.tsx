import axios from "axios";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function Dashboard() {
    const token = localStorage.getItem('token');
    const navigate=useNavigate();
    const { register, control, handleSubmit, setValue } = useForm({
        defaultValues: {
            logo: '',
            sub_domain: '',
            mobile: '',
            email: '',
            topLinks: [{ name: "", href: "" }],
            sliderData: [
                {
                    image: null,
                    title: "",
                    description: "",
                    button: '',
                    button2: '',
                },
            ],
            contactInfo: [
                {
                    title: "",
                },
            ],
            scheduleData: [
                {
                    category: "",
                    title: "",
                    description: '',
                    linkText: ''
                },
            ],
            featuresData: [
                {
                    icon: "",
                    title: "",
                    description: ""
                }

            ],
            funFactsData: [
                {
                    icon: "",
                    count: 0,
                    text: ""
                }

            ],
            whyChooseData: {
                title: "",
                description: "",
                image: null,
                whoWeAre: {
                    title: "",
                    paragraphs: [{ value: "" }],
                    listItems1: [{ value: "" }],
                    listItems2: [{ value: "" }],
                },
                videoLink: '#'
            },
            callActionData: {
                title: "",
                description: "",
                buttons: [
                    {
                        text: "Contact Now",
                        link: "#"
                    },

                    {
                        text: "Learn More",
                        link: "#", icon: "fa fa-long-arrow-right"
                    },
                ]
            },
            portfolio: {
                portfolioTitle: {
                    title: '',
                    description: ''
                },
                portfolioData: [
                    {
                        image: ''
                    }
                ]
            },
            services: {
                servicesTitle: {
                    title: '',
                    description: ''
                },
                serviceData: [
                    {
                        icon: '',
                        title: '',
                        description: ''
                    }
                ]
            },
            pricingTitle: {
                title: '',
                description: '',
            },
            pricingData: [
                {
                    title: "",
                    price: "",
                    duration: "/ Per Month",
                    features: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    available: [false, false, false, false, false],
                }
            ],
            blogHeaderData: {
                title: 'We Are Always Ready to Help You & Your Family',
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
            },
            blogData: [
                {
                    image: "",
                    date: "",
                    title: "",
                    description: "",
                    link: ''
                }
            ],
            clientData: [{
                image: ''
            }],

            footerData: {
                about: {
                    title: "",
                    description:
                        "",
                    socialLinks: [
                        { icon: "fa fa-facebook-f", url: "" },
                        { icon: "fa fa-google-plus", url: "" },
                        { icon: "fa fa-twitter", url: "" },
                        { icon: "fa fa-vimeo", url: "" },
                        { icon: "fa fa-pinterest", url: "" },
                    ],
                },
                quickLinks: [
                    { text: "", url: "" },
                ],
                openHours: {
                    title: " ",
                    description:
                        "",
                    hours: [
                        { day: "", time: "" },
                        { day: "", time: "" },
                        { day: "", time: "" },
                    ],
                },
                newsletter: {
                    title: "",
                    description:
                        "",
                    placeholder: "",
                },
                copyright: {
                    year: new Date().getFullYear(),
                    text: "",
                    link: { url: "", text: "" },
                },
            },
        },
    })
    // url http://192.168.0.37:2000/file/upload

    const handleFileChange = async (fieldName: any, event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Get the file
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file); // Append file to formData

        try {
            const res = await axios.post("http://82.29.161.36:2000/file/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(res.data?.result, "Uploaded file response");

            // Assuming API returns the uploaded file URL
            setValue(fieldName, res.data?.result);
        } catch (error) {
            console.error("Upload failed", error);
        }
    };

    const { fields: topLinks, append: addTopLink, remove: removeTopLink } =
        useFieldArray({
            control,
            name: "topLinks",
        });

    const { fields: sliders, append: addSlider, remove: removeSlider } =
        useFieldArray({
            control,
            name: "sliderData",
        });

    // const { fields: contactInfo, append: addCOntactInfo, remove: removeContactInfo } =
    //     useFieldArray({
    //         control,
    //         name: "contactInfo",
    //     });
    const { fields: scheduleData, append: addScheduleData, remove: removescheduleData } =
        useFieldArray({
            control,
            name: "scheduleData",
        });
    const { fields: featuresData, append: addFeaturesData, remove: removeFeaturesData } =
        useFieldArray({
            control,
            name: "featuresData",
        });
    const { fields: funFactsData, append: addFunFactsData, remove: removeFunFactsData } =
        useFieldArray({
            control,
            name: "funFactsData",
        });
    const { fields: paragraphs, append: addParagraph, remove: removeParagraph } =
        useFieldArray({
            control,
            name: "whyChooseData.whoWeAre.paragraphs",
        });

    const { fields: listItems1, append: addListItem1, remove: removeListItem1 } =
        useFieldArray({
            control,
            name: "whyChooseData.whoWeAre.listItems1",
        });

    const { fields: listItems2, append: addListItem2, remove: removeListItem2 } =
        useFieldArray({
            control,
            name: "whyChooseData.whoWeAre.listItems2",
        });
    const { fields: portfolioData, append: addPortfolioData, remove: removePortfolioData } = useFieldArray({
        control,
        name: "portfolio.portfolioData",
    });
    const { fields: serviceData, append: addServiceData, remove: removeServiceData } = useFieldArray({
        control,
        name: "services.serviceData",
    });
    const { fields: blogData, append: addBlogData, remove: removeBlogData } = useFieldArray({
        control,
        name: "blogData",
    });
    const { fields: clientData, append: addClientData, remove: removeClientData } = useFieldArray({
        control,
        name: "clientData",
    });
    const { fields: socialLinks, append: addSocialLink, remove: removeSocialLink } =
        useFieldArray({
            control,
            name: "footerData.about.socialLinks"
        });

    const { fields: quickLinks, append: addQuickLink, remove: removeQuickLink } =
        useFieldArray({
            control,
            name: "footerData.quickLinks"
        })
    const { fields: quickLinksHours, append: addOpenHours, remove: removeOpenHours } =
        useFieldArray({
            control,
            name: "footerData.openHours.hours"
        })
    const { fields: pricingData, append: addPricingData, remove: removePricingData } =
        useFieldArray({
            control,
            name: "pricingData"
        })

    const onSubmit = async (data: any) => {
        console.log(data);
        const payload = {
            sub_domain: data?.sub_domain,
            topLinks: data?.topLinks,
            logo:data?.logo,
            sliderData: data?.sliderData?.map((item: any) => ({
                title: item?.title,
                description: item?.description,
                image: item?.image,
                buttons: [
                    {
                        text: data?.button || 'Get Appointment',
                        href: "",
                        class: "btn"
                    },
                    {
                        text: data?.button2 || 'Learn More',
                        href: "",
                        class: "btn primary"
                    }
                ]
            })),
            contactInfo: [
                {
                    icon: 'fa-phone',
                    textMobile: data?.mobile,

                },
                {
                    icon: 'fa-envelope',
                    textMobile: data?.email,

                },
            ],
            scheduleData: data?.scheduleData?.map((item: any) => ({
                title: item?.title,
                description: item?.description,
                category: item?.category,
                link: '#',
                linkText: 'LEARN MORE'
            })),
            featuresData: data?.featuresData,
            funFactsData: data?.funFactsData,
            whyChooseData: data?.whyChooseData,
            callActionData: data?.callActionData,

            portfolioTitle: data?.portfolio?.portfolioTitle,
            portfolioData: data?.portfolio?.portfolioData?.map((item: any) => ({
                image: item?.image,
                details_link: ''
            })),
            service: data?.services?.servicesTitle,
            servicesData: data?.services?.serviceData,
            pricingTitle: data?.pricingTitle,
            pricingData: data?.pricingData,
            blogData: data?.blogData,
            blogHeaderData: data?.blogHeaderData,
            clientsData: data?.clientData,
            footerData: data?.footerData,
            contactDetails: {
                phone: data?.mobile,
                email: data?.email,
                address: '',
                title: '',
                description: '',
            },
            contactHeaderData: {
                title: '',
                description: ''
            }
        }
        console.log(payload);

        http://192.168.0.37:2000/website/create
        try {
            const response: any = await axios.post("http://192.168.0.37:2000/website/create", {
                ...payload,
                "template_id": "1001"
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate("/profile"); 
            console.log(response?.data); // Logging the successful response
        } catch (error: any) {
            console.log(error?.response); // Logging the error response
        }

    };

    return (
        <div className="p-6 bg-white mx-auto">
            <h1 className="text-3xl font-semibold p-2 text-center">Enter your deails to create you own website!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow-lg p-4 rounded-lg">
                <div className="border p-4 rounded-lg">
                    <input
                        {...register("sub_domain")}
                        placeholder="Sub domain"
                        className="border p-2 rounded w-full"
                    />
                </div>
                {/* Top Links Section */}
                <div className="border p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Top Links</h2>
                    {topLinks.map((field, index) => (
                        <div key={field.id} className=" gap-2 items-center space-y-4">
                            <input
                                {...register(`topLinks.${index}.name`)}
                                placeholder="Link Name"
                                className="border p-2 rounded w-full mt-2"
                            />
                            <input
                                {...register(`topLinks.${index}.href`)}
                                placeholder="URL"
                                className="border p-2 rounded w-full"
                            />
                            <button
                                type="button"
                                onClick={() => removeTopLink(index)}
                                className="bg-red-500 w-auto text-white px-3 my-2 py-1 rounded hover:bg-red-600"
                            >
                                X
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addTopLink({ name: "", href: "" })}
                        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Link
                    </button>
                </div>
                {/* lOGO */}
                <div className=" shadow-md border p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Logo </h2>
                    <input
                        type="file"
                        onChange={(e) => handleFileChange('logo', e)}
                        className="border p-2 rounded w-full"
                    />
                </div>
                {/* Contact Info */}
                <div className=" shadow-md border p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
                    {/* {contactInfo.map((field, index) => (
                        <div key={field.id} className=" flex gap-4  items-center">
                            <input
                                {...register(`contactInfo.${index}.title`)}
                                placeholder="Link Name"
                                className="border p-2 rounded w-full"
                            />

                            <button
                                type="button"
                                onClick={() => removeContactInfo(index)}
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                            >
                                X
                            </button>
                        </div>
                    ))} */}
                    <input
                        {...register(`mobile`)}
                        type="number"
                        placeholder="Enter Mobile"
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <input
                        {...register(`email`)}
                        placeholder="Enter Email"
                        className="border p-2 rounded w-full"
                        type="email"
                        required
                    />
                    {/* <button
                        type="button"
                        onClick={() => addCOntactInfo({ title: "", })}
                        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Info
                    </button> */}
                </div>

                {/* Slider Data Section */}
                <div className=" shadow-md border p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Slider Data</h2>
                    {sliders.map((slider, index) => (
                        <div key={slider.id} className=" space-y-4">
                            <input
                                type="file"
                                onChange={(e) => handleFileChange(`sliderData.${index}.image`, e)}
                                className="border p-2 rounded w-full"
                            />
                            <input
                                {...register(`sliderData.${index}.title`)}
                                placeholder="Title"
                                className="border p-2 rounded w-full"
                            />
                            <textarea
                                {...register(`sliderData.${index}.description`)}
                                placeholder="Description"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                {...register(`sliderData.${index}.button`)}
                                placeholder="Button Name"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                {...register(`sliderData.${index}.button2`)}
                                placeholder="Button2 Name"
                                className="border p-2 rounded w-full"
                            />

                            <button
                                type="button"
                                onClick={() => removeSlider(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                X
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addSlider({ image: null, title: "", description: "", button: '', button2: '' })}
                        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Slider
                    </button>
                </div>

                {/* Schedule data */}
                <div className=" shadow-md  border p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Schedule Data</h2>
                    {scheduleData.map((slider, index) => (
                        <div key={slider.id} className="space-y-4">
                            <input
                                {...register(`scheduleData.${index}.category`)}
                                placeholder="Category"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                {...register(`scheduleData.${index}.title`)}
                                placeholder="Title"
                                className="border p-2 rounded w-full"
                            />
                            <textarea
                                {...register(`scheduleData.${index}.description`)}
                                placeholder="Description"
                                className="border p-2 rounded w-full"
                            />


                            <button
                                type="button"
                                onClick={() => removescheduleData(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                X
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addScheduleData({ title: "", description: "", category: "", linkText: "" })}
                        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Schedule Data
                    </button>
                </div>

                {/* Feature data */}
                <div className=" shadow-md border p-4 rounded-lg ">
                    <h2 className="text-xl font-semibold mb-4">Feature Data</h2>
                    {featuresData.map((slider, index) => (
                        <div key={slider.id} className=" space-y-4">
                            <input
                                {...register(`featuresData.${index}.icon`)}
                                placeholder="Icon"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                {...register(`featuresData.${index}.title`)}
                                placeholder="Title"
                                className="border p-2 rounded w-full"
                            />
                            <textarea
                                {...register(`featuresData.${index}.description`)}
                                placeholder="Description"
                                className="border p-2 rounded w-full"
                            />
                            <button
                                type="button"
                                onClick={() => removeFeaturesData(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                X
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addFeaturesData({ title: "", description: "", icon: "" })}
                        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Feature Data
                    </button>
                </div>

                {/* Fun fact data */}
                <div className=" shadow-md border p-4 rounded-lg ">
                    <h2 className="text-xl font-semibold mb-4">Fun fact Data</h2>
                    {funFactsData.map((slider, index) => (
                        <div key={slider.id} className=" space-y-4">
                            <input
                                {...register(`funFactsData.${index}.text`)}
                                placeholder="Text"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                {...register(`funFactsData.${index}.icon`)}
                                placeholder="Icon"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                {...register(`funFactsData.${index}.count`)}
                                placeholder="Count"
                                type="number"
                                className="border p-2 rounded w-full"
                            />

                            <button
                                type="button"
                                onClick={() => removeFunFactsData(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                X
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addFunFactsData({ text: "", count: 0, icon: "" })}
                        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Fun fact Data
                    </button>
                </div>

                {/* Why choose Us */}
                <div className=" shadow-md border p-4 rounded-lg ">
                    <h2 className="text-xl font-semibold mb-4">Why Choose Us</h2>
                    <input
                        {...register("whyChooseData.title")}
                        placeholder="Section Title"
                        className="border p-2 rounded w-full"
                    />
                    <textarea
                        {...register("whyChooseData.description")}
                        placeholder="Description"
                        className="border p-2 rounded w-full mt-2"
                    />
                    <input
                        type="file"
                        // {...register("whyChooseData.image")}
                        onChange={(e) => handleFileChange(`whyChooseData.image`, e)}
                        className="border p-2 rounded w-full mt-2"
                    />
                </div>

                {/* Who We Are Section */}
                <div className=" shadow-md border p-4 rounded-lg ">
                    <h2 className="text-xl font-semibold mb-4">Who We Are</h2>
                    <input
                        {...register("whyChooseData.whoWeAre.title")}
                        placeholder="Who We Are Title"
                        className="border p-2 rounded w-full"
                    />

                    {/* Paragraphs */}
                    <h3 className="text-lg font-medium mt-4">Paragraphs</h3>
                    <div className="space-y-2 ">
                        {paragraphs.map((field, index) => (
                            <div key={field.id} className=" space-x-2">
                                <textarea
                                    {...register(`whyChooseData.whoWeAre.paragraphs.${index}.value`)}
                                    placeholder="Paragraph"
                                    className="border p-2 rounded w-full"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeParagraph(index)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={() => addParagraph({ value: "" })}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Paragraph
                    </button>

                    {/* List Items 1 */}
                    <h3 className="text-lg font-medium mt-4">List 1</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {listItems1.map((field, index) => (
                            <div key={field.id} className="flex space-x-2">
                                <input
                                    {...register(`whyChooseData.whoWeAre.listItems1.${index}.value`)}
                                    placeholder="List Item"
                                    className="border p-2 rounded w-full"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeListItem1(index)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={() => addListItem1({ value: "" })}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add List Item
                    </button>

                    {/* List Items 2 */}
                    <h3 className="text-lg font-medium mt-4">List 2</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {listItems2.map((field, index) => (
                            <div key={field.id} className="flex space-x-2">
                                <input
                                    {...register(`whyChooseData.whoWeAre.listItems2.${index}.value`)}
                                    placeholder="List Item"
                                    className="border p-2 rounded w-full"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeListItem2(index)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={() => addListItem2({ value: "" })}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add List Item
                    </button>
                </div>
                {/* Call action section */}
                <div className=" shadow-md border p-4 rounded-lg ">
                    <h2 className="text-xl font-semibold mb-4">Call to Action</h2>

                    {/* Title Input */}
                    <input
                        {...register("callActionData.title")}
                        placeholder="Enter Call to Action Title"
                        className="border p-2 rounded w-full"
                    />

                    {/* Description Input */}
                    <textarea
                        {...register("callActionData.description")}
                        placeholder="Enter Description"
                        className="border p-2 rounded w-full mt-2"
                    />
                </div>
                {/* Portfolio section */}
                <div className=" shadow-md border p-4 rounded-lg ">
                    <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
                    <input
                        {...register("portfolio.portfolioTitle.title")}
                        placeholder="Portfolio Title"
                        className="border p-2 rounded w-full mb-2"
                    />
                    <textarea
                        {...register("portfolio.portfolioTitle.description")}
                        placeholder="Portfolio Description"
                        className="border p-2 rounded w-full mb-4"
                    />

                    {/* Portfolio Images Section */}
                    <h3 className="text-lg font-medium mb-2">Portfolio Images</h3>
                    <div className="space-y-2">
                        {portfolioData.map((field, index) => (
                            <div key={field.id} className="flex space-x-2 items-center">
                                <input
                                    type="file"
                                    // {...register(`portfolio.portfolioData.${index}.image`)}
                                    onChange={(e) => handleFileChange(`portfolio.portfolioData.${index}.image`, e)}
                                    placeholder="Image URL"
                                    className="border p-2 rounded w-full"
                                />
                                <button
                                    type="button"
                                    onClick={() => removePortfolioData(index)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={() => addPortfolioData({ image: "" })}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Image
                    </button>
                </div>
                {/* services section */}
                <div className=" shadow-md border p-4 rounded-lg ">
                    <h2 className="text-xl font-semibold mb-4">Services</h2>
                    <input
                        {...register("services.servicesTitle.title")}
                        placeholder="Services Title"
                        className="border p-2 rounded w-full mb-2"
                    />
                    <textarea
                        {...register("services.servicesTitle.description")}
                        placeholder="Services Description"
                        className="border p-2 rounded w-full mb-4"
                    />

                    {/* Portfolio Images Section */}
                    <h3 className="text-lg font-medium mb-2">Services Images</h3>
                    <div className="space-y-2">
                        {serviceData.map((field, index) => (
                            <div key={field.id} className="flex space-x-2 items-center">
                                <input
                                    type="text"
                                    {...register(`services.serviceData.${index}.icon`)}
                                    placeholder="Icon"
                                    className="border p-2 rounded w-full"
                                />
                                <input
                                    type="text"
                                    {...register(`services.serviceData.${index}.title`)}
                                    placeholder="Services Title"
                                    className="border p-2 rounded w-full"
                                />
                                <textarea
                                    {...register(`services.serviceData.${index}.description`)}
                                    className="border p-2 rounded w-full"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeServiceData(index)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={() => addServiceData({
                            icon: '',
                            title: '',
                            description: ''
                        })}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Image
                    </button>
                </div>
                {/* Pricing data */}
                <div className=" shadow-md border p-4 rounded-lg ">
                    <h2 className="text-xl font-semibold mb-4">Pricing Plans</h2>
                    <input
                        {...register("services.servicesTitle.title")}
                        placeholder="Services Title"
                        className="border p-2 rounded w-full mb-2"
                    />
                    <textarea
                        {...register("services.servicesTitle.description")}
                        placeholder="Services Description"
                        className="border p-2 rounded w-full mb-4"
                    />
                    {pricingData.map((field, index) => (
                        <div key={field.id} className=" rounded-lg mb-4 ">
                            <h3 className="text-lg font-medium mb-2">Plan {index + 1}</h3>
                            <input
                                {...register(`pricingData.${index}.title`)}
                                placeholder="Plan Title"
                                className="border p-2 rounded w-full mb-2"
                            />
                            <input
                                {...register(`pricingData.${index}.price`)}
                                placeholder="Price"
                                className="border p-2 rounded w-full mb-2"
                            />
                            <input
                                {...register(`pricingData.${index}.duration`)}
                                placeholder="Duration"
                                className="border p-2 rounded w-full mb-2"
                            />

                            <h4 className="font-medium mb-2">Features</h4>
                            {field.features?.map((_, featureIndex) => (
                                <div key={featureIndex} className="flex items-center space-x-2 mb-2">
                                    <input
                                        {...register(`pricingData.${index}.features.${featureIndex}`)}
                                        placeholder="Feature"
                                        className="border p-2 rounded w-full"
                                    />
                                    <input
                                        type="checkbox"
                                        {...register(`pricingData.${index}.available.${featureIndex}`)}
                                        className="h-5 w-5"
                                    />
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={() => removePricingData(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                X
                            </button>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() =>
                            addPricingData({
                                title: "",
                                price: "",
                                duration: "",
                                features: ["", "", "", "", ""],
                                available: [false, false, false, false, false],
                            })
                        }
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add New Plan
                    </button>
                </div>

                {/* Blod section */}
                <div className=" shadow-md border p-4 rounded-lg ">

                    <h2 className="text-xl font-semibold mb-4">Blog Management</h2>

                    {blogData.map((field, index) => (
                        <div key={field.id} className=" p-4 rounded-lg mb-4">
                            <input
                                // {...register(`blogData.${index}.image`)}
                                onChange={(e) => handleFileChange(`blogData.${index}.image`, e)}
                                type="file"
                                className="border p-2 rounded w-full mb-2"
                            />
                            <input
                                type="date"
                                {...register(`blogData.${index}.date`)}
                                placeholder="Date"
                                className="border p-2 rounded w-full mb-2"
                            />
                            <input
                                {...register(`blogData.${index}.title`)}
                                placeholder="Blog Title"
                                className="border p-2 rounded w-full mb-2"
                            />
                            <textarea
                                {...register(`blogData.${index}.description`)}
                                placeholder="Blog Description"
                                className="border p-2 rounded w-full mb-2"
                            />

                            <button
                                type="button"
                                onClick={() => removeBlogData(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                X
                            </button>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() =>
                            addBlogData({
                                image: "",
                                date: "",
                                title: "",
                                description: "",
                                link: '',
                            })
                        }
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Blog Post
                    </button>

                </div>
                {/* Client section */}
                <div className=" shadow-md p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Manage Clients</h2>

                    {clientData.map((field, index) => (
                        <div key={field.id} className="flex space-x-2 mb-2">
                            <input
                                // {...register(`clientData.${index}`)}
                                onChange={(e) => handleFileChange(`clientData.${index}`, e)}
                                placeholder=" or Image URL"
                                className="border p-2 rounded w-full"
                                type="file"
                            />
                            <button
                                type="button"
                                onClick={() => removeClientData(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                X
                            </button>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() => addClientData({ image: "" })}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                        X
                    </button>
                </div>

                {/* Fooet area */}
                <div className=" shadow-md p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Footer Data</h2>

                    {/* About Section */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium">About</h3>
                        <input
                            {...register("footerData.about.title")}
                            placeholder="Title"
                            className="border p-2 rounded w-full mt-2"
                        />
                        <textarea
                            {...register("footerData.about.description")}
                            placeholder="Description"
                            className="border p-2 rounded w-full mt-2"
                        />
                    </div>

                    {/* Social Links */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium">Social Links</h3>
                        {socialLinks.map((field, index) => (
                            <div key={field.id} className="flex space-x-2 mt-2">
                                <input
                                    {...register(`footerData.about.socialLinks.${index}.icon`)}
                                    placeholder="Icon Class"
                                    className="border p-2 rounded w-full"
                                />
                                <input
                                    {...register(`footerData.about.socialLinks.${index}.url`)}
                                    placeholder="URL"
                                    className="border p-2 rounded w-full"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeSocialLink(index)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addSocialLink({ icon: "", url: "" })}
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add Social Link
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium">Quick Links</h3>
                        {quickLinks.map((field, index) => (
                            <div key={field.id} className="flex space-x-2 mt-2">
                                <input
                                    {...register(`footerData.quickLinks.${index}.text`)}
                                    placeholder="Link Text"
                                    className="border p-2 rounded w-full"
                                />
                                <input
                                    {...register(`footerData.quickLinks.${index}.url`)}
                                    placeholder="URL"
                                    className="border p-2 rounded w-full"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeQuickLink(index)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addQuickLink({ text: "", url: "" })}
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add Quick Link
                        </button>
                    </div>

                    {/* Open Hours */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium">Open Hours</h3>
                        <input
                            {...register("footerData.openHours.title")}
                            placeholder="Title"
                            className="border p-2 rounded w-full mt-2"
                        />
                        <textarea
                            {...register("footerData.openHours.description")}
                            placeholder="Description"
                            className="border p-2 rounded w-full mt-2"
                        />
                        {quickLinksHours.map((field, index) => (
                            <div key={field.id} className="flex space-x-2 mb-2">
                                <input
                                    {...register(`footerData.openHours.hours.${index}.day`)}
                                    placeholder="Day"
                                    className="border p-2 rounded w-full"
                                    type="text"
                                />
                                <input
                                    {...register(`footerData.openHours.hours.${index}.time`)}
                                    placeholder="Time"
                                    className="border p-2 rounded w-full"
                                    type="text"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeOpenHours(index)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    X
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={() => addOpenHours({ day: "", time: "" })}
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add Client
                        </button>
                    </div>

                    {/* Newsletter */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium">Newsletter</h3>
                        <input
                            {...register("footerData.newsletter.title")}
                            placeholder="Newsletter Title"
                            className="border p-2 rounded w-full mt-2"
                        />
                        <textarea
                            {...register("footerData.newsletter.description")}
                            placeholder="Description"
                            className="border p-2 rounded w-full mt-2"
                        />
                        <input
                            {...register("footerData.newsletter.placeholder")}
                            placeholder="Placeholder Text"
                            className="border p-2 rounded w-full mt-2"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Dashboard;
