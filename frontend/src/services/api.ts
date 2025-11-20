import type { Course } from '../types'


const API_BASE = '/api'


export async function fetchCourses(): Promise<Course[]> {
const r = await fetch(`${API_BASE}/courses`)
if (!r.ok) throw new Error('failed')
return r.json()
}


export async function generateCourseFromJam(jamUrl: string): Promise<Course> {
const r = await fetch(`${API_BASE}/generate`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ jamUrl })
})
if (!r.ok) throw new Error('generate failed')
return r.json()
}


export async function groupJamsByTopic(): Promise<Record<string, string[]>> {
const r = await fetch(`${API_BASE}/grouped-jams`)
if (!r.ok) throw new Error('grouping failed')
return r.json()
}
