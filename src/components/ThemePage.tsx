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
    ]


    return (
        <>
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