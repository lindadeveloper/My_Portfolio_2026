import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function CryptoDashboard() {
  return (
    <div className="content-container">
      <Link to="../projects" className="back-btn">
        <ChevronLeft /> Back to all Projects
      </Link>
      <h1 className="project-title">Crypto Dashboard</h1>
      <div className="live-demo-github-link-wrapper">
        <a href="" alt="Live Demo" className="live-demo-github">
          Live Demo
        </a>
        <span>|</span>
        <a href="" alt="GitHub Link" className="live-demo-github">
          GitHub
        </a>
        <span>|</span>
        <p>A Crypto Dashboard</p>
      </div>
      <p className="p-default project-p">Coming Soon!...</p>
      {/* <ul className="p-default project-p">
        <h2>Coming soon!...</h2>
        <br />
        <li>✔ Search + Filtering</li>
        <li>✔ Responsive Design</li>
        <li>✔ Loading Skeletons</li>
        <li>✔ Error handling (API failures)</li>
        <li>✔ Data storage (firebabse or localStorage)</li>
        <li>✔ Watchlist System</li>
        <li>✔ Charts</li>
        <li>✔ Coin Detail PAges</li>
        <li>✔ Price Alerts</li>
        <li>✔ Dark Mode</li>
      </ul>
      Features Ideas:
        Functions:
        click ⭐ to save coins
        view saved coins list
        remove coins
        
        User Flow:
        User opens app → sees top coins
        Searches “Ethereum”
        Clicks coin → sees chart + stats
        Clicks ⭐ → saves to watchlist
        Opens watchlist → sees saved coins 

        React (or Next.js if you want bonus points)
        Tailwind CSS (fast UI building)
        Chart.js / Recharts

        CoinGecko API
        
        Optional: Firebase / Supabase (for auth + watchlist) */}
    </div>
  );
}
