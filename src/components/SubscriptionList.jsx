import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoIosArrowDown } from 'react-icons/io'
import Data from '../data.json'
import { AiOutlinePlus } from 'react-icons/ai'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
const CssTextField = styled(TextField)({
  '& .MuiSvgIcon-root': { color: 'whitesmoke' },
  '& .MuiInputBase-input': { color: 'whitesmoke' },
  label: { color: 'whitesmoke' },
  '& label.Mui-focused': {
    color: 'whitesmoke',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'whitesmoke',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'whitesmoke',
    },
    '&:hover fieldset': {
      borderColor: 'whitesmoke',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'whitesmoke',
    },
  },
})
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'RSD',
    label: 'РСД',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]
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
      <div
        className="newsub-container"
        style={{ backgroundColor: `${sub.color}` }}
      >
        <div className="sub-pricing">
          <img src={sub.logo} alt="logo" className="price-img"></img>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100px' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <CssTextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="EUR"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </CssTextField>
            </div>
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <CssTextField
              id="outlined-basic"
              label="Price"
              type="number"
              variant="outlined"
            />
          </Box>
        </div>
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
