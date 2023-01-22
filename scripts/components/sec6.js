
import comket from '../../comket/html.js'

export default function sec6() {
    let parent = comket.div({
        class:"section6",
        children:[
            comket.div({
                class:"content",
                children:[
                    comket.div({ class:"head",
                    children:[
                        comket.img({src:"./media/circle.svg"}),
                        comket.p({class:"title", text:"Ed-Circle."})
                    ]
                }),
                comket.p({class:"courses",text:"Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher."}),
                comket.div({
                    class:"jacop",
                    children:[
                        comket.img({src:"./media/jacop.svg"}),
                        comket.p({ class:"name", text:"Jacob Jones"}),
                        comket.p({ class:"discription", text:"Student, National University"}),
                    ]
                })
                ]
            })
        ]

    })
    // build your component in this function

    return parent
}