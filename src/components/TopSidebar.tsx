import { useState, Component } from 'react';
import '../css/components/topsidebar.css';


const SidebarItem: any = () => {
  const [sidebarItem, setSidebarItem] = useState<Array<string | SVGAElement>>(['Blog', 'Projects', 'Github']);
  return (
    sidebarItem.map((item: string | SVGElement, index: number) => {
      if (item as SVGAElement) {
        <li key={index}>{item}</li>
      } else {
        return (
          <li key={index}>{item}</li>
        )
      }
    })
  )
}

const TopsideBar = () => {
  return (
    <div className="top-side-bar">
      <ul>
        <SidebarItem />
      </ul>
    </div>
  )
}

export default TopsideBar;