import { useState } from "react"
import Company from "./subSection/Company"

function Experience() {
    const [exps, setExp] = useState([
        {
            company:'Founder Zanzra - Fashion ecommerce',
            users: '120 - Registered users',
            year:'2018',
            // urlText: null,
            // url:null,
        },
        {
            company:'Co-founder BusBuggy - Bus Hailing app ',
            users: '80- Registered buses.',
            year:'Dec 2018 - Feburary 2019',
            // urlText: null,
            // url:null,
        },
        {
            company:'Founder Storelinez - (Business social  media with Fexible(website like) profiles',
            users: '28 - Registered users',
            year:'Nov 2019 - Feburary  2020',
            // urlText: null,
            // url:null,
        },
        {
            company:'Co-founder StoreStacks- Pivot of storelinez website builder for businesses focused on growth.',
            users: '40+ - Registered users.',
            year:'July 2021 - till date(Pertime)',
            urlText: 'Storestacks.com',
        },
        {
            company:'Co-founder Healthstarks - Social medical center(stackoverflow for health).',
            users: '40+ - Registered users.',
            year:'Aug 2021 - till date(Pertime)',
            urlText: 'Healthstarks.com',
        },
    ])

    return (
        <div className="section-exp">
            <div className="header font2 exp-header">Experience</div>
            {exps.map((exp)=>(
                <Company company={exp.company} users={exp.users} year={exp.year} urlText={exp.urlText} />
            ))}
        </div>
    )
}

export default Experience
