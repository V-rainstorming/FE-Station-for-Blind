function Bus({busColor}) {
    return (
        <svg width="30" height="30" viewBox="0 0 178 171" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="18.9814" y="2.5" width="140.037" height="148.607" rx="27.5" fill={busColor} stroke={busColor} stroke-width="5"/>
            <rect x="23.7333" y="28.3481" width="131.852" height="65.2667" fill="#fff"/>
            <rect x="52.7407" y="6.59253" width="72.5185" height="16.4815" rx="4" fill="#fff"/>
            <rect x="31.6444" y="142.4" width="16.4815" height="28.3481" rx="8.24074" fill={busColor}/>
            <rect x="130.533" y="142.4" width="16.4815" height="28.3481" rx="8.24074" fill={busColor}/>
            <circle cx="48.4556" cy="120.974" r="8.24074" fill="#fff"/>
            <circle cx="130.204" cy="121.633" r="8.24074" fill="#fff"/>
            <rect y="23.074" width="13.1852" height="21.0963" rx="6.59259" fill={busColor}/>
            <rect x="164.815" y="25.0518" width="13.1852" height="21.0963" rx="6.59259" fill={busColor}/>
            <line x1="7.25183" y1="23.8704" x2="17.1407" y2="23.8704" stroke={busColor} stroke-width="5"/>
            <line x1="160.859" y1="25.8481" x2="170.748" y2="25.8481" stroke={busColor} stroke-width="5"/>
            <circle cx="130.533" cy="96.911" r="15.163" fill={busColor}/>
            <line x1="75.1777" y1="122.6" x2="102.822" y2="122.6" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
            <line x1="75.1777" y1="127.874" x2="102.822" y2="127.874" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
            <line x1="75.1777" y1="133.148" x2="102.822" y2="133.148" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
            <line x1="75.1777" y1="138.422" x2="102.822" y2="138.422" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
        </svg>
    );
}

export default Bus;