import { NextResponse } from 'next/server'

const GET = () => {
  const data = { title: 'React Template Next' }
  return NextResponse.json(data)
}

export { GET }
