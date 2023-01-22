
import comket from '../../comket/html.js'

export default function sec2() {
    let parent = comket.div({
        class:"section2",
        children:[
            comket.div({
                class:"top",
                children:[
                    comket.div({
                        class:"left",
                        children:[
                            comket.div({
                                class:"title",
                                children:[
                                    comket.div({
                                        children:[
                                            comket.span({class:"up", text:"Up Your "}),
                                            comket.span({class:"skills",text:"skills"}),
                                        ]
                                    }),
                                    comket.div({
                                        children:[
                                            comket.span({class:"to", text:"To "}),
                                            comket.span({class:"advance",text:"Advance"}),
                                            comket.span({class:"your",text:"Your"}),
                                        ]
                                    }),
                                    comket.div({
                                        children:[
                                            comket.span({class:"career", text:"Career "}),
                                            comket.span({class:"path",text:"Path"}),
                                        ]
                                    }),

                                ]
                            }),
                            comket.p({
                                class:"provide",
                                text:"Provides you with the latest online learning system and material that help your knowledge growing."
                            }),
                            comket.div({
                                class:"button",
                                children:[
                                    comket.button({ class:"started", text:"Get Started"}),
                                    comket.button({class:"free", text:"Get free trial"}),
                                ]
                            }),
                            comket.div({
                                class:"bottom",
                                children:[
                                        comket.div({class:"buplic",
                                    children:[
                                        comket.img({src:"./media/public.png"}),
                                    comket.span({ text:"Public Speaking",})
                                    ]
                                    }),
                                        comket.div({class:"buplic",
                                    children:[
                                        comket.img({src:"./media/career.png"}),
                                    comket.span({ text:"Career-Oriented",})
                                    ]
                                    }),
                                        comket.div({class:"buplic",
                                    children:[
                                        comket.img({src:"./media/creativ.png"}),
                                    comket.span({ text:"Creative Thinking",})
                                    ]
                                    })
                                ]
                            })
                        ]
                    }),
                    comket.div({
                        class:"right",
                        children:[
                            comket.div({
                                class:"student",
                                children:[
                                    comket.div({
                                        children:[
                                        comket.img({src:"./media/young-student-woman.png"})]}),
                                        comket.div({class:"impety"}),
                                ]
                            }),
                            comket.div({
                                class:"video",
                                children:[
                                    comket.div({class:"img"}),
                                    comket.div({
                                        children:[
                                            comket.h3({text:"2K+"}),
                                            comket.p({text:"Video Courses"})
                                        ]
                                    }),
                                ]
                            
                            }),
                            comket.div({
                                class:"online",
                                children:[
                                    comket.img({class:"circl", src:"./media/line.png" }),
                                    comket.div({class:"light"}),
                                    comket.h3({text:"5k+"}),
                                    comket.p({text:"Online Courses"})
                                ]

                            }),
                            comket.div({
                                class:"tutors",
                                children:[
                                    comket.div({class:"img"}),
                                    comket.div({children:[
                                        comket.p({text:"tutors"}),
                                        comket.h3({text:"250+"})
                                    ]})
                                ]

                            }),
                            comket.div({ class:"blue", }),
                        ]
                    }),
                ]
            }),
            comket.div({
                class:"Bottom",
                children:[
                    comket.div({class:"collaboration",
                children:[
                    comket.h3({text:"250+"}),
                    comket.p({text:"collaboration"}),
                ]
                }),
                    comket.img({class:"duolingo",src:"./media/duo.png" }),
                    comket.img({class:"codecov", src:"./media/cod.png"}),
                    comket.img({class:"user", src:"./media/duo.png"}),
                    comket.img({class:"magic", src:"./media/magic.png"}),
                ]

            })
        ]
    })
    // build your component in this function

    return parent
}