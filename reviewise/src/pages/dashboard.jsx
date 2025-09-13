// src/components/Dashboard.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FileText,
  CheckCircle,
  PieChart,
  Shield,
  Monitor
} from 'lucide-react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const [dashboardStats] = useState({
    fakeReviews: 25,
    totalAnalyses: 134,
    suspiciousPercentage: 14,
    protectedListings: 10
  });

  const [activities] = useState([
    "Detection run finished",
    "Review flagged as fake",
    "Suspicious reviews found in",
    "Detection run Started",
    "Analysis settings updated"
  ]);

  const [recentAnalyses] = useState([
    { listing: "Widget co.", date: "May 21,2025", suspicious: "12%" },
    { listing: "LMN Goods", date: "May 17,2025", suspicious: "16%" },
    { listing: "E-shop.", date: "Apr 20,2025", suspicious: "9%" }
  ]);

  const chartData = [
    { name: 'Genuine', value: 86, color: '#2196F3' },
    { name: 'Suspicious', value: 14, color: '#87CEEB' }
  ];

  const navigate = useNavigate();

  return (
    <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2em', marginBottom: '10px' }}>User Dashboard</h1>
        <p style={{ color: '#555' }}>Review your recent activity and perform new analyses.</p>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={cardStyle()}>
          <FileText size={40} />
          <div>
            <div style={numberStyle()}>{dashboardStats.fakeReviews}</div>
            <div style={labelStyle()}>Fake Reviews Detected</div>
          </div>
        </div>

        <div style={cardStyle('#e3f2fd')}>
          <CheckCircle size={40} />
          <div>
            <div style={numberStyle()}>{dashboardStats.totalAnalyses}</div>
            <div style={labelStyle()}>Total Analyses</div>
          </div>
        </div>

        <div style={cardStyle()}>
          <PieChart size={40} />
          <div>
            <div style={numberStyle()}>{dashboardStats.suspiciousPercentage}%</div>
            <div style={labelStyle()}>Suspicious Reviews</div>
          </div>
        </div>

        <div style={cardStyle()}>
          <Shield size={40} />
          <div>
            <div style={numberStyle()}>{dashboardStats.protectedListings}</div>
            <div style={labelStyle()}>Protected Listings</div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        {/* Activity Section */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3>Activity</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {activities.map((activity, index) => (
              <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#2196F3',
                  marginRight: '10px'
                }}></div>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Content */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Monitor size={24} />
              <h3>Analyze Reviews</h3>
            </div>
            <p>Perform a new fake review detection analysis</p>
            <button style={buttonStyle()} onClick={()=>navigate('/analyze')}>Run analysis</button>
          </div>

          <div>
            <h3>Statistics</h3>
            <div style={{ height: '200px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            
          </div>
        </div>
      </div>

      {/* Recent Analyses Table */}
      <div style={{ marginTop: '40px' }}>
        <h3>Recent Analyses</h3>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '10px',
          backgroundColor: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.05)'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#e3f2fd' }}>
              <th style={tableHeaderStyle()}>Listing</th>
              <th style={tableHeaderStyle()}>Date</th>
              <th style={tableHeaderStyle()}>Suspicious</th>
            </tr>
          </thead>
          <tbody>
            {recentAnalyses.map((analysis, index) => (
              <tr key={index}>
                <td style={tableCellStyle()}>{analysis.listing}</td>
                <td style={tableCellStyle()}>{analysis.date}</td>
                <td style={tableCellStyle()}>{analysis.suspicious}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 🔧 Styling Helpers
const cardStyle = (bg = '#fff') => ({
  backgroundColor: bg,
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
});

const numberStyle = () => ({
  fontSize: '1.5em',
  fontWeight: 'bold'
});

const labelStyle = () => ({
  color: '#555'
});

const buttonStyle = () => ({
  padding: '10px 20px',
  backgroundColor: '#2196F3',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  marginTop: '10px'
});

const tableHeaderStyle = () => ({
  padding: '12px',
  textAlign: 'left',
  fontWeight: 'bold',
  borderBottom: '1px solid #ccc'
});

const tableCellStyle = () => ({
  padding: '12px',
  borderBottom: '1px solid #eee'
});

export default Dashboard;
