import nav from "./components/nav.js"
import sec2 from "./components/sec2.js"
import sec3 from "./components/sec3.js"
import sec4 from "./components/sec4.js"
import sec5 from "./components/sec5.js"
import sec6 from "./components/sec6.js"
import sec7 from "./components/sec7.js"
import fotter from "./components/fotter.js"



function figma() {
    document.body.innerHTML = ""
    // document.querySelector("link").href ="./figma/styles/style.css"
    document.body.append(
        nav(),
        sec2(),
        sec3(),
        sec4(),
        sec5(),
        sec6(),
        sec7(),
        fotter()
    )
}
figma()