import React from 'react'
import type { Course } from '../types'


export default function CourseCard({course,onOpen}:{course:Course,onOpen:(c:Course)=>void}){
return (
<div className="card">
<div className="title">{course.title}</div>
<div className="desc">{course.description}</div>
<div style={{marginTop:12,display:'flex',gap:8}}>
<button className="btn" onClick={()=>onOpen(course)}>Open</button>
{course.demoUrl && <a className="small-muted" href={course.demoUrl} target="_blank">Open Demo</a>}
</div>
</div>
)
}
