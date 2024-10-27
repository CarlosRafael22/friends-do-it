"use client"

import { useState } from "react";
import PlansPage from "../PlansPage/PlansPage";
import GoalsPage from "../GoalsPage/GoalsPage";
import { mockedGoal } from "@/mocks/goal";
import { mockedPlanWithUsers } from "@/mocks/plan";
import UserIcon from "@/atoms/Icon/UserIcon";

const TABS = [
    {
        title: "Plans" as const,
        component: PlansPage
    },
    {
        title: "Goals" as const,
        component: GoalsPage
    },
];

const TABS_WITH_ONLY_TITLE = TABS.map(tab => ({ title: tab.title }));

type Tab = {
    title: string
};

type TabsSectionProps = {
    tabs: Tab[];
    activeTab: Tab,
    onClickHandler: (tab: Tab) => void
}

const TabsSection = ({ tabs, activeTab, onClickHandler }: TabsSectionProps) => {
    const getActiveTabStyle = (tabTitle: string) => activeTab.title === tabTitle ? "bg-white text-black" : "bg-gray-100 text-gray-500 border hover:bg-gray-200";

    return (
        <div className="flex mb-2 m-auto w-5/6 md:w-96">
            {tabs.map(tab => (
                <button
                    className={`flex-1 py-2 px-4 text-center rounded ${getActiveTabStyle(tab.title)}`}
                    onClick={()  => onClickHandler(tab)}
                >
                    {tab.title}
                </button>
            ))}
      </div>
    );
};

type ActiveTabSectionProps = {
    activeTab: typeof TABS[number]
}

const ActiveTabSection = ({ activeTab }: ActiveTabSectionProps) => {
    const goals = new Array(3).fill(mockedGoal);
    const plans = new Array(3).fill(mockedPlanWithUsers);

    if (activeTab.title === TABS[0].title) {
        return (
            <PlansPage plans={plans} />
        );
    }

    if (activeTab.title === TABS[1].title) {
        return (
            <GoalsPage goals={goals} />
        );
    }
}

const GroupPage = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const handleTabSelection = (selectedTab: Tab) => {
    const tab = TABS.find(tabWithComponent => tabWithComponent.title === selectedTab.title);
    tab && setActiveTab(tab);
  }
  // const tabsWithTitleOnly = TABS.map(tab => ({ title: tab.title }));
  console.log('ACTIVE TAB: ', activeTab)

  return (
    <div className="mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Munich bunch</h1>
        <div className="flex justify-center mb-6 space-x-2">
            {[...Array(6)].map((_, i) => (
            <UserIcon key={i} />
            ))}
        </div>
        <TabsSection tabs={TABS_WITH_ONLY_TITLE} activeTab={activeTab} onClickHandler={handleTabSelection}/>
        <div>
            <ActiveTabSection activeTab={activeTab} />
        </div>
    </div>
  );
};

export default GroupPage;
