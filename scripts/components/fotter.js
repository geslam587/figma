
import comket from '../../comket/html.js'

export default function fotter() {
    let parent = comket.div({
        class:"fotter",
        children:[
            comket.div({
                class:"top",
                children:[
                comket.div({
                    class:"contet",
                    children:[
                        comket.div({
                            class:'left',
                            children:[
                                comket.div({
                                    class:"circle",
                                    children:[
                                        comket.img({src:"./media/circle1.svg"}),
                                        comket.span({text:"Ed-Circle."})
                                    ]
                                }),
                                comket.p({ text:"Top learning experiences that create more talent in the world."}),
                            ]
                        }),
                        comket.div({
                            class:'right',
                            children:[
                                comket.div({
                                    children:[
                                        comket.p({ class:"heading",text:"Product"}),
                                        comket.p({text:"Overview"}),
                                        comket.p({text:"Features"}),
                                        comket.p({text:"Solutions"}),
                                        comket.p({text:"Tutorials"}),
                                        comket.p({text:"Pricing"}),
                                    ]
                                }),
                                comket.div({
                                    children:[
                                        comket.p({ class:"heading",text:"Company"}),
                                        comket.p({text:"About us"}),
                                        comket.p({text:"Careers"}),
                                        comket.p({text:"Press"}),
                                        comket.p({text:"News"}),
                                    ]
                                }),
                                comket.div({
                                    children:[
                                        comket.p({ class:"heading",text:"Social"}),
                                        comket.p({text:"Twitter"}),
                                        comket.p({text:"LinkedIn"}),
                                        comket.p({text:"GitHub"}),
                                        comket.p({text:"Dribbble"}),
                                    ]
                                }),
                                comket.div({
                                    children:[
                                        comket.p({ class:"heading",text:"Legal"}),
                                        comket.p({text:"Terms"}),
                                        comket.p({text:"Privacy"}),
                                        comket.p({text:"Cookies"}),
                                        comket.p({text:"Contact"}),
                                    ]
                                }),
                            ]
                        })
                    ]
                }),
            ]
        }),
        comket.div({
            class:"bottom",
            children:[
            comket.div({
                class:"contet",
                children:[
                    comket.div({
                        class:'content',
                        children:[
                            comket.p({text:"© 2022 Ed-Circle. All rights reserved."}),
                            comket.img({src:'./media/Social icons.svg'})
                        ]
                    }),
                ]
        }),
        ]

            }),
        ]

    })
    
    // build your component in this function
    return parent
}