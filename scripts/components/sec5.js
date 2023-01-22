
import comket from '../../comket/html.js'

export default function sec5() {
    let parent = comket.div({
        class:"section5",
        children:[
                comket.div({class:"top",
            children:[
                comket.p({class:"tutors", text:" Tutors"}),
                comket.p({class:"meet", text:"Meet the Heroes"}),
                comket.p({class:"circle",text:" On Ed-Circle, instructors from all over the world instruct millions of students. We offer the knowledge and abilities."}),
            ]
            }),
            comket.div({class:"cards",
            children:[
          comket.div({class:"card",
                children:[
                    comket.img({ class:"avatar", src:"./media/Theresa.svg"}),
                    comket.div({class:"text",
                        children:[
                            comket.p({class:"name",text:" Theresa Webb"}),
                            comket.p({class:"jop",text:"Application Support Analyst Lead"}),
                            comket.p({class:"detels",text:"Former co-founder of Opendoor. Early staff at Spotify and Clearbit."}),
                            comket.div({class:"social", children:[comket.img({src:"./media/social.svg"})]})
                        ]
                }),
                ]
            }),     
          comket.div({class:"card",
                children:[
                    comket.img({ class:"avatar", src:"./media/courtney.svg"}),
                    comket.div({class:"text",
                        children:[
                            comket.p({class:"name",text:"Courtney Henry"}),
                            comket.p({class:"jop",text:"Director, Undergraduate Analytics and Planning"}),
                            comket.p({class:"detels",text:"Lead engineering teams at Figma, Pitch, and Protocol Labs."}),
                            comket.div({class:"social", children:[comket.img({src:"./media/social.svg"})]})
                        ]
                }),
                ]
            }),     
          comket.div({class:"card",
                children:[
                    comket.img({ class:"avatar", src:"./media/Albert.svg"}),
                    comket.div({class:"text",
                        children:[
                            comket.p({class:"name",text:"Albert Flores"}),
                            comket.p({class:"jop",text:"Career Educator"}),
                            comket.p({class:"detels",text:"Former PM for Linear, Lambda School, and On Deck."}),
                            comket.div({class:"social", children:[comket.img({src:"./media/social.svg"})]})
                        ]
                }),
                ]
            }),     
          comket.div({class:"card",
                children:[
                    comket.img({ class:"avatar", src:"./media/Marvin.svg"}),
                    comket.div({class:"text",
                        children:[
                            comket.p({class:"name",text:"Marvin McKinney"}),
                            comket.p({class:"jop",text:"Co-op & Internships Program & Operations Manager"}),
                            comket.p({class:"detels",text:"Former frontend dev for Linear, Coinbase, and Postscript."}),
                            comket.div({class:"social", children:[comket.img({src:"./media/social.svg"})]})
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