<template>
    <div class="theme-wrapper">
        <div class="hold-theme27">
            <v-container fluid>
                <v-row class="headSection" no-gutters>
                    <v-col lg="2" sm="3" class="cover-profile">
                        <div class="profile">
                            <img :src="freelancer.user_data.profile_picture" alt=""> 
                        </div>
                    </v-col>
                    <v-col lg="2" sm="5" class="hold-profile">
                        <div class="head-name">{{freelancer.user_data.first_name}}</div>
                        <div class="head-profile">User interface designer</div>
                        <div class="actions-wrap only-desk only-mob">
                            <a href=""><img src="@/assets/imgs/resume27/icon-mail.svg" alt=""></a> 
                            <a href=""><img src="@/assets/imgs/resume27/icon-videoplayer.svg" alt=""></a>
                            <a href=""><img src="@/assets/imgs/resume27/icon-headphone.svg" alt=""></a>
                        </div>
                        <div class="social-wrap only-tab">
                            <a href="">
                                <img src="@/assets/imgs/resume27/icon-instagram.svg" alt="">
                            </a>
                            <a href="">
                                <img src="@/assets/imgs/resume27/icon-linkedin.svg" alt="">
                            </a>
                            <a href="">
                                <img src="@/assets/imgs/resume27/icon-facebook.svg" alt="">
                            </a>
                            <a href="">
                                <img src="@/assets/imgs/resume27/icon-behance.svg" alt="">
                            </a>
                        </div>
                    </v-col>
                    <v-col lg="5" class="hold-social">
                        <span>Links to my profiles:</span>
                        <div class="social-wrap only-desk only-mob">
                            <a href="">
                                <img src="@/assets/imgs/resume27/icon-instagram.svg" alt="">
                            </a>
                            <a href="">
                                <img src="@/assets/imgs/resume27/icon-linkedin.svg" alt="">
                            </a>
                            <a href="">
                                <img src="@/assets/imgs/resume27/icon-facebook.svg" alt="">
                            </a>
                            <a href="">
                                <img src="@/assets/imgs/resume27/icon-behance.svg" alt="">
                            </a>
                        </div>
                        <div class="actions-wrap only-tab">
                            <a href=""><img src="@/assets/imgs/resume27/icon-mail.svg" alt=""></a> 
                            <a href=""><img src="@/assets/imgs/resume27/icon-videoplayer.svg" alt=""></a>
                            <a href=""><img src="@/assets/imgs/resume27/icon-headphone.svg" alt=""></a>
                        </div>
                    </v-col>
                    <v-col lg="3" class="hold-hireme">
                        <div class="info-hire">
                            <div class="rate">
                                <span>Hourly rate </span>
                                <span class="valueThis">$ {{Math.ceil(freelancer.agent.hourly_rate)}} USD</span>
                            </div>
                            <div class="hours">
                                <span>Available for </span>
                                <span class="valueThis">{{Math.ceil(freelancer.user_data.available_hours_per_week)}} hours</span>
                            </div>
                        </div>
                        
                        <div class="hireme">
                            <a href="" class="btn-hire">Hire me</a>
                        </div>
                    </v-col>
                </v-row>

                <v-row class="mainSection" no-gutters>
                    <v-col class="hold-menu">
                        <v-tabs
                            class="main-tabs_theme27"
                            v-model="activeTab"
                            :center-active="true"
                            height="85"
                            hide-slider
                        >
                            <v-tab
                                v-for="(tab,index) in freelancer.agent.resume_tabs"
                                :key="index"
                                :href="`#tab-${index}`"
                                @click="setTab(tab)"
                                :ripple="false"
                            >
                                <img :src="getIconSrc(tab.name)">
                                {{getTabName(tab.label)}}                                   
                            </v-tab>                       
                        </v-tabs>
                        <div class="hold-contents">
                            <v-tabs-items v-model="activeTab">
                                <v-tab-item class="portfolio-section" value="tab-0">
                                    <div class="hold-items">
                                        <v-container>
                                            <v-row>
                                                <v-col class="item" lg="4" md="12" cols="12">
                                                    <img src="@/assets/imgs/resume27/item2.svg" alt="">
                                                </v-col>
                                                <v-col class="item" lg="4" md="12" cols="12">
                                                    <img src="@/assets/imgs/resume27/item2.svg" alt="">
                                                </v-col>
                                                <v-col class="item" lg="4" md="12" cols="12">
                                                    <img src="@/assets/imgs/resume27/item2.svg" alt="">
                                                </v-col>
                                                <v-col class="item" lg="4" md="12" cols="12">
                                                    <img src="@/assets/imgs/resume27/item2.svg" alt="">
                                                </v-col>

                                                <v-col class="item" lg="4" md="12" cols="12">
                                                    <img src="@/assets/imgs/resume27/item2.svg" alt="">
                                                </v-col>
                                                <v-col class="item" lg="4" md="12" cols="12">
                                                    <img src="@/assets/imgs/resume27/item2.svg" alt="">
                                                </v-col>
                                                
                                            </v-row>
                                        </v-container>                                     
                                    </div>
                                </v-tab-item>
                                <v-tab-item class="work-section" value="tab-1">
                                    <div class="hold-items">
                                        <v-container>
                                            <v-row>
                                                <v-col class="item work-item" v-for="(work, index) in worksHistory" :key="index+'W'" lg="6" md="12" cols="12">
                                                    <div class="hold-titles">
                                                        <span class="title-work">{{work.job_title}}</span>
                                                                                                               
                                                        <span class="years-work">
                                                            <span class="title-refer">Duration:</span> 
                                                            {{getFullYear(work.date_from)}}
                                                            <span v-if="work.is_currently_working">- Present</span>
                                                            <span v-else>&nbsp;-&nbsp;{{getFullYear(work.date_to)}}</span>
                                                        </span>
                                                    </div>
                                                    <div class="hold-text">
                                                        <span class="title-company">{{work.company}}</span>
                                                        <span class="list-tasks">{{work.job_description}}</span>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                       
                                    </div>
                                </v-tab-item>
                                <v-tab-item class="education-section" value="tab-2">
                                    <div class="hold-items">
                                        <v-container>
                                            <v-row>
                                                <v-col class="item edu-item" v-for="(education, index) in educationsHistory" :key="index+'W'" lg="6" md="12" cols="12">
                                                    <div class="hold-titles">
                                                        <span class="title-refer">University</span>
                                                        <span class="title-work">{{education.school_title}}</span>
                                                        
                                                    </div>
                                                    <div class="hold-text">
                                                        <span class="title-company">{{education.school_title}}</span>
                                                        <span class="years-work">
                                                            
                                                            {{getFullYear(education.date_from)}}
                                                            <span v-if="education.is_currently_learning">- Present</span>
                                                            <span v-else>&nbsp;-&nbsp;{{getFullYear(education.date_to)}}</span>
                                                        </span>
                                                        <span class="list-tasks">{{education.description}}</span>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </div>
                                </v-tab-item>
                                <v-tab-item class="skills-section" value="tab-3">
                                    <div class="hold-items">
                                        <v-container>
                                            <v-row>
                                                <v-col lg="12">
                                                    <div class="item-skill">
                                                        <span class="name-skill">Photoshop</span>
                                                        <v-progress-linear
                                                            color="#ddd"
                                                            rounded
                                                            height="22"
                                                            value="90"
                                                        ></v-progress-linear>
                                                        <span class="percent">90%</span>
                                                    </div> 
                                                </v-col>
                                                <v-col lg="12">
                                                    <div class="item-skill">
                                                        <span class="name-skill">Photoshop</span>
                                                        <v-progress-linear
                                                            color="#ddd"
                                                            rounded
                                                            height="22"
                                                            value="80"
                                                        ></v-progress-linear>
                                                        <span class="percent">80%</span>
                                                    </div> 
                                                </v-col>
                                                <v-col lg="12">
                                                    <div class="item-skill">
                                                        <span class="name-skill">Photoshop</span>
                                                        <v-progress-linear
                                                            color="#ddd"
                                                            rounded
                                                            height="22"
                                                            value="95"
                                                        ></v-progress-linear>
                                                        <span class="percent">95%</span>
                                                    </div> 
                                                </v-col>
                                                <v-col lg="12">
                                                    <div class="item-skill">
                                                        <span class="name-skill">Photoshop</span>
                                                        <v-progress-linear
                                                            color="#ddd"
                                                            rounded
                                                            height="22"
                                                            value="60"
                                                        ></v-progress-linear>
                                                        <span class="percent">60%</span>
                                                    </div> 
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                                                              
                                    </div>
                                    
                                </v-tab-item>
                            </v-tabs-items>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>
<style lang="scss" scoped>

    
    @import url('https://fonts.googleapis.com/css?family=Lato:100,400,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');

    .theme-wrapper{
        display: flex;
        justify-content: center;
    }

    .only-tab{
        display: none !important;
        @media screen and (max-width: 769px) {
            display: block !important;
        }
        @media screen and (max-width: 480px) {
            display: none !important;
        }
    }
    .only-desk{
        @media screen and (min-width: 770px) {
            display: block !important;
        }
        @media screen and (max-width: 769px) {
            display: none !important;
        }

    }
    .only-mob{
        display: block !important;
        @media screen and (max-width: 769px) {
            display: none !important;
        }
        @media screen and (max-width: 480px) {
            display: block !important;
        }
    }
    .hold-theme27{
        background-image: url('../assets/imgs/resume27/bg-theme.svg');
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        max-width: 1920px;
        min-height: 1600px;

        .container{
            padding: 0;
        }


        .headSection{
            padding: 2%;
            display: flex;
            justify-content: center;

            .col{
                padding: 0;
            }
        }

        @media screen and (max-width: 769px) {
            width: 100%;
            background-size: cover;
            background: url('../assets/imgs/resume27/bg-theme-tab.svg'),
            linear-gradient(100.02deg, #1D0553 -1.87%, #3C065D 65.2%);

            background-repeat: no-repeat;


            .headSection{
                padding: 7% 3% 0;
            }

        }

        @media screen and (max-width: 480px) {

            .headSection{
                justify-content: space-between;
            }
        }

        


    }

    .mainSection{
        @media screen and (max-width: 769px) {
            padding: 115px 15px !important; 
        }
        @media screen and (max-width: 480px) {
            padding: 55px 0px !important; 
        }
    }

    .cover-profile{
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 480px) {
            max-width: 130px;
        }
    }   

    .profile{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 217px;
        height: 217px;
        border-radius: 200px;
        background-image: linear-gradient(to right bottom, #c10fa0, #980e91, #710c7f, #4b096c, #270556);

        img{
            width: 201px;
            height: 201px;
            border-radius: 100%;
        }

        @media screen and (max-width: 769px) {
            width: 169px;
            height: 169px;

            img{
                width: 156px;
                height: 156px;
            }
        }
        @media screen and (max-width: 480px) {
            width: 125px;
            height: 125px;

            img{
                width: 115.8px;
                height: 115.8px;
            }
        }
    }
    .hold-profile{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-flow: column;

        .head-name{
            font-family: "Lato";
            font-weight: 900;
            font-size: 40px;
            line-height: 48px;
            color: #C10FA0;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        }

        .head-profile{
            font-family: "Lato";
            font-weight: normal;
            font-size: 21px;
            line-height: 25px;
            color: #FFFFFF;
        }

        @media screen and (max-width: 769px) {
            padding: 0 0 0 2% !important;

            .social-wrap{
                margin-top: 20px;

                a{
                    margin-right: 25px;

                    &:last-child{
                        margin: 0;
                    }
                    img{
                        max-width: 44px;
                    }
                }
            }
            .head-name{
                font-size: 36px;
            }

            .head-profile{
                font-size: 18px;
            }
        }
        @media screen and (max-width: 480px) {
            padding: 0 0 0 5% !important;

            .head-name{
                font-size: 24px;
                line-height: 25px;
            }

            .head-profile{
                font-size: 14px;
                line-height: 25px;
            }
        }



    }

    .hold-social{
        display: flex;
        justify-content:center;
        align-items: center;
        flex-flow: column;

        span{
            font-family: "Lato";
            font-style: normal;
            font-weight: normal;
            font-size: 21px;
            line-height: 25px;
            color: #FFFFFF;
            margin-bottom: 6%;
        }

        .social-wrap{
            a{
                margin: 0px 13px;
            }
        }

        @media screen and (max-width: 769px) {
            align-items: flex-start;
            justify-content: flex-start;
            padding-top: 2% !important;
            flex-flow: wrap;

            span{
                display: none;
            }   

            
            
        }
        @media screen and (max-width: 480px) {
            min-width: 100%;
            margin-top: 30px;

            .social-wrap{
                margin: 0px auto;

                a{
                    width: 36px;
                    display: inline-block;
                    height: 36px;
                    margin: 0px 10px;

                    img{
                        max-width: 100%;
                    }
                }
            }
        }
    }

    .hold-hireme{
        display: flex;
        flex-flow: column;
        justify-content: center;

        >div{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .info-hire{
            >div{
                display: flex;
                flex-flow: column;
                align-items: center;
            }

            span{
                font-family: "Lato";
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 29px;
                color: #B70E9B;
                margin: 0px 34.5px;

                &.valueThis{
                    font-weight: 900;
                    font-size: 32px;
                    line-height: 50px;
                    color: #FFFFFF;
                }
            }

            .hours{
                
                border-left: 1px solid rgba(255, 255, 255, 0.38);
            }
        }

        .btn-hire{
            background: linear-gradient(96.78deg, #C210A0 12.14%, #C200C6 95.04%);
            box-shadow: 2px 5px 30px rgba(192, 18, 159, 0.37);
            border-radius: 15px;
            font-family: "Lato";
            font-style: normal;
            font-weight: 900;
            font-size: 24px;
            line-height: 29px;
            text-transform: uppercase;
            color: #FFFFFF;
            min-width: 293px;
            min-height: 79px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            margin-top: 28px;

            &:hover{
                opacity: .8;
            }
        }

        @media screen and (max-width: 769px) {
            flex-flow: row;
            justify-content: space-between;
            margin-top: 60px;

            .info-hire{
                min-width: 376px;
                justify-content: space-between;
                align-items: center;

                .hours{
                    border: 0;
                    position: relative;

                    &::before{
                        content: "";
                        background: rgba(255, 255, 255, 0.38);
                        height: 41px;
                        width: 1px;
                        position: absolute;
                        left: -60px;
                        top: 20px;
                    }
                }
                span{
                    margin: 0;
                }
            }

            .btn-hire{
                min-width: 233px;
                min-height: 70px;
                margin-top: 0;
            }
        }
        @media screen and (max-width: 480px) {
            flex-flow: column;
            margin-top: 50px;

            .info-hire{
                min-width: 100%;
                justify-content: space-around;

                span{
                    font-size: 14px;
                    line-height: 17px;

                    &.valueThis{
                        font-size: 18px;
                        line-height: 22px;
                        padding-top: 8%;
                    }
                }

                .hours{
                    &::before{
                        left: -50px;
                        top: 0px;
                    }
                }
            }
            .hireme{
                margin-top: 40px;
            }

            .btn-hire{
                min-width: 190px;
                min-height: 58px;
                font-size: 14px;
                line-height: 17px;
            }
        }
    }

    .main-tabs_theme27{
        margin-bottom: 30px;

        @media screen and (max-width: 480px) {
            padding: 0px 20px;
        }
    }

    .v-tab{
        font-family: "Lato";
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        text-transform: capitalize;
        letter-spacing: 0px;
        line-height: 58px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        color: rgba(255, 255, 255, 0.21) !important;
        padding: 0px;
        margin: 0px 3%;

        img{
            opacity: 0.4;
            margin-right: 10px;
        }

        &.v-tab--active{        
            color: #C10FA0 !important;

            img{
                opacity: 1;
            }
        }

        &:hover,&:focus{
            &::before,&::after{
                opacity: 0 !important;
            }
        }

        @media screen and (max-width: 769px) {
            padding-right: 60px;
        }
        @media screen and (max-width: 480px) {
            padding: 0;
            margin: 0 30px 0 0;
            font-size: 24px;
            line-height: 29px;

            img{
                max-width: 64px;
            }
        }

    }

    

    .hold-items{
        display: flex;
        justify-content: center;

        .container{
            padding: 120px 0px 0px 0px;
            border-top: 4px solid rgba(255, 255, 255, 0.05);
            max-width: 1806px !important;

        }

        .row{
            justify-content: space-around;
            

            .col{
                padding: 0;
                margin-bottom: 68px;
            }
        }

        .item{
            display: flex;
            justify-content: center;
            padding: 0;
            margin-bottom: 50px;

            img{
                max-width: 100%;
                padding: 0;
            }
            

            &.work-item{
                background: #3B0463;
                box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.1);
                border-radius: 30px;
                max-width: 778px;
                margin-bottom: 70px;
            }
            &.edu-item{
                background: #3B0463;
                box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.1);
                border-radius: 30px;
                max-width: 778px;
                margin-bottom: 70px;
                flex-flow: row;
                flex-wrap: wrap;
                padding: 8%;

                .hold-titles,.hold-text{
                    height: auto;
                    justify-content: flex-start;
                    min-height: auto;
                    width: 100%;
                }

                .hold-titles{
                    padding: 0px;
                    min-width: auto;

                    .title-work{
                        margin-top: 30px;
                    }
                }
                .hold-text{
                    padding: 0;
                    margin-top: 30px;

                    .years-work{
                        color: #fff;
                    }
                }

                .list-tasks{
                    margin-top: 40px;
                }
            }
            
        }
        .item-skill{

            span{
                font-family: "Lato";
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 58px;
                

                &.name-skill{
                    color: #FFFFFF;
                }
                &.percent{
                    color: #C10FA0;
                }
            }

        }

        

        .hold-titles,.hold-text{
            display: flex;
            flex-flow: column;
            min-height: 388px;
            
        }
        .hold-titles{
            min-width: 22%;
            justify-content: space-between;
            align-items: flex-start;
            height: 100%;
            padding: 10% 0 10% 9%;
        }
        .hold-text{
            width: 60%;
            padding: 10% 9% 10% 0;
        }

        .title-work{
            font-family: "Lato";
            font-style: normal;
            font-weight: 900;
            font-size: 36px;
            line-height: 43px;
            color: #C10FA0;
        }

        .title-company{
            font-family: "Open Sans";
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 30px;
            color: #FFFFFF;
        }

        .list-tasks{
            font-family: "Lato";
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 23px;
            color: #FFFFFF;
            max-height: 70px;
            overflow: hidden;
            margin-top: 60px;
        }

        .years-work{
            font-family: "Lato";
            font-style: normal;
            font-weight: bold;
            font-size: 19px;
            line-height: 30px;
            color: #C10FA0;

              

        }
        .title-refer{
            color: #FFFFFF;
            display: block;
        }

        @media screen and (max-width: 769px) {

            .container{
                padding-top: 84px;
            }
            .item{
                margin-bottom: 68px;

                img{
                    width: 100%;
                }

                &.work-item{
                    min-height: 330px;
                }

                &.edu-item{
                    min-height: 330px;
                }
            }
            .hold-titles{
                min-height: auto;
            }
            .item-skill{
                width: 600px;
                flex-wrap: wrap;
                margin: 0px auto;
                justify-content: space-between;

                .v-progress-linear{
                    order: 3;
                    margin: 3% 0 0 0;
                }
                span{
                    font-size: 48px;

                    &.percent{
                        font-size: 48px;
                    }
                }
            }

        } 

        @media screen and (max-width: 480px) {
            padding: 0px 20px;

            .row{
                .col{
                    margin-bottom: 39px;
                }
            }

            .container{
                padding-top: 50px;
            }
            .item{
                margin-bottom: 30px;
                min-height: 250px;

                img{
                    max-width: 100%;
                }
            }
            .item-skill{
                width: 100%;

                span{
                    font-size: 24px;
                    line-height: 24px;
                    &.percent{
                        font-size: 24px;
                        line-height: 24px;
                    }
                }

                .v-progress-linear{
                    min-width: 336px;
                    height: 12px !important;
                }
            }
        }

        
        
    }

    .actions-wrap{
        margin-top: 35px;

        a{
            width: 57px;
            height: 57px;
            text-align: center;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            border: 2px solid #C10FA0;
            margin-right: 20px;

            &:last-child{
                margin: 0;
            }

            img{
                width: 28px;
                margin-top: 4px;
            }
            
        }
        @media screen and (max-width: 769px) {
            margin: 0;

            a{
                width: 54px;
                height: 54px;

                img{
                    width: 26px;
                }
            }
        }
        @media screen and (max-width: 480px) {
            margin-top: 20px;

            a{
                width: 37px;
                height: 37px;

                img{
                    width: 18px;
                }
            }
        }

    }

    .colo1{
        color: #C210A0;
    }
    .color2{
        color: #C200C6;
    }
</style>

<script>
    export default {
        name: 'Theme27',
        props: ['freelancer'],
        components: {},
        data() {
            return {
                worksHistory: this.freelancer.works_history,
                educationsHistory: this.freelancer.educations_history,
                skills: this.freelancer.skills,
                activeTab: null,
                formMessage: {
                    name: null,
                    nameRules: [
                        v => !!v || 'Name is required',
                        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                    ],
                    email: null,
                    emailRules: [
                        v => !!v || 'E-mail is required',
                        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                    ],
                    message: null
                },
                formHasErrors: false,
                formSent: false,
                isValid: false,
                // --Dialog
                dialogMessage: false,
                dialogAudio: false,
                dialogVideo: false,
                dialogHireme: false,
                dialogShare: false,
                // --Player
                playing: false,
                radioGroup: 1
            }
        },
        computed: {
            
        },
        watch: {

            freelancer: function () {
                // update freelancer data when prop changes
                this.skills = this.freelancer.skills;
                this.worksHistory = this.freelancer.works_history;
                this.educationsHistory = this.freelancer.educations_history;
            }
            
        },
        methods: {
            getIconSrc(title) {
                let arrayIcons = {
                    'portfolio': 'imgs/resume27/icon-tab1.png',
                    'work': 'imgs/resume27/icon-tab2.png',
                    'education': 'imgs/resume27/icon-tab3.png',
                    'skills': 'imgs/resume27/icon-tab4.png',

                }
                if (arrayIcons.hasOwnProperty(title.toLowerCase())) {
                    return require('@/assets/'+arrayIcons[title.toLowerCase()]);
                }
            },
            getClassProgress(d) {
                return this.styleProgress[d % this.styleProgress.length];
            },
            getFullYear(date){
                let newDate = new Date(date);
                let yyyy = newDate.getFullYear();
                return yyyy;
            },
            getTabName(label) {
                let arrayTabs = {
                    'portfolio': 'Portfolio',
                    'work': 'Work',
                    'education': 'Education',
                    'skills': 'Skills'
                }
                if (arrayTabs.hasOwnProperty(label.toLowerCase())) {
                    return arrayTabs[label.toLowerCase()];
                }
            },
            setTab(tabName) {
                this.currentTab = tabName;
            },
            isMobile() {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            },
            playAudio() {
                this.playing = true;
                this.$refs.audioElem.play();
            },
            pauseAudio() {
                this.playing = false;
                this.$refs.audioElem.pause();
            },
            playVideo() {
                this.$refs.videoPoster.style.display = "none";
                this.$refs.videoElem.play();
            },
            submitForm() {
                /** Logic data send */
                this.$refs.formMessages.validate();
                if(this.isValid){
                    this.formSent = true;
                }                
            },
            cancelForm() {
                this.dialogMessage = false;
                this.$refs.formMessages.reset();
                setTimeout(()=>{
                    this.formSent = false;
                },1000)                
            },
            getPercent(v) {
                return Math.floor((v*this.dotsProgress)/100);
            }
        },
        beforeMount(){},
        mounted() {
            
            if(this.freelancer.agent.resume_tabs.length > 0){
                this.setTab(this.freelancer.agent.resume_tabs[0]);
            }

            
        }
    }
</script>

