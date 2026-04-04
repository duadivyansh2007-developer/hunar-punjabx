'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Briefcase, Building, Target, BarChart2, Settings, HelpCircle, Bell, Search, Bot, User, Download, Users, TrendingUp, AlertTriangle, Info, Loader2 } from 'lucide-react';
import { AIChatModal, Toast } from '../components/DashboardControl';

export default function AdminDashboard() {
  const [adminName, setAdminName] = useState('Admin');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('Overview');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });
  const router = useRouter();

  const institutes = [
    { rank: '01', inst: 'PVT', name: 'Punjab Vocational Training', spec: 'Excellence in IT & Robotics', score: '94.8' },
    { rank: '02', inst: 'TEV', name: 'TEVTA Multan College', spec: 'Specialized in Mechanical Eng', score: '91.2', bg: '#ccfbf1' },
    { rank: '03', inst: 'GTI', name: 'Govt. Technical Institute', spec: 'Industrial Electronics Leader', score: '88.5', bg: '#ffedd5' }
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const storedName = localStorage.getItem('name');

    if (!token || role !== 'admin') {
      router.push('/login');
      return;
    }

    if (storedName) setAdminName(storedName);
    
    // Simulate initial loading for premium feel
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [router]);

  const filteredInstitutes = institutes.filter(inst => 
    inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inst.inst.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex-center" style={{ height: '100vh', flexDirection: 'column', gap: '1rem' }}>
        <Loader2 className="animate-spin" size={40} color="#00283e"/>
        <p>Generating state-wide intelligence...</p>
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
          <div className={`nav-item ${activeSection === 'Overview' ? 'active' : ''}`} onClick={() => setActiveSection('Overview')}><LayoutDashboard size={20}/> Dashboard</div>
          <div className={`nav-item ${activeSection === 'Jobs' ? 'active' : ''}`} onClick={() => setActiveSection('Jobs')}><Briefcase size={20}/> Jobs</div>
          <div className={`nav-item ${activeSection === 'Institutes' ? 'active' : ''}`} onClick={() => setActiveSection('Institutes')}><Building size={20}/> Institutes</div>
          <div className={`nav-item ${activeSection === 'Readiness' ? 'active' : ''}`} onClick={() => setActiveSection('Readiness')}><Target size={20}/> Readiness</div>
          <div className={`nav-item ${activeSection === 'Analytics' ? 'active' : ''}`} onClick={() => setActiveSection('Analytics')}><BarChart2 size={20}/> Analytics</div>
        </div>
        <div style={{ padding: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
          <div className="nav-item" onClick={() => setToast({ visible: true, message: 'Admin Settings accessing...' })}><Settings size={20}/> Settings</div>
          <div className="nav-item" onClick={() => setToast({ visible: true, message: 'Opening Support Portal...' })}><HelpCircle size={20}/> Support</div>
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
              placeholder="Search analytics, districts, or institutes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Bell size={20} color="#64748b" onClick={() => setToast({ visible: true, message: '2 Critical System Alerts.' })} style={{ cursor: 'pointer' }}/>
            <HelpCircle size={20} color="#64748b" onClick={() => setToast({ visible: true, message: 'Admin Helpdesk Online.' })} style={{ cursor: 'pointer' }}/>
            <button className="btn btn-primary" style={{ gap: '0.5rem', borderRadius: '20px' }} onClick={() => setIsChatOpen(true)}>
              <Bot size={18}/> AI Chatbot
            </button>
            <div style={{ background: '#e2e8f0', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer' }} title={adminName} onClick={() => setToast({ visible: true, message: 'Admin profile configuration...' })}><User size={20} color="#00283e"/></div>
          </div>
        </header>

        <main className="content-wrapper">
          {activeSection === 'Overview' ? (
            <>
              <div className="flex-between" style={{ marginBottom: '2rem' }}>
                <div>
                  <h1 className="section-title">State Analytics Overview</h1>
                  <p style={{ color: '#475569' }}>Real-time skill development insights for {adminName}.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button className="btn btn-outline" style={{ background: 'white' }} onClick={() => setToast({ visible: true, message: 'Generating Q3 2024 Report...' })}>📅 Q3 2024 Report</button>
                  <button className="btn btn-teal" onClick={() => setToast({ visible: true, message: 'Preparing raw CSV data export...' })}><Download size={16} style={{ marginRight: '8px' }}/> Export Data</button>
                </div>
              </div>

              <div className="grid-3" style={{ gridTemplateColumns: '2fr 1fr', marginBottom: '2rem' }}>
                {/* Interactive Placement Map Mock */}
                <div className="card" style={{ background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
                  <div className="flex-between" style={{ marginBottom: '1rem', position: 'relative', zIndex: 10 }}>
                    <div>
                      <h3 style={{ color: '#00283e' }}>Interactive Placement Map</h3>
                      <p style={{ fontSize: '0.8rem', color: '#64748b' }}>District-wise employment success rate</p>
                    </div>
                    <div style={{ background: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => setToast({ visible: true, message: 'Syncing live telemetry data...' })}>
                      Live Data <div style={{ width: '8px', height: '8px', background: '#004b73', borderRadius: '50%' }}></div>
                    </div>
                  </div>
                  
                  <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', background: '#e2e8f0', borderRadius: '8px' }}>
                     {/* Map Placeholder Graphic */}
                     <div style={{ width: '100%', height: '100%', opacity: 0.5, backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                     
                     <div className="card" style={{ position: 'absolute', left: '2rem', top: '4rem', padding: '1rem', width: '220px', zIndex: 20, cursor: 'pointer' }} onClick={() => setToast({ visible: true, message: 'Loading Lahore Central district details...' })}>
                        <p style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 'bold', letterSpacing: '1px' }}>LAHORE CENTRAL</p>
                        <h2 style={{ fontSize: '2rem', color: '#00283e', margin: 0 }}>88.4%</h2>
                        <div style={{ width: '100%', height: '4px', background: '#e2e8f0', borderRadius: '2px', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                          <div style={{ width: '88.4%', height: '100%', background: '#004b73', borderRadius: '2px' }}></div>
                        </div>
                        <p style={{ fontSize: '0.7rem', color: '#64748b' }}>Highest performing district this month</p>
                     </div>
                     
                     <div className="card" style={{ position: 'absolute', right: '2rem', bottom: '2rem', padding: '1rem', zIndex: 20, cursor: 'pointer' }} onClick={() => setToast({ visible: true, message: 'Loading Faisalabad district details...' })}>
                        <p style={{ fontSize: '0.7rem', color: '#0f766e', fontWeight: 'bold', letterSpacing: '1px' }}>FAISALABAD</p>
                        <h2 style={{ fontSize: '1.5rem', color: '#00283e', margin: 0 }}>76.2%</h2>
                        <p style={{ fontSize: '0.7rem', color: '#64748b' }}>Industrial placement growth: +12%</p>
                     </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="card card-dark" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Users size={24} style={{ marginBottom: '1rem', color: '#38bdf8' }}/>
                    <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Total Trainees</p>
                    <h2 style={{ fontSize: '3rem', margin: 0 }}>1.2M+</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#3cd0bc', marginTop: '1rem', fontSize: '0.9rem' }}>
                      <TrendingUp size={16}/> 14% increase vs last year
                    </div>
                  </div>

                  <div className="card" style={{ flex: 1, background: '#451a03', color: 'white', border: 'none' }}>
                    <p style={{ color: '#fdba74', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      ✦ AI FORECAST
                    </p>
                    <h3 style={{ fontSize: '1.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Skill Gap Warning: Textile Sector</h3>
                    <p style={{ color: '#d6d3d1', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                      Predictive modeling suggests a 22% labor shortage in Faisalabad textile cluster by Q1 2025.
                    </p>
                    <button className="btn card-peach" style={{ width: '100%', fontWeight: 'bold' }} onClick={() => setToast({ visible: true, message: 'Initiating Curriculum Readjustment Protocol...' })}>Adjust Curriculum</button>
                  </div>
                </div>
              </div>

              <div className="grid-3" style={{ gridTemplateColumns: '2fr 1fr' }}>
                <div className="card">
                   <div className="flex-between" style={{ marginBottom: '2rem' }}>
                     <div>
                       <h3>Institute Ranking</h3>
                       <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Based on placement, quality, and student feedback</p>
                     </div>
                     <span style={{ color: '#004b73', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer' }} onClick={() => setActiveSection('Institutes')}>View All ›</span>
                   </div>
                   
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                     {filteredInstitutes.length > 0 ? filteredInstitutes.map(item => (
                       <div key={item.rank} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', cursor: 'pointer' }} onClick={() => setToast({ visible: true, message: `Accessing data for ${item.name}` })}>
                         <h3 style={{ color: '#cbd5e1', fontSize: '1.5rem' }}>{item.rank}</h3>
                         <div style={{ background: item.bg || '#e0f2fe', color: '#004b73', padding: '0.8rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.8rem' }}>{item.inst}</div>
                         <div style={{ flex: 1 }}>
                           <h4 style={{ color: '#00283e' }}>{item.name}</h4>
                           <p style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.spec}</p>
                         </div>
                         <div style={{ textAlign: 'right' }}>
                           <h3 style={{ color: '#0f766e', margin: 0 }}>{item.score}</h3>
                           <p style={{ fontSize: '0.6rem', color: '#64748b' }}>SCORE</p>
                         </div>
                       </div>
                     )) : <p style={{ color: '#64748b' }}>No institutes found matching your search.</p>}
                   </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444' }}>
                    <AlertTriangle size={20}/> Low Performance Alerts
                  </h3>
                  
                  <div className="card" style={{ background: '#fee2e2', border: '1px solid #fca5a5' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ background: '#ef4444', color: 'white', padding: '0.5rem', borderRadius: '8px', height: 'fit-content' }}><TrendingUp size={20} style={{ transform: 'rotate(180deg)' }}/></div>
                      <div>
                        <h4 style={{ color: '#991b1b', marginBottom: '0.5rem' }}>Rahim Yar Khan - Center 04</h4>
                        <p style={{ fontSize: '0.8rem', color: '#991b1b', marginBottom: '1rem', opacity: 0.8 }}>Placement dropped below 30% for two consecutive months. Urgent review required.</p>
                        <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#991b1b', borderBottom: '1px solid #991b1b', paddingBottom: '2px', cursor: 'pointer' }} onClick={() => setToast({ visible: true, message: 'Audit team dispatched to Center 04.' })}>DISPATCH AUDIT TEAM</span>
                      </div>
                    </div>
                  </div>

                  <div className="card" style={{ background: '#f1f5f9', border: '1px solid #cbd5e1' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ background: '#64748b', color: 'white', padding: '0.5rem', borderRadius: '8px', height: 'fit-content' }}><Info size={20}/></div>
                      <div>
                        <h4 style={{ color: '#334155', marginBottom: '0.5rem' }}>Sargodha Nursing School</h4>
                        <p style={{ fontSize: '0.8rem', color: '#475569', marginBottom: '1rem' }}>Equipment modernization overdue by 180 days. Affecting readiness scores.</p>
                        <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#334155', borderBottom: '1px solid #334155', paddingBottom: '2px', cursor: 'pointer' }} onClick={() => setToast({ visible: true, message: 'Budget allocation request initiated.' })}>ALLOCATE BUDGET</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="card flex-center" style={{ height: '400px', flexDirection: 'column', gap: '1rem' }}>
               <Loader2 className="animate-spin" size={32} color="#00283e"/>
               <h3>{activeSection} Intelligence Loading...</h3>
               <p style={{ color: '#64748b' }}>The AI is currently processing macro-level metrics for this perspective.</p>
               <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => setActiveSection('Overview')}>Return to Dashboard</button>
            </div>
          )}
        </main>
      </div>

      <AIChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        userRole="admin" 
        userName={adminName}
      />
      
      <Toast 
        isVisible={toast.visible} 
        message={toast.message} 
        onClose={() => setToast({ visible: false, message: '' })} 
      />
    </div>
  );
}
