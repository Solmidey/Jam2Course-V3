import React from 'react'
import type { Course } from '../types'
import JamPreview from './JamPreview'


export default function CoursePage({course,onBack}:{course:Course,onBack:()=>void}){
return (
<div>
<div className="course-header">
<div>
<div style={{fontSize:24,fontWeight:800}}>{course.title}</div>
<div className="small-muted">{course.description}</div>
</div>
<div style={{display:'flex',gap:10}}>
<a className="cta" id="via-jam">Via Jam</a>
<button className="btn" onClick={onBack}>Back</button>
</div>
</div>


<div className="card">
<div style={{fontWeight:700}}>Overview</div>
<div className="small-muted" style={{marginTop:8}}>This tutorial was generated from Jam threads and curated for an interactive demo.</div>


<div className="prompts">
<div style={{fontWeight:700}}>Prompts used</div>
<ul>
{course.prompts.map((p,idx)=>(<li key={idx}><code>{p}</code></li>))}
</ul>
</div>


<div style={{marginTop:12}}>
<div style={{fontWeight:700}}>Live demo</div>
<div className="iframe-wrap"><JamPreview url={course.demoUrl || ''} /></div>
</div>
</div>
</div>
)
}
