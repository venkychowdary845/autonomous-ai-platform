export function Dashboard() {
  return (
    <>
      {/* Content Tabs */}
      <div className="content-tabs">
        <div className="content-tabs__left">
          <div className="content-tab content-tab--active">
            <span className="content-tab__icon" aria-hidden="true">💬</span>
            Chat
          </div>
          <div className="content-tab">
            <span className="content-tab__icon" aria-hidden="true">🔧</span>
            AI Workflow
          </div>
        </div>
        <div className="content-tabs__right">
          <div className="theme-toggle">
            <span className="theme-toggle__indicator theme-toggle__indicator--active" aria-hidden="true">☀</span>
            <span className="theme-toggle__indicator" aria-hidden="true">☾</span>
            <span className="theme-toggle__arrow" aria-hidden="true">▾</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <section className="dashboard" aria-labelledby="dashboard-title">
        <h2 id="dashboard-title" className="dashboard-heading">
          What should we build in Ai work?
        </h2>

        {/* Chat Input */}
        <div className="chat-input-box">
          <input
            className="chat-input__field"
            type="text"
            placeholder="Do anything..."
            readOnly
          />
          <div className="chat-input__actions">
            <button className="chat-input__btn" aria-label="Add attachment" title="Add attachment">
              +
            </button>
            <div className="chat-input__access">
              <span className="chat-input__access-icon" aria-hidden="true">🛡</span>
              Full access
              <span className="chat-input__access-arrow" aria-hidden="true">▾</span>
            </div>
            <div className="chat-input__right">
              <button className="chat-input__mic" aria-label="Voice input" title="Voice input">
                🎤
              </button>
              <button className="chat-input__send" aria-label="Send" title="Send">
                ↑
              </button>
            </div>
          </div>
          <div className="chat-context">
            <div className="context-tag">
              <span className="context-tag__icon" aria-hidden="true">📁</span>
              Ai work
              <span className="context-tag__arrow" aria-hidden="true">▾</span>
            </div>
            <div className="context-tag">
              <span className="context-tag__icon" aria-hidden="true">📁</span>
              Work locally
              <span className="context-tag__arrow" aria-hidden="true">▾</span>
            </div>
            <div className="context-tag">
              <span className="context-tag__icon" aria-hidden="true">🔀</span>
              master
              <span className="context-tag__arrow" aria-hidden="true">▾</span>
            </div>
          </div>
        </div>

        {/* Activity Items */}
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-item__icon" aria-hidden="true">🔄</span>
            Trim the renderer back to Sindhu&apos;s exact Day 1 deliverable
          </div>
          <div className="activity-item">
            <span className="activity-item__icon" aria-hidden="true">🌐</span>
            Connect your favorite apps to Codex
          </div>
        </div>
      </section>
    </>
  );
}
