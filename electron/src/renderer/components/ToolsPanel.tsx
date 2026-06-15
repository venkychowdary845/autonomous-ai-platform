const tools = [
  { name: 'Review', shortcut: 'Ctrl+Shift+G', icon: '📋' },
  { name: 'Terminal', shortcut: '', icon: '⬛' },
  { name: 'Browser', shortcut: 'Ctrl+T', icon: '🌐' },
  { name: 'Files', shortcut: 'Ctrl+P', icon: '📁' },
] as const;

export function ToolsPanel() {
  return (
    <aside className="tools-panel" aria-label="Workspace tools">
      <div className="tools-panel__top">
        <button className="tools-panel__layout-btn" aria-label="Expand" title="Expand">
          ⬜
        </button>
        <button className="tools-panel__layout-btn" aria-label="Split" title="Split">
          ▢
        </button>
        <button className="tools-panel__layout-btn" aria-label="Grid" title="Grid">
          ⊞
        </button>
      </div>

      {tools.map((tool) => (
        <div className="tool-item" key={tool.name}>
          <div className="tool-item__left">
            <span className="tool-item__icon" aria-hidden="true">
              {tool.icon}
            </span>
            {tool.name}
          </div>
          {tool.shortcut && (
            <span className="tool-item__shortcut">{tool.shortcut}</span>
          )}
        </div>
      ))}
    </aside>
  );
}
