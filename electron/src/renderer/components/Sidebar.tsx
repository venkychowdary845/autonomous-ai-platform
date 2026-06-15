export function Sidebar() {
  return (
    <aside className="app-sidebar" aria-label="Primary navigation">
      {/* Top navigation */}
      <nav className="sidebar-nav">
        <div className="sidebar-nav-item">
          <span className="sidebar-nav-item__icon" aria-hidden="true">✏️</span>
          New chat
        </div>
        <div className="sidebar-nav-item">
          <span className="sidebar-nav-item__icon" aria-hidden="true">🔍</span>
          Search
        </div>
        <div className="sidebar-nav-item">
          <span className="sidebar-nav-item__icon" aria-hidden="true">🧩</span>
          Plugins
        </div>
        <div className="sidebar-nav-item">
          <span className="sidebar-nav-item__icon" aria-hidden="true">⚡</span>
          Automations
        </div>
        <div className="sidebar-nav-item">
          <span className="sidebar-nav-item__icon" aria-hidden="true">📱</span>
          Codex mobile
        </div>
      </nav>

      {/* Pinned section */}
      <div className="sidebar-section">
        <div className="sidebar-section__title">Pinned</div>
      </div>

      {/* Projects section */}
      <div className="sidebar-section">
        <div className="sidebar-section__title">Projects</div>
      </div>

      {/* Footer - Settings */}
      <div className="sidebar-footer">
        <div className="sidebar-nav-item">
          <span className="sidebar-nav-item__icon" aria-hidden="true">⚙️</span>
          Settings
        </div>
      </div>
    </aside>
  );
}
