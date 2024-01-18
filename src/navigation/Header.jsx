import './HeaderTabs.css'

function Header({ tabs, currentTab, onTabClick }) {
    return (
        <header>
            <div className="header-tabs">
                <div className="header-tabs-list">
                    {tabs.map(({ id, name }) => {
                        const isActiveValue = currentTab.id === id
                        return (
                            <button
                                key={id}
                                id={id}
                                type="button"
                                onClick={() => onTabClick({ id, name })}
                                className={[
                                    'header-tabs-list-item',
                                    isActiveValue &&
                                        'header-tabs-list-item--active',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                {name}
                            </button>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header
