import { useNavigate } from "react-router-dom";
import ProfileHeader from "./Profile/ProfileHeader";
import axios from "axios";
import api from '../url';
import { useEffect, useState } from "react";

function ChooseThemeIndex() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [profileData, setProfileData] = useState<any>('');
    const [profileLoading, setProfileLoading] = useState(true);
    const getFullUrl = (url: any) => {
        if (!url) return "#";
        return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    };

    const getProfile = async () => {
        setProfileLoading(true);
        try {
            const response: any = await axios.get(api.profileApi, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setProfileData(response?.data?.result);
        } catch (error) {
            console.error("Failed to load profile", error);
        } finally {
            setProfileLoading(false);
        }
    };


    useEffect(() => {
        getProfile();
    }, [])

    const themeDatas = [
        {
            name: 'Theme 1',
            description: 'Description or short preview of the theme.',
            // image: 'https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnDe1opGLI9HoYJXbQZm10rZ7IUXpSP2sGw&s',
            link: 'http://ft-demo-theme-two.ftdigitalsolutions.org',
            id: 2,
        },
        // {
        //     name: 'Theme 2',
        //     description: 'Description or short preview of the theme.',
        //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnDe1opGLI9HoYJXbQZm10rZ7IUXpSP2sGw&s',
        //     link: 'file:///home/ftds/Downloads/Spering%20Free%20Website%20Template%20-%20Free-CSS.com/spering-html/index.html',
        //     id: 2,
        // },
        // {
        //     name: 'Theme 3',
        //     description: 'Description or short preview of the theme.',
        //     image: 'https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/__hs-marketplace__/theme-preview-1.png?width=480',
        //     link: 'https://ftds-website-demo.web.app/',
        //     id: 3,
        // },
        // {
        //     name: 'Theme 4',
        //     description: 'Description or short preview of the theme.',
        //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnDe1opGLI9HoYJXbQZm10rZ7IUXpSP2sGw&s',
        //     link: 'https://ftds-website-demo.web.app/',
        //     id: 4,
        // },
        // {
        //     name: 'Theme 5',
        //     description: 'Description or short preview of the theme.',
        //     image: 'https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/__hs-marketplace__/theme-preview-1.png?width=480',
        //     link: 'https://ftds-website-demo.web.app/',
        //     id: 5,
        // },
        // {
        //     name: 'Theme 6',
        //     description: 'Description or short preview of the theme.',
        //     image: 'https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg',
        //     link: 'https://ftds-website-demo.web.app/',
        //     id: 6,
        // },
        // {
        //     name: 'Theme 3',
        //     description: 'Description or short preview of the theme.',
        //     image: 'https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/__hs-marketplace__/theme-preview-1.png?width=480',
        //     link: 'https://ftds-website-demo.web.app/',
        //     id: 7,
        // },
        // {
        //     name: 'Theme 4',
        //     description: 'Description or short preview of the theme.',
        //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnDe1opGLI9HoYJXbQZm10rZ7IUXpSP2sGw&s',
        //     link: 'https://ftds-website-demo.web.app/',
        //     id: 8,
        // },
    ]


    return (
        <>
            {/* <ProfileHeader />
            <div className="shadow-[0_4px_6px_rgba(0,0,0,0.1)] lg:px-40 px-5  bg-gray-100">
                <h1 className="text-4xl font-bold pt-3">Choose Your Website Theme</h1>
                <p className="text-gray-800 text-sm py-2">Choose from over 100 website templates and themes. Explore items created by our global community of independent designers and developers, confident they're hand-reviewed by us.</p>
            </div>


            <div className="p-10 lg:px-40 px-5">
                <h1 className="text-lg font-bold py-4 flex">Choose Your Theme</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 w-full">
                    {themeDatas?.map((item: any, index: number) => (
                        <div key={index} className={`bg-white rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105`}>
                            <div className="h-40 bg-gray-200 overflow-hidden mb-1">
                                <img
                                    src={item?.image}
                                    alt={item?.name}
                                    className="w-full h-full object-cover rounded-tr-md rounded-tl-md"
                                />
                            </div>
                            <div className="p-2">
                                <h2 className="text-md font-semibold mb-1">{item?.name}</h2>
                                <p className="text-gray-600 text-sm mb-4">{item?.description}</p>
                                <div className="flex gap-1  flex-wrap justify-end mx-auto">
                                    <button className="px-4 py-2 text-blue-600 rounded-md hover:bg-gray-200 hover:text-blue  border-2"
                                        onClick={() => navigate(`/chooseTheme/subDomainCreate/${item?.id}`)}
                                    >
                                        Buy Now
                                    </button>

                                    <button
                                        className="px-4 py-2 text-blue-600 rounded-md hover:bg-blue-500 hover:text-white  flex gap-1 border-2"
                                        onClick={() => window.open(`${item?.link}`, "_blank")}
                                    >
                                        Live Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            {profileData?.webDetails?.length ? (
                <div className=" lg:px-40 px-5 mb-5">
                    <div className="flex justify-between">
                    <h1 className="text-lg font-bold py-4 flex">Your Theme</h1>
                    <h1 className="text-sm font-bold py-4 flex text-blue-500 hover:underline cursor-pointer"
                    onClick={()=>navigate('/profile')}>See More</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 w-full">
                        {profileData?.webDetails?.slice(0, 4)?.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="bg-white rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col h-full"
                            >
                                <div className="h-20 bg-gray-200 overflow-hidden mb-1">
                                    <img
                                        src={themeDatas[index % themeDatas.length]?.image}
                                        alt={item?.name}
                                        className="w-full h-full object-cover rounded-tr-md rounded-tl-md"
                                    />
                                </div>
                                <div className="p-2 flex flex-col flex-1">
                                    <h2 className="text-md font-semibold mb-1">{item?.sub_domain}</h2>
                                    <p className="text-gray-600 text-sm mb-2">
                                        {item?.sliderData?.description?.slice(0, 80)}
                                    </p>

                                   
                                    <div className="flex gap-1 justify-end flex-wrap items-end mt-auto">
                                        <button
                                            className="px-4 py-2 text-blue-600 rounded-md hover:bg-blue-500 hover:text-white flex gap-1 border-2"
                                            onClick={() => window.open(getFullUrl(item?.domain), "_blank")}
                                        >
                                            View Website
                                        </button>
                                        <button
                                            className="px-4 py-2 text-blue-600 rounded-md hover:bg-blue-500 hover:text-white flex gap-1 border-2"
                                            onClick={() => navigate(`/profile/${item?.theme_id}/${item?.sub_domain}`)}
                                        >
                                            Edit Website
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>
            ):(<>
            {profileLoading &&(
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full animate-pulse">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-md shadow-2xl flex flex-col h-full"
                    >
                        <div className="h-20 bg-gray-300 rounded-tr-md rounded-tl-md mb-1"></div>

                        <div className="p-2 flex flex-col flex-1">
                            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>

                            <div className="flex gap-2 justify-end mt-auto">
                                <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
                                <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            )}
                
            </>
            )} */}

            <div className="bg-gray-100 min-h-screen">
                <ProfileHeader />

                <div className="lg:px-40 px-5 pt-6">
                    <h1 className="text-3xl font-bold mb-2">Choose Your Website Theme</h1>
                    <p className="text-gray-700 mb-6 max-w-3xl text-sm">
                        Choose from over 100 website templates and themes. Explore items created by our global community of independent designers and developers, confident they're hand-reviewed by us.
                    </p>
                </div>

                <div className="p-10 lg:px-40 px-5">
                    <h2 className="text-xl font-semibold mb-4">Available Themes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {themeDatas?.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                            >
                                <div className="h-48 bg-gray-200">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                                    <div className="flex gap-2 justify-end flex-wrap">
                                        <button
                                            onClick={() => navigate(`/chooseTheme/subDomainCreate/${item.id}`)}
                                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
                                        >
                                            Buy Now
                                        </button>
                                        <button
                                            onClick={() => window.open(`${item.link}`, "_blank")}
                                            className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-100 rounded-md transition"
                                        >
                                            Live Preview
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {profileData?.webDetails?.length > 0 && (
                    <div className="lg:px-40 px-5 pb-10">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Your Theme</h2>
                            {profileData?.webDetails?.length > 4 && (
                                <button
                                    onClick={() => navigate('/profile')}
                                    className="text-sm font-medium text-blue-600 hover:underline"
                                >
                                    See More
                                </button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {profileData.webDetails.slice(0, 4).map((item: any, index: any) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="h-20 bg-gray-200 mb-3 overflow-hidden">
                                        <img
                                            src={themeDatas[index % themeDatas.length]?.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-md font-semibold">{item.sub_domain}</h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            {item?.sliderData?.description?.slice(0, 80)}
                                        </p>
                                    </div>
                                    <div className="flex gap-2 justify-end mt-auto flex-wrap">
                                        <button
                                            onClick={() => window.open(getFullUrl(item.domain), "_blank")}
                                            className="px-4 py-2 text-sm text-blue-600 border border-blue-600 hover:bg-blue-100 rounded-md"
                                        >
                                            View Website
                                        </button>
                                        <button
                                            onClick={() => navigate(`/profile/${item?.theme_id}/${item?.sub_domain}`)}
                                            className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                                        >
                                            Edit Website
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {profileLoading && (
                    <div className="lg:px-40 px-5 pb-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-4 space-y-4">
                                    <div className="h-20 bg-gray-300 rounded-md"></div>
                                    <div className="h-4 bg-gray-300 w-3/4 rounded-md"></div>
                                    <div className="h-3 bg-gray-200 w-full rounded-md"></div>
                                    <div className="h-3 bg-gray-200 w-5/6 rounded-md"></div>
                                    <div className="flex gap-2 justify-end mt-2">
                                        <div className="h-8 w-20 bg-gray-300 rounded-md"></div>
                                        <div className="h-8 w-20 bg-gray-300 rounded-md"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>


        </>
    )
}

export default ChooseThemeIndex;