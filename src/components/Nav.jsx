import React from 'react'
import { useState } from 'react'
import { CiSettings } from 'react-icons/ci'
import { GrAdd } from 'react-icons/gr'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import SubscriptionList from './SubscriptionList'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
}

const CustomButton = styled(Button)(({ theme }) => ({
  padding: 0,
  minWidth: 24,
}))

export default function Nav() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <nav>
      <div className="nav-container">
        <CiSettings className="nav-btn" />
        <button className="allsubs">All Subscriptions</button>
        <CustomButton onClick={handleOpen}>
          <GrAdd className="nav-btn" />
        </CustomButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SubscriptionList />
          </Box>
        </Modal>
      </div>
    </nav>
  )
}
