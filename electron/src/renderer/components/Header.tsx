export function Header() {
  return (
    <header className="title-bar">
      <div className="title-bar__left">
        <span className="title-bar__icon" aria-hidden="true">◇</span>
      </div>
      <div className="title-bar__right">
        <button className="title-bar__btn" aria-label="Minimize" title="Minimize">
          ─
        </button>
        <button className="title-bar__btn" aria-label="Maximize" title="Maximize">
          □
        </button>
        <button className="title-bar__btn title-bar__btn--close" aria-label="Close" title="Close">
          ✕
        </button>
      </div>
    </header>
  );
}
