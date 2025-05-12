import axios from "axios";
import ProfileHeader from "./ProfileHeader";
import api from '../../url';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const token = localStorage.getItem('token');
    const [profileData, setProfileData] = useState<any>('');
    const navigate = useNavigate();
    const [profileLoading, setProfileLoading] = useState(true);
    const getFullUrl = (url: any) => {
        if (!url) return "#";
        return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    };

    const themeDatas = [
        {
            name: 'Theme 1',
            description: 'Description or short preview of the theme.',
            // image: 'https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnDe1opGLI9HoYJXbQZm10rZ7IUXpSP2sGw&s',
            link: 'https://ftds-website-demo.web.app/'
        },
        // {
        //     name: 'Theme 2',
        //     description: 'Description or short preview of the theme.',
        //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnDe1opGLI9HoYJXbQZm10rZ7IUXpSP2sGw&s',
        //     link: 'https://ftds-website-demo.web.app/'
        // },
    ]

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


    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <ProfileHeader />
                {!profileLoading ? (
                    <div className="mt-8">
                        <div className="">
                            <div className="flex justify-center px-4">
                                <div className="w-full max-w-5xl">
                                    <div className="overflow-hidden shadow-md rounded-lg mb-8 bg-white">
                                        <div className="flex flex-col md:flex-row m-0">

                                            <div className="w-full md:w-1/3 bg-gradient-to-r from-blue-500 to-gray-500 user-profile">
                                                <div className="card-block text-center text-white p-4">
                                                    <div className="mb-6 flex justify-center">
                                                        <img
                                                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                                                            className="rounded-full w-24 h-24"
                                                            alt="User-Profile-Image"
                                                        />
                                                    </div>
                                                    <h6 className="font-semibold uppercase">
                                                        {profileData?.profile?.name || "--"}
                                                    </h6>
                                                    <p>Profile</p>
                                                    <i className="mdi mdi-square-edit-outline feather icon-edit mt-4 text-lg cursor-pointer" />
                                                </div>
                                            </div>


                                            <div className="w-full md:w-2/3 px-4 py-6">
                                                <div className="card-block">
                                                    <h6 className="mb-5 pb-2 border-b-2 border-gray-300 font-semibold">Information</h6>

                                                    <div className="flex flex-col md:flex-row md:space-x-8 mt-4">
                                                        <div className="mb-4 md:mb-0">
                                                            <p className="mb-2 font-semibold">User Name</p>
                                                            <h6 className="text-muted font-normal">{profileData?.profile?.name || "--"}</h6>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col md:flex-row md:space-x-8 mt-4">
                                                        <div className="mb-4 md:mb-0">
                                                            <p className="mb-2 font-semibold">Email</p>
                                                            <h6 className="text-muted font-normal">{profileData?.profile?.email || "--"}</h6>
                                                        </div>
                                                        <div>
                                                            <p className="mb-2 font-semibold">Phone</p>
                                                            <h6 className="text-muted font-normal">{profileData?.profile?.mobile || "--"}</h6>
                                                        </div>
                                                    </div>

                                                    <h6 className="mt-10 mb-5 pb-2 border-b-2 border-gray-300 font-semibold">Projects</h6>

                                                    <div className="flex flex-col md:flex-row md:space-x-8">
                                                        <div className="mb-4 md:mb-0">
                                                            <p className="mb-2 font-semibold">Total Website</p>
                                                            <h6 className="text-muted font-normal">{profileData?.webDetails?.length || "--"}</h6>
                                                        </div>
                                                        <div className="mb-4 md:mb-0">
                                                            <p className="mb-2 font-semibold">Created At</p>
                                                            <h6 className="text-muted font-normal">
                                                                {profileData?.profile?.createdAt
                                                                    ? new Date(profileData?.profile?.createdAt).toLocaleDateString('en-US')
                                                                    : "--"}
                                                            </h6>
                                                        </div>
                                                        <div>
                                                            <p className="mb-2 font-semibold">Updated At</p>
                                                            <h6 className="text-muted font-normal">
                                                                {profileData?.profile?.updatedAt
                                                                    ? new Date(profileData?.profile?.updatedAt).toLocaleDateString('en-US')
                                                                    : "--"}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div className="mt-8 animate-pulse">
                        <div className="flex justify-center px-4">
                            <div className="w-full max-w-5xl">
                                <div className="overflow-hidden shadow-md rounded-lg mb-8">
                                    <div className="flex flex-col md:flex-row m-0">

                                        <div className="w-full md:w-1/3 bg-gradient-to-r from-blue-500 to-gray-500 p-4 flex flex-col items-center justify-center text-white">
                                            <div className="rounded-full bg-gray-300 w-24 h-24 mb-6"></div>
                                            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                                            <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
                                            <div className="h-5 w-8 bg-gray-200 rounded mt-4"></div>
                                        </div>


                                        <div className="w-full md:w-2/3 px-4 py-6">
                                            <div>
                                                <div className="h-6 bg-gray-300 w-1/3 mb-6 rounded"></div>

                                                <div className="flex flex-col md:flex-row md:space-x-8 mt-4">
                                                    <div className="mb-4 md:mb-0 w-full">
                                                        <div className="h-4 w-1/4 bg-gray-300 mb-2 rounded"></div>
                                                        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col md:flex-row md:space-x-8 mt-4">
                                                    <div className="mb-4 md:mb-0 w-full">
                                                        <div className="h-4 w-1/4 bg-gray-300 mb-2 rounded"></div>
                                                        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                                                    </div>
                                                    <div className="w-full">
                                                        <div className="h-4 w-1/4 bg-gray-300 mb-2 rounded"></div>
                                                        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                                                    </div>
                                                </div>

                                                <div className="h-6 bg-gray-300 w-1/4 mt-10 mb-6 rounded"></div>

                                                <div className="flex flex-col md:flex-row md:space-x-8">
                                                    <div className="mb-4 md:mb-0 w-full">
                                                        <div className="h-4 w-1/4 bg-gray-300 mb-2 rounded"></div>
                                                        <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                                                    </div>
                                                    <div className="mb-4 md:mb-0 w-full">
                                                        <div className="h-4 w-1/4 bg-gray-300 mb-2 rounded"></div>
                                                        <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                                                    </div>
                                                    <div className="w-full">
                                                        <div className="h-4 w-1/4 bg-gray-300 mb-2 rounded"></div>
                                                        <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="p-5 lg:px-10 px-5">
                    <div className="flex justify-between mb-5 flex-wrap">
                        <h1 className="text-lg font-bold py-2 flex">Your Themes</h1>
                        <button className="bg-blue-500 text-white px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => navigate('/chooseTheme')}>
                            Add Theme
                        </button>

                    </div>
                    {!profileLoading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full">
                            {profileData?.webDetails?.map((item: any, index: number) => (
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
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full animate-pulse">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-md shadow-lg flex flex-col h-full"
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
                    {profileData?.webDetails?.length === 0 && (
                        <div className="text-center py-10 text-gray-500">
                            <h2 className="text-lg font-semibold">You haven't purchased any themes yet.</h2>
                            <p className="mt-2">Browse our collection and get started!</p>
                        </div>
                    )}


                </div>
            </div>
        </>
    )
}

export default ProfilePage;