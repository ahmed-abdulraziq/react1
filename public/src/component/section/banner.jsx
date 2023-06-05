const subTitle = "Online education";
const title = <h2 className="title"><span className="d-lg-block">Learn The</span> Skills You Need <span className="d-lg-block">To Succeed</span></h2>;
const desc = "Free online courses from the world’s Leading experts. join 0+ million Learners today.";

const catagoryList = [
    {
        name: 'NLP',
        link: '#',
    },
]

const shapeList = [
    {
        name: '0M Students Happy',
        link: '#',
        className: 'ccl-shape shape-1',
    },
    {
        name: '0K+ Total Courses',
        link: '#',
        className: 'ccl-shape shape-2',
    },
    {
        name: '89% Successful Students',
        link: '#',
        className: 'ccl-shape shape-3',
    },
    {
        name: '0M+ Learners',
        link: '#',
        className: 'ccl-shape shape-4',
    },
    {
        name: '0+ Languages',
        link: '#',
        className: 'ccl-shape shape-5',
    },
]

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-10">
                            <div className="banner-content">
                                <h6 className="subtitle text-uppercase fw-medium">{subTitle}</h6>
                                {title}
                                <p className="desc">{desc}</p>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-6">
                            <div className="banner-thumb">
                                <img src="assets/images/banner/01.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-shapes"></div>
            <div className="cbs-content-list d-none">
                <ul className="lab-ul">
                    {shapeList.map((val, i) => (
                        <li className={val.className} key={i}><a href={val.link}>{val.name}</a></li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
 
export default Banner;