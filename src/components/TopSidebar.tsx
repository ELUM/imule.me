import { useState, Component } from 'react';
import '../css/components/topsidebar.css';


const SidebarItem: any = () => {
  const [sidebarItem, setSidebarItem] = useState<Array<string | SVGAElement>>(['Blog', 'Projects', 'Github']);
  return (
    sidebarItem.map((item:SVGElement, index: number) => {
      return (item as string ? <li key={index}>{item}</li> : <li key={index}>{item}</li>)
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