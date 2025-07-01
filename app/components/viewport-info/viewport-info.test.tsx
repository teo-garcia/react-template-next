// Jest environment removed - tests disabled
// import { act, fireEvent, render, screen } from '@testing-library/react'
// import { isDevelopment } from '@/lib/misc/environment'
// import { ViewportInfo } from './viewport-info'

export {}

// Tests disabled - Jest environment removed
// describe.skip('<ViewportInfo /> tests', () => {
//   test('It should render initial width and height', () => {
//     render(<ViewportInfo />)
//     const initialWidth = window.innerWidth
//     const initialHeight = window.innerHeight
//     expect(
//       screen.getByText(`${initialWidth} x ${initialHeight}`)
//     ).toBeInTheDocument()
//   })

//   test('It should update width and height on window resize', () => {
//     render(<ViewportInfo />)
//     const newWidth = 800
//     const newHeight = 600

//     act(() => {
//       window.innerWidth = newWidth
//       window.innerHeight = newHeight
//     })

//     fireEvent(window, new Event('resize'))

//     expect(screen.getByText(`${newWidth} x ${newHeight}`)).toBeInTheDocument()
//   })

//   test('It should not render in production mode', () => {
//     // This test required mocking which is not available without Jest
//     render(<ViewportInfo />)
//     const initialWidth = window.innerWidth
//     const initialHeight = window.innerHeight
//     expect(
//       screen.queryByText(`${initialWidth} x ${initialHeight}`)
//     ).not.toBeInTheDocument()
//   })
// })
