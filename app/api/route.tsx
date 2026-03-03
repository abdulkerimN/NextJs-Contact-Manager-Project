import { NextResponse } from 'next/server'
import React from 'react'

export  function GET() {
  return  NextResponse.json(
    {
message:"this is API route",
status:"success"
}
  )
}
