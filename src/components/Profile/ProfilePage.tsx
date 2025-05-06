import axios from "axios";
import ProfileHeader from "./ProfileHeader";
import api from '../../url';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const token = localStorage.getItem('token');
    const [profileData, setProfileData] = useState<any>('');
    const navigate=useNavigate();
    const themeDatas = [
        {
            name: 'Theme 1',
            description: 'Description or short preview of the theme.',
            image: 'https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg',
            link: 'https://ftds-website-demo.web.app/'
        },
        {
            name: 'Theme 2',
            description: 'Description or short preview of the theme.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnDe1opGLI9HoYJXbQZm10rZ7IUXpSP2sGw&s',
            link: 'https://ftds-website-demo.web.app/'
        },
    ]

    const getProfile = async () => {
        try {
            const response: any = await axios.get(api.profileApi, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setProfileData(response?.data?.result)
        } catch (error) {

        }
    }

    useEffect(() => {
        getProfile();
    }, [])

    console.log(profileData)

    return (
        <>
            <ProfileHeader />
            <div className="mt-8">
                <div className="">
                    <div className="flex justify-center">
                        <div className="min-w-max">
                            <div className=" overflow-hidden shadow-md rounded-lg mb-8">
                                <div className="flex m-0">
                                    <div className="w-1/3 bg-gradient-to-r from-blue-500 to-gray-500 user-profile">
                                        <div className="card-block text-center text-white p-4">
                                            <div className="mb-6 flex justify-center">
                                                <img
                                                    src="https://img.icons8.com/bubbles/100/000000/user.png"
                                                    className="rounded-full w-24 h-24"
                                                    alt="User-Profile-Image"
                                                />
                                            </div>
                                            <h6 className="font-semibold uppercase">{profileData?.profile?.name ? profileData?.profile?.name : "--"}</h6>
                                            <p>Profile</p>
                                            <i className="mdi mdi-square-edit-outline feather icon-edit mt-4 text-lg cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="w-2/3 pr-16">
                                        <div className="card-block p-6">
                                            <h6 className="mb-5 pb-2 border-b-2 border-gray-300 font-semibold">Information</h6>
                                            <div className="flex space-x-8 mt-4">
                                                <div>
                                                    <p className="mb-2 font-semibold">User Name</p>
                                                    <h6 className="text-muted font-normal">{profileData?.profile?.userName ? profileData?.profile?.userName : "--"}</h6>
                                                </div>

                                            </div>

                                            <div className="flex space-x-8 mt-4">
                                                <div>
                                                    <p className="mb-2 font-semibold">Email</p>
                                                    <h6 className="text-muted font-normal">{profileData?.profile?.email ? profileData?.profile?.email : "--"}</h6>
                                                </div>
                                                <div>
                                                    <p className="mb-2 font-semibold">Phone</p>
                                                    <h6 className="text-muted font-normal">{profileData?.profile?.mobile ? profileData?.profile?.mobile : "--"}</h6>
                                                </div>
                                            </div>

                                            <h6 className="mt-10 mb-5 pb-2 border-b-2 border-gray-300 font-semibold">Projects</h6>
                                            <div className="flex space-x-8">
                                                <div>
                                                    <p className="mb-2 font-semibold">TotalWebsite</p>
                                                    <h6 className="text-muted font-normal">{profileData?.webDetails ? profileData?.webDetails?.length : "--"}</h6>
                                                </div>
                                                <div>
                                                    <p className="mb-2 font-semibold">CreatedAt</p>
                                                    <h6 className="text-muted font-normal">
                                                        {profileData?.profile?.createdAt
                                                            ? new Date(profileData?.profile?.createdAt).toLocaleDateString('en-US')
                                                            : "--"}
                                                    </h6>
                                                </div>
                                                <div>
                                                    <p className="mb-2 font-semibold">UpdateAt</p>
                                                    <h6 className="text-muted font-normal">
                                                        {profileData?.profile?.updatedAt
                                                            ? new Date(profileData?.profile?.updatedAt).toLocaleDateString('en-US')
                                                            : "--"}
                                                    </h6>
                                                </div>

                                            </div>
        
                                            {/* <ul className="social-link list-none mt-10 mb-4 flex space-x-4">
                                                <li>
                                                    <a href="#!" data-toggle="tooltip" data-placement="bottom" title="facebook">
                                                        <i className="mdi mdi-facebook text-2xl text-blue-600" aria-hidden="true" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!" data-toggle="tooltip" data-placement="bottom" title="twitter">
                                                        <i className="mdi mdi-twitter text-2xl text-blue-400" aria-hidden="true" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!" data-toggle="tooltip" data-placement="bottom" title="instagram">
                                                        <i className="mdi mdi-instagram text-2xl text-pink-500" aria-hidden="true" />
                                                    </a>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 lg:px-10 px-5">
                <div className="flex justify-between mb-5">
                    <h1 className="text-lg font-bold py-4 flex">Your Themes</h1>
                    <button className="bg-blue-500 text-white px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Add Theme
                    </button>

                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full">
                    {profileData?.webDetails?.map((item: any, index: number) => (
                        <div key={index} className={`bg-white rounded-md shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105`}>
                            <div className="h-40 bg-gray-200 overflow-hidden mb-1">
                                <img
                                  src={themeDatas[index % themeDatas.length]?.image}
                                    alt={item?.name}
                                    className="w-full h-full object-cover rounded-tr-md rounded-tl-md"
                                />
                            </div>
                            <div className="p-2">
                                <h2 className="text-md font-semibold mb-1">Theme {index +1}</h2>
                                <p className="text-gray-600 text-sm mb-4">Description or short preview of the theme.</p>
                                <div className="flex gap-1 justify-end">
                                <button
                                        className="px-4 py-2 text-blue-600 rounded-md hover:bg-blue-500 hover:text-white hover:border-none flex gap-1 border-2"
                                        onClick={() => window.open(`${item?.domain}`, "_blank")}
                                    >
                                      Live
                                    </button>
                                    <button
                                        className="px-4 py-2 text-blue-600 rounded-md hover:bg-blue-500 hover:text-white hover:border-none flex gap-1 border-2"
                                        // onClick={() => window.open(`${item?.link}`, "_blank")}
                                        onClick={()=> navigate(`chooseTheme/${item?.theme_id}/${item?.sub_domain}`)}
                                    >
                                        Edit Theme
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ProfilePage;