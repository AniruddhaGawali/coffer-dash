import Navbar from '@/components/navbar';
import { Tabs, FadeInDiv } from '@/components/ui/tabs';
import React from 'react';

type Props = {};

function Dashboard({}: Props) {
  return (
    <main className="relative flex items-center justify-center flex-col">
      <Navbar />
      <Tabs
        activeTabClassName="bg-primary-foreground"
        tabs={[
          {
            title: 'Tab 1',
            value: 'tab1',
            content: (
              <div className="w-full h-screen bg-primary-foreground rounded-md shadow-md border"></div>
            ),
          },
          {
            title: 'Tab 2',
            value: 'tab2',
            content: (
              <div className="w-full h-screen bg-primary-foreground rounded-md shadow-md border"></div>
            ),
          },
          {
            title: 'Tab 3',
            value: 'tab3',
            content: (
              <div className="w-full h-screen bg-primary-foreground rounded-md shadow-md border"></div>
            ),
          },
        ]}
      />
    </main>
  );
}

export default Dashboard;
