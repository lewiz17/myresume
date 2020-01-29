<template>
    <div id="freelancerResumeTheme24" class="d-flex">
        <v-container class="hold_theme24">
            <v-row class="freelancerCard">
                <v-col lg="12" md="12" cols="12" class="resumeCardRight">
                    <div class="showOnlyOnmd">
                        <v-row class="head-section">
                            <v-col lg="6" sm="12" cols="12">
                                <v-row class="profile-wrap">
                                    <v-col lg="2" sm="3" class="imageCol">
                                        <span class="profile-img">
                                            <img :src="freelancer.user_data.profile_picture" alt="">    
                                        </span> 
                                    </v-col>
                                    <v-col lg="6" sm="8" class="profileCol">
                                        <div class="head-name">{{freelancer.user_data.first_name}}</div>
                                        <div class="head-profile">User interface designer</div>
                                        
                                        <div class="option-wrap">
                                            <a href="#" @click.prevent="dialogMessage = true" class="btn-circle">Message</a>
                                            <a href="#"  @click.prevent="dialogVideo = true" class="btn-circle">Video</a>
                                            <a href="#" @click.prevent="dialogAudio = true" class="btn-circle">Audio</a>
                                        </div>
                                    </v-col>
                                </v-row>                                
                            </v-col>
                            
                            <v-col lg="6" sm="12" cols="12" class="rateSection">
                                <v-row class="social-wrap">
                                    <v-col lg="12">
                                        <a href="" alt="Behance" title="Behance">
                                            <img src="@/assets/icons/resume24/icon-behance.png" alt="">
                                        </a>
                                        <a href="" alt="dribbble" title="dribbble">
                                            <img src="@/assets/icons/resume24/icon-dribble.png" alt="">
                                        </a>
                                        <a href="" alt="Linkedin" title="Linkedin">
                                            <img src="@/assets/icons/resume24/icon-linkedin.png" alt="">
                                        </a>
                                        <a href="" alt="Instagram" title="Instagram">
                                            <img src="@/assets/icons/resume24/icon-instagram.png" alt="">
                                        </a>                                        
                                        <a href="" alt="Google" title="Google">
                                            <img src="@/assets/icons/resume24/icon-google.png" alt="">
                                        </a>
                                    </v-col>
                                </v-row>
                                <v-row class="rate-wrap">
                                    <v-col lg="4" sm="6">
                                        
                                        <span class="text_price">
                                            Hourly rate
                                        </span>
                                        <span class="price">
                                            &#36; {{Math.ceil(freelancer.agent.hourly_rate)}} USD
                                        </span>
                                    </v-col>
                                    <v-col lg="4" sm="6">
                                        
                                        <span class="text_hours">
                                            Available for
                                        </span>
                                        <span class="hours">
                                           {{Math.ceil(freelancer.user_data.available_hours_per_week)}} hours
                                        </span>
                                    </v-col>
                                    <v-col lg="4" sm="12" cols="12">
                                        <a href="#" class="btn-circle" @click.prevent="dialogHireme = true">Hire Me</a>
                                    </v-col>
                                </v-row>                     
                            </v-col>
                        </v-row>
                        <v-row class="head-section showOnlyTab">
                            <v-col sm="2" cols="12" class="imageCol">
                                <span class="profile-img">
                                    <img :src="freelancer.user_data.profile_picture" alt="">    
                                </span> 
                            </v-col>
                            <v-col sm="6" cols="12" class="profileCol">
                               <div class="head-name">{{freelancer.user_data.first_name}}</div>
                               <div class="head-profile">User interface designer</div>
                               
                                <div class="option-wrap">
                                    <a href="#" @click.prevent="dialogMessage = true" class="btn-circle">Message</a>
                                    <a href="#" @click.prevent="dialogVideo = true" class="btn-circle">Video</a>
                                    <a href="#" @click.prevent="dialogAudio = true" class="btn-circle">Audio</a>
                                </div>                               
                            </v-col>
                            <v-col sm="3" cols="12" class="pricesCol">
                                <span class="text_price">
                                    Hourly rate
                                </span>
                                <span class="price">
                                    &#36; {{Math.ceil(freelancer.agent.hourly_rate)}} USD
                                </span>
                                <span class="text_hours">
                                    Available for
                                </span>
                                <span class="hours">
                                    {{Math.ceil(freelancer.user_data.available_hours_per_week)}} hours
                                </span>
                            </v-col>
                            <v-col sm="12" cols="12" class="rateSection">
                                <v-row class="social-wrap">
                                    <v-col sm="12">
                                        <a href="" alt="Behance" title="Behance">
                                            <img src="@/assets/icons/resume24/icon-behance.png" alt="">
                                        </a>
                                        <a href="" alt="dribbble" title="dribbble">
                                            <img src="@/assets/icons/resume24/icon-dribble.png" alt="">
                                        </a>
                                        <a href="" alt="Linkedin" title="Linkedin">
                                            <img src="@/assets/icons/resume24/icon-linkedin.png" alt="">
                                        </a>
                                        <a href="" alt="Instagram" title="Instagram">
                                            <img src="@/assets/icons/resume24/icon-instagram.png" alt="">
                                        </a>                                        
                                        <a href="" alt="Google" title="Google">
                                            <img src="@/assets/icons/resume24/icon-google.png" alt="">
                                        </a>
                                    </v-col>
                                </v-row>
                                <v-row class="rate-wrap">
                                    <v-col sm="12">
                                        <a href="#" class="btn-circle" @click.prevent="dialogHireme = true">Hire Me</a>
                                    </v-col>
                                </v-row>                     
                            </v-col>
                        </v-row>
                    </div>
                    <div class="hold-tabs">
                        <v-tabs
                            class="main-tabs_theme24"
                            v-model="activeTab"
                            :slider-color="colorTab"
                            :hide-slider="true"
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
                    <div class="hold-contents">
                        <v-tabs-items v-model="activeTab">
                            <v-tab-item class="portfolio-section" value="tab-0" transition="fade-transition" reverse-transition="fade-transition">
                                <v-row class="portfolio-wrap"> 
                                    <v-col lg="6" sm="12" cols="12">
                                        <div class="box-photo">
                                            <img src="@/assets/imgs/resume24/item-portfolio.png"/>
 
                                        </div>
                                    </v-col>
                                    <v-col lg="6" sm="12" cols="12">
                                        <div class="box-photo">
                                            <img src="@/assets/imgs/resume24/item-portfolio.png"/>
                                   
                                        </div>
                                    </v-col>
                                    <v-col lg="6" sm="12" cols="12">
                                        <div class="box-photo">
                                            <img src="@/assets/imgs/resume24/item-portfolio.png"/>
                                     
                                        </div>
                                    </v-col>
                                    <v-col lg="6" sm="12" cols="12">
                                        <div class="box-photo">
                                            <img src="@/assets/imgs/resume24/item-portfolio.png"/>
                              
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-tab-item>
                            <v-tab-item class="work-section" value="tab-1" transition="fade-transition" reverse-transition="fade-transition">
                                <v-row class="work-wrap">
                                    <div class="line-dots"></div>
                                    <v-col v-for="(work, index) in worksHistory" :key="index+'W'" lg="6" sm="12" cols="12">
                                        <v-card class="item-work">
                                            <v-card-title>
                                                {{work.company}}
                                            </v-card-title>
                                            <v-card-subtitle>
                                                {{work.job_title}}
                                            </v-card-subtitle>
                                            <v-card-text>
                                                Duration: {{getFullYear(work.date_from)}}
                                                <span v-if="work.is_currently_working">- Present</span>
                                                <span v-else>&nbsp;-&nbsp;{{getFullYear(work.date_to)}}</span>
                                                <p>{{work.job_description}}</p>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                                
                                
                            </v-tab-item>
                            <v-tab-item class="education-section" value="tab-2" transition="fade-transition" reverse-transition="fade-transition">
                                <v-row class="work-wrap">
                                    <div class="line-dots"></div>
                                    <v-col v-for="(education, index) in educationsHistory"
                                        :key="index + 'E'" lg="6" sm="12" cols="12">
                                        <v-card class="item-work">
                                            <v-card-subtitle>
                                                {{getFullYear(education.date_from)}}
                                                <span v-if="education.is_currently_learning">- Present</span>
                                                <span v-else>&nbsp;-&nbsp;{{getFullYear(education.date_to)}}</span>
                                            </v-card-subtitle>
                                            <v-card-title>
                                                {{education.school_title}}
                                            </v-card-title>
                                            <v-card-text>
                                                <h5>{{education.school_title}}</h5>
                                                <p>{{education.description}}</p>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-tab-item>
                            <v-tab-item class="skills-section" value="tab-3" transition="fade-transition" reverse-transition="fade-transition">
                                <v-row class="skills-wrap">
                                    <v-col v-for="(skill,index) in skills" :key="index + 'S'" lg="6" sm="12" cols="12" >
                                        <div class="box-skill" :class="getClassProgress(index)">
                                            <span class="name_skill">{{skill.skill_title}}</span>
                                            <div class="hold-vskill">
                                                <span class="back_pskill">
                                                    <i class="item-dot" v-for="i in dotsProgress" :key="i"></i>
                                                </span>
                                                <span class="front_pskill">
                                                    <i class="item-dot"  v-for="i in getPercent(skill.percentage)" :key="i" ></i>
                                                </span>
                                                <span class="percentage">{{skill.percentage}}%</span>                                                   
                                            </div>  
                                                                                   
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-tab-item>                        
                        </v-tabs-items>
                    </div> 
                </v-col>
            </v-row>
        </v-container>
        <v-dialog attach="#freelancerResumeTheme24" v-model="dialogMessage" persistent max-width="1660" overlay-opacity="0.7" overlay-color="#c4c4c4">
            <v-card class="form-wrap">
                <v-card-actions>
                    <img src="@/assets/icons/resume24/icon-close.png" alt="" class="close-icon" @click="cancelForm">
                </v-card-actions>
                <v-form ref="formMessages" class="form-messages dotted-style" v-show="!formSent" v-model="isValid">
                    <v-container>
                        <v-row>
                            <v-col lg="6" sm="12" cols="12">
                                <v-text-field
                                    v-model="formMessage.name"
                                    :rules="formMessage.nameRules"
                                    placeholder="Your Name"
                                    required
                                    color="#202124"
                                ></v-text-field>
                            </v-col>
                            <v-col lg="6" sm="12" cols="12">
                                <v-text-field
                                    v-model="formMessage.email"
                                    :rules="formMessage.emailRules"
                                    placeholder="Your Email"
                                    required
                                    color="#202124"
                                ></v-text-field>
                            </v-col>
                            <v-col lg="12" sm="12" cols="12">
                                <v-textarea
                                    v-model="formMessage.message"
                                    height="160"
                                    rows="2"
                                    :no-resize="true"
                                    color="#202124"
                                    placeholder="Your Message"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col lg="12" sm="12" cols="12" class="actions-wrap">
                                <a href="#" @click.prevent="submitForm" class="btn-action">Sent Message</a>
                            </v-col>
                        </v-row>                        
                    </v-container>                    
                </v-form>
                <div class="message-sent" v-show="formSent">
                    <img src="@/assets/icons/resume24/icon-check.png" alt="">
                    <span>Successfully Sent</span>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog attach="#freelancerResumeTheme24" v-model="dialogAudio" persistent max-width="1660" overlay-opacity="0.7" overlay-color="#c4c4c4">
             <v-card>
                <v-card-actions>
                    <img src="@/assets/icons/resume24/icon-close.png" alt="" class="close-icon" @click="dialogAudio = false || pauseAudio()">
                </v-card-actions>
                <div class="player">
                    <a @click.prevent="!playing ? playAudio() : pauseAudio()" title="Play/Pause" href="#">
                        <img v-if="!playing" src="@/assets/icons/resume24/play-btn.png" alt="">
                        <img src="@/assets/icons/resume24/icon-pause.png" v-else>
                    </a>
                    <div class="hold-spectre" @click.prevent="!playing ? playAudio() : pauseAudio()">
                        <img src="@/assets/icons/resume24/spectre.png" alt="">
                    </div>
                    <audio style="display:none" ref="audioElem" id="audioElem" :src="require('@/'+freelancer.user_data.audio_transcription)" @ended="playing = !playing"></audio>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog attach="#freelancerResumeTheme24" v-model="dialogVideo" persistent max-width="1660" overlay-opacity="0.7" overlay-color="#c4c4c4">
            <v-card>
                <v-card-actions>
                    <img src="@/assets/icons/resume24/icon-close.png" alt="" class="close-icon" @click="dialogVideo = false">
                </v-card-actions>
                <div class="hold-video">
                    <div class="poster-video" ref="videoPoster">
                        <a href="#" @click.prevent="playVideo()">
                            <img src="@/assets/icons/resume24/play-btn.png" alt="">
                        </a>                        
                    </div>
                    <video ref="videoElem" controls :src="require('@/'+freelancer.user_data.video_url)"></video>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog attach="#freelancerResumeTheme24" v-model="dialogHireme" persistent max-width="1660" overlay-opacity="0.7" overlay-color="#c4c4c4">
            <v-card class="payment-wrap">
                <v-card-actions>
                    <img src="@/assets/icons/resume24/icon-close.png" alt="" class="close-icon" @click="dialogHireme = false">
                </v-card-actions>
                <v-container>
                    <v-row class="hold-payment">
                        <v-col cols="12" lg="12">
                            <v-radio-group v-model="radioGroup" :row="true" class="pay-method">
                                <span class="item-pay">
                                    <v-radio
                                        color="#d8d8d8"
                                        value="1"
                                        name="opt-stripe"
                                        :ripple="false"
                                    >
                                    </v-radio>
                                    <img src="@/assets/icons/resume21/stripe.png" alt="">
                                </span>
                                <span class="item-pay">
                                    <v-radio
                                        color="#d8d8d8"
                                        value="2"
                                        name="opt-paypal"
                                        :ripple="false"
                                    >  
                                    </v-radio>
                                    <img src="@/assets/icons/resume21/paypal.png" alt="">
                                </span>
                            </v-radio-group>
                            
                        </v-col>
                    </v-row> 
                </v-container>                         
                
            </v-card>
        </v-dialog>
    </div>
</template>
<style lang="scss" scoped>

    @font-face {
        font-family: 'TextStyle 2019';
        src: url('../assets/fonts/TextStyle-2019.eot');
        src: url('../assets/fonts/TextStyle-2019.eot?#iefix') format('embedded-opentype'),
            url('../assets/fonts/TextStyle-2019.woff2') format('woff2'),
            url('../assets/fonts/TextStyle-2019.woff') format('woff'),
            url('../assets/fonts/TextStyle-2019.ttf') format('truetype'),
            url('../assets/fonts/TextStyle-2019.svg#TextStyle-2019') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    /** Removing default padding on cols vuetify */
    .col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1{
        padding: 0;
    }


    $max_wTheme : 1790px;
    $tab_OneColor : #D93025;
    $tab_TwoColor : #0F9D58;
    $tab_ThreeColor : #F4B400;
    $tab_FourColor : #4285F4;


    .showOnlyTab{
        display: none !important;
    }

    #freelancerResumeTheme24{
        position: relative;
    }
    .container{
        margin: 0 auto !important;

        .freelancerCard{
            width: 100%;
            background-color: transparent;
        }

        &.hold_theme24{
            padding: 0px;
            background-image: url('../assets/icons/resume24/bg-layout.png');
            background-color: #fff;
            background-position: top center;
            background-size: 100%;
            background-repeat: repeat-y;

            .showOnlyOnmd{
                justify-content: center;
                display: flex;
                align-items: center;
            }

        }

    }
    
    .hold-contents{
        overflow: hidden;
        padding: 60px 0;
        margin-top: 0px;
        min-height: 100%;

        .v-tabs-items{
            max-width: $max_wTheme;
            margin: 0px auto;
            background: transparent;
        }

    }
    .head-section{
        align-items: center;
        padding-top: 58px;
        padding-bottom: 40px;
        max-width: 93.25%;
        flex-flow: row;

        .btn-circle{
            background: url('../assets/icons/resume24/bgcircle-btn.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }


        .profileCol{
            display: flex;
            flex-flow: column;
            margin-left: 3%;
            align-items: flex-start;
            justify-content: center;

            .head-name{
                font-family: "TextStyle 2019";
                font-style: normal;
                font-weight: normal;
                font-size: 48px;
                line-height: 33px;
                color: #005BD1;
                -webkit-text-stroke: 1px #6396D9;
                text-transform: capitalize;
            }

            .head-profile{
                font-family: "TextStyle 2019";
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 16px;
                color: #202020;
                padding-top: 10px;
            }

            .option-wrap{
                margin-top: 30px;
                justify-content: flex-start;
                align-items: center;
                display: flex;



                .btn-default{
                    margin: 0 15px;
                }
                
                a{
                    min-width: 134px;
                    height: 49px;
                    justify-content: center;
                    align-items: center;
                    display: inline-flex;
                    text-decoration: none;
                    font-family: "TextStyle 2019";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 26px;

                    color: #1B7BF5;
                    margin: 0 2.5%;

                    &:hover{
                        
                        border: 1px solid #fff;
                    }

                    &:first-child{
                        margin-left: 0;
                    }
                }
            }


        }



    }

    .imageCol{
        position: relative;
        align-items: center;
        justify-content: center;
        display: flex;
        max-width: 199px;
        flex-flow: column;


        .profile-img{
            width: 199px;
            height: 197px;
            display: block;
            background: url('../assets/icons/resume24/circle-around.png');
            justify-content: center;
            align-items: center;
            display: flex;
            
            &.bs__superInset{
  
                border-radius: 15px;   
            }        

            >img{
                width: 169px;
                height: 169px;
                border-radius: 100%;
                background-position: center;
                background-size: cover;
            }
        }
        a{
            font-family: "TextStyle 2019";
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 14px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #515151;
            text-decoration: none;
            margin-top: 15px;
        }
    }


    .interviewSection{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }

    .rateSection{
        justify-content: center;
        flex-flow: column;
        display: flex;
        position: relative;
        

        .social-wrap{
            a{
                margin: 0 22px;
                display: inline-flex;
                min-height: 56px;
                justify-content: center;
                align-items: center;
                vertical-align: middle;

                &:last-child{
                    margin-right: 0px;
                }

                img{
                    max-width: 56px;
                }
            }

            .col,.col-12{
                text-align: right;
            }
        }



        .rate-wrap{

            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 25px;

            .col{
                justify-content: center;
                display: flex;
                flex-flow: column;
                align-items: center;
            }

            .btn-circle{
                min-width: 240px;
                min-height: 86px;
                line-height: 86px;
                text-align: center;
                text-decoration: none;
                font-family: "TextStyle 2019";
                font-style: normal;
                font-weight: normal;
                font-size: 36px;
                color: #1B7BF5;
                display: block;
            }

            
        }
    }

    .price,.hours{
        font-family: "TextStyle 2019";
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 48px;
        color: #005BD1;
        letter-spacing: normal;                
    }
    .text_price,.text_hours{
        font-family: "TextStyle 2019";
        font-style: normal;
        font-weight: normal;
        font-size: 2rem;
        line-height: 36px;
        color: #5C5C5C;
        letter-spacing: normal;   
        
    }

    
    .main-tabs_theme24{

        max-width: 95%;
        margin: 0px auto;
        border-top: 8px dotted #ddd;
        border-bottom: 6px dotted #ddd;
        background: transparent;
        

        .v-tab{
            display: flex;
            padding: 0px;  
            font-family: 'TextStyle 2019';
            font-style: normal;
            font-weight: normal;
            font-size: 48px;
            line-height: 52px;
            text-transform: capitalize;
            color: rgba(0, 91, 209, 0.3) !important;
            -webkit-text-stroke: 1px #6396D9;
            letter-spacing: -1px;
            margin: 0 85px;

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
                color: #005BD1 !important;

            }

            
        }


    }
 
    /** Items tab work */
    .work-wrap{
        justify-content: space-around;
        position: relative;

        .line-dots{
            position: absolute;
            border-left: 8px dotted #ddd;
            height: 95%;
            top: 50px;
        }

        .col-12{
            margin-bottom: 0px;
            justify-content: center;
            display: flex;

            .item-work{
                max-width: 680px;
            }

            &:nth-child(-n+3){
                .item-work{

                    

                    .v-card__text{
                        &::after{
                            border-top: 8px dotted #ddd;
                        }
                    }
                }
            }

        }
        .item-work{
            width: 100%;
            padding: 20px 54px;
            height: 100%;
            background:transparent;
            box-shadow: none;
            border: 0;


            .v-card__subtitle,.v-card__title,.v-card__text{
                padding: 0;
            }

            .v-card__title{
                
                font-family: "TextStyle 2019";
                font-style: normal;
                font-weight: normal;
                font-size: 48px;
                line-height: 52px;
                color: #2571D4;
            }



            .v-card__subtitle{

                font-family: "TextStyle 2019";
                font-style: normal;
                font-weight: normal;
                font-size: 32px;
                line-height: 35px;
                color: #676768;
                margin-top: 8px;

            }

            .v-card__text{
                margin-top: 35px;
                font-family: "TextStyle 2019";
                font-style: normal;
                font-weight: normal;
                font-size: 32px;
                line-height: 35px;
                color: #005BD1;
                

                p{
                    font-family: "TextStyle 2019";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 26px;
                    color: #79797B;
                    margin-top: 30px;
                    margin-bottom: 50px;
                    max-height: 75px;
                    min-height: 75px;
                    overflow: hidden;                  
                }

                &:after{
                    content: "";
                    display: block;
                    max-width: 95%;
                    margin: 40px auto 0px auto;
                }

               
            }

        }

    }

    .education-section{
        .work-wrap{
            .item-work{

                .v-card__subtitle{
                    font-family: "TextStyle 2019";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 26px;
                    color: #1F5DE4;
                }

                .v-card__title{
                    font-family: "TextStyle 2019";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 48px;
                    line-height: 52px;
                    color: #010101;

                }
            }
        }
    }

    .skills-wrap{

        vertical-align: top;

        .col-12{
            justify-content: center;
            display: flex;
        }

        .box-skill{

            display: flex;
            align-items: center;
            flex-flow: column;
            padding-bottom: 50px;
            max-width: 90%;

            .name_skill{
                align-self: flex-start;
                font-family: "TextStyle 2019";
                font-style: normal;
                font-weight: normal;
                font-size: 32px;
                line-height: 32px;
                color: #2874D5;
            }
            .hold-vskill{
                width: auto;
                height: auto;
                display: inline-block;
                position: relative;
                vertical-align: middle;
                line-height: 48px;
                margin-top: 10px;

                i.item-dot{
                    background: #d7d7d7;
                    border-radius: 100%;
                    width: 15px;
                    height: 15px;
                    display: inline-block;
                    margin-right: 6px;

                    &:last-child{
                        margin-right: 0;
                    }
                }

                .back_pskill{
                    height: 100%;
                    display: inline-block;
                    vertical-align: top;
                    max-width: 498px;
                }
                .front_pskill{
                    position: absolute;
                    z-index: 2;
                    left: 0;

                    i{
                        background: #ccc;
                    }
                    
                }

                .percentage{
                    font-family: "TextStyle 2019";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2.5rem;
                    line-height: 40px;
                    color: #d7d7d7;
                    margin-left: 2rem;
                }
            }

            
            &.style__ps{
                .name_skill{
                    color: #2874D5;
                }

                .front_pskill{
                    i{
                        background: #2874D5;
                        &:nth-last-child(-n+1){
                            background: #A6BDDA;
                        }
                        &:nth-last-child(-2n+2){
                            background: #94AFD2;
                        }
                        &:nth-last-child(-3n+3){
                            background: #7AA2D6;
                        }
                        &:nth-last-child(-4n+4){
                            background: #538DD8;
                        }
                        &:nth-last-child(-5n+5){
                            background: #4887D7;
                        }
                    }
                }

                .percentage{
                    color: #2874D5;
                }
            }

            &.style__ai{
                .name_skill{
                    color: #F4A835;
                }

                .front_pskill{
                    i{
                        background: #F4A835;

                        &:nth-last-child(-n+1){
                            background: #FFEDD2;
                        }
                        &:nth-last-child(-2n+2){
                            background: #FFE4BB;
                        }
                        &:nth-last-child(-3n+3){
                            background: #FFDAA3;
                        }
                        &:nth-last-child(-4n+4){
                            background: #FFCF88;
                        }
                        &:nth-last-child(-5n+5){
                            background: #FDC46F;
                        }
                    }
                }
                .percentage{
                    color: #F4A835;
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

        &:hover{
            opacity: 0.8;
        }


        i{
            margin-right: 10px;
        }
    }

    .portfolio-wrap{

        justify-content: space-evenly;

        .col-12{
            margin-bottom: 20px;
            justify-content: center;
            display: flex;
        }
        
        .box-photo{
            display: flex;
            flex-flow: wrap;
            padding: 50px 25px;
            background-image: url('../assets/icons/resume24/bg-dashed.png');
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: center;
            min-width: 655px;
            min-height: 655px;
            align-items: center;

            img{
                margin: 0px auto;
                max-width: 545px;
                max-height: 487px;
                border-radius: 20px;
            }
        }

    }



    /** Modals styles */
    .v-dialog{
        
        .v-card{
            background: #fff;
            border-radius: 15px;   
            padding-bottom: 40px;
            border: 2px solid #fff;

            &.form-wrap{
                padding: 0 0 100px 0;
                
                .container{
                    max-width: 1300px !important;
                    padding: 0px;

                    >.row{
                        justify-content: flex-start;
                    }
                }

                .col-lg-6{
                    max-width: 385px;
                    margin-right: 11%;
                }

                .v-btn{
                    &.btn-send{
                        max-width: 207px;
                        max-height: 48px;
                        height: 48px;
                        padding: 0 30px;
                        background: #D93025;
                        color: #fff;
                        text-transform: capitalize;
                        font-size: 16px;
                        font-family: "Roboto";

                        i{
                            font-size: 26px;
                            color: #fff;
                            margin-right: 20px;
                        }
                    }

                    padding: 0 30px;
                    max-height: 48px;
                    height: 48px;
                    color: #5F6368;
                    text-transform: capitalize;
                    font-size: 16px;
                    font-family: "Roboto";

                }

                .actions-wrap{
                    justify-content: flex-end;
                    align-items: center;
                    display: flex; 
                    border-radius: 20px;

                    .btn-action{
                        min-width: 262px;
                        min-height: 93px;
                        line-height: 93px;
                        background: url('../assets/icons/resume24/bgcircle-btn.png');
                        background-repeat: no-repeat;
                        background-size: contain;
                        text-align: center;
                        font-family: "TextStyle 2019";
                        font-style: normal;
                        font-weight: normal;
                        font-size: 30px;
                        color: #1B7BF5;
                        text-decoration: none;
                    }
                }

                .message-sent{
                    justify-content: center;
                    display: flex;
                    align-items: center;

                    span{
                        font-family: "TextStyle 2019";
                        font-style: normal;
                        font-weight: normal;
                        font-size: 48px;
                        line-height: 48px;
                        letter-spacing: 0.2em;
                        text-transform: uppercase;
                        color: #367BFD;
                        margin-left: 2%;

                    }
                }



                

            }

            .v-card__actions{
                padding: 34px 37px 0px 37px;                
                display: flex;
                justify-content: flex-end;
            }
            .close-icon{
                width: 46.4px;
                height: 49px;
            }
        }

    }


    /** Player styles */
    .player{
        justify-content: center;
        align-items:center;
        flex-flow: row;
        display: flex;

        .hold-spectre{
            padding: 0px 0px 0px 30px;

            img{
                background-position: 0px 8px;
            }

            &:hover{
                cursor: pointer;
            }
        }

        >span{
            font-family: "TextStyle 2019";
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #575757;
        }

        a{
            width: 76px;
            height: 76px;
            border-radius: 40px;
            text-decoration: none;
            align-items: center;
            justify-content: center;
            display: flex;
        }

        i{
            font-size: 39px;
            color: #2410A4;
        }

    }
    .hold-video{
        position: relative;
        max-width: 1207px;
        height: 100%;
        max-height: 640px;
        margin: 0 auto 100px auto;

        >span{
            font-family: "TextStyle 2019";
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #575757;
            margin-top: 65px;
            display: inline-block;
            margin-bottom: 102px;
        }

        .poster-video{
            position: absolute;
            z-index: 2;
            width: 100%;
            height: 100%;
            max-height: 640px;
            background: url('../assets/imgs/resume21/poster.jpg') no-repeat;
            background-size: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
            border-radius: 20px;

            a{
                text-decoration: none;
                i{
                    font-size: 97px;
                    color: #2410A4;
                }
            }
        }

        video{
            position: relative;
            z-index: 1;
            max-width: 100%;
            width: 100%;
            border-radius: 20px;
            max-height: 640px;
        }

    }

    .hold-share{

        .dl-pdf{
            margin-top: 70px;
            width: 67px;
            height: 67px;
            background: #F8F8F8;

            border-radius: 15px;
            margin: 0 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            margin-top: 70px;

            &:hover{

                border: 1px solid #fff;
            }

            i{
                color: #16009F;
                font-size: 34px;
            }
        }

        .share-wrap{

            .col,.col-6,.col-12{
                justify-content: flex-start;
                display: flex;
                flex-flow: column;
                align-items: center;
                padding-top: 80px;
                padding-bottom: 75px;
            }

            .col+.col,.col-6+.col-6,.col-12+.col-12{
                border-left: 5px solid #F3F3F3;
            }

            span{
                font-family: "TextStyle 2019";
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 24px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #575757;
            }
        }
    }

    .payment-wrap{

        .container{
            padding: 0px 70px !important;
        }

        h3{
            font-size: 24px;
            font-family: "Roboto-Medium";
            color: #5F6368;
            font-weight: normal;
        }

        .hold-payment{

            max-width: 1020px;
            min-height: 160px;
            margin: 20px auto !important;

            .pay-method{

                .item-pay{
                    display: flex;
                    position: relative;
                    min-width: 475px;
                    min-height: 216px;
                    justify-content: center;
                    align-items: center;

                    img{
                        position: absolute;
                    }
                }
                .v-radio{
                    margin-right: 0px;
                    margin-left: 0;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: 1;
                    opacity: 1;
                    cursor: pointer;
                    

                    &.v-item--active{
         
                        border-radius: 15px;
                    }

                    .v-input--selection-controls__input{
                        width: 100%;
                        height: 100%;
                    }

                }
            }

            .col-12{
                align-items: center;
                display: flex;
            }
        }
    }

    /** Standar tablet version */
    @media screen and (max-width: 768px) {

        .showOnlyTab{
            display: flex !important;
        }

        .container{
            &.hold_theme24{
                background-image: none;
            }
        }

        .imageCol{
            .profile-img{
                width: 149px;
                height: 147px;
                background-size: cover;
                background-repeat: no-repeat;

                img{
                    width: 126.1px;
                    height: 126.1px;
                }
            }
        } 

        .head-section{
            display: none;

            &.showOnlyTab{
                flex-flow: wrap;
                padding-top: 0px;
                max-width: 92%;
            }


            .profileCol{
                .head-name{
                    font-size: 36px;
                    line-height: 25px;
                    -webkit-text-stroke:transparent;
                }
                .head-profile{
                    font-size: 18px;
                    line-height: 20px;
                }

                .option-wrap{
                    a{
                        min-width: auto;
                        width: 105px;
                        height: 36px;
                        font-size: 18px;
                        line-height: 20px;
                        margin: 0px 3px;
                    }
                } 
            }

        }


        .main-tabs_theme24{

            max-width: 100%;

            .v-tab{
                margin: 0 23.5px;
                font-size: 36px;
                line-height: 39px;
            }
        }

        .work-wrap{

            .line-dots{
                display: none;
            }

            .col-12{
                .item-work{
                    max-width: 100%;
                    padding: 70px 30px 0px 30px;
                    border-bottom: 8px dotted #ddd;

                    .v-card__text{
                        &::after{
                            max-width: 100%;
                            
                        }
                    }
                }

                &:nth-child(-n+3){
                    .item-work{
                        .v-card__text{
                            &::after{
                                border-top: 0px;
                            }
                        }
                    }
                }
            }


            
        } 
        
        .rateSection{
            flex-flow: row;
            align-items: center;
            justify-content: space-between;
            margin-top: 5%;

            .social-wrap{

                .col,.col-12{
                    text-align: left;
                }

                a{

                    margin: 0px 19.5px;

                    img{
                        max-width: 45px;
                    }
                }
                
            }

            .rate-wrap{
                margin-top: 0px;

                .col{
                    display: flex;
                    justify-content: flex-end;
                }

                .btn-circle{
                    min-width: 169px;
                    min-height: 60px;
                    line-height: 60px;
                    font-size: 24px;
                    display: block;
                }
            }
        }

        .pricesCol{
            justify-content: flex-start;
            display: flex;
            flex-flow: column;
            align-items: center;
            max-height: 215px;
            border-left: 6px dotted#ddd;
            padding-top: 50px;
        }

        .text_price,.text_hours{
            font-size: 24px;
            line-height: 26px;
        }
        .price,.hours{
            font-size: 18px;
            line-height: 20px;
            padding-bottom: 30px;
        }

        

        .skills-wrap{
            .box-skill{
                max-width: 100%;
                width: 100%;
                border-bottom: 8px dotted #ddd;
                padding: 60px 30px;
                align-items: flex-start;

                .name_skill{
                    font-size: 48px;
                    line-height: 52px;
                }

                .hold-vskill{

                    .back_pskill{
                        max-width: 100%;
                    }

                    i.item-dot{
                        width: 18px;
                        height: 18px;
                    }
                    .percentage{
                        font-size: 48px;
                        line-height: 42px;
                    }
                }
                
            }
        }

        /** Dialogs mobile */
        .v-dialog{
            .v-card{
                &.form-wrap{
                    padding-bottom: 70px;

                    .col-lg-6{
                        max-width: 90%;
                        margin: 0px auto;
                    }

                    .actions-wrap{
                        justify-content: center;
                    }
                }
            }
        } 


        .hold-video{
            max-width: 95%;
            margin-bottom: 0;
        }

        .player{
            max-width: 100%;

            .hold-spectre{
                max-width: 50%;
                img{
                    max-width: 100%;
                }
            }

            a{
                img{
                    max-width: 60px;
                }
            }
        }

    }

    @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
        .head-section{
            display: flex;
            flex-flow: column;
            padding-top: 20px;

            &.showOnlyTab{
                display: none !important;
            }

            .profile-wrap{
                flex-flow: row;
            }

            .profileCol{
                align-items: flex-start;
                justify-content: center;


                .head-name{
                    font-size: 24px;
                    line-height: 26px;
                }
                .head-profile{
                    padding-top: 0;
                    font-size: 14px;
                    line-height: 15px;
                }

                .option-wrap{

                    margin-top: 15px;
                    a{
                        width: 67px;
                        height: 23px;
                        font-size: 12px;
                        line-height: 13px;
                        min-width:auto;
                    }
                }
            }
        }

        .imageCol{
            max-width: 30%;

            .profile-img{
                width: 94px;
                height: 93px;

                img{
                    width: 79.5px;
                    height: 79.5px;
                }
            }
        } 

        .rateSection{
            flex-wrap: wrap;
            .rate-wrap{
                margin-top: 28px;

                .col{
                    justify-content: center;
                    flex-flow: column;
                    align-items: center;
                }
                .btn-circle{
                    margin-top: 20px;
                }
            }
            .social-wrap{

                .col,.col-12{
                    text-align: center;
                }
                a{
                    margin: 0px 15px;
                    img{
                        max-width: 32px;
                    }

                    &:last-child{
                        margin: 0px 15px;
                    }
                }
            }
        }
        .price,.hours{
            padding-bottom: 0;
        }

        .main-tabs_theme24{

            .v-tab{
                margin: 0 17px;
            }
        }
        .hold-contents{
            padding: 45px 0;
        }

        .portfolio-wrap{
            .box-photo{
                min-width: 100%;
                min-height: auto;

                img{
                    max-width: 95%;
                }
            }
        }

        .work-wrap{
            .col-12{

                &:nth-child(2){

                    .item-work{
                        padding-top: 0;
                    }
                }

                .item-work{
                    padding: 50px 30px 0 30px;

                    .v-card__title{
                        font-size: 36px;
                        line-height: 39px;
                    }
                    .v-card__subtitle,.v-card__text{
                        font-size: 24px;
                        line-height: 26px;
                    }
                    .v-card__text{
                        p{
                            font-size: 18px;
                            line-height: 20px;
                            margin-bottom: 45px;
                        }
                    }

                    
                }
            }
        }
        .skills-wrap{
            .col-12{
                &:nth-child(1){
                    .box-skill{
                        padding-top: 0px;
                    }
                }
            }

            .box-skill{
                padding: 60px 18px;

                .name_skill{
                    font-size: 32px;
                    line-height: 35px;
                }
                .hold-vskill{

                    width: 100%;

                    i.item-dot{
                        width: 9px;
                        height: 9px;
                        margin-right: 3px;
                    }
                    .percentage{
                        font-size: 24px;
                        margin-left: 0px;
                        float: right;
                    }
                }
            }
        }

        /** Dialogs mobile */
        .v-dialog{
            .v-card{
                &.form-wrap{
                    
                }
            }
        }
    }
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        .work-wrap{
            .line-dots{
                display: none;
            }
        }
    }

    
    
    
</style>
<script>
    export default {
        name: 'Theme24',
        props: ['freelancer'],
        components: {},
        data() {
            return {
                worksHistory: this.freelancer.works_history,
                educationsHistory: this.freelancer.educations_history,
                skills: this.freelancer.skills,
                portfolio: true,
                activeTab: null,
                currentTab: 'portfolio',
                colorTab: '',
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
                // --Timeline
                reverseTimeline: true,
                smallTimeline: true,
                // --Dialog
                dialogMessage: false,
                dialogAudio: false,
                dialogVideo: false,
                dialogHireme: false,
                dialogShare: false,
                // --Player
                playing: false,
                radioGroup: 1,
                dotsProgress: 24,
                styleProgress: ['style__ps','style__ai']
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

