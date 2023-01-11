
import comket from '../../comket/html.js'

export default function nav() {
    let parent = comket.div({
        class:"nav",
        children:[
            comket.div({
                class:"circle",
                children:[
                    comket.div({
                        class:"circles",
                        children:[
                            comket.img({class:"light", src:"../../media/Ellipse 1.png ",}),
                            comket.img({class:"blur", src:"../../media/Ellipse 3.png "}),
                        ]
                    }),
                    comket.span({text:"Ed-Circle."})
                ]
            }),
            comket.div({
                class:"searsh",
                children:[
                    comket.div({
                        class:"learn",
                        children:[
                            comket.img({
                                src:"../../media/Icon.png"
                            }),
                            comket.span({
                                text:"Want to learn?"
                            })
                        ]
                    }),
                    comket.div({
                        class:"explor",
                        children:[
                            comket.span({
                                text:"Explore"
                            }),
                            comket.img({
                                src:"../../media/downArrow.png"
                            }),
                        ]
                    }),
                ]
            }),
            comket.div({
                class:"program",
                children:[
                    comket.span({ text:"Program"}),
                    comket.span({ text:"Enterprise"}),
                    comket.span({ text:"Universities"}),
                ]

            }),
            comket.div({
                class:"right",
                children:[
                    comket.p({ text:" sing in"}),
                    comket.button({text:"Create free account"})
                ]
            }),
        ]
        
    })
    // build your component in this function
    return parent
}