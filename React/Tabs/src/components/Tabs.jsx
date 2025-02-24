import React, {useState} from "react";

const Tabs = ({items}) => {
    const [activeTabs, setActiveTabs] = useState(0)

    return(
        <div>
            <div className="tab-headers">
                {items.map((item, index) => (
                    <button key={index} className={`tab-header ${index === activeTabs ? 'active' : ''}`} onClick={() => setActiveTabs(index)}>{index.label}</button>
                ))}
            </div>
            <div className="tab-content">
                {items[activeTabs].content}
            </div>
        </div>
    )
}

export default Tabs