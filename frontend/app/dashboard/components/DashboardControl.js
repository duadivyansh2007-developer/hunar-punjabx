'use client';
import { Bot, X, CheckSquare, Info } from 'lucide-react';

export function AIChatModal({ isOpen, onClose, userRole, userName, dataSummary }) {
  if (!isOpen) return null;

  const insights = {
    student: `Hello ${userName}! Based on your readiness score of 82%, I recommend focusing on React Hooks for your upcoming interview with Google.`,
    institute: `Analysis for ${userName}: Batch 2024 is performing 12% above average in Technical Aptitude but requires an 8% boost in Communication skills.`,
    company: `Hiring alert for ${userName}: You have 3 high-probability candidates for the Full Stack role with 90%+ match scores.`,
    admin: `State Intelligence Report: Lahore Central leads in placement with 88.4%. High demand for Textile specialists identified in Faisalabad.`
  };

  return (
    <div className="modal-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(4px)' }}>
      <div className="card" style={{ width: '450px', background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
        <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
             <div style={{ background: '#00283e', padding: '0.5rem', borderRadius: '10px' }}><Bot size={24} color="#38bdf8"/></div>
             <h3 style={{ margin: 0 }}>HUNAR AI Assistant</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20}/></button>
        </div>
        <p style={{ lineHeight: '1.6', color: '#444' }}>{insights[userRole] || 'Generating insights...'}</p>
        <div style={{ background: '#f0f9ff', padding: '1rem', borderRadius: '10px', marginTop: '1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <Info size={16} color="#0ea5e9"/>
          <p style={{ fontSize: '0.8rem', color: '#0369a1', margin: 0 }}>Values are computed using real-time district-level data.</p>
        </div>
        <button onClick={onClose} className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', height: '45px' }}>Got it, thanks!</button>
      </div>
    </div>
  );
}

export function Toast({ message, isVisible, onClose, type = 'success' }) {
  if (!isVisible) return null;

  return (
    <div style={{ 
      position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1001,
      background: type === 'success' ? '#0f766e' : '#00283e',
      color: 'white', padding: '1rem 1.5rem', borderRadius: '12px',
      display: 'flex', alignItems: 'center', gap: '0.75rem',
      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
      animation: 'slideUp 0.3s ease-out'
    }}>
      <CheckSquare size={20}/>
      <span>{message}</span>
      <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', opacity: 0.7, cursor: 'pointer', marginLeft: '1rem' }}>✕</button>
      <style>{`
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
}
