import { useEffect, useRef, useState } from 'react';
import './css/bootstrap.css';
import './css/responsive.css';
import './css/style.css';
import './css/style.scss';
import logo from './images/logo.png';
import imagesSlider from './images/slider-img.png';
import imagesExperience from './images/experience-img.jpg';
import imagesC1 from './images/c1.png';
import imagesC2 from './images/c2.png';
import imagesC3 from './images/c3.png';
import imagesC4 from './images/c4.png';
import imagesC5 from './images/c5.png';
import imagesC6 from './images/c6.png';
import imagesAbout from './images/about-img.jpg';
import imagesF1 from './images/f1.png';
import imagesF2 from './images/f2.png';
import imagesF3 from './images/f3.png';
import imagesF4 from './images/f4.png';
import imagesFreelance from './images/freelance-img.jpg';
import imagesQuote from './images/quote.png';
import imagesFb from './images/fb.png';
import imagesTwitter from './images/twitter.png';
import imageLinkedin from './images/linkedin.png';
import imageInstagram from './images/instagram.png';
import imageYoutube from './images/youtube.png';
import imageMail from './images/mail.png';
import imageCall from './images/call.png';
import imageLocation from './images/location.png';
import EditDataModal from './EditDataModal';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import api from '../../../url';
import { Tag, X } from 'lucide-react';
// Reusable EditableImage component
interface EditableImageProps {
  src: string;
  alt: string;
  onSave: (newImage: string) => void;
  fieldId: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ src, alt, onSave, fieldId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleSave = () => {
    if (imageUrl) {
      onSave(imageUrl);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="position-relative">
        <img src={src} alt={alt} className="img-fluid max-w-xs" />
        {/* <i
          className="bi bi-pencil-square position-absolute"
          style={{ top: '10px', right: '10px', cursor: 'pointer', fontSize: '1.2rem', color: 'white', background: 'rgba(0,0,0,0.5)', padding: '5px' }}
          onClick={() => setIsModalOpen(true)}
        ></i> */}
      </div>

      <div className={`modal fade ${isModalOpen ? 'show d-block' : ''}`} tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Image</h5>
              <button type="button" className="close" onClick={() => setIsModalOpen(false)}>
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Enter image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="form-control"
              />
              <p className="mt-2">Note: In a real app, use a file input to upload an image.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

// Modal for editing background image
interface ImageEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newImage: string) => void;
  section: string;
}

const ImageEditModal: React.FC<ImageEditModalProps> = ({ isOpen, onClose, onSave, section }) => {
  const [imageUrl, setImageUrl] = useState('');

  const handleSave = () => {
    if (imageUrl) {
      onSave(imageUrl);
      onClose();
    }
  };

  return (
    <>
      <div className={`modal fade ${isOpen ? 'show d-block' : ''}`} tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change {section} Background Image</h5>
              <button type="button" className="close" onClick={onClose}>
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Enter image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="form-control"
              />
              <p className="mt-2">Note: In a real app, use a file input to upload an image.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

function Theme2Index() {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [profileData, setProfileData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [sliderText, setSliderText] = useState({
    title: '',
    description: '',
  });
  const [experienceText, setExperienceText] = useState({
    title: '',
    description: '',
  });
  const [aboutText, setAboutText] = useState({
    title: '',
    description: '',
    image: ''
  });
  const [clientTextList, setClientTextList] = useState<any[]>([]);

  const [categoryText, setCategoryText] = useState([]);
  const [footerText, setFooterText] = useState({
    offices: '',
    information: '',
    email: '',
    phone: '',
    copyright: '',
  });

  const getFullUrl = (url: any) => {
    if (!url) return "#";
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
};

  const [freelanceHeader, setFreelanceHeader] = useState('');

  const [freelanceStats, setFreelanceStats] = useState<any[]>([]);
  const [headerText, setHeaderText] = useState('Spering');


  const [images, setImages] = useState({
    logo: logo,
    slider: imagesSlider,
    experience: imagesExperience,
    freelance: imagesFreelance,
    quote: imagesQuote,
    fb: imagesFb,
    twitter: imagesTwitter,
    linkedin: imageLinkedin,
    instagram: imageInstagram,
    youtube: imageYoutube,
    mail: imageMail,
    call: imageCall,
    location: imageLocation,
  });
  const categorysImage: any[] = [
    { image: imagesC1 },
    { image: imagesC2 },
    { image: imagesC3 },
    { image: imagesC4 },
    { image: imagesC5 },
    { image: imagesC6 },
  ];

  const freelanceImage = [
    { image: imagesF1 },
    { image: imagesF2 },
    { image: imagesF3 },
    { image: imagesF4 },

  ]


  const [backgroundImages, setBackgroundImages] = useState({
    slider: '',
    experience: '',
    category: '',
    about: '',
    freelance: '',
    client: '',
    info: '',
  });

  const [backgroundModal, setBackgroundModal] = useState({
    isOpen: false,
    section: '',
  });

  const updateImage = (key: keyof typeof images, newUrl: string) => {
    setImages((prev) => ({ ...prev, [key]: newUrl }));
  };

  const updateBackgroundImage = (section: keyof typeof backgroundImages, newUrl: string) => {
    setBackgroundImages((prev) => ({ ...prev, [section]: newUrl }));
  };

  const getProfile = async () => {
    try {
      const response: any = await axios.get(`${api.website}/get?sub_domain=http://${id}.ftdigitalsolutions.org`, {
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
  }, []);

  const hasSetText = useRef(false);
  useEffect(() => {
    if (profileData && !hasSetText.current) {
      // experinceData
      if (profileData?.experinceData) {
        setExperienceText({
          title: profileData?.experinceData?.title,
          description: profileData?.experinceData?.description,
        });
      }
      // sliderData
      if (profileData?.sliderData) {
        setSliderText({
          title: profileData?.sliderData?.title,
          description: profileData?.sliderData?.description,
        })
      }
      // setAboutText
      if (profileData?.aboutData) {
        setAboutText({
          title: profileData?.aboutData?.title,
          description: profileData?.aboutData?.description,
          image: imagesAbout
        })
      }
      // setFooterText
      if (profileData?.footer) {
        setFooterText({
          copyright: profileData?.footer?.copyright,
          email: profileData?.footer?.email,
          information: profileData?.footer?.information,
          offices: profileData?.footer?.offices,
          phone: profileData?.footer?.phone
        })
      }
      // categoryData
      if (profileData.categoryData?.length) {
        const mappedCategories = profileData?.categoryData.map((item: any, index: number) => ({
          index: index,
          text: item.text || "",
          image: item.image || "",
        }));
        setCategoryText(mappedCategories);
      }
      if (profileData.freelanceData) {
        setFreelanceHeader(profileData?.freelanceData?.title)
        const mappedFreeLanceData = profileData?.freelanceData?.works?.map((item: any) => ({
          img: item?.img,
          value: item?.count,
          title: item?.tittle
        }));
        setFreelanceStats(mappedFreeLanceData);
      }
      if (profileData?.feedbackData?.feedback) {
        const mappedFeedBackData = profileData?.feedbackData?.feedback?.map((item: any) => ({
          name: item?.name,
          description: item?.description,
        }));
        setClientTextList(mappedFeedBackData);
      }


      hasSetText.current = true;
    }

  }, [profileData]);
console.log(clientTextList)



  useEffect(() => {
    if (sliderText?.title && profileData?.sliderData || sliderText?.description && profileData?.sliderData) {
      const postSliderData = async () => {
        setLoading(true);
        try {
          const response: any = await axios.post(api.websiteCreate, {
            sliderData: {
              title: sliderText?.title,
              description: sliderText?.description,
            },
            sub_domain: profileData?.sub_domain ? profileData?.sub_domain : `${id}`,
            // sub_domain: profileData?.domain ? profileData?.domain : `http://${id}.ftdigitalsolutions.org`,
            theme_id: 'Theme2'
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response) {
            setLoading(false);
          }

          console.log(response?.data);
        } catch (error: any) {
          setLoading(false);
          console.error(error);
        }
      };

      postSliderData();
    }
  }, [sliderText]);

  // experienceText

  useEffect(() => {
    if (experienceText?.title && profileData?.experinceData || experienceText?.description && profileData?.experinceData) {
      const postExperience = async () => {
        setLoading(true);
        try {
          const response: any = await axios.post(api.websiteCreate,
            {
              experinceData: {
                description: experienceText?.description,
                title: experienceText?.title
              },
              sub_domain: profileData?.sub_domain ? profileData?.sub_domain : `${id}`,
              // sub_domain: profileData?.domain ? profileData?.domain : `http://${id}.ftdigitalsolutions.org`,
            }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response) {

            setLoading(false);
          }
          // console.log(response?.data);
        } catch (error: any) {
          setLoading(false);
        }
      };

      postExperience();
    }
  }, [experienceText]);
  // experienceText

  // categoryText
  useEffect(() => {
    if (categoryText && profileData?.categoryData) {
      const postCategories = async () => {
        setLoading(true);
        try {
          const response = await axios.post(api.websiteCreate, {
            categoryData: categoryText, // Send array as-is
            sub_domain: profileData?.sub_domain ? profileData?.sub_domain : `${id}`,
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response) {
            setLoading(false);
          }
          // console.log(response.data);
        } catch (error: any) {
          setLoading(false);
          // console.error(error?.response);
        }
      };

      postCategories();
    }
  }, [categoryText])
  // categoryText

  // aboutText
  useEffect(() => {
    if (aboutText.title || aboutText.description) {
      const postAboutData = async () => {
        setLoading(true);
        try {
          const response: any = await axios.post(
            `${api.websiteCreate}`,
            {
              aboutData: {
                title: aboutText?.title,
                description: aboutText?.description,
              },
              sub_domain: profileData?.sub_domain ? profileData?.sub_domain : `${id}`,

            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response) {
            setLoading(false);
          }
          // console.log("✅ About Data Posted:", response?.data);
        } catch (error: any) {
          setLoading(false);
          // console.error("❌ Error posting about data:", error?.response || error);
        }
      };
      postAboutData();
    }
  }, [aboutText]);

  // freelanceHeader
  useEffect(() => {
    if (freelanceHeader && profileData || freelanceStats?.length && profileData) {
      const postClientText = async () => {
        setLoading(true);
        try {
          const payload = {
            freelanceData: {
              title: freelanceHeader,
              works: freelanceStats?.map((item): any => ({
                tittle: item?.title,
                count: item?.value,
                img: item?.img
              })),
            },
            sub_domain: profileData?.sub_domain ? profileData?.sub_domain : `${id}`,
          };
          console.log(payload)
          const response = await axios.post(api.websiteCreate, payload, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (response) {
            setLoading(false);
          }
          // console.log('✅ Feedback posted:', response?.data);
        } catch (error: any) {
          setLoading(false);
          // console.error('❌ Error posting feedback:', error?.response || error);
        }
      };
      postClientText();
    }
  }, [freelanceHeader, freelanceStats])

  useEffect(() => {
    if (clientTextList?.length) {
      const postFeedback = async () => {
        setLoading(true);
        try {
          const payload = {
            feedbackData: {
              feedback: clientTextList.map((item):any => ({
                name:item?.name,
                description:item?.description
              })),
            },
            sub_domain: profileData?.sub_domain ? profileData?.sub_domain : `${id}`,
          };

          const response = await axios.post(api.websiteCreate, payload, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (response) {
            setLoading(false);
          }
          // console.log('✅ Feedback posted:', response?.data);
        } catch (error: any) {
          // console.error('❌ Error posting feedback:', error?.response || error);
        }
      };
      postFeedback();
    }

  }, [clientTextList]);

  useEffect(() => {
    if (footerText?.copyright || footerText?.email || footerText?.information || footerText?.offices || footerText?.phone) {
      const postFooter = async () => {
        setLoading(true);
        try {
          const payload = {
            footer: {
              offices: footerText.offices,
              information: footerText.information,
              email: footerText.email,
              phone: footerText.phone,
              copyright: footerText.copyright,
            },
            sub_domain: profileData?.sub_domain ? profileData?.sub_domain : `${id}`,
          };

          const response = await axios.post(api?.websiteCreate, payload, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (response) {
            setLoading(false);
          }
          // console.log('✅ Footer data posted:', response?.data);
        } catch (error: any) {
          // console.error('❌ Error posting footer data:', error?.response || error);
        }
      };

      postFooter();
    }
  }, [footerText]);

  return (
    <>
      {profileData && (
        <>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
          {/* <div className="flex gap-1 justify-end flex-wrap p-2">
            <button
              className="px-4 py-2 text-white-600 rounded-md bg-blue-500 hover:bg-blue-500 hover:text-white  flex gap-1 border-2"
              onClick={() => navigate('/profile')}
            >
              Submit
            </button>

          </div> */}
          <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 flex-wrap">
          <div className="flex items-center gap-2 text-white">
            <p className="text-sm font-medium my-auto">
            Your dynamic website has been successfully created
              <span className="font-bold cursor-pointer ml-1 hover:text-red-400" 
               onClick={() => window.open(getFullUrl(profileData?.domain), "_blank")}
              >-  Click here to view it</span>
            </p>
          </div>
          <button
              className="px-4 py-1 text-white-600 rounded-md bg-white hover:bg-blue-500 hover:text-black  flex gap-1 border-2"
              onClick={() => navigate('/profile')}
            >
              Submit
            </button>
        </div>
      </div>
    </div>
          <div className="hero_area">
            {/* Header Section */}
            <header className="header_section">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                  <a className="navbar-brand" href="index.html">
                    <EditableImage
                      src={logo}
                      alt="Logo"
                      onSave={(newUrl) => updateImage('logo', newUrl)}
                      fieldId="header-logo"
                    />
                    {/* <EditDataModal
                  text={headerText}
                  onSave={setHeaderText}
                  isHeader
                  fieldId="header-title"
                /> */}
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="work.html">Work</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="category.html">Category</a>
                      </li>
                    </ul>
                    <div className="user_option">
                      <a href="">
                        <span>Login</span>
                      </a>
                      <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                        <button className="btn my-2 my-sm-0 nav_search-btn" type="submit"></button>
                      </form>
                    </div>
                  </div>
                  <div>
                    <div className="custom_menu-btn">
                      <button>
                        <span className="s-1"></span>
                        <span className="s-2"></span>
                        <span className="s-3"></span>
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </header>
            {/* Slider Section */}
            <section className="slider_section" style={{ backgroundImage: backgroundImages.slider ? `url(${backgroundImages.slider})` : '' }}>
              <div className="carousel_btn-container">
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
                </ol>
                <div className="carousel-inner">
                  {[0, 1, 2].map((index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-5 offset-md-1">
                            <div className="detail-box">
                              <EditDataModal
                                text={sliderText.title}
                                onSave={(newText: any) => setSliderText({ ...sliderText, title: newText })}
                                isHeader
                                fieldId={`slider-title-${index}`}
                                loading={loading}
                              />
                              <EditDataModal
                                text={sliderText.description}
                                onSave={(newText: any) => setSliderText({ ...sliderText, description: newText })}
                                fieldId={`slider-desc-${index}`}
                                loading={loading}
                              />
                              <div className="btn-box">
                                <a href="" className="btn-1">About Us</a>
                                <a href="" className="btn-2">Get A Quote</a>
                              </div>
                            </div>
                          </div>
                          <div className="offset-md-1 col-md-4 img-container">
                            <div className="img-box">
                              <EditableImage
                                src={images.slider}
                                alt="Slider"
                                onSave={(newUrl) => updateImage('slider', newUrl)}
                                fieldId={`slider-img-${index}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Experience Section */}
          <section className="experience_section layout_padding" style={{ backgroundImage: backgroundImages.experience ? `url(${backgroundImages.experience})` : '' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="img-box">
                    <EditableImage
                      src={images.experience}
                      alt="Experience"
                      onSave={(newUrl) => updateImage('experience', newUrl)}
                      fieldId="experience-img"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="detail-box">
                    <div className="heading_container">
                      <EditDataModal
                        text={experienceText?.title}
                        onSave={(newText: any) => setExperienceText({ ...experienceText, title: newText })}
                        isHeader
                        fieldId="experience-title"
                        loading={loading}
                      />
                    </div>
                    <EditDataModal
                      text={experienceText?.description}
                      onSave={(newText: any) => setExperienceText({ ...experienceText, description: newText })}
                      fieldId="experience-desc"
                      loading={loading}
                    />
                    <div className="btn-box">
                      <a href="" className="btn-1">Read More</a>
                      <a href="" className="btn-2">Hire</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Category Section */}
          <section className="category_section layout_padding" style={{ backgroundImage: backgroundImages.category ? `url(${backgroundImages.category})` : '' }}>
            <div className="container">
              <div className="heading_container">
                <h2>Category</h2>
              </div>
              {/* <div className="category_container">
            {categoryText.map((title, index) => (
              <div className="box" key={index}>
                <div className="img-box">
                  <EditableImage
                    src={[images.c1, images.c2, images.c3, images.c4, images.c5, images.c6][index]}
                    alt={`Category ${index + 1}`}
                    onSave={(newUrl) => updateImage(`c${index + 1}` as keyof typeof images, newUrl)}
                    fieldId={`category-img-${index}`}
                  />
                </div>
                <div className="detail-box">
                  <EditDataModal
                    text={title}
                    onSave={(newText:any) => {
                      const newCategories = [...categoryText];
                      newCategories[index] = newText;
                      setCategoryText(newCategories);
                    }}
                    isHeader
                    fieldId={`category-${index}`}
                  />
                </div>
              </div>
            ))}
          </div> */}
              <div className="category_container">
                {categoryText?.map((category: any, index:any) => (
                  <div className="box" key={index}>
                    <div className="img-box">
                      {/* <EditableImage
                src={`category.image`}
                alt={`Category ${index + 1}`}
                onSave={(newUrl) => {
                  const newData = [...categoryText];
                  newData[index].image = newUrl;
                  setCategoryText(newData);
                }}
                fieldId={`category-img-${index}`}
              /> */}
                      {/* <img src={category?.image} /> */}
                      <img
                        src={categorysImage[index]?.image}
                        alt={`Category ${index + 1}`}
                      />

                    </div>
                    <div className="detail-box">
                      <EditDataModal
                        text={category.text}
                        onSave={(newText: any) => {
                          const newData:any = [...categoryText];
                          newData[index].text = newText;
                          setCategoryText(newData);
                        }}
                        isHeader
                        fieldId={`category-${index}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* About Section */}
          <section className="about_section layout_padding" style={{ backgroundImage: backgroundImages.about ? `url(${backgroundImages.about})` : '' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-9 mx-auto">
                  <div className="img-box">
                    <EditableImage
                      src={aboutText?.image}
                      alt="About"
                      onSave={(newUrl) => updateImage('about', newUrl)}
                      fieldId="about-img"
                    />
                  </div>
                </div>
              </div>
              <div className="detail-box">
                <EditDataModal
                  text={aboutText.title}
                  onSave={(newText: any) => setAboutText({ ...aboutText, title: newText })}
                  isHeader
                  fieldId="about-title"
                />
                <EditDataModal
                  text={aboutText.description}
                  onSave={(newText: any) => setAboutText({ ...aboutText, description: newText })}
                  fieldId="about-desc"
                />
                <a href="">Read More</a>
              </div>
            </div>
          </section>

          {/* Freelance Section */}
          <section className="freelance_section" style={{ backgroundImage: backgroundImages.freelance ? `url(${backgroundImages.freelance})` : '' }}>
            <div id="accordion">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="detail-box">
                      <div className="heading_container">
                        <EditDataModal
                          text={freelanceHeader}
                          onSave={(newTitle:any) => setFreelanceHeader(newTitle)}
                          isHeader
                          fieldId="freelance-header-title"
                        />
                      </div>
                      <div className="tab_container">
                        {freelanceStats.map((item, index) => (
                          <div
                            className={`t-link-box ${index !== 0 ? 'collapsed' : ''}`}
                            data-toggle="collapse"
                            data-target={`#collapse${index + 1}`}
                            aria-expanded={index === 0}
                            aria-controls={`collapse${index + 1}`}
                            key={index}
                          >
                            <div className="img-box">
                              {/* <EditableImage
                                src={item.img}
                                alt={`Freelance ${index + 1}`}
                                onSave={(newUrl) => {
                                  const updated = [...freelanceStats];
                                  updated[index].img = newUrl;
                                  setFreelanceStats(updated);
                                }}
                                fieldId={`freelance-img-${index}`}
                              /> */}
                              {/* freelanceImage */}
                              <img
  src={freelanceImage[index]?.image}
  alt={`freelancer ${index + 1}`}
/>

                            </div>
                            <div className="detail-box">
                              <EditDataModal
                                text={item.value}
                                onSave={(newValue:any) => {
                                  const updated = [...freelanceStats];
                                  updated[index].value = newValue;
                                  setFreelanceStats(updated);
                                }}
                                fieldId={`freelance-value-${index}`}
                              />
                              <EditDataModal
                                text={item.title}
                                onSave={(newTitle:any) => {
                                  const updated = [...freelanceStats];
                                  updated[index].title = newTitle;
                                  setFreelanceStats(updated);
                                }}
                                fieldId={`freelance-title-${index}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <div className="img-box">
                    <EditableImage
                      src={images.freelance}
                      alt="Freelance"
                      onSave={(newUrl) => updateImage('freelance', newUrl)}
                    // fieldId={`freelance-main-img-${index}`}
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          {/* Client Section */}
          <section className="client_section layout_padding" style={{ backgroundImage: backgroundImages.client ? `url(${backgroundImages.client})` : '' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-10 mx-auto">
                  <div className="heading_container">
                    <h2>Testimonial</h2>
                  </div>
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      {clientTextList?.map((client, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                          <div className="detail-box">
                            <EditDataModal
                              text={client.name}
                              onSave={(newText: any) => {
                                const updated = [...clientTextList];
                                updated[index].name = newText;
                                setClientTextList(updated);
                              }}
                              isHeader
                              fieldId={`client-name-${index}`}
                            />
                            <EditDataModal
                              text={client.description}
                              onSave={(newText: any) => {
                                const updated = [...clientTextList];
                                updated[index].description = newText;
                                setClientTextList(updated);
                              }}
                              fieldId={`client-description-${index}`}
                            />
                            <EditableImage
                              src={images.quote}
                              alt="Quote"
                              onSave={(newUrl) => updateImage('quote', newUrl)}
                              fieldId={`client-quote-${index}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="info_section" style={{ backgroundImage: backgroundImages.info ? `url(${backgroundImages.info})` : '' }}>
            <div className="info_container layout_padding-top">
              <div className="container">
                <div className="info_top">
                  <div className="info_logo">
                    <EditableImage
                      src={images.logo}
                      alt="Logo"
                      onSave={(newUrl) => updateImage('logo', newUrl)}
                      fieldId="footer-logo"
                    />
                  </div>
                  <div className="social_box">
                    <a href="#">
                      <EditableImage
                        src={images.fb}
                        alt="Facebook"
                        onSave={(newUrl) => updateImage('fb', newUrl)}
                        fieldId="social-fb"
                      />
                    </a>
                    <a href="#">
                      <EditableImage
                        src={images.twitter}
                        alt="Twitter"
                        onSave={(newUrl) => updateImage('twitter', newUrl)}
                        fieldId="social-twitter"
                      />
                    </a>
                    <a href="#">
                      <EditableImage
                        src={images.linkedin}
                        alt="LinkedIn"
                        onSave={(newUrl) => updateImage('linkedin', newUrl)}
                        fieldId="social-linkedin"
                      />
                    </a>
                    <a href="#">
                      <EditableImage
                        src={images.instagram}
                        alt="Instagram"
                        onSave={(newUrl) => updateImage('instagram', newUrl)}
                        fieldId="social-instagram"
                      />
                    </a>
                    <a href="#">
                      <EditableImage
                        src={images.youtube}
                        alt="YouTube"
                        onSave={(newUrl) => updateImage('youtube', newUrl)}
                        fieldId="social-youtube"
                      />
                    </a>
                  </div>
                </div>
                <div className="info_main">
                  <div className="row">
                    <div className="col-md-3 col-lg-2">
                      <div className="info_link-box">
                        <h5>Useful Link</h5>
                        <ul>
                          <li className="active">
                            <a href="index.html">Home <span className="sr-only">(current)</span></a>
                          </li>
                          <li><a href="about.html">About</a></li>
                          <li><a href="work.html">Work</a></li>
                          <li><a href="category.html">Category</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <h5>Offices</h5>
                      <EditDataModal
                        text={footerText.offices}
                        onSave={(newText:any) => setFooterText({ ...footerText, offices: newText })}
                        fieldId="footer-offices"
                      />
                    </div>
                    <div className="col-md-3 col-lg-2 offset-lg-1">
                      <h5>Information</h5>
                      <EditDataModal
                        text={footerText.information}
                        onSave={(newText:any) => setFooterText({ ...footerText, information: newText })}
                        fieldId="footer-information"
                      />
                    </div>
                    <div className="col-md-3 offset-lg-1">
                      <div className="info_form">
                        <h5>Newsletter</h5>
                        <form action="">
                          <input type="email" placeholder="Email" />
                          <button>Subscribe</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 mx-auto">
                    <div className="info_contact layout_padding2">
                      <div className="row">
                        <div className="col-md-6">
                          <a href="#" className="link-box">
                            <div className="img-box">
                              <EditableImage
                                src={images.location}
                                alt="Location"
                                onSave={(newUrl) => updateImage('location', newUrl)}
                                fieldId="contact-location"
                              />
                            </div>
                            {/* <div className="detail-box">
                          <h6>Location</h6>
                        </div> */}
                            <div className="detail-box">
                              <EditDataModal
                                text={footerText.copyright}
                                onSave={(newText: any) => setFooterText({ ...footerText, copyright: newText })}
                                isHeader
                                fieldId="footer-copyright"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a href="#" className="link-box">
                            <div className="img-box">
                              <EditableImage
                                src={images.mail}
                                alt="Mail"
                                onSave={(newUrl) => updateImage('mail', newUrl)}
                                fieldId="contact-mail"
                              />
                            </div>
                            <div className="detail-box">
                              <EditDataModal
                                text={footerText.email}
                                onSave={(newText: any) => setFooterText({ ...footerText, email: newText })}
                                isHeader
                                fieldId="footer-email"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a href="#" className="link-box">
                            <div className="img-box">
                              <EditableImage
                                src={images.call}
                                alt="Call"
                                onSave={(newUrl) => updateImage('call', newUrl)}
                                fieldId="contact-call"
                              />
                            </div>
                            <div className="detail-box">
                              <EditDataModal
                                text={footerText?.phone}
                                onSave={(newText: any) => setFooterText({ ...footerText, phone: newText })}
                                isHeader
                                fieldId="footer-phone"
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section */}

          {/* Background Image Edit Modal */}
          <ImageEditModal
            isOpen={backgroundModal.isOpen}
            onClose={() => setBackgroundModal({ isOpen: false, section: '' })}
            onSave={(newUrl) => updateBackgroundImage(backgroundModal.section as keyof typeof backgroundImages, newUrl)}
            section={backgroundModal.section}
          />
        </>)}

    </>
  );
}

export default Theme2Index;