
import comket from '../../comket/html.js'

export default function nav() {
    let parent = comket.div({
        class:"nav",
        children:[
            comket.div({
                class:"content",
                children:[
                     comket.div({
                        class:"left",
                        children:[
                            comket.div({
                                class:"search",
                                children:[
                                    comket.div({
                                        class:"EdCircle",
                                        children:[
                                            comket.img({src:"../../media/circle1.svg"}),
                                            comket.p({text:"Ed-Circle."})
                                        ]
                                    }),
                                    comket.div({
                                        class:"learn",
                                        children:[
                                            comket.img({class:"sea",src:"../../media/search.svg"}),
                                            comket.input({type:"text",placeholder:'Want to learn?'}),
                                            comket.div({
                                                class:"explore",
                                                children:[
                                                    comket.p({text:"Explore"}),
                                                    comket.img({ class:"arr",src:'../../media/downArrow.png'})
                                                ]
                                            })
                                    ]
                                }),
                                ]
                            }),
                            comket.div({
                                class:'text',
                                children:[
                                    comket.span({text:"Program"}),
                                    comket.span({text:"Enterprise"}),
                                    comket.span({text:"Universities"}),
                                ]
                            }),
                        ]
                     }),
                     comket.div({
                        class:'right',
                        children:[
                            comket.p({text:"Sign in"}),
                            comket.button({text:"Create free account"})
                        ]
                     }),
                ]
            })
        ]
        
    })
    // build your component in this function
    return parent
}