// Sites, screen sizes and texts shared by the specs

export const urls = new Map([
  ['live', Cypress.env('LIVE_URL')],
  ['dev', Cypress.env('DEV_URL')],
])

export const sizes = new Map([
  ['desktop', [1000, 660]],
  // ['mobile', 'iphone-x'],
])

export const SERVER_ERROR = 'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'

// abbreviation typed into the tool and its expected expansion
export const ABBREVIATION = 'חכ"א'
export const EXPANSION = 'חכמים אומרים'
