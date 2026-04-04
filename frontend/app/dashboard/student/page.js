'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Briefcase, Building, Building2, Target, BarChart2, Settings, HelpCircle, Bell, Search, Bot, User, ChevronRight, CheckCircle2, Hourglass, Star, Loader2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function StudentDashboard() {
  const [userName, setUserName] = useState('Student');
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [readinessScore, setReadinessScore] = useState(75);
  const router = useRouter();

  const COLORS = ['#d15112', '#f1f5f9'];
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const storedName = localStorage.getItem('name');

    if (!token || role !== 'student') {
      router.push('/login');
      return;
    }

    if (storedName) setUserName(storedName);

    const fetchData = async () => {
      try {
        const [jobsRes, appsRes] = await Promise.all([
          fetch(`${API_URL}/api/jobs`),
          fetch(`${API_URL}/api/applications`, {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ]);

        const jobsData = await jobsRes.json();
        const appsData = await appsRes.json();

        setJobs(jobsData);
        setApplications(appsData);
        
        // Simulate a readiness score based on number of applications or random for now
        setReadinessScore(Math.floor(Math.random() * 20) + 70); 

      } catch (err) {
        console.error('Failed to fetch dashboard data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router, API_URL]);

  const filteredJobs = jobs.filter(job => 
    job.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.companyId?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredApps = applications.filter(app => 
    app.jobId?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const readinessData = [{ name: 'Ready', value: readinessScore }, { name: 'Gap', value: 100 - readinessScore }];

  if (loading) {
    return (
      <div className="flex-center" style={{ height: '100vh', flexDirection: 'column', gap: '1rem' }}>
        <Loader2 className="animate-spin" size={40} color="#00283e"/>
        <p>Loading your AI insights...</p>
      </div>
    );
  }

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
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => {
            localStorage.clear();
            router.push('/login');
          }}>Logout</button>
        </div>
      </aside>

      <div className="main-area">
        {/* Header */}
        <header className="topbar">
          <div className="search-bar">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search jobs, roles, or companies..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Bell size={20} color="#64748b"/>
            <HelpCircle size={20} color="#64748b"/>
            <button className="btn btn-primary" style={{ gap: '0.5rem', borderRadius: '20px' }}>
              <Bot size={18}/> AI Chatbot
            </button>
            <div style={{ background: '#e2e8f0', borderRadius: '50%', padding: '0.5rem' }} title={userName}><User size={20} color="#00283e"/></div>
          </div>
        </header>

        {/* Content */}
        <main className="content-wrapper">
          <div className="flex-between" style={{ marginBottom: '2rem' }}>
            <div>
              <h1 className="section-title">{userName}'s Dashboard</h1>
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
                  <h2 style={{ fontSize: '2.5rem', margin: 0, color: '#00283e' }}>{readinessScore}%</h2>
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
                <h3>AI Job Recommendations <span className="badge badge-teal" style={{ marginLeft: '1rem' }}>UPDATED LIVE</span></h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {filteredJobs.length > 0 ? filteredJobs.map(job => (
                  <div key={job._id} className="flex-between">
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div style={{ width: '40px', height: '40px', background: '#e0f2fe', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#0284c7' }}><Building2 size={20}/></div>
                      <div>
                        <h4 style={{ margin: 0 }}>{job.title}</h4>
                        <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{job.companyId?.name || 'Partner Company'} • {job.location || 'Punjab'}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ color: '#0f766e', fontWeight: 'bold' }}>{Math.floor(Math.random() * 10) + 85}% Match</span>
                        <p style={{ fontSize: '0.7rem', color: '#64748b', margin: 0 }}>Ready to apply</p>
                      </div>
                      <div style={{ background: '#f1f5f9', padding: '0.5rem', borderRadius: '6px', cursor: 'pointer' }}><ChevronRight size={16}/></div>
                    </div>
                  </div>
                )) : <p style={{ color: '#64748b', textAlign: 'center' }}>No matching jobs found.</p>}
              </div>
            </div>

            {/* Application Tracker */}
            <div className="card card-dark" style={{ border: 'none' }}>
              <h3 style={{ marginBottom: '2rem' }}>Application Tracker</h3>
              
              <div style={{ borderLeft: '2px solid #004b73', marginLeft: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                {filteredApps.length > 0 ? filteredApps.map((app, idx) => (
                  <div key={app._id} style={{ marginBottom: '2.5rem', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-43px', top: '0', background: app.status === 'Applied' ? '#0ea5e9' : '#0f766e', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      {app.status === 'Applied' ? <Hourglass size={12} color="white"/> : <CheckCircle2 size={12} color="white"/>}
                    </div>
                    <div>
                      <h4 style={{ margin: 0 }}>{app.status}</h4>
                      <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>{app.jobId?.title || 'Unknown Job'}</p>
                      <span style={{ background: '#004b73', fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>AI SCORE: {app.aiScore}</span>
                    </div>
                  </div>
                )) : (
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>No active applications found.</div>
                )}
                
                {/* Visual indicator for end of timeline */}
                <div style={{ position: 'absolute', left: '-11px', bottom: '-20px', background: '#004b73', width: '2px', height: '20px' }}></div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
