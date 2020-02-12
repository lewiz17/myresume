<template>
    <div id="freelancerResumeTheme13" class="d-flex">
        <v-container class="hold_theme13">
            <v-row class="freelancerCard">
                <v-col lg="12" md="12" cols="12" class="resumeCardRight">
                    <div class="showOnlyOnmd">
                        <v-container>
                            <v-row class="head-section">
                                <v-col lg="auto" class="imageCol">
                                    <span class="profile-img" /> 
                                </v-col>
                                <v-col lg="auto" class="profileCol">
                                    <div class="head-name">{{freelancer.user_data.first_name}}</div>
                                    <div class="head-profile">{{freelancer.user_data.job_title}}</div>
                                </v-col>
                                <v-col lg="4" class="actionsSection">
                                    <a href="" @click.prevent="dialogMessage = true" class="send-message">
                                        <img src="@/assets/imgs/resume13/icon-message.png" alt="">
                                    </a>
                                    <a href="" @click.prevent="dialogAudio = true" class="audio">
                                        <img src="@/assets/imgs/resume13/icon-audio.png" alt="">
                                    </a>
                                    <a href="" @click.prevent="dialogVideo = true" class="video">
                                        <img src="@/assets/imgs/resume13/icon-video.png" alt="">
                                    </a>

                                </v-col>
                                <v-col lg="3" md="3" class="rateSection">
                                    <v-row class="rate-wrap">
                                        <v-col lg="6">
                                            <span class="price">
                                                ${{Math.ceil(freelancer.agent.hourly_rate)}}
                                            </span>
                                            <span class="text_price">
                                                Hourly rate
                                            </span>
                                        </v-col>
                                        <v-col lg="6">
                                            <span class="hours">
                                             {{Math.ceil(freelancer.user_data.available_hours_per_week)}} hours
                                            </span>
                                            <span class="text_hours">
                                                Weekly Availability
                                            </span>
                                        </v-col>
                                    </v-row>
                                                    
                                </v-col>
                                <v-col lg="auto">
                                    <v-row class="hire-wrap">
                                        <v-col lg="10" sm="12" cols="12">
                                            <a href="#" class="btn-outline" @click.prevent="dialogHireme = true">Hire Me</a>
                                        </v-col>    
                                    </v-row>    
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col class="social-hold">
                                    <a href="" @click.prevent="">
                                        <img src="@/assets/imgs/resume13/icon-behance.png" alt="">
                                    </a>
                                    <a href="" @click.prevent="">
                                        <img src="@/assets/imgs/resume13/icon-dribble.png" alt="">
                                    </a>
                                    <a href="" @click.prevent="">
                                        <img src="@/assets/imgs/resume13/icon-pinterest.png" alt="">
                                    </a>
                                    <a href="" @click.prevent="">
                                        <img src="@/assets/imgs/resume13/icon-instagram.png" alt="">
                                    </a>
                                    <a href="" @click.prevent="">
                                        <img src="@/assets/imgs/resume13/icon-linkedin.png" alt="">
                                    </a>
                                </v-col>
                            </v-row>
                        </v-container>
                      
                    </div>
                    <div class="hold-tabs">
                        <v-tabs
                            class="main-tabs_theme13"
                            v-model="activeTab"
            
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
                                {{getTabName(tab.label)}}                                   
                            </v-tab>                       
                        </v-tabs>
                    </div>                    
                    <div class="hold-contents">
                        <v-tabs-items v-model="activeTab">
                            <v-tab-item class="portfolio-section" value="tab-0">
                               <div class="hold-slider">
                                    <slick ref="slick" :options="slickOptions">
                                        
                                        <img src="@/assets/imgs/resume13/slide.png" alt=""/>
                                    
                                        <img src="@/assets/imgs/resume13/slide.png" alt=""/>
                                    
                                        <img src="@/assets/imgs/resume13/slide.png" alt=""/>
                                    
                                        <img src="@/assets/imgs/resume13/slide.png" alt=""/>
                                        
                                    </slick>
                                    <div class="nav-slider">
                                        <a href="#" @click.prevent="prevSlide"><img src="@/assets/imgs/resume13/arrow-left.png" alt=""/></a>
                                        <span class="navDots"></span>
                                        <a href="#" @click.prevent="nextSlide"><img src="@/assets/imgs/resume13/arrow-right.png" alt=""/></a>
                                    </div>
                                </div>
                            </v-tab-item>
                            <v-tab-item class="work-section" value="tab-1" >
                                <v-container>
                                    <v-row class="contentSection">
                                        <v-col lg="6" v-for="(work, index) in worksHistory" :key="index+'W'">
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
                                        </v-col>
                                        
                                    </v-row>
                                </v-container>
                            </v-tab-item>
                            <v-tab-item class="education-section" value="tab-2" >
                                <v-container>
                                    <v-row class="contentSection">
                                        <v-col lg="6" v-for="(education, index) in educationsHistory" :key="index+'E'">
                                            <div class="hold-titles">
                                                <span class="title-work">{{education.school_title}}</span>
                                                <span class="years-work">
                                                    {{getFullYear(education.date_from)}}
                                                    <span v-if="education.is_currently_learning">- Present</span>
                                                    <span v-else>&nbsp;-&nbsp;{{getFullYear(education.date_to)}}</span>
                                                </span>
                                            </div>
                                            <div class="hold-text">
                                                <span class="title-company">{{education.school_title}}</span>
                                                <span class="list-tasks">{{education.description}}</span>
                                            </div>
                                        </v-col>
                                        
                                    </v-row>
                                </v-container>
                            </v-tab-item>
                            <v-tab-item class="skills-section" value="tab-3" >
                                <v-row class="skills-wrap">
                                    <v-col lg="12">
                                        <v-tabs
                                            class="main-subtabs_skills"
                                            v-model="activeTabSkill"
                                            centered
                                            hide-slider
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

    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,800,900&display=swap');
    @import 'https://fonts.googleapis.com/css?family=Actor:300,400,500,700,800,900&display=swap';

    @font-face {
        font-family: 'Gotham Pro';
        src: url('../assets/fonts/Gotham Pro Regular.eot') format('embedded-opentype'),  url('../assets/fonts/Gotham Pro Regular.otf')  format('opentype'),
                url('../assets/fonts/Gotham Pro Regular.woff') format('woff'), url('../assets/fonts/Gotham Pro Regular.ttf')  format('truetype'), url('../assets/fonts/Gotham Pro Regular.svg#Gotham Pro') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    $max_wTheme : 1420px;
    $tab_OneColor : #D93025;
    $tab_TwoColor : #0F9D58;
    $tab_ThreeColor : #F4B400;
    $tab_FourColor : #4285F4;

    $colorBlue : #104EFB;

    /** Removing default padding on cols vuetify */
    .col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1{
        padding: 0;
    }
    .container{
        margin: 0 auto !important;
        padding: 0;

        .freelancerCard{
            width: 100%;
            background: #F5F7F7;
        }

        &.hold_theme13{


            .showOnlyOnmd{
                justify-content: center;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E5E5E5;
                background: #ffffff;
            }

        }

    }
    
    .hold-contents{
        background: #fff;
        overflow: hidden;
        min-height: 870px;
        margin-top: -1px;

        .v-tabs-items{
            max-width: 1800px;
            margin: 0px auto;
            background: transparent;
        }


    }
    .head-section{
        align-items: center;
        padding: 40px 50px 30px;
        justify-content: space-between;
    }

    .imageCol{
        position: relative;
        align-items: center;
        display: flex;

        .profile-img{
            width: 110px;
            height: 110px;
            display: block;
            background-position: center;
            background-size: cover;
            border-radius: 100%;   
            background-color: $colorBlue;       
        }
        .chat-option{
            position:absolute;
            bottom: -22px;
            width: 55px;
            height: 55px;
            left: 20%;
            
            border-radius: 100%;
            text-decoration: none;  
            border: 5px solid #fff;
            background: #F1F3F4;
            justify-content: center;
            display: flex;
            align-items: center;

            i{
                color: #D93025;
                vertical-align: middle;

            }
        }
    }

    .profileCol{
       /** */
       line-height: auto;
    }

    .actionsSection{
        display: flex;
        align-items: center;
        justify-content: flex-start;

        a{
            display: inline-flex;
            margin-right: 45px;

            &:last-child{
                margin: 0;
            }
        }
    }

    .head-name{
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: $colorBlue;
    }
    .head-profile{
        font-family: 'Raleway', sans-serif;
        font-size: 14px;
        line-height: 16px;
        color: $colorBlue;
    }

    .interviewSection{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        margin-top: 20px;


        border-left: 1px solid #E5E5E5;
        border-right: 1px solid #E5E5E5;
        .option-wrap{
            margin-top: 25px;

            .btn-default{
                margin: 0 15px;
            }
        }
    }

    .rateSection{
        flex-wrap: wrap;
        justify-content: center;
        display: flex;
        align-items: center;

        .rate-wrap{
            font-family: "Raleway";
            font-style: normal;
            text-align: center;
            color:$colorBlue;

            .col{
                justify-content: center;
                align-items: center;
                display: flex;

                .price,.hours{
                    font-weight: bold;
                    text-transform: uppercase;
                }
                .text_price,.text_hours{
                    font-size: 18px;
                    line-height: 21px;
                }
            }
        }

    }

    .social-hold{
        min-height: 88px;
        background: #104EFB;
        justify-content: center;
        align-items: center;
        display: flex;

        a{
            margin-right: 45px;

            &:last-child{
                margin: 0;
            }
        }
    }

    
    .hold-tabs{
        background: #fff;
        padding-top: 55px;
    }
    
    .main-tabs_theme13{
        background: #fff;
        margin: 0px auto;

        .v-tab{
            text-transform: capitalize;
            font-family:"Raleway", sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 28px;
            padding: 0px;
            min-width: 333px;
            color: $colorBlue !important;
            transition: all .1s ease-in;
            display: flex;

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

                font-weight: 300;
                font-size: 72px;
                line-height: 85px;

                &::after{
                    content: "";
                    min-width: 180px;
                    height: 1px;
                    background:  rgba(16, 78, 251, 0.2);
                    position: absolute;
                    bottom: 0px;
                }

                &:hover{
                    &::before{
                        opacity: 0;
                    }
                }
                &::before{
                    opacity: 0;
                }



            }
            
        }

    }

    .contentSection{
        padding-top: 145px;
        color: $colorBlue;
        

        .col{
            display: flex;
            flex-flow: row;
            align-items: flex-start;
            justify-content: center;
            min-height: 145px;
            margin-bottom: 125px;
        }

        .hold-titles,.hold-text{
            display: flex;
            flex-flow: column
        }
        .hold-titles{
            min-width: 195px;
            justify-content: space-between;
            align-items: flex-start;
            height: 100%;
            padding-top: 15px;
        }
        .hold-text{
            width: 545px;
        }

        .title-work{
            font-family: "Gotham Pro";
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 15px;
            text-transform: capitalize;
            max-width: 140px;
        }

        .title-company{
            font-family: "Actor";
            font-style: normal;
            font-weight: 500;
            font-size: 30px;
            line-height: 35px;
        }

        .list-tasks{
            font-family: "Actor";
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 28px;
        }

        .years-work{
            font-family: "Actor";
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
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

        &:hover{
            opacity: 0.8;
        }
    }

    .btn-outline{
        min-width: 193px;
        text-align: center;
        min-height: 75px;
        border: 2px solid $colorBlue;
        font-family: "Raleway";
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;
        color: $colorBlue;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .portfolio-wrap{

        justify-content: space-between;

        .col-12{
            max-width: 700px;
        }
        
        .box-photo{
            padding: 16px 15px;
            background: #fff;
            box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
            margin-bottom: 20px;
            display: flex;

            img{
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
            .main-subtabs_skills{

                max-width: 1200px;
                margin: 95px auto 0px auto;

                .v-tab{
                    position: relative;
                    text-transform: capitalize;
                    min-height: 30px;
                    padding: 0px;
                    display: flex;
                    font-family: "Gotham Pro";
                    font-style: normal;
                    font-weight: 300;
                    font-size: 24px;
                    line-height: 23px;
                    color: rgba(16, 78, 251, 0.6) !important;
                    opacity: 0.5;
                    margin-right: 6%;

                    &:last-child{
                        margin: 0;
                    }

                    &.v-tab--active{

                        color: rgba(16, 78, 251, 0.8) !important;
                        opacity: 1;
                        font-weight: bold;


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
        @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .mc-subtabs_skills{
                .item-skill{
                    height: 57px;
                    padding: 0px;
                    margin: 0px 3%;
                }
            }
        }

    }



    /** Slider section */


    

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
                color:$colorBlue;
                font-size: 46px;
            }

            .container{
                padding: 70px;

   
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

    }

    
    
    
</style>
<script>
    import Slick from 'vue-slick';

    export default {
        name: 'Theme13',
        props: ['freelancer'],
        components: {
            Slick
        },
        data() {
            return {
                skills: this.freelancer.skills,
                projects: this.freelancer.projects,
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
                slides: [],
                activeTabSkill: null,
                slideNumber : 1,
                slickOptions: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    swipe: true,
                    speed: 500,
                    appendDots: '.navDots',
                    responsive: [
                        {
                        breakpoint: 767,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        }
                    ]
                },
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
            nextSlide() {
                this.$refs.slick.next();
            },
            prevSlide() {
                this.$refs.slick.prev();
            },
            reInit() {
                this.$refs.slick.reSlick()
            },
            getFullYear(date){
                let newDate = new Date(date);
                let yyyy = newDate.getFullYear();
                return yyyy;
            },
            getTabName(label) {
                let arrayTabs = {
                    'portfolio': 'Portfolio',
                    'skills': 'Skills',
                    'work': 'Works',
                    'education': 'Education'                    
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

