"use client"

import React, { useState } from 'react'

export default function RootLayout(props: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        {props.children}
      </body>
    </html>
  )
}
