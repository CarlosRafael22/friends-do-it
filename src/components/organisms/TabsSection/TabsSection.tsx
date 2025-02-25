"use client"

import { createContext, useContext, useState, Dispatch, SetStateAction, useEffect } from "react";

type TabsSectionContextProps = {
  selectedTabValue: string;
  setSelectedTabValue: Dispatch<SetStateAction<string>>
}

const initialTabsSectionContext: TabsSectionContextProps = {
    selectedTabValue: '',
    setSelectedTabValue: () => { console.log('clicked')}
};

const TabsSectionContext = createContext(initialTabsSectionContext);

const useTabsSectionContext = (): TabsSectionContextProps => {
  const context = useContext(TabsSectionContext);
  if (context === undefined) {
    throw new Error('useTabsSectionContext must be used within a TabsSectionProvider');
  }
  return context;
}

type TabsSectionProvider = {
  children: React.ReactNode
}

const TabsSectionProvider = ({ children }: TabsSectionProvider) => {
    const [selectedTabValue, setSelectedTabValue] = useState('');

    return (
        <TabsSectionContext.Provider value={{ selectedTabValue, setSelectedTabValue }}>
            {children}
        </TabsSectionContext.Provider>
    )
};

type TabConfig = {
    value: string;
    title: string;
};

export type TabsSectionConfig = {
    searchParamKey: string;
    tabs: TabConfig[];
}

type TabsSectionProps = {
    children: React.ReactNode;
}

const TabsSection = ({ children }: TabsSectionProps) => (
    <TabsSectionProvider>
        {children}
    </TabsSectionProvider>
);

type TabsProps = {
    config: TabsSectionConfig;
}

export const TabsSectionTabs = ({ config }: TabsProps) => {
    const { tabs } = config;
    const { selectedTabValue, setSelectedTabValue } = useTabsSectionContext();

    useEffect(() => {
        setSelectedTabValue(tabs[0].value);
    }, []);
    const getActiveTabStyle = (view: string) => selectedTabValue === view ? "bg-white text-black" : "bg-gray-100 text-gray-500 border hover:bg-gray-200";
    
    return (
        <>
            <div className="flex mb-2 m-auto w-5/6 md:w-96" role="tablist">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            aria-label={tab.title}
                            className={`flex-1 py-2 px-4 text-center rounded ${getActiveTabStyle(tab.value)}`}
                            onClick={() => {setSelectedTabValue(tab.value)}}
                            role="tab"
                            id={`tab${index}`}
                        >
                            {tab.title}
                        </button>
                    ))}
            </div>
        </>
    );
};

type PanelProps = {
    value: string;
    children: React.ReactNode;
};

export const TabsSectionPanel = ({ value, children }: PanelProps) => {
    const { selectedTabValue } = useTabsSectionContext();
    return (
        <div
            role="tabpanel"
            hidden={selectedTabValue !== value}
            id={`simple-tabpanel-${value}`}
            aria-labelledby={`simple-tab-${value}`}
        >
        {value === selectedTabValue && (children)}
        </div>
    )
}

export default TabsSection;