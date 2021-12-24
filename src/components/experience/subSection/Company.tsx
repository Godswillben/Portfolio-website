export interface Experience{
    company: string
    users: string
    year: string
    urlText?: string
}
const Company = (exp: Experience) => {
    return (
        <div className="grey-box exp-box">
            <p className="company font1 fs12">{exp.company}</p>
            <p className="company font1 fs12">{exp.users}</p>
            <p className="company font1 fs12">{exp.year}</p>
            {exp.urlText && <a href={`https://${exp.urlText}`}className="font1 fs12">{exp.urlText}</a> }
        </div>
    )
}

export default Company
