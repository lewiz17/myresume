<template>
    <div id="freelancerResumeTheme21" class="d-flex">
        <v-container class="hold_theme21">
            <v-row class="freelancerCard">
                <v-col lg="12" md="12" cols="12" class="resumeCardRight">
                    <div class="showOnlyOnmd">
                        <v-row class="head-section">
                            <v-col lg="2" md="2" sm="2" cols="3" class="imageCol">
                                <span class="profile-img bs__superInset">
                                    <img :src="freelancer.user_data.profile_picture" alt="">    
                                </span> 
                                <a href="#" @click.prevent="dialogMessage = true">Tap to chat</a>
                            </v-col>
                            <v-col lg="2" md="2" sm="2" cols="4" class="profileCol">
                               <div class="head-name">{{freelancer.user_data.first_name}}</div>
                               <div class="head-profile">{{freelancer.user_data.job_title}}</div>
                               <div class="option-wrap">
                                    <a href="#" @click.prevent="dialogAudio = true"><img src="@/assets/icons/resume21/headphones.png" alt=""></a>
                                    <a href="#" @click.prevent="dialogVideo = true"><img src="@/assets/icons/resume21/video-player.png" alt=""></a>
                                </div>
                               
                            </v-col>
                            <v-col lg="3" md="3" sm="3" cols="5" class="interviewSection">
                                <div class="social-wrap">
                                    <a href="" alt="Behance" title="Behance">
                                        <img src="@/assets/icons/resume21/behance.png" alt="">
                                    </a>
                                    <a href="" alt="dribbble" title="dribbble">
                                        <img src="@/assets/icons/resume21/dribbble.png" alt="">
                                    </a>
                                    <a href="" alt="Instagram" title="Instagram">
                                        <img src="@/assets/icons/resume21/instagram.png" alt="">
                                    </a>
                                    <a href="" alt="Linkedin" title="Linkedin">
                                        <img src="@/assets/icons/resume21/linkedin.png" alt="">
                                    </a>
                                    <a href="" alt="Google" title="Google">
                                        <img src="@/assets/icons/resume21/google.png" alt="">
                                    </a>

                               </div>
                                
                            </v-col>
                            <v-col lg="5" md="5" sm="5" class="rateSection">
                                <a href="#" @click.prevent="dialogShare = true" class="shareOption"><img src="@/assets/icons/resume21/share.png" alt=""></a>
                                <v-row class="rate-wrap">
                                    <v-col lg="4" sm="4" cols="4">
                                        <span class="price">
                                            ${{Math.ceil(freelancer.agent.hourly_rate)}}
                                        </span>
                                        <span class="text_price">
                                            Hourly rate
                                        </span>
                                    </v-col>
                                    <v-col lg="4" sm="4" cols="4">
                                        <span class="hours">
                                           {{Math.ceil(freelancer.user_data.available_hours_per_week)}} HOURS
                                        </span>
                                        <span class="text_hours">
                                            Weekly Availability
                                        </span>
                                    </v-col>
                                    <v-col lg="4" sm="4" cols="4">
                                        <a href="#" class="btn-action" @click.prevent="dialogHireme = true">Hire Me</a>
                                    </v-col>
                                </v-row>                     
                            </v-col>
                        </v-row>
                    </div>
                    <div class="hold-tabs">
                        <v-tabs
                            class="main-tabs_theme21"
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
                                            <img src="@/assets/imgs/resume21/item-portfolio.png"/>
                                            <span class="title-photo">My Work Art Gallery</span>  
                                        </div>
                                    </v-col>
                                    <v-col lg="6" sm="12" cols="12">
                                        <div class="box-photo">
                                            <img src="@/assets/imgs/resume21/item-portfolio.png"/>
                                            <span class="title-photo">My Work Art Gallery</span> 
                                        </div>
                                    </v-col>
                                    <v-col lg="6" sm="12" cols="12">
                                        <div class="box-photo">
                                            <img src="@/assets/imgs/resume21/item-portfolio.png"/>
                                            <span class="title-photo">My Work Art Gallery</span> 
                                        </div>
                                    </v-col>
                                    <v-col lg="6" sm="12" cols="12">
                                        <div class="box-photo">
                                            <img src="@/assets/imgs/resume21/item-portfolio.png"/>
                                            <span class="title-photo">My Work Art Gallery</span> 
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-tab-item>
                            <v-tab-item class="work-section" value="tab-1" transition="fade-transition" reverse-transition="fade-transition">
                                <v-row class="work-wrap">
                                    <v-col v-for="(work, index) in worksHistory" :key="index+'W'" lg="6" sm="12" cols="12">
                                        <v-card class="item-work">
                                            <v-card-subtitle>
                                                {{getFullYear(work.date_from)}}
                                                <span v-if="work.is_currently_working">- Present</span>
                                                <span v-else>&nbsp;-&nbsp;{{getFullYear(work.date_to)}}</span>
                                            </v-card-subtitle>
                                            <v-card-title>
                                                {{work.job_title}}
                                            </v-card-title>
                                            <v-card-text>
                                                <h5>{{work.company}}</h5>
                                                <p>{{work.job_description}}</p>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                                
                                
                            </v-tab-item>
                            <v-tab-item class="education-section" value="tab-2" transition="fade-transition" reverse-transition="fade-transition">
                                <v-row class="work-wrap">
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
                                    <v-col lg="12">
                                        <v-tabs
                                            class="main-subtabs_skills"
                                            v-model="activeTabSkill"
                                            centered="true"
                                            hide-slider="true"
                                        >
                                            <v-tab
                                                v-for="(skill,index) in skillsItems"
                                                :key="index"
                                                :href="`#skill_tab-${index}`"
                                                :ripple="false"
                                            >
                                                {{skill}}                                   
                                            </v-tab>                       
                                        </v-tabs>
                                        <v-tabs-items v-model="activeTabSkill" class="mc-subtabs_skills">
                                            <v-tab-item value="skill_tab-0">
                                                <v-row>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/illustrator.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/photoshop.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/sketch.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/icon-ui.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/icon-ux.png" alt="">
                                                    </v-col>
                                                </v-row>
                                            </v-tab-item>
                                            <v-tab-item value="skill_tab-1">
                                                <v-row>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/illustrator.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/photoshop.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/sketch.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/icon-ui.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/icon-ux.png" alt="">
                                                    </v-col>
                                                </v-row>
                                            </v-tab-item>
                                            <v-tab-item value="skill_tab-2">
                                                <v-row>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/illustrator.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/photoshop.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/sketch.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/icon-ui.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/icon-ux.png" alt="">
                                                    </v-col>
                                                </v-row>
                                            </v-tab-item>
                                            <v-tab-item value="skill_tab-3">
                                               <v-row>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/illustrator.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/photoshop.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/sketch.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/icon-ui.png" alt="">
                                                    </v-col>
                                                    <v-col class="item-skill">
                                                        <img src="@/assets/icons/resume21/icon-ux.png" alt="">
                                                    </v-col>
                                                </v-row>
                                            </v-tab-item>
                                        </v-tabs-items> 
                                    </v-col>
                                </v-row>
                            </v-tab-item>                        
                        </v-tabs-items>
                    </div>
                    
                    
                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="dialogMessage" persistent max-width="850" overlay-opacity="0.5" overlay-color="#202124">
            <v-card class="form-wrap">
                <v-form ref="formMessages" class="form-messages">
                    <v-container>
                        <v-row>
                            <v-col lg="12" sm="12" cols="12">
                                <v-text-field
                                    v-model="formMessage.name"
                                    :rules="formMessage.nameRules"
                                    label="Name"
                                    required
                                    color="#202124"
                                ></v-text-field>
                            </v-col>
                            <v-col lg="12" sm="12" cols="12">
                                <v-text-field
                                    v-model="formMessage.email"
                                    :rules="formMessage.emailRules"
                                    label="E-mail"
                                    required
                                    color="#202124"
                                ></v-text-field>
                            </v-col>
                            <v-col lg="12" sm="12" cols="12">
                                <v-textarea
                                    v-model="formMessage.message"
                                    filled
                                    height="162"
                                    :no-resize="true"
                                    color="#202124"
                                    label="Message"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-btn depressed small @click="submitForm" class="btn-send"><v-icon>mdi-message-text</v-icon>Send Message</v-btn>
                            <v-btn text small @click="cancelForm">Cancel</v-btn>
                        </v-row>                        
                    </v-container>                    
                </v-form>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogAudio" persistent max-width="850" overlay-opacity="0.5" overlay-color="#202124">
             <v-card>
                <v-card-actions>
                    <v-icon class="close-icon" @click="dialogAudio = false || pauseAudio()">mdi-close</v-icon>
                </v-card-actions>
                <div class="player">
                    <div class="hold-spectre" @click.prevent="!playing ? playAudio() : pauseAudio()">
                        <img src="@/assets/icons/resume3/spectre.png" alt="">
                    </div>
                    <a @click.prevent="!playing ? playAudio() : pauseAudio()" title="Play/Pause" href="#">
                        <v-icon v-if="!playing">mdi-play-circle</v-icon>
                        <v-icon v-else>mdi-pause-circle</v-icon>
                    </a>
                    <audio style="display:none" ref="audioElem" id="audioElem" :src="require('@/'+freelancer.user_data.audio_transcription)" @ended="playing = !playing"></audio>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogVideo" persistent max-width="850" overlay-opacity="0.5" overlay-color="#202124">
            <v-card>
                <v-card-actions>
                    <v-icon class="close-icon" @click="dialogVideo = false">mdi-close</v-icon>
                </v-card-actions>
                <div class="hold-video">
                    <div class="poster-video" ref="videoPoster">
                        <a href="#" @click.prevent="playVideo()">
                            <v-icon>mdi-play-circle</v-icon>
                        </a>                        
                    </div>
                    <video ref="videoElem" controls :src="require('@/'+freelancer.user_data.video_url)"></video>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogHireme" persistent max-width="850" overlay-opacity="0.5" overlay-color="#202124">
            <v-card class="payment-wrap">
                <v-card-actions>
                    <v-icon class="close-icon" @click="dialogHireme = false">mdi-close</v-icon>
                </v-card-actions>
                <v-container>
                    <h3>Select Payment Method :</h3>
                    <v-row class="hold-payment">
                        <v-col cols="12" lg="12">
                            <v-radio-group v-model="radioGroup" :row="true" class="pay-method">
                                <span class="item-pay">
                                    <v-radio
                                        color="#d8d8d8"
                                        value="1"
                                        name="opt-paypal"
                                        off-icon="mdi-checkbox-blank-circle"
                                        :ripple="false"
                                    >
                                        
                                    </v-radio>
                                    <img src="@/assets/icons/resume3/icon-paypal.png" alt="">
                                </span>
                                <span class="item-pay">
                                    <v-radio
                                        color="#d8d8d8"
                                        value="2"
                                        name="opt-payonner"
                                        off-icon="mdi-checkbox-blank-circle"
                                        :ripple="false"
                                    >  
                                        
                                    </v-radio>
                                    <img src="@/assets/icons/resume3/icon-payonner.png" alt="">
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
    @import 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap';
    @import 'https://fonts.googleapis.com/css?family=Actor&display=swap';

    @font-face {
        font-family: 'Gotham Pro';
        src: url('../assets/fonts/Gotham Pro Regular.eot') format('embedded-opentype'),  url('../assets/fonts/Gotham Pro Regular.otf')  format('opentype'),
                url('../assets/fonts/Gotham Pro Regular.woff') format('woff'), url('../assets/fonts/Gotham Pro Regular.ttf')  format('truetype'), url('../assets/fonts/Gotham Pro Regular.svg#Gotham Pro') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    $max_wTheme : 1790px;
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
            background: #FBFBFB;
        }

        &.hold_theme21{
            padding: 0px;

            .showOnlyOnmd{
                justify-content: center;
                display: flex;
                align-items: center;
            }

            @media screen and (max-width: 769px) {
                padding: 0;

                .showOnlyOnmd{
                    border: 0;
                    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.07);
                    margin-bottom: 10px;
                }
            }
        }

    }
    
    .hold-contents{
        overflow: hidden;
        padding: 120px 0;
        margin-top: 0px;
        min-height: 100%;

        .v-tabs-items{
            max-width: $max_wTheme;
            margin: 0px auto;
            background: transparent;
        }
        @media screen and (max-width: 769px) {
            min-height: auto;
            padding: 0px 0px 110px 0px;

            .portfolio-section,.work-section,.education-section,.skills-section{
                max-width: 90%;
                margin: 0px auto;
            }
        }

    }
    .head-section{
        align-items: center;
        padding-top: 74px;
        padding-bottom: 40px;
        max-width: 93.25%;
        justify-content: space-between;
        flex-flow: row;

        @media screen and (max-width: 769px) {
            max-width: 90%;
            padding-top: 55px;
            padding-bottom: 0;

            .imageCol{


                .profile-img{
                    max-width: 79px;
                    max-height: 79px;
                }
                .chat-option{
                    max-width: 34px;
                    max-height: 34px;
                    border-width: 3px;
                    left: 28%;
                    bottom: -15px;

                    i{
                        font-size: 15px;
                    }
                }
            }
            .profileCol{
                margin-left: 5%;

                
                .head-profile{
                    font-size: 12px;
                }
                .social-wrap{
                    a{
                        width: 67px;
                        height: 67px;
                        background: #F8F8F8;
                        box-shadow: -6px -6px 16px #FFFFFF, 
                        6px 6px 16px rgba(209, 205, 199, 0.4);
                        border-radius: 15px;
                        margin: 0px 2%;
                    }
                }
            }

            .interviewSection{
                border: 0;
                align-items: flex-start;
                margin-top: 0;

                .title-medium{
                    font-size: 0;
                    &::before{
                        content: "Interviews:";
                        font-size: 12px;
                        font-family: "Roboto-Medium";
                    }
                }
                .option-wrap{
                    margin-top: 5px;

                    .btn-default{
                        min-width: 116px;
                        min-height: 30px;
                        line-height: 30px;
                        margin: 0 0 5px 0;
                        border-width: 0.5px;
                        font-size: 10px;

                        i{
                            font-size: 15px;
                        }
                    }

                   
                }
            }
            .rateSection{
                border-top: 1px solid #E5E5E5;
                margin-top: 15px;
                flex-flow: nowrap;
                min-height: 69px;

                .rate-wrap{

                    justify-content: center;

                    

                    .col-5,.col-7{

                        justify-content: center;
                        display: flex;
                        .price{
                            &::before{
                                content: "Hourly Rate:";
                                font-size: 10px;
                                font-style: italic;
                                font-weight: normal;
                                font-family: "Roboto";
                                color: #5F6368;
                                vertical-align: middle;
                            }
                            font-size: 16px;
                            font-weight: bold;
                        }
                        .hours{
                            &::before{
                                content: "Weekly Avaiablity:";
                                font-size: 10px;
                                font-style: italic;
                                font-weight: normal;
                                font-family: "Roboto";
                                color: #5F6368;
                                vertical-align: middle;
                            }
                            font-size: 16px;
                            font-weight: bold;
                        }
                        .text_price{
                            font-size: 0px;
                        }
                        .text_hours{
                            font-size: 0px;
                        }
                    }
                    
                }
                .hire-wrap{
                    margin-top: 0px !important;

                    .col-12{
                        display: flex;
                        justify-content: flex-end;
                    }
                    
                }

                .btn-action{
                    min-width: 95px;
                    min-height: 29px;
                    line-height: 29px;
                    font-size: 10px;
                }
            }
        }

        @media screen and (max-width: 375px) {
            .profileCol{
                max-width: 132px;
                margin-left: 3%;
            }
        }

        .profileCol{
            display: flex;
            flex-flow: column;

            .head-name{
                font-family: "Montserrat";
                font-style: normal;
                font-weight: bold;
                font-size: 36px;
                line-height: 36px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #575757;
            }

            .head-profile{
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 16px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #575757;
                padding-top: 17px;
            }

            .option-wrap{
                margin-top: 10px;
                justify-content: flex-start;
                align-items: center;
                display: flex;

                .btn-default{
                    margin: 0 15px;
                }
                
                a{
                    width: 59px;
                    height: 59px;
                    background: #F8F8F8;
                    box-shadow: -6px -6px 16px #FFFFFF, 
                    6px 6px 16px rgba(209, 205, 199, 0.4);
                    border-radius: 40px;
                    display: block;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    margin-right: 15%;

                    &:hover{
                        box-shadow: -6px -6px 16px #FFFFFF, 
                        6px 6px 16px rgba(209, 205, 199, 0.4), 
                        inset 6px 4px 12px rgba(0, 0, 0, 0.25), 
                        inset -6px -4px 12px #FFFFFF;
                        border: 1px solid #fff;
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
        max-width: 156px;
        flex-flow: column;


        .profile-img{
            width: 156px;
            height: 150px;
            display: block;
            background: #f8f8f8;
            justify-content: center;
            align-items: center;
            display: flex;
            
            &.bs__superInset{
                box-shadow: -6px -6px 16px #FFFFFF, 
                6px 6px 16px rgba(209, 205, 199, 0.4), 
                inset 6px 4px 12px rgba(0, 0, 0, 0.25), 
                inset -6px -4px 12px #FFFFFF;
                border-radius: 15px;   
            }        

            >img{
                width: 133px;
                height: 128px;
                border-radius: 15px;
                background-position: center;
                background-size: cover;
            }
        }
        a{
            font-family: "Montserrat";
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

    .social-wrap{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        max-width: 97.2%;

        a{
            width: 67px;
            height: 67px;
            background: #F8F8F8;
            box-shadow: -6px -6px 16px #FFFFFF, 
            6px 6px 16px rgba(209, 205, 199, 0.4);
            border-radius: 15px;
            margin: 0 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            &:hover{
                box-shadow: -6px -6px 16px #FFFFFF, 
                6px 6px 16px rgba(209, 205, 199, 0.4), 
                inset 6px 4px 12px rgba(0, 0, 0, 0.25),
                inset -6px -4px 12px #FFFFFF;
                border: 1px solid #fff;
            }
            

        }
    }

    .interviewSection{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }

    .rateSection{
        flex-wrap: wrap;
        justify-content: center;
        display: flex;
        align-items: center;
        position: relative;

        background: #F8F8F8;
        box-shadow: -6px -6px 16px #FFFFFF, 
        inset 6px 4px 12px rgba(0, 0, 0, 0.25), 
        inset -6px -4px 12px #FFFFFF;
        border-radius: 15px;
        max-width: 43.8%;
        
        .shareOption{
            width: 56px;
            height: 56px;
            position: absolute;
            top: -65px;
            right: 0px;
        }



        .rate-wrap{

            display: flex;
            justify-content: space-around;
            align-items: center;
            min-height: 154px;
            border: 2px solid #fff;

            .col-4{
                max-width: 31.68%;
                justify-content: center;
                display: flex;
                flex-flow: column;
                align-items: center;

                &:nth-child(3){
                    background: #F8F8F8;
                    box-shadow: inset 6px 4px 10px rgba(185, 185, 185, 0.6), 
                    inset -6px -4px 16px #FFFFFF;
                    border-radius: 20px;
                    min-height: 105px;
                }
            }

            .price,.hours{
                font-family: "Montserrat";
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 24px;
                text-align: center;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #515151;
            }
            .text_price,.text_hours{
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                text-align: center;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #515151;
            }
        }
    }

    
    .hold-tabs{


        @media screen and (max-width: 769px) {
            box-shadow: none;
            position: relative;
            width: 100%;
        }
    }
    
    .main-tabs_theme21{

        max-width: $max_wTheme;
        margin: 0px auto;
        
        &::after{
            content: "";
            width: 100%;
            height: 4px;
            background: #F3F3F3;
            box-shadow: inset 0px 1px 1px rgba(202, 202, 202, 0.2);
            display: block;
        }

        .v-tab{
            display: flex;
            padding: 0px;
            margin: 0px 3%;
            width: 302px;
            height: 72px;
            background: #F8F8F8;
            box-shadow: -6px -6px 16px #FFFFFF, 6px 6px 16px rgba(209, 205, 199, 0.4);
            border-radius: 15px;
            
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 0px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: rgba(84, 84, 84, 0.2) !important;

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

                color: #474747 !important;
                font-weight: bold;
                box-shadow: -6px -6px 16px #FFFFFF, 
                6px 6px 16px rgba(209, 205, 199, 0.4), 
                inset 6px 4px 12px rgba(0, 0, 0, 0.25), 
                inset -6px -4px 12px #FFFFFF;
                border: 1px solid #fff;

            }

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
            
        }

        @media screen and (max-width: 769px) {

            min-height: 77px;

            .v-tab{
                flex-flow: column;
                min-width: 80px;
                max-height: 77px;
                margin: 0 5px;
                font-size: 10px;
                font-family: "Roboto";
                font-style: normal;


                i{
                    margin: 0 0 8px 0;
                    font-size: 22px;
                }
            }

        }
    }

    .v-timeline{
        padding-top: 0;

        &::before{
            background: #d8d8d8 !important;
        }
        .v-timeline-item{
            .v-card{
                box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
                padding: 30px;

                .headline{
                    padding: 0;
                    font-size: 18px;

                    .title-mob{
                        display: none;
                    }

                    &::before{
                        content: "";
                        width: 40px;
                        height: 40px;
                        border: 3px solid #d8d8d8;
                        border-radius: 100%;
                        margin-right: 25px;
                        
                    }
                }
                .v-card__text{
                    font-size: 12px;
                    color: rgba(32, 33, 36, 0.5);
                }
                &::before{
                    border: 0;
                }
                &::after{
                    border: 0;
                }
            }

            .v-timeline-item__opposite{
                >span,span+span{
                    font-size: 20px;
                    color: #202124;
                    opacity: .5;
                }
            }
        }

        @media screen and (max-width: 769px) {
            .v-timeline-item{
                padding-bottom: 10px;
                .v-card{
                    padding: 25px;

                    .headline{
                        font-size: 14px !important;
                        font-family: "Roboto-Medium" !important;
                        align-items: center;
                        line-height: 18px;
                        position: relative;

                        &::before{
                            margin-right: 20px;
                            border-width: 1px;
                        }

                        .title-mob{
                            font-size: 10px;
                            display: inline-block;
                            color: #5F6368;
                            line-height: 18px;                        
                        }
                    }
                    .v-card__text{
                        font-size: 10px;
                        line-height: 16px;
                    }
                }
            }
        }
        
    }  
    /** Items tab work */
    .work-wrap{
        justify-content: space-around;

        .col-12{
            max-width: 42.8%;
            margin-bottom: 30px;
        }
        .item-work{
            width: 100%;
            background: #F8F8F8;
            box-shadow: -6px -6px 16px #FFFFFF, 6px 6px 16px rgba(209, 205, 199, 0.4), inset 6px 4px 12px rgba(0, 0, 0, 0.25), inset -6px -4px 12px #FFFFFF;
            border-radius: 15px;
            padding: 70px 54px;
            height: 100%;
            max-height: 335px;
            border: 2px solid #fff;

            

            .v-card__subtitle,.v-card__title,.v-card__text{
                padding: 0;
            }

            .v-card__title{
                
                font-family: "Gotham Pro";
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 17px;
                color: #4F78E5;
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
                margin-top: 15px;
            }



            .v-card__subtitle{

                font-family: "Montserrat";
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 22px;
                color: #474747;
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

                &::before{
                    content: "";
                    width: 16px;
                    height: 16px;
                    background: #4E75E7;
                    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
                    display: inline-block;
                    border-radius: 100%;
                    margin-right: 36px;
                }
            }
            .v-card__title,.v-card__text{
                padding-left: 52px;

                
            }

            .v-card__text{
                margin-top: 35px;
                max-height: 135px;
                overflow: hidden;

                h5{
                    font-family: "Actor";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 24px;
                    color: #474747;
                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); 
                }

                p{
                    margin-top: 10px;
                    margin-bottom: 0px;
                    font-family: "Actor";
                    font-style: normal;
                    font-weight: normal;
                    color: #727272;
                    font-size: 18px;
                    line-height: 34px;
                    overflow: hidden;
                    padding: 0px;
                }
            }

        }
    }

    .skills-wrap{
        .main-subtabs_skills{
            .v-tab{
                position: relative;
                font-family: "Gotham Pro";
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 23px;
                color: #5C5C5C;
                text-transform: capitalize;
                min-height: 30px;
                padding: 0px;
                margin: 0px 5% !important;

                &.v-tab--active{

                    &::after{
                        position: absolute;
                        content: "";
                        display: block;
                        width: 7em;
                        height: 5px;
                        background: #C5C5C5;
                        box-shadow: inset 0px 1px 5px rgba(28, 28, 28, 0.8);
                        bottom: 0px;
                        border-radius: 3px;
                    }

                    &:focus,&:hover{
                        &::before{
                            opacity: 0;
                        }
                    }
                }

                &:hover{
                    &::before{
                        opacity: 0;
                    }
                }

                
            }
        }
        .mc-subtabs_skills{
            display: flex;
            justify-content: center;
            align-items: center;

            width: 100%;
            margin: 66px auto 0 auto;

            .item-skill{
                width: 76px;
                height: 76px;
                margin: 0px 17px;

                background: #F8F8F8;
                border: 2px solid #fff;
                box-shadow: -6px -6px 16px #FFFFFF, 
                6px 6px 16px rgba(209, 205, 199, 0.4);
                border-radius: 15px;
        
                justify-content: center;
                align-items: center;
                display: flex;

                &:hover{
                    
                    box-shadow: -6px -6px 16px #FFFFFF, 
                    6px 6px 16px rgba(209, 205, 199, 0.4), 
                    inset 6px 4px 12px rgba(0, 0, 0, 0.25), inset -6px -4px 12px #FFFFFF;
                }



                img{
                    width: 42.8px;
                    height: 42.8px;
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
    .btn-action{
        display: block;
        min-width: 89%;
        min-height: 80px;
        text-align: center;
        background: #1900B4;
        box-shadow: -6px -6px 16px #FFFFFF, 
        6px 6px 16px rgba(221, 219, 216, 0.4), 
        4px 4px 20px rgba(25, 0, 180, 0.2);
        border-radius: 20px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 80px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #FFFFFF;
        text-decoration: none;

        &:hover{
            opacity: 0.8;
        }
    }
    .portfolio-wrap{

        justify-content: space-evenly;

        .col-12{
            max-width: 42.8%;;
            background: #F8F8F8;
            margin-bottom: 75px;
        }
        
        .box-photo{
            display: flex;
            width: 100%;
            box-shadow: -6px -6px 16px #FFFFFF,
             6px 6px 16px rgba(209, 205, 199, 0.4), 
             inset 6px 4px 12px rgba(0, 0, 0, 0.25), 
             inset -6px -4px 12px #FFFFFF;
            border-radius: 15px;
            border: 2px solid #fff;
            flex-flow: wrap;
            padding-bottom: 45px;

            .title-photo{
                font-family: "Montserrat";
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 25px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                display: flex;
                color: #4E4E4E;
                align-self: flex-start;
                padding-left: 42px;
            }

            img{
                margin: 0px auto;
                max-width: 100%;
            }
        }
        @media screen and (max-width: 960px) {
            .col-12{
                max-width: 100%;
            }

            .box-photo{
                margin-bottom: 10px;
                max-height: 372px;
                padding: 10px;

                img{
                    width: 100%;
                }
            }
        }
    }

    

    .skills-wrap{
        
        justify-content: space-between;

        .box-skill{
            display: flex;
            background: #ffffff;
            box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
            padding: 25px 0px 25px 50px;
            margin-bottom: 2%;
            align-self: stretch;
            max-width: 460px;

            .logo-skill{
                width: 63px;
                height: 63px;
                border-radius: 100%;
                background: #D8D8D8;
                color: #fff;
                text-align: center;
                font-size: 24px;
                line-height: 54px;
                font-family: 'Roboto-Bold';
                border: 5px solid #D8D8D8;

                &.icon_ps{
                    background: #242B74;
                    border-color: #2E9EF5;
                }
                &.icon_ai{
                    background: #202124;
                    border-color: #F4B400;
                }
                &.icon_xd{
                    background: #202124;
                    border-color: #E535AB;
                }
                &.icon_id{
                    background: #242B74;
                    border-color: #FF00AB;
                }
            }

            .info-skill{
                margin-left: 30px;
                width: 277px;
                .head-skill{

                    width: 100%;
                    justify-content: space-between;
                    display: flex;
                    margin-bottom: 25px;

                    >span{
                        font-size: 20px;
                        font-family: "Roboto";
                        color: #202124;
                    }
                }
            }


            @media screen and (max-width: 960px) {
                max-width: 100%;

                .info-skill{
                    width: 80%;
                }
            }
        }
        @media screen and (max-width: 769px) {
            .box-skill{

                padding: 20px 30px;
                justify-content: space-between;
                margin-bottom: 10px;

                .logo-skill{
                    max-width: 52px;
                    max-height: 52px;
                    font-size: 19px;
                    line-height: 44px;
                }
                .info-skill{
                    width: 73%;
                    margin-left: 0px;

                    .head-skill{
                        margin-bottom: 15px;

                        > span{
                            font-size: 15px;
                        }
                    }
                    .v-progress-linear{
                        height: 6px !important;
                    }
                } 
            } 
        }
    }

    /** Modals styles */
    .v-dialog{
        .v-card{
            padding-bottom: 80px;

            &.form-wrap{
                padding: 0;

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

            }

            .v-card__actions{
                padding: 30px;
                display: flex;
                justify-content: flex-end;
            }
            .close-icon{
                color: #D93025;
                font-size: 46px;
            }

            .container{
                padding: 70px;

                @media screen and (max-width: 769px) {
                    padding: 35px 18px;
                }
            }
        }

        @media screen and (max-width: 769px) {
            

            .v-card{
                padding-bottom: 70px !important;
                border-radius: 10px !important;

                &.form-wrap{
                    padding-bottom: 0px !important;
                    .v-btn{
                        font-size: 14px;
                        padding: 0px 25px;
                        min-height: 36px;
                        height: 36px;

                        &.btn-send{
                            max-width: 157px;
                            max-height: 36px;
                            height: 36px;
                            font-size: 14px;

                            i{
                                font-size: 16.8px;
                                margin-right: 10px;
                            }
                        }
                    }
                }
                .close-icon{
                    font-size: 22.5px;
                }
                .v-card__actions{
                    padding: 18px 18px 35px 18px;
                }
            }
        }
    }


    /** Player styles */
    .player{
        justify-content: center;
        align-items:center;
        flex-direction: column;
        display: flex;

        .hold-spectre{
            background: #F5F7F7;
            padding: 15px 22px;
            margin-bottom: 50px;
            &:hover{
                cursor: pointer;
            }
        }

        a{
            text-decoration: none;
        }

        i{
            font-size: 76px;
            color: #202124;
        }

        @media screen and (max-width: 769px) {
            .hold-spectre{
                max-width: 334px;
                max-height: 205px;
                margin-bottom: 30px;

                img{
                    max-width: 100%;
                }
            }

            i{
                font-size: 50px;
            }
        }

    }
    .hold-video{
        position: relative;
        max-width: 613px;
        max-height: 373px;
        margin: 0 auto;

        .poster-video{
            position: absolute;
            z-index: 2;
            width: 100%;
            height: 100%;
            background: #000;
            justify-content: center;
            align-items: center;
            display: flex;
            a{
                text-decoration: none;
                i{
                    font-size: 65px;
                    color: #D8D8D8;
                }
            }
        }

        video{
            position: relative;
            z-index: 1;
            max-width: 100%;
        }

        @media screen and (max-width: 769px) {
            max-width: 334px;
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
            margin-top: 20px;
            background: #F5F7F7;
            max-width: 710px;
            min-height: 160px;

            .pay-method{

                .item-pay{
                    display: flex;
                    margin-left: 15%;
                }

                .v-radio{
                    margin-right: 0px;
                    margin-left: 0;
                }
            }

            .col-12{
                align-items: center;
                display: flex;
            }
        }
        @media screen and (max-width: 769px) {

            h3{
                font-size: 16px;
            }
            .container{
                padding: 0px 20px !important;
            }

            .hold-payment{
                margin-top: 10px;
                height: 147px;
                min-height: 100%;

                .pay-method{
                    .item-pay{
                        flex-flow: row;
                        display: flex;
                        margin-left: 30px;
                        margin-bottom: 20px;

                        .v-radio{
                            margin-left: 0px;
                        }
                        img{
                            max-width: 124px;
                        }
                    }
                    
                }
            }
            
        }

    }

    
    
    
</style>
<script>
    export default {
        name: 'Theme21',
        props: ['freelancer'],
        components: {},
        data() {
            return {
                worksHistory: this.freelancer.works_history,
                educationsHistory: this.freelancer.educations_history,
                skillsItems: [
                    "Programming Languages",
                    "Frameworks/ Databases",
                    "Design Skills",
                    "Software"
                ],
                portfolio: true,
                activeTab: null,
                activeTabSkill: null,
                currentTab: 'portfolio',
                colorTab: '',
                formMessage: {
                    name: '',
                    nameRules: [
                        v => !!v || 'Name is required',
                        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                    ],
                    email: '',
                    emailRules: [
                        v => !!v || 'E-mail is required',
                        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                    ],
                    message: ''
                },
                formHasErrors: false,
                // --Timeline
                reverseTimeline: true,
                smallTimeline: true,
                // --Dialog
                dialogMessage: false,
                dialogAudio: false,
                dialogVideo: false,
                dialogHireme: false,
                // --Player
                playing: false,
                radioGroup: 1
            }
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
            },
            cancelForm() {
                this.dialogMessage = false;
                this.$refs.formMessages.reset();
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

