// // Theme2.tsx
// import './css/bootstrap.css';
// import './css/responsive.css';
// import './css/style.css';
// import './css/style.scss'; 
// import logo from './images/logo.png';
// import imagesSlider from './images/slider-img.png';
// import imagesExperience from './images/experience-img.jpg';
// import imagesC1 from './images/c1.png';
// import imagesC2 from './images/c2.png';
// import imagesC3 from './images/c3.png';
// import imagesC4 from './images/c4.png';
// import imagesC5 from './images/c5.png';
// import imagesC6 from './images/c6.png';
// import imagesAbout from './images/about-img.jpg';
// import imagesF1 from './images/f1.png';
// import imagesF2 from './images/f2.png';
// import imagesF3 from './images/f3.png';
// import imagesF4 from './images/f4.png';
// import imagesFreelance from './images/freelance-img.jpg'
// import imagesQuote from './images/quote.png';
// import imagesFb from './images/fb.png';
// import imagesTwitter from './images/twitter.png';
// import imageLinkedin from './images/linkedin.png';
// import imageInstagram from './images/instagram.png';
// import imageYoutube from './images/youtube.png';
// import imageMail from './images/mail.png';
// import imageCall from './images/call.png';
// import imageLocation from './images/location.png';
// function Theme2Index() {

//   return (
//  <>
//   <div className="hero_area">
//     {/* <!-- header section strats --> */}
//     <header className="header_section">
//       <div className="container-fluid">
//         <nav className="navbar navbar-expand-lg custom_nav-container">
//           <a className="navbar-brand" href="index.html">
//             <img src={logo} alt="" />
//             <span>
//               Spering
//             </span>
//           </a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav  ">
//               <li className="nav-item active">
//                 <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="about.html"> About</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="work.html">Work </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="category.html"> Category </a>
//               </li>
//             </ul>
//             <div className="user_option">
//               <a href="">
//                 <span>
//                   Login
//                 </span>
//               </a>
//               <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
//                 <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
//               </form>
//             </div>
//           </div>
//           <div>
//             <div className="custom_menu-btn ">
//               <button>
//                 <span className=" s-1">

//                 </span>
//                 <span className="s-2">

//                 </span>
//                 <span className="s-3">

//                 </span>
//               </button>
//             </div>
//           </div>

//         </nav>
//       </div>
//     </header>
//     {/* <!-- end header section --> */}
//     {/* <!-- slider section --> */}
//     <section className="slider_section ">
//       <div className="carousel_btn-container">
//         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//           <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//         <ol className="carousel-indicators">
//           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
//         </ol>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-md-5 offset-md-1">
//                   <div className="detail-box">
//                     <h1>
//                       You Can <br/>
//                       Hire Freelancer <br/>
//                       Here
//                     </h1>
//                     <p>
//                       It is a long established fact that a reader will be distracted by
//                       the readable content of a page
//                     </p>
//                     <div className="btn-box">
//                       <a href="" className="btn-1">
//                         About Us
//                       </a>
//                       <a href="" className="btn-2">
//                         Get A Quote
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="offset-md-1 col-md-4 img-container">
//                   <div className="img-box">
//                     <img src={imagesSlider} alt=""/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item ">
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-md-5 offset-md-1">
//                   <div className="detail-box">
//                     <h1>
//                       You Can <br/>
//                       Hire Freelancer <br/>
//                       Here
//                     </h1>
//                     <p>
//                       It is a long established fact that a reader will be distracted by
//                       the readable content of a page
//                     </p>
//                     <div className="btn-box">
//                       <a href="" className="btn-1">
//                         About Us
//                       </a>
//                       <a href="" className="btn-2">
//                         Get A Quote
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="offset-md-1 col-md-4 img-container">
//                   <div className="img-box">
//                   <img src={imagesSlider} alt=""/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item ">
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-md-5 offset-md-1">
//                   <div className="detail-box">
//                     <h1>
//                       You Can <br/>
//                       Hire Freelancer <br/>
//                       Here
//                     </h1>
//                     <p>
//                       It is a long established fact that a reader will be distracted by
//                       the readable content of a page
//                     </p>
//                     <div className="btn-box">
//                       <a href="" className="btn-1">
//                         About Us
//                       </a>
//                       <a href="" className="btn-2">
//                         Get A Quote
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="offset-md-1 col-md-4 img-container">
//                   <div className="img-box">
//                   <img src={imagesSlider} alt=""/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//     </section>
//     {/* <!-- end slider section --> */}
//   </div>

//   {/* <!-- experience section --> */}

//   <section className="experience_section layout_padding">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-5">
//           <div className="img-box">
//             <img src={imagesExperience} alt=""/>
//           </div>
//         </div>
//         <div className="col-md-7">
//           <div className="detail-box">
//             <div className="heading_container">
//               <h2>
//                 Best Experinced Freelancer Here
//               </h2>
//             </div>
//             <p>
//               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
//             </p>
//             <div className="btn-box">
//               <a href="" className="btn-1">
//                 Read More
//               </a>
//               <a href="" className="btn-2">
//                 Hire
//               </a>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   </section>

//   {/* <!-- end experience section --> */}

//   {/* <!-- category section --> */}

//   <section className="category_section layout_padding">
//     <div className="container">
//       <div className="heading_container">
//         <h2>
//           Category
//         </h2>
//       </div>
//       <div className="category_container">
//         <div className="box">
//           <div className="img-box">
//             <img src={imagesC1} alt=""/>
//           </div>
//           <div className="detail-box">
//             <h5>
//               Design & Arts
//             </h5>
//           </div>
//         </div>
//         <div className="box">
//           <div className="img-box">
//           <img src={imagesC2} alt=""/>

//           </div>
//           <div className="detail-box">
//             <h5>
//               Web Development
//             </h5>
//           </div>
//         </div>
//         <div className="box">
//           <div className="img-box">
//           <img src={imagesC3} alt=""/>

//           </div>
//           <div className="detail-box">
//             <h5>
//               SEO Markting
//             </h5>
//           </div>
//         </div>
//         <div className="box">
//           <div className="img-box">
//           <img src={imagesC4} alt=""/>

//           </div>
//           <div className="detail-box">
//             <h5>
//               Video Edting
//             </h5>
//           </div>
//         </div>
//         <div className="box">
//           <div className="img-box">
//           <img src={imagesC5} alt=""/>

//           </div>
//           <div className="detail-box">
//             <h5>
//               Logo Design
//             </h5>
//           </div>
//         </div>
//         <div className="box">
//           <div className="img-box">
//           <img src={imagesC6} alt=""/>

//           </div>
//           <div className="detail-box">
//             <h5>
//               Game Design
//             </h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>


//   {/* <!-- end category section --> */}

//   {/* <!-- about section --> */}

//   <section className="about_section layout_padding">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-10 col-lg-9 mx-auto">
//           <div className="img-box">
//             <img src={imagesAbout} alt=""/>
//           </div>
//         </div>
//       </div>
//       <div className="detail-box">
//         <h2>
//           About Spering Company
//         </h2>
//         <p>
//           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you
//         </p>
//         <a href="">
//           Read More
//         </a>
//       </div>
//     </div>
//   </section>

//   {/* <!-- end about section --> */}

//   {/* <!-- freelance section --> */}

//   <section className="freelance_section ">
//     <div id="accordion">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-5 offset-md-1">
//             <div className="detail-box">
//               <div className="heading_container">
//                 <h2>
//                   Work Freelaner Has Done
//                 </h2>
//               </div>
//               <div className="tab_container">
//                 <div className="t-link-box" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                   <div className="img-box">
//                     <img src={imagesF1} alt=""/>
//                   </div>
//                   <div className="detail-box">
//                     <h5>
//                       $250 Million
//                     </h5>
//                     <h3>
//                       Paid to Freelancers
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="t-link-box collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                   <div className="img-box">
//                     <img src={imagesF2} alt=""/>
//                   </div>
//                   <div className="detail-box">
//                     <h5>
//                       2 Million
//                     </h5>
//                     <h3>
//                       Paid Invoices
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="t-link-box collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                   <div className="img-box">
//                     <img src={imagesF3} alt=""/>
//                   </div>
//                   <div className="detail-box">
//                     <h5>
//                       700,000
//                     </h5>
//                     <h3>
//                       Worldwide Freelancer
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="t-link-box collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
//                   <div className="img-box">
//                     <img src={imagesF4} alt=""/>
//                   </div>
//                   <div className="detail-box">
//                     <h5>
//                       98%
//                     </h5>
//                     <h3>
//                       Customer <br/>
//                       Satisfaction Rate
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion">
//               <div className="img-box">
//                 <img src={imagesFreelance} alt=""/>
//               </div>
//             </div>
//             <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordion">
//               <div className="img-box">
//                 <img src={imagesFreelance} alt=""/>
//               </div>
//             </div>
//             <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordion">
//               <div className="img-box">
//                 <img src={imagesFreelance} alt=""/>
//               </div>
//             </div>
//             <div className="collapse" id="collapseFour" aria-labelledby="headingfour" data-parent="#accordion">
//               <div className="img-box">
//                 <img src={imagesFreelance} alt=""/>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

//   {/* <!-- end freelance section --> */}

//   {/* <!-- client section --> */}

//   <section className="client_section layout_padding">
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-9 col-md-10 mx-auto">
//           <div className="heading_container">
//             <h2>
//               Testimonial
//             </h2>
//           </div>
//           <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <div className="detail-box">
//                   <h4>
//                     John Hissona
//                   </h4>
//                   <p>
//                     passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
//                   </p>
//                   <img src={imagesQuote} alt=""/>
//                 </div>
//               </div>
//               <div className="carousel-item">
//                 <div className="detail-box">
//                   <h4>
//                     John Hissona
//                   </h4>
//                   <p>
//                     passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
//                   </p>
//                   <img src={imagesQuote} alt=""/>
//                 </div>
//               </div>
//               <div className="carousel-item">
//                 <div className="detail-box">
//                   <h4>
//                     John Hissona
//                   </h4>
//                   <p>
//                     passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
//                   </p>
//                   <img src={imagesQuote} alt=""/>
//                 </div>
//               </div>
//             </div>
//             <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//               <span className="sr-only">Previous</span>
//             </a>
//             <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

//   {/* <!-- end client section --> */}



//   {/* <!-- info section --> */}

//   <section className="info_section ">
//     <div className="info_container layout_padding-top">
//       <div className="container">
//         <div className="info_top">
//           <div className="info_logo">
//             <img src={logo} alt="" />
//             <span>
//               Spering
//             </span>
//           </div>
//           <div className="social_box">
//             <a href="#">
//               <img src={imagesFb} alt=""/>
//             </a>
//             <a href="#">
//               <img src={imagesTwitter} alt=""/>
//             </a>
//             <a href="#">
//               <img src={imageLinkedin} alt=""/>
//             </a>
//             <a href="#">
//               <img src={imageInstagram} alt=""/>
//             </a>
//             <a href="#">
//               <img src={imageYoutube} alt=""/>
//             </a>
//           </div>
//         </div>

//         <div className="info_main">
//           <div className="row">
//             <div className="col-md-3 col-lg-2">
//               <div className="info_link-box">
//                 <h5>
//                   Useful Link
//                 </h5>
//                 <ul>
//                   <li className=" active">
//                     <a className="" href="index.html">Home <span className="sr-only">(current)</span></a>
//                   </li>
//                   <li className="">
//                     <a className="" href="about.html">About </a>
//                   </li>
//                   <li className="">
//                     <a className="" href="work.html">Work </a>
//                   </li>
//                   <li className="">
//                     <a className="" href="category.html">Category </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-md-3 ">
//               <h5>
//                 Offices
//               </h5>
//               <p>
//                 Readable content of a page when looking at its layoutreadable content of a page when looking at its layout
//               </p>
//             </div>

//             <div className="col-md-3 col-lg-2 offset-lg-1">
//               <h5>
//                 Information
//               </h5>
//               <p>
//                 Readable content of a page when looking at its layoutreadable content of a page when looking at its layout
//               </p>
//             </div>

//             <div className="col-md-3  offset-lg-1">
//               <div className="info_form ">
//                 <h5>
//                   Newsletter
//                 </h5>
//                 <form action="">
//                   <input type="email" placeholder="Email"/>
//                   <button>
//                     Subscribe
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-9 col-md-10 mx-auto">
//             <div className="info_contact layout_padding2">
//               <div className="row">
//                 <div className="col-md-3">
//                   <a href="#" className="link-box">
//                     <div className="img-box">
//                       <img src={imageLocation}alt=""/>
//                     </div>
//                     <div className="detail-box">
//                       <h6>
//                         Location
//                       </h6>
//                     </div>
//                   </a>
//                 </div>
//                 <div className="col-md-4">
//                   <a href="#" className="link-box">
//                     <div className="img-box">
//                       <img src={imageMail} alt=""/>
//                     </div>
//                     <div className="detail-box">
//                       <h6>
//                         demo@gmail.com
//                       </h6>
//                     </div>
//                   </a>
//                 </div>
//                 <div className="col-md-5">
//                   <a href="#" className="link-box">
//                     <div className="img-box">
//                       <img src={imageCall} alt=""/>
//                     </div>
//                     <div className="detail-box">
//                       <h6>
//                         Call +01 1234567890
//                       </h6>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   </section>

//   {/* <!-- end info section --> */}

//   {/* <!-- footer section --> */}
//   <footer className="container-fluid footer_section ">
//     <div className="container">
//       <p>
//         &copy; <span id="displayDate"></span> All Rights Reserved By
//         <a href="https://html.design/">Free Html Templates</a>
//       </p>
//     </div>
//   </footer>
//   {/* <!-- end  footer section --> */}
// </>
//   );
// }
// export default Theme2Index;


// import { useState } from 'react';
// import './css/bootstrap.css';
// import './css/responsive.css';
// import './css/style.css';
// import './css/style.scss'; 
// import logo from './images/logo.png';
// import imagesSlider from './images/slider-img.png';
// import imagesExperience from './images/experience-img.jpg';
// import imagesC1 from './images/c1.png';
// import imagesC2 from './images/c2.png';
// import imagesC3 from './images/c3.png';
// import imagesC4 from './images/c4.png';
// import imagesC5 from './images/c5.png';
// import imagesC6 from './images/c6.png';
// import imagesAbout from './images/about-img.jpg';
// import imagesF1 from './images/f1.png';
// import imagesF2 from './images/f2.png';
// import imagesF3 from './images/f3.png';
// import imagesF4 from './images/f4.png';
// import imagesFreelance from './images/freelance-img.jpg';
// import imagesQuote from './images/quote.png';
// import imagesFb from './images/fb.png';
// import imagesTwitter from './images/twitter.png';
// import imageLinkedin from './images/linkedin.png';
// import imageInstagram from './images/instagram.png';
// import imageYoutube from './images/youtube.png';
// import imageMail from './images/mail.png';
// import imageCall from './images/call.png';
// import imageLocation from './images/location.png';

// // Reusable EditableText component with edit icon and modal
// interface EditableTextProps {
//   text: string;
//   onSave: (newText: string) => void;
//   isHeader?: boolean;
//   fieldId: string;
// }

// const EditableText: React.FC<EditableTextProps> = ({ text, onSave, isHeader = false, fieldId }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [value, setValue] = useState(text);

//   const handleSave = () => {
//     onSave(value);
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div className="d-flex align-items-center editable-text">
//         {isHeader ? <h1>{text}</h1> : <p>{text}</p>}
//         <i
//           className="bi bi-pencil-square ms-2"
//           style={{ cursor: 'pointer', fontSize: '1.2rem' }}
//           onClick={() => setIsModalOpen(true)}
//         ></i>
//       </div>

//       {/* Modal for editing */}
//       <div className={`modal fade ${isModalOpen ? 'show d-block' : ''}`} tabIndex={-1} role="dialog">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Edit Text</h5>
//               <button type="button" className="close" onClick={() => setIsModalOpen(false)}>
//                 <span>&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               {isHeader ? (
//                 <input
//                   type="text"
//                   value={value}
//                   onChange={(e) => setValue(e.target.value)}
//                   className="form-control"
//                 />
//               ) : (
//                 <textarea
//                   value={value}
//                   onChange={(e) => setValue(e.target.value)}
//                   className="form-control"
//                   rows={4}
//                 />
//               )}
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-primary" onClick={handleSave}>
//                 Save
//               </button>
//               <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && <div className="modal-backdrop fade show"></div>}
//     </>
//   );
// };

// // Modal for editing background image
// interface ImageEditModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (newImage: string) => void;
// }

// const ImageEditModal: React.FC<ImageEditModalProps> = ({ isOpen, onClose, onSave }) => {
//   const [imageUrl, setImageUrl] = useState('');

//   const handleSave = () => {
//     if (imageUrl) {
//       onSave(imageUrl);
//       onClose();
//     }
//   };

//   return (
//     <>
//       <div className={`modal fade ${isOpen ? 'show d-block' : ''}`} tabIndex={-1} role="dialog">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Change Background Image</h5>
//               <button type="button" className="close" onClick={onClose}>
//                 <span>&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 placeholder="Enter image URL"
//                 value={imageUrl}
//                 onChange={(e) => setImageUrl(e.target.value)}
//                 className="form-control"
//               />
//               <p className="mt-2">Note: In a real app, use a file input to upload an image.</p>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-primary" onClick={handleSave}>
//                 Save
//               </button>
//               <button type="button" className="btn btn-secondary" onClick={onClose}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isOpen && <div className="modal-backdrop fade show"></div>}
//     </>
//   );
// };

// function Theme2Index() {
//   // State for editable texts
//   const [sliderText, setSliderText] = useState({
//     title: 'You Can\nHire Freelancer\nHere',
//     description: 'It is a long established fact that a reader will be distracted by the readable content of a page',
//   });
//   const [experienceText, setExperienceText] = useState({
//     title: 'Best Experinced Freelancer Here',
//     description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as',
//   });
//   const [aboutText, setAboutText] = useState({
//     title: 'About Spering Company',
//     description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you',
//   });
//   const [clientText, setClientText] = useState({
//     name: 'John Hissona',
//     testimonial: 'passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s',
//   });
//   const [categoryText, setCategoryText] = useState([
//     'Design & Arts',
//     'Web Development',
//     'SEO Markting',
//     'Video Edting',
//     'Logo Design',
//     'Game Design',
//   ]);
//   const [footerText, setFooterText] = useState({
//     offices: 'Readable content of a page when looking at its layoutreadable content of a page when looking at its layout',
//     information: 'Readable content of a page when looking at its layoutreadable content of a page when looking at its layout',
//     email: 'demo@gmail.com',
//     phone: 'Call +01 1234567890',
//     copyright: '© <span id="displayDate"></span> All Rights Reserved By <a href="https://html.design/">Free Html Templates</a>',
//   });

//   // State for background image
//   const [backgroundImage, setBackgroundImage] = useState('');
//   const [isImageModalOpen, setIsImageModalOpen] = useState(false);

//   return (
//     <>
//       {/* Include Bootstrap Icons for edit icon */}
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

//       <div className="hero_area">
//         {/* Header Section */}
//         <header className="header_section">
//           <div className="container-fluid">
//             <nav className="navbar navbar-expand-lg custom_nav-container">
//               <a className="navbar-brand" href="index.html">
//                 <img src={logo} alt="" />
//                 <span>Spering</span>
//               </a>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav">
//                   <li className="nav-item active">
//                     <a className="nav-link" href="index.html">
//                       Home <span className="sr-only">(current)</span>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="about.html">About</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="work.html">Work</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="category.html">Category</a>
//                   </li>
//                 </ul>
//                 <div className="user_option">
//                   <a href="">
//                     <span>Login</span>
//                   </a>
//                   <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
//                     <button className="btn my-2 my-sm-0 nav_search-btn" type="submit"></button>
//                   </form>
//                 </div>
//               </div>
//               <div>
//                 <div className="custom_menu-btn">
//                   <button>
//                     <span className="s-1"></span>
//                     <span className="s-2"></span>
//                     <span className="s-3"></span>
//                   </button>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </header>
//         {/* Slider Section */}
//         <section className="slider_section" style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : '' }}>
//           <div className="carousel_btn-container">
//             <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//               <span className="sr-only">Previous</span>
//             </a>
//             <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//             <ol className="carousel-indicators">
//               <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
//               <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
//               <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
//             </ol>
//             <div className="carousel-inner">
//               {[0, 1, 2].map((index) => (
//                 <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//                   <div className="container-fluid">
//                     <div className="row">
//                       <div className="col-md-5 offset-md-1">
//                         <div className="detail-box">
//                           <EditableText
//                             text={sliderText.title}
//                             onSave={(newText) => setSliderText({ ...sliderText, title: newText })}
//                             isHeader
//                             fieldId={`slider-title-${index}`}
//                           />
//                           <EditableText
//                             text={sliderText.description}
//                             onSave={(newText) => setSliderText({ ...sliderText, description: newText })}
//                             fieldId={`slider-desc-${index}`}
//                           />
//                           <div className="btn-box">
//                             <a href="" className="btn-1">About Us</a>
//                             <a href="" className="btn-2">Get A Quote</a>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="offset-md-1 col-md-4 img-container">
//                         <div className="img-box">
//                           <img src={imagesSlider} alt="" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Background Image Edit Button */}
//       <div className="container mt-3">
//         <button className="btn btn-outline-primary" onClick={() => setIsImageModalOpen(true)}>
//           Change Background Image
//         </button>
//       </div>

//       {/* Experience Section */}
//       <section className="experience_section layout_padding">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-5">
//               <div className="img-box">
//                 <img src={imagesExperience} alt="" />
//               </div>
//             </div>
//             <div className="col-md-7">
//               <div className="detail-box">
//                 <div className="heading_container">
//                   <EditableText
//                     text={experienceText.title}
//                     onSave={(newText) => setExperienceText({ ...experienceText, title: newText })}
//                     isHeader
//                     fieldId="experience-title"
//                   />
//                 </div>
//                 <EditableText
//                   text={experienceText.description}
//                   onSave={(newText) => setExperienceText({ ...experienceText, description: newText })}
//                   fieldId="experience-desc"
//                 />
//                 <div className="btn-box">
//                   <a href="" className="btn-1">Read More</a>
//                   <a href="" className="btn-2">Hire</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Category Section */}
//       <section className="category_section layout_padding">
//         <div className="container">
//           <div className="heading_container">
//             <h2>Category</h2>
//           </div>
//           <div className="category_container">
//             {categoryText.map((title, index) => (
//               <div className="box" key={index}>
//                 <div className="img-box">
//                   <img src={[imagesC1, imagesC2, imagesC3, imagesC4, imagesC5, imagesC6][index]} alt="" />
//                 </div>
//                 <div className="detail-box">
//                   <EditableText
//                     text={title}
//                     onSave={(newText) => {
//                       const newCategories = [...categoryText];
//                       newCategories[index] = newText;
//                       setCategoryText(newCategories);
//                     }}
//                     isHeader
//                     fieldId={`category-${index}`}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="about_section layout_padding">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-10 col-lg-9 mx-auto">
//               <div className="img-box">
//                 <img src={imagesAbout} alt="" />
//               </div>
//             </div>
//           </div>
//           <div className="detail-box">
//             <EditableText
//               text={aboutText.title}
//               onSave={(newText) => setAboutText({ ...aboutText, title: newText })}
//               isHeader
//               fieldId="about-title"
//             />
//             <EditableText
//               text={aboutText.description}
//               onSave={(newText) => setAboutText({ ...aboutText, description: newText })}
//               fieldId="about-desc"
//             />
//             <a href="">Read More</a>
//           </div>
//         </div>
//       </section>

//       {/* Freelance Section */}
//       <section className="freelance_section" style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : '' }}>
//         <div id="accordion">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-md-5 offset-md-1">
//                 <div className="detail-box">
//                   <div className="heading_container">
//                     <h2>Work Freelancer Has Done</h2>
//                   </div>
//                   <div className="tab_container">
//                     {[
//                       { img: imagesF1, value: '$250 Million', title: 'Paid to Freelancers' },
//                       { img: imagesF2, value: '2 Million', title: 'Paid Invoices' },
//                       { img: imagesF3, value: '700,000', title: 'Worldwide Freelancer' },
//                       { img: imagesF4, value: '98%', title: 'Customer\nSatisfaction Rate' },
//                     ].map((item, index) => (
//                       <div
//                         className={`t-link-box ${index !== 0 ? 'collapsed' : ''}`}
//                         data-toggle="collapse"
//                         data-target={`#collapse${index + 1}`}
//                         aria-expanded={index === 0}
//                         aria-controls={`collapse${index + 1}`}
//                         key={index}
//                       >
//                         <div className="img-box">
//                           <img src={item.img} alt="" />
//                         </div>
//                         <div className="detail-box">
//                           <h5>{item.value}</h5>
//                           <h3>{item.title}</h3>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 {[1, 2, 3, 4].map((index) => (
//                   <div
//                     className={`collapse ${index === 1 ? 'show' : ''}`}
//                     id={`collapse${index}`}
//                     aria-labelledby={`heading${index}`}
//                     data-parent="#accordion"
//                     key={index}
//                   >
//                     <div className="img-box">
//                       <img src={imagesFreelance} alt="" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Client Section */}
//       <section className="client_section layout_padding">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-9 col-md-10 mx-auto">
//               <div className="heading_container">
//                 <h2>Testimonial</h2>
//               </div>
//               <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
//                 <div className="carousel-inner">
//                   {[0, 1, 2].map((index) => (
//                     <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//                       <div className="detail-box">
//                         <EditableText
//                           text={clientText.name}
//                           onSave={(newText) => setClientText({ ...clientText, name: newText })}
//                           isHeader
//                           fieldId={`client-name-${index}`}
//                         />
//                         <EditableText
//                           text={clientText.testimonial}
//                           onSave={(newText) => setClientText({ ...clientText, testimonial: newText })}
//                           fieldId={`client-testimonial-${index}`}
//                         />
//                         <img src={imagesQuote} alt="" />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//                   <span className="sr-only">Previous</span>
//                 </a>
//                 <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//                   <span className="sr-only">Next</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Info Section */}
//       <section className="info_section">
//         <div className="info_container layout_padding-top">
//           <div className="container">
//             <div className="info_top">
//               <div className="info_logo">
//                 <img src={logo} alt="" />
//                 <span>Spering</span>
//               </div>
//               <div className="social_box">
//                 <a href="#"><img src={imagesFb} alt="" /></a>
//                 <a href="#"><img src={imagesTwitter} alt="" /></a>
//                 <a href="#"><img src={imageLinkedin} alt="" /></a>
//                 <a href="#"><img src={imageInstagram} alt="" /></a>
//                 <a href="#"><img src={imageYoutube} alt="" /></a>
//               </div>
//             </div>
//             <div className="info_main">
//               <div className="row">
//                 <div className="col-md-3 col-lg-2">
//                   <div className="info_link-box">
//                     <h5>Useful Link</h5>
//                     <ul>
//                       <li className="active">
//                         <a href="index.html">Home <span className="sr-only">(current)</span></a>
//                       </li>
//                       <li><a href="about.html">About</a></li>
//                       <li><a href="work.html">Work</a></li>
//                       <li><a href="category.html">Category</a></li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="col-md-3">
//                   <h5>Offices</h5>
//                   <EditableText
//                     text={footerText.offices}
//                     onSave={(newText) => setFooterText({ ...footerText, offices: newText })}
//                     fieldId="footer-offices"
//                   />
//                 </div>
//                 <div className="col-md-3 col-lg-2 offset-lg-1">
//                   <h5>Information</h5>
//                   <EditableText
//                     text={footerText.information}
//                     onSave={(newText) => setFooterText({ ...footerText, information: newText })}
//                     fieldId="footer-information"
//                   />
//                 </div>
//                 <div className="col-md-3 offset-lg-1">
//                   <div className="info_form">
//                     <h5>Newsletter</h5>
//                     <form action="">
//                       <input type="email" placeholder="Email" />
//                       <button>Subscribe</button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-9 col-md-10 mx-auto">
//                 <div className="info_contact layout_padding2">
//                   <div className="row">
//                     <div className="col-md-3">
//                       <a href="#" className="link-box">
//                         <div className="img-box">
//                           <img src={imageLocation} alt="" />
//                         </div>
//                         <div className="detail-box">
//                           <h6>Location</h6>
//                         </div>
//                       </a>
//                     </div>
//                     <div className="col-md-4">
//                       <a href="#" className="link-box">
//                         <div className="img-box">
//                           <img src={imageMail} alt="" />
//                         </div>
//                         <div className="detail-box">
//                           <EditableText
//                             text={footerText.email}
//                             onSave={(newText) => setFooterText({ ...footerText, email: newText })}
//                             isHeader
//                             fieldId="footer-email"
//                           />
//                         </div>
//                       </a>
//                     </div>
//                     <div className="col-md-5">
//                       <a href="#" className="link-box">
//                         <div className="img-box">
//                           <img src={imageCall} alt="" />
//                         </div>
//                         <div className="detail-box">
//                           <EditableText
//                             text={footerText.phone}
//                             onSave={(newText) => setFooterText({ ...footerText, phone: newText })}
//                             isHeader
//                             fieldId="footer-phone"
//                           />
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="container-fluid footer_section">
//         <div className="container">
//           <EditableText
//             text={footerText.copyright}
//             onSave={(newText) => setFooterText({ ...footerText, copyright: newText })}
//             fieldId="footer-copyright"
//           />
//         </div>
//       </footer>

//       {/* Image Edit Modal */}
//       <ImageEditModal
//         isOpen={isImageModalOpen}
//         onClose={() => setIsImageModalOpen(false)}
//         onSave={setBackgroundImage}
//       />
//     </>
//   );
// }

// export default Theme2Index;



import { useState } from 'react';
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

// Reusable EditableText component
interface EditableTextProps {
  text: string;
  onSave: (newText: string) => void;
  isHeader?: boolean;
  fieldId: string;
}

const EditableText: React.FC<EditableTextProps> = ({ text, onSave, isHeader = false, fieldId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(text);

  const handleSave = () => {
    onSave(value);
    setIsModalOpen(false);
  };

  console.log(value)

  return (
    <>
      <div className="d-flex align-items-center editable-text">
        {isHeader ? <h1>{text}</h1> : <p>{text}</p>}
        <i
          className="bi bi-pencil-square ms-2"
          style={{ cursor: 'pointer', fontSize: '1.2rem' }}
          onClick={() => setIsModalOpen(true)}
        ></i>
      </div>

      <div className={`modal fade ${isModalOpen ? 'show d-block' : ''}`} tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Text</h5>
              <button type="button" className="close" onClick={() => setIsModalOpen(false)}>
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              {isHeader ? (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="form-control"
                />
              ) : (
                <textarea
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="form-control"
                  rows={4}
                />
              )}
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
        <img src={src} alt={alt} className="img-fluid" />
        <i
          className="bi bi-pencil-square position-absolute"
          style={{ top: '10px', right: '10px', cursor: 'pointer', fontSize: '1.2rem', color: 'white', background: 'rgba(0,0,0,0.5)', padding: '5px' }}
          onClick={() => setIsModalOpen(true)}
        ></i>
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
  // State for editable texts
  const [sliderText, setSliderText] = useState({
    title: 'You Can\nHire Freelancer\nHere',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page',
  });
  const [experienceText, setExperienceText] = useState({
    title: 'Best Experinced Freelancer Here',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as',
  });
  const [aboutText, setAboutText] = useState({
    title: 'About Spering Company',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you',
  });
  const [clientText, setClientText] = useState({
    name: 'John Hissona',
    testimonial: 'passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s',
  });
  const [categoryText, setCategoryText] = useState([
    'Design & Arts',
    'Web Development',
    'SEO Markting',
    'Video Edting',
    'Logo Design',
    'Game Design',
  ]);
  const [footerText, setFooterText] = useState({
    offices: 'Readable content of a page when looking at its layoutreadable content of a page when looking at its layout',
    information: 'Readable content of a page when looking at its layoutreadable content of a page when looking at its layout',
    email: 'demo@gmail.com',
    phone: 'Call +01 1234567890',
    copyright: '© <span id="displayDate"></span> All Rights Reserved By <a href="https://html.design/">Free Html Templates</a>',
  });
  const [headerText, setHeaderText] = useState('Spering');

  // State for images
  const [images, setImages] = useState({
    logo: logo,
    slider: imagesSlider,
    experience: imagesExperience,
    c1: imagesC1,
    c2: imagesC2,
    c3: imagesC3,
    c4: imagesC4,
    c5: imagesC5,
    c6: imagesC6,
    about: imagesAbout,
    f1: imagesF1,
    f2: imagesF2,
    f3: imagesF3,
    f4: imagesF4,
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

  // State for background images
  const [backgroundImages, setBackgroundImages] = useState({
    slider: '',
    experience: '',
    category: '',
    about: '',
    freelance: '',
    client: '',
    info: '',
  });

  // State for background image modals
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

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

      <div className="hero_area">
        {/* Header Section */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <EditableImage
                  src={images.logo}
                  alt="Logo"
                  onSave={(newUrl) => updateImage('logo', newUrl)}
                  fieldId="header-logo"
                />
                {/* <EditableText
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
                          <EditableText
                            text={sliderText.title}
                            onSave={(newText) => setSliderText({ ...sliderText, title: newText })}
                            isHeader
                            fieldId={`slider-title-${index}`}
                          />
                          <EditableText
                            text={sliderText.description}
                            onSave={(newText) => setSliderText({ ...sliderText, description: newText })}
                            fieldId={`slider-desc-${index}`}
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
                  <EditableText
                    text={experienceText.title}
                    onSave={(newText) => setExperienceText({ ...experienceText, title: newText })}
                    isHeader
                    fieldId="experience-title"
                  />
                </div>
                <EditableText
                  text={experienceText.description}
                  onSave={(newText) => setExperienceText({ ...experienceText, description: newText })}
                  fieldId="experience-desc"
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
          <div className="category_container">
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
                  <EditableText
                    text={title}
                    onSave={(newText) => {
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
                  src={images.about}
                  alt="About"
                  onSave={(newUrl) => updateImage('about', newUrl)}
                  fieldId="about-img"
                />
              </div>
            </div>
          </div>
          <div className="detail-box">
            <EditableText
              text={aboutText.title}
              onSave={(newText) => setAboutText({ ...aboutText, title: newText })}
              isHeader
              fieldId="about-title"
            />
            <EditableText
              text={aboutText.description}
              onSave={(newText) => setAboutText({ ...aboutText, description: newText })}
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
                    <h2>Work Freelancer Has Done</h2>
                  </div>
                  <div className="tab_container">
                    {[
                      { img: images.f1, value: '$250 Million', title: 'Paid to Freelancers' },
                      { img: images.f2, value: '2 Million', title: 'Paid Invoices' },
                      { img: images.f3, value: '700,000', title: 'Worldwide Freelancer' },
                      { img: images.f4, value: '98%', title: 'Customer\nSatisfaction Rate' },
                    ].map((item, index) => (
                      <div
                        className={`t-link-box ${index !== 0 ? 'collapsed' : ''}`}
                        data-toggle="collapse"
                        data-target={`#collapse${index + 1}`}
                        aria-expanded={index === 0}
                        aria-controls={`collapse${index + 1}`}
                        key={index}
                      >
                        <div className="img-box">
                          <EditableImage
                            src={item.img}
                            alt={`Freelance ${index + 1}`}
                            onSave={(newUrl) => updateImage(`f${index + 1}` as keyof typeof images, newUrl)}
                            fieldId={`freelance-img-${index}`}
                          />
                        </div>
                        <div className="detail-box">
                          <h5>{item.value}</h5>
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    className={`collapse ${index === 1 ? 'show' : ''}`}
                    id={`collapse${index}`}
                    aria-labelledby={`heading${index}`}
                    data-parent="#accordion"
                    key={index}
                  > */}
                    <div className="img-box">
                      <EditableImage
                        src={images.freelance}
                        alt="Freelance"
                        onSave={(newUrl) => updateImage('freelance', newUrl)}
                        // fieldId={`freelance-main-img-${index}`}
                      />
                    </div>
                  </div>
                {/* ))}
              </div> */}
            </div>
          {/* </div> */}
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
                  {[0, 1, 2].map((index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                      <div className="detail-box">
                        <EditableText
                          text={clientText.name}
                          onSave={(newText) => setClientText({ ...clientText, name: newText })}
                          isHeader
                          fieldId={`client-name-${index}`}
                        />
                        <EditableText
                          text={clientText.testimonial}
                          onSave={(newText) => setClientText({ ...clientText, testimonial: newText })}
                          fieldId={`client-testimonial-${index}`}
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
                  <EditableText
                    text={footerText.offices}
                    onSave={(newText) => setFooterText({ ...footerText, offices: newText })}
                    fieldId="footer-offices"
                  />
                </div>
                <div className="col-md-3 col-lg-2 offset-lg-1">
                  <h5>Information</h5>
                  <EditableText
                    text={footerText.information}
                    onSave={(newText) => setFooterText({ ...footerText, information: newText })}
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
                          <EditableText
                            text={footerText.email}
                            onSave={(newText) => setFooterText({ ...footerText, email: newText })}
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
                            src={images.mail}
                            alt="Mail"
                            onSave={(newUrl) => updateImage('mail', newUrl)}
                            fieldId="contact-mail"
                          />
                        </div>
                        <div className="detail-box">
                          <EditableText
                            text={footerText.email}
                            onSave={(newText) => setFooterText({ ...footerText, email: newText })}
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
                          <EditableText
                            text={footerText.phone}
                            onSave={(newText) => setFooterText({ ...footerText, phone: newText })}
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
    </>
  );
}

export default Theme2Index;