import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import type { Course } from './types'
import { fetchCourses, generateCourseFromJam, groupJamsByTopic } from './services/api'
import CourseGrid from './components/CourseGrid'
import CoursePage from './components/CoursePage'

export default function App() {
  const [courses, setCourses] = useState<Course[]>([])
  const [jamUrl, setJamUrl] = useState('')
  const [topics, setTopics] = useState<Record<string,string[]>>({})

  useEffect(() => {
    fetchCourses().then(setCourses).catch(() => {})
    groupJamsByTopic().then(setTopics).catch(() => {})
  }, [])

  async function onGenerate() {
    if (!jamUrl) return alert('paste a jam url')
    try {
      const c = await generateCourseFromJam(jamUrl)
      setCourses(s => [c, ...s])
      setJamUrl('')
    } catch (e: any) {
      alert(e.message)
    }
  }

  return (
    <BrowserRouter>
      <div>
        <header className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <strong>Jam2Course</strong>
            <span className="small-muted">— turn jams into tiny tutorials</span>
          </div>

          <div className="topbar-actions">
            <input
              placeholder="paste jam room url"
              className="input"
              value={jamUrl}
              onChange={e => setJamUrl(e.target.value)}
            />
            <button className="btn" onClick={onGenerate}>
              Generate
            </button>
            <a className="cta" href="#via-jam">
              Via Jam
            </a>
          </div>
        </header>

        <main className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <h2>Courses</h2>
                    <div className="small-muted">Topics: {Object.keys(topics).length}</div>
                  </div>
                  <CourseGrid courses={courses} />
                  <section style={{ marginTop: 26 }}>
                    <h3>Browse Jam Topics</h3>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
                      {Object.entries(topics).map(([t, rooms]) => (
                        <div key={t} className="card" style={{ minWidth: 220 }}>
                          <div style={{ fontWeight: 700 }}>{t}</div>
                          <div className="small-muted" style={{ marginTop: 8 }}>
                            {rooms.length} rooms
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              }
            />
            <Route path="/course/:id" element={<CoursePage courses={courses} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
