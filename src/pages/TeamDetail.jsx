import React from 'react';
import PageTitle from '../components/pagetitle';
import { Link, useParams } from 'react-router-dom';
import Team from '../features/team/home-v2';
import dataTeam from '../assets/fake-data/data-team';
import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';


function TeamDetail(props) {
    const {id} = useParams();
    const team= dataTeam.find((team) => team.id === parseInt(id));

    return (
        <div>
            <PageTitle title='Our Team' />

            <section className="tf-section team-detail ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <img src={team.img} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7">
                            <div className="info-detail" data-aos="fade-left" data-aos-duration="800">
                                <p className="sub">{team.position}</p>
                                <h4 className="name">{team.name}</h4>
                                <div className="box">
                                    <div className="h7">Some Thing About him</div>
                                    <p>{team.bio} </p>
                                    <p>{team.bio_2}</p>
                                </div> 
                                <div className="box contact">
                                    <div className="h7">Contact</div>
                                    <p>{team.mob}</p>
                                    <p>{team.email}</p>
                                </div> 
                                <ul className="social">
                                    <li><Link to="#">
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.6441 3.17999C18.5012 2.64381 19.1425 1.79954 19.4483 0.804803C18.6429 1.30486 17.7618 1.65711 16.8429 1.84632C15.569 0.436146 13.5505 0.0929726 11.9155 1.00856C10.2804 1.92415 9.4335 3.87183 9.84798 5.76329C6.54901 5.58997 3.47544 3.9593 1.3921 1.27704C0.304847 3.23944 0.860458 5.74806 2.66182 7.00991C2.01043 6.988 1.37348 6.80345 0.804092 6.47164C0.804092 6.48965 0.804092 6.50766 0.804092 6.52567C0.804469 8.56985 2.18125 10.3307 4.09599 10.7358C3.49179 10.9078 2.85802 10.9331 2.24304 10.8098C2.78153 12.558 4.32121 13.7556 6.07611 13.7913C4.62265 14.985 2.82769 15.6324 0.980017 15.6292C0.65252 15.6297 0.32528 15.61 0 15.5702C1.87627 16.8319 4.06002 17.5015 6.29028 17.4992C9.39311 17.5215 12.375 16.2414 14.569 13.9454C16.763 11.6494 17.986 8.52892 17.9644 5.28205C17.9644 5.09595 17.9603 4.91086 17.952 4.72677C18.7556 4.11907 19.4491 3.36624 20 2.50365C19.2514 2.85089 18.4573 3.07887 17.6441 3.17999Z" fill="white"/>
                                        </svg>                                    
                                    </Link></li>
                                    <li><Link to="#">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path id="coolicon" d="M0.142578 10.0602C0.143742 15.0099 3.72098 19.2243 8.57958 20V12.968H6.04258V10.0602H8.58258V7.84664C8.46903 6.79776 8.8251 5.75242 9.55422 4.99411C10.2833 4.23581 11.3099 3.84315 12.3556 3.92263C13.1061 3.93482 13.8548 4.00208 14.5956 4.12386V6.598H13.3316C12.8964 6.54065 12.4589 6.68525 12.1423 6.99107C11.8258 7.29688 11.6644 7.73081 11.7036 8.17062V10.0602H14.4746L14.0316 12.969H11.7036V20C16.9581 19.1645 20.6427 14.3361 20.0881 9.01285C19.5335 3.68957 14.9339 -0.265066 9.6214 0.0138897C4.30894 0.292846 0.143423 4.70774 0.142578 10.0602Z" fill="white"/>
                                        </svg>
                                    </Link></li>
                                    <li><Link to="#">
                                        <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.832 0.296632C23.4226 -0.0468093 22.7796 -0.0959495 22.1147 0.168111H22.1136C21.4144 0.445672 2.32053 8.54786 1.54324 8.87888C1.40186 8.92748 0.167148 9.38324 0.294331 10.3984C0.407868 11.3137 1.40022 11.6928 1.5214 11.7366L6.37565 13.3809C6.6977 14.4414 7.88493 18.3543 8.14748 19.1902C8.31124 19.7113 8.57816 20.396 9.04595 20.537C9.45643 20.6936 9.86473 20.5505 10.1289 20.3453L13.0967 17.622L17.8876 21.3184L18.0017 21.3859C18.327 21.5284 18.6387 21.5997 18.9362 21.5997C19.166 21.5997 19.3865 21.557 19.5972 21.4717C20.315 21.1801 20.6022 20.5035 20.6322 20.4268L24.2108 2.02518C24.4291 1.04237 24.1256 0.542332 23.832 0.296632ZM10.6568 14.0386L9.01921 18.3586L7.38165 12.9586L19.9362 3.77856L10.6568 14.0386Z" fill="white"/>
                                        </svg>
                                    </Link></li>
                                    <li><Link to="#">
                                        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.1017 1.96755C19.0249 0.29635 15.7396 0.0130616 15.5989 0.00287098C15.3809 -0.0154713 15.173 0.106812 15.0833 0.308578C15.0752 0.320806 15.0038 0.485888 14.9243 0.742681C16.298 0.975018 17.9855 1.44173 19.512 2.38942C19.7565 2.54024 19.8319 2.86225 19.6811 3.10681C19.5813 3.26782 19.4121 3.35545 19.2368 3.35545C19.1431 3.35545 19.0473 3.32896 18.9617 3.27597C16.3367 1.64757 13.0595 1.56605 12.4277 1.56605C11.7959 1.56605 8.51673 1.64757 5.89377 3.27597C5.6492 3.42882 5.32719 3.35341 5.17638 3.10885C5.02352 2.86225 5.09893 2.54227 5.3435 2.38942C6.86999 1.44377 8.55749 0.975018 9.93113 0.744719C9.85165 0.485888 9.78032 0.322844 9.7742 0.308578C9.68249 0.106812 9.47665 -0.0195471 9.25654 0.00287098C9.11591 0.0130616 5.83059 0.296349 3.72529 1.98996C2.62678 3.00695 0.427734 8.94988 0.427734 14.0878C0.427734 14.1795 0.452191 14.2671 0.497028 14.3466C2.01333 17.0124 6.1526 17.7094 7.09621 17.74C7.10029 17.74 7.1064 17.74 7.11252 17.74C7.27964 17.74 7.43657 17.6605 7.53439 17.526L8.4882 16.2135C5.91415 15.5491 4.59961 14.42 4.5242 14.3527C4.30817 14.1632 4.28779 13.833 4.47937 13.617C4.6689 13.401 4.99907 13.3806 5.2151 13.5701C5.24567 13.5987 7.66687 15.653 12.4277 15.653C17.1968 15.653 19.618 13.5905 19.6424 13.5701C19.8584 13.3826 20.1866 13.401 20.3781 13.619C20.5677 13.8351 20.5473 14.1632 20.3313 14.3527C20.2559 14.42 18.9413 15.5491 16.3673 16.2135L17.3211 17.526C17.4189 17.6605 17.5758 17.74 17.743 17.74C17.7491 17.74 17.7552 17.74 17.7593 17.74C18.7029 17.7094 22.8421 17.0124 24.3584 14.3466C24.4033 14.2671 24.4277 14.1795 24.4277 14.0878C24.4277 8.94988 22.2287 3.00695 21.1017 1.96755ZM9.03643 12.0008C8.0276 12.0008 7.21034 11.0674 7.21034 9.91388C7.21034 8.76034 8.0276 7.82692 9.03643 7.82692C10.0453 7.82692 10.8625 8.76034 10.8625 9.91388C10.8625 11.0674 10.0453 12.0008 9.03643 12.0008ZM15.819 12.0008C14.8102 12.0008 13.993 11.0674 13.993 9.91388C13.993 8.76034 14.8102 7.82692 15.819 7.82692C16.8279 7.82692 17.6451 8.76034 17.6451 9.91388C17.6451 11.0674 16.8279 12.0008 15.819 12.0008Z" fill="white"/>
                                        </svg>
                                    </Link></li>
                                    
                                </ul>   
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Team data={dataTeam} />

            <Partner data={dataPartner} />
        </div>
    );
}

export default TeamDetail;