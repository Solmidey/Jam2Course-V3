import React from 'react'
import type { Course } from '../types'
import CourseCard from './CourseCard'


export default function CourseGrid({courses,onOpen}:{courses:Course[],onOpen:(c:Course)=>void}){
if(courses.length===0){
// show a default Todo course
const demo:Course={id:'todo-1',title:'Todo List (Demo)',description:'Build a simple todo list app',prompts:["Explain how to implement a todo list in plain HTML/JS"],demoUrl:'/todo-demo.html'}
return <div className="grid"><CourseCard course={demo} onOpen={onOpen} /></div>
}
return <div className="grid">{courses.map(c=> <CourseCard key={c.id} course={c} onOpen={onOpen} />)}</div>
}
