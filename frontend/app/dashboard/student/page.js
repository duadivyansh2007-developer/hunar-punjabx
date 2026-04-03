'use client';
import { LayoutDashboard, Briefcase, Building, Target, BarChart2, Settings, HelpCircle, Bell, Search, Bot, User, ChevronRight, CheckCircle2, Hourglass, Star } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function StudentDashboard() {
  const readinessData = [{ name: 'Ready', value: 75 }, { name: 'Gap', value: 25 }];
  const COLORS = ['#d15112', '#f1f5f9'];

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
            <input type="text" placeholder="Search insights..." />
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

        {/* Content */}
        <main className="content-wrapper">
          <div className="flex-between" style={{ marginBottom: '2rem' }}>
            <div>
              <h1 className="section-title">Student Dashboard</h1>
              <p style={{ color: '#475569' }}>Welcome back. Your professional profile is trending upward. AI recommendations have been updated.</p>
            </div>
            <span style={{ background: '#ffe5d0', color: '#d15112', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600' }}>
              ✦ AI Recommended
            </span>
          </div>

          {/* Top Row */}
          <div className="grid-3" style={{ gridTemplateColumns: '1fr 2fr', marginBottom: '2rem' }}>
            
            {/* Readiness Circle */}
            <div className="card flex-center" style={{ flexDirection: 'column', textAlign: 'center' }}>
              <h3 style={{ alignSelf: 'flex-start', marginBottom: '1rem' }}>AI Readiness Score</h3>
              <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={readinessData} innerRadius={70} outerRadius={90} paddingAngle={0} dataKey="value" stroke="none">
                      {readinessData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <h2 style={{ fontSize: '2.5rem', margin: 0, color: '#00283e' }}>75%</h2>
                  <p style={{ fontSize: '0.6rem', color: '#64748b', letterSpacing: '1px' }}>INSTITUTIONAL GRADE</p>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: '1rem' }}>You are in the <strong style={{ color: '#d15112' }}>Top 15%</strong> of candidates in the Punjab region. Focus on React components.</p>
            </div>

            {/* Skill Gap Analysis */}
            <div className="card">
              <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
                <h3>Skill Gap Analysis</h3>
                <span style={{ color: '#0ea5e9', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer' }}>View Full Roadmap →</span>
              </div>
              <div className="grid-2">
                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ background: '#ccfbf1', color: '#0f766e', padding: '0.8rem', borderRadius: '8px' }}><Target size={24}/></div>
                    <div>
                      <h4 style={{ margin: 0 }}>Identified Need</h4>
                      <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Priority High</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '1.5rem' }}>Need <strong>React skills</strong> (specifically Hooks and State Management) for 40% of upcoming job openings.</p>
                  <div style={{ background: '#e2e8f0', height: '6px', borderRadius: '3px', marginBottom: '0.5rem' }}>
                    <div style={{ width: '40%', background: '#0f766e', height: '100%', borderRadius: '3px' }}></div>
                  </div>
                  <div className="flex-between" style={{ fontSize: '0.7rem', color: '#64748b' }}>
                    <span>CURRENT: 40%</span><span>TARGET: 90%</span>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ background: '#ffe5d0', color: '#d15112', padding: '0.8rem', borderRadius: '8px' }}><BarChart2 size={24}/></div>
                    <div>
                      <h4 style={{ margin: 0 }}>Data Proficiency</h4>
                      <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Priority Medium</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '1.5rem' }}>Advance your <strong>PostgreSQL</strong> knowledge to qualify for Full Stack positions.</p>
                  <div style={{ background: '#e2e8f0', height: '6px', borderRadius: '3px', marginBottom: '0.5rem' }}>
                    <div style={{ width: '65%', background: '#d15112', height: '100%', borderRadius: '3px' }}></div>
                  </div>
                  <div className="flex-between" style={{ fontSize: '0.7rem', color: '#64748b' }}>
                    <span>CURRENT: 65%</span><span>TARGET: 80%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="grid-3" style={{ gridTemplateColumns: '2fr 1fr' }}>
            
            {/* AI Job Recommendations */}
            <div className="card">
              <div className="flex-between" style={{ marginBottom: '2rem' }}>
                <h3>AI Job Recommendations <span className="badge badge-teal" style={{ marginLeft: '1rem' }}>UPDATED 2M AGO</span></h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="flex-between">
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', background: '#e0f2fe', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#0284c7' }}><Building2 size={20}/></div>
                    <div>
                      <h4 style={{ margin: 0 }}>Junior Developer</h4>
                      <p style={{ fontSize: '0.85rem', color: '#64748b' }}>TCS • Lahore (Hybrid)</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ color: '#0f766e', fontWeight: 'bold' }}>92% Match</span>
                      <p style={{ fontSize: '0.7rem', color: '#64748b', margin: 0 }}>Ready to apply</p>
                    </div>
                    <div style={{ background: '#f1f5f9', padding: '0.5rem', borderRadius: '6px', cursor: 'pointer' }}><ChevronRight size={16}/></div>
                  </div>
                </div>

                <div className="flex-between">
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', background: '#00283e', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}><Building2 size={20}/></div>
                    <div>
                      <h4 style={{ margin: 0 }}>Frontend Intern</h4>
                      <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Systems Ltd • Remote</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ color: '#0f766e', fontWeight: 'bold' }}>88% Match</span>
                      <p style={{ fontSize: '0.7rem', color: '#64748b', margin: 0 }}>React needed</p>
                    </div>
                    <div style={{ background: '#f1f5f9', padding: '0.5rem', borderRadius: '6px', cursor: 'pointer' }}><ChevronRight size={16}/></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Tracker */}
            <div className="card card-dark" style={{ border: 'none' }}>
              <h3 style={{ marginBottom: '2rem' }}>Application Tracker</h3>
              
              <div style={{ borderLeft: '2px solid #004b73', marginLeft: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-11px', top: '0', background: '#0ea5e9', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CheckCircle2 size={12} color="white"/>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ margin: 0 }}>Applied</h4>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Full Stack Developer • NetSol</p>
                  <span style={{ background: '#004b73', fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>MARCH 12, 2024</span>
                </div>

                <div style={{ position: 'absolute', left: '-11px', top: '100px', background: '#d15112', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Hourglass size={12} color="white"/>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ margin: 0 }}>Shortlisted</h4>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '1rem' }}>Frontend Engineer • Arbitsoft</p>
                  <div style={{ background: '#004b73', padding: '1rem', borderRadius: '8px', fontSize: '0.8rem', fontStyle: 'italic', position: 'relative' }}>
                    "Your profile matches the skill requirements. Interview scheduled for Friday."
                    <div style={{ position: 'absolute', right: '-1rem', top: '50%', transform: 'translateY(-50%)', background: '#d15112', padding: '0.5rem', borderRadius: '50%' }}>
                      <Star size={16} fill="white"/>
                    </div>
                  </div>
                </div>

                <div style={{ position: 'absolute', left: '-11px', bottom: '0', background: '#004b73', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CheckCircle2 size={12} color="#94a3b8"/>
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#94a3b8' }}>Selected</h4>
                  <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Final offer pending review</p>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
