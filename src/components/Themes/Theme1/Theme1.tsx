import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/normalize.css';
import './css/owl-carousel.css';
import './css/nice-select.css';
import './css/font-awesome.min.css';
import './css/icofont.css';
import './css/animate.min.css';
import './css/magnific-popup.css';
import './css/datepicker.css';
import './css/nice-select.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import CountUp from 'react-countup';
// import NiceSelect from 'react-nice-select';
import logo from './img/logo.png';
import sectionImg from './img/section-img.png';
import pf1 from './img/pf1.jpg';
import pf2 from './img/pf2.jpg';
import pf3 from './img/pf3.jpg';
import pf4 from './img/pf4.jpg';
import blog1 from './img/blog1.jpg';
import blog2 from './img/blog2.jpg';
import blog3 from './img/blog3.jpg';
import client1 from './img/client1.png';
import client2 from './img/client2.png';
import client3 from './img/client3.png';
import client4 from './img/client4.png';
import client5 from './img/client5.png';
import contactImg from './img/contact-img.png';
import slider2 from "./img/slider2.jpg";
import { useState } from 'react';


type Slide = {
    background?: string;
    heading: string;
    description: string;
    primaryBtn: string;
    secondaryBtn: string;
};

const initialSlide: Slide = {
    background: '/img/slider2.jpg',
    heading: 'We Provide <span>Medical</span> Services That You Can <span>Trust!</span>',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    primaryBtn: 'Get Appointment',
    secondaryBtn: 'Learn More',
};

export const HeroBanner: React.FC = () => {

    const [slide, setSlide] = useState<Slide>(initialSlide);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState<Slide>(initialSlide);

    const openEditModal = () => {
        setFormData(slide);
        setShowModal(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setSlide(formData);
        console.log('Updated Slide:', formData);
        setShowModal(false);
    };

    return (
        <section className="slider">
            <div
                className="single-slider"
                style={{
                    backgroundImage: `url(${slider2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="text">
                                <h1 dangerouslySetInnerHTML={{ __html: slide.heading }} />
                                <p>{slide.description}</p>
                                <div className="button">
                                    <a href="#" className="btn">{slide.primaryBtn}</a>
                                    <a href="#" className="btn primary">{slide.secondaryBtn}</a>
                                    <button onClick={openEditModal} className="btn" style={{ marginLeft: 10 }}>
                                        ✏️ Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-xl relative ">
                        <h2 className="text-2xl font-semibold mb-4">✏️ Edit Banner</h2>

                        <label className="block font-medium mb-1">Heading</label>
                        <input
                            name="heading"
                            value={formData.heading}
                            onChange={handleChange}
                            placeholder="Heading"
                            className="w-full p-3 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <label className="block font-medium mb-1">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Description"
                            rows={4}
                            className="w-full p-3 rounded-md border border-gray-300 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <label className="block font-medium mb-1">Primary Button</label>
                        <input
                            name="primaryBtn"
                            value={formData.primaryBtn}
                            onChange={handleChange}
                            placeholder="Primary Button"
                            className="w-full p-3 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <label className="block font-medium mb-1">Secondary Button</label>
                        <input
                            name="secondaryBtn"
                            value={formData.secondaryBtn}
                            onChange={handleChange}
                            placeholder="Secondary Button"
                            className="w-full p-3 rounded-md border border-gray-300 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={handleSave}
                                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-300 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};




function Theme1Index() {
    const clients = [client1, client2, client3, client4];
    type TopLink = {
        label: string;
        href: string;
    };

    const initialLinks: TopLink[] = [
        { label: "About", href: "#" },
        { label: "Doctors", href: "#" },
        { label: "Contact", href: "#" },
        { label: "FAQ", href: "#" },
    ];

    const [topLinks, setTopLinks] = useState<TopLink[]>(initialLinks);
    const [showEditModal, setShowEditModal] = useState(false);

    type ContactInfo = {
        type: 'phone' | 'email';
        value: string;
    };

    const [contacts, setContacts] = useState<ContactInfo[]>([
        { type: 'phone', value: '+880 1234 56789' },
        { type: 'email', value: 'support@yourmail.com' },
    ]);

    const [showContactModal, setShowContactModal] = useState(false);
    type ScheduleItem = {
        iconClass: string;
        spanText: string;
        heading: string;
        description?: string;
        listItems?: string[];
    };

    const initialSchedules: ScheduleItem[] = [
        {
            iconClass: 'fa fa-ambulance',
            spanText: 'Lorem Amet',
            heading: 'Emergency Cases',
            description: 'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
        },
        {
            iconClass: 'icofont-prescription',
            spanText: 'Fusce Porttitor',
            heading: 'Doctors Timetable',
            description: 'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
        },
        {
            iconClass: 'icofont-ui-clock',
            spanText: 'Donec luctus',
            heading: 'Opening Hours',
            listItems: [
                'Monday - Friday <span>8.00-20.00</span>',
                'Saturday <span>9.00-18.30</span>',
            ],
        },
    ];



    const [schedules, setSchedules] = useState(initialSchedules);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState<ScheduleItem>({
        iconClass: '',
        spanText: '',
        heading: '',
        description: '',
        listItems: [],
    });
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const openModal = (index: number) => {
        setEditingIndex(index);
        setFormData(schedules[index]);
        setShowModal(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleListChange = (index: number, value: string) => {
        const newList = [...(formData.listItems || [])];
        newList[index] = value;
        setFormData(prev => ({ ...prev, listItems: newList }));
    };

    const handleSave = () => {
        if (editingIndex !== null) {
            const updated = [...schedules];
            updated[editingIndex] = formData;
            setSchedules(updated);
            setShowModal(false);
        }
    };


    type Feature = {
        iconClass: string;
        title: string;
        description: string;
    };

    const initialFeatures: Feature[] = [
        {
            iconClass: 'icofont icofont-ambulance-cross',
            title: 'Emergency Help',
            description: 'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.',
        },
        {
            iconClass: 'icofont icofont-medical-sign-alt',
            title: 'Enriched Pharmacy',
            description: 'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.',
        },
        {
            iconClass: 'icofont icofont-stethoscope',
            title: 'Medical Treatment',
            description: 'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.',
        },
    ];


    const [sectionHeading, setSectionHeading] = useState('We Are Always Ready to Help You & Your Family');
    const [sectionDesc, setSectionDesc] = useState('Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts');
    const [features, setFeatures] = useState<Feature[]>(initialFeatures);
    const [editingIndexFeature, setEditingIndexFeature] = useState<number | null>(null);
    const [formDataFeature, setFormDataFeature] = useState<Feature>({ iconClass: '', title: '', description: '' });
    const [showModalFeature, setShowModalFeature] = useState(false);
    const [showSectionEdit, setShowSectionEdit] = useState(false);

    const openModalFeature = (index: number) => {
        setEditingIndexFeature(index);
        setFormDataFeature(features[index]);
        setShowModalFeature(true);
    };

    const handleChangeFeature = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormDataFeature((prev) => ({ ...prev, [name]: value }));
    };


    const handleSaveFeature = () => {
        if (editingIndexFeature !== null) {
            const updated = [...features];
            updated[editingIndexFeature] = formDataFeature;
            setFeatures(updated);
            console.log('Updated Feature:', formDataFeature); // ✅ Log the updated feature
            setShowModalFeature(false);
        }
    };

    const [facts, setFacts] = useState([
        { iconClass: 'icofont-home', count: 3488, label: 'Hospital Rooms' },
        { iconClass: 'icofont-user-alt-3', count: 557, label: 'Specialist Doctors' },
        { iconClass: 'icofont-simple-smile', count: 4379, label: 'Happy Patients' },
        { iconClass: 'icofont-table', count: 32, label: 'Years of Experience' },
    ]);
    const [showModalFacts, setShowModalFacts] = useState(false);
    const [editIndexFacts, setEditIndexFacts] = useState<number | null>(null);
    const [formDataFacts, setFormDataFacts] = useState<{
        iconClass: string;
        count: string | number;
        label: string;
    }>({ iconClass: '', count: '', label: '' });

    const openModalFacts = (index: any) => {
        setEditIndexFacts(index);
        setFormDataFacts(facts[index]);
        setShowModalFacts(true);
    };

    const handleChangeFacts = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormDataFacts(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveFacts = () => {
        if (editIndexFacts === null) return;

        const updatedFacts = [...facts];
        updatedFacts[editIndexFacts] = {
            ...formDataFacts,
            count: Number(formDataFacts.count),
        };

        setFacts(updatedFacts);
        setShowModalFacts(false);
        setEditIndexFacts(null);

        console.log("Updated Facts:", updatedFacts); // ✅ This logs the updated data
    };
    return (
        <>

            {/* <!-- Header Area --> */}
            <header className="header" >
                {/* <!-- Topbar --> */}
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5 col-12">
                                {/* <!-- Contact --> */}
                                <ul className="flex gap-4 flex-wrap text-sm text-gray-700">
                                    {topLinks.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href} className="hover:text-blue-600 transition">
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                    <li>
                                        <button
                                            onClick={() => setShowEditModal(true)}
                                            className="text-blue-600 hover:underline text-xs ml-2"
                                        >
                                            ✏️ Edit Links
                                        </button>
                                    </li>
                                </ul>
                                {/* <!-- End Contact --> */}
                            </div>

                            {showEditModal && (
                                <div className="fixed inset-0 bg-gray-700 bg-opacity-60 flex items-center justify-center z-50">
                                    <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
                                        <h3 className="text-xl font-semibold mb-4">Edit Top Links</h3>

                                        {topLinks.map((link, index) => (
                                            <div key={index} className="mb-4">
                                                <input
                                                    className="w-full mb-2 p-2 rounded border border-gray-300"
                                                    value={link.label}
                                                    placeholder="Label"
                                                    onChange={(e) => {
                                                        const updated = [...topLinks];
                                                        updated[index].label = e.target.value;
                                                        setTopLinks(updated);
                                                    }}
                                                />
                                                <input
                                                    className="w-full p-2 rounded border border-gray-300"
                                                    value={link.href}
                                                    placeholder="Link"
                                                    onChange={(e) => {
                                                        const updated = [...topLinks];
                                                        updated[index].href = e.target.value;
                                                        setTopLinks(updated);
                                                    }}
                                                />
                                            </div>
                                        ))}

                                        <div className="flex justify-between mt-4">
                                            <button
                                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                                onClick={() => {
                                                    console.log("Updated Links:", topLinks);
                                                    setShowEditModal(false);
                                                }}
                                            >
                                                Save
                                            </button>
                                            <button
                                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                                                onClick={() => setShowEditModal(false)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="col-lg-6 col-md-7 col-12">
                                {/* <!-- Top Contact --> */}
                                <ul className="flex flex-col gap-1 text-sm text-gray-700">
                                    {contacts.map((contact, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <i className={`fa ${contact.type === 'phone' ? 'fa-phone' : 'fa-envelope'}`}></i>
                                            {contact.type === 'email' ? (
                                                <a href={`mailto:${contact.value}`} className="hover:underline">{contact.value}</a>
                                            ) : (
                                                contact.value
                                            )}
                                        </li>
                                    ))}
                                    <li>
                                        <button
                                            onClick={() => setShowContactModal(true)}
                                            className="text-xs text-blue-600 hover:underline mt-1"
                                        >
                                            ✏️ Edit Contact Info
                                        </button>
                                    </li>
                                </ul>
                                {/* <!-- End Top Contact --> */}
                            </div>
                        </div>
                    </div>

                    {showContactModal && (
                        <div className="fixed inset-0 bg-gray-700 bg-opacity-60 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
                                <h3 className="text-xl font-semibold mb-4">Edit Contact Info</h3>

                                {contacts.map((contact, index) => (
                                    <div key={index} className="mb-4">
                                        <select
                                            className="w-full mb-2 p-2 rounded border border-gray-300"
                                            value={contact.type}
                                            onChange={(e) => {
                                                const updated = [...contacts];
                                                updated[index].type = e.target.value as 'phone' | 'email';
                                                setContacts(updated);
                                            }}
                                        >
                                            <option value="phone">Phone</option>
                                            <option value="email">Email</option>
                                        </select>
                                        <input
                                            className="w-full p-2 rounded border border-gray-300"
                                            value={contact.value}
                                            onChange={(e) => {
                                                const updated = [...contacts];
                                                updated[index].value = e.target.value;
                                                setContacts(updated);
                                            }}
                                        />
                                    </div>
                                ))}

                                <div className="flex justify-between mt-4">
                                    <button
                                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                        onClick={() => {
                                            console.log('Updated Contact Info:', contacts);
                                            setShowContactModal(false);
                                        }}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                                        onClick={() => setShowContactModal(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* <!-- End Topbar --> */}
                {/* <!-- Header Inner --> */}
                <div className="header-inner">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                    {/* <!-- Start Logo --> */}
                                    <div className="logo">
                                        <a href="index.html"><img src={logo} alt="#" /></a>
                                    </div>
                                    {/* <!-- End Logo --> */}
                                    {/* <!-- Mobile Nav --> */}
                                    <div className="mobile-nav"></div>
                                    {/* <!-- End Mobile Nav --> */}
                                </div>
                                <div className="col-lg-7 col-md-9 col-12">
                                    {/* <!-- Main Menu --> */}
                                    <div className="main-menu">
                                        <nav className="navigation">
                                            <ul className="nav menu">
                                                <li><a href="#">Home </a></li>
                                                <li><a href="#">Doctos </a></li>
                                                <li><a href="#">Services </a></li>
                                                <li><a href="#">Pages </a></li>
                                                <li><a href="#">Home </a></li>
                                                <li><a href="#">Bloges</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* <!--/ End Main Menu --> */}
                                </div>
                                <div className="col-lg-2 col-12">
                                    <div className="get-quote">
                                        <a href="appointment.html" className="btn">Book Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ End Header Inner --> */}
            </header>
            {/* <!-- End Header Area --> */}

            {/* <!-- Slider Area --> */}
            <HeroBanner />
            {/* <!--/ End Slider Area --> */}

            {/* <!-- Start Schedule Area --> */}
            <section className="schedule">
                <div className="container">
                    <div className="schedule-inner">

                        <div className="row">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                                {schedules.map((item, idx) => (
                                    <div key={idx} className="single-schedule first">
                                        <div className='inner'>
                                            <div className="icon">
                                                <i className={item.iconClass}></i>
                                            </div>
                                            <div className='single-content'>
                                                <span className="single-content">{item.spanText}</span>
                                                <h4 className="text-xl font-semibold">{item.heading}</h4>
                                                {item.description && <p className="mt-2 text-white">{item.description}</p>}
                                                {item.listItems && (
                                                    <ul className="mt-2 space-y-1 text-white" dangerouslySetInnerHTML={{ __html: item.listItems.map(li => `<li className='text-white'>${li}</li>`).join('') }} />
                                                )}

                                                <a href="#">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
                                                <button
                                                    onClick={() => openModal(idx)}
                                                    className="absolute top-4 right-4 text-sm bg-gray-100 px-2 py-1 rounded hover:bg-gray-200"
                                                >
                                                    ✏️ Edit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {showModal && (
                                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                                            <h3 className="text-xl font-semibold mb-4">Edit Schedule</h3>
                                            <input
                                                name="iconClass"
                                                value={formData.iconClass}
                                                onChange={handleChange}
                                                placeholder="Icon Class"
                                                className="w-full border p-2 rounded mb-2"
                                            />
                                            <input
                                                name="spanText"
                                                value={formData.spanText}
                                                onChange={handleChange}
                                                placeholder="Span Text"
                                                className="w-full border p-2 rounded mb-2"
                                            />
                                            <input
                                                name="heading"
                                                value={formData.heading}
                                                onChange={handleChange}
                                                placeholder="Heading"
                                                className="w-full border p-2 rounded mb-2"
                                            />
                                            {formData.listItems ? (
                                                formData.listItems.map((item, i) => (
                                                    <input
                                                        key={i}
                                                        value={item}
                                                        onChange={(e) => handleListChange(i, e.target.value)}
                                                        placeholder={`List Item ${i + 1}`}
                                                        className="w-full border p-2 rounded mb-2"
                                                    />
                                                ))
                                            ) : (
                                                <textarea
                                                    name="description"
                                                    value={formData.description}
                                                    onChange={handleChange}
                                                    placeholder="Description"
                                                    className="w-full border p-2 rounded mb-2"
                                                />
                                            )}
                                            <div className="flex justify-end gap-2 mt-4">
                                                <button onClick={() => setShowModal(false)} className="bg-gray-300 text-black px-4 py-2 rounded">
                                                    Cancel
                                                </button>
                                                <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            {/* <!--/End Start schedule Area --> */}

            {/* <!-- Start Feautes --> */}
            <section className="Feautes section">
                <div className="container ">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold">{sectionHeading}</h2>
                        <img className="mx-auto my-4" src={sectionImg} alt="section decoration" />
                        <p className="text-gray-600">{sectionDesc}</p>
                        <button
                            onClick={() => setShowSectionEdit(true)}
                            className="text-sm text-blue-500 underline mt-2"
                        >
                            ✏️ Edit Section
                        </button>
                    </div>
                    {/* <div className="single-features">
                                <div className="signle-icon">
                                    <i className="icofont icofont-ambulance-cross"></i>
                                </div>
                                <h3>Emergency Help</h3>
                                <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                            </div> */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, idx) => (
                            <div key={idx} className="single-features">
                                <div className="signle-icon">
                                    <i className={item.iconClass}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                                <button
                                    onClick={() => openModalFeature(idx)}
                                    className="absolute top-3 right-3 text-sm bg-gray-100 px-2 py-1 rounded hover:bg-gray-200"
                                >
                                    ✏️
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Feature Modal */}
                {showModalFeature && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded p-6 w-full max-w-md">
                            <h3 className="text-lg font-semibold mb-4">Edit Feature</h3>
                            <input
                                name="iconClass"
                                value={formDataFeature.iconClass}
                                onChange={handleChangeFeature}
                                placeholder="Icon Class"
                                className="w-full border p-2 rounded mb-2"
                            />
                            <input
                                name="title"
                                value={formDataFeature.title}
                                onChange={handleChangeFeature}
                                placeholder="Title"
                                className="w-full border p-2 rounded mb-2"
                            />
                            <textarea
                                name="description"
                                value={formDataFeature.description}
                                onChange={handleChangeFeature}
                                placeholder="Description"
                                className="w-full border p-2 rounded mb-2"
                            />
                            <div className="flex justify-end gap-2">
                                <button onClick={() => setShowModalFeature(false)} className="bg-gray-300 px-4 py-2 rounded">
                                    Cancel
                                </button>
                                <button onClick={handleSaveFeature} className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Section Edit Modal */}
                {showSectionEdit && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded p-6 w-full max-w-md">
                            <h3 className="text-lg font-semibold mb-4">Edit Section</h3>
                            <input
                                value={sectionHeading}
                                onChange={(e) => setSectionHeading(e.target.value)}
                                placeholder="Section Heading"
                                className="w-full border p-2 rounded mb-2"
                            />
                            <textarea
                                value={sectionDesc}
                                onChange={(e) => setSectionDesc(e.target.value)}
                                placeholder="Section Description"
                                className="w-full border p-2 rounded mb-2"
                            />
                            <div className="flex justify-end gap-2">
                                <button onClick={() => setShowSectionEdit(false)} className="bg-gray-300 px-4 py-2 rounded">
                                    Cancel
                                </button>
                                <button onClick={() => setShowSectionEdit(false)} className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            {/* <!--/ End Feautes --> */}

            {/* <div className="single-fun">
                                <i className="icofont icofont-home"></i>
                                <div className="content">
                                    <span className="counter">3468</span>
                                    <p>Hospital Rooms</p>
                                </div>
                            </div> */}
            {/* <!-- Start Fun-facts --> */}
            <div id="fun-facts" className="fun-facts section overlay">
                <div className="container">
                    <div className="row">
                        {facts.map((item, idx) => (
                            <div className="col-lg-3 col-md-6 col-12">
                                <div key={idx} className="single-fun">
                                    <div>
                                        <i className={`icofont ${item.iconClass}`}></i>
                                    </div>
                                    <div className="content">
                                        <span className="counter">{item.count}</span>
                                        <div className='text-white '>{item.label}</div>
                                    </div>
                                    <button
                                        onClick={() => openModalFacts(idx)}
                                        className="absolute text-sm bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                                    >
                                        ✏️ Edit
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {showModalFacts && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded w-full max-w-md">
                            <h3 className="text-xl font-semibold mb-4">Edit Fun Fact</h3>
                            <input
                                name="iconClass"
                                value={formDataFacts.iconClass}
                                onChange={handleChangeFacts}
                                placeholder="Icon Class"
                                className="w-full border p-2 rounded mb-2"
                            />
                            <input
                                name="count"
                                type="number"
                                value={formDataFacts.count}
                                onChange={handleChangeFacts}
                                placeholder="Count"
                                className="w-full border p-2 rounded mb-2"
                            />
                            <input
                                name="label"
                                value={formDataFacts.label}
                                onChange={handleChangeFacts}
                                placeholder="Label"
                                className="w-full border p-2 rounded mb-2"
                            />
                            <div className="flex justify-end gap-2 mt-4">
                                <button onClick={() => setShowModalFacts(false)} className="bg-gray-300 text-black px-4 py-2 rounded">
                                    Cancel
                                </button>
                                <button onClick={handleSaveFacts} className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div >
            {/* <!--/ End Fun-facts --> */}

            {/* <!-- Start Why choose --> */}
            <section className="why-choose section" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title p-4 md:p-96">
                                <h2>We Offer Different Services To Improve Your Health</h2>
                                <img className="mx-auto" src={sectionImg} alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            {/* <!-- Start Choose Left --> */}
                            <div className="choose-left">
                                <h3>Who We Are</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo. </p>
                                <p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list">
                                            <li><i className="fa fa-caret-right"></i>Maecenas vitae luctus nibh. </li>
                                            <li><i className="fa fa-caret-right"></i>Duis massa massa.</li>
                                            <li><i className="fa fa-caret-right"></i>Aliquam feugiat interdum.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list">
                                            <li><i className="fa fa-caret-right"></i>Maecenas vitae luctus nibh. </li>
                                            <li><i className="fa fa-caret-right"></i>Duis massa massa.</li>
                                            <li><i className="fa fa-caret-right"></i>Aliquam feugiat interdum.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Choose Left --> */}
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* <!-- Start Choose Rights --> */}
                            <div className="choose-right">
                                <div className="video-image">
                                    {/* <!-- Video Animation --> */}
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1"></div>
                                            <div className="waves wave-2"></div>
                                            <div className="waves wave-3"></div>
                                        </div>
                                    </div>
                                    {/* <!--/ End Video Animation --> */}
                                    <a href="https://www.youtube.com/watch?v=RFVXy6CRVR4" className="video video-popup mfp-iframe"><i className="fa fa-play"></i></a>
                                </div>
                            </div>
                            {/* <!-- End Choose Rights --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ End Why choose --> */}

            {/* <!-- Start Call to action --> */}
            <section className="call-action overlay" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="content">
                                <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.</p>
                                <div className="button">
                                    <a href="#" className="btn">Contact Now</a>
                                    <a href="#" className="btn second">Learn More<i className="fa fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ End Call to action --> */}

            {/* <!-- Start portfolio --> */}
            {/* <section className="portfolio section" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                                <img className="mx-auto" src={sectionImg} alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="owl-carousel portfolio-slider">
                                <div className="single-pf">
                                    <img src={pf1} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf2} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf3} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf4} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf1} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf2} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf3} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf4} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!--/ End portfolio --> */}

            {/* <!-- Start service --> */}
            <section className="services section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Offer Different Services To Improve Your Health</h2>
                                <img className="mx-auto" src={sectionImg} alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Single Service --> */}
                            <div className="single-service">
                                <i className="icofont icofont-prescription"></i>
                                <h4><a href="service-details.html">General Treatment</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>
                            </div>
                            {/* <!-- End Single Service --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Single Service --> */}
                            <div className="single-service">
                                <i className="icofont icofont-tooth"></i>
                                <h4><a href="service-details.html">Teeth Whitening</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>
                            </div>
                            {/* <!-- End Single Service --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Single Service --> */}
                            <div className="single-service">
                                <i className="icofont icofont-heart-alt"></i>
                                <h4><a href="service-details.html">Heart Surgery</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>
                            </div>
                            {/* <!-- End Single Service --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Single Service --> */}
                            <div className="single-service">
                                <i className="icofont icofont-listening"></i>
                                <h4><a href="service-details.html">Ear Treatment</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>
                            </div>
                            {/* <!-- End Single Service --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Single Service --> */}
                            <div className="single-service">
                                <i className="icofont icofont-eye-alt"></i>
                                <h4><a href="service-details.html">Vision Problems</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>
                            </div>
                            {/* <!-- End Single Service --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Single Service --> */}
                            <div className="single-service">
                                <i className="icofont icofont-blood"></i>
                                <h4><a href="service-details.html">Blood Transfusion</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>
                            </div>
                            {/* <!-- End Single Service --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ End service --> */}

            {/* <!-- Pricing Table --> */}
            <section className="pricing-table section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Provide You The Best Treatment In Resonable Price</h2>
                                <img className="mx-auto" src={sectionImg} alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* <!-- Single Table --> */}
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="single-table">
                                {/* <!-- Table Head --> */}
                                <div className="table-head">
                                    <div className="icon">
                                        <i className="icofont icofont-ui-cut"></i>
                                    </div>
                                    <h4 className="title">Plastic Suggery</h4>
                                    <div className="price">
                                        <p className="amount">$199<span>/ Per Visit</span></p>
                                    </div>
                                </div>
                                {/* <!-- Table List --> */}
                                <ul className="table-list">
                                    <li><i className="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
                                    <li><i className="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Nullam interdum enim</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Donec ultricies metus</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Pellentesque eget nibh</li>
                                </ul>
                                <div className="table-bottom">
                                    <a className="btn" href="#">Book Now</a>
                                </div>
                                {/* <!-- Table Bottom --> */}
                            </div>
                        </div>
                        {/* <!-- End Single Table--> */}
                        {/* <!-- Single Table --> */}
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="single-table">
                                {/* <!-- Table Head --> */}
                                <div className="table-head">
                                    <div className="icon">
                                        <i className="icofont icofont-tooth"></i>
                                    </div>
                                    <h4 className="title">Teeth Whitening</h4>
                                    <div className="price">
                                        <p className="amount">$299<span>/ Per Visit</span></p>
                                    </div>
                                </div>
                                {/* <!-- Table List --> */}
                                <ul className="table-list">
                                    <li><i className="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
                                    <li><i className="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
                                    <li><i className="icofont icofont-ui-check"></i>Nullam interdum enim</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Donec ultricies metus</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Pellentesque eget nibh</li>
                                </ul>
                                <div className="table-bottom">
                                    <a className="btn" href="#">Book Now</a>
                                </div>
                                {/* <!-- Table Bottom --> */}
                            </div>
                        </div>
                        {/* <!-- End Single Table--> */}
                        {/* <!-- Single Table --> */}
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="single-table">
                                {/* <!-- Table Head --> */}
                                <div className="table-head">
                                    <div className="icon">
                                        <i className="icofont-heart-beat"></i>
                                    </div>
                                    <h4 className="title">Heart Suggery</h4>
                                    <div className="price">
                                        <p className="amount">$399<span>/ Per Visit</span></p>
                                    </div>
                                </div>
                                {/* <!-- Table List --> */}
                                <ul className="table-list">
                                    <li><i className="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
                                    <li><i className="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
                                    <li><i className="icofont icofont-ui-check"></i>Nullam interdum enim</li>
                                    <li><i className="icofont icofont-ui-check"></i>Donec ultricies metus</li>
                                    <li><i className="icofont icofont-ui-check"></i>Pellentesque eget nibh</li>
                                </ul>
                                <div className="table-bottom">
                                    <a className="btn" href="#">Book Now</a>
                                </div>
                                {/* <!-- Table Bottom --> */}
                            </div>
                        </div>
                        {/* <!-- End Single Table--> */}
                    </div>
                </div>
            </section>
            {/* <!--/ End Pricing Table --> */}



            {/* <!-- Start Blog Area --> */}
            <section className="blog section" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Keep up with Our Most Recent Medical News.</h2>
                                <img className="mx-auto" src={sectionImg} alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Single Blog --> */}
                            <div className="single-news">
                                <div className="news-head">
                                    <img src={blog1} alt="#" />
                                </div>
                                <div className="news-body">
                                    <div className="news-content">
                                        <div className="date">22 Aug, 2020</div>
                                        <h2><a href="blog-single.html">We have annnocuced our new product.</a></h2>
                                        <p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Blog --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Single Blog --> */}
                            <div className="single-news">
                                <div className="news-head">
                                    <img src={blog2} alt="#" />
                                </div>
                                <div className="news-body">
                                    <div className="news-content">
                                        <div className="date">15 Jul, 2020</div>
                                        <h2><a href="blog-single.html">Top five way for solving teeth problems.</a></h2>
                                        <p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Blog --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Single Blog --> */}
                            <div className="single-news">
                                <div className="news-head">
                                    <img src={blog3} alt="#" />
                                </div>
                                <div className="news-body">
                                    <div className="news-content">
                                        <div className="date">05 Jan, 2020</div>
                                        <h2><a href="blog-single.html">We provide highly business soliutions.</a></h2>
                                        <p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Blog --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Blog Area --> */}

            {/* <!-- Start clients --> */}
            <div className="clients overlay py-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-6 items-center">
                        {clients.map((client, index) => (
                            <div key={index} className="single-clients z-10">
                                <img src={client} alt={`client-${index}`} className="h-16 w-auto object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!--/Ens clients --> */}

            {/* <!-- Start Appointment --> */}
            <section className="appointment">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                                <img className="mx-auto" src={sectionImg} alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <form className="form" action="#">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="name" type="text" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="email" type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="phone" type="text" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="nice-select form-control wide" ><span className="current">Department</span>
                                                <ul className="list">
                                                    <li data-value="1" className="option selected ">Department</li>
                                                    <li data-value="2" className="option">Cardiac Clinic</li>
                                                    <li data-value="3" className="option">Neurology</li>
                                                    <li data-value="4" className="option">Dentistry</li>
                                                    <li data-value="5" className="option">Gastroenterology</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="nice-select form-control wide"><span className="current">Doctor</span>
                                                <ul className="list">
                                                    <li data-value="1" className="option selected ">Doctor</li>
                                                    <li data-value="2" className="option">Dr. Akther Hossain</li>
                                                    <li data-value="3" className="option">Dr. Dery Alex</li>
                                                    <li data-value="4" className="option">Dr. Jovis Karon</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input type="text" placeholder="Date" id="datepicker" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Write Your Message Here....."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 col-md-4 col-12">
                                        <div className="form-group">
                                            <div className="button">
                                                <button type="submit" className="btn">Book An Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-8 col-12">
                                        <p>( We will be confirm by an Text Message )</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 ">
                            <div className="appointment-image">
                                <img src={contactImg} alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Appointment --> */}

            {/* <!-- Start Newsletter Area --> */}
            <section className="newsletter section">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6  col-12">
                            {/* <!-- Start Newsletter Form --> */}
                            <div className="subscribe-text ">
                                <h6>Sign up for newsletter</h6>
                                <p className="">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,<br /> homero alterum.</p>
                            </div>
                            {/* <!-- End Newsletter Form --> */}
                        </div>
                        <div className="col-lg-6  col-12">
                            {/* <!-- Start Newsletter Form --> */}
                            <div className="subscribe-form ">
                                <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                    <input name="EMAIL" placeholder="Your email address" className="common-input"
                                        type="email" />
                                    <button className="btn">Subscribe</button>
                                </form>
                            </div>
                            {/* <!-- End Newsletter Form --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /End Newsletter Area --> */}

            {/* <!-- Footer Area --> */}
            <footer id="footer" className="footer ">
                {/* <!-- Footer Top --> */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <h2>About Us</h2>
                                    <p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
                                    {/* <!-- Social --> */}
                                    <ul className="social">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-google-plus"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-vimeo"></i></a></li>
                                        <li><a href="#"><i className="icofont-pinterest"></i></a></li>
                                    </ul>
                                    {/* <!-- End Social --> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer f-link">
                                    <h2>Quick Links</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
                                                <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
                                                <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Services</a></li>
                                                <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Our Cases</a></li>
                                                <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Other Links</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Consuling</a></li>
                                                <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Finance</a></li>
                                                <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Testimonials</a></li>
                                                <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li>
                                                <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <h2>Open Hours</h2>
                                    <p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
                                    <ul className="time-sidual">
                                        <li className="day">Monday - Fridayp <span>8.00-20.00</span></li>
                                        <li className="day">Saturday <span>9.00-18.30</span></li>
                                        <li className="day">Monday - Thusday <span>9.00-15.00</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <h2>Newsletter</h2>
                                    <p>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                                    <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                        <input name="email" placeholder="Email Address" className="common-input"
                                            type="email" />
                                        <button className="button"><i className="icofont icofont-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ End Footer Top --> */}
                {/* <!-- Copyright --> */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="copyright-content">
                                    <p>© Copyright 2018  |  All Rights Reserved by <a href="https://www.wpthemesgrid.com" target="_blank">wpthemesgrid.com</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ End Copyright --> */}
            </footer>
            {/* <!--/ End Footer Area --> */}

        </>
    );
}

export default Theme1Index;