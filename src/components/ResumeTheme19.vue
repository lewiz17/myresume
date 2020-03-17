<template>
    <div class="theme-wrapper">
        <div class="hold-theme19">
            <v-container>
                <v-row class="headSection">
                    <v-col lg="2" sm="3" class="cover-profile">
                        <div class="profile">
                            <img :src="freelancer.user_data.profile_picture" alt=""> 
                        </div>
                 
                    </v-col>
                    <v-col lg="3" sm="4" class="hold-profile">
                        <span class="head-name">{{freelancer.user_data.first_name}}</span>
                        <span class="head-profile">{{nameFakeProfile}}</span>
                        <a href="" class="tap-tochat">tap to chat</a>
                        
                    </v-col>
                    <v-col sm="5" class="hold-ontab">
                        <div class="actions-wrap">
                            <a href="#"><img src="@/assets/imgs/resume19/icon-videocamera.svg" alt=""></a>
                            <a href="#"><img src="@/assets/imgs/resume19/icon-microphone.svg" alt=""></a>
                        </div>
                        <div class="social-wrap">
                            <a href="#">
                                <img src="@/assets/imgs/resume19/icon-instagram.svg" alt="">
                            </a>
                            <a href="#">
                                <img src="@/assets/imgs/resume19/icon-linkedin.svg" alt="">
                            </a>
                            <a href="#">
                                <img src="@/assets/imgs/resume19/icon-facebook.svg" alt="">
                            </a>
                            <a href="#">
                                <img src="@/assets/imgs/resume19/icon-behance.svg" alt="">
                            </a>
                             <a href="#">
                                <img src="@/assets/imgs/resume19/icon-dribble.svg" alt="">
                            </a>
                        </div>
                    </v-col>
                    <v-col lg="4" sm="12" class="hold-social">
                        <div class="info-hire">
                            <div class="rate">
                                <span>rate $ usd</span>
                                <span class="valueThis">$ {{Math.ceil(freelancer.agent.hourly_rate)}} hourle</span>
                            </div>
                            <div class="hours">
                                <span>availability hours</span>
                                <span class="valueThis">{{Math.ceil(freelancer.user_data.available_hours_per_week)}} hours</span>
                            </div>
                        </div>
                        <div class="social-wrap d-sm-none d-md-flex">
                            <a href="#">
                                <img src="@/assets/imgs/resume19/icon-instagram.svg" alt="">
                            </a>
                            <a href="#">
                                <img src="@/assets/imgs/resume19/icon-linkedin.svg" alt="">
                            </a>
                            <a href="#">
                                <img src="@/assets/imgs/resume19/icon-facebook.svg" alt="">
                            </a>
                            <a href="#">
                                <img src="@/assets/imgs/resume19/icon-behance.svg" alt="">
                            </a>
                             <a href="#">
                                <img src="@/assets/imgs/resume19/icon-dribble.svg" alt="">
                            </a>
                        </div>
                    </v-col>
                    <v-col lg="3" sm="12" class="hold-hireme">
                        <div class="hireme">
                            <a href="" class="btn-hire">Hire me</a>
                        </div>
                    </v-col>
                </v-row>

                <v-row class="mainSection">
                                 
                    <v-col class="hold-menu">

                        <div class="optiontabs-wrap">
                            <div class="actions-wrap d-sm-none d-md-flex">
                                <a href="#"><img src="@/assets/imgs/resume19/icon-videocamera.svg" alt=""></a>
                                <a href="#"><img src="@/assets/imgs/resume19/icon-microphone.svg" alt=""></a>
                            </div>
                            <v-tabs
                                class="main-tabs_theme19"
                                v-model="activeTab"
                                height="106"
                                :center-active="true"
                                hide-slider
                            >

                                <v-tab
                                    v-for="(tab,index) in freelancer.agent.resume_tabs"
                                    :key="index"
                                    :href="`#tab-${index}`"
                                    @click="setTab(tab)"
                                    :ripple="false"
                                >
                                    {{getTabName(tab.label)}}                                   
                                </v-tab>                       
                            </v-tabs>
                        </div>
                        
                        <div class="hold-contents wraps-theme19">
                            <v-tabs-items v-model="activeTab">
                                <v-tab-item class="portfolio-section" value="tab-0">
                                    <div class="hold-carousel">
                                        <slick ref="slick" :options="slickPortfolio">
                                            <div class="slide-item" v-for="(item, index) in 6" :key="index+'P'">
                                                <img src="@/assets/imgs/resume19/slide.svg" alt=""/>
                                            </div>
                                        </slick>
                                        <div class="wrapNav-portfolio nav-slider"></div>
                                    </div>
                                    
                                </v-tab-item>
                                <v-tab-item class="work-section" value="tab-1">
                                    <div class="hold-carousel wrap-texts">
                                        <slick ref="slick" :options="slickWork">
                                            <div class="slide-item" v-for="(work, index) in worksHistory" :key="index+'W'">
                                                <div class="hold-titles">
                                                    <span class="title-work">{{work.job_title}}</span>                                                                        
                                                    <span class="years-work">
                                                        {{getFullYear(work.date_from)}}
                                                        <span v-if="work.is_currently_working">- Present</span>
                                                        <span v-else>&nbsp;-&nbsp;{{getFullYear(work.date_to)}}</span>
                                                    </span>
                                                </div>
                                                <div class="hold-text">
                                                    <span class="title-company">{{work.company}}</span>
                                                    <span class="list-tasks">{{work.job_description}}</span>
                                                </div>
                                            </div>
                                        </slick>
                                        <div class="wrapNav-work nav-slider" v-show="worksHistory.length>2"></div>
                                    </div>
                                </v-tab-item>
                                <v-tab-item class="education-section" value="tab-2">
                                    <div class="hold-carousel wrap-texts">
                                        <slick ref="slick" :options="slickEducation">
                                            <div class="slide-item" v-for="(education, index) in educationsHistory" :key="index+'W'">
                                                <div class="hold-titles">
                                                    <span class="title-work">{{education.school_title}}</span>
                                                                                                            
                                                    <span class="years-work">
                                                        {{getFullYear(education.date_from)}}
                                                        <span v-if="education.is_currently_working">- Present</span>
                                                        <span v-else>&nbsp;-&nbsp;{{getFullYear(education.date_to)}}</span>
                                                    </span>
                                                </div>
                                                <div class="hold-text">
                                                    <span class="title-company">{{education.school_title}}</span>
                                                    <span class="list-tasks">{{education.description}}</span>
                                                </div>
                                            </div>
                                        </slick>
                                        <div class="wrapNav-education nav-slider" v-show="educationsHistory.length>2"></div>
                                    </div>
                                </v-tab-item>
                                <v-tab-item class="skills-section" value="tab-3">
                                    <div class="hold-carousel wrap-skills">
                                        <slick ref="slick" :options="slickSkills">
                                            <div class="slide-item" v-for="(skill, index) in skills" :key="index+'S'">
                                                <div class="item-skill" v-for="(el, index) in 4" :key="index+'iS'">
                                                    <span class="skill-pic">
                                                        <img :src="getIconSrc('php')" alt="">
                                                    </span>                                                    
                                                    <v-progress-linear value="90"
                                                        :background-color="`rgba(${bgColorProgress})`"
                                                        :color="colorProgress"
                                                        height="8"
                                                    ></v-progress-linear>
                                                </div>
                                            </div>
                                        </slick>
                                        <div class="wrapNav-skills nav-slider" v-show="skills.length>0"></div>
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

    }
    .hold-theme19{

        background-image: url('../assets/imgs/resume19/bg-theme.svg');
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;
        justify-content: center;
        align-items: center;
        display: flex;

        .container{
            padding: 0;
            max-width: 1920px !important;

            .col{
                padding: 0;
            }
        }


        .headSection{
            padding: 2% 2% 0px 2%;
            display: flex;
            justify-content: center; 

            @media screen and (max-width: 769px) {
                padding-top: 35px;
            }
            
        }

        .mainSection{
            padding: 0px 59px;  
            @media screen and (max-width: 769px) {
                padding: 64px 15px !important;
            }
        }

        .optiontabs-wrap{
            display: flex;
            flex-flow: row;
            justify-content: space-between;
            margin-top: 15px;
        }

        @media screen and (max-width: 769px) {
            background-image: url('../assets/imgs/resume19/bg-theme_tablet.svg');
        }


    }

    .hold-ontab{
        display: none !important;
        @media screen and (max-width: 769px) {
            display: block !important;

            .social-wrap{
                margin-top: 10%;

                a{
                    margin: 0px 3%;

                    &:first-child{
                        margin-left: 0;
                    }

                    img{
                        width: 41px;
                        height: 41px;
                    }
                }
            }
        }
    }

    .cover-profile{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }   

    .profile{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 244px;
        height: 244px;
        border-radius: 100%;
        border: 10px solid #fff;

        img{
            width: 226px;
            max-height: 226px;
            border-radius: 100%;
        }

        @media screen and (max-width: 769px) {
            width: 147px;
            height: 147px;

            img{
                width: 136px;
                height: 136px;
            }
        }
    }
    .hold-profile{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-flow: column;
        
        &.col{
            padding-top: 26px !important;
        }

        .head-name{

            font-family: "Montserrat";
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 30px;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: #FFFFFF;
        }

        .head-profile{
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 18px;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: #FFFFFF;
            margin-top: 15px;
        }

        .tap-tochat{
            font-family: "Montserrat";
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: #FFFFFF;
            width: 174px;
            height: 55px;
            border: 5px solid #FFFFFF;
            border-radius: 80px;
            text-decoration: none;
            background: linear-gradient(180deg, #00A9FF 0%, rgba(37, 175, 245, 0.76) 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 25px;
        }

        @media screen and (max-width: 769px) {
            

            .head-name{
                font-size: 24px;
                line-height: 24px;
            }
            .head-profile{
                font-size: 14px;
                line-height: 14px;
            }
            .tap-tochat{
                border: 3px solid #fff;
                width: 152px;
                font-size: 11px;
                line-height: 11px;
                height: 48px;
            }
        }

    }
    
    .hold-social{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;

        .social-wrap{
            margin-top: 50px;
            display: flex;
            align-items: flex-start;
            width: 100%;

            a{
                margin: 0px 13px;
            }
        }

        .info-hire{

            display: flex;
            flex-flow: row;
            justify-content: space-between;
            width: 100%;

            .rate,.hours{
                display: inline-flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;

                >span{
                    font-family: "Montserrat";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 24px;
                    text-align: center;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #2176E5;
                }

                .valueThis{
                    font-size: 24px;
                    line-height: 29px;
                    color: #FFFFFF;
                    margin-top: 15px;
                }

                

            }


        }

        @media screen and (max-width: 769px) {
            margin-top: 70px;

            .info-hire{
                justify-content: space-around;
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

        .btn-hire{
           background: linear-gradient(261.61deg, #F39BBD 1.4%, #BB406F 116.77%);
            border: 8px solid #FFFFFF;
            width: 413px;
            height: 130px;
            box-sizing: border-box;
            box-shadow: 0px 4px 30px rgba(44, 37, 66, 0.08);
            border-radius: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;

            font-family: "Montserrat";
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: #FFFFFF;

            &:hover{
                opacity: .8;
            }
        }

        @media screen and (max-width: 769px) {
            margin-top: 65px;

            .btn-hire{
                width: 343px;
                height: 108px;
                border: 5px solid #FFFFFF;
            }
        }
    }

    .main-tabs_theme19{
        max-width: 1532px;
        background: linear-gradient(266.98deg, #00A9FF 4.86%, #1B90CB 103.55%);
        min-height: 122px;
        box-shadow: 0px 4px 30px rgba(44, 37, 66, 0.08);
        border-radius: 80px;
        border: 8px solid #FFFFFF;

        @media screen and (max-width: 769px) {
            min-width: 860px;
            border: 5px solid #fff;
            padding: 0 0 0 40px;
            position: relative;
            overflow: hidden;
            white-space: nowrap;
        }
        

    }

    .v-tab{
        padding: 0px;
        margin: 0px 2%;

        font-family: "Montserrat";
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        line-height: 35px;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.5) !important;

        &:nth-child(1){
            order: 1;
        }
        &:nth-child(2){
            order: 3;
        }
        &:nth-child(3){
            order: 4;
        }
        &:nth-child(4){
            order: 2;
        }

        img{
            opacity: 0.4;
            margin-right: 10px;
        }

        &.v-tab--active{        
            color: #fff !important;

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
            margin: 0px 28px;

            &:first-child{
                margin-left: 0px;
            }

            &:nth-child(3){
                padding-right: 100px;
            }
        }
        

    }

    .hold-items{
        display: flex;
        justify-content: center;

        .container{
            padding: 120px 0px 0px 0px;
            max-width: 1806px !important;

        }

        .row{
            justify-content: center;

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
            

            &.work-item{
                background: #3B0463;
                box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.1);
                border-radius: 30px;
                max-width: 778px;
                margin: 0px 38.5px 70px 38.5px;
            }
        }
        .item-skill{

            span{
                font-family: "Lato";
                font-style: normal;
                font-weight: bold;
                font-size: 48px;
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
            padding: 100px 0px 100px 90px;
        }
        .hold-text{
            width: 60%;
            padding: 100px 90px 100px 0px;
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

        .edu-item{
            background: #3B0463;
            box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.1);
            border-radius: 30px;
            max-width: 778px;
            margin: 0px 38.5px 70px 38.5px;
            flex-flow: row;
            flex-wrap: wrap;
            padding: 65px 150px !important;

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

    .actions-wrap{
        margin-top: 15px;
        display: flex;
        justify-content: center;

        a{
            width: 91px;
            height: 91px;
            text-align: center;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            border: 8px solid #fff;
            margin: 0px 12.5px;
            background-image: linear-gradient(to left bottom, #00a9ff, #02a3f2, #0a9de5, #1396d8, #1b90cb);

            img{
                width: 50px;
            }
            
        }

        @media screen and (max-width: 769px) {

            justify-content: flex-start;

            a{
                width: 45px;
                height: 45px;
                border: 3px solid #fff;

                img{
                    width: 26px;
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

    import Slick from 'vue-slick';

    export default {
        name: 'Theme19',
        props: ['freelancer'],
        components: {
            Slick
        },
        data() {
            return {
                worksHistory: this.freelancer.works_history,
                educationsHistory: this.freelancer.educations_history,
                skills: this.freelancer.skills,
                activeTab: null,
                nameFakeProfile: 'Web designer',
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
                slickPortfolio: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    nextArrow: '<a href="" class="slick-arrow slick-next">next</a>',
                    prevArrow: '<a href="" class="slick-arrow slick-prev">prev</a>',
                    appendArrows: '.wrapNav-portfolio',
                    swipe: true,
                    speed: 500,
                    variableWidth: true,
                    responsive: [
                        {
                            breakpoint: 786,
                            settings: {
                                vertical: true,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                variableWidth: false,
                                verticalSwiping: true
                            }
                        }
                    ]
                },
                slickWork: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    nextArrow: '<a href="" class="slick-arrow slick-next">next</a>',
                    prevArrow: '<a href="" class="slick-arrow slick-prev">prev</a>',
                    appendArrows: '.wrapNav-work',
                    swipe: true,
                    speed: 500,
                    variableWidth: true,
                    responsive: [
                        {
                            breakpoint: 786,
                            settings: {
                                vertical: true,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                variableWidth: false,
                                verticalSwiping: true
                            }
                        }
                    ]
                },
                slickEducation: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    nextArrow: '<a href="" class="slick-arrow slick-next">next</a>',
                    prevArrow: '<a href="" class="slick-arrow slick-prev">prev</a>',
                    appendArrows: '.wrapNav-Education',
                    swipe: true,
                    speed: 500,
                    variableWidth: true,
                    responsive: [
                        {
                            breakpoint: 786,
                            settings: {
                                vertical: true,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                variableWidth: false,
                                verticalSwiping: true
                            }
                        }
                    ]
                },
                
                slickSkills: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    nextArrow: '<a href="" class="slick-arrow slick-next">next</a>',
                    prevArrow: '<a href="" class="slick-arrow slick-prev">prev</a>',
                    appendArrows: '.wrapNav-skills',
                    swipe: true,
                    speed: 500,
                    responsive: [
                        {
                            breakpoint: 786,
                            settings: {
                                vertical: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                verticalSwiping: true
                            }
                        }
                    ]
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
                radioGroup: 1,
                bgColorProgress: "255, 255, 255, 0.6",
                colorProgress: "#2176E5"
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
            nextSlide() {
                this.$refs.slick.next();
            },
            prevSlide() {
                this.$refs.slick.prev();
            },
            reInit() {
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },
            getIconSrc(title) {
                let arrayIcons = {
                    'portfolio': 'imgs/resume19/icon-tab1.png',
                    'work': 'imgs/resume19/icon-tab2.png',
                    'education': 'imgs/resume19/icon-tab3.png',
                    'skills': 'imgs/resume19/icon-tab4.png',

                    /** icons on skills */
                    'php': 'imgs/resume19/icon-php.svg',
                    'css3': 'imgs/resume19/icon-css3.svg',
                    'html5': 'imgs/resume19/icon-html5.svg',
                    'js': 'imgs/resume19/icon-js.svg',


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
            
            
        }
    }
</script>

