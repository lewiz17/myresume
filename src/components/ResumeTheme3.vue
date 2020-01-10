<template>
    <div id="freelancerResumeTheme3" class="d-flex">
        <v-container class="hold_theme3">
            <v-row class="freelancerCard">
                <v-col lg="12" md="12" cols="12" class="resumeCardRight">
                    <div class="showOnlyOnmd">
                        <v-row class="head-section">
                            <v-col lg="2" md="2" class="imageCol">
                                <span class="profile-img" v-bind:style="{ backgroundImage: 'url(' + freelancer.user_data.profile_picture + ')' }" /> 
                                <a href="" class="chat-option"><v-icon>mdi-message-text</v-icon></a>
                            </v-col>
                            <v-col lg="2" md="2">
                               <div class="head-name">{{freelancer.user_data.first_name}}</div>
                               <div class="head-profile">{{freelancer.user_data.job_title}}</div>
                               <div class="social-wrap">
                                    <a href="" alt="Twitter" title="Twitter"><v-icon>mdi-twitter</v-icon></a>
                                    <a href="" alt="Linkedin" title="Linkedin"><v-icon>mdi-linkedin</v-icon></a>
                                    <a href="" alt="Facebook" title="Facebook"><v-icon>mdi-facebook</v-icon></a>
                                    <a href="" alt="Instagram" title="Instagram"><v-icon>mdi-instagram</v-icon></a>
                               </div>
                            </v-col>
                            <v-col lg="4" md="2" class="interviewSection">
                                <span class="title-medium">View interviews</span>
                                <div class="option-wrap">
                                    <a href="" class="btn-default"><v-icon>mdi-microphone</v-icon>Audio &amp; Text</a>
                                    <a href="" class="btn-default"><v-icon>mdi-play-circle</v-icon>Video</a>
                                </div>
                            </v-col>
                            <v-col lg="3" md="2" class="rateSection">
                                <v-row class="rate-wrap">
                                    <v-col lg="5">
                                        <span class="price">
                                            ${{Math.ceil(freelancer.agent.hourly_rate)}}
                                        </span>
                                        <span class="text_price">
                                            Hourly rate
                                        </span>
                                    </v-col>
                                    <v-col lg="5">
                                        <span class="hours">
                                           {{Math.ceil(freelancer.user_data.available_hours_per_week)}} hrs
                                        </span>
                                        <span class="text_hours">
                                            Weekly Availability
                                        </span>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col lg="10">
                                        <a href="" class="btn-action">Hire Me</a>
                                    </v-col>    
                                </v-row>                      
                                    
                            
                                
                            </v-col>
    
                        </v-row>
                    </div>
                    <div class="showOnlyOnsm">
                        <div class="headProfile">

                        </div>            
                    </div>
                    <v-tabs
                        class="main-tabs_theme3"
                        v-model="activeTab"
                        centered
                        :center-active="isMobile()"
                        :slider-color="colorTab"
                        :hide-slider="setIndicator()"
                    >   
                        <v-tab
                            v-for="(tab,index) in freelancer.agent.resume_tabs"
                            :key="index"
                            :href="`#tab-${index}`"
                            @click="setTab(tab)"
                            :ripple="false"
                        >
                            <v-icon>mdi-{{getTabIcon(tab.name)}}</v-icon>
                            {{getTabName(tab.label)}}                                   
                        </v-tab>                       
                    </v-tabs>
                    <div class="hold-contents">
                        <v-tabs-items v-model="activeTab">
                            <v-tab-item class="portfolio-section" value="tab-0" transition="false" reverse-transition="false">
                                <v-row>
                                    <v-col lg="6">
                                        <div class="box-photo">
                                            <img src="@/assets/imgs/resume3/picture1.png"/>
                                        </div>
                                    </v-col>
                                    <v-col lg="6">
                                        <v-row>
                                            <v-col>
                                                <div class="box-photo">
                                                    <img src="@/assets/imgs/resume3/picture2.png"/>
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col>
                                                <div class="box-photo">
                                                    <img src="@/assets/imgs/resume3/picture3.png"/>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-tab-item>
                            <v-tab-item class="work-section" value="tab-1" transition="false" reverse-transition="false">
                                dfgsdfgsdf
                            </v-tab-item>
                            <v-tab-item class="education-section" value="tab-2" transition="false" reverse-transition="false">
                                fdsgsdfgsrtwert
                            </v-tab-item>
                            <v-tab-item class="skills-section" value="tab-3" transition="false" reverse-transition="false">
                                5634563456
                            </v-tab-item>                        
                        </v-tabs-items>
                    </div>
                    
                    
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style lang="scss" scoped>
    @import '../../node_modules/roboto-fontface/css/roboto/roboto-fontface.css';

    $tab_OneColor : #D93025;
    $tab_TwoColor : #0F9D58;
    $tab_ThreeColor : #F4B400;
    $tab_FourColor : #4285F4;

    /** Removing default padding on cols vuetify */
    .col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1{
        padding: 0;
    }
    .container{
        margin: 0 auto !important;

        .freelancerCard{
            width: 100%;
        }

        &.hold_theme3{
            .showOnlyOnmd{
                justify-content: center;
                display: flex;
                align-items: center;
            }
        }

    }
    



    .hold-contents{
        background: #F5F7F7;
        .v-tabs-items{
            background: transparent;
        }
    }
    .head-section{
        align-items: center;
        padding-top: 18px;
        padding-bottom: 20px;
        border-bottom: 1px solid #E5E5E5;
    }

    .imageCol{
        position: relative;
        align-items: center;
        justify-content: center;
        display: flex;

        .profile-img{
            width: 140px;
            height: 140px;
            display: block;
            background-position: center;
            background-size: cover;
            border-radius: 100%;           
        }
        .chat-option{
            position:absolute;
            bottom: -22px;
            width: 55px;
            height: 55px;
            
            border-radius: 100%;
            text-decoration: none;  
            border: 5px solid #fff;
            background: #F1F3F4;
            justify-content: center;
            display: inline-flex;
            align-items: center;

            i{
                color: #D93025;
                vertical-align: middle;

            }
        }
    }

    .head-name{
        font-family: 'Roboto-Bold';
        font-size: 30px;
        color: #202124;
    }
    .head-profile{
        font-family: 'Roboto';
        font-size: 18px;
        color: #5F6368;
    }
    .social-wrap{
        margin-top: 12px;

        a{
            width: 35px;
            height: 35px;
            background: #F1F3F4;
            text-align: center;
            border-radius: 100%;
            margin: 0 12px 0 0;
            display: inline-block;
            text-decoration: none;
            line-height: 32px;

            i{
                color: #202124;
            }
        }
    }

    .interviewSection{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .rateSection{
        flex-wrap: wrap;
        justify-content: flex-end;
        display: flex;
        align-items: center;
        .rate-wrap{
            .col{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-flow: column;
            }
        }

        >.row{
            justify-content: center;

            .col{
                align-items: center;
                justify-content: center;
                display: flex;
            }
        }
    }

    
    .main-tabs_theme3{
        .v-tab{
            margin: 0 3%;
            text-transform: capitalize;
            font-size: 24px;
            padding: 0;
            font-family: "Roboto-Medium";

            i{
                margin-right: 30px;
            }

            &:hover{
                &::before{
                    opacity: 0;
                }
            }

            &::before{
                opacity: 0;
            }

            &:focus{
                &::before{
                    opacity: 0;
                }
            }
            

            &.v-tab--active{
                &:hover{
                    &::before{
                        opacity: 0;
                    }
                }
                &::before{
                    opacity: 0;
                }

                &:nth-child(2){
                    color: $tab_OneColor;
                    >i{
                        color: $tab_OneColor;
                    }
                }
                &:nth-child(3){
                    color: $tab_TwoColor;
                    >i{
                        color: $tab_TwoColor;
                    }
                }
                &:nth-child(4){
                    color: $tab_ThreeColor;
                    >i{
                        color: $tab_ThreeColor;
                    }
                }
                &:nth-child(5){
                    color: $tab_FourColor;
                    >i{
                        color: $tab_FourColor;
                    }
                }
            }
            
        }
    }
    .title-medium{
        font-size: 24px;
        font-family: 'Roboto-Medium';
        color: #202124;
    }

    .btn-default{
        background: #F1F3F4;
        border: 1px solid #D8D8D8;
        text-align: center;
        border-radius: 3px;
        font-size: 14px;
        font-family: "Roboto-Medium";
        text-decoration: none;
        color: #5F6368;
        min-width: 173px;
        min-height: 45px;
        line-height: 45px;
        display: inline-block;
        margin: 0px 5px;


        i{
            margin-right: 10px;
        }
    }
    .btn-action{
        min-width: 267px;
        min-height: 50px;
        text-align: center;
        color: #fff;
        background: #D93025;
        border-radius: 3px;
        display: inline-block;
        line-height: 50px;
        padding: 0;
        text-decoration: none;
        font-size: 20px;
        font-family: "Roboto";
    }

    .box-photo{
        max-width: 700px;
        max-height: 700px;
        padding: 15px;
        background: #fff;
        box-shadow: 0 5px 10px 0px #ddd;

        img{
            max-width: 100%;
        }
    }
    
    
</style>
<script>
import { parse } from 'path';
    export default {
        name: 'Theme3',
        props: ['freelancer'],
        components: {},
        watch: {
            freelancer: function () {
                // update freelancer data when prop changes
                this.skills = this.freelancer.skills;
                this.worksHistory = this.freelancer.works_history;
                this.educationsHistory = this.freelancer.educations_history;
            }
        },
        data() {
            return {
                portfolio: true,
                activeTab: null,
                currentTab: 'portfolio',
                colorTab: '',
                indicatorStatus: true
            }
        },
        methods: {
            getTabName(label) {
                let arrayTabs = {
                    'portfolio': 'Portfolio',
                    'work': 'Works',
                    'education': 'Education',
                    'skills': 'Design Skill'
                }
                if (arrayTabs.hasOwnProperty(label.toLowerCase())) {
                    return arrayTabs[label.toLowerCase()];
                }
            },
            getTabIcon(name) {
                let arrayIcons = {
                    'portfolio': 'folder-multiple-image',
                    'work': 'widgets',
                    'education': 'library',
                    'skills': 'star-circle'
                }
                if (arrayIcons.hasOwnProperty(name.toLowerCase())) {
                    return arrayIcons[name.toLowerCase()];
                }
            },
            setTab(tabName) {
                this.currentTab = tabName;

                switch (tabName.name) {
                    case "portfolio": 
                        this.colorTab = "tabRed";
                        break;
                    case "work": 
                        this.colorTab = "tabGreen"; 
                        break;
                    case "education": 
                        this.colorTab = "tabGold"; 
                        break;
                    case "skills": 
                        this.colorTab = "tabBlue"; 
                        break;
                    default: this.colorTab = "gray"; break;
                }

               

            },
            isMobile() {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            },
            setIndicator() {
                setTimeout(()=>{
                    if(this.indicatorStatus == true){
                        this.indicatorStatus = false
                    }
                },200)
            }
        },
        mounted() {
            if(this.freelancer.agent.resume_tabs.length > 0){
                this.setTab(this.freelancer.agent.resume_tabs[0]);
                
            }
            
        }
    }
</script>

