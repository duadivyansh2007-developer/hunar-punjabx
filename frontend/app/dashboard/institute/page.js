'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Briefcase, Building, Building2, Target, BarChart2, Settings, HelpCircle, Bell, Search, Bot, User, Filter, ChevronRight, TrendingUp, Loader2 } from 'lucide-react';

export default function InstituteDashboard() {
  const [instituteName, setInstituteName] = useState('Institute');
  const [drives, setDrives] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const storedName = localStorage.getItem('name');

    if (!token || role !== 'institute') {
      router.push('/login');
      return;
    }

    if (storedName) setInstituteName(storedName);

    const fetchDrives = async () => {
      try {
        const res = await fetch(`${API_URL}/api/drives`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        setDrives(data);
      } catch (err) {
        console.error('Failed to fetch drives', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDrives();
  }, [router, API_URL]);

  const filteredDrives = drives.filter(drive => 
    drive.companyName?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    drive.role?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex-center" style={{ height: '100vh', flexDirection: 'column', gap: '1rem' }}>
        <Loader2 className="animate-spin" size={40} color="#00283e"/>
        <p>Syncing placement data...</p>
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
              placeholder="Search drives, companies, or roles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Bell size={20} color="#64748b"/>
            <HelpCircle size={20} color="#64748b"/>
            <button className="btn btn-primary" style={{ gap: '0.5rem', borderRadius: '20px', background: '#d15112' }}>
              <Bot size={18}/> AI Chatbot
            </button>
            <div style={{ background: '#e2e8f0', borderRadius: '50%', padding: '0.5rem' }} title={instituteName}><User size={20} color="#00283e"/></div>
          </div>
        </header>

        {/* Content */}
        <main className="content-wrapper">
          <div style={{ marginBottom: '2rem' }}>
            <h1 className="section-title">{instituteName} Dashboard</h1>
            <p style={{ color: '#0f766e', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
              <Target size={16} fill="#0f766e"/> AI Insights: Readiness scores for Batch 2024 have increased by 14% this week.
            </p>
          </div>

          <div className="grid-2" style={{ marginBottom: '2rem' }}>
            {/* Batch Health Score */}
            <div className="card">
               <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>Overall AI Readiness</p>
               <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Batch Health Score</h3>
               <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', marginBottom: '2rem' }}>
                  <h1 style={{ fontSize: '4rem', color: '#00283e', margin: 0, lineHeight: 1 }}>84</h1>
                  <span style={{ fontSize: '1.5rem', color: '#64748b', paddingBottom: '0.5rem' }}>/100</span>
               </div>
               <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                 <span className="badge badge-teal" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>↗ +2.4%</span>
                 <span style={{ color: '#64748b', fontSize: '0.85rem' }}>vs last month</span>
               </div>
            </div>

            {/* Applicant Funnel */}
            <div className="card">
               <div className="flex-between" style={{ marginBottom: '2rem' }}>
                 <h3>Applicant Funnel</h3>
                 <span className="badge badge-gray">Batch 2024</span>
               </div>
               
               <div style={{ display: 'flex', gap: '1rem', height: '100px', alignItems: 'flex-end', marginBottom: '2rem' }}>
                 <div style={{ flex: 1 }}>
                   <div style={{ background: '#7dd3fc', height: '100%', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#00283e', fontWeight: 'bold' }}>1,240</div>
                   <p style={{ textAlign: 'center', fontSize: '0.7rem', color: '#64748b', marginTop: '0.5rem' }}>TOTAL</p>
                 </div>
                 <div style={{ flex: 1 }}>
                   <div style={{ background: '#004b73', height: '60%', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>742</div>
                   <p style={{ textAlign: 'center', fontSize: '0.7rem', color: '#64748b', marginTop: '0.5rem' }}>SHORTLISTED</p>
                 </div>
                 <div style={{ flex: 1 }}>
                   <div style={{ background: '#0f766e', height: '33%', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>410</div>
                   <p style={{ textAlign: 'center', fontSize: '0.7rem', color: '#64748b', marginTop: '0.5rem' }}>PLACED</p>
                 </div>
               </div>

               <div className="flex-between" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Shortlist Rate</p>
                    <h4 style={{ fontSize: '1.1rem', color: '#00283e' }}>59.8%</h4>
                  </div>
                  <div style={{ width: '1px', background: '#e2e8f0', height: '40px' }}></div>
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Final Placement</p>
                    <h4 style={{ fontSize: '1.1rem', color: '#0f766e' }}>33.1%</h4>
                  </div>
               </div>
            </div>
          </div>

          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
            {/* Skill Heatmap Container (Mock UI grid mapping) */}
            <div className="card">
              <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
                 <div>
                    <h3>Skill Heatmap</h3>
                    <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Departmental Proficiency Density</p>
                 </div>
                 <Filter size={20} color="#94a3b8"/>
              </div>
              
              {/* Fake UI Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                 <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#64748b' }}>FULL STACK</span>
                 <div style={{ display: 'flex', gap: '4px' }}>
                   {[1,2,3,4,5,6].map(i => <div key={i} style={{ width: '24px', height: '24px', background: i < 3 ? '#0f766e' : i < 5 ? '#5eead4' : '#ccfbf1', borderRadius: '4px' }}></div>)}
                 </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                 <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#64748b' }}>DATA SCI</span>
                 <div style={{ display: 'flex', gap: '4px' }}>
                   {[1,2,3,4,5,6].map(i => <div key={i} style={{ width: '24px', height: '24px', background: i < 3 ? '#cbd5e1' : i < 5 ? '#004b73' : '#e2e8f0', borderRadius: '4px' }}></div>)}
                 </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                 <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#64748b' }}>UI/UX DEV</span>
                 <div style={{ display: 'flex', gap: '4px' }}>
                   {[1,2,3,4,5,6].map(i => <div key={i} style={{ width: '24px', height: '24px', background: i < 3 ? '#d15112' : i < 5 ? '#fed7aa' : '#ffedd5', borderRadius: '4px' }}></div>)}
                 </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', fontSize: '0.7rem', color: '#64748b', justifyContent: 'center' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: '10px', height: '10px', background: '#0f766e' }}></div> PLACED</div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: '10px', height: '10px', background: '#004b73' }}></div> READY</div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: '10px', height: '10px', background: '#d15112' }}></div> IN-TRAINING</div>
              </div>
            </div>

            {/* Active Placement Drives */}
            <div className="card">
               <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
                 <h3>Active Placement Drives</h3>
                 <span style={{ color: '#0ea5e9', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer' }}>View All →</span>
               </div>

               <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ color: '#64748b', fontSize: '0.8rem', borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ paddingBottom: '1rem' }}>COMPANY</th>
                      <th style={{ paddingBottom: '1rem' }}>ROLE</th>
                      <th style={{ paddingBottom: '1rem' }}>APPLICANTS</th>
                      <th style={{ paddingBottom: '1rem' }}>DEADLINE</th>
                      <th style={{ paddingBottom: '1rem' }}>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDrives.length > 0 ? filteredDrives.map(drive => (
                      <tr key={drive._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <div style={{ width: '32px', height: '32px', background: '#f1f5f9', borderRadius: '6px', flexShrink: 0 }} className="flex-center"><Building2 size={16}/></div>
                          <div>
                            <strong style={{ display: 'block', fontSize: '0.9rem' }}>{drive.companyName}</strong>
                            <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Industry Partner</span>
                          </div>
                        </td>
                        <td style={{ fontSize: '0.9rem' }}>{drive.role}</td>
                        <td style={{ padding: '1rem 0' }}>
                          <div style={{ width: '50px', background: '#e2e8f0', borderRadius: '12px', padding: '0.2rem', fontSize: '0.7rem', textAlign: 'center' }}>+{Math.floor(Math.random() * 100) + 10}</div>
                        </td>
                        <td style={{ fontSize: '0.85rem', color: '#d15112', fontWeight: '500' }}>{new Date(drive.endDate).toLocaleDateString()}</td>
                        <td><span className="badge badge-teal">Live</span></td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>No placement drives found.</td>
                      </tr>
                    )}
                  </tbody>
               </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
