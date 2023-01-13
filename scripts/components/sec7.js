import comket from "../../comket/html.js";

export default function sec7() {
  let parent = comket.div({
    class: "section7",
    children:[
      comket.div({
        class:"content",
        children:[
                comket.h2({
                  class:"top",
                  text:"Our recent blogs"
                }),
                comket.div({
                  class:"bottom",
                  children:[
                    comket.div({
                      class:"left",
                      children:[
                        comket.div({
                          class:"uper",
                          children:[
                            comket.img({src:"../../media/leftuper7.svg"}),
                            comket.div({
                              class:"text",
                              children:[
                                comket.div({ class:"ovamber",
                                children:[
                                  comket.p({class:"date", text:"November 16, 2014"}),
                                  comket.p({class:"title", text:"Three Pillars of User Delight"}),
                                  comket.p({class:"detels", text:"Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ..."}),
                                ]
                              }),
                              comket.div({class:"research", 
                              children:[
                                comket.span({class:"Research",text:"Research"}),
                                comket.span({class:"ui",text:"UI UX"})
                              ]
                            }),
                              ]
                            }),
                          ]
                        }),
                          comket.div({
                            class:"down",
                            children:[
                              comket.img({src:"../../media/leftdown7.svg"}),
                              comket.div({ 
                                class:"text",
                                children:[
                                  comket.div({ class:"novamber",
                                  children:[
                                    comket.p({class:"date", text:"September 24, 2017"}),
                                    comket.p({class:"title", text:"UX Mapping Methods"}),
                                    comket.p({class:"detels", text:"Visual-design principles can be applied consistently throughout the process of creating a polished UX map..."}),
                                  ]
                                }),
                                comket.div({class:"research", 
                                children:[
                                  comket.span({class:"Research",text:"Research"}),
                                  comket.span({class:"ui",text:"UI UX"})
                                ]
                              }), 
                                ]
                              }),                        
                              ]
                            }),
                      ]
                    }),
                    comket.div({
                      class:"right",
                      children:[
                        comket.img({src:"../../media/right7.svg"}),
                        comket.div({
                          class:"down",
                          children:[
                            comket.div({
                              class:"development",
                              children:[
                                comket.p({class:"marsh", text:"March 13, 2014"}),
                                comket.p({class:"agile", text:"Agile Development Projects and Usability"}),
                                comket.p({class:"detels", text:"Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. "}),
                              ]
                            }),
                            comket.div({
                              class:"programming",
                              children:[
                                comket.p({text:"Programming"}),
                                comket.p({text:"Research"}),
                                comket.p({text:"Developments"}),
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                  ]
                })
        ]
      }),

    ]
  });
  return parent;
}
