import Stack from "./subComponents/Stack"
import { useState } from "react"

const Stacks = () => {
    const [stacks, setStacks] = useState([
        {
            stack:'HTML & CSS',
            level:'UnRanked',
        },
        {
            stack:'Python',
            level:'Top-MidLevel',
        },
        {
            stack:'Flutter',
            level:'Low-HighLevel',
        },
        {
            stack:'Javascript',
            level:'Top-MidLevel',
        },
        {
            stack:'Django',
            level:'Top-MidLevel',
        },
        {
            stack:'Typescript',
            level:'Mid-MidLevel',
        },
        {
            stack:'Node',
            level:'Low-MidLevel',
        },
        {
            stack:'React',
            level:'Top-MidLevel',
        },
        {
            stack:'Cypress',
            level:'Top-MidLevel',
        },
        {
            stack:'GraphQl',
            level:'Low-MidLevel',
        },
        {
            stack:'Postgres',
            level:'UnRanked',
        },
        {
            stack:'Redis',
            level:'Low-MidLevel',
        },
    ])
    return (
        <div className="stack-list-con">
            <p className="font3 skill">Skills</p>
            <div className="font2 stack-header">My Stack</div>
            {stacks.map((stack)=>(
                <Stack stack={stack.stack} level={stack.level}/>
            ))}
            <div className="note-for-stack font3 fwL">Note: Am not limited to the stack listed above, I have no problem learning new technologies necessary to make things work .</div>
            <div className="font2 header other-skills">Other Skills</div>
            <p className="font1 fsPrimary">Junior level designer (design during my free time), designed this page, <a className="links" href="https://healthstarks.com">healthstarks.com</a>, <a className="links" href="https://storestacks.com">Storestacks.com</a> among a few others.</p>
        </div>
    )
}

export default Stacks
