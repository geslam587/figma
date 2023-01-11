
import comket from '../../comket/html.js'

export default function sec3() {
    let parent = comket.div({
        class:"section3",
        children:[
            comket.div({ class:"top",
            children:[
                comket.h6({class:"services", text:"Our Services"}),
                comket.p({class:"fostering", text:"Fostering a playful & engaging learning environment"})
            ]
        }),
            comket.div({ class:"bottom",
            children:[
                comket.div({class:"card blue",
                children:[
                    comket.div({class:"user",
                    children:[
                        comket.div({ class:"icon"}),
                        comket.h3({ text:"User experience"})
                    ]
                }),
                    comket.p({ class:"detels", text:"Lessons on design that cover the most recent developments."}),
                    comket.div({class:"learn",
                            children:[
                                comket.p({text:"Learn More"}),
                                comket.img({src:"../../media/wiarrow.png"})
                            ]   
                        })
                ]
            }),
                comket.div({class:"card",
                children:[
                    comket.div({class:"user",
                    children:[
                        comket.div({ class:"icon"}),
                        comket.h3({text:"Web Development"})

                    ]
                }),
                    comket.p({ class:"detels", text:"Classes in development that cover the most recent advancements in web."}),
                    comket.div({class:"learn",
                            children:[
                                comket.p({text:"Learn More"}),
                                comket.img({src:"../../media/arrow.png"})
                            ]   
                        })
                ]
            }),
                comket.div({class:"card",
                children:[
                    comket.div({class:"user",
                    children:[
                        comket.div({ class:"icon"}),
                        comket.h3({text:"Marketing"})
                    ]
                }),
                    comket.p({ class:"detels", text:"Marketing courses that cover the most recent marketing trends"}),
                    comket.div({class:"learn",
                            children:[
                                comket.p({text:"Learn More"}),
                                comket.img({src:"../../media/arrow.png"})
                            ]   
                        })
                ]
            }),
            ]
        }),
        ]
    })
    // build your component in this function
    return parent
}