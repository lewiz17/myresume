<template>
    <v-container class="hold_theme2">
        <v-row class="freelancerCard">
            <v-col lg="12" md="12" cols="12" class="resumeCardRight">
                <div class="showOnlyOnmd">
                    <v-row class="headProfile">
                        <v-col lg="2" md="2" class="imageCol">
                            <div class="imageContainer">
                                <span class="circle_black"></span> 
                                <span class="circle_golden"></span>  
                                <img :src="getImageSrc(freelancer.user_data.profile_picture)" alt="freelancer"
                                    class="photoProfile" width="120" height="120">                                  
                            </div>
                        </v-col>
                        <v-col lg="2" md="2" class="freelancerCardLeft">
                            <div class="nameArea">
                                <div class="nameCard">
                                    {{freelancer.user_data.first_name}}
                                </div>
                                <div class="jobTitle" style="font-size: 14px; padding-top: 0px;"
                                    :id="'animatedText'+freelancer.id">
                                    {{freelancer.user_data.job_title}}
                                </div>

                                <form action="/chat-room/start_conversation" method="post">
                                    <input type="hidden" name="freelancer_id" :value="freelancer.id">
                                    <input type="submit" value="Tap to chat"
                                        class="tap-to-chat btnSm-outline cursorPointerOnHover"
                                        style="background: none; outline: none;">
                                </form>

                                <div :id="'welcomeText'+freelancer.id" class="d-none">
                                    Hi, I am {{freelancer.user_data.first_name}}, I am a {{freelancer.user_data.job_title}}, How
                                    can I help
                                    you ?
                                </div>
                            </div>
                        </v-col>
                        <v-col lg="2" md="2" class="freelancerCardSocial" >
                            <a href="" alt="Behance" title="Behance"><img src="../assets/icons/behance.png"/></a>
                            <a href="" alt="Dribble" title="Dribble"><img src="../assets/icons/dribble.png"/></a>
                            <a href="" alt="Instagram" title="Instagram"><img src="../assets/icons/instagram.png"/></a>
                            <a href="" alt="Linkedin" title="Linkedin"><img src="../assets/icons/linkedin.png"/></a>
                            <a href="" alt="Facebook" title="Facebook"><img src="../assets/icons/facebook.png"/></a>

                        </v-col>
                        <v-col lg="6" md="6" class="freelancerCardRight">
                            <v-row class="w-100 pb-5">
                                <v-col lg="12" md="12">
                                    <span class="titleInterview">Your Interviews: </span>
                                    <a class="opUpload" href="javascript:void(0)"><img src="../assets/icons/speaker.png"/>Upload audio</a>
                                    <a class="opUpload" href="javascript:void(0)"><img src="../assets/icons/play-button.png"/>Upload Video</a>
                                </v-col>
                            </v-row>
                            <v-row class="w-100">
                                <div class="col-md-3 text-center">
                                    <span style="font-family: 'Nexa';font-style: normal;font-weight: bold;font-size: 26px;line-height: 26px;">
                                        {{Math.ceil(freelancer.agent.hourly_rate)}}$
                                    </span>
                                    <div class="cardLabel" style="font-family: 'Nexa Light';font-style: normal;font-weight: 300;font-size: 20px;line-height: 24px;">
                                        Hourly rate
                                    </div>
                                </div>

                                <div class="col-md-5 text-center">
                                    <span style="font-family: 'Nexa';font-style: normal;font-weight: bold;font-size: 26px;line-height: 26px;">{{Math.ceil(freelancer.user_data.available_hours_per_week)}} hours</span>
                                    <div class="cardLabel" style="font-family: 'Nexa Light';font-style: normal;font-weight: 300;font-size: 20px;line-height: 24px;">Weekly
                                        Availability
                                    </div>
                                </div>

                                <div class="col-md-4" style="padding: 0;">

                                    <div class="row text-center cardRow NoDecor">
                                        <a class="hireCardBtn btn-block showHireSection" href="javascript:void(0)"
                                        @click="showHireSection()">
                                            Hire me
                                        </a>
                                    </div>
                                </div>
                            </v-row>
                        </v-col>
                        <v-col lg="12" justify="center" align="center" style="border-bottom:3px solid #000" class="pt-4"></v-col>
                    </v-row>
                </div>
                <div class="showOnlyOnsm">
                    <div class="headProfile">
                        <v-row>
                            <v-col class="imageCol" sm="2">
                                <v-row>
                                    <div class="imageContainer">
                                        <span class="circle_black"></span> 
                                        <span class="circle_golden"></span>  
                                        <img :src="getImageSrc(freelancer.user_data.profile_picture)" alt="freelancer"
                                            class="photoProfile" width="120" height="120"> 
                                        <form action="/chat-room/start_conversation" method="post">
                                            <input type="hidden" name="freelancer_id" :value="freelancer.id">
                                            <input type="submit" value="Tap to chat"
                                                class="tap-to-chat btnSm-outline cursorPointerOnHover"
                                                style="outline: none;">
                                        </form>                                
                                    </div>
                                </v-row>                                
                            </v-col>
                            <v-col class="freelancerCardLeft" sm="10"> 
                                <v-row>
                                    <v-col class="nameArea">
                                        <div class="nameCard">
                                            {{freelancer.user_data.first_name}}
                                        </div>
                                        <div class="jobTitle" style="font-size: 14px; padding-top: 0px;"
                                            :id="'animatedText'+freelancer.id">
                                            {{freelancer.user_data.job_title}}
                                        </div>
                                    </v-col>
                                    <v-col class="interviews">
                                        <a class="opUpload" href="javascript:void(0)"><img src="../assets/icons/speaker.png"/></a>
                                        <a class="opUpload" href="javascript:void(0)"><img src="../assets/icons/play-button.png"/></a>
                                    </v-col> 
                                </v-row>
                                <v-row class="rates">
                                    <div class="col-md-4 text-center">
                                        <span style="font-family: 'Nexa';font-style: normal;font-weight: bold;font-size: 16px;line-height: 16px;">
                                            {{Math.ceil(freelancer.agent.hourly_rate)}}$
                                        </span>
                                        <div class="cardLabel">
                                            Hourly rate
                                        </div>
                                    </div>

                                    <div class="col-md-4 text-center">
                                        <span style="font-family: 'Nexa';font-style: normal;font-weight: bold;font-size: 16px;line-height: 16px;">{{Math.ceil(freelancer.user_data.available_hours_per_week)}} hours</span>
                                        <div class="cardLabel">Weekly Availability</div>
                                    </div>
                                </v-row>
                                                 
                            </v-col>
                           
             
                        </v-row>
                        <v-row>
                            <v-col sm="12" class="freelancerCardSocial" >
                                <a href="" alt="Behance" title="Behance"><img src="../assets/icons/behance.png"/></a>
                                <a href="" alt="Dribble" title="Dribble"><img src="../assets/icons/dribble.png"/></a>
                                <a href="" alt="Instagram" title="Instagram"><img src="../assets/icons/instagram.png"/></a>
                                <a href="" alt="Linkedin" title="Linkedin"><img src="../assets/icons/linkedin.png"/></a>
                                <a href="" alt="Facebook" title="Facebook"><img src="../assets/icons/facebook.png"/></a>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col sm="12" class="freelancerCardRight">
                                <v-row class="text-center cardRow NoDecor">
                                    <a class="hireCardBtn btn-block showHireSection" href="javascript:void(0)"
                                    @click="showHireSection()">
                                        Hire me
                                    </a>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div> 
                     
                </div>
                <transition name="slide-fade">
                    <div v-show="portfolio" class="wrap-portfolio">
                        <!-- nav row section -->
                        <div class="row navRow" v-if="freelancer.agent.resume_tabs.length < 1">
                            <div class="col-md-3 col-4 text-center"
                                style="border-right:1px solid #EBEDEF;" @click="setTabName('portfolio')">
                                <div class="navTab NoDecor" :class="{active: currentTab === 'portfolio' }">
                                    <a href="javascript:void(0)">
                                        Portfolio
                                    </a>
                                    <img :src="getIconSrc(tab.name)">
                                </div>
                            </div>

                            <div class="col-md-3 col-4 text-center" style="border-right:1px solid #EBEDEF;"
                                @click="setTabName('work')">
                                <div class="navTab NoDecor" :class="{active: currentTab === 'work' }">
                                    <a href="javascript:void(0)">
                                        Work
                                    </a>
                                    <img :src="getIconSrc(tab.name)">
                                </div>
                            </div>

                            <div class="col-md-3 col-4 text-center"
                                style="border-right:1px solid #EBEDEF;" @click="setTabName('skills')">
                                <div class="navTab NoDecor" :class="{active: currentTab === 'skills' }">
                                    <a href="javascript:void(0)">
                                        Skills
                                    </a>
                                    <img :src="getIconSrc(tab.name)">
                                </div>
                            </div>

                            <div class="col-md-3 col-4 text-center" @click="setTabName('education')">
                                <div class="navTab NoDecor" :class="{active: currentTab === 'education' }">
                                    <a href="javascript:void(0)">
                                        Education
                                    </a>
                                    <img :src="getIconSrc(tab.name)">
                                </div>
                            </div>
                        </div>
                        <div v-else class="row navRow d-flex">
                            <div class="col-md-3 col-4 text-center"
                                @click="setTab(tab)" v-for="(tab,index) in freelancer.agent.resume_tabs"
                                :key="index" >
                                <div class="navTab NoDecor" :class="{active: currentTab.name === tab.name }">
                                    <a href="javascript:void(0)">
                                        {{tab.label}}
                                    </a>                                    
                                    <img :src="getIconSrc(tab.name)">
                                </div>
                            </div>
                        </div>
                        <!-- portfolio section -->

                        
                        
                        <div v-show="currentTab.name === 'portfolio'" class="portfolio-section">   
                            <v-row align="center" class="titleTabSection">
                                <v-col lg="12">
                                    <h3 class="name-section">{{currentTab.name}}
                                        <img :src="getIconSrc(currentTab.name+'2')">
                                    </h3>
                                </v-col>
                            </v-row>                            
                            <div>
                                <!-- portfolio section -->
                                <slick class="projectsSection" :id="'portfolio_section_' + freelancer.id" ref="slick" :options="slickOptions" @swipe="handleSwipe">
                                    <div  v-for="(project,index) in projects" :key="index + 'A'" >
                                        <div class="workCard" style="margin:10px; margin-bottom: 0px;">
                                            <div class="workImg">
                                                <a href="javascript:void(0)"
                                                style="outline: none;">
                                                    <vue-load-image class="d-flex justify-content-center align-items-center">
                                                        <img src="../assets/imgs/projSlide1.png" alt="" width="260" slot="image">
                                                        <img  alt="" slot="preloader" src="/images/spinner-load.gif" style="width: 100px; height: 100px;" />
                                                    </vue-load-image>
                                                </a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                <!-- end of portfolio section -->
                                </slick>
                                <div class="row carouselControls" style="width: 100%;">
                                    <div class=" col-12 text-center NoDecor">
                                        <a href="javascript:void(0)" class="cardLabel_interviews noScroll" @click="prevItemProject"
                                            style="color:#697786;">
                                            <img src="../assets/icons/left_arrow.png"
                                                    alt="prev" width="15px">
                                        </a>

                                        <span class="jobTitle" style="padding: 0 5px 0 5px"> <span>{{slideNumber}}</span> / <span> {{numberOfSlides}} </span></span>

                                        <a href="javascript:void(0)" role="button" data-slide="next" class="cardLabel_interviews noScroll" @click="nextItemProject"
                                            style="color:#697786;">
                                            <img src="../assets/icons/right_arrow.png"
                                                    alt="next" width="15px">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div v-show="currentTab.name === 'work'" class="work-section">
                            <!-- work section -->
                            <v-row align="center" class="titleTabSection">
                                <v-col lg="12">
                                    <h3 class="name-section">{{currentTab.name}}
                                        <img :src="getIconSrc(currentTab.name+'2')">
                                    </h3>
                                </v-col>
                            </v-row>

                            <div class="row wrap-section">
                                <div class="col-lg-12 educationSection">
                                    <div class="aboutText">
                                        <div class="row" v-for="(work, index) in worksHistory" :key="index + 'V'">
                                            <div class="col-md-12 aboutSubText">
                                                <div class="year">
                                                    <span class="work pl-0">
                                                        {{getFullYear(work.date_from)}}
                                                        <span v-if="work.is_currently_working">-Now </span>
                                                        <span v-else>&amp;{{getFullYear(work.date_to)}}</span>
                                                    </span>
                                                </div>
                                                <div class="title work d-flex">
                                                    <span class="seduHeader">
                                                        {{work.job_title}}
                                                    </span>
                                                </div>
                                                <div class="desc">{{work.job_description}}</div>
                                            </div>

                                            <!-- related projects list -->

                                            <!-- portfolio section -->
                                            <div class="w-100">
                                                <slick class="projectsSection" ref="slickSlide" :id="work.id"
                                                    :options="slickOptions">
                                                    <div v-for="(project,index) in work.projects"
                                                        :key="index + 'A'">
                                                        <!-- class="d-flex justify-content-center" style="height: 250px !important; padding: 0 2px 0 2px; overflow: hidden;" -->

                                                        <div class="workCard"
                                                            style="margin:10px; margin-bottom: 0px;">
                                                            <div class="workImg">
                                                                <a href="javascript:void(0)"
                                                                style="outline: none;"
                                                                data-toggle="modal"
                                                                :data-target="'#project_modal_'+project.id"
                                                                @click="loadHDImage(project.id)">

                                                                    <vue-load-image
                                                                            class="d-flex justify-content-center align-items-center">
                                                                        <img :src="getImageSrc(project.mainImage)"
                                                                            alt="" width="260" slot="image">
                                                                        <img alt="" slot="preloader"
                                                                            src="/images/spinner-load.gif"
                                                                            style="width: 100px; height: 100px;"/>
                                                                    </vue-load-image>
                                                                </a>
                                                            </div>
                                                            <div class="workTitle">
                                                                <div class="row">
                                                                    <div class="col-md-10 col-9">
                                                                        {{project.projectName}}
                                                                    </div>
                                                                    <a class="col-md-1 col-1"
                                                                    href="javascript:void(0)"
                                                                    data-toggle="modal"
                                                                    :data-target="'#project_modal_'+project.id"
                                                                    style="outline: none; margin-left: 16px;">
                                                                        <img src="/images/newResume/link.png"
                                                                            alt="view work">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!--<div>-->
                                                        <!--<a @click="loadHDImage(project.id)" href="javascript:void(0)"   data-toggle="modal" :data-target="'#project_modal_'+project.id" style="outline:0; " >-->
                                                        <!--<vue-load-image>-->
                                                        <!--<img :src="getResizedImage(project.mainImage)" alt="" width="100%" slot="image" height="auto" style="min-height:250px; border-radius:10px;">-->
                                                        <!--<img  alt="" slot="preloader" src="/images/spinner-load.gif"/>-->
                                                        <!--</vue-load-image>-->
                                                        <!--</a>-->
                                                        <!--</div>-->
                                                    </div>
                                                </slick>

                                                <div class="row carouselControls" style="width: 100%;"
                                                    v-show="work.projects.length > 0">
                                                    <div class=" col-12 text-center NoDecor">
                                                        <a href="javascript:void(0)"
                                                        class="cardLabel_interviews noScroll"
                                                        @click="slidePrev(index)"
                                                        style="color:#697786;">
                                                            <img src="../assets/icons/left_arrow.png"
                                                                alt="prev" width="15px">
                                                        </a>

                                                        <span class="jobTitle" style="padding: 0 5px 0 5px"> <span>{{slides[index].number}}</span> / <span> {{calculateNumberOfRelatedSlides( work.projects.length)}} </span></span>

                                                        <a href="javascript:void(0)" role="button" data-slide="next"
                                                        class="cardLabel_interviews noScroll"
                                                        @click="slideNext(index,work.projects.length)"
                                                        style="color:#697786;">
                                                            <img src="../assets/icons/right_arrow.png"
                                                                alt="next" width="15px">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- end of portfolio section -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    
                        <div v-show="currentTab.name === 'education'" class="education-section">
                            <!-- education section -->
                            <v-row align="center" class="titleTabSection">
                                <v-col lg="12">
                                    <h3 class="name-section">{{currentTab.name}}
                                        <img :src="getIconSrc(currentTab.name+'2')">
                                    </h3>
                                </v-col>
                            </v-row>
                            <div class="row wrap-section">
                                <div class="col-lg-12 educationSection">
                                    <div class="aboutText">
                                        <div class="row" v-for="(education, index) in educationsHistory"
                                            :key="index + 'E'">
                                            <div class="col-md-12 aboutSubText">
                                                <div class="year">
                                                    <span class="work">
                                                        {{getFullYear(education.date_from)}}
                                                        <span v-if="education.is_currently_learning">-Now </span>
                                                        <span v-else>&amp;{{getFullYear(education.date_to)}}</span>
                                                    </span>
                                                </div>
                                                <div class="title work d-flex">
                                                    <span class="seduHeader">
                                                        {{education.school_title}}
                                                    </span>
                                                </div>
                                                <div class="desc">{{education.description}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    
                        <div v-show="currentTab.name === 'references'">
                            <!-- education section -->
                            <v-row align="center" class="titleTabSection">
                                <v-col lg="12">
                                    <h3 class="name-section">{{currentTab.name}}
                                        <img :src="getIconSrc(currentTab.name+'2')">
                                    </h3>
                                </v-col>
                            </v-row>
                            <div class="row" style="padding-top: 10px;">
                                <div class="col-12 educationSection">
                                    <div class="aboutText">
                                        <div class="row" v-for="(reference, index) in references"
                                            :key="index + 'R'">
                                            <div class="col-md-12 aboutSubText">
                                                <div class="title work">
                                                    <img :src="currentTab.default_icon_src" alt="tab icon" class="mr-2 tab-icon">
                                                    {{reference.title}}
                                                </div>
                                                <div class="year">
                                                    <span class="work">
                                                        {{reference.company}}
                                                    </span>
                                                </div>
                                                <div class="year">
                                                    <span class="work">
                                                        {{reference.email}}
                                                    </span>
                                                </div>
                                                <div class="year">
                                                    <span class="work">
                                                        {{reference.phone}}
                                                    </span>
                                                </div>
                                                <div class="desc">{{reference.details}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    
                        <div v-show="currentTab.name === 'recordings'">
                            <!-- education section -->
                            <v-row align="center" class="titleTabSection">
                                <v-col lg="12">
                                    <h3 class="name-section">{{currentTab.name}}
                                        <img :src="getIconSrc(currentTab.name+'2')">
                                    </h3>
                                </v-col>
                            </v-row>
                            <div class="row" style="padding-top: 10px;">
                                <div class="col-12 educationSection">
                                    <div class="aboutText">
                                        <div v-for="(record,index) in records"
                                            v-bind:key="index"
                                            class="list-item workExperience col-12"
                                            style="margin: 0px 10px 20px;">

                                            <div class="job-title d-flex align-items-center">
                                                <img :src="currentTab.default_icon_src" alt="tab icon" class="mr-2 tab-icon">
                                                <div>
                                                    {{record.title}}
                                                </div>
                                            </div>
                                            <br/>
                                            <div style="color: #30323D;">Transcription :
                                                {{record.transcription}}
                                            </div>
                                            <div style="color: #30323D;"> Audio :
                                                {{record.src.replace('/resumeApp/uploads/','')}}
                                            </div>
                                            <div class="row"
                                                style="padding-top: 30px;">
                                                <div class="col-12">
                                                    <audio :id="'record'+record.id"
                                                        controls
                                                        style="padding-bottom: 10px;"
                                                        preload="auto">
                                                        <source :src="getRecordSrc(record.src)">
                                                        Your browser does not support the audio element.
                                                    </audio>
                                                    <!--/.audio-container-->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-show="currentTab.name === 'skills'" class="skills-section">
                            <v-row class="wrap-section">
                                <v-col lg="12" class="educationSection">
                                     <div id="nav-taps-resume">                                    
                                        <v-tabs v-model="tabber" background-color="transparent" centered class="showOnlyOnmd">
                                            <v-tab :href="'#languagesTab' + freelancer.id" :ripple="false">
                                                Programing Languages
                                            </v-tab>
                                            <v-tab :href="'#databases' + freelancer.id" :ripple="false">
                                                Frameworks /<br/>Databases
                                            </v-tab>
                                            <v-tab :href="'#skillsTab' + freelancer.id" :ripple="false">
                                                Design Skills
                                            </v-tab>
                                            <v-tab :href="'#software' + freelancer.id" :ripple="false">
                                                Software
                                            </v-tab>
                                        </v-tabs>
                                        <v-tabs v-model="tabber" background-color="transparent" class="showOnlyOnsm"  centered show-arrows center-active>
                                            <v-tab :href="'#languagesTab' + freelancer.id" :ripple="false">
                                                Programing Languages
                                            </v-tab>
                                            <v-tab :href="'#databases' + freelancer.id" :ripple="false">
                                                Frameworks /<br/>Databases
                                            </v-tab>
                                            <v-tab :href="'#skillsTab' + freelancer.id" :ripple="false">
                                                Design Skills
                                            </v-tab>
                                            <v-tab :href="'#software' + freelancer.id" :ripple="false">
                                                Software
                                            </v-tab>
                                        </v-tabs>
                                        <v-tabs-items v-model="tabber">
                                            <v-tab-item :value="'languagesTab' + freelancer.id">
                                                <div class="row">
                                                    <div class="col-md-12 px-8 text-center">
                                                        <div class="d-flex items-skills">
                                                            <div v-for="(skill,index) in skills" :key="index"
                                                                v-show="skill.type === 'programming'"
                                                                class="skills">
                                                                <!-- skill -->
                                                                <div class="skill text-left">
                                                                    <!-- title -->
                                                                    <div class="skill-title">
                                                                        <img style="padding-bottom: 3px;"
                                                                            src="../assets/icons/icon-illustrator.png"
                                                                            alt="skill" :id="'skillImage_' + skill.id">
                                                        
                                                                    </div>
                                                                
                                                                </div>
                                                                <!-- #skill -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </v-tab-item>
                                            <v-tab-item :value="'databases' + freelancer.id">
                                                <div class="row">
                                                    <div class="col-md-12 px-8 text-center">
                                                        <div class="d-flex items-skills">
                                                            <div v-for="(skill,index) in skills" :key="index"
                                                                v-show="skill.type === 'frameworks'"
                                                                class="skills">
                                                                <!-- skill -->
                                                                <div class="skill text-left">
                                                                    <!-- title -->
                                                                    <div class="skill-title">
                                                                        <img style="padding-bottom: 3px;"
                                                                            src="../assets/icons/icon-premier.png"
                                                                            alt="skill" :id="'skillImage_' + skill.id">
                                                        
                                                                    </div>
                                                                
                                                                </div>
                                                                <!-- #skill -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </v-tab-item>
                                            <v-tab-item :value="'skillsTab' + freelancer.id">
                                                <div class="row">
                                                    <div class="col-md-12 px-8 text-center">
                                                        <div class="d-flex items-skills">
                                                            <div v-for="(skill,index) in skills" :key="index"
                                                                v-show="skill.type === 'design'"
                                                                class="skills">
                                                                <!-- skill -->
                                                                <div class="skill text-left">
                                                                    <!-- title -->
                                                                    <div class="skill-title">
                                                                        
                                                                        <img style="padding-bottom: 3px;"
                                                                            src="../assets/icons/icon-experience.png"
                                                                            alt="skill" :id="'skillImage_' + skill.id">
                                                                        
                                                        
                                                                    </div>
                                                                
                                                                </div>
                                                                <!-- #skill -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </v-tab-item>
                                            <v-tab-item :value="'software' + freelancer.id">
                                                <div class="row">
                                                    <div class="col-md-12 px-8 text-center">
                                                        <div class="d-flex items-skills">
                                                            <div v-for="(skill,index) in skills" :key="index"
                                                                v-show="skill.type === 'software'"
                                                                class="skills">
                                                                <!-- skill -->
                                                                <div class="skill text-left">
                                                                    <!-- title -->
                                                                    <div class="skill-title">
                                                                        <img style="padding-bottom: 3px;"
                                                                            src="../assets/icons/icon-aftereffects.png"
                                                                            alt="skill" :id="'skillImage_' + skill.id">
                                                        
                                                                    </div>
                                                                
                                                                </div>
                                                                <!-- #skill -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </v-tab-item>
                                        </v-tabs-items>
                                    </div>
                                </v-col>
                            </v-row>
                         
                           
                        </div>                   
                    
                        

                        <!-- end of portfolio section -->
                    </div>
                </transition>
                <transition name="slide-fade-left">
                    <div v-show="hire">
                        <div style="border-top: 1px solid #EBEDEF; ">
                            <div class="row">
                                <div class="offset-md-4 col-md-4 col-12">
                                    <div class="hireText">
                                        Select the number of Hours you need per week:
                                    </div>
                                    <div class="hoursBtn NoDecor">
                                        <a href="javascript:void(0)">
                                            <img src="../assets/icons/minus.png"
                                                style="width: 18px; padding-right: 8px;" alt="minus"
                                                @click="subtractHours">
                                        </a>
                                        <span>{{hours}}</span> hours
                                        <a href="javascript:void(0)">
                                            <img src="../assets/icons/plus.png"
                                                style="width: 18px; padding-left: 8px;" alt="plus"
                                                @click="addHours">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="offset-md-4 col-md-4 col-12">
                                    <div class="hireText">
                                        How many weeks would you like to book for?
                                    </div>
                                    <div class="hoursBtn NoDecor">
                                        <a href="javascript:void(0)">
                                            <img src="../assets/icons/minus.png"
                                                style="width: 18px; padding-right: 8px;" alt="minus"
                                                @click="subtractWeeks">
                                        </a>
                                        <span>{{weeks}}</span> weeks
                                        <a href="javascript:void(0)">
                                            <img src="../assets/icons/plus.png"
                                                style="width: 18px; padding-left: 8px;" alt="plus"
                                                @click="addWeeks">
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="row" style="padding-top:50px; padding-bottom: 50px;">
                                <div class="offset-md-2 col-12 col-md-8" style="border-top: 1px solid #EBEDEF;">
                                    <div class="row">
                                        <div class="col-md-2 col-4 text-left jobTitle"
                                            style="font-size: 12px; color: #30323D;">
                                            Monthly rate
                                        </div>
                                        <div class="col-md-2 col-3 offset-5 offset-md-8 text-right jobTitle"
                                            style="font-weight: bold;font-size: 12px; color: #30323D;">
                                            {{freelancer.user_data.salary_month}} $
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="border-top: 1px solid #EBEDEF;">
                                <div class="col-md-4 offset-md-2 col-12 NoDecor" style="padding-top: 17px;">
                                    <a href="javascript:void(0)"
                                    class="justify-content-center d-flex btn-block cancelBtn"
                                    @click="hideHireSection">Cancel Booking</a>
                                </div>
                                <div class="col-md-4 col-12 NoDecor whiteOnHover"
                                    style="padding-top: 17px; padding-bottom: 30px;">
                                    <a class="btn d-flex btn-block summaryBtn"
                                    :href="'/stripe/hire?freelancerID=' + freelancer.id + '&hours=' + hours + '&weeks=' + weeks ">Booking
                                        Summary</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
                <transition name="slide-fade-left">
                    <!--references content-->
                    <div v-show="showReferences">
                        <div class="row" style="border-bottom: 1px solid whitesmoke; padding-bottom: 25px;">
                            <div class="col-lg-11 col-11 text-left" style="padding: 25px 0 0 20px;">
                                <span>
                                    <img src="/images/comment-512.png"
                                        alt="" style="padding-right: 14px; width: 34px;">
                                    <span class="audioText"
                                        style="color: #4E75E8;">  References & Testimonials</span>
                                </span>
                            </div>
                            <div class="col-lg-1 col-1 text-center NoDecor" style="padding: 24px 0 0 0;">
                                <a href="javascript:void(0)" @click="hideReferencesSection"
                                class="audioText audioDismiss" style="color: #4E75E8; font-size: large;"> x </a>
                            </div>
                        </div>
                        <div style="padding-bottom: 35px;">

                            <div class="row" v-for="(reference, index) in references" :key="index + 'R'">
                                <div class="col-md-12 aboutSubText">
                                    <div class="title work">
                                        <span class="circle"></span>
                                        {{reference.title}}
                                    </div>
                                    <div class="year">
                                        <span class="work">
                                            {{reference.company}}
                                        </span>
                                    </div>
                                    <div class="year">
                                        <span class="work">
                                            {{reference.email}}
                                        </span>
                                    </div>
                                    <div class="year">
                                        <span class="work">
                                            {{reference.phone}}
                                        </span>
                                    </div>
                                    <div class="desc">{{reference.details}}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </transition>
            </v-col>           
        </v-row>
    </v-container>
</template>

<script>
    import Slick from 'vue-slick';
    import VueLoadImage from 'vue-load-image';

    export default {
        props: ['freelancer', 'hire', 'search'],
        components: {
            'vue-load-image': VueLoadImage,
            Slick
        },
        data() {
            return {
                tabber: null,
                colors:{
                    hex: this.freelancer.agent.custom_resume ? this.freelancer.agent.custom_resume.background_color : '#4E75E8',
                },
                slides: [],
                slideNumber : 1 ,
                numberOfSlides: this.calculateNumberOfSlides(),
                skills: this.freelancer.skills,
                worksHistory: this.freelancer.works_history,
                records: this.freelancer.recordings,
                projects: this.freelancer.projects,
                educationsHistory: this.freelancer.educations_history,
                references: this.freelancer.references,
                currentTab: 'work',
                slickOptions: {
                    infinite: false,
                    dots: false,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    responsive: [
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 786,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }
                    ]
                },
                weeks: 4,
                hours: this.freelancer.user_data.available_hours_per_week,
                portfolio: !this.hire,
                showReferences: false,
            }
        },
        watch: {
            freelancer: function () {
                // update freelancer data when prop changes
                this.skills = this.freelancer.skills;
                this.worksHistory = this.freelancer.works_history;
                this.educationsHistory = this.freelancer.educations_history;
                this.references = this.freelancer.references;
            }
        },
        methods: {
             
            getIconUrl(name) {
                let nameLower = name.toLowerCase();
                return `@/assets/icons/${nameLower}.png`;
            },
        
            getResizedImage(src) {
                let resizedImage = this.getImageSrc(src).replace('/resumeApp/uploads', '/resumeApp/uploads/resized-images');
                if (this.search == false) {
                    return resizedImage;
                }
                return this.getImageSrc(src);
            },
            setTab(tab) {
                this.currentTab = tab;
                if (tab.name === 'work' || tab.name === 'portfolio') {
                    this.$nextTick(() => {
                        this.updateSlick();
                        this.updateProjectsSlick();
                    });
                }

                /** reinit tabs skills */
                this.tabber = 1;
            },
            setTabName(tabName) {
                this.currentTab = tabName;
                if (tabName === 'work') {
                    this.$nextTick(() => {
                        this.updateSlick();
                    });
                }
            },
            getDate(date) {
                let workDate = new Date(date);
                let dd = workDate.getDate();
                let mm = workDate.getMonth() + 1; //January is 0!

                let yyyy = workDate.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }

                return dd + '/' + mm + '/' + yyyy;
            },
            getFullYear(date){
                let newDate = new Date(date);
                let yyyy = newDate.getFullYear();
                return yyyy;
            },
            getSkillIconSrc(skill_title) {
                let arrayOfSkillImages = {
                    'ui design': '/images/skills_icons/user_interface.png',
                    'ux design': '/images/skills_icons/user_experience.png',
                    'logo design': '/images/skills_icons/logo_design.png',
                    'animation': '/images/skills_icons/animation.jpg',
                    'motion graphics': '/images/skills_icons/motion_graphics.png',
                    'illustration': '/images/skills_icons/illustration.png',
                    'advertising': '/images/skills_icons/advertising.png',
                    'branding': '/images/skills_icons/branding.png',
                    'brochure Design': '/images/skills_icons/brochure_design.png',
                    'website design': '/images/skills_icons/web_design.png',
                    'game designer': '/images/skills_icons/game_designer.png',
                    'character design': '/images/skills_icons/character_design.png',
                    'digital painting': '/images/skills_icons/digital_painting.png',
                    'creative director': '/images/skills_icons/creative_director.png',
                    'html / css': '/images/skills_icons/HTML.png',
                    'illustrator': '/assets/imgs/icons/illustrator.png',
                    // 2-
                    'adobe after effects': '/images/skills_icons/AE.png',
                    'sketch': '/images/skills_icons/Sketch.png',
                    'adobe illustrator': '/images/skills_icons/Illustrator.png',
                    'adobe xd': '/images/skills_icons/AdobeXD.png',
                    'photoshop': '/images/skills_icons/Photoshop.png',
                    'autocad': '/images/skills_icons/autocad.png',
                    'solidworks': '/images/skills_icons/solid_works.png',
                    'adobe flash': '/images/skills_icons/adobe_flash.png',
                    'digital drawing Tablet': '/images/skills_icons/digital_drawing_tablet.png',
                    'adobe indesign': '/images/skills_icons/indesign.png',
                    'coreldraw': '/images/skills_icons/corel_draw.png',
                    '3d max': '/images/skills_icons/3d_max.png',

                    // developer :
                    // 1-
                    'javascript': '/images/skills_icons/javascript.png',
                    'sql': '/images/skills_icons/mysql.png',
                    'java': 'resumeApp/resources/assets/images/skills_icons/java.png',
                    'c#': '/images/skills_icons/c#.png',
                    'python': '/images/skills_icons/python.png',
                    'php': '/images/skills_icons/php.png',
                    'c++': '/images/skills_icons/c_language.png',
                    'c': '/images/skills_icons/c_language.png',
                    'typescript': '/images/skills_icons/typescript.png',
                    'ruby': '/images/skills_icons/ruby.png',
                    'objective-C': '/images/skills_icons/objective_c.png',
                    'swift': '/images/skills_icons/swift.png',
                    'vb.net': '/images/skills_icons/vb_net.png',
                    'go': '/images/skills_icons/go.png',
                    'perl': '/images/skills_icons/perl.png',
                    'scala': '/images/skills_icons/scala.png',
                    'groovy': '/images/skills_icons/groovy.png',
                    'assembly': '/images/skills_icons/assembly.png',
                    'coffeescript': '/images/skills_icons/coffeeScript.png',
                    'vba': '/images/skills_icons/vba.png',
                    'r': '/images/skills_icons/r_lang.png',
                    'matlab': '/images/skills_icons/matlab.png',
                    'visual basic 6': '/images/skills_icons/matlab.png',
                    'lua': '/images/skills_icons/lua.png',
                    'haskell': '/images/skills_icons/haskell.png',
                    'html': '/images/skills_icons/HTML.png',
                    'css': '/images/skills_icons/CSS.png',

                    //2-
                    'angularjs': '/images/skills_icons/Angularjs.png',
                    'angular.js': '/images/skills_icons/Angularjs.png',
                    'node.js': '/images/skills_icons/node_js.png',
                    'nodejs': '/images/skills_icons/node_js.png',
                    '.net Core': '/images/skills_icons/netcore.png',
                    'react': '/images/skills_icons/react.png',
                    'cordova': '/images/skills_icons/cordava.png',
                    'firebase': '',
                    'xamarin': '',
                    'hadoop': '/images/skills_icons/hadoop.png',
                    'spark': '/images/skills_icons/spark.png',
                    'mysql': '/images/skills_icons/mysql.png',
                    'sql server': '/images/skills_icons/sql server.png',
                    'postgresql': '/images/skills_icons/postgreSQL.png',
                    'sqlite': '/images/skills_icons/SQLite.png',
                    'mongodb': '/images/skills_icons/mongoDB.png',
                    'oracle': '/images/skills_icons/Oracle.png',
                    'redis': '/images/skills_icons/redis.png',
                    'cassandra': '/images/skills_icons/cassandra.png'
                };
                if (arrayOfSkillImages.hasOwnProperty(skill_title.toLowerCase())) {
                    return arrayOfSkillImages[skill_title.toLowerCase()];
                }
                return '/images/skills_icons/skills.png';
            },
            getImageSrc(src) {
                if (!src) {
                    return '../assets/imgs/placeholder.png';
                }

                if (src.charAt(0) !== '/' && src.charAt(0) !== 'h') {
                    return '/' + src;
                }

                return src;
            },
            getIconSrc(title) {
                let arrayIcons = {
                    'portfolio': 'icons/icon-portfolio.png',
                    'work': 'icons/icon-work.png',
                    'education': 'icons/icon-education.png',
                    'skills': 'icons/icon-skills.png',
                    //
                    'portfolio2': 'icons/icon-portfolio2.png',
                    'work2': 'icons/icon-work2.png',
                    'education2': 'icons/icon-education2.png'

                }
                if (arrayIcons.hasOwnProperty(title.toLowerCase())) {
                    return require('@/assets/'+arrayIcons[title.toLowerCase()]);
                }
            },
            loadHDImage(project_id) {
                let projects = this.freelancer.projects;
                $.each(projects, function (i) {
                    if (projects[i].id === project_id) {
                        $('#projectModalPhoto' + project_id).attr('src', projects[i].mainImage);
                        return false;
                    }
                });
            },
            showHireSection() {
                setTimeout(() => {
                    this.hire = true;
                }, 800);
                this.portfolio = false;
                this.showReferences = false;
            },

            showReferencesSection() {
                setTimeout(() => {
                    this.showReferences = true;
                }, 800);
                this.portfolio = false;
                this.hire = false;

            },

            hideReferencesSection() {
                this.hire = false;
                this.showReferences = false;
                setTimeout(() => {
                    this.portfolio = true;
                }, 800);
            },
            hideHireSection() {
                this.hire = false;
                this.showReferences = false;
                setTimeout(() => {
                    this.portfolio = true;
                }, 800);
            },
            updateSlick() {
                this.$nextTick(() => {
                    $.each(this.$refs.slickSlide, (i) => {
                        if (this.$refs.slickSlide[i] !== undefined) {
                            this.$refs.slickSlide[i].reSlick();
                        }
                    });
                });
            },
            updateProjectsSlick() {
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },
            handleSwipe(event, slick, direction) {

                direction=='left'?this.slideNumber = slick.currentSlide:this.slideNumber = slick.currentSlide+1;
               
            },            
            addHours() {
                this.hours++;
            },
            subtractHours() {
                this.hours--;
            },
            addWeeks() {
                this.weeks++;
            },
            subtractWeeks() {
                this.weeks--;
            },
            slidePrev(i) {
                this.$refs.slickSlide[i].prev();
                if (this.slides[i].number - 1 > 0) {
                    this.slides[i].number--;
                }
            },
            slideNext(i, maxprojects) {
                this.$refs.slickSlide[i].next();
                if (this.slides[i].number + 1 <= this.calculateNumberOfRelatedSlides(maxprojects)) {
                    this.slides[i].number++;
                }
            },
            prevItemProject() {
                this.$refs.slick.prev();
                this.slideNumber = this.$refs.slick.currentSlide()+1;
            },
            nextItemProject() {
                this.$refs.slick.next();
                this.slideNumber = this.$refs.slick.currentSlide();
            },
            calculateNumberOfSlides() {
                let numberOfProjects = this.freelancer.projects.length;
                var width = $(window).width();
                if (width < 991) {
                    return (numberOfProjects);
                }
                return (Math.ceil(numberOfProjects / 2));
            },

            calculateNumberOfRelatedSlides(numberOfProjects) {
                var width = $(window).width();
                if (width < 991) {
                    return (numberOfProjects);
                }
                return (Math.ceil(numberOfProjects / 2));
            },
            getRecordSrc(source) {
                if (source.includes('drive.google.com')) {
                    let fileID = '';
                    let arrayOfSource = source.split('/');
                    $.each(arrayOfSource, function (i) {
                        if (arrayOfSource[i].length > 20) {
                            fileID = arrayOfSource[i];
                        }
                    });

                    let gDriveSrc = "https://drive.google.com/uc?export=download&id=" + fileID + "&key=AIzaSyC0bK_7ASw3QylYDzs_Pqo_TeoI7jfFj8M";
                    return gDriveSrc;
                } else {
                    return source;
                }
            }

        },
        mounted() {
            if(this.freelancer.agent.resume_tabs.length > 0){
                this.setTab(this.freelancer.agent.resume_tabs[1]);
            }
        },
        created: function () {
            this.$parent.$on('update', this.updateProjectsSlick);
            this.$parent.$on('update', this.updateSlick);
            // create slides :
            $.each(this.freelancer.works_history, (i) => {
                this.slides.push({
                    id: i,
                    number: 1
                });
            });
        }
    }
</script>

<style lang="scss" scoped>
    
    .projectsSection {
        margin-top: 1px;
        padding: 20px;
        margin-bottom: 18px;
        @media only screen and (max-width: 500px) {
            padding: 2px;
        }
    }

    .freelancerCard {
        margin-bottom: 12px;
        padding-bottom: 12px;
        margin-left: 10px;
        margin-right: 10px;
        height: auto;


        .freelancerCardLeft{
            display: flex;
            align-items: center;
        }
        .freelancerCardRight{
            color: #000;
            align-items: center;
            display: flex;
            flex-wrap: wrap;

            .hireCardBtn{
                text-decoration: none;
                font-family: "Nexa";
                font-style: normal;
                font-weight: bold;
                font-size: 15px;
                line-height: 15px;
                color: #000;
                border: 1px solid #000000;
                box-sizing: border-box;
                border-radius: 8px;
                width: auto;
                height: auto;
                padding: 8px 23px 5px 22px;
                position: relative;

                &::before{
                    content:"";
                    background: url('../assets/imgs/bgBtnHireme.png') no-repeat;
                    width: 104px;
                    height: 30px;
                    display: block;
                    left: 2px;
                    top: 1px;
                    position: absolute;
                }
                

                &:hover{
                    opacity: .8;
                }
            }

            >.row{
                align-self: flex-end;
            }
            >.row+.row{
                align-self: flex-start;
            }

            .titleInterview{
                font-family: "Nexa Bold";
                font-style: normal;
                font-size: 19px;
                line-height: 19px;
                color: #000;
                text-shadow: 2px 1px 0px #50E8FC;
            }
            .opUpload{

                font-family: "Nexa Bold";
                font-style: normal;
                font-size: 17px;
                line-height: 17px;
                color: #000;            
                margin-left: 28px;
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                }

                +.opUpload{
                    margin-left: 13.7px;
                }
 
                img{
                   margin-right: 13px;
                   margin-top: 0px;
                   vertical-align: middle;
                   max-width: 30px;
                }
            }
        }

        .cardLabel{
            color: #000;
        }


        
        
        @media only screen and (max-width: 1200px) {
            width: 910px;
        }
        @media only screen and (max-width: 786px) {
            width: 710px;
            // height: 815px;
            height: auto;
        }
        @media only screen and (max-width: 500px) {
            width: 315px;
            // height: 785px;
            height: auto;
        }
    }



    .workCard {
        @media only screen and (max-width: 500px) {
            min-width: 290px;
        }

        min-width: 375px;
    }

    .slick-dots {
        display: flex;
        justify-content: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .7s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }


    .slide-fade-enter-active {
        transition: all .7s ease;
    }

    .slide-fade-leave-active {
        transition: all .7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }


    .slide-fade-left-enter-active {
        transition: all .7s ease;
    }

    .slide-fade-left-leave-active {
        transition: all .7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-left-enter, .slide-fade-left-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateX(-10px);
        opacity: 0;
    }

    .importBtn {
        a:hover {
            color: white;
        }

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }


    .tab-pane {
        height: 541px;
        overflow: auto;
        @media only screen and (max-width: 500px) {
            width: 315px;
            height: 420px;
        }
    }

    // skills bar css :
    //** Adjust news skills items */
    .skills,
    .skills .skill,
    .skills .skill .skill-title,
    .skills .skill .skill-bar {
        width: auto;
        display: inline-block;
    }

    .skills {
        padding: 0px;
    }

    .skills .skill {
        margin-bottom: 0;
    }

    .skills .skill .skill-title {
        color: #808080;
        font-weight: 400;
        font-size: 14px;
        img{
            width: 64.5px;
            height: 64.5px;
        }
    }



    .wrap-section{
        justify-content: center;
        
        .educationSection{
            padding: 0px 75px 129px 75px;
            height: 784px;
            overflow: hidden;

            .aboutText{
                overflow: auto;
                height: 100%;
                padding: 0px 24px;
                margin-top: 50px;
            }
        }

    }
    .portfolio-section,.work-section,.education-section{
        padding-top: 66px;
        @media only screen and (max-width: 992px) {
            padding-top: 0;
        }

    }
    .skills-section{
        padding-top: 30px;
    }

    .educationSection {

        height: auto;
        overflow: auto;
        @media only screen and (max-width: 500px) {
            width: auto;
            height: 420px;
        }
        @media only screen and (max-width: 500px) {
            padding-left: 0;
            padding-right: 5px;
        }
    }

    .aboutText {
        padding-top: 38px;
        >.row{
            margin-bottom: 45px;
        }

        @media only screen and (max-width: 500px) {
            padding-left: 0;
        }
    }

    .seduHeader {
        padding-left: 6px;
        @media only screen and (max-width: 500px) {
            padding-left: 5px;
        }
    }

    .carouselControls {
        padding-top: 0;
        padding-bottom: 20px;
    }


    .job-title{
        font-family: "Nexa Bold";
        font-style: normal;
        font-size: 30px;
        line-height: 30px;
    }


/** NEXA Font theme2 */
@font-face {
  font-family: 'Nexa';
  src: url('../assets/fonts/Nexa-Regular.eot?#iefix') format('embedded-opentype'),  url('../assets/fonts/Nexa-Regular.otf')  format('opentype'),
	     url('../assets/fonts/Nexa-Regular.woff') format('woff'), url('../assets/fonts/Nexa-Regular.ttf')  format('truetype'), url('../assets/fonts/Nexa-Regular.svg#Nexa-Regular') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Nexa Bold';
  src: url('../assets/fonts/Nexa-Bold.eot?#iefix') format('embedded-opentype'),  url('../assets/fonts/Nexa-Bold.otf')  format('opentype'),
	     url('../assets/fonts/Nexa-Bold.woff') format('woff'), url('../assets/fonts/Nexa-Bold.ttf')  format('truetype'), url('../assets/fonts/Nexa-Bold.svg#Nexa-Bold') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Nexa Light';
  src: url('../assets/fonts/Nexa-Light.eot?#iefix') format('embedded-opentype'),  url('../assets/fonts/Nexa-Light.otf')  format('opentype'),
	     url('../assets/fonts/Nexa-Light.woff') format('woff'), url('../assets/fonts/Nexa-Light.ttf')  format('truetype'), url('../assets/fonts/Nexa-Light.svg#Nexa-Light') format('svg');
  font-weight: normal;
  font-style: normal;
}


/*** Styles Resume THEME 2 */

/** Removing default padding on cols vuetify */
.col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1{
    padding: 0;
}
.container{
    margin: 0 auto !important;
    width: 1152px;
}

.freelancerCard a{
    text-decoration: none;
}
.hold_theme2 .headProfile{
    padding: 16px 25px 16px 25px;
    background: url(/img/bgHeader.83cbd936.png) no-repeat;
    background-size: 916px 184px;
    background-position: 177px 28px;
}

#freelancerResumeTheme2 .freelancerCard{
    width: 100%;
    max-width: 1152px;
    margin: 0;
    padding: 0;  
}

.tap-to-chat{
    border: 1px solid #000;
    color: #000;
    font-family: "Nexa";
    font-style: normal;
    font-weight: bold;
    margin-bottom: 0;
    font-size: 10px;
    line-height: 10px;
    cursor: pointer;
    position: relative;

}
.btnSm-outline{
    border-radius: 8px !important;
    text-transform: capitalize;
    padding: 8px 14px 6px 14px;
    &:hover{
        opacity: .8;
    }
}
.btnMd-outline{
    border-radius: 8px !important;
    text-transform: capitalize;
    padding: 8px 14px 6px 14px;
}


.hold_theme2 .freelancerCard{
    border-radius: 0;

    .nameCard{
        font-family: "Nexa";
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 30px;
        color: #000;
        padding-top: 25px;
    }
    .jobTitle{
        font-family: "Nexa Light";
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #000
    }
    .navRow{
        height: auto;
        border: none;
        padding: 50px 0 0px 0;
        background: none;
        overflow-x: auto;


        .col-4{
            padding: 0;
        }
        
        .navTab{

            padding-bottom: 0px;
            max-height: 40px;
            line-height: 40px;

            &.active{
                border-bottom: 0;
        
                a{

                    border-bottom: 3px solid #000;
                    
                }
            }

            a{
                color: #000;
                text-shadow: 2px 1px 0px #50E8FC;
                padding-bottom: 0;
                font-family: "Nexa Bold";
                font-style: normal;
                font-size: 33px;
                line-height: 33px;
                vertical-align: top;
                position: relative;
                display: inline-block;

                
            }
            img{
                margin-left: 10px;
                max-width: 36px;
                margin-top: -8px;
            }
        }
    } 
}
.freelancerCardSocial{

    display: flex;
    justify-content: center;
    align-items: center;
    
    a{
        min-width: 33px;
        height: 33px;
        line-height: 33px;
        border-radius: 100%;
        border: 1px solid #000;
        text-align: center;
        margin-right: 5.3px;
        vertical-align: middle;
        img{
            height: 40%;
            width: auto;
            padding: 0px;
        }
    }
    
    
}


.skills-section{
    background: url('../assets/icons/bgSkills.png') no-repeat;
    background-size: 644px 644px;
    background-position: 110% 200%;
}
.work-section{
    background: url('../assets/icons/bgSectionWork.png') no-repeat;
    background-size: 550px 446px;
    background-position: 103% bottom;
}
.education-section{
    background: url('../assets/icons/bgSectionEducation.png') no-repeat;
    background-size: 994px 546px;
    background-position: 305% bottom;
}

.titleTabSection{

    padding: 0 75px;
    justify-content: center;

    .name-section{
        font-family: "Nexa Bold";
        font-style: normal;
        font-size: 60px;
        line-height: 60px;
        text-shadow: 3px 2px 0px #50E8FC;
        text-transform: capitalize;
        margin: 0;

        img{
            float: right;
        }
    }
}



.hold_theme2 .col-md-2{
    padding-bottom: 0px !important;
    padding-top: 0px !important;
}

.imageContainer{
    width: 158.3px;
    height: 166.3px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .circle_black{
        content: '';
        background: url('../assets/imgs/bgPhoto.png') no-repeat;
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: center;
        margin: 0px 0px 0px 0px;
    }
    .circle_golden{
        content: '';
        background: url('../assets/imgs/bgPhoto2.png') no-repeat;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: center;
        margin: 0px 0px 0px -4px;
    }
    
    .photoProfile{
        margin: 0 0 0 -8px;
        border-radius: 100%;
        z-index: 1;
        width: 150px;
        height: 150px;
    }
}
#nav-taps-resume{
    margin-bottom: 0px;
}
#nav-taps-resume .items-skills{
    justify-content: space-around;
    align-items: center;
}
#nav-taps-resume .nav-tabs .nav-item.show .nav-link, #nav-taps-resume .nav-tabs .nav-link{
    font-family: 'Nexa light';
}
.v-tabs-items {
    background-color: transparent !important;
    .col-md-12{
        padding-top: 28px;
        padding-bottom: 50px;
    }
}

.v-tab{
    color: #000;    
    font-family: "Nexa Light";
    text-transform: capitalize;
    font-style: normal;
    font-size: 20px;
    line-height: 24px;
    text-align: left;
    align-self:flex-start;
    margin: 0 3.5%;
    padding: 0;

    &:not(.v-tab--active){
        color: #000 !important; 
    }

    &:hover{
        text-decoration: none;
        background: none;
        
    }
    &::before{
        background: none;
        opacity: 1;
    }

    
    
}
.v-tab.v-tab--active{
    font-family: "Nexa Bold";
    color: #000;

}

    
.col-md-4{
    padding: 0px;
}


.aboutSubText{

    padding: 0;

    .title.work{
        font-style: normal;
        margin-left: -23px;
        padding: 0;

        .seduHeader{
            font-family: "Nexa Bold";
            font-style: normal;
            font-size: 30px;
            line-height: 30px;
        }
        
        &::before{
            content: "";
            width: 14px;
            height: 14px;
            border: 1px solid #BDBDBD;
            border-radius: 100%;
            margin: 4px 7px 0 0;
        }
    }

    .year{
        padding: 0 0 0 0;

        .work{
            font-family: "Nexa Light";
            font-style: normal;
            font-size: 20px;
            line-height: 20px;
            color: rgba(0, 0, 0, 0.4);
            padding: 0;
        }
    }
    .desc{
        padding-top: 0;
        padding-left:0;
        font-family: "Nexa Light";
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 40px;
    }

}

.seduHeader{
    padding: 0;
}

.workCard{
    height: auto !important;
    max-height: 310px;
}

.workCard{
    padding: 0;
    border-radius: 12px;
    border: 0;
    max-height: 100% !important;
    font-size: 0;
    box-shadow: none;
    display: flex;
    justify-content: center;

     .workImg{
        height: auto;
        max-height: 100%;
        margin: 0 45px;

        img{
            padding: 0;
            max-height: 490px;
            max-width: 430px;
        }
    }
}



@media screen and (max-width: 992px) {
    .showOnlyOnsm{
        .headProfile{
            padding: 20px 22px 26px 22px;
            background: none;
        }
        .imageCol{
            flex: 3;
            .imageContainer{
                position: relative;
                width: 100px;
                height: 115px;

                >form{
                    position: absolute;
                    z-index: 2;
                    bottom: 0;
                    right: 0;
                    position: absolute;
                    z-index: 2;
                    bottom: 10px;
                    right: 0px;

                    .btnSm-outline{
                        border: 0;
                        font-size: 0;
                        padding: 0;
                        border-radius: 100% !important;
                        background: url(/img/icon-bubbleChat.eaeda366.png) !important;
                        width: 33px;
                        height: 33px;
                        background-size: 33px 34px !important;
                        background-repeat: no-repeat;
                        margin: 0;
                        box-shadow: 0px 2px 10px #ccc;
                    }
                }

                .photoProfile{
                    width: 91px;
                    height: 91px;
                }
            }
        }
        .freelancerCardLeft{
            padding: 0;
            flex: 9;
            flex-flow: wrap;
            align-items: center;
            justify-content: center;

            .nameArea{
                padding-left: 15px;
            }

            // >.row:nth-child(2){
            //     display: flex;
            //     align-items: center;
            //     flex-flow: row;
            //     justify-content: space-between;
            //     padding-top: 10px;

            //     >div{
            //         width: auto;
            //         flex: 3;
            //         display: inline-flex;
            //         flex-flow: column;

            //         &:nth-child(1){
            //             flex: 5
            //         }
            //         &:nth-child(2){
            //             flex: 7
            //         }

            //         span{
            //             font-size: 18px !important;
            //             line-height: 18px !important;
            //         }
            //     }

            // }

            .jobTitle{
                padding-left: 0;
                font-size: 18px !important;
            }

            .interviews{
                justify-content: center;
                align-items: center;
                display: inline-flex;
                flex-flow: column;
       
            }
            .opUpload{
                img{
                    max-width: 19px;
                    width: 100%;
                }
            }
            .rates{
                display: none;
            }
            .cardLabel{
                font-size: 15px;
                line-height: 20px;
                font-family: 'Nexa Light';
            }
        }
        .w-100{
            justify-content: space-around;
            display: flex;
        }
        .freelancerCardRight{
            .cardRow{
                justify-content: center;
            }
            .hireCardBtn{
                padding: 12px 25px 5px 25px;
                font-size: 23px;
                line-height: 14px;
                border-radius: 5px;
                background: none;
                position: relative;
                font-family: 'Nexa Bold';
                font-weight: normal;

                &::before{
                    content: "";
                    border: 2px solid #50E8FC;
                    position: absolute;
                    background: none;
                    width: 100%;
                    height: 34px;
                    left: 4px;
                    top: 2px;
                    border-radius: 5px;
                }
            }
        }
        .freelancerCardSocial{
            justify-content: space-around;
            padding: 2rem 0;
            a{
                width: 37px;
                height: 37px;
                line-height: 36px;
                margin: 0 auto;
                text-align: center;
                border: 2px solid #000;
            }
        }



    }
    .wrap-portfolio{
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        >div{
            .titleTabSection{
                display: none;
            }
        }

        .navRow{
            max-width: 100%;
            flex-flow: nowrap;
            align-items: center;
            justify-content: flex-start !important ;
        }
        #nav-taps-resume{
            width: 100%;
            .v-tabs{

                .v-tab{
      
                    line-height: 50px;
                    margin: 0 auto;
                    min-width: 246px;
                    font-size: 18px;

                    br{
                        display: none;
                    }
                }
            }
            .v-tabs-items{
                .col-md-12{
                    padding: 15px 0 0 0;
                }
            }
        }
        .portfolio-section{
            max-width: 100%;
        }
        .portfolio-section,.work-section,.education-section,.skills-section{
            width: 100%;
            background: none;
            min-height: 800px;
        }
        .wrap-section{
            min-height: auto;

            .educationSection{
                padding: 0;

                .aboutText{
                    padding: 20px 36px;
                    margin-top: 0;
                    
                    .aboutSubText{
                        .year{
                            .work{
                                font-family: "Nexa";
                                font-style: normal;
                                font-weight: 300;
                                font-size: 14px;
                                line-height: 17px;
                            }
                        }
                        .title{
                            &.work{
                                margin: 0;                          

                                .seduHeader{
                                    font-family: "Nexa";
                                    font-style: normal;
                                    font-weight: bold;
                                    font-size: 18px;
                                    line-height: 18px;
                                 
                                }

                                &::before{
                                    display: none;
                                }
                                
                            }
                        }
                        .desc{
                            font-family: "Nexa";
                            font-style: normal;
                            font-weight: 300;
                            font-size: 8px;
                            line-height: 16px;
                        }
                    } 
                    >.row{
                        margin-bottom: 25px;
                    }
                }
            }
        }
    }
    .hold_theme2{
        .freelancerCard{

            .navRow{

                padding: 0 0 20px 0;

                >div{
                    justify-content: center;
                    display: flex;
                }
                .navTab{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 68px;
                    height: 68px;
                    padding: 10px;
                    border-radius: 100%;
                    box-shadow: 0 16px 18px -3px #eee;
                    background: #fff;
                    max-height: 100%;

                    &.active{
                        width: 110px;
                        height: 110px;
                        border-radius: 100%;
                        box-shadow: 0 16px 18px -3px #eee;
                        margin-top: -15px;

                        img{
                            margin: 0;
                            max-width: 62px;
                            width: 100%;
                            opacity: 1;
                        }

                        a{
                            &::after{
                                width: 0;
                                height: 0;
                            }
                        }
                    }
                    a{
                        font-size: 0;
                    }
                    img{
                        margin: 0;
                        max-width: 36px;
                        width: 100%;
                        opacity: .5;
                    }
                   
                }
            }
            .skills{
                .skill{
                    .skill-title{
                        img{
                            max-width: 40px;
                            max-height: 40px;
                        }
                    }
                }
            }
        }
    }

    .carouselControls{
        display: none;
    }

    .workCard{
        .workTitle{
            display: none;
        }
    }
    
}


       
    


</style>
