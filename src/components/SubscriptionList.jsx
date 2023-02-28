import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoIosArrowDown } from 'react-icons/io'
import Data from '../data.json'
import { AiOutlinePlus } from 'react-icons/ai'
const SubscriptionInfo = ({ sub }) => {
  return (
    <div className="list-container">
      <div className="list-header">
        <IoIosArrowDown
          size="25px"
          style={{
            transform: `rotate(90deg)`,
          }}
        />
        <h2>New Subscription</h2>
        
        <h3>Add</h3>
      </div>
      <div className="newsub-container">
        <div>{sub.name}</div>
      </div>
    </div>
  )
}
const AllSubs = ({ setSelectedSub }) => {
  return (
    <div className="list-container">
      <div className="list-header">
        <IoIosArrowDown size="25px" />
        <h2>Add Subscription</h2>
        <GoSearch size="25px" />
      </div>
      <div className="sublist-container">
        {Data.map((data) => (
          <div
            onClick={() => setSelectedSub(data)}
            className="sublist-item"
            key={data.id}
            style={{ border: `2px solid ${data.color}`, borderRadius: '5px' }}
          >
            <div className="sub-logo">
              <img src={data.logo} alt="logo" className="sub-img"></img>
              <h3 style={{ color: `${data.color}` }}>{data.name}</h3>
            </div>
            <AiOutlinePlus
              className="nav-btn"
              style={{ color: `${data.color}` }}
            />
          </div>
        ))}
      </div>
      <button className="create-sub">Create custom subscription</button>
    </div>
  )
}
const SubscriptionList = () => {
  const [selectedSub, setSelectedSub] = useState(null)
  console.log(selectedSub)
  if (selectedSub) return <SubscriptionInfo sub={selectedSub} />
  return <AllSubs setSelectedSub={setSelectedSub} />
}

export default SubscriptionList
