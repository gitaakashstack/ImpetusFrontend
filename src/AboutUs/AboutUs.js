import React,{useEffect} from "react";
import Card from "../Card/Card";
import "./AboutUs.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function AboutUs() {
  useEffect(()=>{
  window.scrollTo(0, 0)
},[])
  return (
    <div>
      <div className="pageCover2">
        <Navbar />
      </div>
      <div className="mainContent1">
        <div className="about">
          <p>About</p>
        </div>
        <div className="divP">
          <p style={{fontWeight : "bold"}}>
IMPETUS is an attempt to bring the industry closer to the students at IIEST, Shibpur. 
          </p>
          <br/>
          <p>
It is organized annually by the Society of Mechanical Engineers (SME) on behalf of the Department of Mechanical Engineering. This occasion unites experts from both industries and academia on IIEST's soil and provides opportunities to the students to get the best of both worlds. The various events in Impetus are designed to enrich one’s practical knowledge, while they also give students a chance to interact with leading industry professionals in the field of Mechanical Engineering.

<br/>
<br/>
So, no matter where you come from, we will make sure you
add a feather to your cap on the way back.
          </p>
        </div>
        <div className="aboutFirst">
          <p className="heading">About our Department</p>
          <br />
        </div>
        <div className="divP">
          <p>
       2021 marks the centenary year for the Department of Mechanical Engineering, IIEST Shibpur. </p>
<br/>
<p>
A hundred years ago, on 4th March, 1921, a diploma course on mechanical engineering was started at Shibpur and this was the beginning of a golden journey for the department. The first degree level course started on 17th july 1930 and the postgraduate courses began in 1954. </p>
<br/>
<p>
Ever since its inauguration, the department has had a rich legacy of producing extremely talented engineers who have excelled in their domains. The department has earned its name and fame across the country and the world through its methodical approach to teaching and research. The faculty consists of erudite teachers and almost all the faculty members have earned the credit of having quite a few praiseworthy research papers published in internationally acclaimed research journals. </p>
<br/>
<p>
The academic and cultural society of the Department of Mechanical Engineering is the Society of Mechanical Engineers (SME). SME handles all departmental events, organises competitions and technical fests and represents the department in various events of IIEST and external affairs. </p>
<br/>
<p>
A number of international societies have their student sections under the SME umbrella: Society of Automotive Engineers (SAE), American Society of Mechanical Engineers (ASME) and Indian Society of Heating, Refrigerating and Air conditioning Engineers (ISHRAE). Prominent speakers from the academic world and industrial domain are often invited to deliver lectures and industrial visits are also organised by the department to keep the students updated about modern developments. The department has reached great heights of success in the last century and we hope, a lot more is yet to come.</p>
<br/>
<br/>

        </div>

        <div className="aboutFirst">
          <p className="heading">Past Sponsors</p>
          <br />
        </div>
        <div className="team_grid">
          <Card
            src="https://digitallearning.eletsonline.com/wp-content/uploads/2016/10/UGC_LOGO.jpg"
            title="University Grants Commission"
          />
          <Card
            title="Department of Science and Technology"
            src="https://dst.gov.in/sites/default/files/FIST%20Logo%20(Final)_page-0001.jpg"
          />
          <Card
            title="Council of Scientific and Industrial Research"
            src="https://www.pharmatrendz.com/wp-content/uploads/2018/11/csir-logo.gif"
          />
          <Card
            src="https://www.ndtv.com/education/cache-static/media/presets/625X400/article_images/2020/5/12/7ukqbfh8_aicte-_625x300_07_May_20.jpg"
            title="All India Council for Technical Education"
          />
          <Card
            title="Members of Parliament Local Area Development Scheme"
            src="https://lh3.googleusercontent.com/proxy/kqtpf4_MB0gJyk_fAznmfKliPL3k0yGiWcT6BMx47u9x90ILMWAvEm21kBG5Vg3T-G07QLcXsqSLTlZmL8fwPrFLsqKTNknKd1qSiEayAPwBVpN1gUC0Jl_Wl0kUg6U8DroYDZqcC0Fc"
          />
          <Card
            title="Proof and Experimental Establishment, Chandipur, Balasore, Ministry of Defence, GOI"
            src="https://odishabytes.com/wp-content/uploads/2020/06/PXE-1.jpeg"
          />

          <Card
            src="https://www.wbgov.org/wp-content/uploads/2021/09/agricultural-marketing-department.jpg"
            title="West Bengal State Agricultural Marketing Board"
          />
          <Card
            title="West Bengal Medical Services Corp Ltd"
            src="https://lh5.googleusercontent.com/p/AF1QipNVY6X500Em7pFkCrAXJ2Pw09DMCciImapUwI8v=w1080-k-no"
          />
          <Card
            title="Flip Motor Corporation Private Limited"
            src="https://www.99corporates.com/CompanyLogoThumb/no-logo99.png"
          />

          <Card
            src="            https://seekvectorlogo.com/wp-content/uploads/2019/06/the-american-society-of-mechanical-engineers-asme-vector-logo.png"
            title="American Society of Mechanical Engineers"
          />
          <Card
            title="Ceramic International"
            src="data:image/png;base64,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"
          />
          <Card
            title="Larsen & Toubro"
            src="https://static.toiimg.com/thumb/msid-71716214,width-1200,height-900,resizemode-4/.jpg"
          />

          <Card
            src="            https://blogs.cranfield.ac.uk/wp-content/uploads/2020/04/Royal-Society.png"
            title="The Royal Society"
          />
          <Card
            title="Indo-US Science & Technology Forum (IUSSTF)"
            src="https://vigyanprasar.gov.in/wp-content/uploads/2-IUSSTF-Logo.jpg"
          />
          <Card title="Board of Research in Nuclear Sciences(BRNS), DAE" src="http://www.daessps.in/art/BARC-circle.jpg" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
