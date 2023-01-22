
import comket from '../../comket/html.js'

export default function sec4() {
    let parent = comket.div({
        class:"section4",
        children:[
                comket.div({class:"top",
            children:[
                comket.p({class:"explore", text:"Explore Programs"}),
                comket.p({class:"our", text:"Our Most Popular Class"}),
                comket.p({class:"join",text:"Let's join our famous class, the knowledge provided will definitely be useful for you."}),
            ]
            }),
                comket.div({class:"cards",
            children:[
                comket.div({class:"card",
                children:[
                    comket.div({ 
                        class:"top",
                        children:[
                            comket.img({src:"./media/figma.png"}),
                            // comket.div({})
                        ]
                    }),
                    comket.div({ class:"bottom",
                        children:[
                            comket.p({class:"design",text:"design"}),
                            comket.div({class:"title",
                                children:[
                                    comket.p({text:"Figma UI UX Design"}),
                                    comket.img({src:"./media/up.png"})
                                ]
                                }),
                            comket.p({class:"detels", text:"Use Figma to get a job in UI Design, User Interface, User Experience design."}),
                            comket.img({class:"rate", src:"./media/rate.png"}),
                            comket.div({class:"profile",
                                children:[
                                    comket.img({src:"./media/Jane.svg"}),
                                    comket.div({children:[
                                        comket.p({class:"name", text:"Jane Cooper"}),
                                        comket.p({class:"enrolled", text:"Enrolled"})
                                    ]}),
                                    comket.h3({text:"$17.84"})
                                ]
                        }),
                        ]
                    })
                ]
            }),
                comket.div({class:"card",
                children:[
                    comket.div({ 
                        class:"top",
                        children:[
                            comket.img({src:"./media/learn.png"}),
                            comket.div({})
                        ]
                    }),
                    comket.div({ class:"bottom",
                        children:[
                            comket.p({class:"design",text:"design"}),
                            comket.div({class:"title",
                                children:[
                                    comket.p({text:"Learn With Shoaib"}),
                                    comket.img({src:"./media/up.png"})
                                ]
                                }),
                            comket.p({class:"detels", text:"Use Figma to get a job in UI Design, User Interface, User Experience design."}),
                            comket.img({class:"rate", src:"./media/rate.png"}),
                            comket.div({class:"profile",
                                children:[
                                    comket.img({src:"./media/Jenny.svg"}),
                                    comket.div({children:[
                                        comket.p({class:"name", text:"Jenny Wilson"}),
                                        comket.p({class:"enrolled", text:"Enrolled"})
                                    ]}),
                                    comket.h3({text:"$8.99"})
                                ]
                        }),
                        ]
                    })
                ]
            }),
                comket.div({class:"card",
                children:[
                    comket.div({ 
                        class:"top",
                        children:[
                            comket.img({src:"./media/building.png"}),
                            comket.div({})
                        ]
                    }),
                    comket.div({ class:"bottom",
                        children:[
                            comket.p({class:"design",text:"design"}),
                            comket.div({class:"title",
                                children:[
                                    comket.p({text:"Building User Interface."}),
                                    comket.img({src:"./media/up.png"})
                                ]
                                }),
                            comket.p({class:"detels", text:"Use Figma to get a job in UI Design, User Interface, User Experience design."}),
                            comket.img({class:"rate", src:"./media/rate.png"}),
                            comket.div({class:"profile",
                                children:[
                                    comket.img({src:"./media/Esther.svg"}),
                                    comket.div({children:[
                                        comket.p({class:"name", text:"Esther Howard"}),
                                        comket.p({class:"enrolled", text:"Enrolled"})
                                    ]}),
                                    comket.h3({text:"$11.70"})
                                ]
                        }),
                        ]
                    })
                ]
            }),
                
            ]
            }),
                comket.div({class:"bottomPrograms",
            children:[
                comket.button({text:"Explore All Programs"})
            ]
            }),
        ]
    })
    // build your component in this function

    return parent
}