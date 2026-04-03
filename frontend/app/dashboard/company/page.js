'use client';
import { LayoutDashboard, Briefcase, Building, Target, BarChart2, Settings, HelpCircle, Bell, Search, Bot, User, PlusCircle, Eye, Calendar, MoreHorizontal } from 'lucide-react';

export default function CompanyDashboard() {
  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header" style={{ padding: '1.5rem' }}>
          HUNAR <br/><span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 'normal' }}>AI Ecosystem</span>
        </div>
        <div className="nav-links">
          <div className="nav-item active"><LayoutDashboard size={20}/> Dashboard</div>
          <div className="nav-item"><Briefcase size={20}/> Jobs</div>
          <div className="nav-item"><Building size={20}/> Institutes</div>
          <div className="nav-item"><Target size={20}/> Readiness</div>
          <div className="nav-item"><BarChart2 size={20}/> Analytics</div>
        </div>
        <div style={{ padding: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
          <div className="nav-item"><Settings size={20}/> Settings</div>
          <div className="nav-item"><HelpCircle size={20}/> Support</div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Submit Report</button>
        </div>
      </aside>

      <div className="main-area">
        {/* Header */}
        <header className="topbar">
          <div className="search-bar">
            <Search size={18} />
            <input type="text" placeholder="Search candidates..." />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Bell size={20} color="#64748b"/>
            <HelpCircle size={20} color="#64748b"/>
            <button className="btn btn-primary" style={{ gap: '0.5rem', borderRadius: '20px' }}>
              <Bot size={18}/> AI Chatbot
            </button>
            <div style={{ background: '#e2e8f0', borderRadius: '50%', padding: '0.5rem' }}><User size={20} color="#00283e"/></div>
          </div>
        </header>

        <main className="content-wrapper">
          <div className="grid-3" style={{ gridTemplateColumns: '2fr 1fr', marginBottom: '2rem' }}>
            {/* Dark Blue Hero Banner */}
            <div className="card card-dark" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
               <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>Welcome back,<br/>Punjab Skill Development.</h1>
               <p style={{ color: '#0ea5e9', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '80%' }}>
                 Your hiring efficiency is up by 24% this month. AI has flagged 12 high-readiness candidates for your open roles.
               </p>
               <div style={{ display: 'flex', gap: '1rem' }}>
                 <button className="btn card-peach" style={{ border: 'none', fontWeight: 'bold' }}><PlusCircle size={18} style={{ marginRight: '8px' }}/> Job Posting</button>
                 <button className="btn" style={{ background: '#004b73', color: 'white' }}><Eye size={18} style={{ marginRight: '8px' }}/> View All Jobs</button>
               </div>
            </div>

            {/* Overall Readiness Card */}
            <div className="card">
              <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem' }}>Overall Readiness</h3>
                <h2 style={{ color: '#0f766e', m0: 0 }}>88%</h2>
              </div>
              <div style={{ background: '#e2e8f0', height: '8px', borderRadius: '4px', marginBottom: '1rem' }}>
                <div style={{ background: '#004b73', width: '88%', height: '100%', borderRadius: '4px' }}></div>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '2rem' }}>Your current candidate pool matches Punjab's high-tech manufacturing standards.</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ color: '#00283e' }}>142</h3>
                  <p style={{ fontSize: '0.6rem', color: '#64748b' }}>APPLICATIONS</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ color: '#0f766e' }}>28</h3>
                  <p style={{ fontSize: '0.6rem', color: '#64748b' }}>SHORTLISTED</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ color: '#d15112' }}>09</h3>
                  <p style={{ fontSize: '0.6rem', color: '#64748b' }}>INTERVIEWS</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="section-title" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Target size={20} color="#d15112"/> AI Candidate Matching</h3>
          <div className="grid-4" style={{ marginBottom: '3rem' }}>
            {[
              { name: 'Ayesha Ahmed', role: 'Full Stack Dev', inst: 'FAST NUCES', match: '98%', tags: ['React', 'Node.js', 'AI/ML'] },
              { name: 'Zain Khan', role: 'UI/UX Designer', inst: 'UET Lahore', match: '94%', tags: ['Figma', 'Design Systems'] },
              { name: 'Mariya Batool', role: 'Data Analyst', inst: 'PU', match: '92%', tags: ['Python', 'Tableau'] },
              { name: 'Hamza Malik', role: 'DevOps Eng.', inst: 'ITU', match: '89%', tags: ['AWS', 'Docker'] }
            ].map((cand, idx) => (
               <div key={idx} className="card" style={{ background: '#f8fafc', border: 'none' }}>
                 <div className="flex-between" style={{ marginBottom: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', background: '#ccc', borderRadius: '50%', overflow: 'hidden' }}>
                      <img src="https://via.placeholder.com/40" alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                   </div>
                   <span className="badge badge-teal" style={{ background: '#5eead4', color: '#0f766e' }}>⚡ {cand.match} Match</span>
                 </div>
                 <h4 style={{ color: '#00283e', marginBottom: '0.2rem' }}>{cand.name}</h4>
                 <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '1rem' }}>{cand.role} | {cand.inst}</p>
                 <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                   {cand.tags.map(t => <span key={t} style={{ background: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', color: '#475569', border: '1px solid #e2e8f0' }}>{t}</span>)}
                 </div>
               </div>
            ))}
          </div>

          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3 className="section-title">Hiring Pipeline</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span className="badge badge-gray" style={{ padding: '0.5rem 1rem' }}>Software Engineering Dept.</span>
              <MoreHorizontal size={20} color="#64748b"/>
            </div>
          </div>

          {/* Kanban Board */}
          <div className="grid-3" style={{ alignItems: 'flex-start' }}>
            {/* Column 1 */}
            <div>
              <h4 style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>APPLIED (42)</h4>
              <div className="card" style={{ marginBottom: '1rem', borderLeft: '4px solid #004b73' }}>
                <h4 style={{ color: '#00283e' }}>Bilal Shah</h4>
                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Applied 2h ago</p>
              </div>
              <div className="card" style={{ marginBottom: '1rem', borderLeft: '4px solid #004b73' }}>
                <h4 style={{ color: '#00283e' }}>Sara Waqar</h4>
                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Applied 5h ago</p>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 style={{ fontSize: '0.9rem', color: '#0f766e', marginBottom: '1rem', borderBottom: '2px solid #0f766e', paddingBottom: '0.5rem' }}>SHORTLISTED (12)</h4>
              <div className="card" style={{ marginBottom: '1rem', borderLeft: '4px solid #0f766e' }}>
                <div className="flex-between">
                  <h4 style={{ color: '#00283e' }}>Ayesha Ahmed</h4>
                  <span className="badge badge-teal" style={{ background: '#5eead4' }}>AI Match</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><Calendar size={12}/> Oct 12</span>
                  <span>💬 3 notes</span>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <h4 style={{ fontSize: '0.9rem', color: '#d15112', marginBottom: '1rem', borderBottom: '2px solid #d15112', paddingBottom: '0.5rem' }}>INTERVIEW (5)</h4>
              <div className="card card-peach" style={{ borderLeft: '4px solid #d15112' }}>
                <h4 style={{ color: '#00283e' }}>Upcoming: Ali Raza</h4>
                <p style={{ fontSize: '0.75rem', color: '#d15112', marginBottom: '1rem' }}>Today at 2:00 PM (Google Meet)</p>
                <button className="btn" style={{ width: '100%', background: 'white', color: '#00283e', border: '1px solid #d15112' }}>Join Room</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
