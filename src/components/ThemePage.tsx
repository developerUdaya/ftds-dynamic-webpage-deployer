import { useNavigate } from "react-router-dom";
import ProfileHeader from "./Profile/ProfileHeader";

function ChooseThemeIndex() {
    const navigate = useNavigate();

    const themeDatas = [
        {
            name: 'Theme 1',
            description: 'Description or short preview of the theme.',
            image: 'https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg',
            link: 'https://ftds-website-demo.web.app/',
            id: 1,
        },
        {
            name: 'Theme 2',
            description: 'Description or short preview of the theme.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnDe1opGLI9HoYJXbQZm10rZ7IUXpSP2sGw&s',
            link: 'https://ftds-website-demo.web.app/',
            id: 2,
        },
        {
            name: 'Theme 3',
            description: 'Description or short preview of the theme.',
            image: 'https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/__hs-marketplace__/theme-preview-1.png?width=480',
            link: 'https://ftds-website-demo.web.app/',
            id: 3,
        },
        {
            name: 'Theme 4',
            description: 'Description or short preview of the theme.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnDe1opGLI9HoYJXbQZm10rZ7IUXpSP2sGw&s',
            link: 'https://ftds-website-demo.web.app/',
            id: 4,
        },
        {
            name: 'Theme 5',
            description: 'Description or short preview of the theme.',
            image: 'https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/__hs-marketplace__/theme-preview-1.png?width=480',
            link: 'https://ftds-website-demo.web.app/',
            id: 5,
        },
        {
            name: 'Theme 6',
            description: 'Description or short preview of the theme.',
            image: 'https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg',
            link: 'https://ftds-website-demo.web.app/',
            id: 6,
        },
        {
            name: 'Theme 3',
            description: 'Description or short preview of the theme.',
            image: 'https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/__hs-marketplace__/theme-preview-1.png?width=480',
            link: 'https://ftds-website-demo.web.app/',
            id: 7,
        },
        {
            name: 'Theme 4',
            description: 'Description or short preview of the theme.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnDe1opGLI9HoYJXbQZm10rZ7IUXpSP2sGw&s',
            link: 'https://ftds-website-demo.web.app/',
            id: 8,
        },
    ]


    return (
        <>
                    <ProfileHeader />
            <div className="shadow-[0_4px_6px_rgba(0,0,0,0.1)] lg:px-40 px-5  bg-gray-100">
                <h1 className="text-4xl font-bold pt-5">Choose Your Website Theme</h1>
                <p className="text-gray-800 text-sm py-5">Choose from over 100 website templates and themes. Explore items created by our global community of independent designers and developers, confident they're hand-reviewed by us.</p>
            </div>

            <div className="p-10 lg:px-40 px-5">
                <h1 className="text-lg font-bold py-4 flex">Choose Your Theme</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full">
                    {themeDatas?.map((item: any, index: number) => (
                        <div key={index} className={`bg-white rounded-md shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105`}>
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
                                <div className="flex gap-1 justify-end">
                                    <button className="px-4 py-2 text-blue-600 rounded-md hover:bg-gray-200 hover:text-blue hover:border-none border-2"
                                        onClick={() => navigate(`/chooseTheme/subDomainCreate/${item?.id}`)}
                                    >
                                        Buy Now
                                    </button>

                                    <button
                                        className="px-4 py-2 text-blue-600 rounded-md hover:bg-blue-500 hover:text-white hover:border-none flex gap-1 border-2"
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



        </>
    )
}

export default ChooseThemeIndex;